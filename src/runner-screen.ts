import * as THREE from 'three';
import { Runner, runnerSize } from './runner.mjs';

const ink = '#304d40', paper = '#e9eedb', muted = '#82947c';

export class RunnerScreen {
  readonly canvas = document.createElement('canvas');
  readonly texture: THREE.CanvasTexture;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas.width = runnerSize.width; this.canvas.height = runnerSize.height;
    this.ctx = this.canvas.getContext('2d')!;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = false;
  }

  draw(game: Runner, best: number, active: boolean) {
    const c = this.ctx, { width, height, ground, playerX } = runnerSize;
    c.fillStyle = paper; c.fillRect(0, 0, width, height);
    const text = (value: string, x: number, y: number, size: number, color = ink, align: CanvasTextAlign = 'left') => {
      c.fillStyle = color; c.font = `bold ${size}px monospace`; c.textAlign = align; c.fillText(value, x, y);
    };
    text('KAFFEPAUSE', 42, 54, 20);
    text(`HI ${String(best).padStart(5, '0')}   ${String(game.score).padStart(5, '0')}`, width - 42, 54, 22, ink, 'right');
    // Quiet pixel clouds and a moving dotted floor, all drawn without image assets.
    c.strokeStyle = muted; c.lineWidth = 3;
    for (const [offset, y] of [[310, 120], [700, 160], [1030, 100]]) {
      const x = ((offset - game.distance * .12) % 1200 + 1200) % 1200 - 80;
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + 16, y); c.lineTo(x + 16, y - 12);
      c.lineTo(x + 42, y - 12); c.lineTo(x + 42, y - 22); c.lineTo(x + 64, y - 22);
      c.lineTo(x + 64, y - 9); c.lineTo(x + 84, y - 9); c.lineTo(x + 84, y); c.lineTo(x + 100, y); c.stroke();
    }
    c.fillStyle = muted; c.fillRect(35, ground + 2, width - 70, 3);
    for (let i = 0; i < 23; i++) {
      const x = ((i * 61 - game.distance) % width + width) % width;
      c.fillRect(x, ground + 15 + (i % 3) * 8, i % 2 ? 9 : 4, 2);
    }
    c.fillStyle = ink;
    for (const obstacle of game.obstacles) {
      const x = Math.round(obstacle.x), y = ground - obstacle.height, w = obstacle.width;
      c.fillRect(x + w * .4, y, w * .26, obstacle.height);
      c.fillRect(x, y + 13, w * .2, obstacle.height * .45);
      c.fillRect(x, y + obstacle.height * .5, w * .5, 9);
      c.fillRect(x + w * .8, y + 6, w * .2, obstacle.height * .4);
      c.fillRect(x + w * .55, y + obstacle.height * .38, w * .45, 9);
    }
    this.dinosaur(playerX, ground - Math.round(game.height), game);
    if (!active || game.status !== 'running') {
      c.fillStyle = paper; c.fillRect(245, 190, 500, 128);
      const title = !active ? 'LIGE EN LILLE PAUSE?' : game.status === 'over' ? 'AV! PRØV IGEN.' : game.status === 'paused' ? 'PAUSE' : 'KLAR TIL ET HOP?';
      text(title, width / 2, 226, 30, ink, 'center');
      text(!active ? '▶ PLAY' : game.status === 'over' ? `${game.score} POINT · HOP FOR AT GENSTARTE` : game.status === 'paused' ? 'HOP FOR AT FORTSÆTTE' : 'MELLEMRUM / ↑ / TRYK', width / 2, 280, 22, ink, 'center');
    }
    text('HOP OVER KAKTUSSERNE. HVOR LANGT NÅR DU?', width / 2, 480, 17, ink, 'center');
    this.texture.needsUpdate = true;
  }

  private dinosaur(x: number, ground: number, game: Runner) {
    const c = this.ctx, y = ground - 56;
    c.fillStyle = ink;
    c.fillRect(x + 23, y, 29, 23); c.fillRect(x + 16, y + 17, 23, 27);
    c.fillRect(x + 7, y + 25, 22, 15); c.fillRect(x, y + 16, 8, 17);
    c.fillRect(x + 34, y + 29, 12, 5); c.fillRect(x + 42, y + 29, 4, 10);
    const stride = game.status === 'running' && game.height === 0 ? Math.floor(game.distance / 35) % 2 : 0;
    c.fillRect(x + 13, y + 39, 8, stride ? 10 : 17); c.fillRect(x + 13, y + (stride ? 46 : 52), 14, 4);
    c.fillRect(x + 28, y + 39, 8, stride ? 17 : 10); c.fillRect(x + 28, y + (stride ? 52 : 46), 14, 4);
    c.fillStyle = paper; c.fillRect(x + 42, y + 5, 4, 4); c.fillRect(x + 36, y + 17, 16, 3);
    if (game.status === 'over') { c.fillStyle = paper; c.fillRect(x + 39, y + 7, 10, 3); }
  }
}
