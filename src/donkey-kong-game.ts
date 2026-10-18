import * as THREE from 'three';
import { DonkeyKong, RoomBarrels } from './donkey-kong.mjs';
import { BarrelInstances, barrelModel, createDonkeyKongModel, kongPosition, kongTable } from './donkey-kong-model';
import { day21GlassRoom } from './day21-layout.mjs';
import { contains } from './layout.mjs';
import type { Navigation } from './navigation';

export class DonkeyKongGame {
  private model;
  private debris = new RoomBarrels({ table: kongTable, room: day21GlassRoom });
  private game = new DonkeyKong(b => this.debris.add(b.x + kongPosition.x, b.y + kongPosition.y, kongPosition.z + .035));
  private instances;
  private barrelMeshes = new Map<number, THREE.Group>();
  private panel = document.querySelector<HTMLElement>('#kong-controls')!;
  private status = document.querySelector<HTMLElement>('#kong-status')!;
  private victory = document.querySelector<HTMLElement>('#kong-victory')!;
  private pauseButton = document.querySelector<HTMLButtonElement>('#kong-pause')!;
  private restartButton = document.querySelector<HTMLButtonElement>('#kong-restart')!;
  private playButton = document.querySelector<HTMLButtonElement>('#kong-play')!;
  private keys = new Set<string>();
  private ray = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private center = kongPosition.clone().add(new THREE.Vector3(0, .55, 0));
  private previousCamera = new THREE.Vector3();
  private saved: { position: THREE.Vector3; rotation: THREE.Quaternion; fov: number } | null = null;
  private gesture: { id: number; x: number; y: number; rotation: THREE.Quaternion } | null = null;
  private dirty = true;

  constructor(private office: THREE.Group, private navigation: Navigation, private blocked: () => boolean) {
    this.model = createDonkeyKongModel(office); this.instances = new BarrelInstances(office);
    this.model.group.visible = false;
    this.previousCamera.copy(navigation.camera.position);
    const canvas = navigation.canvas;
    this.playButton.addEventListener('click', () => this.open());
    canvas.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || this.active || !this.canPlay() || !this.hitsModel(event)) return;
      this.gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, rotation: navigation.camera.quaternion.clone() };
    }, { capture: true });
    canvas.addEventListener('pointerup', event => {
      const gesture = this.gesture; this.gesture = null;
      if (!gesture || gesture.id !== event.pointerId || Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 7) return;
      if (gesture.rotation.angleTo(navigation.camera.quaternion) > .025) return;
      if (this.canPlay() && this.hitsModel(event)) this.open();
    });
    canvas.addEventListener('pointercancel', () => { this.gesture = null; });
    canvas.addEventListener('lostpointercapture', () => { this.gesture = null; });
    canvas.addEventListener('keydown', event => this.key(event), { capture: true });
    this.panel.addEventListener('keydown', event => this.key(event));
    addEventListener('keyup', event => this.keys.delete(event.code));
    const pause = () => { this.keys.clear(); this.gesture = null; this.game.pause(); };
    addEventListener('blur', pause);
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
    canvas.addEventListener('webglcontextlost', pause);
    document.addEventListener('focusin', event => {
      if (this.active && event.target !== canvas && !this.panel.contains(event.target as Node)) pause();
    });
    this.panel.querySelectorAll<HTMLButtonElement>('[data-kong]').forEach(button => {
      const code = button.dataset.kong!;
      button.addEventListener('pointerdown', event => {
        if (!this.active || this.blocked() || event.button !== 0) return;
        event.preventDefault(); button.setPointerCapture(event.pointerId);
        canvas.focus({ preventScroll: true });
        if (code === 'Space') this.game.jump(); else this.keys.add(code);
      });
      const release = () => this.keys.delete(code);
      button.addEventListener('pointerup', release); button.addEventListener('pointercancel', release); button.addEventListener('lostpointercapture', release);
      // Keyboard and assistive-technology activation has no pointerdown.
      button.addEventListener('click', event => {
        if (event.detail !== 0 || !this.active || this.blocked()) return;
        if (code === 'Space') this.game.jump();
        else {
          this.game.update(.1, { left: code === 'ArrowLeft', right: code === 'ArrowRight', up: code === 'ArrowUp', down: code === 'ArrowDown' });
          this.dirty = true;
        }
      });
      button.addEventListener('keyup', release); button.addEventListener('blur', release);
    });
    this.pauseButton.addEventListener('click', () => this.togglePause());
    this.restartButton.addEventListener('click', () => {
      if (this.blocked()) return;
      this.keys.clear(); this.game.start(); canvas.focus({ preventScroll: true });
    });
    document.querySelector('#kong-close')!.addEventListener('click', () => this.close());
    new ResizeObserver(() => this.resize()).observe(this.panel);
  }

  get active() { return this.saved !== null; }

  private canPlay() {
    const p = this.navigation.camera.position;
    return !this.blocked() && this.navigation.isWalking && contains(day21GlassRoom, p.x, p.z)
      && p.distanceTo(this.center) < 2.8 && p.z > kongPosition.z + .25;
  }

  private hitsModel(event?: PointerEvent) {
    const camera = this.navigation.camera, rect = this.navigation.canvas.getBoundingClientRect();
    this.pointer.set(event ? (event.clientX - rect.left) / rect.width * 2 - 1 : 0,
      event ? 1 - (event.clientY - rect.top) / rect.height * 2 : 0);
    camera.updateMatrixWorld(); this.office.updateMatrixWorld(true);
    this.ray.setFromCamera(this.pointer, camera); this.ray.far = 2.8;
    const hit = this.ray.intersectObject(this.office, true).find(hit => {
      for (let object: THREE.Object3D | null = hit.object; object; object = object.parent) if (!object.visible) return false;
      const material = (hit.object as THREE.Mesh).material;
      return material && (Array.isArray(material) ? material : [material]).some(m => m.visible && (!m.transparent || m.opacity > .5));
    });
    for (let object: THREE.Object3D | null = hit?.object ?? null; object; object = object.parent) if (object === this.model.group) return true;
    return false;
  }

  private key(event: KeyboardEvent) {
    if (event.altKey || event.ctrlKey || event.metaKey || this.blocked()) return;
    if (!this.active) {
      if (event.code !== 'Enter' || event.repeat || this.playButton.hidden || !this.canPlay()) return;
      event.preventDefault(); event.stopImmediatePropagation(); this.open(); return;
    }
    if (event.target !== this.navigation.canvas && ['Enter', 'Space'].includes(event.code)) return;
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'Escape', 'KeyP', 'Enter'].includes(event.code)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (event.code === 'Escape') { this.close(); return; }
    if (event.code === 'KeyP' && !event.repeat) { this.togglePause(); return; }
    if (event.code === 'Enter' && !event.repeat) { this.keys.clear(); this.game.start(); }
    if (event.code === 'Space' && !event.repeat) this.game.jump();
    if (event.code.startsWith('Arrow')) this.keys.add(event.code);
  }

  private open() {
    if (this.active || !this.canPlay()) return;
    const camera = this.navigation.camera;
    this.saved = { position: camera.position.clone(), rotation: camera.quaternion.clone(), fov: camera.fov };
    this.navigation.suspend(true); this.panel.hidden = false; this.playButton.hidden = true;
    document.body.dataset.kongPlaying = 'true';
    this.navigation.canvas.setAttribute('aria-describedby', 'kong-instructions kong-status');
    this.game.start(); this.resize(); this.navigation.canvas.focus({ preventScroll: true }); this.dirty = true;
  }

  resize() {
    if (!this.active) return;
    const camera = this.navigation.camera;
    const top = document.querySelector('.header')!.getBoundingClientRect().bottom + 10;
    const bottom = this.panel.getBoundingClientRect().top - 10;
    const fraction = Math.max(80, bottom - top) / innerHeight;
    const distance = 1.55;
    const tangent = Math.max(1.65 / (2 * distance * fraction), 1.65 / (2 * distance * camera.aspect * .88));
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(tangent));
    camera.setViewOffset(innerWidth, innerHeight, 0, (innerHeight - top - bottom) / 2, innerWidth, innerHeight);
    camera.position.set(kongPosition.x, 1.62, kongPosition.z + distance);
    camera.lookAt(kongPosition.x, 1.24, kongPosition.z);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld(); this.dirty = true;
  }

  private togglePause() {
    if (!this.active || this.blocked() || ['over', 'won'].includes(this.game.status)) return;
    this.keys.clear();
    if (this.game.status === 'running') this.game.pause(); else this.game.start();
    this.navigation.canvas.focus({ preventScroll: true });
  }

  private close() {
    if (!this.saved) return;
    this.game.stop(); this.keys.clear();
    const camera = this.navigation.camera;
    camera.position.copy(this.saved.position); camera.quaternion.copy(this.saved.rotation); camera.fov = this.saved.fov;
    camera.clearViewOffset(); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    this.saved = null; this.panel.hidden = true; delete document.body.dataset.kongPlaying;
    this.navigation.suspend(false); this.previousCamera.copy(camera.position);
    this.navigation.canvas.setAttribute('aria-describedby', 'navigation-hint');
    this.navigation.canvas.focus({ preventScroll: true }); this.dirty = true;
  }

  update(dt: number) {
    let changed = this.dirty; this.dirty = false;
    const camera = this.navigation.camera;
    const visible = this.active || (this.navigation.isWalking && contains(day21GlassRoom, camera.position.x, camera.position.z));
    if (this.model.group.visible !== visible) { this.model.group.visible = visible; changed = true; }
    if (this.active && this.blocked()) { this.keys.clear(); this.game.pause(); }
    if (!this.blocked()) {
      if (this.game.update(dt, { left: this.keys.has('ArrowLeft'), right: this.keys.has('ArrowRight'), up: this.keys.has('ArrowUp'), down: this.keys.has('ArrowDown') })) changed = true;
      const movement = this.previousCamera.distanceTo(camera.position);
      if (!this.active && this.navigation.isWalking && movement < .2) {
        this.debris.nudge(camera.position.x, camera.position.z, camera.position.x - this.previousCamera.x, camera.position.z - this.previousCamera.z);
      }
      if (this.debris.update(dt)) { this.instances.update(this.debris.barrels); changed = true; }
    }
    this.previousCamera.copy(camera.position);
    const projected = this.center.clone().project(camera);
    this.playButton.hidden = this.active || !this.canPlay() || Math.abs(projected.x) > .8 || Math.abs(projected.y) > .7 || projected.z < -1 || projected.z > 1;
    if (!this.playButton.hidden) {
      this.playButton.style.insetInlineStart = `${(projected.x + 1) * innerWidth / 2}px`;
      this.playButton.style.insetBlockStart = `${(1 - projected.y) * innerHeight / 2}px`;
    }
    if (changed) {
      const p = this.game.player;
      this.model.player.position.set(p.x, p.y, .035);
      this.model.player.rotation.y = p.facing < 0 ? -.35 : .35;
      this.model.player.scale.setScalar(p.invulnerable > 0 ? .9 : 1);
      for (const b of this.game.barrels) {
        if (!this.barrelMeshes.has(b.id)) { const mesh = barrelModel(); this.model.group.add(mesh); this.barrelMeshes.set(b.id, mesh); }
        const mesh = this.barrelMeshes.get(b.id)!; mesh.position.set(b.x, b.y, .035); mesh.rotation.z = b.angle;
      }
      for (const [id, mesh] of this.barrelMeshes) if (!this.game.barrels.some(b => b.id === id)) {
        this.model.group.remove(mesh); this.barrelMeshes.delete(id);
      }
    }
    const state = this.game.status, finished = state === 'over' || state === 'won';
    this.victory.hidden = state !== 'won';
    const message = state === 'over' ? `Game over · ${this.game.score} point` : state === 'won' ? `Du vandt! · ${this.game.score} point` : state === 'paused' ? 'Pause · fortsæt med P' : `${this.game.lives} liv · ${this.game.score} point`;
    if (message !== this.status.textContent) this.status.textContent = message;
    this.pauseButton.textContent = state === 'paused' ? 'Fortsæt · P' : 'Pause · P';
    this.pauseButton.disabled = finished; this.restartButton.hidden = !finished;
    this.panel.querySelectorAll<HTMLButtonElement>('[data-kong]').forEach(button => { button.disabled = state !== 'running'; });
    return changed;
  }
}
