import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene } from 'three';
import { SpotifyScreen } from '../src/screens/spotify-screen.ts';
import { YoutubeScreen } from '../src/screens/youtube-screen.ts';

class Element extends EventTarget {
  style = {}; children = []; attributes = new Map(); hidden = false;
  appendChild(child) { this.children.push(child); child.parentNode = this; }
  after(element) { this.sibling = element; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  removeAttribute(name) { this.attributes.delete(name); }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(child => child !== this); this.parentNode = null; }
  focus() {}
  set src(value) { this.setAttribute('src', value); }
  get src() { return this.getAttribute('src'); }
}

function setup(Player) {
  const elements = [];
  const document = Object.assign(new EventTarget(), { hidden: false, createElement: tag => {
    const element = new Element(); element.tag = tag; elements.push(element); return element;
  } });
  const window = new EventTarget();
  Object.assign(globalThis, { document, window, innerWidth: 1200, innerHeight: 800 });
  const scene = new Scene(), screen = new Mesh(new PlaneGeometry(.602, .332), new MeshBasicMaterial());
  scene.add(screen);
  const canvas = new Element(), player = new Player(screen, scene, canvas);
  const camera = new PerspectiveCamera(60, 1.5, .05, 100);
  const look = (z, targetZ = 0) => { camera.position.set(0, 0, z); camera.lookAt(0, 0, targetZ); camera.updateMatrixWorld(); scene.updateMatrixWorld(true); };
  look(1);
  const button = elements.find(e => e.tag === 'button');
  return { player, camera, look, document, window, canvas, iframe: elements.find(e => e.tag === 'iframe'), button,
    activate: () => button.dispatchEvent(new Event('click')) };
}

for (const [name, Player, origin, pathname] of [
  ['YouTube', YoutubeScreen, 'https://www.youtube.com', '/embed/pomFE55c_Sw'],
  ['Spotify', SpotifyScreen, 'https://open.spotify.com', '/embed/playlist/70o2jGU2JKUAtbzEex4lEN'],
]) {
test(`${name} stays local until activation, preserves playback on a glance away, and requires a new click after departure`, () => {
  const s = setup(Player);
  assert.equal(s.iframe.src, null);
  s.look(-1); s.player.update(s.camera, true); assert.equal(s.iframe.src, null);
  s.look(9); s.player.update(s.camera, true); assert.equal(s.iframe.src, null);
  s.look(1); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, null, 'Approaching the screen must not contact the external service');
  assert.equal(s.iframe.parentNode == null, true, 'No browsing context before a click');
  assert.equal(s.button.hidden, false);
  s.activate();
  const url = new URL(s.iframe.src);
  assert.equal(url.origin, origin);
  assert.equal(url.pathname, pathname);
  assert.equal(url.searchParams.get('autoplay'), name === 'YouTube' ? '1' : null);
  assert.match(s.iframe.allow, /encrypted-media/);
  assert.equal(s.button.hidden, true);
  assert.ok(s.iframe.parentNode);
  assert.equal(s.canvas.sibling.hidden, false);
  s.look(1, 2); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, url.href, 'A glance away should not interrupt the music');
  assert.equal(s.canvas.sibling.hidden, true);
  s.look(6); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, null, 'Unloading the document stops audio');
  assert.equal(s.iframe.parentNode, null);
  s.look(1); s.player.update(s.camera, true);
  assert.equal(s.iframe.src, null, 'Returning must not reload the player automatically');
  assert.equal(s.button.hidden, false);
  s.activate(); assert.equal(s.iframe.src, url.href);
});

test(`${name}: help/games, hidden tabs, navigation away and lost WebGL restore the preview`, () => {
  for (const stop of [
    s => s.player.update(s.camera, false),
    s => { s.document.hidden = true; s.document.dispatchEvent(new Event('visibilitychange')); },
    s => s.window.dispatchEvent(new Event('pagehide')),
    s => s.canvas.dispatchEvent(new Event('webglcontextlost')),
  ]) {
    const s = setup(Player); s.player.update(s.camera, true); s.activate(); assert.ok(s.iframe.src);
    stop(s);
    assert.equal(s.iframe.src, null);
    assert.equal(s.canvas.sibling.hidden, true);
    assert.equal(s.iframe.parentNode, null);
    assert.equal(s.button.hidden, false);
  }
});

test(`${name} ignores activation while hidden or blocked`, () => {
  const s = setup(Player);
  s.activate(); assert.equal(s.iframe.src, null);
  s.player.update(s.camera, true); s.player.update(s.camera, false);
  s.activate(); assert.equal(s.iframe.src, null);
  s.player.update(s.camera, true); s.document.hidden = true;
  s.activate(); assert.equal(s.iframe.src, null);
});
}
