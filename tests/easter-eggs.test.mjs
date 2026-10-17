import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CreeperFollow, creeperRadius, SalmonCatch } from '../src/easter-egg-state.mjs';
import { VisitorWalk, visitorRadius } from '../src/visitor-walk.mjs';
import { coffeeDropoff, coffeeCupPlacement, thraneDesk } from '../src/coffee-layout.mjs';
import { canStand, canWalkBetween } from '../src/movement.mjs';

test('the creeper only starts following after its first sighting and keeps following while unseen', () => {
  const creeper = new CreeperFollow(), player = { x: 5.585, z: 7.9 };
  const start = [creeper.x, creeper.z];
  for (let i = 0; i < 50; i++) creeper.update(.1, false, player, true);
  assert.deepEqual([creeper.x, creeper.z], start);
  for (let i = 0; i < 50; i++) creeper.update(.1, true, player, true);
  assert.deepEqual([creeper.x, creeper.z], start, 'First sighting does not make it move');
  for (let i = 0; i < 20; i++) creeper.update(.05, false, player, true);
  const firstDistance = creeper.distance;
  for (let i = 0; i < 20; i++) creeper.update(.05, false, player, true);
  assert.ok(firstDistance > .5);
  assert.ok(creeper.distance > firstDistance + .5, 'Does not need another sighting to keep following');
});

test('looking back gives exactly 250 ms of movement before freezing, at different frame rates', () => {
  for (const dt of [1 / 30, 1 / 60, 1 / 144]) {
    const creeper = new CreeperFollow(), player = { x: 1.95, z: 10.65 };
    creeper.update(dt, true, player, true);
    for (let i = 0; i < 4; i++) creeper.update(dt, false, player, true);
    const before = creeper.distance;
    creeper.update(dt, true, player, true);
    assert.ok(creeper.distance > before, 'A glimpse of movement remains after looking back');
    for (let i = 0; i < 2 / dt; i++) creeper.update(dt, true, player, true);
    assert.ok(Math.abs(creeper.distance - before - .2) < 1e-7, 'Moves at its close-range pace for exactly 250 ms');
    const stopped = [creeper.x, creeper.z, creeper.heading];
    creeper.update(dt, true, { x: .48, z: 10.55 }, true);
    assert.deepEqual([creeper.x, creeper.z, creeper.heading], stopped, 'Also freezes its orientation');
    creeper.update(dt, false, player, true);
    assert.ok(creeper.distance > before + .2, 'Looking away releases it again');
  }
});

test('the creeper gains ground faster at a distance and slows down before reaching the player', () => {
  for (const dt of [1 / 30, 1 / 60, 1 / 144]) {
    const creeper = new CreeperFollow(), player = { x: .48, z: 10.55 };
    creeper.update(dt, true, player, true);
    for (let i = 0; i < Math.round(1.5 / dt); i++) creeper.update(dt, false, player, true);
    assert.ok(creeper.distance > 1.4, 'A one-and-a-half-second glance away makes a noticeable difference');
    assert.ok(creeper.distance < 1.7, 'Catch-up speed stays consistent across frame rates');
    const before = creeper.distance;
    creeper.update(dt, false, player, true);
    assert.ok(Math.abs((creeper.distance - before) / dt - .8) < 1e-7, 'Returns to a slow stalk within two metres');
    for (let i = 0; i < Math.round(2 / dt); i++) creeper.update(dt, false, player, true);
    assert.ok(Math.abs(Math.hypot(creeper.x - player.x, creeper.z - player.z) - 1.4) < 1e-7, 'Leaves enough space to see its face even after catching up');
  }
});

test('the creeper pauses without arming or consuming its stop delay', () => {
  const creeper = new CreeperFollow(), player = { x: 2.1, z: 10.65 };
  creeper.update(.1, true, player, false);
  creeper.update(.1, false, player, true);
  assert.equal(creeper.distance, 0, 'Disabled views cannot discover it');
  creeper.update(.1, true, player, true);
  creeper.update(.05, false, player, true);
  const before = creeper.distance;
  for (const dt of [.1, 10, NaN, -1]) creeper.update(dt, true, player, false);
  assert.equal(creeper.distance, before);
  creeper.update(.05, true, player, true);
  assert.ok(Math.abs(creeper.distance - before - .04) < 1e-7);
});

test('the creeper follows changing player positions through doorways and around furniture without teleporting', () => {
  const creeper = new CreeperFollow();
  const destinations = [
    [.48, 10.55], [5.585, 5.55], [6.9, 9.6], [6.4, 15.2],
    [2, 20.4], [-25.3, 18.8], [-16.7, 16.1], [15.4, 20.4], [4.4, 7.9],
  ];
  creeper.update(.05, true, { x: .48, z: 10.55 }, true);
  for (const [x, z] of destinations) {
    const player = { x, z };
    for (let i = 0; i < 2000 && Math.hypot(creeper.x - x, creeper.z - z) > 1.45; i++) {
      const before = { x: creeper.x, z: creeper.z };
      creeper.update(.05, false, player, true);
      const travel = Math.hypot(creeper.x - before.x, creeper.z - before.z);
      assert.ok(travel <= .08 + 1e-8, 'Continuous walking at up to 1.6 m/s, never a jump');
      assert.ok(canStand(creeper.x, creeper.z, creeperRadius), `Blocked at ${creeper.x}, ${creeper.z}`);
      assert.ok(canWalkBetween(before, creeper, creeperRadius), 'The entire step clears walls and furniture');
    }
    assert.ok(Math.hypot(creeper.x - x, creeper.z - z) <= 1.45, `Reaches player at ${x}, ${z}`);
    for (let i = 0; i < 30; i++) creeper.update(.05, false, player, true);
    // A doorway may bring it inside the normal stand-off before the player
    // becomes reachable in a straight line, but it must still leave body room.
    assert.ok(Math.hypot(creeper.x - x, creeper.z - z) >= .89, 'Leaves space around the player even at a doorway');
  }
});

test('the creeper redirects to a player who moves before it finishes the old route', () => {
  const creeper = new CreeperFollow(), first = { x: 5.585, z: 5.55 };
  creeper.update(.05, true, first, true);
  for (let i = 0; i < 20; i++) creeper.update(.05, false, first, true);
  const player = { x: .48, z: 10.55 };
  for (let i = 0; i < 120; i++) creeper.update(.05, false, player, true);
  assert.ok(Math.hypot(creeper.x - player.x, creeper.z - player.z) < 1.45);
});

test('a path cannot cut a door jamb even when both endpoints are on clear floor', () => {
  const before = { x: 5.98, z: 9.86 }, after = { x: 5.94, z: 9.9 };
  assert.ok(canStand(before.x, before.z, creeperRadius));
  assert.ok(canStand(after.x, after.z, creeperRadius));
  assert.equal(canWalkBetween(before, after, creeperRadius), false);
  assert.ok(canWalkBetween({ x: 6, z: 9.8 }, { x: 5.9, z: 9.8 }, creeperRadius));
});

test('three coffee presses trigger a short office run and reset the machine when the cup is placed', () => {
  const visitor = new VisitorWalk();
  assert.equal(visitor.orderCoffee(), 1);
  assert.equal(visitor.orderCoffee(), 2);
  assert.equal(visitor.coffeeState, 'idle');
  assert.equal(visitor.orderCoffee(), 3);
  assert.equal(visitor.coffeeState, 'fetching');
  assert.equal(visitor.orderCoffee(), 3, 'Does not restart an active order');
  const states = new Set(); let fastest = 0, boostedDistance = 0, placedAtDesk = false;
  for (let i = 0; i < 11000; i++) {
    const before = visitor.distance, state = visitor.coffeeState;
    visitor.update(.05);
    if (state === 'boosted') {
      boostedDistance += visitor.distance - before;
      assert.ok(visitor.x > 0, 'The short coffee run does not go through Day21');
    }
    if (state === 'placing' && visitor.cupsDelivered === 1) {
      placedAtDesk = Math.hypot(visitor.x - coffeeDropoff.x, visitor.z - coffeeDropoff.z) < .02;
      assert.equal(visitor.coffeeState, 'toilet-running', 'Runs to the toilet immediately after placing the cup');
      assert.equal(visitor.coffeePresses, 0, 'The machine resets as soon as the cup is placed');
    }
    fastest = Math.max(fastest, visitor.distance - before);
    assert.ok(canStand(visitor.x, visitor.z, visitorRadius), `Coffee path at ${visitor.x}, ${visitor.z}`);
    states.add(visitor.coffeeState);
    if (states.has('boosted') && visitor.coffeeState === 'idle') break;
  }
  assert.ok(states.has('drinking'));
  assert.ok(states.has('boosted'));
  assert.equal(visitor.coffeeState, 'idle');
  assert.equal(visitor.coffeePresses, 0);
  assert.ok(states.has('returning'));
  assert.ok(states.has('placing'));
  for (const state of ['toilet-running', 'toilet-closing', 'toilet-waiting', 'toilet-opening', 'toilet-leaving']) assert.ok(states.has(state), state);
  assert.equal(visitor.cupsDelivered, 1);
  assert.ok(placedAtDesk);
  assert.ok(boostedDistance > 10 && boostedDistance <= 25, `A short office run, not the old 158-metre lap: ${boostedDistance}`);
  assert.ok(fastest > .12, 'Coffee visibly increases walking speed');
});

test('coffee collection works from distant and returning route segments and preserves pause', () => {
  for (const elapsed of [80, 180, 290]) {
    const visitor = new VisitorWalk();
    for (let i = 0; i < elapsed * 20; i++) visitor.update(.05);
    visitor.paused = true;
    visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
    const before = [visitor.x, visitor.z, visitor.distance];
    for (let i = 0; i < 50; i++) visitor.update(.05);
    assert.deepEqual([visitor.x, visitor.z, visitor.distance], before);
    visitor.paused = false;
    let collected = false;
    for (let i = 0; i < 5000; i++) {
      visitor.update(.05);
      assert.ok(canStand(visitor.x, visitor.z, visitorRadius));
      if (visitor.coffeeState === 'boosted') { collected = true; break; }
    }
    assert.ok(collected, `Collects coffee when ordered at ${elapsed}s`);
  }
});

test('successive coffee runs leave one more cup each, including orders made just after David leaves the toilet', () => {
  const visitor = new VisitorWalk();
  for (let cup = 1; cup <= 4; cup++) {
    assert.equal(visitor.orderCoffee(), 1);
    assert.equal(visitor.orderCoffee(), 2);
    assert.equal(visitor.orderCoffee(), 3);
    let placed = false;
    for (let i = 0; i < 14000 && !placed; i++) {
      const previous = { x: visitor.x, z: visitor.z };
      visitor.update(.05);
      assert.ok(canWalkBetween(previous, visitor, visitorRadius), `Coffee run ${cup} stays clear of furniture`);
      if (visitor.cupsDelivered < cup) assert.equal(visitor.orderCoffee(), 3, 'Busy presses cannot start another order before delivery');
      assert.ok(visitor.cupsDelivered === cup - 1 || visitor.cupsDelivered === cup);
      placed = visitor.coffeeState === 'idle';
    }
    assert.ok(placed);
    assert.equal(visitor.cupsDelivered, cup);
    assert.equal(visitor.coffeePresses, 0);
  }
});

test('placing a cup pauses with David and completes once, also with reduced motion', () => {
  const visitor = new VisitorWalk();
  visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
  for (let i = 0; i < 20000 && visitor.coffeeState !== 'placing'; i++) visitor.update(.05, true);
  assert.equal(visitor.coffeeState, 'placing');
  visitor.paused = true;
  const before = [visitor.x, visitor.z, visitor.placingProgress, visitor.cupsDelivered];
  for (let i = 0; i < 100; i++) visitor.update(.05, true);
  assert.deepEqual([visitor.x, visitor.z, visitor.placingProgress, visitor.cupsDelivered], before);
  visitor.paused = false;
  for (let i = 0; i < 100; i++) visitor.update(.05, true);
  assert.equal(visitor.cupsDelivered, 1);
  assert.equal(visitor.coffeeState, 'toilet-running');
});

test('David runs to the toilet, closes the door for 30 seconds, then opens it before leaving', () => {
  for (const dt of [1 / 30, 1 / 60, 1 / 144]) {
    const visitor = new VisitorWalk();
    visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
    let fastest = 0;
    for (let i = 0; i < 300 / dt && visitor.coffeeState !== 'toilet-waiting'; i++) {
      const previous = { x: visitor.x, z: visitor.z }, before = visitor.distance, state = visitor.coffeeState;
      visitor.update(dt);
      assert.ok(canWalkBetween(previous, visitor, visitorRadius), 'The entire toilet route clears walls and furniture');
      if (state === 'toilet-running') fastest = Math.max(fastest, (visitor.distance - before) / dt);
    }
    assert.equal(visitor.coffeeState, 'toilet-waiting');
    assert.ok(fastest > 3, 'Runs to the toilet rather than walking');
    assert.equal(visitor.restroomDoorClosure, 1);
    assert.equal(visitor.orderCoffee(), 1);
    assert.equal(visitor.orderCoffee(), 2);
    assert.equal(visitor.orderCoffee(), 3, 'A new coffee can wait during the toilet visit');
    const position = [visitor.x, visitor.z, visitor.distance];
    let elapsed = 0;
    while (visitor.coffeeState === 'toilet-waiting' && elapsed < 31) {
      assert.equal(visitor.restroomDoorClosure, 1);
      assert.deepEqual([visitor.x, visitor.z, visitor.distance], position);
      assert.equal(visitor.orderCoffee(), 3, 'An order cannot interrupt the toilet visit');
      visitor.update(dt); elapsed += dt;
    }
    assert.ok(Math.abs(elapsed - 30) <= dt + 1e-7, `Door remains fully closed for 30 seconds at ${1 / dt} fps: ${elapsed}`);
    assert.equal(visitor.coffeeState, 'toilet-opening');
    while (visitor.coffeeState === 'toilet-opening') {
      assert.deepEqual([visitor.x, visitor.z, visitor.distance], position);
      visitor.update(dt);
    }
    assert.equal(visitor.restroomDoorClosure, 0);
    assert.equal(visitor.coffeeState, 'toilet-leaving');
  }
});

test('a coffee ordered after delivery waits for the entire toilet visit, then gets collected exactly once', () => {
  for (const orderAt of ['toilet-running', 'toilet-closing', 'toilet-waiting', 'toilet-opening', 'toilet-leaving']) {
    const visitor = new VisitorWalk();
    visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
    for (let i = 0; i < 10000 && visitor.coffeeState !== orderAt; i++) visitor.update(.05);
    assert.equal(visitor.coffeeState, orderAt);
    assert.equal(visitor.coffeePresses, 0);
    assert.equal(visitor.coffeeCupWaiting, false);
    const before = [visitor.x, visitor.z, visitor.waiting, visitor.restroomDoorClosure];
    assert.equal(visitor.orderCoffee(), 1);
    assert.equal(visitor.orderCoffee(), 2);
    assert.equal(visitor.orderCoffee(), 3);
    assert.equal(visitor.coffeeCupWaiting, true, 'The prepared cup is visible at the machine');
    assert.equal(visitor.coffeeState, orderAt, 'The new order does not interrupt David');
    assert.deepEqual([visitor.x, visitor.z, visitor.waiting, visitor.restroomDoorClosure], before);
    for (let i = 0; i < 5; i++) assert.equal(visitor.orderCoffee(), 3, 'Only one cup can wait');
    visitor.paused = true;
    for (let i = 0; i < 100; i++) visitor.update(.05);
    assert.deepEqual([visitor.x, visitor.z, visitor.waiting, visitor.restroomDoorClosure], before);
    visitor.paused = false;
    let fetched = false, drank = false;
    for (let i = 0; i < 10000 && visitor.cupsDelivered < 2; i++) {
      const previous = { x: visitor.x, z: visitor.z };
      visitor.update(.05);
      assert.ok(canWalkBetween(previous, visitor, visitorRadius));
      if (visitor.coffeeState === 'fetching') {
        fetched = true;
        assert.equal(visitor.restroomDoorClosure, 0, 'He opens the door before collecting the new coffee');
      }
      if (visitor.coffeeState === 'drinking') {
        drank = true;
        assert.equal(visitor.coffeeCupWaiting, false, 'He removes the prepared cup from the machine');
      }
    }
    assert.ok(fetched && drank);
    assert.equal(visitor.cupsDelivered, 2);
    assert.equal(visitor.coffeePresses, 0, 'The second delivery resets the machine again');
    for (let i = 0; i < 2000; i++) visitor.update(.05);
    assert.equal(visitor.cupsDelivered, 2, 'Extra presses did not queue extra cups');
  }
});

test('partial coffee orders survive the end of the toilet visit', () => {
  for (const presses of [1, 2]) {
    const visitor = new VisitorWalk();
    visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
    for (let i = 0; i < 10000 && visitor.coffeeState !== 'toilet-waiting'; i++) visitor.update(.05);
    assert.equal(visitor.coffeeState, 'toilet-waiting');
    for (let i = 1; i <= presses; i++) assert.equal(visitor.orderCoffee(), i);
    for (let i = 0; i < 3000 && visitor.coffeeState !== 'idle'; i++) visitor.update(.05);
    assert.equal(visitor.coffeeState, 'idle');
    assert.equal(visitor.coffeePresses, presses);
    for (let i = presses + 1; i <= 3; i++) assert.equal(visitor.orderCoffee(), i);
    assert.equal(visitor.coffeeState, 'fetching');
  }
});

test('pausing freezes both the toilet door and the 30-second visit, including reduced motion', () => {
  for (const reducedMotion of [false, true]) {
    const visitor = new VisitorWalk();
    visitor.orderCoffee(); visitor.orderCoffee(); visitor.orderCoffee();
    for (const state of reducedMotion ? ['toilet-waiting'] : ['toilet-closing', 'toilet-waiting', 'toilet-opening']) {
      for (let i = 0; i < 20000 && visitor.coffeeState !== state; i++) visitor.update(.05, reducedMotion);
      assert.equal(visitor.coffeeState, state);
      visitor.paused = true;
      const before = [visitor.x, visitor.z, visitor.restroomDoorClosure, visitor.waiting];
      for (let i = 0; i < 1000; i++) visitor.update(.05, reducedMotion);
      assert.deepEqual([visitor.x, visitor.z, visitor.restroomDoorClosure, visitor.waiting], before);
      visitor.paused = false;
    }
  }
});

test('cups accumulate in separate positions on Thranes desk and stack after filling the free spots', () => {
  assert.equal(thraneDesk.islandIndex, 5);
  assert.equal(thraneDesk.side, -1);
  const positions = new Set();
  for (let i = 0; i < 120; i++) {
    const cup = coffeeCupPlacement(i);
    assert.ok(Math.abs(cup.x) + .046 < .7 && Math.abs(cup.z) + .046 < .35);
    assert.ok(cup.y >= .7725, 'Every cup stands on the desktop or an earlier cup');
    positions.add(`${cup.x},${cup.y},${cup.z}`);
  }
  assert.equal(positions.size, 120, 'New cups do not replace earlier ones');
  assert.ok(coffeeCupPlacement(6).y > coffeeCupPlacement(0).y);
});

test('the salmon jumps once, pauses with the scene and lands immediately with reduced motion', () => {
  const fish = new SalmonCatch();
  assert.equal(fish.start(false), true);
  assert.equal(fish.start(false), false);
  fish.update(.1, true); const before = fish.elapsed;
  fish.update(.1, false); assert.equal(fish.elapsed, before);
  for (let i = 0; i < 40; i++) fish.update(.05, true);
  assert.equal(fish.phase, 'landed');
  assert.equal(fish.start(false), false);
  const still = new SalmonCatch(); still.start(true);
  assert.equal(still.phase, 'landed');
});
