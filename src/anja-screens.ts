import * as THREE from 'three';
import fridgeUrl from './assets/anja-fridge-webcam.png';
import elevatorUrl from './assets/anja-elevator-webcam.png';

const green = '#7df0b6', ink = '#173c3b';
const clock = new Intl.DateTimeFormat('da-DK', { timeZone: 'Europe/Copenhagen', hour: '2-digit', minute: '2-digit', second: '2-digit' });

function text(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color = '#eef7f5', align: CanvasTextAlign = 'left') {
  c.font = `700 ${size}px Arial, sans-serif`; c.fillStyle = color; c.textAlign = align; c.fillText(value, x, y);
}

function feed(c: CanvasRenderingContext2D, image: HTMLImageElement | undefined, y: number, title: string, status: string, time: number) {
  text(c, title, 26, y + 42, 38);
  c.fillStyle = '#213a41'; c.fillRect(24, y + 62, 552, 340);
  if (image) {
    const scale = Math.max(552 / image.width, 340 / image.height);
    const width = 552 / scale, height = 340 / scale;
    c.drawImage(image, (image.width - width) / 2, (image.height - height) / 2, width, height, 24, y + 62, 552, 340);
  }
  c.fillStyle = '#071619bb'; c.fillRect(24, y + 62, 552, 42);
  text(c, clock.format(new Date()), 40, y + 92, 25);
  text(c, 'LIVE', 554, y + 92, 25, green, 'right');
  c.fillStyle = Math.floor(time * 2) % 2 ? '#228657' : green;
  c.beginPath(); c.arc(480, y + 83, 7, 0, Math.PI * 2); c.fill();
  // A faint rolling scan line gives the simulated camera feeds a live-video feel.
  c.fillStyle = '#d9ffe916'; c.fillRect(24, y + 104 + (time * 24 % 296), 552, 2);
  text(c, status, 26, y + 449, 33, green);
}

function drawCameras(c: CanvasRenderingContext2D, images: (HTMLImageElement | undefined)[], time: number) {
  c.fillStyle = '#0c2026'; c.fillRect(0, 0, 600, 1120);
  text(c, 'ANJA CONTROL', 26, 66, 46, green);
  text(c, '2 KAMERAER / KONTOR', 26, 109, 26, '#a7c4c6');
  feed(c, images[0], 135, '01 / KØLESKAB', 'MÆLK PÅ LAGER', time);
  feed(c, images[1], 610, '02 / ELEVATORDØR', 'DØREN ER LUKKET', time + .6);
  text(c, 'SIMULERET KAMERAVISNING', 300, 1101, 20, '#82a4aa', 'center');
}

function grid(c: CanvasRenderingContext2D, y: number, height: number) {
  c.strokeStyle = '#d3e2df'; c.lineWidth = 2;
  for (let i = 0; i <= 4; i++) {
    const row = y + height * i / 4;
    c.beginPath(); c.moveTo(48, row); c.lineTo(552, row); c.stroke();
  }
}

function drawGraphs(c: CanvasRenderingContext2D, time: number) {
  c.fillStyle = '#eaf2ef'; c.fillRect(0, 0, 600, 1120);
  text(c, 'KONTORPULS', 26, 66, 48, ink);
  text(c, 'DRIFT & FORBRUG', 26, 109, 26, '#547d76');
  c.fillStyle = '#ffffff'; c.fillRect(24, 144, 552, 412); c.fillRect(24, 586, 552, 462);
  text(c, 'MÆLKEFORBRUG', 44, 196, 36, ink);
  text(c, `${(18.4 + Math.sin(time / 7) * .4).toFixed(1).replace('.', ',')} L`, 44, 259, 54, '#197b66');
  text(c, 'DENNE UGE', 550, 255, 23, '#547d76', 'right');
  grid(c, 292, 208);
  const points: [number, number][] = [];
  for (let i = 0; i <= 36; i++) {
    const value = .43 + Math.sin(i * .31 + time * .16) * .19 + Math.sin(i * .76 + time * .08) * .08;
    points.push([48 + i * 14, 500 - value * 208]);
  }
  c.beginPath(); c.moveTo(48, 500); points.forEach(([x, y]) => c.lineTo(x, y)); c.lineTo(552, 500); c.closePath();
  c.fillStyle = '#d7f2e7'; c.fill();
  c.beginPath(); points.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y));
  c.strokeStyle = '#197b66'; c.lineWidth = 7; c.stroke();
  ['MAN', 'TIR', 'ONS', 'TOR', 'FRE'].forEach((day, i) => text(c, day, 48 + i * 126, 536, 23, '#547d76', i === 4 ? 'right' : 'left'));
  text(c, 'DØRAKTIVITET', 44, 640, 36, ink);
  text(c, 'ÅBNINGER / TIME', 44, 685, 25, '#547d76');
  grid(c, 730, 250);
  for (let i = 0; i < 7; i++) {
    const height = 62 + (Math.sin(i * 1.4 + time * .2) + 1) * 74;
    c.fillStyle = i % 2 ? '#7bc6ae' : '#db985f'; c.fillRect(55 + i * 72, 980 - height, 42, height);
    text(c, String(8 + i).padStart(2, '0'), 76 + i * 72, 1020, 23, '#547d76', 'center');
  }
  text(c, 'ALT UNDER KONTROL', 300, 1101, 28, '#197b66', 'center');
}

export class AnjaScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  screen?: THREE.Object3D;
  private images: (HTMLImageElement | undefined)[] = [];
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
      const canvas = document.createElement('canvas'); canvas.width = 600; canvas.height = 1120;
      const c = canvas.getContext('2d')!;
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter; texture.generateMipmaps = false;
      this.contexts.push(c); this.textures.push(texture);
      return new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
    };
    this.materials = [material(), material()]; this.draw();
    [fridgeUrl, elevatorUrl].forEach((url, index) => new THREE.ImageLoader().load(url, image => {
      this.images[index] = image; this.draw();
    }));
  }

  private draw() {
    drawCameras(this.contexts[0], this.images, this.elapsed); drawGraphs(this.contexts[1], this.elapsed);
    this.textures.forEach(texture => { texture.needsUpdate = true; });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.screen) return false;
    this.screen.localToWorld(this.center.set(.34, 0, 0));
    this.screen.getWorldDirection(this.normal); this.offset.copy(camera.position).sub(this.center);
    if (this.offset.lengthSq() > 8 ** 2 || this.offset.dot(this.normal) <= 0) return false;
    camera.updateMatrixWorld(); this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > 1.3 || Math.abs(this.projected.y) > 1.3) return false;
    this.elapsed += dt;
    const frame = Math.floor(this.elapsed * 8);
    if (frame === this.frame) return false;
    this.frame = frame; this.draw(); return true;
  }
}
