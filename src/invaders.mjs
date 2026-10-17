export const invadersSize = { width: 800, height: 1140, playerY: 940 };
const step = 1 / 120;
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

export class Invaders {
  /** @type {'ready' | 'running' | 'paused' | 'over' | 'won'} */
  status = 'ready';
  score = 0;
  lives = 3;
  wave = 1;
  playerX = 400;
  direction = 1;
  marchIn = .6;
  fireIn = 0;
  enemyFireIn = 1.5;
  recovery = 0;
  nextWaveIn = 1.2;
  accumulator = 0;
  stride = 0;
  /** @type {{ x: number, y: number, row: number, column: number }[]} */
  aliens = [];
  /** @type {{ x: number, y: number, enemy: boolean }[]} */
  shots = [];
  /** @type {{ x: number, y: number }[]} */
  shields = [];
  /** @type {{ x: number, y: number, remaining: number }[]} */
  erasures = [];

  constructor(random = Math.random) { this.random = random; this.populate(); }

  populate() {
    this.aliens = Array.from({ length: 21 }, (_, i) => ({ x: 145 + i % 7 * 80, y: 280 + Math.floor(i / 7) * 70, row: Math.floor(i / 7), column: i % 7 }));
    this.shields = [];
    for (const x of [170, 400, 630]) for (let row = 0; row < 3; row++) for (let column = 0; column < 5; column++) {
      if (row === 2 && column > 0 && column < 4) continue;
      this.shields.push({ x: x + (column - 2) * 20, y: 810 + row * 20 });
    }
    this.shots = []; this.erasures = []; this.direction = 1; this.marchIn = .6;
    this.enemyFireIn = 1.5; this.nextWaveIn = 1.2; this.recovery = 1.2;
  }

  start() {
    if (this.status === 'running') return;
    if (this.status !== 'paused') {
      this.score = 0; this.lives = 3; this.wave = 1; this.playerX = 400;
      this.fireIn = this.accumulator = this.stride = 0; this.populate();
      this.recovery = 0;
    }
    this.status = 'running';
  }

  pause() { if (this.status === 'running') this.status = 'paused'; }

  update(dt, input = {}) {
    if (this.status !== 'running' || !Number.isFinite(dt) || dt <= 0) return;
    this.accumulator += Math.min(dt, .1);
    while (this.accumulator + 1e-9 >= step && this.status === 'running') {
      this.accumulator -= step;
      this.tick(input);
    }
  }

  tick({ move = 0, fire = false, targetX = this.playerX + clamp(move, -1, 1) * 360 * step }) {
    this.playerX = clamp(targetX, 55, 745);
    this.recovery = Math.max(0, this.recovery - step);
    this.fireIn = Math.max(0, this.fireIn - step);
    this.erasures = this.erasures.filter(mark => (mark.remaining -= step) > 0);
    if (!this.aliens.length) {
      this.shots = [];
      if (this.wave === 3) { this.status = 'won'; return; }
      this.nextWaveIn -= step;
      if (this.nextWaveIn <= 0) { this.wave++; this.populate(); }
      return;
    }
    if (fire && this.fireIn <= 0) {
      this.shots.push({ x: this.playerX, y: invadersSize.playerY - 28, enemy: false }); this.fireIn = .06;
    }
    this.marchIn -= step;
    if (this.marchIn <= 0) {
      const edge = this.aliens.some(alien => alien.x + this.direction * 19 < 50 || alien.x + this.direction * 19 > 750);
      if (edge) this.direction *= -1;
      for (const alien of this.aliens) {
        if (edge) alien.y += 27; else alien.x += this.direction * 19;
      }
      this.stride++;
      this.marchIn += Math.max(.12, .58 - (21 - this.aliens.length) * .018 - (this.wave - 1) * .075);
    }
    if (this.aliens.some(alien => alien.y + 20 >= invadersSize.playerY - 22)) { this.status = 'over'; return; }
    // Aliens erase bunkers as they descend through them.
    this.shields = this.shields.filter(block => !this.aliens.some(alien => Math.abs(alien.x - block.x) < 37 && Math.abs(alien.y - block.y) < 30));
    this.enemyFireIn -= step;
    if (this.enemyFireIn <= 0) {
      const column = this.aliens[Math.min(this.aliens.length - 1, Math.floor(this.random() * this.aliens.length))].column;
      const shooter = this.aliens.filter(alien => alien.column === column).at(-1);
      if (this.shots.filter(shot => shot.enemy).length < 5) this.shots.push({ x: shooter.x, y: shooter.y + 24, enemy: true });
      this.enemyFireIn = Math.max(.4, 1.1 - this.wave * .13) + this.random() * .6;
    }
    this.shots = this.shots.filter(shot => {
      shot.y += (shot.enemy ? 260 + this.wave * 25 : -740) * step;
      const shield = this.shields.findIndex(block => Math.abs(block.x - shot.x) < 13 && Math.abs(block.y - shot.y) < 16);
      if (shield >= 0) { this.shields.splice(shield, 1); return false; }
      if (!shot.enemy) {
        const hit = this.aliens.findIndex(alien => Math.abs(alien.x - shot.x) < 26 && Math.abs(alien.y - shot.y) < 22);
        if (hit >= 0) {
          const [alien] = this.aliens.splice(hit, 1);
          this.score += (3 - alien.row) * 10;
          this.erasures.push({ x: alien.x, y: alien.y, remaining: .24 });
          return false;
        }
      } else if (Math.abs(shot.x - this.playerX) < 25 && Math.abs(shot.y - invadersSize.playerY) < 23) {
        if (this.recovery <= 0) {
          this.lives--; this.recovery = 1.2;
          if (!this.lives) this.status = 'over';
        }
        return false;
      }
      return shot.y > 220 && shot.y < 995;
    });
  }
}
