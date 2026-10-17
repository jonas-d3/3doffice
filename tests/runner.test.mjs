import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Runner } from '../src/runner.mjs';

const advance = (game, seconds, fps = 60) => {
  for (let i = 0; i < Math.round(seconds * fps); i++) game.update(1 / fps);
};

test('waits for input, jumps once, and lands without a double jump', () => {
  const game = new Runner(() => .5);
  advance(game, 1);
  assert.equal(game.distance, 0);
  game.action();
  advance(game, .15);
  assert.ok(game.height > 0);
  const velocity = game.velocity;
  game.action();
  assert.equal(game.velocity, velocity);
  advance(game, .65);
  assert.equal(game.height, 0);
  assert.ok(game.score > 0);
});

test('hitting an obstacle ends the run and restarting clears the course', () => {
  const game = new Runner(() => .5);
  game.action();
  advance(game, 8);
  assert.equal(game.status, 'over');
  const score = game.score;
  advance(game, 2);
  assert.equal(game.score, score);
  game.action();
  assert.equal(game.status, 'running');
  assert.equal(game.score, 0);
  assert.equal(game.obstacles.length, 0);
});

test('a timed jump clears an obstacle', () => {
  const game = new Runner(() => .5);
  game.action();
  while (!game.obstacles.length || game.obstacles[0].x > 280) game.update(1 / 120);
  game.action();
  advance(game, .65);
  assert.equal(game.status, 'running');
  assert.ok(game.obstacles[0].x < 100);
});

test('pause freezes the entire run and resumes without resetting points', () => {
  const game = new Runner(() => .5);
  game.action();
  advance(game, 1);
  game.pause();
  const before = JSON.stringify(game);
  advance(game, 10);
  assert.equal(JSON.stringify(game), before);
  game.action();
  advance(game, .1);
  assert.equal(game.status, 'running');
  assert.ok(game.distance > JSON.parse(before).distance);
});

test('physics and scoring stay consistent at 30, 60, and 120 fps', () => {
  const games = [30, 60, 120].map(fps => {
    const game = new Runner(() => .5);
    game.action();
    advance(game, .5, fps);
    return game;
  });
  for (const game of games.slice(1)) {
    assert.ok(Math.abs(game.height - games[0].height) < .001);
    assert.equal(game.score, games[0].score);
  }
});
