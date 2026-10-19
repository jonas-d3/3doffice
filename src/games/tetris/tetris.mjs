export const tetrisSize = { columns: 10, rows: 20 };
export const tetrisShapes = {
  I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
};
/** @typedef {keyof typeof tetrisShapes} Kind */
/** @typedef {{kind: Kind, matrix: number[][], x: number, y: number}} Piece */

export class Tetris {
  /** @type {'ready' | 'running' | 'paused' | 'over'} */
  status = 'ready';
  board = Array.from({ length: 20 }, () => Array(10).fill(''));
  /** @type {Piece | null} */
  piece = null;
  /** @type {Kind[]} */
  queue = [];
  score = 0;
  lines = 0;
  revision = 0;
  fall = 0;
  lockTime = 0;
  remainder = 0;

  constructor(random = Math.random) { this.random = random; }
  get level() { return 1 + Math.floor(this.lines / 10); }
  get interval() { return Math.max(.09, .8 * .8 ** (this.level - 1)); }

  start() {
    if (this.status === 'running') return;
    if (this.status !== 'paused') {
      this.board = Array.from({ length: 20 }, () => Array(10).fill(''));
      this.score = 0; this.lines = 0; this.queue = [];
      this.fall = 0; this.lockTime = 0; this.remainder = 0;
      this.spawn();
    }
    this.status = 'running'; this.revision++;
  }

  pause() { if (this.status === 'running') { this.status = 'paused'; this.revision++; } }

  spawn() {
    if (this.queue.length < 2) {
      const bag = /** @type {Kind[]} */ (Object.keys(tetrisShapes));
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(this.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      this.queue.push(...bag);
    }
    const kind = /** @type {Kind} */ (this.queue.shift());
    const matrix = tetrisShapes[kind].map(row => [...row]);
    this.piece = { kind, matrix, x: Math.floor((10 - matrix[0].length) / 2), y: 0 };
    this.fall = 0; this.lockTime = 0;
    if (!this.fits(this.piece)) this.status = 'over';
    this.revision++;
  }

  /** @param {Piece} piece */
  fits(piece) {
    return piece.matrix.every((row, y) => row.every((cell, x) => !cell || (
      piece.x + x >= 0 && piece.x + x < 10 && piece.y + y < 20 &&
      (piece.y + y < 0 || !this.board[piece.y + y][piece.x + x])
    )));
  }

  move(dx, dy = 0) {
    if (this.status !== 'running' || !this.piece) return false;
    const next = { ...this.piece, x: this.piece.x + dx, y: this.piece.y + dy };
    if (!this.fits(next)) return false;
    this.piece = next; this.revision++; return true;
  }

  rotate() {
    if (this.status !== 'running' || !this.piece || this.piece.kind === 'O') return false;
    const matrix = this.piece.matrix[0].map((_, x) => this.piece.matrix.map(row => row[x]).reverse());
    for (const dy of [0, -1, -2]) for (const dx of [0, -1, 1, -2, 2]) {
      const next = { ...this.piece, matrix, x: this.piece.x + dx, y: this.piece.y + dy };
      if (this.fits(next)) { this.piece = next; this.revision++; return true; }
    }
    return false;
  }

  softDrop() { if (this.move(0, 1)) { this.score++; this.fall = 0; } }

  get ghostY() {
    if (!this.piece) return 0;
    let y = this.piece.y;
    while (this.fits({ ...this.piece, y: y + 1 })) y++;
    return y;
  }

  drop() {
    if (this.status !== 'running' || !this.piece) return;
    const y = this.ghostY;
    this.score += (y - this.piece.y) * 2; this.piece.y = y; this.lock();
  }

  lock() {
    if (!this.piece) return;
    const piece = this.piece;
    if (piece.matrix.some((row, y) => row.some(cell => cell && piece.y + y < 0))) {
      this.status = 'over'; this.revision++; return;
    }
    piece.matrix.forEach((row, y) => row.forEach((cell, x) => {
      if (cell) this.board[piece.y + y][piece.x + x] = piece.kind;
    }));
    const remaining = this.board.filter(row => row.some(cell => !cell));
    const cleared = 20 - remaining.length;
    this.score += [0, 100, 300, 500, 800][cleared] * this.level;
    this.lines += cleared;
    this.board = [...Array.from({ length: cleared }, () => Array(10).fill('')), ...remaining];
    this.spawn();
  }

  update(dt) {
    if (this.status !== 'running' || !Number.isFinite(dt) || dt <= 0) return;
    this.remainder += Math.min(dt, .25);
    while (this.remainder >= 1 / 120 && this.status === 'running' && this.piece) {
      this.remainder -= 1 / 120;
      this.fall += 1 / 120;
      if (this.fall >= this.interval) { this.fall -= this.interval; this.move(0, 1); }
      if (this.fits({ ...this.piece, y: this.piece.y + 1 })) this.lockTime = 0;
      else {
        this.lockTime += 1 / 120;
        if (this.lockTime >= .45) this.lock();
      }
    }
  }
}
