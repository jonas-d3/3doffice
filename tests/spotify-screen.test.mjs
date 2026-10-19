import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene } from 'three';
import { SpotifyScreen } from '../src/screens/spotify-screen.ts';

class Element extends EventTarget {
  style = {}; children = []; attributes = new Map(); hidden = false;
  appendChild(child) { this.children.push(child); child.parentNode = this; }
  after(element) { this.sibling = element; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  removeAttribute(name) { this.attributes.delete(name); }
  set src(value) { this.setAttribute('src', value); }
  get src() { return this.getAttribute('src'); }
}

function setup() {
  const elements = [];
  const document = Object.assign(new EventTarget(), { hidden: false, createElement: tag => {
    const element = new Element(); element.tag = tag; elements.push(element); return element;
  } });
  const window = new EventTarget();
  Object.assign(globalThis, { document, window, innerWidth: 1200, innerHeight: 800 });
  const scene = new Scene(), screen = new Mesh(new PlaneGeometry(.602, .332), new MeshBasicMaterial());
  scene.add(screen);
  const canvas = new Element(), player = new SpotifyScreen(screen, scene, canvas);
  const camera = new PerspectiveCamera(60, 1.5, .05, 100);
  const look = (z, targetZ = 0) => { camera.position.set(0, 0, z); camera.lookAt(0, 0, targetZ); camera.updateMatrixWorld(); scene.updateMatrixWorld(true); };
  look(1);
  return { player, camera, look, document, window, canvas, iframe: elements.find(e => e.tag === 'iframe') };
}

test('Spotify loads only near the monitor front, keeps the session when looking away, and stops beyond the desk', () => {
  const s = setup();
  assert.equal(s.iframe.src, null);
  s.look(-1); s.player.update(s.camera, true); assert.equal(s.iframe.src, null);
  s.look(9); s.player.update(s.camera, true); assert.equal(s.iframe.src, null);
  s.look(1); s.player.update(s.camera, true);
  const url = new URL(s.iframe.src);
  assert.equal(url.origin, 'https://open.spotify.com');
  assert.equal(url.pathname, '/embed/playlist/70o2jGU2JKUAtbzEex4lEN');
  assert.equal(url.searchParams.has('autoplay'), false);
  assert.match(s.iframe.allow, /encrypted-media/);
  assert.equal(s.canvas.sibling.hidden, false);
  s.look(1, 2); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, url.href, 'A glance away should not interrupt the music');
  assert.equal(s.canvas.sibling.hidden, true);
  s.look(6); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, null, 'Unloading the document stops audio');
});

test('help/games, hidden tabs, navigation away and lost WebGL stop the embedded audio', () => {
  for (const stop of [
    s => s.player.update(s.camera, false),
    s => { s.document.hidden = true; s.document.dispatchEvent(new Event('visibilitychange')); },
    s => s.window.dispatchEvent(new Event('pagehide')),
    s => s.canvas.dispatchEvent(new Event('webglcontextlost')),
  ]) {
    const s = setup(); s.player.update(s.camera, true); assert.ok(s.iframe.src);
    stop(s);
    assert.equal(s.iframe.src, null);
    assert.equal(s.canvas.sibling.hidden, true);
  }
});
