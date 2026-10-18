import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';

const white = '#f1f7f4', mint = '#7ef3bd', muted = '#95b0aa';
const orange = '#ffc078', violet = '#c1abff', ink = '#302149';

function label(c: CanvasRenderingContext2D, text: string, x: number, y: number, size: number, color = white, align: CanvasTextAlign = 'left') {
  c.fillStyle = color; c.font = `700 ${size}px Arial, sans-serif`; c.textAlign = align;
  c.fillText(text, x, y);
}

function card(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  c.fillStyle = color; c.beginPath(); c.roundRect(x, y, w, h, 16); c.fill();
}

function dot(c: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  c.fillStyle = color; c.beginPath(); c.arc(x, y, radius, 0, Math.PI * 2); c.fill();
}

function drawControl(c: CanvasRenderingContext2D, time: number) {
  c.fillStyle = '#0b211c'; c.fillRect(0, 0, 1024, 565);
  label(c, 'PEDEL-THRANE', 38, 63, 45, mint);
  label(c, 'KONTROLRUM / HAVNEGADE', 40, 98, 23, muted);
  card(c, 771, 28, 215, 68, '#1d3c32');
  label(c, 'PÅ VAGT', 878, 72, 31, mint, 'center');

  // Server rack with a slow activity pulse and a small rolling load graph.
  card(c, 38, 128, 310, 335, '#142f27');
  label(c, 'SERVERPARK', 62, 164, 23, muted);
  for (let i = 0; i < 4; i++) {
    const y = 185 + i * 51;
    card(c, 60, y, 266, 40, '#23453a');
    for (let j = 0; j < 8; j++) {
      c.fillStyle = '#102b22'; c.fillRect(76 + j * 18, y + 12, 9, 16);
    }
    c.globalAlpha = .55 + .45 * Math.sin(time * 1.8 + i) ** 2;
    dot(c, 301, y + 20, 6, mint); c.globalAlpha = 1;
  }
  c.strokeStyle = mint; c.lineWidth = 3; c.beginPath();
  for (let i = 0; i <= 60; i++) {
    const x = 61 + i * 4.4, y = 426 - Math.sin(i * .3 - time) * 8 - Math.cos(i * .8 + time) * 4;
    if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
  }
  c.stroke();

  const statuses = [
    ['SERVERPARK', 'Stabil. Selvfølgelig.', mint, '#183b2f'],
    ['PRINTER', 'Fornærmet igen.', '#ff9290', '#43282a'],
    ['TERRASSELEM', 'Afventer tekniker.', orange, '#3a3423'],
  ];
  statuses.forEach(([name, status, color, background], i) => {
    const y = 128 + i * 115;
    card(c, 371, y, 615, 105, background);
    dot(c, 403, y + 33, 7, color);
    label(c, name, 425, y + 40, 24, color);
    label(c, status, 395, y + 83, 35);
  });
  card(c, 38, 486, 948, 51, '#1d3c32');
  label(c, 'ALT ER UNDER KONTROL*', 60, 520, 26, mint);
  label(c, '*undtagen printeren', 964, 520, 23, muted, 'right');
}

function drawMusic(c: CanvasRenderingContext2D, time: number) {
  c.fillStyle = '#21151f'; c.fillRect(0, 0, 1024, 565);
  label(c, 'MUSIKKOMMANDO', 38, 63, 47, orange);
  label(c, 'HAVNEGADE / ALLE HØJTTALERE', 40, 99, 23, '#c2a4b4');
  card(c, 799, 31, 187, 59, '#49303b');
  label(c, 'DJ THRANE', 892, 69, 25, orange, 'center');

  const start = Math.PI * .75, end = Math.PI * 2.25;
  c.lineCap = 'round'; c.lineWidth = 18; c.strokeStyle = '#4c3038';
  c.beginPath(); c.arc(235, 294, 136, start, end); c.stroke();
  c.strokeStyle = orange; c.beginPath(); c.arc(235, 294, 136, start, end - .08); c.stroke();
  dot(c, 235, 294, 109, '#382530');
  label(c, 'VOLUMEN', 235, 252, 23, '#c2a4b4', 'center');
  label(c, '11', 235, 347, 111, orange, 'center');
  label(c, 'UD AF 10', 235, 384, 22, '#c2a4b4', 'center');

  label(c, 'HØJTTALERE', 466, 165, 31, '#c2a4b4');
  label(c, 'OVERTAGET', 463, 220, 57, orange);
  // Visual-only equalizer: no audio playback or connection to office speakers.
  for (let i = 0; i < 20; i++) {
    const height = 30 + 115 * (.5 + .5 * Math.sin(time * 2.3 + i * .67)) * (.7 + .3 * Math.cos(i));
    card(c, 468 + i * 25, 404 - height, 16, height, i % 4 === 0 ? '#ff7c99' : orange);
  }
  label(c, 'KØEN ER MIN.', 467, 447, 26, '#c2a4b4');
  card(c, 38, 486, 948, 51, '#49303b');
  label(c, 'NU SPILLER: ORNLIG SPADE', 60, 520, 27, orange);
  label(c, 'INGEN ØNSKER', 964, 520, 22, '#e4bdcd', 'right');
}

const applications = [
  ['DESIGNAFDELINGEN', 'Bare 500 credits mere?'],
  ['PROJEKTLEDELSEN', 'Det er til en hurtig opgave.'],
  ['MARKETING', 'Må jeg få lidt flere tokens?'],
];

function drawTokens(c: CanvasRenderingContext2D, time: number) {
  const phase = time % 6, request = Math.floor(time / 6), denied = phase >= 1.2;
  const [department, message] = applications[request % applications.length];
  c.fillStyle = '#231932'; c.fillRect(0, 0, 1024, 565);
  label(c, 'TOKENBANKEN', 38, 66, 49, violet);
  label(c, 'THRANE / BEVILLINGSCHEF', 40, 103, 23, '#b4a4c8');
  label(c, '2.000', 981, 69, 58, violet, 'right');
  label(c, 'CREDITS / MÅNED', 981, 106, 22, '#b4a4c8', 'right');

  c.save();
  const arrival = Math.min(1, phase / .6);
  c.translate(0, (1 - arrival) * 20);
  card(c, 38, 140, 948, 278, '#eee7fb');
  label(c, `ANSØGNING #${String(42 + request).padStart(4, '0')}`, 65, 184, 23, '#796787');
  label(c, department, 65, 237, 28, ink);
  label(c, message, 65, 292, 33, ink);
  c.fillStyle = '#d9cde8'; c.fillRect(66, 322, 504, 3);
  label(c, 'Begrundelse: Det er jo AI.', 65, 367, 24, '#796787');
  if (denied) {
    // A quick settling stamp, then a long readable hold until the next request.
    const settle = Math.min(1, (phase - 1.2) / .35), scale = 1.12 - .12 * settle;
    c.translate(795, 302); c.rotate(-.13); c.scale(scale, scale);
    c.strokeStyle = '#a42655'; c.lineWidth = 9;
    c.strokeRect(-128, -69, 256, 138);
    label(c, 'NEJ', 0, 29, 101, '#a42655', 'center');
  } else {
    label(c, 'BEHANDLES…', 792, 309, 25, '#796787', 'center');
  }
  c.restore();

  label(c, 'EKSTRA CREDITS BEVILGET', 39, 465, 24, '#b4a4c8');
  label(c, '0', 983, 470, 42, violet, 'right');
  card(c, 38, 486, 948, 51, '#3f2b56');
  label(c, 'IKKE-UDVIKLER?  2.000 ER 2.000.', 60, 520, 27, violet);
  label(c, denied ? 'SAG LUKKET' : 'NY ANSØGNING', 964, 520, 22, '#e2d4f6', 'right');
}

export class ThraneScreens {
  readonly materials: THREE.MeshBasicMaterial[];
  screen?: THREE.Object3D;
  private contexts: CanvasRenderingContext2D[] = [];
  private elapsed = 3; // Start with a readable still, also used for reduced motion.
  private frame = 24;
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private projected = new THREE.Vector3();

  constructor() {
    this.materials = ['kontrolrum', 'musik', 'tokenbank'].map(name => {
      const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 424;
      const c = canvas.getContext('2d')!; c.scale(canvas.width / 1024, canvas.height / 565);
      this.contexts.push(c);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      return new THREE.MeshBasicMaterial({ name: `Thrane / ${name}`, map: texture, toneMapped: false });
    });
    this.draw();
  }

  private draw() {
    drawControl(this.contexts[0], this.elapsed);
    drawMusic(this.contexts[1], this.elapsed);
    drawTokens(this.contexts[2], this.elapsed);
    this.materials.forEach(material => { material.map!.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    // The existing lower-left display anchors the centre of the four monitors.
    this.screen.localToWorld(this.center.set(.34, .195, 0));
    this.screen.getWorldDirection(this.normal);
    this.offset.copy(camera.position).sub(this.center);
    if ((this.offset.lengthSq() > 8 ** 2 && !screenPriority(this.screen, camera, innerHeight)) || this.offset.dot(this.normal) <= 0) return false;
    camera.updateMatrixWorld(); this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > 1.3 || Math.abs(this.projected.y) > 1.3) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 8);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
