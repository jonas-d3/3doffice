import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VisitorWalk, visitorRoute, visitorRadius } from '../src/visitor-walk.mjs';
import { canStand } from '../src/movement.mjs';
import { walkingLocation } from '../src/layout.mjs';

test('the whole visitor route has clearance for his body, including doorways and corners', () => {
  for (let i = 0; i < visitorRoute.length; i++) {
    const a = visitorRoute[i], b = visitorRoute[(i + 1) % visitorRoute.length];
    const steps = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / .02);
    for (let j = 0; j <= steps; j++) {
      const t = j / steps, x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
      assert.ok(canStand(x, z, visitorRadius), `Blocked on segment ${i} at ${x}, ${z}`);
    }
  }
});

test('the visitor tours the connected rooms and returns without crossing furniture', () => {
  const visitor = new VisitorWalk(), visited = new Set();
  let returned = false;
  for (let i = 0; i < 14000; i++) {
    const previous = { x: visitor.x, z: visitor.z };
    visitor.update(.05);
    assert.ok(canStand(visitor.x, visitor.z, visitorRadius));
    assert.ok(Math.hypot(visitor.x - previous.x, visitor.z - previous.z) <= .05);
    visited.add(walkingLocation(visitor.x, visitor.z));
    if (visited.has('Day21') && Math.hypot(visitor.x - visitorRoute[0].x, visitor.z - visitorRoute[0].z) < .05) returned = true;
  }
  for (const room of ['Space Invaders · MØDE 4', 'Toiletgangen', 'Køkken', 'Lille gang ved køkkenet', 'Kontoret', 'Day21']) assert.ok(visited.has(room), room);
  assert.ok(returned, 'Completes the round trip');
});

test('pausing freezes the position and gait; resuming continues from that position', () => {
  const visitor = new VisitorWalk();
  visitor.update(.1);
  visitor.paused = true;
  const state = [visitor.x, visitor.z, visitor.heading, visitor.distance];
  for (let i = 0; i < 100; i++) visitor.update(.05);
  assert.deepEqual([visitor.x, visitor.z, visitor.heading, visitor.distance], state);
  visitor.paused = false;
  visitor.update(.05);
  assert.ok(visitor.distance > state[3]);
});

test('movement is independent of display refresh rate and ignores invalid time steps', () => {
  const a = new VisitorWalk(), b = new VisitorWalk();
  for (let i = 0; i < 60; i++) a.update(1 / 60);
  for (let i = 0; i < 144; i++) b.update(1 / 144);
  assert.ok(Math.hypot(a.x - b.x, a.z - b.z) < .001);
  const before = [a.x, a.z, a.heading];
  for (const dt of [0, -1, NaN, Infinity]) a.update(dt);
  assert.deepEqual([a.x, a.z, a.heading], before);
});
