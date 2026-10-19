import test from 'node:test';
import assert from 'node:assert/strict';
import { HeadSteering, facePosition } from '../src/input/head-steering.mjs';

function calibrate(head, position = .5, start = 0) {
  for (let t = start; t <= start + 700; t += 100) head.observe(position, t);
}

test('calibrates in place, filters tiny movements and steers in both directions', () => {
  const head = new HeadSteering(400); calibrate(head);
  assert.equal(head.state, 'tracking');
  head.observe(.502, 800); head.update(.1, 800);
  assert.equal(head.targetX, 400);
  head.observe(.6, 900); head.update(.1, 900);
  assert.ok(head.targetX > 500 && head.targetX < 700);
  head.observe(.4, 1000); head.update(.3, 1000);
  assert.ok(head.targetX < 200);
  head.observe(1, 1100); head.update(2, 1100);
  assert.ok(head.targetX <= 745);
});

test('missing or stale faces pause tracking and recovery recenters without a jump', () => {
  const head = new HeadSteering(300); calibrate(head);
  head.observe(.6, 800); head.update(.1, 800);
  const x = head.targetX;
  head.update(.5, 1300);
  assert.equal(head.state, 'lost'); assert.equal(head.targetX, x);
  calibrate(head, .7, 1400); head.update(.1, 2100);
  assert.equal(head.state, 'tracking'); assert.equal(head.targetX, x);
  head.observe(null, 2200); assert.equal(head.state, 'lost');
});

test('recenter preserves current ship position and waits for a steady head', () => {
  const head = new HeadSteering(400); calibrate(head);
  head.recenter(240);
  for (let t = 800; t < 1800; t += 100) head.observe(t % 200 ? .3 : .7, t);
  assert.equal(head.state, 'calibrating'); assert.equal(head.targetX, 240);
  calibrate(head, .6, 1800); head.update(.1, 2500);
  assert.equal(head.state, 'tracking'); assert.equal(head.targetX, 240);
});

test('camera translation and head turns are mirrored to physical left and right', () => {
  const face = Array.from({ length: 478 }, () => ({ x: .5, y: .5 }));
  face[33].x = .4; face[263].x = .6;
  const neutral = facePosition(face);
  face[1].x = .54;
  assert.ok(facePosition(face) < neutral, 'turning left moves left');
  face[1].x = .5;
  face.forEach(point => { point.x += .1; });
  assert.ok(facePosition(face) < neutral, 'leaning left moves left');
  assert.equal(facePosition([]), null);
  face[1].x = NaN; assert.equal(facePosition(face), null);
});
