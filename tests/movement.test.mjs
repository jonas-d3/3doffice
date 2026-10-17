import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canStand, canWalkBetween, moveWithCollisions, obstacles, setRestroomDoorClosure } from '../src/movement.mjs';
import { walkingLocation, spaceInvaders, minecraft, kitchen, meeting2 } from '../src/layout.mjs';
import { planPoint } from '../src/placement.mjs';
import { lobbyPreset } from '../src/lobby-layout.mjs';
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-7, `${a} ≠ ${b}`);
function route(points) {
  let p = { x: points[0][0], z: points[0][1] };
  assert.ok(canStand(p.x, p.z), `Start ${p.x},${p.z}`);
  for (const [x, z] of points.slice(1)) {
    p = moveWithCollisions(p.x, p.z, x - p.x, z - p.z);
    close(p.x, x); close(p.z, z);
  }
  return p;
}

test('all walking camera presets start on clear floor', () => {
  for (const p of [[lobbyPreset.x, lobbyPreset.z], [5.585, 5.55], [5.585, 6.9], [6.9, 9.6], [6.4, 15.2], [.48, 10.55]]) assert.ok(canStand(...p), `Preset ${p}`);
});
test('walk from MØDE 4 down the entire corridor into the kitchen and back', () => {
  route([[5.585, 5.55], [5.585, 14.2], [5.585, 5.55]]);
});
test('enter Minecraft at its staggered doorway and walk around the table', () => {
  route([[5.585, 7.85], [4.35, 7.85], [4.35, 10.55], [.48, 10.55], [4.35, 10.55], [4.35, 7.85], [5.585, 7.85]]);
});
test('the toilet foyer is reached further down the corridor than Minecraft', () => {
  route([[5.585, 7.85], [5.585, 9.6], [6.9, 9.6], [5.585, 9.6]]);
  assert.equal(canStand(6.235, 7.85), false);
  assert.equal(canStand(4.935, 9.6), false);
});
test('both compact toilets remain reachable through their own doors', () => {
  route([[6.9, 9.6], [6.9, 7.85], [6.9, 9.6], [6.9, 10.8], [6.9, 9.6]]);
});
test('Davids closed toilet door blocks entry and reopens without trapping him or blocking the foyer', () => {
  const outside = { x: 6.86, z: 9.605 }, inside = { x: 6.86, z: 10.82 };
  try {
    assert.ok(canWalkBetween(outside, inside, .3));
    for (const closure of [.25, .5, .75, 1]) {
      setRestroomDoorClosure(closure);
      assert.ok(canStand(inside.x, inside.z, .3), 'David stays clear of the swinging door');
      assert.ok(canWalkBetween({ x: 5.585, z: 9.3 }, { x: 5.585, z: 10 }), 'The corridor remains clear');
    }
    assert.equal(canWalkBetween(outside, inside, .3), false, 'Cached clearance follows the closed door');
    assert.ok(moveWithCollisions(outside.x, outside.z, 0, 1.215).z < 10.255);
    setRestroomDoorClosure(0);
    assert.ok(canWalkBetween(inside, outside, .3), 'Reopening restores the exit route');
    route([[5.585, 9.6], [6.9, 9.6], [6.9, 10.8], [6.9, 9.6], [5.585, 9.6]]);
  } finally {
    setRestroomDoorClosure(0);
  }
});
test('the kitchen side opening now connects to the lobby below MØDE 2', () => {
  route([[6.4, 15.2], [6.4, 15.95], [4.5, 15.95], [.4, 15.95], [6.4, 15.95]]);
});
test('the kitchen aisle reaches the sink without passing through the counter', () => {
  route([[5.585, 14.2], [6.4, 14.2], [6.4, 14.6], [10.3, 14.6]]);
  const blocked = moveWithCollisions(9, 14.5, 0, -3);
  assert.ok(blocked.z > 14.1 && blocked.z < 14.5);
});
test('MØDE 2 is reserved but cannot be entered through its closed doors', () => {
  assert.equal(canStand((meeting2.minX + meeting2.maxX) / 2, 13), false);
  assert.ok(moveWithCollisions(5.585, 12, -5, 0).x > 5.2);
  assert.ok(moveWithCollisions(2.75, 15.7, 0, -3).z > 15.17);
});
test('door jambs and the walls beside all openings stay solid', () => {
  for (const p of [[5.04, 6.3], [6.13, 6.3], [4.935, 7.42], [4.935, 8.3], [6.235, 9.17], [6.235, 10.04], [6.49, 8.555], [7.23, 10.255], [4.935, 15.22]]) assert.equal(canStand(...p), false, `Jamb ${p}`);
});
test('all furnished room boundaries block leaving the model', () => {
  for (const room of [spaceInvaders, minecraft, kitchen]) {
    assert.equal(canStand(room.minX - .3, (room.minZ + room.maxZ) / 2), false);
  }
  assert.equal(canStand(NaN, 0), false);
  assert.equal(canStand(0, Infinity), false);
});
test('furniture collision footprints move with the scaled room models', () => {
  for (const [left, right, back, front] of obstacles) assert.equal(canStand((left + right) / 2, (back + front) / 2), false);
});
test('large steps cannot tunnel through the Space Invaders meeting table', () => {
  const start = planPoint('office', 0, 0);
  const end = moveWithCollisions(start.x, start.z, -6, 0);
  assert.ok(end.x > 3.35 && end.x < start.x);
  assert.ok(canStand(end.x, end.z));
});
test('diagonal motion slides along the meeting furniture', () => {
  const start = planPoint('office', 0, 0);
  const end = moveWithCollisions(start.x, start.z, -1, -1);
  assert.ok(end.x > 3.35);
  close(end.z, start.z - 1);
});
test('a large move cannot cross the exterior wall', () => {
  const end = moveWithCollisions(4, 2, 0, -20);
  assert.ok(end.z >= .17 && end.z < .25);
  assert.ok(canStand(end.x, end.z));
});
test('locations use room bounds, including the lobby on the kitchen side', () => {
  assert.equal(walkingLocation(4, 2), 'Space Invaders · MØDE 4');
  assert.equal(walkingLocation(2, 8), 'Minecraft · MØDE 3');
  assert.equal(walkingLocation(5.585, 10), 'Toiletgangen');
  assert.equal(walkingLocation(6.9, 9.6), 'Toiletentré');
  assert.equal(walkingLocation(6.9, 7.85), 'Venstre toilet');
  assert.equal(walkingLocation(6.9, 10.8), 'Højre toilet');
  assert.equal(walkingLocation(8, 15), 'Køkken');
  assert.equal(walkingLocation(2, 15.7), 'Lille gang ved køkkenet');
});

test('the small kitchen corridor keeps a clear aisle past the cabinet and coat rack', () => {
  route([[6.4, 15.7], [4.55, 15.95], [.55, 15.95], [4.55, 15.95], [6.4, 15.7]]);
  for (const p of [[3.5, 15.25], [1.5, 15.3], [.02, 15.8]]) assert.equal(canStand(...p), false, `Hall furniture ${p}`);
});
test('the hallway cabinet and coats stop sideways movement without blocking the aisle', () => {
  const cabinet = moveWithCollisions(3.5, 15.95, 0, -2);
  assert.ok(cabinet.z > 15.55 && cabinet.z < 15.8);
  const coats = moveWithCollisions(1.5, 15.95, 0, -2);
  assert.ok(coats.z > 15.55 && coats.z < 15.85);
});
