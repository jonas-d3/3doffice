import test from 'node:test';
import assert from 'node:assert/strict';
import { SoundShotDetector } from '../src/sound-shots.mjs';

function listen(detector, seconds, level, fps = 60) {
  let shots = 0;
  for (let i = 0; i < Math.round(seconds * fps); i++) if (detector.update(1 / fps, level)) shots++;
  return shots;
}

test('calibrates to room noise without firing, then fires once for each short utterance', () => {
  const detector = new SoundShotDetector();
  assert.equal(listen(detector, 1, .005), 0);
  assert.equal(detector.ready, true);
  for (const word of ['skyd', 'bang', 'piyv']) {
    assert.equal(listen(detector, .18, .08), 1, word);
    assert.equal(listen(detector, .25, .005), 0);
  }
});

test('a sustained sound, a momentary click, or a short gap cannot produce a barrage', () => {
  const detector = new SoundShotDetector(); listen(detector, 1, .004);
  assert.equal(detector.update(.01, .3), false, 'ignore an isolated transient');
  listen(detector, .2, .004);
  assert.equal(listen(detector, 2, .1), 1);
  listen(detector, .05, .004);
  assert.equal(listen(detector, 1, .1), 0, 'a tiny gap inside a word does not rearm');
  listen(detector, .2, .004);
  assert.equal(listen(detector, .15, .1), 1);
});

test('successive short sounds can fire 180 milliseconds apart', () => {
  const detector = new SoundShotDetector(); listen(detector, 1, .004, 100);
  for (let i = 0; i < 3; i++) {
    assert.equal(listen(detector, .04, .1, 100), 1);
    assert.equal(listen(detector, .14, .004, 100), 0);
  }
});

test('steady background noise stays quiet and detection works at different frame rates', () => {
  for (const fps of [30, 60, 144]) {
    const detector = new SoundShotDetector();
    assert.equal(listen(detector, 2, .02, fps), 0);
    assert.equal(listen(detector, .2, .12, fps), 1);
    assert.equal(listen(detector, .4, .02, fps), 0);
    assert.equal(listen(detector, .2, .12, fps), 1);
  }
});

test('high sensitivity still rearms between sounds in a room with audible background noise', () => {
  const detector = new SoundShotDetector(); detector.sensitivity = 2;
  listen(detector, 1, .02);
  assert.equal(listen(detector, .15, .08), 1);
  assert.equal(listen(detector, .4, .02), 0);
  assert.equal(listen(detector, .15, .08), 1);
});
