import test from 'node:test';
import assert from 'node:assert/strict';
import { HeadCamera } from '../src/input/head-camera.ts';

function camera(overrides = {}) {
  let time = 0, position = .5;
  const track = { readyState: 'live', addEventListener(type, callback) { this.ended = callback; }, stop() { this.readyState = 'ended'; } };
  const stream = { getTracks: () => [track], getVideoTracks: () => [track] };
  const video = { srcObject: null, readyState: 2, currentTime: 0, play: async () => {}, pause() { this.paused = true; } };
  const tracker = { closed: false, track: async () => position, close() { this.closed = true; } };
  const head = new HeadCamera({ supported: () => true, requestStream: async () => stream, createVideo: () => video,
    createTracker: async () => tracker, now: () => time, ...overrides });
  return { head, track, stream, video, tracker, setPosition: value => { position = value; },
    async tick(dt = .1) { time += dt * 1000; video.currentTime += dt; head.update(dt); await new Promise(resolve => setImmediate(resolve)); } };
}

test('camera calibrates, steers, pauses on a missing face and releases its devices', async () => {
  const c = camera(); await c.head.start(400);
  for (let i = 0; i < 10; i++) await c.tick();
  assert.equal(c.head.ready, true);
  c.setPosition(.6); for (let i = 0; i < 5; i++) await c.tick();
  assert.ok(c.head.targetX > 600);
  c.setPosition(null); await c.tick(); await c.tick(); assert.equal(c.head.ready, false);
  const x = c.head.targetX;
  c.setPosition(.8); for (let i = 0; i < 10; i++) await c.tick();
  assert.equal(c.head.ready, true); assert.equal(c.head.targetX, x);
  c.head.stop();
  assert.equal(c.head.state, 'off'); assert.equal(c.track.readyState, 'ended');
  assert.equal(c.video.srcObject, null); assert.equal(c.video.paused, true); assert.equal(c.tracker.closed, true);
});

test('leaving while camera permission is pending releases a late stream', async () => {
  let grant;
  const c = camera({ requestStream: () => new Promise(resolve => { grant = resolve; }) });
  const starting = c.head.start(); c.head.stop(); grant(c.stream); await starting;
  assert.equal(c.head.state, 'off'); assert.equal(c.track.readyState, 'ended'); assert.equal(c.video.srcObject, null);
});

test('leaving while the model loads closes a late tracker without restarting the camera', async () => {
  let load;
  const c = camera({ createTracker: () => new Promise(resolve => { load = resolve; }) });
  const starting = c.head.start(); await new Promise(resolve => setImmediate(resolve));
  assert.equal(c.head.state, 'loading'); c.head.stop(); load(c.tracker); await starting;
  assert.equal(c.head.state, 'off'); assert.equal(c.track.readyState, 'ended'); assert.equal(c.tracker.closed, true);
});

test('permission denial, model failure and a disconnected camera recover cleanly', async () => {
  const denied = camera({ requestStream: async () => { throw new DOMException('denied', 'NotAllowedError'); } });
  await denied.head.start(); assert.equal(denied.head.state, 'error'); assert.match(denied.head.message, /adgang/);
  const broken = camera({ createTracker: async () => { throw new Error('model missing'); } });
  await broken.head.start(); assert.equal(broken.head.state, 'error'); assert.equal(broken.track.readyState, 'ended');
  const c = camera(); await c.head.start(); c.track.ended();
  assert.equal(c.head.state, 'error'); assert.equal(c.tracker.closed, true);
  const unsupported = camera({ supported: () => false }); await unsupported.head.start(); assert.equal(unsupported.head.state, 'unsupported');
});

test('a frame returning after stop cannot revive tracking', async () => {
  const c = camera(); let frame;
  c.tracker.track = () => new Promise(resolve => { frame = resolve; });
  await c.head.start(); await c.tick(); c.head.stop(); frame(.9);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(c.head.state, 'off'); assert.equal(c.head.ready, false);
});
