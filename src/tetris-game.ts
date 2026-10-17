import * as THREE from 'three';
import { Tetris } from './tetris.mjs';
import { TetrisScreen } from './tetris-screen';
import { contains, day21Meeting } from './layout.mjs';
import type { Navigation } from './navigation';

export class TetrisGame {
  private game = new Tetris();
  private screen = new TetrisScreen();
  private panel = document.querySelector<HTMLElement>('#tetris-controls')!;
  private pauseButton = document.querySelector<HTMLButtonElement>('#tetris-pause')!;
  private restart = document.querySelector<HTMLButtonElement>('#tetris-restart')!;
  private status = document.querySelector<HTMLElement>('#tetris-status')!;
  private ray = new THREE.Raycaster();
  private surfaces: THREE.Mesh[] = [];
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private saved: { position: THREE.Vector3; rotation: THREE.Quaternion; fov: number } | null = null;
  private gesture: { id: number; x: number; y: number; position: THREE.Vector3; rotation: THREE.Quaternion } | null = null;
  private best = 0;
  private drawn = -1;
  private dirty = true;

  constructor(
    private glass: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>,
    office: THREE.Group,
    private navigation: Navigation,
    private blocked: () => boolean,
  ) {
    glass.material.map = this.screen.texture; glass.material.needsUpdate = true;
    office.updateMatrixWorld(true); glass.getWorldPosition(this.center);
    this.normal.set(0, 0, 1).transformDirection(glass.matrixWorld);
    office.traverse(object => { if (object instanceof THREE.Mesh) this.surfaces.push(object); });
    try {
      const best = Number(localStorage.getItem('office-tetris-best'));
      if (Number.isFinite(best) && best > 0) this.best = Math.floor(best);
    } catch { /* Storage is optional. */ }
    const canvas = navigation.canvas;
    canvas.addEventListener('pointerdown', event => {
      if (!event.isPrimary) { this.gesture = null; return; }
      if (event.button !== 0 || this.active || !this.canPlay() || !this.hitsGlass(event)) return;
      this.gesture = { id: event.pointerId, x: event.clientX, y: event.clientY,
        position: navigation.camera.position.clone(), rotation: navigation.camera.quaternion.clone() };
    }, { capture: true });
    canvas.addEventListener('pointermove', event => {
      if (this.gesture && Math.hypot(event.clientX - this.gesture.x, event.clientY - this.gesture.y) > 7) this.gesture = null;
      if (!this.active && this.canPlay() && this.hitsGlass(event)) canvas.dataset.tetrisHover = 'true';
      else delete canvas.dataset.tetrisHover;
    });
    canvas.addEventListener('pointerup', event => {
      const gesture = this.gesture; this.gesture = null;
      if (!gesture || gesture.id !== event.pointerId || Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 7) return;
      if (gesture.position.distanceToSquared(navigation.camera.position) > .0001 || gesture.rotation.angleTo(navigation.camera.quaternion) > .025) return;
      if (this.canPlay() && this.hitsGlass(event)) this.open();
    });
    const cancel = () => { this.gesture = null; delete canvas.dataset.tetrisHover; };
    canvas.addEventListener('pointercancel', cancel); canvas.addEventListener('lostpointercapture', cancel);
    canvas.addEventListener('pointerleave', cancel);
    canvas.addEventListener('keydown', event => this.key(event), { capture: true });
    this.panel.addEventListener('keydown', event => this.key(event));
    this.panel.querySelectorAll<HTMLButtonElement>('[data-tetris]').forEach(button => {
      button.addEventListener('click', () => {
        if (!this.active || this.blocked()) return;
        const action = button.dataset.tetris;
        if (action === 'left') this.game.move(-1);
        if (action === 'right') this.game.move(1);
        if (action === 'rotate') this.game.rotate();
        if (action === 'down') this.game.softDrop();
        if (action === 'drop') this.game.drop();
        canvas.focus({ preventScroll: true });
      });
    });
    this.pauseButton.addEventListener('click', () => this.togglePause());
    this.restart.addEventListener('click', () => { if (!this.blocked()) this.game.start(); canvas.focus({ preventScroll: true }); });
    document.querySelector('#tetris-close')!.addEventListener('click', () => this.close());
    const pause = () => { cancel(); this.game.pause(); };
    addEventListener('blur', pause);
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
    canvas.addEventListener('webglcontextlost', pause);
    // Focusing unrelated controls must not leave a round running without keyboard input.
    document.addEventListener('focusin', event => {
      if (this.active && event.target !== canvas && !this.panel.contains(event.target as Node)) this.game.pause();
    });
    new ResizeObserver(() => this.resize()).observe(this.panel);
    this.screen.draw(this.game, this.best);
  }

  get active() { return this.saved !== null; }

  private canPlay() {
    const p = this.navigation.camera.position;
    return this.navigation.isWalking && !this.blocked() && contains(day21Meeting, p.x, p.z)
      && p.distanceTo(this.center) < 3.2 && p.clone().sub(this.center).dot(this.normal) > .2;
  }

  private hitsGlass(event?: PointerEvent) {
    const camera = this.navigation.camera, rect = this.navigation.canvas.getBoundingClientRect();
    camera.updateMatrixWorld();
    const pointer = event ? new THREE.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2) : new THREE.Vector2();
    this.ray.setFromCamera(pointer, camera); this.ray.far = 3.2;
    const hit = this.ray.intersectObjects(this.surfaces, false).find(hit => {
      for (let object: THREE.Object3D | null = hit.object; object; object = object.parent) if (!object.visible) return false;
      if (hit.object === this.glass) return true;
      const material = (hit.object as THREE.Mesh).material;
      return (Array.isArray(material) ? material : [material]).some(m => m.visible && (!m.transparent || m.opacity >= .5));
    });
    return hit?.object === this.glass;
  }

  private key(event: KeyboardEvent) {
    if (event.altKey || event.ctrlKey || event.metaKey || this.blocked()) return;
    if (!this.active) {
      if (event.code !== 'Enter' || event.repeat || !this.canPlay() || !this.hitsGlass()) return;
      event.preventDefault(); event.stopImmediatePropagation(); this.open(); return;
    }
    // Preserve native Enter/Space activation for focused buttons.
    if (event.target !== this.navigation.canvas && ['Enter', 'Space'].includes(event.code)) return;
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'KeyP', 'Escape', 'Enter'].includes(event.code)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (event.code === 'Escape') { this.close(); return; }
    if (event.code === 'KeyP' && !event.repeat) { this.togglePause(); return; }
    if (event.code === 'Enter' && !event.repeat) this.game.start();
    if (event.code === 'ArrowLeft') this.game.move(-1);
    if (event.code === 'ArrowRight') this.game.move(1);
    if (event.code === 'ArrowDown') this.game.softDrop();
    if (event.code === 'ArrowUp' && !event.repeat) this.game.rotate();
    if (event.code === 'Space' && !event.repeat) this.game.drop();
  }

  private open() {
    if (this.active || !this.canPlay()) return;
    const camera = this.navigation.camera;
    this.saved = { position: camera.position.clone(), rotation: camera.quaternion.clone(), fov: camera.fov };
    this.navigation.suspend(true); this.panel.hidden = false;
    document.body.dataset.tetrisPlaying = 'true'; delete this.navigation.canvas.dataset.tetrisHover;
    this.navigation.canvas.setAttribute('aria-describedby', 'tetris-instructions tetris-status');
    this.game.start(); this.resize(); this.navigation.canvas.focus({ preventScroll: true }); this.dirty = true;
  }

  resize() {
    if (!this.active) return;
    const camera = this.navigation.camera, distance = 1.6;
    const top = document.querySelector('.header')!.getBoundingClientRect().bottom + 12;
    const bottom = this.panel.getBoundingClientRect().top - 12;
    const fraction = Math.max(60, bottom - top) / innerHeight;
    const tangent = Math.max(2.3 / (2 * distance * fraction), .83 / (2 * distance * camera.aspect * .85));
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(tangent));
    camera.setViewOffset(innerWidth, innerHeight, 0, (innerHeight - top - bottom) / 2, innerWidth, innerHeight);
    camera.position.copy(this.center).addScaledVector(this.normal, distance);
    camera.lookAt(this.center); camera.updateProjectionMatrix(); camera.updateMatrixWorld(); this.dirty = true;
  }

  private togglePause() {
    if (!this.active || this.blocked() || this.game.status === 'over') return;
    if (this.game.status === 'running') this.game.pause(); else this.game.start();
    this.navigation.canvas.focus({ preventScroll: true });
  }

  private close() {
    if (!this.saved) return;
    this.game.pause(); this.saveBest();
    const camera = this.navigation.camera;
    camera.position.copy(this.saved.position); camera.quaternion.copy(this.saved.rotation);
    camera.fov = this.saved.fov; camera.clearViewOffset(); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    this.saved = null; this.panel.hidden = true; delete document.body.dataset.tetrisPlaying;
    this.navigation.suspend(false);
    this.navigation.canvas.setAttribute('aria-describedby', 'navigation-hint');
    this.navigation.canvas.focus({ preventScroll: true }); this.dirty = true;
  }

  private saveBest() {
    try { localStorage.setItem('office-tetris-best', String(this.best)); } catch { /* Keep the session record. */ }
  }

  update(dt: number) {
    if (this.active) {
      if (this.blocked()) this.game.pause(); else this.game.update(dt);
    }
    if (!this.dirty && this.drawn === this.game.revision) return false;
    this.drawn = this.game.revision; this.dirty = false;
    this.best = Math.max(this.best, this.game.score);
    const state = this.game.status;
    this.pauseButton.textContent = state === 'paused' ? 'Fortsæt · P' : 'Pause · P';
    this.pauseButton.disabled = state === 'over'; this.restart.hidden = state !== 'over';
    this.panel.querySelectorAll<HTMLButtonElement>('[data-tetris]').forEach(button => { button.disabled = state !== 'running'; });
    const message = state === 'over' ? `Game over · ${this.game.score} point` : state === 'paused' ? 'Pause · fortsæt med P eller knappen' : `${this.game.score} point · ${this.game.lines} rækker`;
    if (message !== this.status.textContent) this.status.textContent = message;
    if (state === 'over') this.saveBest();
    this.screen.draw(this.game, this.best, this.active);
    return true;
  }
}
