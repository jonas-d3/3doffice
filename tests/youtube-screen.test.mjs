import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene } from 'three';
import { createScreenVisibility } from '../src/youtube-screen-visibility.mjs';

function setup() {
  const scene = new Scene();
  const screen = new Mesh(new PlaneGeometry(.602, .332), new MeshBasicMaterial());
  scene.add(screen);
  const camera = new PerspectiveCamera(60, 1.5, .05, 100);
  const visible = createScreenVisibility(screen, scene);
  function look(x, y, z) {
    camera.position.set(x, y, z); camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld(); scene.updateMatrixWorld(true);
  }
  look(0, 0, 1);
  return { scene, screen, camera, visible, look };
}

test('shows the player only near the front of an on-screen monitor', () => {
  const { camera, visible, look } = setup();
  assert.equal(visible(camera), true);
  look(0, 0, -1);
  assert.equal(visible(camera), false, 'The monitor back must not show an iframe');
  look(0, 0, 9);
  assert.equal(visible(camera), false, 'Do not load players across the room');
  look(0, 0, 1);
  camera.lookAt(0, 0, 2); camera.updateMatrixWorld();
  assert.equal(visible(camera), false, 'Hide the iframe when looking away');
});

test('walls and partial occlusion hide the HTML overlay; hidden walls do not', () => {
  const { camera, scene, visible } = setup();
  const wall = new Group();
  const blocker = new Mesh(new BoxGeometry(.15, .3, .05), new MeshBasicMaterial());
  blocker.position.set(.14, 0, .5); wall.add(blocker); scene.add(wall);
  scene.updateMatrixWorld(true);
  assert.equal(visible(camera), false, 'Even a blocked corner must not paint over furniture');
  wall.visible = false;
  assert.equal(visible(camera), true);
});

test('follows the screen through desk position and rotation', () => {
  const { camera, screen, scene, visible } = setup();
  const desk = new Group(); scene.add(desk); desk.add(screen);
  desk.position.set(10, 1.17, 22); desk.rotation.y = Math.PI / 2;
  camera.position.set(11, 1.17, 22); camera.lookAt(desk.position);
  camera.updateMatrixWorld(); scene.updateMatrixWorld(true);
  assert.equal(visible(camera), true);
  desk.visible = false;
  assert.equal(visible(camera), false);
});
