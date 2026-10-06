import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canStand, moveWithCollisions } from '../src/movement.mjs';

test('entrance and middle aisle are walkable, furniture and outside walls are not', () => {
  for (const [x, z] of [[.65, 2.5], [0, 0], [0, -2], [.5, 1]]) assert.ok(canStand(x, z));
  for (const [x, z] of [[-1.8, 0], [3, 0], [1.8, 0], [4, 0], [0, 4], [NaN, 0]]) assert.equal(canStand(x, z), false);
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
