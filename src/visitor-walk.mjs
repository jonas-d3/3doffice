import { canStand } from './movement.mjs';

export const visitorRadius = .3;
// Metres in the shared floor plan. Corners keep his shoulders clear of furniture.
const outward = [
  [4.1, 3.5, 2], [4.1, 4.4], [5.585, 4.4], [5.585, 14.35],
  [6.35, 14.35], [6.35, 15.85], [4.3, 15.85], [4.3, 15.96],
  [2, 15.96], [2, 20.4], [15.4, 20.4, 3], [2, 20.4],
  [.3, 20.4], [.3, 18.8], [-25.3, 18.8, 3],
].map(([x, z, pause = 0]) => ({ x, z, pause }));
export const visitorRoute = [...outward, ...outward.slice(1, -1).reverse()];

export class VisitorWalk {
  x = visitorRoute[0].x;
  z = visitorRoute[0].z;
  heading = 0; // The model faces +Z.
  distance = 0;
  moving = false;
  paused = false;
  target = 1;
  waiting = 0;

  update(dt) {
    this.moving = false;
    if (this.paused || !Number.isFinite(dt) || dt <= 0) return;
    // Clamp time after backgrounding; short steps also protect thin obstacles.
    let remaining = Math.min(dt, .1);
    while (remaining > 1e-8) {
      const step = Math.min(remaining, 1 / 120);
      remaining -= step;
      if (this.waiting > 0) { this.waiting = Math.max(0, this.waiting - step); continue; }
      const target = visitorRoute[this.target];
      const dx = target.x - this.x, dz = target.z - this.z, distance = Math.hypot(dx, dz);
      if (distance < 1e-7) {
        this.waiting = target.pause;
        this.target = (this.target + 1) % visitorRoute.length;
        continue;
      }
      const angle = Math.atan2(dx, dz);
      const turn = Math.atan2(Math.sin(angle - this.heading), Math.cos(angle - this.heading));
      this.heading += Math.max(-step * 2.8, Math.min(step * 2.8, turn));
      // Turn in place before taking the next straight, collision-checked segment.
      if (Math.abs(turn) > .04) continue;
      const travel = Math.min(distance, step * .82);
      const x = this.x + dx / distance * travel, z = this.z + dz / distance * travel;
      if (!canStand(x, z, visitorRadius)) return;
      this.x = x; this.z = z; this.distance += travel; this.moving = true;
    }
  }
}
