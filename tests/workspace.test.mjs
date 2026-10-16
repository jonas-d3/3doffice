import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as layout from '../src/layout.mjs';
import { canStand, moveWithCollisions } from '../src/movement.mjs';

function route(points) {
  let [x, z] = points[0];
  assert.ok(canStand(x, z));
  for (const [nextX, nextZ] of points.slice(1)) {
    const p = moveWithCollisions(x, z, nextX - x, nextZ - z);
    assert.ok(Math.hypot(p.x - nextX, p.z - nextZ) < 1e-7, `Blocked on route to ${nextX}, ${nextZ}`);
    x = p.x; z = p.z;
  }
}

test('Kontoret uses the printed 17.758 × 6.970 metre footprint', () => {
  const room = layout.workspace;
  assert.ok(room);
  assert.ok(Math.abs(room.maxX - room.minX - 17.758) < 1e-7);
  assert.ok(Math.abs(room.maxZ - room.minZ - 6.970) < 1e-7);
  assert.ok(room.minZ > layout.lobby.maxZ);
});

test('walk from the kitchen through the small hall into Kontoret and back', () => {
  route([[6.4, 15.95], [2, 15.95], [2, 20.4], [15.9, 20.4], [2, 20.4], [2, 15.95], [6.4, 15.95]]);
  assert.equal(layout.walkingLocation(2, 20.4), 'Kontoret');
  assert.equal(layout.walkingLocation(15.9, 20.4), 'Kontoret');
});

test('thick doorway jambs, exterior walls and the kitchen wall remain solid', () => {
  for (const point of [[1.51, 17], [2.49, 17], [3, 17], [8, 17], [-.6, 21], [17.4, 21], [8, 24.5]]) {
    assert.equal(canStand(...point), false, `Wall ${point}`);
  }
});

test('video desk islands block movement while their connecting aisles stay clear', () => {
  for (const point of [[1.8, 22.3], [5.8, 22.3], [9.8, 22.3], [13.6, 22.3], [5.8, 18.6], [9.8, 18.6], [13.6, 18.6]]) {
    assert.equal(canStand(...point), false, `Desk ${point}`);
  }
  route([[3.8, 20.4], [3.8, 22.6], [3.8, 20.4], [7.8, 20.4], [7.8, 22.6], [7.8, 20.4]]);
});

test('desk aisles leave room to walk on either side of their centre line', () => {
  for (const x of [3.4, 4.2, 7.4, 8.2]) {
    route([[x, 20.4], [x, 22.6], [x, 20.4]]);
  }
  route([[2, 20.6], [14.3, 20.6], [2, 20.6]]);
});

test('diagonal timber braces and end-wall posts stop the camera at body height', () => {
  for (const point of [[3.8, 23.0], [7.8, 23.0], [11.8, 23.0], [-.3, 21.35]]) assert.equal(canStand(...point), false, `Timber ${point}`);
});
