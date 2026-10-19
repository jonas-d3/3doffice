import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { moveWithCollisions } from './movement.mjs';
import { walkingLocation, mapPoint } from '../office/layout.mjs';
import { planPoint } from '../office/placement.mjs';
import { lobbyPreset } from '../office/lobby-layout.mjs';
import { workspacePreset } from '../office/workspace-layout.mjs';
import { day21Preset, tetrisPreset, donkeyKongPreset } from '../office/day21-layout.mjs';

export type View = 'overview' | 'meeting' | 'lounge' | 'walk' | 'hallway' | 'restrooms' | 'minecraft' | 'kitchen' | 'lobby' | 'workspace' | 'day21' | 'tetris' | 'donkey-kong';
const names = { overview: 'Overblik', meeting: 'Mødebord', lounge: 'Lounge', walk: 'Space Invaders · MØDE 4', hallway: 'Toiletgangen', restrooms: 'Toiletentré', minecraft: 'Minecraft · MØDE 3', kitchen: 'Køkken', lobby: 'Lille gang ved køkkenet', workspace: 'Kontoret', day21: 'Day21', tetris: 'Tetris', 'donkey-kong': 'Donkey Kong' };
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

export class Navigation {
  view: View = 'overview';
  readonly controls: OrbitControls;
  private keys = new Set<string>();
  private yaw = 0;
  private pitch = 0;
  private drag: { id: number; x: number; y: number } | null = null;
  private transition: { from: THREE.Vector3; to: THREE.Vector3; fromTarget: THREE.Vector3; target: THREE.Vector3; elapsed: number } | null = null;
  private direction = new THREE.Vector3();
  private suspended = false;

  get isWalking() { return this.view === 'walk' || this.view === 'hallway' || this.view === 'restrooms' || this.view === 'minecraft' || this.view === 'kitchen' || this.view === 'lobby' || this.view === 'workspace' || this.view === 'day21' || this.view === 'tetris' || this.view === 'donkey-kong'; }

  constructor(readonly camera: THREE.PerspectiveCamera, readonly canvas: HTMLCanvasElement) {
    this.controls = new OrbitControls(camera, canvas);
    this.controls.enableDamping = !reducedMotion;
    this.controls.dampingFactor = .09;
    this.controls.minDistance = 1.2;
    this.controls.maxDistance = 240;
    this.controls.maxPolarAngle = Math.PI / 2 - .035;
    this.controls.panSpeed = .7;
    this.controls.addEventListener('start', () => { this.transition = null; });
    canvas.addEventListener('pointerdown', e => {
      if (this.suspended) return;
      canvas.focus({ preventScroll: true });
      if (!this.isWalking || this.drag || e.button !== 0) return;
      this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove', e => {
      if (!this.drag || this.drag.id !== e.pointerId) return;
      this.yaw += (e.clientX - this.drag.x) * .004;
      this.pitch = THREE.MathUtils.clamp(this.pitch - (e.clientY - this.drag.y) * .004, -1.15, 1.15);
      this.drag.x = e.clientX; this.drag.y = e.clientY;
    });
    const stopDrag = () => { this.drag = null; };
    canvas.addEventListener('pointerup', stopDrag);
    canvas.addEventListener('pointercancel', stopDrag);
    canvas.addEventListener('lostpointercapture', stopDrag);
    canvas.addEventListener('keydown', e => {
      if (this.suspended) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'ShiftLeft', 'ShiftRight'].includes(e.code)) {
        e.preventDefault(); this.transition = null; this.keys.add(e.code);
      }
      if (e.key === '+' || e.key === '=') this.zoom(.82);
      if (e.key === '-') this.zoom(1.22);
      if (e.code === 'KeyH' || e.code === 'Escape') this.setView('overview');
    });
    addEventListener('keyup', e => this.keys.delete(e.code));
    addEventListener('blur', () => this.clearInput());
    canvas.addEventListener('blur', () => this.clearInput());
    document.addEventListener('visibilitychange', () => this.clearInput());
    document.querySelectorAll<HTMLButtonElement>('[data-move]').forEach(button => {
      const code = ({ forward: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD' })[button.dataset.move as string]!;
      button.addEventListener('pointerdown', e => { e.preventDefault(); this.keys.add(code); button.setPointerCapture(e.pointerId); });
      const stop = () => this.keys.delete(code);
      button.addEventListener('pointerup', stop); button.addEventListener('pointercancel', stop); button.addEventListener('lostpointercapture', stop);
      button.addEventListener('click', e => { if (e.detail === 0 && this.isWalking) this.walkStep(code, .35); });
    });
    this.setView('overview', true);
  }

  clearInput() { this.keys.clear(); this.drag = null; }

  suspend(suspended: boolean) {
    this.clearInput(); this.transition = null;
    this.suspended = suspended;
    this.controls.enabled = !suspended && !this.isWalking;
  }

  setView(view: View, immediate = false) {
    this.clearInput(); this.transition = null;
    this.view = view;
    const walking = this.isWalking;
    this.controls.enabled = !walking;
    this.camera.fov = walking ? 67 : 42; this.camera.updateProjectionMatrix();
    document.body.dataset.mode = walking ? 'walk' : view;
    document.querySelector('#view-name')!.textContent = names[view];
    document.querySelector('#map-mode')!.textContent = walking ? 'Din position' : 'Frit kamera';
    document.querySelector<HTMLElement>('.walk-pad')!.hidden = !walking;
    document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(button => {
      const selected = button.dataset.view === view;
      button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));
    });
    for (const id of ['rotate', 'pan', 'zoom-in', 'zoom-out']) document.querySelector<HTMLButtonElement>(`#${id}`)!.disabled = walking;
    document.querySelector('#navigation-hint')!.innerHTML = walking
      ? '<span>W A S D / pile: gå</span><b>·</b><span>Træk / Q E: kig rundt</span><b>·</b><span>Esc: overblik</span>'
      : '<span>Træk: drej</span><b>·</b><span>Højretræk / to fingre: panorer</span><b>·</b><span>Scroll / knib: zoom</span>';
    if (view === 'walk' || view === 'hallway' || view === 'restrooms' || view === 'minecraft' || view === 'kitchen' || view === 'lobby' || view === 'workspace' || view === 'day21' || view === 'tetris' || view === 'donkey-kong') {
      const preset = {
        'donkey-kong': donkeyKongPreset,
        tetris: tetrisPreset,
        day21: day21Preset,
        workspace: workspacePreset,
        lobby: lobbyPreset,
        walk: { x: 5.585, z: 5.55, yaw: 0, pitch: -.025 },
        hallway: { x: 5.585, z: 6.9, yaw: Math.PI, pitch: -.025 },
        restrooms: { x: 6.9, z: 9.6, yaw: Math.PI / 2, pitch: -.2 },
        kitchen: { x: 6.4, z: 15.2, yaw: Math.PI / 2 - .07, pitch: -.09 },
        minecraft: { x: .48, z: 10.55, yaw: Math.PI / 2 - .52, pitch: -.12 },
      }[view];
      this.camera.position.set(preset.x, 1.62, preset.z);
      this.yaw = preset.yaw; this.pitch = preset.pitch;
      this.look(); this.canvas.focus({ preventScroll: true }); return;
    }
    this.setTool('rotate');
    const overviewTarget = new THREE.Vector3(-5.4, .8, 12.2);
    const direction = new THREE.Vector3(21, 29, 32).normalize();
    const right = new THREE.Vector3(direction.z, 0, -direction.x).normalize();
    const up = new THREE.Vector3().crossVectors(direction, right);
    const tangent = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    let overviewDistance = 0;
    // Fit every corner of the expanded floor plan, leaving space for the controls.
    for (const x of [-28.4, 17.6]) for (const y of [0, 4.8]) for (const z of [-.3, 24.7]) {
      const corner = new THREE.Vector3(x, y, z).sub(overviewTarget);
      overviewDistance = Math.max(overviewDistance, corner.dot(direction) + Math.max(
        Math.abs(corner.dot(right)) / (tangent * this.camera.aspect * .9),
        Math.abs(corner.dot(up)) / (tangent * .7),
      ));
    }
    const officeVector = (x: number, y: number, z: number) => { const p = planPoint('office', x, z); return new THREE.Vector3(p.x, y, p.z); };
    const positions = {
      overview: direction.multiplyScalar(overviewDistance).add(overviewTarget),
      // Keep the camera inside the room so the neighboring walls cannot obscure the table.
      meeting: officeVector(1.5, 3.8, 3.05),
      lounge: officeVector(-.15, 2.8, 3.2),
    };
    const targets = { overview: overviewTarget, meeting: officeVector(-1.8, .8, -.6), lounge: officeVector(2.65, .6, -.2) };
    // Flush residual orbit damping before moving to a preset.
    const damping = this.controls.enableDamping; this.controls.enableDamping = false; this.controls.update(); this.controls.enableDamping = damping;
    if (immediate || reducedMotion) {
      this.camera.position.copy(positions[view]); this.controls.target.copy(targets[view]); this.controls.update();
    } else {
      this.transition = { from: this.camera.position.clone(), to: positions[view], fromTarget: this.controls.target.clone(), target: targets[view], elapsed: 0 };
    }
  }

  setTool(tool: 'rotate' | 'pan') {
    this.controls.mouseButtons.LEFT = tool === 'pan' ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE;
    this.controls.touches.ONE = tool === 'pan' ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE;
    for (const id of ['rotate', 'pan']) {
      const button = document.querySelector(`#${id}`)!;
      button.classList.toggle('active', id === tool); button.setAttribute('aria-pressed', String(id === tool));
    }
    this.canvas.style.cursor = tool === 'pan' ? 'move' : 'grab';
  }

  zoom(scale: number) {
    if (this.isWalking) return;
    this.transition = null;
    const offset = this.camera.position.clone().sub(this.controls.target);
    offset.setLength(THREE.MathUtils.clamp(offset.length() * scale, this.controls.minDistance, this.controls.maxDistance));
    this.camera.position.copy(this.controls.target).add(offset); this.controls.update();
  }

  private look() {
    this.direction.set(Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
    this.camera.lookAt(this.camera.position.clone().add(this.direction));
  }

  private walkStep(code: string, distance: number) {
    const forward = code === 'KeyW' ? 1 : code === 'KeyS' ? -1 : 0;
    const side = code === 'KeyD' ? 1 : code === 'KeyA' ? -1 : 0;
    this.move(forward, side, distance);
  }

  private move(forward: number, side: number, distance: number) {
    const divisor = Math.max(1, Math.hypot(forward, side));
    const dx = (Math.sin(this.yaw) * forward + Math.cos(this.yaw) * side) * distance / divisor;
    const dz = (-Math.cos(this.yaw) * forward + Math.sin(this.yaw) * side) * distance / divisor;
    const next = moveWithCollisions(this.camera.position.x, this.camera.position.z, dx, dz);
    this.camera.position.x = next.x; this.camera.position.z = next.z;
  }

  update(dt: number) {
    if (this.suspended) return;
    const key = (...codes: string[]) => codes.some(code => this.keys.has(code)) ? 1 : 0;
    if (this.isWalking) {
      this.yaw += (key('KeyE') - key('KeyQ')) * dt * 1.5;
      this.move(key('KeyW', 'ArrowUp') - key('KeyS', 'ArrowDown'), key('KeyD', 'ArrowRight') - key('KeyA', 'ArrowLeft'), dt * (key('ShiftLeft', 'ShiftRight') ? 2.8 : 1.65));
      this.look();
      const location = walkingLocation(this.camera.position.x, this.camera.position.z);
      const label = document.querySelector('#view-name')!;
      if (label.textContent !== location) label.textContent = location;
    } else {
      if (this.transition) {
        this.transition.elapsed += dt;
        const t = Math.min(this.transition.elapsed / .8, 1), smooth = t * t * (3 - 2 * t);
        this.camera.position.lerpVectors(this.transition.from, this.transition.to, smooth);
        this.controls.target.lerpVectors(this.transition.fromTarget, this.transition.target, smooth);
        if (t === 1) this.transition = null;
      }
      const offset = this.camera.position.clone().sub(this.controls.target);
      const turn = (key('KeyE') - key('KeyQ')) * dt;
      if (turn) { offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), turn); this.camera.position.copy(this.controls.target).add(offset); }
      const horizontal = key('ArrowRight') - key('ArrowLeft'), vertical = key('ArrowUp') - key('ArrowDown');
      if (horizontal || vertical) {
        const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrix, 0).setY(0).normalize();
        const forward = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), right);
        const delta = right.multiplyScalar(horizontal * dt * 2).addScaledVector(forward, vertical * dt * 2);
        this.controls.target.add(delta); this.camera.position.add(delta);
      }
      this.controls.update();
      const target = this.controls.target.clone();
      this.controls.target.clamp(new THREE.Vector3(-29, 0, -1), new THREE.Vector3(18, 4, 25));
      this.camera.position.add(this.controls.target.clone().sub(target));
    }
    const point = this.isWalking ? this.camera.position : this.controls.target;
    this.camera.getWorldDirection(this.direction);
    const angle = Math.atan2(this.direction.x, -this.direction.z) * 180 / Math.PI;
    const marker = mapPoint(point.x, point.z);
    document.querySelector('#map-camera')!.setAttribute('transform', `translate(${marker.x},${marker.y}) rotate(${angle})`);
  }
}
