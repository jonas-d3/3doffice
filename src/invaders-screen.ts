import * as THREE from 'three';
import { Invaders, invadersSize } from './invaders.mjs';
import { drawingArea } from './whiteboard-play.mjs';

const ink = '#343a40', paper = '#fffef9', blue = '#1864ab', green = '#2b8a3e', violet = '#6741a5', red = '#c92a2a';
type Point = [number, number];
type ScreenOptions = { hovered?: boolean; showDrawingArea?: boolean; autoFire?: boolean; pauseHint?: string };

export class InvadersScreen {
  readonly canvas = document.createElement('canvas');
  readonly texture: THREE.CanvasTexture;
  private c: CanvasRenderingContext2D;

  constructor(invalidate: () => void) {
    this.canvas.width = invadersSize.width; this.canvas.height = invadersSize.height;
    this.c = this.canvas.getContext('2d')!;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.minFilter = THREE.LinearFilter; this.texture.generateMipmaps = false;
    document.fonts.load('40px Whiteboard').then(invalidate).catch(() => { /* Handwriting fallback remains playable. */ });
  }

  // Stable, imperfect double strokes: the ink never jitters between frames.
  private stroke(points: Point[], color = ink, width = 3, closed = false, hatch = false, seed = 1) {
    const c = this.c;
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = color;
    if (hatch) {
      c.beginPath(); points.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.closePath();
      c.save(); c.clip(); c.globalAlpha = .2; c.lineWidth = 2;
      const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
      const left = Math.min(...xs), right = Math.max(...xs), top = Math.min(...ys), bottom = Math.max(...ys);
      for (let x = left - (bottom - top); x < right; x += 8) {
        c.beginPath(); c.moveTo(x, bottom); c.lineTo(x + bottom - top, top); c.stroke();
      }
      c.restore();
    }
    for (let pass = 0; pass < 2; pass++) {
      c.lineWidth = width * (pass ? .6 : 1); c.globalAlpha = pass ? .45 : .94;
      c.beginPath();
      points.forEach(([x, y], i) => {
        const dx = Math.sin(i * 7.1 + seed * 2.3 + pass) * 1.3;
        const dy = Math.cos(i * 4.7 + seed + pass * 2) * 1.1;
        if (!i) c.moveTo(x + dx, y + dy); else c.lineTo(x + dx, y + dy);
      });
      if (closed) c.closePath(); c.stroke();
    }
    c.restore();
  }

  private text(text: string, x: number, y: number, size: number, color = ink, align: CanvasTextAlign = 'left', angle = 0) {
    const c = this.c; c.save(); c.translate(x, y); c.rotate(angle);
    c.font = `${size}px Whiteboard, "Comic Sans MS", cursive`; c.textAlign = align; c.fillStyle = color;
    c.fillText(text, 0, 0); c.restore();
  }

  private alien(x: number, y: number, row: number, stride: number, seed: number) {
    const c = this.c; c.save(); c.translate(x, y);
    const color = [violet, green, blue][row];
    const outlines: Point[][] = [
      [[-24, 6], [-20, -8], [-10, -17], [0, -23], [10, -17], [20, -8], [24, 6], [13, 12], [-13, 12]],
      [[-26, 10], [-26, -3], [-16, -3], [-16, -14], [16, -14], [16, -3], [26, -3], [26, 10], [15, 10], [15, 16], [-15, 16], [-15, 10]],
      [[-27, 5], [-22, -11], [-11, -18], [11, -18], [22, -11], [27, 5], [18, 14], [-18, 14]],
    ];
    this.stroke(outlines[row], color, 3, true, true, seed);
    for (const side of [-1, 1]) {
      if (row === 1) this.stroke([[side * 12, -15], [side * 18, -25], [side * 24, -25]], color, 2.5);
      this.stroke([[side * 14, 13], [side * 19, stride ? 24 : 17], [side * (stride ? 26 : 10), 24]], color, 3);
      this.stroke([[side * 8 - 2, -3], [side * 8 + 2, -3], [side * 8 + 2, 2], [side * 8 - 2, 2]], color, 2, true);
    }
    c.restore();
  }

  draw(game: Invaders, best: number, reducedMotion: boolean, ship: Point[][], drawing: Point[][], currentStroke: Point[], options: ScreenOptions = {}) {
    const c = this.c;
    const { hovered = false, showDrawingArea = false, autoFire = false, pauseHint = 'Kom tilbage til tavlen for at fortsætte' } = options;
    const canDraw = ['ready', 'over', 'won'].includes(game.status);
    c.fillStyle = paper; c.fillRect(0, 0, 800, 1140);
    if (hovered) {
      this.stroke([[12, 12], [788, 12], [788, 1128], [12, 1128]], blue, 5, true);
    }
    if (canDraw) {
      // The idle board is blank. Hover (or proximity on touchscreens) reveals
      // the drawing invitation, which stays visible once ink has been added.
      if (showDrawingArea || drawing.length || currentStroke.length || game.status !== 'ready') {
        this.text(game.status === 'over' ? 'De overtog mødet!' : game.status === 'won' ? 'Tavlen er reddet!' : 'Tegn dit rumskib', 400, 520, 40, blue, 'center', -.015);
        this.text(`${drawing.length}/5 streger · alle former virker`, 400, 561, 28, ink, 'center');
        const { left, right, top, bottom } = drawingArea;
        c.save(); c.setLineDash([8, 10]);
        this.stroke([[left, top], [right, top], [right, bottom], [left, bottom]], '#a3afb6', 2, true);
        c.restore();
        if (game.status !== 'ready') this.text(`${game.score} point · tegn et nyt rumskib`, 400, 845, 27, ink, 'center');
      }
      for (const stroke of [...drawing, currentStroke]) if (stroke.length > 1) this.stroke(stroke, blue, 4);
      this.texture.needsUpdate = true;
      return;
    }
    this.text('SPACE INVADERS', 400, 90, 62, ink, 'center', -.015);
    this.stroke([[95, 113], [300, 117], [511, 111], [699, 115]], blue, 3);
    this.text('mødet må vente ...', 400, 155, 27, violet, 'center', .015);
    this.text(`POINT ${String(game.score).padStart(4, '0')}`, 48, 210, 27);
    this.text(`BØLGE ${game.wave}/3`, 752, 210, 27, ink, 'right');
    for (const alien of game.aliens) this.alien(alien.x, alien.y, alien.row, reducedMotion ? 0 : game.stride % 2, alien.column + alien.row * 7);
    for (const block of game.shields) {
      this.stroke([[block.x - 9, block.y - 9], [block.x + 9, block.y - 9], [block.x + 9, block.y + 9], [block.x - 9, block.y + 9]], green, 2, true, true, block.x);
    }
    for (const shot of game.shots) {
      this.stroke(shot.enemy ? [[shot.x - 3, shot.y - 10], [shot.x + 3, shot.y - 3], [shot.x - 3, shot.y + 3], [shot.x + 3, shot.y + 10]] : [[shot.x, shot.y + 10], [shot.x + 1, shot.y - 10]], shot.enemy ? red : blue, 3);
    }
    if (!reducedMotion) for (const mark of game.erasures) {
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3;
        this.stroke([[mark.x + Math.cos(a) * 15, mark.y + Math.sin(a) * 15], [mark.x + Math.cos(a) * 27, mark.y + Math.sin(a) * 27]], violet, 2);
      }
    }
    const x = game.playerX, y = invadersSize.playerY;
    for (const stroke of ship) this.stroke(stroke.map(([sx, sy]) => [x + sx, y + sy]), blue, 3.5);
    if (game.recovery > 0 && game.status === 'running') {
      this.stroke([[x - 37, y + 20], [x - 38, y - 18], [x, y - 40], [x + 38, y - 18], [x + 37, y + 20]], blue, 1.5);
    }
    this.stroke([[45, 990], [281, 993], [530, 988], [755, 992]], ink, 2);
    for (let i = 0; i < 3; i++) {
      const hx = 65 + i * 42;
      this.stroke([[hx, 1033], [hx - 14, 1018], [hx - 13, 1008], [hx - 5, 1006], [hx, 1013], [hx + 6, 1006], [hx + 14, 1009], [hx + 13, 1019]], i < game.lives ? red : '#b6b6b0', 2.5, true, i < game.lives);
    }
    this.text(`REKORD ${String(best).padStart(4, '0')}`, 751, 1031, 25, ink, 'right');
    this.text(autoFire ? 'Automatisk ild · mikrofonen er slukket' : 'Sig “skyd”, “bang” eller “piyv”', 400, 1080, 27, blue, 'center');
    this.text('Gå til siderne · gå væk for at holde pause', 400, 1120, 23, ink, 'center');
    if (game.status === 'paused') {
      c.fillStyle = paper; c.fillRect(90, 502, 620, 155);
      this.text('Tuschpause.', 400, 565, 42, blue, 'center');
      this.text(pauseHint, 400, 620, 27, ink, 'center');
    } else if (!game.aliens.length) {
      this.text('Ny bølge på vej ...', 400, 600, 38, blue, 'center');
    }
    this.texture.needsUpdate = true;
  }
}
