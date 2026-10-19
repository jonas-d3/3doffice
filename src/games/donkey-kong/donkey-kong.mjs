export const BARREL_RADIUS = .045;
export const PLATFORM_HALF = .62;
export const LADDER_X = [.49, -.49];
export const platformY = (level, x) => .10 + level * .32 - (level % 2 ? -1 : 1) * x * .045;
const STEP = 1 / 120;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export class DonkeyKong {
  constructor(onEscape = (_barrel) => {}) {
    this.onEscape = onEscape;
    this.status = 'idle'; this.lives = 3; this.score = 0;
    this.barrels = []; this.nextId = 0; this.spawnIn = .7; this.accumulator = 0;
    this.player = this.newPlayer();
  }

  newPlayer() {
    return { x: -.49, y: platformY(0, -.49), level: 0, vy: 0, jumping: false,
      climbing: false, climbFrom: 0, climbTo: 0, invulnerable: 1.5, facing: 1 };
  }

  start() {
    if (this.status === 'running') return;
    if (this.status !== 'paused') {
      this.lives = 3; this.score = 0; this.player = this.newPlayer(); this.spawnIn = .7;
    }
    this.status = 'running'; this.accumulator = 0;
  }

  pause() { if (this.status === 'running') this.status = 'paused'; }
  stop() { this.status = 'idle'; this.accumulator = 0; }
  jump() {
    if (this.status !== 'running' || this.player.jumping || this.player.climbing) return;
    this.player.jumping = true; this.player.vy = 1.5;
  }

  update(dt, input = {}) {
    if (!Number.isFinite(dt) || dt <= 0 || this.status === 'paused') return false;
    if (this.status !== 'running' && !this.barrels.length) return false;
    this.accumulator += Math.min(dt, .25);
    let changed = false;
    while (this.accumulator + 1e-10 >= STEP) {
      this.accumulator -= STEP; this.step(STEP, input); changed = true;
    }
    return changed;
  }

  step(dt, input) {
    const p = this.player;
    if (this.status === 'running') {
      this.spawnIn -= dt;
      if (this.spawnIn <= 0) {
        this.barrels.push({ id: this.nextId++, x: -.5, y: platformY(2, -.5) + BARREL_RADIUS,
          level: 2, falling: false, vy: 0, angle: 0, scored: false });
        this.spawnIn += 3.1;
      }
      p.invulnerable = Math.max(0, p.invulnerable - dt);
      const horizontal = Number(!!input.right) - Number(!!input.left);
      const vertical = Number(!!input.up) - Number(!!input.down);
      if (!p.climbing && !p.jumping && vertical) {
        const lower = vertical > 0 ? p.level : p.level - 1;
        if (lower >= 0 && lower < 2 && Math.abs(p.x - LADDER_X[lower]) < .085) {
          p.x = LADDER_X[lower]; p.climbing = true; p.climbFrom = lower; p.climbTo = lower + 1;
        }
      }
      if (p.climbing) {
        p.y += vertical * .34 * dt;
        const bottom = platformY(p.climbFrom, p.x), top = platformY(p.climbTo, p.x);
        if (p.y >= top) { p.y = top; p.level = p.climbTo; p.climbing = false; }
        if (p.y <= bottom) { p.y = bottom; p.level = p.climbFrom; p.climbing = false; }
      } else {
        p.x = clamp(p.x + horizontal * .42 * dt, -.54, .54);
        if (horizontal) p.facing = horizontal;
        const floor = platformY(p.level, p.x);
        if (p.jumping) {
          p.vy -= 5.1 * dt; p.y += p.vy * dt;
          if (p.y <= floor) { p.y = floor; p.vy = 0; p.jumping = false; }
        } else p.y = floor;
      }
      if (p.level === 2 && p.x >= .48 && !p.climbing && !p.jumping) {
        this.status = 'won'; this.score += 1000;
      }
    }
    for (const b of this.barrels) {
      const direction = b.level % 2 ? -1 : 1;
      if (b.falling) {
        b.vy -= 4 * dt; b.y += b.vy * dt;
        const landing = platformY(b.level, b.x) + BARREL_RADIUS;
        if (b.y <= landing) { b.y = landing; b.falling = false; b.vy = 0; }
      } else {
        b.x += direction * .34 * dt; b.y = platformY(b.level, b.x) + BARREL_RADIUS;
        b.angle -= direction * .34 * dt / BARREL_RADIUS;
        if (Math.abs(b.x) > PLATFORM_HALF) {
          if (b.level > 0) { b.level--; b.falling = true; b.scored = false; }
          else { this.onEscape(b); b.level = -1; continue; }
        }
      }
      if (this.status !== 'running') continue;
      const dx = Math.abs(b.x - p.x), feet = p.y;
      if (!p.invulnerable && dx < .071 && b.y + BARREL_RADIUS > feet + .018 && b.y - BARREL_RADIUS < feet + .14) {
        this.lives--;
        if (!this.lives) this.status = 'over';
        else this.player = this.newPlayer();
        // Only one hit may count in a simulation step.
        p.invulnerable = 1.5;
      } else if (!b.scored && p.jumping && dx < .07 && feet > b.y + BARREL_RADIUS && p.level === b.level) {
        this.score += 100; b.scored = true;
      }
    }
    this.barrels = this.barrels.filter(b => b.level >= 0);
  }
}

// World-space props live outside the round: starting, losing or leaving never deletes them.
export class RoomBarrels {
  constructor({ table, room, obstacles = [] }) {
    this.table = table; this.room = room; this.obstacles = obstacles;
    this.barrels = []; this.accumulator = 0;
  }

  add(x, y, z) {
    const index = this.barrels.length;
    this.barrels.push({ x, y, z, vx: .34, vy: 0, vz: .18 + (index * .61803398875 % 1) * .4,
      angle: 0, heading: 0, sleeping: false, onTable: y >= this.table.height, revision: 0 });
  }

  nudge(x, z, dx, dz) {
    const speed = Math.hypot(dx, dz);
    if (speed < .001) return;
    for (const b of this.barrels) {
      if (b.y > .15 || Math.hypot(b.x - x, b.z - z) > .28) continue;
      b.vx = dx / speed * .8; b.vz = dz / speed * .8; b.sleeping = false;
    }
  }

  update(dt) {
    if (!Number.isFinite(dt) || dt <= 0 || this.barrels.every(b => b.sleeping)) return false;
    this.accumulator += Math.min(dt, .25);
    while (this.accumulator + 1e-10 >= STEP) {
      this.accumulator -= STEP;
      for (const b of this.barrels) if (!b.sleeping) this.step(b, STEP);
    }
    return true;
  }

  step(b, dt) {
    b.revision++;
    const r = BARREL_RADIUS, t = this.table, room = this.room;
    b.x += b.vx * dt; b.z += b.vz * dt;
    b.vy -= 5.5 * dt; b.y += b.vy * dt;
    if (b.x < t.minX || b.x > t.maxX || b.z < t.minZ || b.z > t.maxZ) b.onTable = false;
    const floor = (b.onTable ? t.height : .025) + r;
    if (b.y <= floor) {
      b.y = floor; b.vy = Math.abs(b.vy) > .25 ? -b.vy * .3 : 0;
      const friction = Math.exp(-(b.onTable ? .06 : 1.5) * dt);
      b.vx *= friction; b.vz *= friction;
    }
    if (b.x < room.minX + r || b.x > room.maxX - r) {
      b.x = clamp(b.x, room.minX + r, room.maxX - r); b.vx *= -.45;
    }
    if (b.z < room.minZ + r || b.z > room.maxZ - r) {
      b.z = clamp(b.z, room.minZ + r, room.maxZ - r); b.vz *= -.45;
    }
    if (!b.onTable && b.y < .2) {
      for (const [left, right, back, front] of this.obstacles) {
        if (b.x <= left - r || b.x >= right + r || b.z <= back - r || b.z >= front + r) continue;
        const distances = [b.x - left + r, right + r - b.x, b.z - back + r, front + r - b.z];
        const side = distances.indexOf(Math.min(...distances));
        if (side < 2) { b.x = side === 0 ? left - r : right + r; b.vx *= -.45; }
        else { b.z = side === 2 ? back - r : front + r; b.vz *= -.45; }
      }
      for (const other of this.barrels) {
        if (other === b || other.onTable || Math.abs(other.y - b.y) > r) continue;
        const dx = b.x - other.x, dz = b.z - other.z, distance = Math.hypot(dx, dz);
        if (distance >= r * 2) continue;
        const nx = distance > .00001 ? dx / distance : 1;
        const nz = distance > .00001 ? dz / distance : 0;
        const overlap = (r * 2 + .001 - distance) / 2;
        b.x += nx * overlap; b.z += nz * overlap;
        other.x -= nx * overlap; other.z -= nz * overlap; other.sleeping = false; other.revision++;
        for (const moved of [b, other]) {
          moved.x = clamp(moved.x, room.minX + r, room.maxX - r);
          moved.z = clamp(moved.z, room.minZ + r, room.maxZ - r);
        }
        const impact = (b.vx - other.vx) * nx + (b.vz - other.vz) * nz;
        if (impact < 0) {
          b.vx -= impact * .65 * nx; b.vz -= impact * .65 * nz;
          other.vx += impact * .65 * nx; other.vz += impact * .65 * nz;
        }
      }
    }
    const speed = Math.hypot(b.vx, b.vz);
    b.angle += speed * dt / r; b.heading = Math.atan2(b.vx, b.vz);
    if (!b.onTable && b.y === floor && b.vy === 0 && speed < .025) {
      b.vx = b.vz = 0; b.sleeping = true;
    }
  }
}
