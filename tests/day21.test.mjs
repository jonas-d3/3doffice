import { test } from 'node:test';
import assert from 'node:assert/strict';
import { day21, day21Door, workspace, walkingLocation } from '../src/layout.mjs';
import { canStand, moveWithCollisions } from '../src/movement.mjs';
import { day21Preset } from '../src/day21-layout.mjs';

function route(points) {
  let [x, z] = points[0];
  assert.ok(canStand(x, z), `Start ${x}, ${z}`);
  for (const [nextX, nextZ] of points.slice(1)) {
    const p = moveWithCollisions(x, z, nextX - x, nextZ - z);
    assert.ok(Math.hypot(p.x - nextX, p.z - nextZ) < 1e-7, `Blocked to ${nextX}, ${nextZ}: ${p.x}, ${p.z}`);
    x = p.x; z = p.z;
  }
}
test('Day21 sits west of Kontoret with its printed length and aligned facade', () => {
  assert.ok(Math.abs(day21.maxX - day21.minX - 27.088) < 1e-7);
  assert.equal(day21.maxZ, workspace.maxZ);
  assert.equal(day21Door.minX, day21.maxX);
  assert.equal(day21Door.maxX, workspace.minX);
  assert.ok(canStand(day21Preset.x, day21Preset.z));
});
test('walk from Kontoret along Day21 past the staircase and return', () => {
  route([[2, 20.4], [.3, 20.4], [.3, 18.8], [-25.5, 18.8], [.3, 18.8], [.3, 20.4], [2, 20.4]]);
  assert.equal(walkingLocation(-20, 18.8), 'Day21');
});
test('the entrance jambs and outside walls remain solid', () => {
  for (const p of [[-.7, 17.97], [-.7, 19.13], [-.7, 20], [-28.2, 19], [-20, 24.5], [-20, 17.5]]) {
    assert.equal(canStand(...p), false, `Wall ${p}`);
  }
});
test('glass room, open work area and north nook are reachable without crossing glass', () => {
  route([[-4.35, 18.8], [-4.35, 21.05], [-5.7, 21.05], [-5.7, 23.4], [-5.7, 21.05], [-4.35, 21.05], [-4.35, 18.8]]);
  route([[-11.15, 18.8], [-11.15, 23.5], [-11.15, 18.8], [-5.5, 18.8], [-5.5, 16.6]]);
  route([[-15.35, 18.8], [-15.35, 17.3], [-16.7, 17.3], [-16.7, 16.1]]);
  for (const p of [[-5.5, 20.563], [-6.5, 22], [-14.5, 19.7], [-9, 22.15], [-9.1, 15.5]]) assert.equal(canStand(...p), false, `Solid ${p}`);
});
