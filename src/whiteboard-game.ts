import * as THREE from 'three';
import { WalkInInvaders } from './whiteboard-play.mjs';
import { InvadersScreen } from './invaders-screen';
import { MicrophoneShots } from './microphone-shots';
import type { Navigation } from './navigation';

type Point = [number, number];
const inDrawingArea = ([x, y]: Point) => x > 100 && x < 700 && y > 580 && y < 790;

export class WhiteboardGame {
  private play = new WalkInInvaders();
  private screen = new InvadersScreen(() => { this.dirty = true; });
  private status = document.querySelector<HTMLElement>('#whiteboard-status')!;
  private microphone = new MicrophoneShots();
  private audioPanel = document.querySelector<HTMLElement>('#whiteboard-audio')!;
  private audioMessage = document.querySelector<HTMLElement>('#whiteboard-audio-message')!;
  private micButton = document.querySelector<HTMLButtonElement>('#whiteboard-mic')!;
  private autoButton = document.querySelector<HTMLButtonElement>('#whiteboard-auto')!;
  private levelControls = document.querySelector<HTMLElement>('#whiteboard-level-controls')!;
  private level = document.querySelector<HTMLMeterElement>('#whiteboard-level')!;
  private audioHint = document.querySelector<HTMLElement>('#whiteboard-audio-hint')!;
  private autoFire = false;
  private ray = new THREE.Raycaster();
  private surfaces: THREE.Mesh[] = [];
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private right = new THREE.Vector3();
  private projected = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private gesture: { id: number; position: THREE.Vector3; rotation: THREE.Quaternion } | null = null;
  private drawing: Point[] = [];
  private retry = false;
  private dirty = true;
  private best = 0;
  private lastStatus = '';
  private drawIn = 0;
  private sightIn = 0;
  private nearby = false;
  private focused = document.hasFocus();

  constructor(
    private board: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>,
    office: THREE.Group,
    private navigation: Navigation,
    private reducedMotion: MediaQueryList,
    private blocked: () => boolean,
  ) {
    try {
      const best = Number(localStorage.getItem('office-whiteboard-best'));
      if (Number.isFinite(best) && best > 0) this.best = Math.floor(best);
    } catch { /* Storage is optional. */ }
    board.material.map = this.screen.texture; board.material.needsUpdate = true;
    office.updateMatrixWorld(true); board.getWorldPosition(this.center);
    this.normal.set(0, 0, 1).applyNormalMatrix(new THREE.Matrix3().getNormalMatrix(board.matrixWorld));
    this.right.setFromMatrixColumn(board.matrixWorld, 0).setY(0).normalize();
    office.traverse(object => { if (object instanceof THREE.Mesh) this.surfaces.push(object); });
    const canvas = navigation.canvas;
    this.micButton.addEventListener('click', () => {
      if (!this.available() || this.play.canDraw) return;
      navigation.clearInput(); canvas.focus({ preventScroll: true });
      this.autoFire = false;
      if (this.microphone.active) this.microphone.stop(); else void this.microphone.start();
    });
    this.autoButton.addEventListener('click', () => {
      if (!this.available() || this.play.canDraw) return;
      this.microphone.stop(); this.autoFire = true;
      navigation.clearInput(); canvas.focus({ preventScroll: true });
    });
    document.querySelector<HTMLInputElement>('#whiteboard-sensitivity')!.addEventListener('input', event => {
      this.microphone.detector.sensitivity = Number((event.target as HTMLInputElement).value);
    });
    // Claim only a stroke begun inside the drawing box, before camera dragging
    // and the other easter eggs see it. Walking never gets suspended.
    canvas.addEventListener('pointerdown', event => {
      if (this.gesture && event.pointerId !== this.gesture.id) { this.cancelDrawing(); event.stopImmediatePropagation(); return; }
      if (!event.isPrimary || event.button !== 0 || !this.play.canDraw || !this.available()) return;
      const point = this.boardPoint(event, true);
      if (!point || !inDrawingArea(point)) return;
      event.preventDefault(); event.stopImmediatePropagation();
      navigation.clearInput(); canvas.focus({ preventScroll: true });
      const end = this.drawing.at(-1);
      if (this.retry || !end || Math.hypot(point[0] - end[0], point[1] - end[1]) > 45) this.drawing = [];
      this.drawing.push(point); this.retry = false;
      this.gesture = { id: event.pointerId, position: navigation.camera.position.clone(), rotation: navigation.camera.quaternion.clone() };
      canvas.setPointerCapture(event.pointerId); canvas.dataset.whiteboardPen = 'true'; this.dirty = true;
    }, { capture: true });
    canvas.addEventListener('pointermove', event => {
      if (!this.gesture) {
        const point = this.play.canDraw && this.nearby ? this.boardPoint(event, false) : null;
        if (point && inDrawingArea(point)) canvas.dataset.whiteboardPen = 'true'; else delete canvas.dataset.whiteboardPen;
        return;
      }
      if (event.pointerId !== this.gesture.id) return;
      event.preventDefault(); event.stopImmediatePropagation();
      const point = this.boardPoint(event, false);
      if (!point || !inDrawingArea(point) || this.drawing.length >= 512) { this.cancelDrawing(); return; }
      const end = this.drawing.at(-1)!;
      if (Math.hypot(point[0] - end[0], point[1] - end[1]) > 2) { this.drawing.push(point); this.dirty = true; }
    }, { capture: true });
    canvas.addEventListener('pointerup', event => {
      if (event.pointerId !== this.gesture?.id) return;
      event.preventDefault(); event.stopImmediatePropagation();
      const point = this.boardPoint(event, true);
      if (!point || !inDrawingArea(point) || !this.available()) { this.cancelDrawing(); return; }
      this.drawing.push(point); this.releasePointer();
      if (this.play.launch(this.drawing, this.lateralPosition())) { this.drawing = []; this.retry = false; }
      else {
        const first = this.drawing[0], last = this.drawing.at(-1)!;
        this.retry = this.drawing.length > 3 && Math.hypot(first[0] - last[0], first[1] - last[1]) < 40;
      }
      this.dirty = true;
    }, { capture: true });
    const cancel = () => { if (this.gesture) this.cancelDrawing(); };
    canvas.addEventListener('pointercancel', cancel); canvas.addEventListener('lostpointercapture', cancel);
    canvas.addEventListener('pointerleave', () => { if (!this.gesture) delete canvas.dataset.whiteboardPen; });
    addEventListener('blur', () => {
      this.focused = false; this.cancelDrawing(); this.microphone.stop(); this.play.update(0, false, 0); this.dirty = true;
    });
    addEventListener('focus', () => { this.focused = true; this.sightIn = 0; });
    document.addEventListener('visibilitychange', () => {
      this.sightIn = 0;
      if (document.hidden) { this.cancelDrawing(); this.microphone.stop(); this.play.update(0, false, 0); this.dirty = true; }
    });
    addEventListener('pagehide', () => this.microphone.stop());
    canvas.addEventListener('webglcontextlost', () => this.microphone.stop());
    reducedMotion.addEventListener('change', () => { this.dirty = true; });
  }

  private releasePointer() {
    const id = this.gesture?.id; this.gesture = null;
    const canvas = this.navigation.canvas;
    if (id !== undefined && canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id);
    delete canvas.dataset.whiteboardPen;
  }

  private cancelDrawing() { this.releasePointer(); this.drawing = []; this.retry = false; this.dirty = true; }

  private firstHit() {
    return this.ray.intersectObjects(this.surfaces, false).find(hit => {
      for (let object: THREE.Object3D | null = hit.object; object; object = object.parent) if (!object.visible) return false;
      const material = (hit.object as THREE.Mesh).material;
      return (Array.isArray(material) ? material : [material]).some(value => value.visible && (!value.transparent || value.opacity >= .5));
    });
  }

  private boardPoint(event: PointerEvent, checkObstacles: boolean): Point | null {
    const rect = this.navigation.canvas.getBoundingClientRect();
    this.navigation.camera.updateMatrixWorld();
    this.ray.setFromCamera(new THREE.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2), this.navigation.camera);
    this.ray.far = 2.8;
    const hit = checkObstacles ? this.firstHit() : this.ray.intersectObject(this.board, false)[0];
    return hit?.object === this.board && hit.uv ? [hit.uv.x * 800, (1 - hit.uv.y) * 1140] : null;
  }

  private available() {
    if (this.blocked() || !this.focused || !this.navigation.isWalking) return false;
    const camera = this.navigation.camera;
    this.offset.copy(camera.position).sub(this.center);
    if (this.offset.length() > 2.8 || this.offset.dot(this.normal) < .3) return false;
    camera.updateMatrixWorld(); this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > .95 || Math.abs(this.projected.y) > .9) return false;
    this.offset.copy(this.center).sub(camera.position).normalize();
    this.ray.set(camera.position, this.offset); this.ray.far = 2.8;
    return this.firstHit()?.object === this.board;
  }

  private lateralPosition() { return this.offset.copy(this.navigation.camera.position).sub(this.center).dot(this.right); }

  update(dt: number) {
    this.sightIn -= dt;
    if (this.sightIn <= 0) { this.nearby = this.available(); this.sightIn = .12; }
    const present = this.nearby && this.focused && this.navigation.isWalking && !this.blocked();
    if (this.gesture && (!present || this.gesture.position.distanceToSquared(this.navigation.camera.position) > .0001 || this.gesture.rotation.angleTo(this.navigation.camera.quaternion) > .01)) this.cancelDrawing();
    if ((!present || this.play.canDraw) && this.microphone.active) this.microphone.stop();
    const fire = present && !this.play.canDraw && this.microphone.update(dt);
    const enabled = this.autoFire || this.microphone.state === 'listening';
    this.play.update(dt, present && enabled, this.lateralPosition(), { fire, autoFire: this.autoFire });
    const game = this.play.game;
    if (this.play.canDraw && this.microphone.active) this.microphone.stop();
    this.audioPanel.hidden = !present || this.play.canDraw;
    this.level.value = this.microphone.level;
    this.best = Math.max(this.best, game.score);
    const state = `${game.status}/${game.wave}/${game.lives}/${present}/${this.retry}/${this.microphone.state}/${this.autoFire}`;
    if (state !== this.lastStatus) {
      this.lastStatus = state; this.dirty = true;
      if (game.status !== 'running') {
        try { localStorage.setItem('office-whiteboard-best', String(this.best)); } catch { /* Keep this visit's record. */ }
      }
      this.status.textContent = !present ? '' : this.play.canDraw
        ? (this.retry ? 'Tegn en lukket trekant i feltet på tavlen. Prøv igen.' : 'Tegn dit rumskib som en trekant i feltet på tavlen. Aktivér derefter mikrofonen, og sig skyd, bang eller piyv. Gå til siderne for at styre.')
        : `Whiteboard invasion: bølge ${game.wave} af 3, ${game.lives} liv. Gå til siderne for at styre. Du kan gå væk når som helst.`;
      const mic = this.microphone;
      this.micButton.disabled = mic.state === 'unsupported';
      this.micButton.textContent = mic.state === 'requesting' ? 'Annuller' : mic.active ? 'Sluk mikrofon' : 'Aktivér mikrofon';
      this.autoButton.hidden = this.autoFire || mic.state === 'listening' || mic.state === 'calibrating';
      this.levelControls.hidden = mic.state !== 'listening';
      this.audioMessage.textContent = this.autoFire ? 'Automatisk ild · mikrofonen er slukket.'
        : mic.state === 'requesting' ? 'Tillad mikrofonen i browseren for at bruge lydskud.'
        : mic.state === 'calibrating' ? 'Et øjebliks stilhed — finder rummets lydniveau …'
        : mic.state === 'listening' ? 'Mikrofon tændt · sig “skyd”, “bang” eller “piyv”'
        : mic.message || 'Dit rumskib er klar. Aktivér mikrofonen for at skyde.';
      this.audioHint.textContent = mic.state === 'listening'
        ? 'Ét skud pr. kort lyd. Justér følsomheden, hvis den skyder for let eller slet ikke.'
        : 'Korte lyde giver ét skud. Mikrofonen slukker, når du går væk.';
    }
    if (game.status === 'running') {
      this.drawIn -= dt;
      if (this.drawIn <= 0) { this.dirty = true; this.drawIn = 1 / 30; }
    }
    if (!this.dirty) return false;
    this.screen.draw(game, this.best, this.reducedMotion.matches, this.play.ship, this.drawing, this.retry, this.autoFire,
      present ? 'Aktivér mikrofonen, når du er klar' : undefined);
    this.dirty = false; return true;
  }
}
