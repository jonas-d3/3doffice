import { Raycaster, Vector2, Vector3 } from 'three';
import { screenButton } from './holbech-screen-buttons.mjs';

const ray = new Raycaster(), center = new Vector3(), normal = new Vector3();
function visible(object) { for (; object; object = object.parent) if (!object.visible) return false; return true; }
function inside(object, root) { for (; object; object = object.parent) if (object === root) return true; return false; }
export function hitHolbechButton(screen, camera, scene, pointer, rect, tracking) {
  if (!screen || !visible(screen)) return false;
  scene.updateMatrixWorld(true); camera.updateMatrixWorld();
  screen.getWorldPosition(center); normal.set(0, 0, 1).transformDirection(screen.matrixWorld);
  if (camera.position.distanceToSquared(center) > 64 || normal.dot(center.sub(camera.position)) >= -.05) return false;
  ray.setFromCamera(new Vector2((pointer.clientX - rect.left) / rect.width * 2 - 1, 1 - (pointer.clientY - rect.top) / rect.height * 2), camera);
  ray.far = 8.01;
  const hit = ray.intersectObject(scene, true).find(hit => {
    if (!visible(hit.object) || hit.object !== screen && inside(hit.object, screen)) return false;
    const materials = Array.isArray(hit.object.material) ? hit.object.material : [hit.object.material];
    return materials.some(material => material?.visible && (!material.transparent || material.opacity >= .5));
  });
  return hit?.object === screen && !!hit.uv && screenButton(hit.uv, tracking);
}

// Claim only a button gesture, before OrbitControls/walking navigation receives it.
// No per-frame picking, no deferred input replay, and no change to the navigation mode.
export function installHolbechControl(canvas, camera, scene, getScreens, blocked, invalidate, events = globalThis) {
  const pointers = new Set(); let gesture, claimed = false, captured;
  const consume = event => { event.preventDefault(); event.stopImmediatePropagation(); };
  const release = () => { const id = captured; captured = undefined; if (id !== undefined && canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id); };
  const cancel = () => { gesture = undefined; claimed = false; pointers.clear(); release(); };
  const hit = (screens, event) => !blocked() && hitHolbechButton(screens?.liveDisplay, camera, scene, event, canvas.getBoundingClientRect(), screens?.tracking);
  canvas.addEventListener('pointerdown', event => {
    pointers.add(event.pointerId);
    if (pointers.size > 1 || !event.isPrimary) { gesture = undefined; if (claimed) consume(event); return; }
    const screens = getScreens();
    if (event.button !== 0 || !hit(screens, event)) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, screens, tracking: screens.tracking, position: camera.position.clone(), rotation: camera.quaternion.clone() };
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
      !camera.position.equals(start.position) || camera.quaternion.angleTo(start.rotation) > .001 || getScreens() !== start.screens ||
      start.screens.tracking !== start.tracking || !hit(start.screens, event)) return;
    start.screens.setTracking(!start.tracking); invalidate();
  }, true);
  canvas.addEventListener('pointercancel', cancel, true);
  canvas.addEventListener('lostpointercapture', cancel, true);
  events.addEventListener('blur', cancel);
}
