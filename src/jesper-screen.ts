import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';
import { SalmonCatch } from './easter-egg-state.mjs';
import { mesh } from './geometry';

const width = 1024, height = 565;

function polygon(c: CanvasRenderingContext2D, color: string, points: number[][]) {
  c.fillStyle = color; c.beginPath();
  points.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y));
  c.closePath(); c.fill();
}

function text(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color: string) {
  c.fillStyle = color; c.font = `700 ${size}px Arial, sans-serif`; c.fillText(value, x, y);
}

function landscape(c: CanvasRenderingContext2D) {
  const sky = c.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, '#b8dcd9'); sky.addColorStop(1, '#f3e4ba');
  c.fillStyle = sky; c.fillRect(0, 0, width, height);
  c.fillStyle = '#fff1ca'; c.beginPath(); c.arc(825, 99, 48, 0, Math.PI * 2); c.fill();
  polygon(c, '#8ba9aa', [[0, 235], [195, 65], [310, 192], [460, 58], [665, 240], [820, 117], [1024, 240], [1024, 340], [0, 340]]);
  polygon(c, '#ecf0de', [[135, 118], [195, 65], [254, 130], [210, 117], [185, 132], [169, 115]]);
  polygon(c, '#ecf0de', [[397, 121], [460, 58], [535, 124], [481, 109], [455, 127], [438, 108]]);
  polygon(c, '#496f68', [[0, 223], [157, 184], [310, 250], [420, 216], [572, 270], [762, 194], [1024, 218], [1024, height], [0, height]]);
  // Widen the river towards the viewer.
  const water = c.createLinearGradient(0, 245, 0, height);
  water.addColorStop(0, '#81c6c6'); water.addColorStop(1, '#1f8795');
  c.fillStyle = water; c.beginPath(); c.moveTo(541, 252);
  c.bezierCurveTo(410, 306, 563, 333, 374, 393);
  c.bezierCurveTo(277, 426, 250, 486, 100, height);
  c.lineTo(928, height); c.bezierCurveTo(780, 431, 471, 363, 590, 252); c.closePath(); c.fill();
  for (const bank of [-1, 1]) for (let i = 0; i < 14; i++) {
    const x = bank < 0 ? 22 + i * 32 : 665 + i * 29;
    const y = 274 + (i * 29 % 78), size = 42 + (i * 13 % 47);
    c.fillStyle = '#364f48'; c.fillRect(x - 3, y - size, 6, size + 12);
    polygon(c, i % 2 ? '#234e45' : '#326457', [[x, y - size * 1.6], [x - size * .4, y - size * .55], [x - size * .25, y - size * .55], [x - size * .5, y], [x + size * .5, y], [x + size * .25, y - size * .55], [x + size * .4, y - size * .55]]);
  }
  for (const [x, y, rx, ry] of [[217, 481, 59, 23], [305, 421, 32, 15], [637, 385, 44, 19], [57, 540, 83, 36]]) {
    c.fillStyle = '#84958a'; c.beginPath(); c.ellipse(x, y, rx, ry, -.14, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#b5c0a9'; c.beginPath(); c.ellipse(x - 5, y - 8, rx * .7, ry * .4, -.14, 0, Math.PI * 2); c.fill();
  }
  text(c, 'CANADA', 38, 62, 42, '#163e3b');
  text(c, 'LAKSEELVEN · JESPER ER OFFLINE', 40, 93, 17, '#315d57');
}

function salmon(c: CanvasRenderingContext2D, phase: number) {
  const jump = Math.min(phase / 1.8, 1);
  if (jump < 1) {
    c.save(); c.translate(304 + jump * 265, 424 - Math.sin(jump * Math.PI) * 185);
    c.rotate(Math.atan2(-185 * Math.PI * Math.cos(jump * Math.PI), 265));
    polygon(c, '#b0c1ad', [[-57, 0], [-97, -32], [-88, 0], [-97, 30]]);
    polygon(c, '#34554d', [[-12, -17], [-26, -47], [21, -24]]);
    polygon(c, '#be8274', [[-6, 16], [-18, 38], [28, 19]]);
    const body = c.createLinearGradient(0, -26, 0, 26);
    body.addColorStop(0, '#315e58'); body.addColorStop(.43, '#a0b9a4');
    body.addColorStop(.53, '#dc998d'); body.addColorStop(.7, '#d9d9be'); body.addColorStop(1, '#f2efdb');
    c.fillStyle = body; c.beginPath(); c.ellipse(0, 0, 73, 25, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#31584e';
    for (let i = 0; i < 10; i++) { c.beginPath(); c.arc(-46 + i * 9, -10 - (i % 3) * 3, 2, 0, Math.PI * 2); c.fill(); }
    c.fillStyle = '#fbf5dc'; c.beginPath(); c.arc(53, -7, 6, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#152f31'; c.beginPath(); c.arc(55, -7, 3, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#577a6a'; c.lineWidth = 2; c.beginPath(); c.arc(35, 0, 17, -.9, .9); c.stroke();
    c.restore();
  }
  // A splash follows each landing before the river settles again.
  if (phase >= 1.8 && phase < 2.5) {
    const splash = (phase - 1.8) / .7;
    c.save(); c.globalAlpha = 1 - splash; c.strokeStyle = '#e4f8e7'; c.lineWidth = 4;
    c.beginPath(); c.ellipse(569, 424, 22 + splash * 65, 6 + splash * 15, 0, 0, Math.PI * 2); c.stroke();
    c.fillStyle = '#e4f8e7';
    for (let i = 0; i < 7; i++) {
      c.beginPath(); c.arc(569 + (i - 3) * splash * 28, 421 - Math.sin(splash * Math.PI) * (35 + i % 3 * 17), 4, 0, Math.PI * 2); c.fill();
    }
    c.restore();
  }
}

function pitch(c: CanvasRenderingContext2D, caught: boolean) {
  c.fillStyle = '#f2f1ed'; c.fillRect(0, 0, width, height);
  c.fillStyle = '#b7472b'; c.fillRect(0, 0, width, 60);
  text(c, 'P', 24, 42, 34, '#fff9ef');
  text(c, 'Kundepitch — PowerPoint', 77, 39, 27, '#fff9ef');
  c.fillStyle = '#deded8'; c.fillRect(0, 60, width, 46);
  text(c, 'Hjem     Indsæt     Design     Overgange     Slideshow', 24, 90, 20, '#53615d');
  c.fillStyle = '#e4e4df'; c.fillRect(0, 106, 174, 423);
  for (let i = 0; i < 3; i++) {
    c.fillStyle = i ? '#d4dcd5' : '#b7472b'; c.fillRect(18, 130 + i * 116, 138, 86);
    c.fillStyle = '#163e3b'; c.fillRect(23, 135 + i * 116, 128, 76);
    text(c, String(i + 1), 35, 165 + i * 116, 20, '#f9f3da');
    c.fillStyle = '#a8d9bf'; c.fillRect(35, 177 + i * 116, 90 - i * 18, 5);
  }
  c.fillStyle = '#163e3b'; c.fillRect(198, 130, 800, 375);
  text(c, caught ? 'LEAD LANDET' : 'DEN NÆSTE', 244, 244, 58, '#f9f3da');
  text(c, caught ? 'Så er der bid.' : 'STORE FANGST', 244, 316, 58, '#f9f3da');
  text(c, caught ? 'Fra pipeline til bordet' : 'CMS + AI', 246, 436, 34, '#a8d9bf');
  c.fillStyle = '#deded8'; c.fillRect(0, 529, width, 36);
  text(c, 'Slide 1 af 3', 22, 553, 18, '#53615d');
}

export class JesperScreen {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  readonly catchState = new SalmonCatch();
  screen?: THREE.Object3D;
  private fish = new THREE.Group();
  private launch = new THREE.Vector3();
  private canvas = document.createElement('canvas');
  private background = document.createElement('canvas');
  private context: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;
  private pitchContext: CanvasRenderingContext2D;
  private pitchTexture: THREE.CanvasTexture;
  private elapsed = .9; // Keep the fish mid-leap in the reduced-motion still.
  private frame = -1;
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private projected = new THREE.Vector3();

  constructor() {
    this.canvas.width = this.background.width = 768;
    this.canvas.height = this.background.height = 424;
    this.context = this.canvas.getContext('2d')!;
    const background = this.background.getContext('2d')!;
    background.scale(this.canvas.width / width, this.canvas.height / height); landscape(background);
    this.texture = new THREE.CanvasTexture(this.canvas); this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.minFilter = THREE.LinearFilter; this.texture.generateMipmaps = false;
    const pitchCanvas = document.createElement('canvas');
    pitchCanvas.width = this.canvas.width; pitchCanvas.height = this.canvas.height;
    this.pitchContext = pitchCanvas.getContext('2d')!;
    this.pitchContext.scale(pitchCanvas.width / width, pitchCanvas.height / height);
    this.pitchTexture = new THREE.CanvasTexture(pitchCanvas); this.pitchTexture.colorSpace = THREE.SRGBColorSpace;
    this.pitchTexture.minFilter = THREE.LinearFilter; this.pitchTexture.generateMipmaps = false;
    this.materials = [
      new THREE.MeshBasicMaterial({ map: this.texture, toneMapped: false }),
      new THREE.MeshBasicMaterial({ map: this.pitchTexture, toneMapped: false }),
    ];
    this.fish.name = 'Jespers fangst'; this.fish.visible = false;
    const silver = new THREE.MeshStandardMaterial({ color: '#aac1af', roughness: .36, metalness: .2 });
    const pink = new THREE.MeshStandardMaterial({ color: '#c98383', roughness: .5 });
    const dark = new THREE.MeshStandardMaterial({ color: '#345b52' });
    const body = mesh(this.fish, new THREE.SphereGeometry(1, 20, 12), silver, 0, 0, 0);
    body.scale.set(.22, .055, .055);
    for (const side of [-1, 1]) {
      const stripe = mesh(this.fish, new THREE.SphereGeometry(1, 16, 8), pink, -.005, -.006, side * .046);
      stripe.scale.set(.185, .014, .012);
      const eye = mesh(this.fish, new THREE.SphereGeometry(.009, 10, 8), dark, .172, .017, side * .037);
      eye.castShadow = false;
    }
    const tail = mesh(this.fish, new THREE.ConeGeometry(.071, .1, 3), dark, -.24, 0, 0);
    tail.rotation.z = -Math.PI / 2; tail.scale.z = .25;
    const fin = mesh(this.fish, new THREE.ConeGeometry(.042, .065, 3), dark, -.03, .055, 0);
    fin.scale.z = .2;
    this.draw(); this.drawPitch();
  }

  private fishPoint() {
    const phase = this.elapsed % 4.5;
    const jump = phase < 1.8 ? phase / 1.8 : .5;
    return { x: 304 + jump * 265, y: 424 - Math.sin(jump * Math.PI) * 185 };
  }

  hitFish(uv: THREE.Vector2) {
    if (this.catchState.phase !== 'idle' || this.elapsed % 4.5 >= 1.8) return false;
    const point = this.fishPoint();
    return ((uv.x * width - point.x) / 105) ** 2 + (((1 - uv.y) * height - point.y) / 80) ** 2 <= 1;
  }

  catchFish(reducedMotion: boolean) {
    if (!this.screen || !this.catchState.start(reducedMotion)) return false;
    const point = this.fishPoint();
    this.launch.set((point.x / width - .5) * .602, (.5 - point.y / height) * .332, .012);
    this.screen.add(this.fish); this.fish.visible = true;
    this.poseFish(); this.draw(); this.drawPitch(); return true;
  }

  settleCatch() {
    if (this.catchState.phase !== 'leaping') return;
    this.catchState.elapsed = 1.8; this.catchState.phase = 'landed'; this.poseFish();
  }

  private poseFish() {
    const t = Math.min(1, this.catchState.elapsed / 1.25);
    this.fish.position.set(
      THREE.MathUtils.lerp(this.launch.x, .28, t),
      THREE.MathUtils.lerp(this.launch.y, -.34, t) + Math.sin(t * Math.PI) * .5,
      THREE.MathUtils.lerp(this.launch.z, .42, t),
    );
    this.fish.scale.setScalar(THREE.MathUtils.lerp(.2, 1, t));
    const flop = t === 1 ? Math.max(0, 1 - (this.catchState.elapsed - 1.25) / .55) : 0;
    this.fish.rotation.z = Math.sin(t * Math.PI * 2) * .6 + Math.sin(this.catchState.elapsed * 25) * .22 * flop;
  }

  private draw() {
    const c = this.context;
    c.drawImage(this.background, 0, 0); c.save(); c.scale(this.canvas.width / width, this.canvas.height / height);
    c.strokeStyle = '#d0eee4aa'; c.lineWidth = 3;
    for (let i = 0; i < 19; i++) {
      const depth = ((i / 19 + this.elapsed * .11) % 1), y = 290 + depth * 275;
      const x = 508 - depth * 75 + Math.sin(i * 4.7) * depth * 195;
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + 12 + depth * 36, y); c.stroke();
    }
    if (this.catchState.phase === 'idle') salmon(c, this.elapsed % 4.5);
    c.restore(); this.texture.needsUpdate = true;
  }

  private drawPitch() {
    pitch(this.pitchContext, this.catchState.phase !== 'idle');
    this.pitchTexture.needsUpdate = true;
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    const fishChanged = this.catchState.update(dt, animate);
    if (fishChanged) this.poseFish();
    this.screen.getWorldPosition(this.center); this.screen.getWorldDirection(this.normal);
    this.offset.copy(camera.position).sub(this.center);
    if ((this.offset.lengthSq() > 8 ** 2 && !screenPriority(this.screen, camera, innerHeight)) || this.offset.dot(this.normal) <= 0) return fishChanged;
    camera.updateMatrixWorld(); this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > 1.3 || Math.abs(this.projected.y) > 1.3) return fishChanged;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 12);
    if (frame === this.frame) return fishChanged;
    this.frame = frame; this.draw(); return true;
  }
}
