export const runnerSize = { width: 960, height: 516, ground: 400, playerX: 130 };
const step = 1 / 120;

export class Runner {
  /** @type {'ready' | 'running' | 'paused' | 'over'} */
  status = 'ready';
  height = 0;
  velocity = 0;
  distance = 0;
  elapsed = 0;
  /** @type {{ x: number, width: number, height: number }[]} */
  obstacles = [];
  spawnIn = .8;
  accumulator = 0;

  constructor(random = Math.random) { this.random = random; }
  get score() { return Math.floor(this.distance / 35); }
  get speed() { return Math.min(620, 330 + this.elapsed * 5); }

  action() {
    if (this.status === 'paused') { this.status = 'running'; return; }
    if (this.status === 'ready' || this.status === 'over') {
      this.height = this.velocity = this.distance = this.elapsed = this.accumulator = 0;
      this.obstacles = []; this.spawnIn = .8; this.status = 'running';
    }
    if (this.height === 0) this.velocity = 700;
  }

  pause() { if (this.status === 'running') this.status = 'paused'; }

  update(dt) {
    if (this.status !== 'running' || !Number.isFinite(dt) || dt <= 0) return;
    // Fixed steps keep jumps and collision detection stable across refresh rates.
    this.accumulator += Math.min(dt, .1);
    while (this.accumulator + 1e-9 >= step && this.status === 'running') {
      this.accumulator -= step;
      this.elapsed += step;
      const travel = this.speed * step;
      this.distance += travel;
      this.height = Math.max(0, this.height + this.velocity * step - 1050 * step * step);
      this.velocity = this.height > 0 ? this.velocity - 2100 * step : 0;
      this.spawnIn -= step;
      if (this.spawnIn <= 0) {
        this.obstacles.push({ x: runnerSize.width, width: 28 + Math.floor(this.random() * 20), height: 48 + Math.floor(this.random() * 24) });
        // Enough time to land and jump again even at maximum speed.
        this.spawnIn = 1.15 + this.random() * .65;
      }
      for (const obstacle of this.obstacles) {
        obstacle.x -= travel;
        // A little forgiveness around the dinosaur's tail and the cactus tips.
        if (obstacle.x + obstacle.width - 5 > runnerSize.playerX + 9 &&
            obstacle.x + 5 < runnerSize.playerX + 43 && this.height + 7 < obstacle.height) {
          this.status = 'over';
        }
      }
      this.obstacles = this.obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);
    }
  }
}
