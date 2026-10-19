import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDirectorState, decide, currentRequest, davidButtons, davidActionAt } from '../src/screens/david-director.mjs';

test('approval grows scope, moves the queue, and sends the Kandis alarm to the other monitor', () => {
  const state = createDirectorState();
  const title = currentRequest(state).title;
  assert.equal(state.stock, 47);
  assert.equal(state.dill, false);
  decide(state, 'approve');
  assert.ok(state.scope > 100);
  assert.notEqual(currentRequest(state).title, title);
  assert.equal(state.dill, true);
  assert.match(state.alert, /Dildsnaps/);
});

test('scope rejection returns the same request with an expanding little change; invoicing advances it', () => {
  const state = createDirectorState(), title = currentRequest(state).title;
  decide(state, 'reject'); decide(state, 'reject');
  assert.equal(currentRequest(state).title, title);
  assert.equal(state.revisions[0], 2);
  decide(state, 'invoice');
  assert.ok(state.billed > 0);
  assert.notEqual(currentRequest(state).title, title);
  decide(state, 'approve'); decide(state, 'approve');
  assert.equal(currentRequest(state).title, title, 'The queue cycles without losing the returned revision');
  assert.equal(state.revisions[0], 2);
});

test('Friday defers every case, ignores further decisions, and Monday resets both monitors', () => {
  const state = createDirectorState();
  decide(state, 'approve'); decide(state, 'friday');
  assert.equal(state.friday, true);
  assert.match(state.receipt, /mandag/);
  const friday = structuredClone(state);
  for (const action of ['approve', 'reject', 'invoice']) assert.equal(decide(state, action), false);
  assert.deepEqual(state, friday);
  decide(state, 'friday');
  assert.deepEqual(state, createDirectorState());
});

test('hit areas match each screen and the inverted texture UV; empty screen areas never act', () => {
  for (const button of davidButtons) {
    const uv = { x: (button.x + button.width / 2) / 1024, y: 1 - (button.y + button.height / 2) / 565 };
    assert.equal(davidActionAt(button.screen, uv, false), button.action);
    assert.equal(davidActionAt(1 - button.screen, uv, false), undefined);
    assert.equal(davidActionAt(button.screen, uv, true), button.action === 'friday' ? 'friday' : undefined);
  }
  assert.equal(davidActionAt(0, { x: .5, y: .8 }, false), undefined);
  assert.equal(davidActionAt(1, { x: NaN, y: 0 }, false), undefined);
});
