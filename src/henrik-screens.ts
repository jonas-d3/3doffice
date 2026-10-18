import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';
import { registerImage } from './image-assets';
import coverUrl from './assets/1000mods-cheat-death.webp';

const width = 1024, height = 565;
const cream = '#f8edcf', amber = '#ffb64c', green = '#a8ef9c';

function text(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color = cream) {
  c.fillStyle = color; c.font = `700 ${size}px monospace`; c.fillText(value, x, y);
}

function rect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  c.fillStyle = color; c.fillRect(x, y, w, h);
}

function drawPlayer(c: CanvasRenderingContext2D, time: number, cover?: HTMLImageElement) {
  rect(c, 0, 0, width, height, '#141a19');
  rect(c, 12, 12, 1000, 541, '#72776c');
  rect(c, 18, 18, 988, 529, '#272f2b');
  rect(c, 26, 26, 972, 59, '#111a16');
  text(c, '1000mods', 42, 69, 48, amber);
  text(c, 'HENRIK\'S HI-FI', 699, 63, 24, '#a8b2a5');

  rect(c, 36, 100, 332, 332, '#090f0c');
  if (cover) c.drawImage(cover, 42, 106, 320, 320);
  else {
    text(c, '1000mods', 62, 239, 43, amber);
    text(c, 'CHEAT DEATH', 62, 283, 30);
  }
  text(c, 'NOW PLAYING / 09', 398, 127, 22, green);
  text(c, 'Cheat Death', 394, 187, 53);
  text(c, '1000mods · 2024', 398, 226, 26, '#b0bdad');

  rect(c, 395, 247, 589, 122, '#0b140f');
  // Decorative spectrum: there is no audio playback or external player.
  for (let i = 0; i < 28; i++) {
    const amplitude = .18 + .82 * Math.abs(Math.sin(time * 2.8 + i * .67) * Math.cos(time * .9 - i * .24));
    const bars = Math.ceil(amplitude * 11);
    for (let j = 0; j < bars; j++) rect(c, 406 + i * 20, 356 - j * 9, 13, 6, j > 8 ? amber : green);
  }
  const elapsed = Math.floor((94 + time) % 335);
  const minutes = Math.floor(elapsed / 60), seconds = String(elapsed % 60).padStart(2, '0');
  text(c, `${minutes}:${seconds}`, 398, 409, 32, green);
  text(c, '/ 5:35', 500, 407, 25, '#a8b2a5');
  text(c, 'STEREO', 853, 407, 24, amber);
  rect(c, 398, 425, 584, 9, '#101711');
  rect(c, 398, 425, 584 * elapsed / 335, 9, amber);

  ['|◀', 'Ⅱ', '■', '▶|'].forEach((symbol, i) => {
    rect(c, 398 + i * 79, 455, 67, 47, '#626d5f');
    rect(c, 401 + i * 79, 458, 61, 40, i === 1 ? '#a5bd82' : '#404d40');
    text(c, symbol, 410 + i * 79, 489, 27, i === 1 ? '#102417' : cream);
  });
  text(c, 'VOL', 737, 485, 22, '#a8b2a5');
  for (let i = 0; i < 9; i++) rect(c, 797 + i * 21, 480 - i * 2, 13, 12 + i * 2, i < 7 ? green : '#45523e');
  text(c, 'CHEAT DEATH', 43, 469, 31, amber);
  text(c, 'ON REPEAT', 43, 503, 22, '#a8b2a5');
  text(c, 'FUZZ: MAX     /     DO NOT DISTURB', 397, 533, 20, '#a8b2a5');
}

function drawBridge(c: CanvasRenderingContext2D, time: number) {
  const sky = c.createLinearGradient(0, 0, 0, 332);
  sky.addColorStop(0, '#171d2a'); sky.addColorStop(1, '#873d2c');
  c.fillStyle = sky; c.fillRect(0, 0, width, height);
  rect(c, 0, 276, width, 56, '#173541');
  // Smoke rises behind the suspension bridge, keeping its silhouette readable.
  for (let i = 0; i < 13; i++) {
    const age = (time * .18 + i / 13) % 1;
    c.fillStyle = `rgba(35, 32, 39, ${.6 * (1 - age)})`;
    c.beginPath(); c.ellipse(160 + i * 57 + age * 45, 243 - age * 170, 22 + age * 30, 20 + age * 33, -.2, 0, Math.PI * 2); c.fill();
  }
  c.strokeStyle = '#a3b7bc'; c.lineWidth = 5;
  c.beginPath(); c.moveTo(-20, 256); c.quadraticCurveTo(175, 227, 280, 117);
  c.quadraticCurveTo(512, 320, 744, 117); c.quadraticCurveTo(849, 227, 1044, 256); c.stroke();
  for (let x = 24; x < 1000; x += 28) {
    const span = (x - 280) / 464;
    const y = x < 280 ? 117 + (1 - x / 280) * 135 : x > 744 ? 117 + (x - 744) / 280 * 135 : 117 + 406 * span * (1 - span);
    c.strokeStyle = '#728d98'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(x, y); c.lineTo(x, 263); c.stroke();
  }
  for (const x of [280, 744]) {
    rect(c, x - 21, 108, 12, 206, '#b2b9b4'); rect(c, x + 9, 108, 12, 206, '#b2b9b4');
    rect(c, x - 21, 126, 42, 9, '#d2c8b1'); rect(c, x - 21, 199, 42, 9, '#d2c8b1');
  }
  rect(c, 0, 258, width, 10, '#b9b1a0'); rect(c, 0, 268, width, 9, '#222b31');
  for (let i = 0; i < 17; i++) {
    const x = 88 + i * 53, flicker = Math.sin(time * 5 + i * 2.1);
    const h = 38 + 32 * (.5 + .5 * flicker) + (i % 3) * 9;
    for (let layer = 0; layer < 3; layer++) {
      const w = 25 - layer * 7, top = 261 - h * (1 - layer * .23);
      c.fillStyle = ['#ec4b23', '#ff952e', '#ffe488'][layer];
      c.beginPath(); c.moveTo(x - w, 262);
      c.bezierCurveTo(x - w * 1.4, 238, x + flicker * 12, top + 22, x + flicker * 15, top);
      c.bezierCurveTo(x + w * .4, top + 20, x + w * 1.5, 245, x + w, 262); c.closePath(); c.fill();
    }
    const rise = (time * .4 + i * .17) % 1;
    rect(c, x + rise * 24, 226 - rise * 96, 4, 7, '#ffc164');
    rect(c, x - 8 + Math.sin(time + i) * 8, 291 + i % 3 * 9, 28, 3, '#c17b48');
  }
  text(c, 'DET BRÆNDER', 34, 68, 57, '#ffcb79');
  text(c, 'BROMELDING', 770, 54, 28, '#c9bca6');
  text(c, 'ALT ER UNDER KONTROL*', 35, 101, 20, '#c9bca6');

  rect(c, 0, 332, width, 233, '#091510');
  rect(c, 0, 332, width, 34, '#2b3e33');
  text(c, 'henrik@bromelding: ~', 26, 356, 21, '#bbd3be');
  text(c, '$ pnpm deploy', 27, 401, 30, green);
  text(c, '[OK]   Build completed.', 27, 438, 27, '#b7cdba');
  text(c, '[WARN] bridge.onFire = true', 27, 475, 27, amber);
  text(c, '[INFO] Det er sidste rettelse...', 27, 512, 27, green);
  text(c, '$', 27, 548, 28, green);
  if (Math.floor(time * 2) % 2 === 0) rect(c, 62, 526, 16, 25, green);
  text(c, '*næsten', 866, 548, 21, '#76927c');
}

export class HenrikScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  screen?: THREE.Object3D;
  private contexts: CanvasRenderingContext2D[] = [];
  private cover?: HTMLImageElement;
  private elapsed = 0;
  private frame = 0;

  constructor() {
    const material = (name: string) => {
      const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 424;
      const c = canvas.getContext('2d')!; c.scale(canvas.width / width, canvas.height / height);
      this.contexts.push(c);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      return new THREE.MeshBasicMaterial({ name, map: texture, toneMapped: false });
    };
    this.materials = [material('Henrik / 1000mods'), material('Henrik / burning bridge')];
    this.draw();
  }

  loadImages() {
    registerImage(coverUrl, cover => { this.cover = cover; this.draw(); }, this.screen);
  }

  private draw() {
    drawPlayer(this.contexts[0], this.elapsed, this.cover);
    drawBridge(this.contexts[1], this.elapsed);
    this.materials.forEach(material => { material.map!.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    if (!screenPriority(this.screen, camera, innerHeight, 8)) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 12);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
