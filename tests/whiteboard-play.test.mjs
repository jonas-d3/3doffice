import test from 'node:test';
import assert from 'node:assert/strict';
import { WalkInInvaders } from '../src/whiteboard-play.mjs';
import { SoundShotDetector } from '../src/sound-shots.mjs';

const drawing = [
  [[350, 620], [350, 720]],
  [[350, 720], [450, 720]],
  [[450, 720], [450, 620]],
  [[350, 620], [450, 620]],
  [[390, 600], [400, 590], [410, 600]],
];
function drawShip(play, lateral) { drawing.forEach(stroke => play.addStroke(stroke, lateral)); }

test('starts on the fifth completed stroke, regardless of shape or disconnected lines', () => {
  const play = new WalkInInvaders();
  drawing.slice(0, 4).forEach((stroke, i) => {
    assert.equal(play.addStroke(stroke, 2), true);
    assert.equal(play.drawing.length, i + 1);
    assert.equal(play.game.status, 'ready'); assert.equal(play.ship.length, 0);
  });
  assert.equal(play.addStroke(drawing[4], 2), true);
  assert.equal(play.game.status, 'running'); assert.equal(play.ship.length, 5);
  assert.equal(play.drawing.length, 0);
  assert.equal(play.addStroke(drawing[0], 2), false, 'cannot draw during a round');
});

test('the ship keeps every separate stroke, point, and proportion without closing open lines', () => {
  const play = new WalkInInvaders(); drawShip(play, 0);
  const scale = 48 / 130;
  const expected = drawing.map(stroke => stroke.map(([x, y]) => [(x - 400) * scale, (y - 655) * scale - 2]));
  assert.deepEqual(play.ship, expected);
  assert.notDeepEqual(play.ship[4][0], play.ship[4].at(-1), 'open antenna stays open');
});

test('taps and malformed strokes do not count; five straight lines are a valid ship', () => {
  const play = new WalkInInvaders();
  for (const stroke of [[], [[1, 2]], [[1, 2], [1, 2]], [[1, 2], [NaN, 3]], Array(513).fill([1, 2])]) {
    assert.equal(play.addStroke(stroke, 0), false);
    assert.equal(play.drawing.length, 0);
  }
  for (let i = 0; i < 5; i++) assert.equal(play.addStroke([[300, 650], [340, 650]], 0), true);
  assert.equal(play.game.status, 'running');
  assert.ok(play.ship.flat(2).every(Number.isFinite));
});

test('finished strokes survive walking away while drawing', () => {
  const play = new WalkInInvaders(); play.addStroke(drawing[0], 0);
  const saved = structuredClone(play.drawing);
  play.update(.1, false, 10);
  assert.deepEqual(play.drawing, saved); assert.equal(play.game.status, 'ready');
});

test('drawing is required, silence does not fire, and walking steers the ship', () => {
  const play = new WalkInInvaders(() => .5);
  play.update(.1, true, 0);
  assert.equal(play.game.status, 'ready'); assert.equal(play.game.shots.length, 0);
  drawShip(play, 2);
  play.update(1 / 60, true, 2);
  assert.equal(play.game.shots.filter(shot => !shot.enemy).length, 0);
  play.update(.1, true, 2.2); assert.ok(play.game.playerX > 400);
  play.update(.1, true, 1.8); assert.ok(play.game.playerX < 400);
  const x = play.game.playerX;
  play.update(.1, true, 1.8); assert.equal(play.game.playerX, x, 'turning without moving cannot steer');
  play.update(.1, true, 20); assert.equal(play.game.playerX, 745);
});

test('a sound fires exactly once, including at frame rates above the simulation rate', () => {
  const play = new WalkInInvaders(() => .5); drawShip(play, 0);
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

test('every detected shot in a sustained salvo reaches the game at different frame rates', () => {
  for (const fps of [30, 60, 144]) {
    const play = new WalkInInvaders(() => .5); drawShip(play, 0);
    play.game.shields = []; play.game.marchIn = 100;
    play.game.aliens.forEach(alien => { alien.x = 50; });
    const detector = new SoundShotDetector();
    for (let i = 0; i < fps; i++) detector.update(1 / fps, .004);
    let detected = 0;
    for (let i = 0; i < Math.round(fps * .6); i++) {
      const fire = detector.update(1 / fps, .1);
      if (fire) detected++;
      play.update(1 / fps, true, 0, { fire });
    }
    play.update(1 / 120, true, 0);
    assert.ok(detected >= 5, `${fps} fps should produce a salvo`);
    assert.equal(play.game.shots.filter(shot => !shot.enemy).length, detected, `${fps} fps must not drop shots`);
  }
});

test('walking away freezes play; returning resumes without jumping or losing the drawing', () => {
  const play = new WalkInInvaders(() => .5); drawShip(play, 2);
  play.update(.1, true, 2.2);
  play.update(.1, false, 9);
  const paused = JSON.stringify(play.game), ship = play.ship, x = play.game.playerX;
  for (let i = 0; i < 30; i++) play.update(.1, false, 10);
  assert.equal(JSON.stringify(play.game), paused); assert.equal(play.game.status, 'paused');
  play.update(.1, true, 5);
  assert.equal(play.game.status, 'running'); assert.equal(play.game.playerX, x); assert.equal(play.ship, ship);
  play.update(.1, true, 4.8); assert.ok(play.game.playerX < x);
});

test('after a finished game, five new strokes start a fresh round', () => {
  const play = new WalkInInvaders(() => .5); drawShip(play, 0);
  play.game.status = 'over'; play.game.score = 150; play.game.lives = 0;
  play.update(.1, true, 0); assert.equal(play.game.status, 'over');
  drawing.slice(0, 4).forEach(stroke => play.addStroke(stroke, 1));
  assert.equal(play.game.status, 'over');
  play.addStroke(drawing[4], 1);
  assert.equal(play.game.score, 0); assert.equal(play.game.lives, 3); assert.equal(play.game.playerX, 400);
});
