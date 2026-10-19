import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { DavidScreens } from '../src/screens/david-screens.ts';

test('both textures redraw on a decision but remain idle across frames and Friday-disabled actions', () => {
  globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => new Proxy({}, { get: () => () => {} }) }) };
  const screens = new DavidScreens(), desk = new THREE.Group();
  const displays = screens.materials.map(material => {
    const panel = new THREE.Group(); desk.add(panel);
    const display = new THREE.Mesh(new THREE.PlaneGeometry(.602, .332), material); panel.add(display); return display;
  });
  screens.decorate(displays[0]); assert.deepEqual(screens.displays, displays);
  const versions = () => screens.materials.map(m => m.map.version);
  const initial = versions();
  for (let i = 0; i < 120; i++) assert.equal(screens.update(new THREE.PerspectiveCamera(), 1 / 60, true), false);
  assert.deepEqual(versions(), initial);
  screens.act('approve'); assert.ok(versions().every((version, i) => version === initial[i] + 1));
  assert.equal(screens.state.dill, true);
  screens.act('friday'); const friday = versions();
  assert.equal(screens.act('invoice'), false); assert.deepEqual(versions(), friday);
  screens.act('friday'); assert.equal(screens.state.dill, false);
});
