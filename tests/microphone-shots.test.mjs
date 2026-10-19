import test from 'node:test';
import assert from 'node:assert/strict';
import { MicrophoneShots } from '../src/input/microphone-shots.ts';

function microphone(request) {
  let level = .004;
  const track = { readyState: 'live', addEventListener() {}, stop() { this.readyState = 'ended'; } };
  const stream = { getTracks: () => [track], getAudioTracks: () => [track] };
  const context = {
    state: 'running', resume: async () => {},
    close: async function () { this.state = 'closed'; },
    createMediaStreamSource: () => ({ connect() {}, disconnect() {} }),
    createAnalyser: () => ({ fftSize: 1024, getFloatTimeDomainData(data) {
      data.forEach((_, i) => { data[i] = (i % 2 ? -1 : 1) * level; });
    } }),
  };
  const mic = new MicrophoneShots({ supported: () => true, createContext: () => context, requestStream: request || (() => Promise.resolve(stream)) });
  return { mic, track, stream, context, setLevel: value => { level = value; } };
}

test('local microphone samples fire after calibration; stopping releases hardware and audio', async () => {
  const { mic, track, context, setLevel } = microphone();
  await mic.start();
  assert.equal(mic.state, 'calibrating');
  for (let i = 0; i < 60; i++) assert.equal(mic.update(1 / 60), false);
  assert.equal(mic.state, 'listening');
  setLevel(.1);
  let shots = 0;
  for (let i = 0; i < 90; i++) if (mic.update(1 / 60)) shots++;
  assert.ok(shots >= 15 && shots <= 18, `${shots} shots in a sustained 1.5 second sound`);
  setLevel(.004);
  for (let i = 0; i < 30; i++) assert.equal(mic.update(1 / 60), false);
  mic.stop();
  assert.equal(track.readyState, 'ended'); assert.equal(context.state, 'closed');
  assert.equal(mic.state, 'off'); assert.equal(mic.update(.1), false);
});

test('walking away while permission is pending stops a stream that arrives later', async () => {
  let grant;
  const { mic, stream, track, context } = microphone(() => new Promise(resolve => { grant = resolve; }));
  const starting = mic.start(); mic.stop(); grant(stream); await starting;
  assert.equal(mic.state, 'off'); assert.equal(track.readyState, 'ended'); assert.equal(context.state, 'closed');
});

test('denied permission and missing browser support give recoverable states', async () => {
  const { mic, context } = microphone(async () => { throw new DOMException('denied', 'NotAllowedError'); });
  await mic.start();
  assert.equal(mic.state, 'error'); assert.match(mic.message, /adgang/i); assert.equal(context.state, 'closed');
  const unavailable = new MicrophoneShots({ supported: () => false });
  await unavailable.start(); assert.equal(unavailable.state, 'unsupported');
});
