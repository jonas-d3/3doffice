import * as THREE from 'three';
import { Navigation } from '../../navigation/navigation';
import { Runner } from './runner.mjs';
import { RunnerScreen } from './runner-screen';

export class TVGame {
  private game = new Runner();
  private screen = new RunnerScreen();
  private play = document.querySelector<HTMLButtonElement>('#tv-play')!;
  private dialog = document.querySelector<HTMLDialogElement>('#tv-dialog')!;
  private jump = document.querySelector<HTMLButtonElement>('#tv-jump')!;
  private pause = document.querySelector<HTMLButtonElement>('#tv-pause')!;
  private status = document.querySelector<HTMLElement>('#tv-status')!;
  private center = new THREE.Vector3();
  private projected = new THREE.Vector3();
  private direction = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private saved: { position: THREE.Vector3; rotation: THREE.Quaternion; fov: number } | null = null;
  private best = 0;
  private dirty = true;

  constructor(television: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>, private navigation: Navigation) {
    try {
      const stored = Number(localStorage.getItem('office-tv-best'));
      if (Number.isFinite(stored) && stored > 0) this.best = Math.floor(stored);
    } catch { /* The game also works when browser storage is unavailable. */ }
    television.material.map = this.screen.texture;
    television.material.needsUpdate = true;
    television.getWorldPosition(this.center);
    this.play.addEventListener('click', () => this.open());
    this.jump.addEventListener('click', () => this.action());
    this.pause.addEventListener('click', () => this.togglePause());
    document.querySelector('#tv-close')!.addEventListener('click', () => this.dialog.close());
    this.dialog.addEventListener('close', () => this.close());
    this.dialog.addEventListener('keydown', event => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault();
        if (!event.repeat) this.action();
      } else if (event.code === 'KeyP') {
        event.preventDefault();
        if (!event.repeat) this.togglePause();
      }
    });
    this.dialog.addEventListener('pointerdown', event => {
      if (event.button === 0 && event.target === this.dialog) { event.preventDefault(); this.action(); }
    });
    const pauseOnLeave = () => {
      if (this.active && this.game.status === 'running') { this.game.pause(); this.changed(); }
    };
    addEventListener('blur', pauseOnLeave);
    document.addEventListener('visibilitychange', () => { if (document.hidden) pauseOnLeave(); });
    this.screen.draw(this.game, this.best, false);
  }

  get active() { return this.saved !== null; }

  resize() { if (this.active) this.frameScreen(); }

  private canPlay() {
    const camera = this.navigation.camera;
    camera.getWorldDirection(this.direction);
    this.offset.copy(this.center).sub(camera.position);
    this.projected.copy(this.center).project(camera);
    return this.navigation.isWalking && camera.position.x < this.center.x - .35 &&
      this.offset.length() < 2.8 && this.direction.dot(this.offset.normalize()) > .85 &&
      this.projected.z > -1 && this.projected.z < 1 && Math.abs(this.projected.x) < .8 && Math.abs(this.projected.y) < .7;
  }

  private open() {
    if (this.active || !this.canPlay()) return;
    const camera = this.navigation.camera;
    this.saved = { position: camera.position.clone(), rotation: camera.quaternion.clone(), fov: camera.fov };
    this.navigation.suspend(true);
    document.body.dataset.playing = 'true'; this.play.hidden = true;
    this.dialog.showModal(); this.jump.focus(); this.changed(); this.frameScreen();
  }

  private frameScreen() {
    const camera = this.navigation.camera;
    // Keep the camera in front of the cabinet, including on portrait screens.
    const distance = 1.65;
    const top = this.dialog.querySelector('.tv-heading')!.getBoundingClientRect().bottom + 16;
    const bottom = this.dialog.querySelector('.tv-controls')!.getBoundingClientRect().top - 16;
    const fraction = Math.min(.58, Math.max(60, bottom - top) / innerHeight);
    const tangent = Math.max(.99 / (2 * distance * fraction), 1.84 / (2 * distance * camera.aspect * .84));
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(tangent)); camera.updateProjectionMatrix();
    // Center the TV in the free area between the title and the game controls.
    camera.setViewOffset(innerWidth, innerHeight, 0, (innerHeight - top - bottom) / 2, innerWidth, innerHeight);
    camera.position.copy(this.center).add(new THREE.Vector3(-distance, 0, 0));
    camera.lookAt(this.center); camera.updateMatrixWorld(); this.dirty = true;
  }

  private close() {
    if (!this.saved) return;
    this.game.pause();
    const camera = this.navigation.camera;
    camera.position.copy(this.saved.position); camera.quaternion.copy(this.saved.rotation);
    camera.fov = this.saved.fov; camera.clearViewOffset(); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    this.saved = null; this.navigation.suspend(false); delete document.body.dataset.playing;
    this.navigation.canvas.focus({ preventScroll: true }); this.dirty = true;
  }

  private action() { this.game.action(); this.changed(); }
  private togglePause() {
    if (this.game.status === 'paused') this.game.action(); else this.game.pause();
    this.changed();
  }

  private changed() {
    const state = this.game.status;
    this.jump.textContent = state === 'over' ? 'Spil igen ↗' : state === 'paused' ? 'Fortsæt ↗' : state === 'ready' ? 'Start / hop ↗' : 'Hop ↗';
    this.pause.textContent = state === 'paused' ? 'Fortsæt' : 'Pause';
    this.pause.disabled = state === 'ready' || state === 'over';
    this.status.textContent = state === 'over' ? `${this.game.score} point. Rekord: ${this.best}. Prøv igen!` :
      state === 'paused' ? 'Spillet er sat på pause.' : state === 'ready' ? 'Hop over kaktusserne.' : 'Spillet er i gang.';
    this.dirty = true;
  }

  update(dt: number) {
    if (!this.active) {
      this.play.hidden = !this.canPlay();
      if (!this.play.hidden) {
        this.projected.copy(this.center).add(new THREE.Vector3(0, -.04, 0)).project(this.navigation.camera);
        this.play.style.insetInlineStart = `${(this.projected.x + 1) * innerWidth / 2}px`;
        this.play.style.insetBlockStart = `${(1 - this.projected.y) * innerHeight / 2}px`;
      }
    } else {
      if (this.game.status === 'running') { this.game.update(dt); this.dirty = true; }
      if (this.game.status === 'over' && this.dirty) {
        if (this.game.score > this.best) {
          this.best = this.game.score;
          try { localStorage.setItem('office-tv-best', String(this.best)); } catch { /* Keep the record for this visit. */ }
        }
        this.changed();
      }
    }
    if (!this.dirty) return false;
    this.screen.draw(this.game, this.best, this.active); this.dirty = false; return true;
  }
}
