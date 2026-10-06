import * as THREE from 'three';
import './style.css';
import { createOffice } from './model';
import { Navigation, type View } from './navigation';
import { hallway } from './layout.mjs';

const canvas = document.querySelector<HTMLCanvasElement>('#scene')!;
document.querySelector('#reload')!.addEventListener('click', () => location.reload());

function start() {
const scene = new THREE.Scene();
scene.background = new THREE.Color('#eeede8');
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.05, 100);
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
sun.position.set(-4, 10, 7);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.target.position.set(0, 0, 6); scene.add(sun.target);
Object.assign(sun.shadow.camera, { left: -13, right: 13, top: 13, bottom: -13 });
sun.shadow.normalBias = 0.035;
sun.shadow.bias = -.00015;
sun.shadow.radius = 3;
scene.add(sun);
const model = createOffice();
scene.add(model.office);
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
navigation.controls.addEventListener('change', () => { needsRender = true; });
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  needsRender = true;
  if (navigation.view === 'overview') navigation.setView('overview', true);
});
let previous = performance.now();
const previousPosition = new THREE.Vector3();
const previousRotation = new THREE.Quaternion();
renderer.setAnimationLoop(now => {
  const dt = Math.min((now - previous) / 1000, .05); previous = now;
  if (document.hidden) return;
  navigation.update(dt);
  const walk = navigation.isWalking;
  model.walls[0].visible = walk || camera.position.x > -3.8;
  model.walls[1].visible = walk || camera.position.x < 3.8;
  model.walls[2].visible = walk || camera.position.z > -3.5;
  model.walls[3].visible = walk || camera.position.z < 3.5;
  model.ceiling.visible = walk;
  model.hall.roof.visible = walk;
  model.hall.leftWall.visible = walk || camera.position.x < hallway.maxX;
  model.hall.rightWall.visible = walk || camera.position.x > hallway.minX;
  model.hall.farEnd.visible = walk || camera.position.z < hallway.maxZ;
  model.hall.fittings.visible = model.hall.rightWall.visible;
  model.toilets.roof.visible = walk;
  for (const wall of model.toilets.walls) wall.group.visible = walk || (camera.position[wall.axis] - wall.position) * wall.inside > 0;
  model.minecraft.roof.visible = walk;
  for (const wall of model.minecraft.walls) wall.group.visible = walk || (camera.position[wall.axis] - wall.position) * wall.inside > 0;
  if (needsRender || !previousPosition.equals(camera.position) || !previousRotation.equals(camera.quaternion)) {
    renderer.render(scene, camera);
    previousPosition.copy(camera.position); previousRotation.copy(camera.quaternion); needsRender = false;
  }
});
}

try { start(); } catch (error) {
  console.error(error);
  document.querySelector<HTMLElement>('#error')!.hidden = false;
}
