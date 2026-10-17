import { Invaders } from './invaders.mjs';

export const drawingArea = { left: 100, right: 700, top: 580, bottom: 790 };
export const inDrawingArea = ([x, y]) => x > drawingArea.left && x < drawingArea.right && y > drawingArea.top && y < drawingArea.bottom;

/** Uniformly scale the ink, retaining separate strokes and open endpoints. */
function makeShip(strokes) {
  const points = strokes.flat(), xs = points.map(p => p[0]), ys = points.map(p => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min(56 / Math.max(1, maxX - minX), 48 / Math.max(1, maxY - minY));
  return strokes.map(stroke => stroke.map(([x, y]) => [(x - (minX + maxX) / 2) * scale, (y - (minY + maxY) / 2) * scale - 2]));
}

/** Position and presence drive the game; there is no separate keyboard mode. */
export class WalkInInvaders {
  /** @type {[number, number][][]} */
  ship = [];
  /** @type {[number, number][][]} */
  drawing = [];
  /** @type {{ lateral: number, x: number } | null} */
  anchor = null;
  pendingFire = false;

  constructor(random = Math.random) { this.game = new Invaders(random); }
  get canDraw() { return ['ready', 'over', 'won'].includes(this.game.status); }

  /** Add one pointer-down/up stroke. The fifth stroke starts the round. */
  addStroke(points, lateral) {
    if (!this.canDraw || points.length < 2 || points.length > 512 || points.some(p => !Number.isFinite(p[0]) || !Number.isFinite(p[1]))) return false;
    const length = points.slice(1).reduce((sum, p, i) => sum + Math.hypot(p[0] - points[i][0], p[1] - points[i][1]), 0);
    if (length < 6) return false;
    this.drawing.push(points.map(([x, y]) => [x, y]));
    if (this.drawing.length === 5) {
      this.ship = makeShip(this.drawing); this.drawing = [];
      this.game.start(); this.pendingFire = false;
      this.anchor = { lateral, x: this.game.playerX };
    }
    return true;
  }

  update(dt, present, lateral, { fire = false, autoFire = false } = {}) {
    if (!this.ship.length || this.canDraw) return;
    if (!present) { this.game.pause(); this.anchor = null; this.pendingFire = false; return; }
    if (!this.anchor) this.anchor = { lateral, x: this.game.playerX };
    if (this.game.status === 'paused') this.game.start();
    const targetX = this.anchor.x + (lateral - this.anchor.lateral) * (345 / .45);
    this.pendingFire ||= fire;
    this.game.update(dt, { targetX, fire: autoFire || this.pendingFire });
    // Keep a sound until the next simulation tick, even on 144/240 Hz displays.
    if (this.game.fireIn > 0 || !this.game.aliens.length) this.pendingFire = false;
  }
}
