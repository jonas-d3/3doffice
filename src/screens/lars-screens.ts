import * as THREE from 'three';
import { screenPriority } from '../loading/feature-triggers.mjs';

const width = 1024, height = 565;
const white = '#f5f5e9', blue = '#387bff', mint = '#a5f3bf', pink = '#eea9df';

function rect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  c.fillStyle = color; c.fillRect(x, y, w, h);
}

function label(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color = white, align: CanvasTextAlign = 'left') {
  c.fillStyle = color; c.font = `700 ${size}px monospace`; c.textAlign = align; c.fillText(value, x, y);
}

function circle(c: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  c.fillStyle = color; c.beginPath(); c.arc(x, y, radius, 0, Math.PI * 2); c.fill();
}

function player(c: CanvasRenderingContext2D, x: number, y: number, shirt: string, stride: number) {
  // Deliberately blocky sprites, with the blue shorts of the home team.
  x = Math.round(x / 4) * 4; y = Math.round(y / 4) * 4;
  rect(c, x - 8, y - 36, 16, 16, '#e9bc94');
  rect(c, x - 12, y - 20, 24, 26, shirt);
  rect(c, x - 20, y - 17, 8, 22, shirt); rect(c, x + 12, y - 17, 8, 22, shirt);
  rect(c, x - 12, y + 6, 24, 12, '#124ba4');
  rect(c, x - 12, y + 18, 8, 12 + stride, white); rect(c, x + 4, y + 18, 8, 12 - stride, white);
}

function drawFootball(c: CanvasRenderingContext2D, time: number) {
  const phase = (time + 4.5) % 9, goal = phase >= 3.4;
  rect(c, 0, 0, width, height, '#0c2451');
  label(c, 'FCK', 40, 75, 70);
  label(c, goal ? '1 : 0' : '0 : 0', 512, 76, 67, white, 'center');
  label(c, 'GÆSTER', 984, 71, 35, '#99b9ed', 'right');
  label(c, 'MINI-KAMP / ALTID HJEMMEBANE', 40, 113, 22, '#99b9ed');

  for (let i = 0; i < 10; i++) rect(c, 42 + i * 94, 140, 94, 297, i % 2 ? '#286548' : '#307351');
  c.strokeStyle = '#afcfb0'; c.lineWidth = 4;
  c.strokeRect(60, 155, 900, 267); c.strokeRect(60, 214, 115, 150); c.strokeRect(845, 214, 115, 150);
  c.beginPath(); c.moveTo(510, 155); c.lineTo(510, 422); c.stroke();
  c.beginPath(); c.arc(510, 289, 66, 0, Math.PI * 2); c.stroke();
  // Goal net sits beyond the touchline.
  rect(c, 961, 244, 37, 90, '#102c3a');
  c.lineWidth = 2;
  for (let x = 962; x < 999; x += 9) { c.beginPath(); c.moveTo(x, 244); c.lineTo(x, 334); c.stroke(); }
  for (let y = 244; y <= 334; y += 10) { c.beginPath(); c.moveTo(961, y); c.lineTo(998, y); c.stroke(); }
  c.strokeStyle = white; c.lineWidth = 5; c.strokeRect(960, 243, 38, 92);

  const run = Math.min(phase / 2, 1), stride = goal ? 0 : Math.sin(time * 8) * 5;
  player(c, 280 + run * 220, 280, white, stride);
  player(c, 400, 370, white, -stride); player(c, 720, 210, '#f0ba57', stride);
  player(c, 806, 365, '#f0ba57', -stride); player(c, 930, goal ? 347 : 285, '#ed9155', stride);
  const shot = Math.max(0, Math.min(1, (phase - 2) / 1.4));
  const ballX = 310 + run * 220 + shot * 450, ballY = 306 - Math.sin(shot * Math.PI) * 45;
  rect(c, ballX - 9, ballY - 9, 18, 18, white); rect(c, ballX - 3, ballY - 3, 6, 6, '#17384c');
  if (goal) {
    rect(c, 270, 228, 480, 111, '#174cba');
    label(c, 'MÅÅÅL!', 510, 309, 90, white, 'center');
    for (let i = 0; i < 22; i++) {
      const fall = ((phase - 3.4) * 35 + i * 29) % 240;
      rect(c, 80 + i * 41, 166 + fall, 9, 16, i % 2 ? white : '#71a8ff');
    }
  }
  rect(c, 40, 465, 944, 64, '#164593');
  label(c, goal ? 'GOD KAMP, ALLE SAMMEN.' : 'KOM SÅ, KØBENHAVN!', 512, 508, 34, white, 'center');
}

function drawJudge(c: CanvasRenderingContext2D, time: number) {
  const remaining = Math.max(0, 210 - Math.floor(time % 219));
  const late = time % 10 >= 4.5;
  rect(c, 0, 0, width, height, '#2b2015');
  label(c, 'OVERDOMMER LARS', 40, 69, 52, '#ffd27e');
  label(c, 'AI-KONKURRENCEN / DOMMERBORDET', 42, 109, 23, '#cbb48c');
  rect(c, 40, 143, 479, 296, '#493420');
  label(c, 'TID TIL FREMLÆGGELSE', 279, 184, 23, '#e5cfa8', 'center');
  const timer = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
  label(c, timer, 279, 301, 116, '#ffd27e', 'center');
  rect(c, 70, 333, 419, 9, '#6b5031'); rect(c, 70, 333, 419 * remaining / 210, 9, '#ffd27e');
  label(c, remaining === 0 ? 'TIDEN ER GÅET!' : '3½ MINUT. TAK.', 279, 401, 29, '#e5cfa8', 'center');
  const categories = [['SJOVT', '8'], ['LÆRERIGT', '7'], ['ORIGINALT ×3', '9']];
  categories.forEach(([name, score], i) => {
    const y = 143 + i * 69;
    rect(c, 545, y, 439, 60, '#392b1e');
    label(c, name, 565, y + 40, 27, '#e5cfa8'); label(c, score, 960, y + 43, 39, '#ffd27e', 'right');
  });
  rect(c, 545, 365, 439, 74, late ? '#963b32' : '#493420');
  label(c, late ? '−1 POINT' : 'AFVENTER SLIDES', 764, 411, late ? 48 : 29, white, 'center');
  label(c, late ? 'FOR SENT ER FOR SENT.' : 'OVERDOMMEREN DELTAGER IKKE.', 512, 505, 31, '#ffd27e', 'center');
  label(c, 'DOMMEN KAN IKKE APPELLERES', 512, 541, 22, '#cbb48c', 'center');
}

function drawReview(c: CanvasRenderingContext2D, time: number) {
  const phase = (time + 4) % 9, stamped = phase >= 3.5;
  rect(c, 0, 0, width, height, '#271c36');
  label(c, 'AI-KODE TIL BEDØMMELSE', 40, 67, 45, pink);
  label(c, 'REVIEW #042 / LARS HAR ORDET', 42, 107, 23, '#b9a4cc');
  rect(c, 40, 140, 944, 301, '#161725');
  rect(c, 40, 140, 944, 42, '#40304d');
  label(c, 'ai-forslag.ts', 60, 169, 22, '#dfd2ed');
  label(c, stamped ? 'KRÆVER ET MENNESKE' : 'GENERERER…', 962, 169, 21, pink, 'right');
  const lines = [
    'function virkerDet(kode) {',
    '  // Det burde virke…',
    '  return true;',
    '}',
  ];
  const characters = Math.floor(phase * 30);
  let used = 0;
  lines.forEach((line, i) => {
    label(c, String(i + 1), 65, 230 + i * 52, 28, '#756786');
    label(c, line.slice(0, Math.max(0, characters - used)), 107, 230 + i * 52, 31, i === 1 ? '#aa9cb8' : '#b0d5f5');
    used += line.length;
  });
  // The lens searches the generated snippet before a readable, held verdict.
  const lensX = stamped ? 745 : 460 + Math.sin(phase * 1.6) * 235, lensY = stamped ? 243 : 265 + Math.sin(phase * 2) * 32;
  circle(c, lensX, lensY, 49, '#b2d6fa22');
  c.strokeStyle = '#b2d6fa'; c.lineWidth = 8;
  c.beginPath(); c.arc(lensX, lensY, 49, 0, Math.PI * 2); c.stroke();
  c.beginPath(); c.moveTo(lensX + 35, lensY + 35); c.lineTo(lensX + 72, lensY + 72); c.stroke();
  if (stamped) {
    c.save(); c.translate(683, 352); c.rotate(-.08);
    rect(c, -264, -68, 528, 136, '#4b263d');
    c.strokeStyle = pink; c.lineWidth = 6; c.strokeRect(-264, -68, 528, 136);
    label(c, 'MENER DU', 0, -10, 43, pink, 'center');
    label(c, 'VIRKELIG DET?', 0, 44, 48, pink, 'center');
    c.restore();
  }
  label(c, 'MANUEL KVALITETSKONTROL', 512, 503, 38, pink, 'center');
  label(c, 'ET EKSTRA PAR MENNESKEØJNE', 512, 540, 22, '#b9a4cc', 'center');
}

function drawReflog(c: CanvasRenderingContext2D, time: number) {
  const phase = (time + 5) % 10;
  const sinking = Math.min(1, phase / 2), rescued = Math.max(0, Math.min(1, (phase - 3.5) / 3));
  const commitY = phase < 3.5 ? 228 + sinking * 188 : 416 - rescued * 188;
  rect(c, 0, 0, width, height, '#102a25');
  label(c, 'REFLOG ER DIN VEN', 40, 67, 51, mint);
  label(c, 'AFDELINGEN FOR TABTE COMMITS', 42, 107, 23, '#91b7a5');
  rect(c, 40, 143, 468, 300, '#0b1c19');
  label(c, '$ git log', 62, 188, 31, mint);
  label(c, 'commit ikke fundet', 62, 227, 26, '#eeac85');
  label(c, '$ git reflog', 62, 284, 31, mint);
  label(c, 'a1b2c3d  der var du!', 62, 323, 26, '#cee6d5');
  label(c, '$ git cherry-pick', 62, 382, 29, mint);
  label(c, '  a1b2c3d', 62, 421, 29, '#cee6d5');

  // The commit sinks below the ground, then reflog fishes it back up.
  rect(c, 549, 408, 435, 35, '#365146');
  circle(c, 850, 310, 62, '#738b7b'); rect(c, 788, 310, 124, 99, '#738b7b');
  label(c, 'RIP', 850, 320, 39, '#17372c', 'center');
  label(c, 'COMMIT', 850, 356, 22, '#17372c', 'center');
  if (phase >= 3.5) {
    c.strokeStyle = '#d4b27b'; c.lineWidth = 8;
    c.beginPath(); c.moveTo(561, 385); c.quadraticCurveTo(575, 155, 680, 158); c.stroke();
    c.strokeStyle = '#d5eada'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(680, 158); c.lineTo(680, commitY - 30); c.stroke();
  }
  c.save(); c.beginPath(); c.rect(540, 140, 444, 268); c.clip();
  rect(c, 604, commitY - 30, 152, 60, mint);
  label(c, 'a1b2c3d', 680, commitY + 9, 28, '#153c2c', 'center');
  c.restore();
  rect(c, 40, 467, 944, 61, '#23483a');
  const status = rescued === 1 ? 'COMMIT GENOPLIVET. SELVFØLGELIG.' : phase >= 3.5 ? 'FISKER HISTORIKKEN FREM…' : 'SLETTET ER IKKE ALTID VÆK.';
  label(c, status, 512, 508, 30, mint, 'center');
}

export class LarsScreens {
  readonly materials: THREE.MeshBasicMaterial[];
  screen?: THREE.Object3D;
  private contexts: CanvasRenderingContext2D[] = [];
  private elapsed = 0;
  private frame = 0;

  constructor() {
    // Order matches workstation(): lower left, lower right, upper left, upper right.
    this.materials = ['FCK', 'overdommer', 'AI-kode', 'reflog'].map(name => {
      const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 424;
      const c = canvas.getContext('2d')!; c.scale(canvas.width / width, canvas.height / height);
      this.contexts.push(c);
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      return new THREE.MeshBasicMaterial({ name: `Lars / ${name}`, map: texture, toneMapped: false });
    });
    this.draw();
  }

  private draw() {
    drawFootball(this.contexts[0], this.elapsed);
    drawJudge(this.contexts[1], this.elapsed);
    drawReview(this.contexts[2], this.elapsed);
    drawReflog(this.contexts[3], this.elapsed);
    this.materials.forEach(material => { material.map!.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    if (!screenPriority(this.screen, camera, innerHeight, 8)) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 8);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
