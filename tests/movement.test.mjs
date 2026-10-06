import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canStand, moveWithCollisions } from '../src/movement.mjs';
import { walkingLocation } from '../src/layout.mjs';

test('entrance and middle aisle are walkable, furniture and outside walls are not', () => {
  for (const [x, z] of [[.65, 2.5], [0, 0], [0, -2], [.5, 1], [1.05, 4]]) assert.ok(canStand(x, z));
  for (const [x, z] of [[-1.8, 0], [3, 0], [1.8, 0], [4, 0], [0, 6], [NaN, 0]]) assert.equal(canStand(x, z), false);
});
test('walking down the aisle changes position freely', () => {
  const position = moveWithCollisions(0, 1.5, 0, -1);
  assert.ok(Math.abs(position.z - .5) < 1e-8);
  assert.equal(position.x, 0);
});
test('a large step cannot tunnel through the conference table', () => {
  const position = moveWithCollisions(0, 0, -6, 0);
  assert.ok(position.x > -.41 && position.x <= 0);
  assert.ok(canStand(position.x, position.z));
});
test('diagonal movement slides along furniture', () => {
  const position = moveWithCollisions(0, 0, -1, -1);
  assert.ok(position.x > -.41);
  assert.ok(position.z < -.95);
});
test('room boundaries retain the camera even on a large step', () => {
  const position = moveWithCollisions(0, 0, 0, -10);
  assert.ok(position.z > -3.24);
  assert.ok(canStand(position.x, position.z));
});

test('walk through the office doorway into the corridor and back', () => {
  const outside = moveWithCollisions(1.05, 2.5, 0, 1.85);
  assert.ok(Math.abs(outside.z - 4.35) < 1e-8);
  const inside = moveWithCollisions(outside.x, outside.z, 0, -1.85);
  assert.ok(Math.abs(inside.z - 2.5) < 1e-8);
});

test('walk straight out of the office to the far end and return without turning', () => {
  const end = moveWithCollisions(1.05, 2.5, 0, 8.5);
  assert.equal(end.x, 1.05);
  assert.ok(Math.abs(end.z - 11) < 1e-8);
  assert.ok(canStand(end.x, end.z));
  const inside = moveWithCollisions(end.x, end.z, 0, -8.5);
  assert.ok(Math.abs(inside.z - 2.5) < 1e-8);
});

test('the wall beside the door remains solid in both directions', () => {
  const fromOffice = moveWithCollisions(2, 2.5, 0, 3);
  assert.ok(fromOffice.z < 3.24);
  const fromHall = moveWithCollisions(.44, 4.65, 0, -3);
  assert.ok(fromHall.z > 3.76);
});

test('door jambs, corridor ends and furnishings stop the camera', () => {
  for (const point of [[.5, 3.5], [1.6, 3.5], [.3, 6], [1.8, 6], [1.05, 11.35], [.4, 7.5], [.6, 10.55], [-2, 4.65]]) {
    assert.equal(canStand(...point), false, `Blocked at ${point}`);
  }
  assert.ok(canStand(1.05, 3.5));
  const end = moveWithCollisions(1.05, 4.65, 0, 20);
  assert.ok(end.z <= 11.23 && end.z > 11.1);
});

test('enter the toilet foyer halfway down the corridor and return', () => {
  const entrance = moveWithCollisions(1.05, 7.5, 2.1, 0);
  assert.ok(Math.abs(entrance.x - 3.15) < 1e-8);
  const corridor = moveWithCollisions(entrance.x, entrance.z, -2.1, 0);
  assert.ok(Math.abs(corridor.x - 1.05) < 1e-8);
});

test('both toilets are reachable from the foyer through their own doors', () => {
  for (const dz of [-1.65, 1.55]) {
    const toilet = moveWithCollisions(3.15, 7.5, 0, dz);
    assert.ok(Math.abs(toilet.z - (7.5 + dz)) < 1e-8);
    const foyer = moveWithCollisions(toilet.x, toilet.z, 0, -dz);
    assert.ok(Math.abs(foyer.z - 7.5) < 1e-8);
  }
});

test('toilet walls and door jambs block movement outside the openings', () => {
  for (const [x, z] of [[1.95, 6.8], [1.95, 8.2], [2.3, 6.6], [3.9, 8.4], [5.2, 5.8], [3.15, 4.4]]) {
    assert.equal(canStand(x, z), false, `Blocked at ${x},${z}`);
  }
  const wall = moveWithCollisions(1.05, 6, 3, 0);
  assert.ok(wall.x <= 1.68);
});

test('basins, toilets, radiator and open door leaves have solid footprints', () => {
  for (const [x, z] of [[3.85, 7], [4.1, 7.5], [3.65, 5.1], [3.05, 10], [4.7, 5.8], [4.7, 9.2], [2.65, 6.1], [2.65, 8.9]]) {
    assert.equal(canStand(x, z), false, `Furniture at ${x},${z}`);
  }
  const toilet = moveWithCollisions(3.05, 9.05, 0, 5);
  assert.ok(toilet.z > 9.05 && toilet.z < 9.4);
});

test('location labels distinguish the office, corridor, foyer and two toilets', () => {
  assert.equal(walkingLocation(2, 1), 'Kontoret · i øjenhøjde');
  assert.equal(walkingLocation(1.05, 7.5), 'Toiletgangen');
  assert.equal(walkingLocation(3.15, 7.5), 'Toiletentré');
  assert.equal(walkingLocation(3.15, 5.85), 'Venstre toilet');
  assert.equal(walkingLocation(3.15, 9.05), 'Højre toilet');
});
