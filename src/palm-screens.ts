import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';

const white = '#f3f6fc', mint = '#7af0c4', pink = '#ff94ce';

function label(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color = white, align: CanvasTextAlign = 'left') {
  c.fillStyle = color; c.font = `700 ${size}px Arial, sans-serif`; c.textAlign = align; c.fillText(value, x, y);
}

function card(c: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
  c.fillStyle = color; c.beginPath(); c.roundRect(x, y, width, height, 18); c.fill();
}

function envelope(c: CanvasRenderingContext2D, x: number, y: number, size: number) {
  c.save(); c.translate(x, y); c.scale(size, size);
  card(c, -72, -44, 144, 88, white);
  c.strokeStyle = '#183d42'; c.lineWidth = 6;
  c.beginPath(); c.moveTo(-64, -34); c.lineTo(0, 12); c.lineTo(64, -34); c.stroke(); c.restore();
}

function drawMail(c: CanvasRenderingContext2D, time: number) {
  const shred = Math.floor(time / 4) % 2 === 1, phase = (time % 4) / 4;
  c.fillStyle = '#10242c'; c.fillRect(0, 0, 1024, 565);
  label(c, 'PALM AI', 48, 76, 56, mint);
  label(c, 'MAILSORTERING', 976, 72, 28, '#9dbdc5', 'right');
  c.strokeStyle = '#355862'; c.lineWidth = 10;
  c.beginPath(); c.moveTo(170, 260); c.lineTo(410, 260);
  c.lineTo(540, 180); c.lineTo(660, 180); c.stroke();
  c.beginPath(); c.moveTo(410, 260); c.lineTo(540, 350); c.lineTo(660, 350); c.stroke();
  card(c, 570, 115, 405, 130, !shred ? '#256b5d' : '#1b3c43');
  label(c, 'PREBEN', 772, 181, 52, mint, 'center');
  label(c, !shred && phase > .78 ? 'Modtaget ✓' : 'Send videre', 772, 220, 26, white, 'center');
  // The mail sinks into the slot; paper strips come out below the machine.
  if (shred && phase > .65) {
    c.fillStyle = white;
    for (let i = 0; i < 9; i++) c.fillRect(668 + i * 24, 385, 12, 35 + ((phase * 210 + i * 11) % 60));
  }
  const travel = Math.min(phase / .8, 1);
  const x = 160 + 610 * travel, y = 260 + (shred ? 85 : -80) * Math.max(0, (travel - .35) / .65);
  if (phase < .88) envelope(c, x, y, phase > .65 ? 1 - (phase - .65) * 3 : 1);
  card(c, 595, 335, 355, 78, shred ? '#9d3b63' : '#493344');
  c.fillStyle = '#08151c'; c.fillRect(637, 338, 270, 10);
  label(c, 'MAKULATOR', 772, 392, 36, white, 'center');
  label(c, shred ? 'Sagen er afsluttet.' : 'Det tager Preben sig af.', 512, 531, 38, shred ? pink : mint, 'center');
}

function drawFeedback(c: CanvasRenderingContext2D, time: number) {
  const cycle = Math.floor(time / 8), phase = (time % 8) / 8;
  const progress = Math.floor(82 + Math.min(phase / .65, 1) * 17);
  const comments = ['Kan logoet blive lidt større?', 'Kan den poppe lidt mere?', 'Prøv lige den første version.', 'Kun én lille rettelse mere...'];
  c.fillStyle = '#241833'; c.fillRect(0, 0, 1024, 565);
  label(c, 'DESIGNFEEDBACK', 48, 76, 49, pink);
  label(c, `RUNDE ${48 + cycle}`, 48, 194, 83);
  label(c, '∞', 956, 194, 100, pink, 'right');
  card(c, 48, 230, 928, 62, '#483454');
  card(c, 54, 236, 916 * progress / 100, 50, pink);
  label(c, `${progress}% færdig`, 48, 361, 54);
  card(c, 48, 394, 928, 91, '#3c294b');
  label(c, comments[cycle % comments.length], 512, 452, 41, white, 'center');
  label(c, 'LIGE VED OG NÆSTEN', 512, 537, 29, '#bda7ce', 'center');
}

export class PalmScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  screen?: THREE.Object3D;
  private contexts: CanvasRenderingContext2D[] = [];
  private textures: THREE.CanvasTexture[] = [];
  private elapsed = 0;
  private frame = 0;
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private projected = new THREE.Vector3();

  constructor() {
    const material = () => {
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 283;
      const c = canvas.getContext('2d')!; c.scale(canvas.width / 1024, canvas.height / 565);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      this.contexts.push(c); this.textures.push(texture);
      return new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
    };
    this.materials = [material(), material()];
    this.draw();
  }

  private draw() {
    drawMail(this.contexts[0], this.elapsed); drawFeedback(this.contexts[1], this.elapsed);
    this.textures.forEach(texture => { texture.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    // The anchor is the left display; offset to the centre of the two monitors.
    this.screen.localToWorld(this.center.set(.34, 0, 0));
    this.screen.getWorldDirection(this.normal);
    this.offset.copy(camera.position).sub(this.center);
    if ((this.offset.lengthSq() > 8 ** 2 && !screenPriority(this.screen, camera, innerHeight)) || this.offset.dot(this.normal) <= 0) return false;
    camera.updateMatrixWorld();
    this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > 1.3 || Math.abs(this.projected.y) > 1.3) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 12);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
