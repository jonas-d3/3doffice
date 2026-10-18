import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';

const white = '#f3f6ff', mint = '#8af5cb', purple = '#bc9cff', muted = '#9eabc8';
const modules = ['Projekter', 'Tidsregistrering', 'Fakturering', 'Frokost', 'Kaffemaskine', 'Verdensherredømme'];
const conversation = [
  ['HOLBECH', 'Kan den også…'],
  ['NICOLAI', 'Live.'],
  ['HOLBECH', 'Jeg var ikke færdig.'],
  ['NICOLAI', 'Det er næste version også.'],
];

function label(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color = white, align: CanvasTextAlign = 'left') {
  c.fillStyle = color; c.font = `700 ${size}px Arial, sans-serif`; c.textAlign = align; c.fillText(value, x, y);
}

function card(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  c.fillStyle = color; c.beginPath(); c.roundRect(x, y, w, h, 14); c.fill();
}

function brain(c: CanvasRenderingContext2D, time: number) {
  c.save(); c.translate(240, 295);
  const pulse = 1 + Math.sin(time * 2) * .035;
  c.scale(pulse, pulse);
  c.strokeStyle = '#333451'; c.lineWidth = 2;
  for (const radius of [145, 164]) { c.beginPath(); c.arc(0, 0, radius, 0, Math.PI * 2); c.stroke(); }
  // Two lobes and their folds form a small, original circuit-board brain.
  for (const side of [-1, 1]) {
    c.save(); c.scale(side, 1);
    c.beginPath(); c.moveTo(7, -99);
    c.bezierCurveTo(20, -143, 76, -139, 88, -101);
    c.bezierCurveTo(130, -105, 149, -67, 131, -39);
    c.bezierCurveTo(167, -11, 151, 39, 121, 48);
    c.bezierCurveTo(135, 88, 93, 116, 63, 102);
    c.bezierCurveTo(43, 132, 8, 111, 7, 90); c.closePath();
    c.fillStyle = '#32264f'; c.fill(); c.strokeStyle = purple; c.lineWidth = 6; c.stroke();
    c.strokeStyle = '#9478ce'; c.lineWidth = 5; c.lineCap = 'round';
    c.beginPath(); c.moveTo(54, -97); c.bezierCurveTo(28, -67, 92, -61, 94, -34);
    c.moveTo(130, -39); c.bezierCurveTo(97, -49, 64, -16, 88, 12);
    c.moveTo(15, -32); c.bezierCurveTo(63, -53, 28, 26, 58, 40);
    c.moveTo(120, 48); c.bezierCurveTo(78, 27, 55, 68, 64, 100); c.stroke();
    for (let i = 0; i < 3; i++) {
      const x = [54, 88, 58][i], y = [-97, 12, 40][i];
      c.fillStyle = mint; c.globalAlpha = .5 + .5 * Math.sin(time * 2 - i) ** 2;
      c.beginPath(); c.arc(x, y, 6, 0, Math.PI * 2); c.fill();
    }
    c.restore();
  }
  c.restore();
}

function drawMind(c: CanvasRenderingContext2D, time: number) {
  const phase = time % 18, ready = Math.min(6, 2 + Math.floor(phase / 3));
  c.fillStyle = '#101526'; c.fillRect(0, 0, 1024, 565);
  label(c, 'MEGAMIND', 42, 78, 60, purple);
  label(c, 'OVERTAGER GRADVIST KONTORET', 44, 113, 23, muted);
  label(c, 'NICOLAI / ADMIN', 978, 67, 22, mint, 'right');
  brain(c, time);
  modules.forEach((name, i) => {
    const live = i < ready, building = i === ready, y = 148 + i * 49;
    card(c, 465, y, 515, 42, live ? '#1b3438' : '#1b2238');
    label(c, name, 482, y + 28, 24, live ? white : muted);
    label(c, live ? '✓ LIVE' : building ? 'BYGGER' : 'NÆSTE', 961, y + 28, 20, live ? mint : building ? purple : muted, 'right');
  });
  label(c, 'ÉN LILLE FEATURE MERE…', 240, 491, 23, purple, 'center');
  card(c, 42, 513, 938, 30, '#222a40');
  card(c, 42, 513, 938 * (.25 + .75 * Math.min(phase / 15, 1)), 30, '#335e56');
  label(c, 'FORECAST: OVERTAGET  ·  SCOPE: JA', 511, 535, 20, mint, 'center');
}

function drawReleases(c: CanvasRenderingContext2D, time: number) {
  const phase = time % 12, deployAge = Math.floor(time % 4);
  c.fillStyle = '#111f29'; c.fillRect(0, 0, 1024, 565);
  label(c, 'Seneste nyt i MegaMind', 42, 73, 48);
  card(c, 838, 32, 142, 53, '#244a42');
  label(c, '● LIVE', 909, 68, 30, mint, 'center');
  label(c, 'RELEASES I DAG', 42, 148, 26, muted);
  label(c, String(146 + Math.floor(time / 4)), 38, 267, 132, mint);
  label(c, 'Tid siden sidste deploy', 44, 320, 22, muted);
  label(c, `00:0${deployAge}`, 42, 382, 58);
  conversation.forEach(([name, message], i) => {
    const visible = phase >= i * 2, y = 120 + i * 78;
    card(c, 356, y, 624, 69, visible && i % 2 ? '#213e3d' : '#1c2b39');
    label(c, name, 374, y + 22, 16, visible ? i % 2 ? mint : purple : muted);
    label(c, visible ? message : '…', 374, y + 53, 30, visible ? white : muted);
  });
  ['ØNSKE', 'BYGGER', 'LIVE'].forEach((stage, i) => {
    const active = i === Math.floor(time % 4 / (4 / 3));
    card(c, 42 + i * 322, 449, 294, 45, active ? '#335e56' : '#1c2b39');
    label(c, stage, 189 + i * 322, 481, 28, active ? mint : muted, 'center');
    if (i < 2) label(c, '›', 350 + i * 322, 480, 32, muted, 'center');
  });
  label(c, 'Logo: afventer Thrane', 42, 540, 27, purple);
  label(c, 'ALT ANDET ER LIVE.', 980, 538, 22, mint, 'right');
}

export class NicolaiScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  screen?: THREE.Object3D;
  private contexts: CanvasRenderingContext2D[] = [];
  private elapsed = 7; // A readable, populated still when reduced motion is enabled.
  private frame = 84;

  constructor() {
    const material = (name: string) => {
      const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 424;
      const c = canvas.getContext('2d')!; c.scale(canvas.width / 1024, canvas.height / 565);
      this.contexts.push(c);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      return new THREE.MeshBasicMaterial({ name, map: texture, toneMapped: false });
    };
    this.materials = [material('Nicolai / MegaMind'), material('Nicolai / releases')];
    this.draw();
  }

  private draw() {
    drawMind(this.contexts[0], this.elapsed);
    drawReleases(this.contexts[1], this.elapsed);
    this.materials.forEach(material => { material.map!.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    // Offset from the left display to the centre of this pair of monitors.
    if (!screenPriority(this.screen, camera, innerHeight, 8)) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 12);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
