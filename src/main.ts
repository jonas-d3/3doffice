import * as THREE from 'three';
import './style.css';
import { createOffice } from './model';
import { Navigation, type View } from './navigation';
import { renderMinimap } from './minimap';
import { TVGame } from './tv-game';
import { WhiteboardGame } from './whiteboard-game';
import { Visitor } from './visitor';
import { EasterEggs } from './easter-eggs';
import { YoutubeScreen } from './youtube-screen';
import { TetrisGame } from './tetris-game';
import { DonkeyKongGame } from './donkey-kong-game';

const canvas = document.querySelector<HTMLCanvasElement>('#scene')!;
document.querySelector('#reload')!.addEventListener('click', () => location.reload());

function start() {
renderMinimap();
const scene = new THREE.Scene();
scene.background = new THREE.Color('#eeede8');
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.05, 300);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
const navigation = new Navigation(camera, canvas);
scene.add(new THREE.HemisphereLight('#f5f8ff', '#d6cbbc', 2.6));
const sun = new THREE.DirectionalLight('#fff0da', 2.4);
sun.position.set(-12, 36, 22);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.target.position.set(-5.5, 0, 15); scene.add(sun.target);
Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32 });
sun.shadow.normalBias = 0.035;
sun.shadow.bias = -.00015;
sun.shadow.radius = 3;
scene.add(sun);
const model = createOffice();
scene.add(model.office);
const youtube = new YoutubeScreen(model.martinScreen, scene, canvas);
const visitor = new Visitor();
scene.add(visitor.group, visitor.deskCups);
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
visitor.walk.paused = motionPreference.matches;
motionPreference.addEventListener('change', () => {
  visitor.walk.paused = motionPreference.matches;
  if (motionPreference.matches) model.jesperScreen.settleCatch();
  needsRender = true;
});
const tvGame = new TVGame(model.television, navigation);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ opacity: .12 }));
ground.rotation.x = -Math.PI / 2; ground.position.y = -.265; ground.receiveShadow = true;
scene.add(ground);

document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(button => {
  button.addEventListener('click', () => navigation.setView(button.dataset.view as View));
});
document.querySelector('#rotate')!.addEventListener('click', () => navigation.setTool('rotate'));
document.querySelector('#pan')!.addEventListener('click', () => navigation.setTool('pan'));
document.querySelector('#zoom-in')!.addEventListener('click', () => navigation.zoom(.82));
document.querySelector('#zoom-out')!.addEventListener('click', () => navigation.zoom(1.22));
document.querySelector('#reset')!.addEventListener('click', () => navigation.setView('overview'));
const dialog = document.querySelector<HTMLDialogElement>('#help-dialog')!;
const tetrisGame = new TetrisGame(model.tetrisGlass, model.office, navigation, () => dialog.open || tvGame.active || kongGame.active || document.hidden);
const kongGame = new DonkeyKongGame(model.office, navigation, () => dialog.open || tvGame.active || tetrisGame.active || document.hidden);
const whiteboardGame = new WhiteboardGame(model.whiteboard, model.office, navigation, motionPreference, () => dialog.open || tvGame.active || tetrisGame.active || kongGame.active || document.hidden);
const easterEggs = new EasterEggs(model.office, model.coffee, model.jesperScreen, visitor, navigation, motionPreference, () => dialog.open || tvGame.active || tetrisGame.active || kongGame.active || document.hidden);
document.querySelector('#help')!.addEventListener('click', () => { navigation.clearInput(); dialog.showModal(); });
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
const fullscreen = document.querySelector<HTMLButtonElement>('#fullscreen')!;
fullscreen.hidden = !document.fullscreenEnabled;
fullscreen.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch { document.querySelector('#view-name')!.textContent = 'Fuld skærm er ikke tilgængelig'; }
});
document.addEventListener('fullscreenchange', () => fullscreen.setAttribute('aria-label', document.fullscreenElement ? 'Afslut fuld skærm' : 'Fuld skærm'));
canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); renderer.setAnimationLoop(null); document.querySelector<HTMLElement>('#error')!.hidden = false; });
let needsRender = true;
// Repaint even when the camera is still after an image texture finishes loading.
THREE.DefaultLoadingManager.onLoad = () => { needsRender = true; model.holbechScreens.dirty = true; };
navigation.controls.addEventListener('change', () => { needsRender = true; });
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  tvGame.resize();
  tetrisGame.resize();
  kongGame.resize();
  youtube.resize();
  needsRender = true;
  if (navigation.view === 'overview') navigation.setView('overview', true);
});
let previous = performance.now();
const previousPosition = new THREE.Vector3();
const previousRotation = new THREE.Quaternion();
renderer.setAnimationLoop(now => {
  const elapsed = (now - previous) / 1000;
  const dt = Math.min(elapsed, .05); previous = now;
  if (document.hidden) return;
  navigation.update(dt);
  if (model.updateScreens(camera, dt, !motionPreference.matches && !dialog.open && !tvGame.active && !kongGame.active)) needsRender = true;
  if (!tvGame.active && !dialog.open && visitor.update(dt, motionPreference.matches)) needsRender = true;
  if (model.updateRestroomDoor(visitor.walk.restroomDoorClosure)) needsRender = true;
  if (tvGame.update(dt)) needsRender = true;
  if (tetrisGame.update(dt)) needsRender = true;
  // Its fixed simulation steps keep the tabletop game playable on slower 3D renderers.
  if (kongGame.update(Math.min(elapsed, .25))) needsRender = true;
  const walk = navigation.isWalking;
  for (const wall of model.walls) wall.group.visible = walk || (camera.position[wall.axis] - wall.position) * wall.inside > 0;
  for (const roof of model.roofs) roof.visible = walk;
  if (whiteboardGame.update(dt)) needsRender = true;
  if (easterEggs.update(dt)) needsRender = true;
  if (needsRender || !previousPosition.equals(camera.position) || !previousRotation.equals(camera.quaternion)) {
    model.holbechScreens.render(renderer, scene, model.walls, model.roofs, visitor);
    renderer.render(scene, camera);
    previousPosition.copy(camera.position); previousRotation.copy(camera.quaternion); needsRender = false;
  }
  youtube.update(camera, !dialog.open && !tvGame.active);
});
}

try { start(); } catch (error) {
  console.error(error);
  document.querySelector<HTMLElement>('#error')!.hidden = false;
}
