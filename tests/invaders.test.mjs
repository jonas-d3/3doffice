import test from 'node:test';
import assert from 'node:assert/strict';
import { Invaders, invadersSize } from '../src/invaders.mjs';

function advance(game, seconds, input = {}) {
  for (let i = 0; i < Math.round(seconds * 120); i++) game.update(1 / 120, input);
}

test('waits for an explicit start, and pause freezes the entire board', () => {
  const game = new Invaders(() => .5);
  const initial = JSON.stringify(game);
  advance(game, 1, { fire: true, move: 1 });
  assert.equal(JSON.stringify(game), initial);
  game.start(); advance(game, .5, { move: 1, fire: true }); game.pause();
  const paused = JSON.stringify(game);
  advance(game, 2, { move: -1, fire: true });
  assert.equal(JSON.stringify(game), paused);
  game.start(); advance(game, .2, { move: -1 });
  assert.equal(game.status, 'running');
  assert.notEqual(JSON.stringify(game), paused);
});

test('the ship stays on the board and holding fire respects its cooldown', () => {
  const game = new Invaders(() => .5); game.start();
  advance(game, 2, { move: -1 });
  assert.ok(game.playerX >= 50);
  advance(game, 4, { move: 1 });
  assert.ok(game.playerX <= invadersSize.width - 50);
  game.shields = [];
  advance(game, .2, { fire: true });
  assert.equal(game.shots.filter(shot => !shot.enemy).length, 3);
});

test('a shot erases one alien and earns points once', () => {
  const game = new Invaders(() => .5); game.start();
  const alien = game.aliens.at(-1);
  game.shots.push({ x: alien.x, y: alien.y + 25, enemy: false });
  advance(game, .1);
  assert.equal(game.aliens.length, 20);
  assert.equal(game.score, 10);
  advance(game, .1);
  assert.equal(game.score, 10);
});

test('shields absorb enemy shots and lose pieces', () => {
  const game = new Invaders(() => .5); game.start();
  const count = game.shields.length, shield = game.shields[0];
  game.shots.push({ x: shield.x, y: shield.y - 18, enemy: true });
  advance(game, .15);
  assert.equal(game.shields.length, count - 1);
  assert.equal(game.shots.length, 0);
  assert.equal(game.lives, 3);
});

test('hits cost a life, grant recovery time, and eventually end the game', () => {
  const game = new Invaders(() => .5); game.start(); game.shields = [];
  const hit = () => { game.shots.push({ x: game.playerX, y: invadersSize.playerY - 20, enemy: true }); advance(game, .1); };
  hit(); assert.equal(game.lives, 2);
  hit(); assert.equal(game.lives, 2);
  advance(game, 1.5); hit(); assert.equal(game.lives, 1);
  advance(game, 1.5); hit(); assert.equal(game.status, 'over');
  game.start();
  assert.equal(game.lives, 3); assert.equal(game.score, 0); assert.equal(game.wave, 1);
});

test('aliens reverse and descend at the edge, and reaching the ship ends play', () => {
  const game = new Invaders(() => .5); game.start();
  game.aliens = [{ x: 744, y: 400, row: 0, column: 0 }];
  advance(game, .6);
  assert.equal(game.direction, -1); assert.ok(game.aliens[0].y > 400);
  game.aliens[0].y = invadersSize.playerY;
  advance(game, .1);
  assert.equal(game.status, 'over');
});

test('cleared waves preserve score and lives, and three cleared waves win', () => {
  const game = new Invaders(() => .5); game.start(); game.score = 420; game.lives = 2;
  game.aliens = []; advance(game, 2);
  assert.equal(game.wave, 2); assert.equal(game.aliens.length, 21);
  assert.equal(game.score, 420); assert.equal(game.lives, 2);
  game.aliens = []; advance(game, 2);
  assert.equal(game.wave, 3);
  game.aliens = []; advance(game, .1);
  assert.equal(game.status, 'won');
});

test('simulation has the same outcome at 30 and 120 frames per second', () => {
  const fast = new Invaders(() => .5), slow = new Invaders(() => .5);
  fast.start(); slow.start();
  advance(fast, 3, { fire: true });
  for (let i = 0; i < 90; i++) slow.update(1 / 30, { fire: true });
  assert.equal(fast.score, slow.score);
  assert.deepEqual(fast.aliens, slow.aliens);
  assert.deepEqual(fast.shots, slow.shots);
});
