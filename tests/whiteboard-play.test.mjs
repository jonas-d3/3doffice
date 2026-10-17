import test from 'node:test';
import assert from 'node:assert/strict';
import { recognizeTriangle, WalkInInvaders } from '../src/whiteboard-play.mjs';

function trace(vertices, wobble = 0) {
  const points = [];
  for (let edge = 0; edge < vertices.length - 1; edge++) {
    const a = vertices[edge], b = vertices[edge + 1];
    for (let i = 0; i < 15; i++) {
      const t = i / 15;
      points.push([a[0] + (b[0] - a[0]) * t + Math.sin(i * 2) * wobble, a[1] + (b[1] - a[1]) * t + Math.cos(i * 3) * wobble]);
    }
  }
  points.push(vertices.at(-1));
  return points;
}
const triangle = trace([[400, 610], [490, 750], [310, 750], [400, 610]], 3);

test('recognizes a wobbly hand-drawn triangle and preserves its outline as the ship', () => {
  const ship = recognizeTriangle(triangle);
  assert.ok(ship); assert.ok(ship.length > 3);
  assert.ok(Math.max(...ship.map(p => p[0])) <= 29);
  assert.ok(Math.min(...ship.map(p => p[1])) >= -27);
  assert.ok(recognizeTriangle([...triangle].reverse()), 'either drawing direction works');
});

test('accepts starting midway along an edge and a small gap at the end', () => {
  assert.ok(recognizeTriangle(trace([[355, 680], [400, 610], [490, 750], [310, 750], [350, 688]], 2)));
});

test('a tap, line, open V, rectangle, circle, or tiny doodle cannot start a game', () => {
  for (const vertices of [
    [[400, 650], [400, 650]],
    [[300, 700], [500, 700], [300, 700]],
    [[310, 750], [400, 610], [490, 750]],
    [[300, 600], [500, 600], [500, 750], [300, 750], [300, 600]],
    [[400, 650], [405, 660], [395, 660], [400, 650]],
  ]) assert.equal(recognizeTriangle(trace(vertices)), null);
  const circle = Array.from({ length: 80 }, (_, i) => [400 + Math.cos(i / 79 * Math.PI * 2) * 90, 680 + Math.sin(i / 79 * Math.PI * 2) * 90]);
  assert.equal(recognizeTriangle(circle), null);
});

test('drawing is required, silence does not fire, and walking steers the ship', () => {
  const play = new WalkInInvaders(() => .5);
  play.update(.1, true, 0);
  assert.equal(play.game.status, 'ready'); assert.equal(play.game.shots.length, 0);
  assert.equal(play.launch([[0, 0]], 2), false);
  assert.equal(play.launch(triangle, 2), true);
  play.update(1 / 60, true, 2);
  assert.equal(play.game.shots.filter(shot => !shot.enemy).length, 0);
  play.update(.1, true, 2.2); assert.ok(play.game.playerX > 400);
  play.update(.1, true, 1.8); assert.ok(play.game.playerX < 400);
  const x = play.game.playerX;
  play.update(.1, true, 1.8); assert.equal(play.game.playerX, x, 'turning without moving cannot steer');
  play.update(.1, true, 20); assert.equal(play.game.playerX, 745);
});

test('a sound fires exactly once, including at frame rates above the simulation rate', () => {
  const play = new WalkInInvaders(() => .5); play.launch(triangle, 0);
  play.game.shields = []; play.game.marchIn = 100;
  play.game.aliens.forEach(alien => { alien.x = 50; });
  play.update(1 / 240, true, 0, { fire: true });
  play.update(1 / 240, true, 0);
  assert.equal(play.game.shots.filter(shot => !shot.enemy).length, 1);
  for (let i = 0; i < 40; i++) play.update(1 / 60, true, 0);
  assert.equal(play.game.shots.filter(shot => !shot.enemy).length, 1, 'silence never repeats a shot');
  play.update(1 / 60, false, 0, { fire: true });
  play.update(1 / 60, true, 0);
  assert.equal(play.game.shots.filter(shot => !shot.enemy).length, 1, 'no queued shot survives walking away');
});

test('walking away freezes play; returning resumes without jumping or losing the drawing', () => {
  const play = new WalkInInvaders(() => .5); play.launch(triangle, 2);
  play.update(.1, true, 2.2);
  play.update(.1, false, 9);
  const paused = JSON.stringify(play.game), ship = play.ship, x = play.game.playerX;
  for (let i = 0; i < 30; i++) play.update(.1, false, 10);
  assert.equal(JSON.stringify(play.game), paused); assert.equal(play.game.status, 'paused');
  play.update(.1, true, 5);
  assert.equal(play.game.status, 'running'); assert.equal(play.game.playerX, x); assert.equal(play.ship, ship);
  play.update(.1, true, 4.8); assert.ok(play.game.playerX < x);
});

test('after a finished game, a fresh triangle starts a fresh round', () => {
  const play = new WalkInInvaders(() => .5); play.launch(triangle, 0);
  play.game.status = 'over'; play.game.score = 150; play.game.lives = 0;
  play.update(.1, true, 0); assert.equal(play.game.status, 'over');
  assert.equal(play.launch(triangle, 1), true);
  assert.equal(play.game.score, 0); assert.equal(play.game.lives, 3); assert.equal(play.game.playerX, 400);
});
