import * as THREE from 'three';
import { Tetris, tetrisShapes } from './tetris.mjs';

const colors: Record<string, string> = { I: '#16bedb', O: '#eebd27', T: '#aa60e8', S: '#54c96c', Z: '#f05f78', J: '#5484ed', L: '#ef953d' };
const cell = 46, left = 20, top = 220;

export class TetrisScreen {
  private canvas = document.createElement('canvas');
  private context: CanvasRenderingContext2D;
  readonly texture: THREE.CanvasTexture;

  constructor() {
    this.canvas.width = 500; this.canvas.height = 1400;
    this.context = this.canvas.getContext('2d')!;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
  }

  private text(text: string, x: number, y: number, size: number) {
    const c = this.context;
    c.font = `600 ${size}px monospace`; c.textAlign = 'center';
    c.lineWidth = 4; c.strokeStyle = 'rgba(15, 31, 35, .65)';
    c.strokeText(text, x, y); c.fillStyle = '#f7fffc'; c.fillText(text, x, y);
  }

  private block(x: number, y: number, kind: string, ghost = false, size = cell) {
    const c = this.context;
    c.save(); c.fillStyle = colors[kind]; c.strokeStyle = colors[kind];
    c.globalAlpha = ghost ? .09 : .52;
    c.fillRect(x + 2, y + 2, size - 4, size - 4);
    c.globalAlpha = ghost ? .55 : .95; c.lineWidth = ghost ? 2 : 3;
    c.strokeRect(x + 2, y + 2, size - 4, size - 4);
    if (!ghost) {
      c.globalAlpha = .55; c.strokeStyle = '#ffffff'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(x + 6, y + size - 7); c.lineTo(x + 6, y + 6); c.lineTo(x + size - 7, y + 6); c.stroke();
    }
    c.restore();
  }

  draw(game: Tetris, best: number, active = false) {
    const c = this.context;
    // Untouched pixels stay transparent: ink on glass, with no backplate.
    c.clearRect(0, 0, 500, 1400);
    if (game.status === 'ready') {
      this.text('TETRIS', 250, 570, 58);
      this.text('Tryk på ruden', 250, 625, 25);
      this.text('eller Enter', 250, 664, 21);
      tetrisShapes.T.forEach((row, y) => row.forEach((value, x) => { if (value) this.block(181 + x * cell, 730 + y * cell, 'T'); }));
    } else {
      this.text('TETRIS', 250, 92, 52);
      this.text(`${game.score} POINT`, 250, 147, 29);
      this.text(`${game.lines} RÆKKER · NIV. ${game.level}`, 250, 187, 22);
      c.lineWidth = 1; c.strokeStyle = 'rgba(235, 255, 250, .2)';
      c.beginPath();
      for (let x = 0; x <= 10; x++) { c.moveTo(left + x * cell, top); c.lineTo(left + x * cell, top + 20 * cell); }
      for (let y = 0; y <= 20; y++) { c.moveTo(left, top + y * cell); c.lineTo(left + 10 * cell, top + y * cell); }
      c.stroke();
      c.strokeStyle = 'rgba(235, 255, 250, .65)'; c.lineWidth = 3; c.strokeRect(left, top, 10 * cell, 20 * cell);
      game.board.forEach((row, y) => row.forEach((kind, x) => { if (kind) this.block(left + x * cell, top + y * cell, kind); }));
      const piece = game.piece;
      if (piece && game.status !== 'over') {
        for (const ghost of [true, false]) {
          const py = ghost ? game.ghostY : piece.y;
          piece.matrix.forEach((row, y) => row.forEach((value, x) => {
            if (value && y + py >= 0) this.block(left + (x + piece.x) * cell, top + (y + py) * cell, piece.kind, ghost);
          }));
        }
      }
      if (game.status === 'paused' || game.status === 'over') {
        c.fillStyle = 'rgba(15, 31, 35, .48)'; c.fillRect(28, 596, 444, 134);
        this.text(game.status === 'paused' ? 'PAUSE' : 'GAME OVER', 250, 650, 43);
        this.text(!active ? 'Tryk på ruden' : game.status === 'paused' ? 'Fortsæt med P' : 'Enter: spil igen', 250, 701, 24);
      }
      const next = game.queue[0];
      this.text('NÆSTE', 130, 1210, 23);
      if (next) tetrisShapes[next].forEach((row, y) => row.forEach((value, x) => {
        if (value) this.block(260 + x * 30, 1170 + y * 30, next, false, 30);
      }));
      this.text(`REKORD ${best}`, 250, 1310, 22);
    }
    this.texture.needsUpdate = true;
  }
}
