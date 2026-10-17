import { Invaders } from './invaders.mjs';

const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
function segmentDistance(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
  return distance(p, [a[0] + dx * t, a[1] + dy * t]);
}

function simplify(points, tolerance) {
  let furthest = 0, split = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = segmentDistance(points[i], points[0], points.at(-1));
    if (d > furthest) { furthest = d; split = i; }
  }
  if (furthest <= tolerance) return [points[0], points.at(-1)];
  return [...simplify(points.slice(0, split + 1), tolerance).slice(0, -1), ...simplify(points.slice(split), tolerance)];
}

/** Accept a closed, roughly triangular outline; keep the user's imperfect ink.
 * @returns {[number, number][] | null}
 */
export function recognizeTriangle(points) {
  if (points.length < 4 || points.length > 512 || points.some(p => !Number.isFinite(p[0]) || !Number.isFinite(p[1]))) return null;
  const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const width = maxX - minX, height = maxY - minY, diagonal = Math.hypot(width, height);
  if (width < 55 || height < 55 || distance(points[0], points.at(-1)) > diagonal * .2) return null;
  const ring = [...points, points[0]];
  let opposite = 1;
  for (let i = 2; i < points.length; i++) if (distance(points[0], points[i]) > distance(points[0], points[opposite])) opposite = i;
  const corners = [...simplify(ring.slice(0, opposite + 1), diagonal * .065).slice(0, -1), ...simplify(ring.slice(opposite), diagonal * .065).slice(0, -1)];
  // A stroke can begin halfway along an edge, not just at a corner.
  for (let i = corners.length - 1; i >= 0 && corners.length > 3; i--) {
    if (segmentDistance(corners[i], corners[(i + corners.length - 1) % corners.length], corners[(i + 1) % corners.length]) < diagonal * .09) corners.splice(i, 1);
  }
  if (corners.length !== 3) return null;
  const [a, b, c] = corners;
  const area = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) / 2;
  const perimeter = distance(a, b) + distance(b, c) + distance(c, a);
  const length = ring.slice(1).reduce((sum, p, i) => sum + distance(p, ring[i]), 0);
  if (area < width * height * .25 || length > perimeter * 1.5) return null;
  return points.map(([x, y]) => [(x - (minX + maxX) / 2) / width * 56, (y - minY) / height * 48 - 26]);
}

/** Position and presence drive the game; there is no separate keyboard mode. */
export class WalkInInvaders {
  /** @type {[number, number][]} */
  ship = [];
  /** @type {{ lateral: number, x: number } | null} */
  anchor = null;
  pendingFire = false;

  constructor(random = Math.random) { this.game = new Invaders(random); }
  get canDraw() { return ['ready', 'over', 'won'].includes(this.game.status); }

  launch(points, lateral) {
    if (!this.canDraw) return false;
    const ship = recognizeTriangle(points);
    if (!ship) return false;
    this.ship = ship; this.game.start(); this.pendingFire = false;
    this.anchor = { lateral, x: this.game.playerX };
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
