import test from 'node:test';
import assert from 'node:assert/strict';
import { DonkeyKong, RoomBarrels, platformY, BARREL_RADIUS } from '../src/donkey-kong.mjs';

function advance(game, seconds, input = {}, fps = 60) {
  for (let i = 0; i < Math.round(seconds * fps); i++) game.update(1 / fps, input);
}

test('starts explicitly, jumps and lands, and pauses without consuming input', () => {
  const game = new DonkeyKong();
  advance(game, 3); assert.equal(game.barrels.length, 0);
  game.start(); game.jump(); advance(game, .15);
  assert.ok(game.player.y > platformY(0, game.player.x) + .1);
  game.pause(); const snapshot = JSON.stringify(game);
  advance(game, 2, { right: true }); game.jump();
  assert.equal(JSON.stringify(game), snapshot);
  game.start(); advance(game, .7);
  assert.equal(game.player.y, platformY(0, game.player.x));
});

test('ladders connect all three platforms and reaching the flag wins', () => {
  const game = new DonkeyKong(); game.start(); game.spawnIn = 999;
  advance(game, .5, { up: true }); assert.equal(game.player.level, 0);
  advance(game, 2.6, { right: true }); advance(game, 1.5, { up: true });
  assert.equal(game.player.level, 1);
  advance(game, 2.6, { left: true }); advance(game, 1.5, { up: true });
  assert.equal(game.player.level, 2);
  advance(game, 2.6, { right: true });
  assert.equal(game.status, 'won');
});

test('a barrel hit removes one life, gives recovery time, and three hits end the round', () => {
  const game = new DonkeyKong(); game.start(); game.spawnIn = 999;
  for (let life = 2; life >= 0; life--) {
    game.player.invulnerable = 0;
    game.barrels.push({ id: life, x: game.player.x, y: game.player.y + BARREL_RADIUS, level: 0, falling: false, vy: 0, angle: 0, scored: false });
    advance(game, 1 / 60);
    assert.equal(game.lives, life);
    if (life) { advance(game, .1); assert.equal(game.lives, life); }
  }
  assert.equal(game.status, 'over');
});

test('barrels traverse the ramps and still leave the board after the player exits', () => {
  const escaped = [], game = new DonkeyKong(barrel => escaped.push(barrel));
  game.start(); advance(game, 1); game.stop(); advance(game, 20);
  assert.equal(game.status, 'idle');
  assert.ok(escaped.length > 0); assert.equal(game.barrels.length, 0);
  assert.ok(escaped[0].x > .6);
});

const environment = {
  table: { minX: -.8, maxX: .8, minZ: -.3, maxZ: .3, height: .77 },
  room: { minX: -3, maxX: 3, minZ: -2, maxZ: 2 },
};

test('escaped barrels roll off the table, settle on the floor and survive a new round', () => {
  const room = new RoomBarrels(environment);
  const game = new DonkeyKong(b => room.add(b.x, b.y + .77, 0));
  game.start(); advance(game, 1); game.stop();
  for (let i = 0; i < 2400; i++) { game.update(1 / 60); room.update(1 / 60); }
  assert.ok(room.barrels.length > 0);
  const barrel = room.barrels[0];
  assert.equal(barrel.y, BARREL_RADIUS + .025); assert.equal(barrel.sleeping, true);
  const before = structuredClone(room.barrels);
  game.start(); advance(room, 5);
  assert.deepEqual(room.barrels, before);
});

test('floor barrels can be nudged, bounce off room boundaries and settle again', () => {
  const room = new RoomBarrels(environment);
  room.add(2.8, .1, 1); advance(room, 10);
  const b = room.barrels[0], x = b.x;
  room.nudge(b.x - .1, b.z, .7, 0); advance(room, .1);
  assert.notEqual(b.x, x); assert.equal(b.sleeping, false);
  advance(room, 12);
  assert.ok(b.x <= 3 - BARREL_RADIUS); assert.ok(b.x >= -3 + BARREL_RADIUS);
  assert.equal(b.sleeping, true);
});

test('game simulation produces the same result at 10 and 120 fps', () => {
  const a = new DonkeyKong(), b = new DonkeyKong(); a.start(); b.start();
  advance(a, 4, { right: true }, 10); advance(b, 4, { right: true }, 120);
  assert.deepEqual(a.player, b.player); assert.deepEqual(a.barrels, b.barrels);
});

test('game over stops new barrels but every existing barrel still escapes and remains', () => {
  const room = new RoomBarrels(environment);
  const game = new DonkeyKong(b => room.add(b.x, b.y + .77, 0));
  for (let i = 0; i < 3600; i++) {
    if (i === 0) game.start();
    game.update(1 / 60); room.update(1 / 60);
  }
  assert.equal(game.status, 'over');
  assert.equal(game.barrels.length, 0);
  assert.ok(room.barrels.length >= 3);
  assert.equal(room.barrels.length, game.nextId);
  const retained = room.barrels.map(b => ({ ...b }));
  game.start(); assert.deepEqual(room.barrels, retained);
});

test('jumping over a barrel avoids a hit and scores only once', () => {
  const game = new DonkeyKong(); game.start(); game.spawnIn = 999;
  game.player.invulnerable = 0; game.jump(); advance(game, .15);
  game.barrels.push({ id: 7, x: game.player.x - .02, y: platformY(0, game.player.x) + BARREL_RADIUS,
    level: 0, falling: false, vy: 0, angle: 0, scored: false });
  advance(game, .1);
  assert.equal(game.lives, 3); assert.equal(game.score, 100);
  advance(game, .1); assert.equal(game.score, 100);
});

test('the Donkey Kong camera preset is reachable inside the glass room', async () => {
  const { donkeyKongPreset, day21GlassRoom } = await import('../src/day21-layout.mjs');
  const { canStand } = await import('../src/movement.mjs');
  const { contains } = await import('../src/layout.mjs');
  assert.equal(canStand(donkeyKongPreset.x, donkeyKongPreset.z), true);
  assert.equal(contains(day21GlassRoom, donkeyKongPreset.x, donkeyKongPreset.z), true);
});

test('repeated rounds accumulate visibly separate barrels instead of overlapping props', () => {
  const room = new RoomBarrels(environment);
  for (let i = 0; i < 15; i++) { room.add(.63, .88, .035); advance(room, 15); }
  assert.equal(room.barrels.length, 15);
  for (let i = 0; i < room.barrels.length; i++) {
    assert.equal(room.barrels[i].sleeping, true);
    for (const b of room.barrels.slice(i + 1)) {
      assert.ok(Math.hypot(b.x - room.barrels[i].x, b.z - room.barrels[i].z) >= BARREL_RADIUS * 1.95);
    }
  }
});

test('nudging a pile against the wall keeps every sleeping barrel inside the room', () => {
  const room = new RoomBarrels(environment);
  for (const x of [2.955, 2.855, 2.755, 2.655, 2.555]) {
    room.add(x, BARREL_RADIUS + .025, 1);
    const b = room.barrels.at(-1); b.vx = b.vy = b.vz = 0; b.sleeping = true;
  }
  room.barrels.at(-1).vx = .8; room.barrels.at(-1).sleeping = false;
  advance(room, 15);
  for (const b of room.barrels) assert.ok(b.x <= environment.room.maxX - BARREL_RADIUS);
});

test('the full level is winnable with the normal barrel spawner running', () => {
  const game = new DonkeyKong(); game.start();
  advance(game, 2.4, { right: true }); advance(game, 1.1, { up: true });
  advance(game, 2.4, { left: true }); advance(game, .8); advance(game, 1.1, { up: true });
  advance(game, 2.4, { right: true });
  assert.equal(game.status, 'won'); assert.equal(game.lives, 3);
});
