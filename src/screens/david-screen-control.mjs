import { Raycaster, Vector2, Vector3 } from 'three';
import { davidActionAt, davidButtons } from './david-director.mjs';

const ray = new Raycaster(), center = new Vector3(), normal = new Vector3();
function visible(object) { for (; object; object = object.parent) if (!object.visible) return false; return true; }

export function hitDavidAction(screens, camera, scene, pointer, rect) {
  if (!screens || !rect.width || !rect.height) return;
  scene.updateMatrixWorld(true); camera.updateMatrixWorld();
  ray.setFromCamera(new Vector2((pointer.clientX - rect.left) / rect.width * 2 - 1, 1 - (pointer.clientY - rect.top) / rect.height * 2), camera);
  ray.far = 8;
  // Test the tiny target set before asking the scene about occlusion.
  const hit = ray.intersectObjects(screens.displays, false).find(({ object }) => {
    if (!visible(object)) return false;
    object.getWorldPosition(center); normal.set(0, 0, 1).transformDirection(object.matrixWorld);
    return normal.dot(center.sub(camera.position)) < -.05;
  });
  if (!hit?.uv) return;
  const action = davidActionAt(screens.displays.indexOf(hit.object), hit.uv, screens.state.friday);
  if (!action) return;
  ray.far = hit.distance + .001;
  const first = ray.intersectObject(scene, true).find(({ object }) => {
    if (!visible(object)) return false;
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    return materials.some(material => material?.visible && (!material.transparent || material.opacity >= .5));
  });
  return first?.object === hit.object ? action : undefined;
}

export function installDavidControl(canvas, camera, scene, getScreens, blocked, invalidate, events = globalThis) {
  const pointers = new Set(); let gesture, claimed = false, captured;
  const consume = event => { event.preventDefault(); event.stopImmediatePropagation(); };
  const release = () => { const id = captured; captured = undefined; if (id !== undefined && canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id); };
  const cancel = () => { gesture = undefined; claimed = false; pointers.clear(); release(); };
  const hit = (screens, event) => blocked() ? undefined : hitDavidAction(screens, camera, scene, event, canvas.getBoundingClientRect());
  canvas.addEventListener('pointerdown', event => {
    pointers.add(event.pointerId);
    if (pointers.size > 1 || !event.isPrimary) { gesture = undefined; if (claimed) consume(event); return; }
    const screens = getScreens(), action = event.button === 0 && hit(screens, event);
    if (!action) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, screens, action, position: camera.position.clone(), rotation: camera.quaternion.clone() };
    claimed = true; captured = event.pointerId; consume(event); canvas.focus({ preventScroll: true }); canvas.setPointerCapture(event.pointerId);
  }, true);
  canvas.addEventListener('pointermove', event => {
    if (!claimed) return;
    consume(event);
    if (gesture && (event.pointerId !== gesture.id || Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 6)) gesture = undefined;
  }, true);
  canvas.addEventListener('pointerup', event => {
    pointers.delete(event.pointerId);
    if (!claimed) return;
    consume(event); const start = gesture; gesture = undefined;
    if (!pointers.size) { claimed = false; release(); }
    if (!start || start.id !== event.pointerId || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 6 ||
      !camera.position.equals(start.position) || camera.quaternion.angleTo(start.rotation) > .001 || getScreens() !== start.screens || hit(start.screens, event) !== start.action) return;
    if (start.screens.act(start.action)) invalidate();
  }, true);
  canvas.addEventListener('pointercancel', cancel, true);
  canvas.addEventListener('lostpointercapture', cancel, true);
  events.addEventListener('blur', cancel);
  canvas.addEventListener('keydown', event => {
    if (claimed || blocked() || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    const button = davidButtons.find(b => event.code === (b.key === 'F' ? 'KeyF' : `Digit${b.key}`));
    const screens = getScreens(), display = button && screens?.displays[button.screen];
    if (!display) return;
    // Project the real button and use the same occlusion test as pointer input.
    scene.updateMatrixWorld(true); camera.updateMatrixWorld();
    const size = display.geometry.parameters;
    const point = new Vector3(((button.x + button.width / 2) / 1024 - .5) * size.width,
      (.5 - (button.y + button.height / 2) / 565) * size.height, 0).applyMatrix4(display.matrixWorld).project(camera);
    if (Math.abs(point.x) > 1 || Math.abs(point.y) > 1 || Math.abs(point.z) > 1) return;
    const rect = canvas.getBoundingClientRect();
    if (hit(screens, { clientX: rect.left + (point.x + 1) * rect.width / 2, clientY: rect.top + (1 - point.y) * rect.height / 2 }) !== button.action) return;
    consume(event); if (screens.act(button.action)) invalidate();
  }, true);
}
