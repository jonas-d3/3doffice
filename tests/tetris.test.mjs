import test from 'node:test';
import assert from 'node:assert/strict';
import { Tetris } from '../src/games/tetris/tetris.mjs';

const advance = (game, seconds, fps = 60) => {
  for (let i = 0; i < seconds * fps; i++) game.update(1 / fps);
};

test('starts explicitly, falls with time, and preserves the round while paused', () => {
  const game = new Tetris(() => .5);
  advance(game, 2); assert.equal(game.piece, null);
  game.start(); advance(game, 1);
  assert.ok(game.piece.y > 0);
  game.pause(); const paused = JSON.stringify(game);
  advance(game, 5); game.move(1); game.rotate(); game.drop();
  assert.equal(JSON.stringify(game), paused);
  game.start(); advance(game, 1);
  assert.equal(game.status, 'running'); assert.ok(game.piece.y > 1);
});

test('each bag contains all seven pieces and hard drops lock above the floor', () => {
  const game = new Tetris(() => .5); game.start();
  const kinds = new Set();
  for (let i = 0; i < 7; i++) {
    kinds.add(game.piece.kind); game.drop();
    assert.equal(game.board.flat().filter(Boolean).length, 4);
    assert.ok(game.board[19].some(Boolean));
    game.board.forEach(row => row.fill(''));
  }
  assert.equal(kinds.size, 7);
});

test('pieces cannot move through walls or occupied cells', () => {
  const game = new Tetris(); game.start();
  game.piece = { kind: 'O', matrix: [[1, 1], [1, 1]], x: 0, y: 17 };
  assert.equal(game.move(-1), false);
  game.board[17][2] = 'T';
  assert.equal(game.move(1), false);
  for (let i = 0; i < 20; i++) game.softDrop();
  advance(game, .5);
  assert.equal(game.board[19][0], 'O'); assert.equal(game.board[19][1], 'O');
  assert.equal(game.board[17][2], 'T');
});

test('rotation kicks away from a wall and rejects a blocked rotation', () => {
  const game = new Tetris(); game.start();
  game.piece = { kind: 'T', matrix: [[0, 1, 0], [0, 1, 1], [0, 1, 0]], x: -1, y: 5 };
  assert.equal(game.rotate(), true); assert.ok(game.piece.x >= 0);
  game.board = game.board.map(() => Array(10).fill('J'));
  const before = structuredClone(game.piece);
  assert.equal(game.rotate(), false); assert.deepEqual(game.piece, before);
});

test('four full lines clear together and rows above fall down', () => {
  const game = new Tetris(); game.start();
  for (let y = 16; y < 20; y++) game.board[y] = Array.from({ length: 10 }, (_, x) => x === 4 ? '' : 'J');
  game.board[15][0] = 'T';
  game.piece = { kind: 'I', matrix: [[1], [1], [1], [1]], x: 4, y: 16 };
  game.drop();
  assert.equal(game.lines, 4); assert.equal(game.score, 800);
  assert.equal(game.board[19][0], 'T');
  assert.equal(game.board.flat().filter(Boolean).length, 1);
});

test('a blocked spawn ends the game and restarting resets the board and score', () => {
  const game = new Tetris(); game.start();
  game.piece = { kind: 'O', matrix: [[1, 1], [1, 1]], x: 0, y: 18 };
  game.board[0].fill('J'); game.board[1].fill('J');
  game.board[0][9] = ''; game.board[1][9] = '';
  game.drop(); assert.equal(game.status, 'over');
  game.start(); assert.equal(game.status, 'running');
  assert.equal(game.score, 0); assert.equal(game.lines, 0);
  assert.equal(game.board.flat().filter(Boolean).length, 0);
});

test('gravity and locking give the same result at 30 and 120 fps', () => {
  const slow = new Tetris(() => .5), fast = new Tetris(() => .5);
  slow.start(); fast.start(); advance(slow, 18, 30); advance(fast, 18, 120);
  assert.deepEqual(slow.board, fast.board); assert.deepEqual(slow.piece, fast.piece);
  assert.equal(slow.score, fast.score);
});
