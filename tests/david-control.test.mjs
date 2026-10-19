import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { davidButtons, createDirectorState, decide } from '../src/screens/david-director.mjs';
import { hitDavidAction, installDavidControl } from '../src/screens/david-screen-control.mjs';

const rect = { left: 0, top: 0, width: 1200, height: 800 };
function setup() {
  const scene = new THREE.Scene(), desk = new THREE.Group(); scene.add(desk);
  desk.position.set(2, 1, 3); desk.rotation.y = .4;
  const displays = [0, 1].map(i => {
    const display = new THREE.Mesh(new THREE.PlaneGeometry(.602, .332), new THREE.MeshBasicMaterial());
    display.position.x = (i - .5) * .68; desk.add(display); return display;
  });
  scene.updateMatrixWorld(true);
  const camera = new THREE.PerspectiveCamera(45, 1.5, .01, 100);
  camera.position.copy(desk.position).add(new THREE.Vector3(0, 0, 2).transformDirection(desk.matrixWorld).multiplyScalar(2));
  camera.lookAt(desk.position); camera.updateMatrixWorld();
  const screens = { displays, state: createDirectorState(), act(action) { return decide(this.state, action); } };
  function point(index = 0) {
    const b = davidButtons[index], p = new THREE.Vector3(((b.x + b.width / 2) / 1024 - .5) * .602, (.5 - (b.y + b.height / 2) / 565) * .332, 0);
    displays[b.screen].localToWorld(p); p.project(camera);
    return { clientX: (p.x + 1) * 600, clientY: (1 - p.y) * 400 };
  }
  return { scene, desk, camera, screens, point };
}

test('picking targets both transformed screens and respects walls, hidden parents, back faces and distance', () => {
  const s = setup(), hit = index => hitDavidAction(s.screens, s.camera, s.scene, s.point(index), rect);
  davidButtons.forEach((b, i) => assert.equal(hit(i), b.action));
  const wall = new THREE.Mesh(new THREE.BoxGeometry(3, 3, .05), new THREE.MeshBasicMaterial());
  wall.position.copy(s.camera.position).lerp(s.desk.position, .5); wall.quaternion.copy(s.desk.quaternion); s.scene.add(wall);
  assert.equal(hit(0), undefined); wall.visible = false; assert.equal(hit(0), 'approve');
  s.desk.visible = false; assert.equal(hit(0), undefined); s.desk.visible = true;
  s.camera.position.copy(s.desk.position).add(new THREE.Vector3(0, 0, -2).applyQuaternion(s.desk.quaternion));
  s.camera.lookAt(s.desk.position); s.camera.updateMatrixWorld(); assert.equal(hit(0), undefined);
  s.camera.position.copy(s.desk.position).add(new THREE.Vector3(0, 0, 9).applyQuaternion(s.desk.quaternion));
  s.camera.lookAt(s.desk.position); s.camera.updateMatrixWorld(); assert.equal(hit(0), undefined);
});

function interaction() {
  const s = setup(), canvas = new EventTarget(), events = new EventTarget(); let blocked = false, renders = 0;
  Object.assign(canvas, { focus() {}, getBoundingClientRect: () => rect, setPointerCapture() {}, hasPointerCapture: () => false });
  installDavidControl(canvas, s.camera, s.scene, () => s.screens, () => blocked, () => { renders++; }, events);
  function fire(type, extra = {}, index = 0) {
    const event = new Event(type, { cancelable: true });
    Object.assign(event, s.point(index), { pointerId: 1, isPrimary: true, button: 0 }, extra); canvas.dispatchEvent(event);
  }
  return { ...s, fire, events, block: () => { blocked = true; }, get renders() { return renders; } };
}

test('completed clicks update both monitors; drag, different button, multitouch, cancellations and blocked UI do not', () => {
  const click = interaction(); click.fire('pointerdown'); click.fire('pointerup');
  assert.equal(click.screens.state.dill, true); assert.equal(click.renders, 1);
  for (const cancel of ['drag', 'other-button', 'multi', 'pointercancel', 'lostpointercapture', 'blur', 'blocked', 'camera']) {
    const s = interaction(); s.fire('pointerdown');
    if (cancel === 'drag') s.fire('pointermove', { clientX: 1 });
    else if (cancel === 'multi') s.fire('pointerdown', { pointerId: 2, isPrimary: false });
    else if (cancel === 'blur') s.events.dispatchEvent(new Event('blur'));
    else if (cancel === 'blocked') s.block();
    else if (cancel === 'camera') s.camera.position.x += .01;
    else if (cancel !== 'other-button') s.fire(cancel);
    s.fire('pointerup', {}, cancel === 'other-button' ? 1 : 0);
    assert.equal(s.screens.state.approved, 0, cancel); assert.equal(s.renders, 0, cancel);
  }
});

test('keyboard actions work only for visible reachable buttons, without repeats or modifier shortcuts', () => {
  const s = interaction();
  s.fire('keydown', { code: 'Digit1', repeat: true }); s.fire('keydown', { code: 'Digit1', ctrlKey: true });
  assert.equal(s.renders, 0);
  s.fire('keydown', { code: 'Digit1' }); assert.equal(s.screens.state.dill, true);
  s.fire('keydown', { code: 'KeyF' }); assert.equal(s.screens.state.friday, true);
  s.fire('keydown', { code: 'Digit3' }); assert.equal(s.screens.state.billed, 0);
  s.fire('keydown', { code: 'KeyF' }); assert.equal(s.screens.state.friday, false);
  s.desk.visible = false; s.fire('keydown', { code: 'Digit1' }); assert.equal(s.screens.state.approved, 0);
});
