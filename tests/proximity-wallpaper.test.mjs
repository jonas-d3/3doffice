import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Group, Mesh, MeshBasicMaterial, Texture, Vector3 } from 'three';
import { createProximityWallpaper } from '../src/proximity-wallpaper.mjs';

function setup() {
  const far = new Texture(), near = new Texture();
  const material = new MeshBasicMaterial({ map: far });
  const screen = new Mesh(undefined, material);
  const update = createProximityWallpaper(screen, material, near);
  return { far, near, material, screen, update };
}

test('shows the pinup at a distance, switches near the screen, and restores it when leaving', () => {
  const { far, near, material, update } = setup();
  assert.equal(update(new Vector3(6, 0, 0)), false);
  assert.equal(material.map, far);
  assert.equal(update(new Vector3(4, 0, 0)), true);
  assert.equal(material.map, near);
  assert.equal(update(new Vector3(0, 0, 0)), false, 'An unchanged image does not request another render');
  assert.equal(update(new Vector3(5, 0, 0)), true);
  assert.equal(material.map, far);
  assert.equal(update(new Vector3(6, 0, 0)), false);
});

test('small movements around the boundary do not flicker between images', () => {
  const { far, near, material, update } = setup();
  update(new Vector3(3.9, 0, 0));
  for (const distance of [4.01, 3.99, 4.5, 4.99]) {
    assert.equal(update(new Vector3(distance, 0, 0)), false);
    assert.equal(material.map, near);
  }
  update(new Vector3(5.1, 0, 0));
  assert.equal(update(new Vector3(4.1, 0, 0)), false);
  assert.equal(material.map, far);
});

test('uses the actual screen world position, including desk transforms and camera height', () => {
  const { near, material, screen, update } = setup();
  const desk = new Group();
  desk.position.set(9.445, 0, 18.6);
  desk.rotation.y = -Math.PI / 2;
  desk.add(screen);
  screen.position.set(-.34, 1.17, -.138);
  assert.equal(update(new Vector3(9.583, 7, 18.26)), false, 'An overhead camera is still far away');
  assert.equal(update(new Vector3(8.4, 1.65, 19.5)), true);
  assert.equal(material.map, near);
  desk.position.x += 10;
  assert.equal(update(new Vector3(8.4, 1.65, 19.5)), true, 'Follows the screen if its parent moves');
});
