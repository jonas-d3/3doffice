import * as THREE from 'three';
import './style.css';
import { loadQueue, onAssetChange, updateImagePriorities } from './image-assets';
import { createOffice } from './model';
import { Navigation, type View } from './navigation';
import { renderMinimap } from './minimap';
import { Visitor } from './visitor';
import { LazyFeature } from './lazy-feature.mjs';
import { screenPriority } from './feature-triggers.mjs';
import { refreshSceneSurfaces } from './scene-surfaces';
import { featureStatus } from './feature-status';
import { screenPlaceholder } from './lazy-screens';

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
const modelStart = performance.now();
const model = createOffice();
const modelMs = performance.now() - modelStart;
model.television.material = screenPlaceholder('TV · Runner');
model.whiteboard.material = screenPlaceholder('Space Invaders');
model.tetrisGlass.material.map = screenPlaceholder('Tetris').map;
scene.add(model.office);
const youtube = new LazyFeature('YouTube', loadQueue, () => import('./youtube-screen'), ({ YoutubeScreen }) => new YoutubeScreen(model.martinScreen, scene, canvas), featureChanged, featureFailed);
youtube.prefetch();
const visitor = new Visitor();
scene.add(visitor.group, visitor.deskCups);
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
visitor.walk.paused = motionPreference.matches;
motionPreference.addEventListener('change', () => {
  visitor.walk.paused = motionPreference.matches;
  if (motionPreference.matches) model.jesperScreen.value?.settleCatch();
  needsRender = true;
});
const tvGame = new LazyFeature('TV', loadQueue, () => import('./tv-game'), ({ TVGame }) => new TVGame(model.television, navigation), featureChanged, featureFailed);
tvGame.prefetch();
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
const tetrisGame = new LazyFeature('Tetris', loadQueue, () => import('./tetris-game'), ({ TetrisGame }) => new TetrisGame(model.tetrisGlass, model.office, navigation, (): boolean => dialog.open || !!tvGame.value?.active || !!kongGame.value?.active || document.hidden), featureChanged, featureFailed);
tetrisGame.prefetch();
const kongGame = new LazyFeature('Donkey Kong', loadQueue, () => import('./donkey-kong-game'), ({ DonkeyKongGame }) => new DonkeyKongGame(model.office, navigation, (): boolean => dialog.open || !!tvGame.value?.active || !!tetrisGame.value?.active || document.hidden), featureChanged, featureFailed);
kongGame.prefetch();
const whiteboardGame = new LazyFeature('Whiteboard', loadQueue, () => import('./whiteboard-game'), ({ WhiteboardGame }) => new WhiteboardGame(model.whiteboard, model.office, navigation, motionPreference, (): boolean => dialog.open || !!tvGame.value?.active || !!tetrisGame.value?.active || !!kongGame.value?.active || document.hidden), featureChanged, featureFailed);
whiteboardGame.prefetch();
const blocked = (): boolean => dialog.open || !!tvGame.value?.active || !!tetrisGame.value?.active || !!kongGame.value?.active || document.hidden;
const coffee = new LazyFeature('Kaffe', loadQueue, () => import('./coffee-controller'), ({ CoffeeController }) => new CoffeeController(model.office, model.coffee, visitor, navigation, blocked), featureChanged, featureFailed);
const salmon = new LazyFeature('Laks', loadQueue, () => import('./salmon-controller'), ({ SalmonController }) => new SalmonController(model.office, model.jesperScreen.value!, navigation, motionPreference, blocked), featureChanged, featureFailed);
const creeper = new LazyFeature('Creeper', loadQueue, () => import('./creeper-controller'), ({ CreeperController }) => new CreeperController(model.office, navigation, motionPreference, blocked), featureChanged, featureFailed);
coffee.prefetch(); salmon.prefetch(); creeper.prefetch();
const features = [youtube, tvGame, tetrisGame, kongGame, whiteboardGame, coffee, salmon, creeper, ...model.screenFeatures];
const loadingStatus = featureStatus(features);
addEventListener('feature-load-error', event => featureFailed((event as CustomEvent<string>).detail));
const pendingTargets = [
  { feature: tetrisGame, screen: model.tetrisGlass },
  { feature: whiteboardGame, screen: model.whiteboard },
  { feature: tvGame, screen: model.television },
];
function prepareInteraction() {
  const pending = pendingTargets.find(({ feature, screen }) => !feature.value && screenPriority(screen, camera, innerHeight) > 0);
  if (pending) { void pending.feature.prepare(100, true); loadingStatus.show(pending.feature); }
}
canvas.addEventListener('pointerdown', prepareInteraction);
canvas.addEventListener('keydown', event => { if (event.code === 'Enter') prepareInteraction(); });
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
function featureChanged() { refreshSceneSurfaces(model.office); needsRender = true; }
function featureFailed(name: string) { loadingStatus.failed(name); }
// Repaint even when the camera is still after an image texture finishes loading.
onAssetChange(() => { refreshSceneSurfaces(model.office); needsRender = true; if (model.holbechScreens.value) model.holbechScreens.value.dirty = true; });
THREE.DefaultLoadingManager.onLoad = () => { needsRender = true; };
loadQueue.setPaused(document.hidden);
document.addEventListener('visibilitychange', () => loadQueue.setPaused(document.hidden));
let firstFrame = true;
const measuring = new URLSearchParams(location.search).has('measure');
const metrics = { modelMs, firstFrame: 0, frames: [] as object[], intervals: [] as number[] };
if (measuring) {
  Object.assign(window, { officeDebug: { metrics, model, camera, navigation, renderer, scene, features, visitor } });
  renderer.info.autoReset = false;
}
navigation.controls.addEventListener('change', () => { needsRender = true; });
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  tvGame.value?.resize();
  tetrisGame.value?.resize();
  kongGame.value?.resize();
  youtube.value?.resize();
  needsRender = true;
  if (navigation.view === 'overview') navigation.setView('overview', true);
});
let previous = performance.now();
const featurePoint = new THREE.Vector3();
const previousPosition = new THREE.Vector3();
const previousRotation = new THREE.Quaternion();
renderer.setAnimationLoop(now => {
  const elapsed = (now - previous) / 1000;
  const dt = Math.min(elapsed, .05); previous = now;
  if (document.hidden) return;
  if (measuring && metrics.intervals.length < 3000) metrics.intervals.push(elapsed * 1000);
  navigation.update(dt);
  loadingStatus.update();
  updateImagePriorities(camera);
  coffee.setRelevant(navigation.view === 'kitchen' || camera.position.distanceTo(model.coffee.getWorldPosition(featurePoint)) < 6);
  salmon.setRelevant(navigation.isWalking && !!model.jesperScreen.value);
  creeper.setRelevant(navigation.isWalking);
  youtube.setRelevant(screenPriority(model.martinScreen, camera, innerHeight) > 0);
  kongGame.setRelevant(navigation.isWalking && camera.position.x > -7.5 && camera.position.x < -.5 && camera.position.z > 17.5);
  tvGame.setRelevant(screenPriority(model.television, camera, innerHeight) > 0);
  whiteboardGame.setRelevant(navigation.view === 'walk' || screenPriority(model.whiteboard, camera, innerHeight) > 0);
  tetrisGame.setRelevant(navigation.view === 'tetris' || screenPriority(model.tetrisGlass, camera, innerHeight) > 0);
  if (model.updateScreens(camera, dt, !motionPreference.matches && !dialog.open && !tvGame.value?.active && !kongGame.value?.active)) needsRender = true;
  if (!tvGame.value?.active && !dialog.open && visitor.update(dt, motionPreference.matches)) needsRender = true;
  if (model.updateRestroomDoor(visitor.walk.restroomDoorClosure)) needsRender = true;
  if (tvGame.value?.update(dt)) needsRender = true;
  if (tetrisGame.value?.update(dt)) needsRender = true;
  // Its fixed simulation steps keep the tabletop game playable on slower 3D renderers.
  if (kongGame.value?.update(Math.min(elapsed, .25))) needsRender = true;
  const walk = navigation.isWalking;
  for (const wall of model.walls) wall.group.visible = walk || (camera.position[wall.axis] - wall.position) * wall.inside > 0;
  for (const roof of model.roofs) roof.visible = walk;
  if (whiteboardGame.value?.update(dt)) needsRender = true;
  if (coffee.value?.update()) needsRender = true;
  if (salmon.value?.update()) needsRender = true;
  if (creeper.value?.update(dt)) needsRender = true;
  if (needsRender || !previousPosition.equals(camera.position) || !previousRotation.equals(camera.quaternion)) {
    if (measuring) renderer.info.reset();
    model.holbechScreens.value?.render(renderer, scene, model.walls, model.roofs, visitor);
    const offscreenCalls = measuring ? renderer.info.render.calls : 0;
    if (measuring) renderer.info.reset();
    const renderStart = measuring ? performance.now() : 0;
    renderer.render(scene, camera);
    if (measuring && metrics.frames.length < 1000) metrics.frames.push({ time: performance.now(), cpu: performance.now() - renderStart, offscreenCalls, ...renderer.info.render, memory: { ...renderer.info.memory } });
    if (firstFrame) { firstFrame = false; requestAnimationFrame(() => { metrics.firstFrame = performance.now(); loadQueue.release(); }); }
    previousPosition.copy(camera.position); previousRotation.copy(camera.quaternion); needsRender = false;
  }
  youtube.value?.update(camera, !dialog.open && !tvGame.value?.active);
});
}

try { start(); } catch (error) {
  console.error(error);
  document.querySelector<HTMLElement>('#error')!.hidden = false;
}
