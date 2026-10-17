import { canStand } from './movement.mjs';
import { coffeeDropoff } from './coffee-layout.mjs';

export const visitorRadius = .3;
// Metres in the shared floor plan. Corners keep his shoulders clear of furniture.
const outward = [
  [4.1, 3.5, 2], [4.1, 4.4], [5.585, 4.4], [5.585, 14.35],
  [6.35, 14.35], [6.35, 15.85], [4.3, 15.85], [4.3, 15.96],
  [2, 15.96], [2, 20.4], [coffeeDropoff.x, 20.4], [15.4, 20.4, 3], [2, 20.4],
  [.3, 20.4], [.3, 18.8], [-25.3, 18.8, 3],
].map(([x, z, pause = 0]) => ({ x, z, pause }));
export const visitorRoute = [...outward, ...outward.slice(1, -1).reverse()];
export const coffeePickup = { x: 7.48, z: 14.65 };
const coffeeJunction = outward[4], deskJunction = outward[10];
const placingDuration = 1.2;
const lapDistance = visitorRoute.reduce((sum, point, i) => {
  const next = visitorRoute[(i + 1) % visitorRoute.length];
  return sum + Math.hypot(point.x - next.x, point.z - next.z);
}, 0);

export class VisitorWalk {
  x = visitorRoute[0].x;
  z = visitorRoute[0].z;
  heading = 0; // The model faces +Z.
  distance = 0;
  moving = false;
  paused = false;
  target = 1;
  waiting = 0;
  coffeePresses = 0;
  coffeeState = 'idle';
  coffeeTrip = [];
  coffeeResume = 0;
  boostRemaining = 0;
  cupsDelivered = 0;
  placingProgress = 0;

  routeTo(junction) {
    // Preserve the short walk back from Thrane if a new coffee is ordered
    // immediately after putting down the previous cup.
    const departure = this.coffeeTrip.map(point => ({ x: point.x, z: point.z, drink: false, place: false }));
    const target = departure.length ? this.coffeeResume : this.target;
    const paths = [1, -1].map(direction => {
      let index = direction === 1 ? target : (target - 1 + visitorRoute.length) % visitorRoute.length;
      let previous = departure.at(-1) ?? this, distance = 0;
      const points = [...departure];
      for (let i = 0; i < visitorRoute.length; i++) {
        const point = visitorRoute[index];
        distance += Math.hypot(point.x - previous.x, point.z - previous.z);
        points.push({ x: point.x, z: point.z, drink: false, place: false }); previous = point;
        if (point.x === junction.x && point.z === junction.z) break;
        index = (index + direction + visitorRoute.length) % visitorRoute.length;
      }
      return { points, distance, resume: (index + 1) % visitorRoute.length };
    });
    return paths[0].distance <= paths[1].distance ? paths[0] : paths[1];
  }

  orderCoffee() {
    if (this.coffeeState !== 'idle') return this.coffeePresses;
    if (++this.coffeePresses < 3) return this.coffeePresses;
    const path = this.routeTo(coffeeJunction);
    this.coffeeTrip = [...path.points,
      { x: coffeeJunction.x, z: coffeePickup.z, drink: false },
      { ...coffeePickup, drink: true },
      { x: coffeeJunction.x, z: coffeePickup.z, drink: false },
      { x: coffeeJunction.x, z: coffeeJunction.z, drink: false },
    ];
    this.coffeeResume = path.resume;
    this.coffeeState = 'fetching'; this.waiting = 0;
    return this.coffeePresses;
  }

  deliverCoffee() {
    const path = this.routeTo(deskJunction);
    this.coffeeTrip = [...path.points, { ...coffeeDropoff, place: true }, { x: deskJunction.x, z: deskJunction.z }];
    this.coffeeResume = path.resume;
    this.coffeeState = 'returning'; this.boostRemaining = 0; this.waiting = 0;
  }

  update(dt, reducedMotion = false) {
    this.moving = false;
    if (this.paused || !Number.isFinite(dt) || dt <= 0) return;
    // Clamp time after backgrounding; short steps also protect thin obstacles.
    let remaining = Math.min(dt, .1);
    while (remaining > 1e-8) {
      const step = Math.min(remaining, 1 / 120);
      remaining -= step;
      if (this.waiting > 0) {
        if (this.coffeeState === 'drinking' || this.coffeeState === 'placing') {
          const turn = Math.atan2(Math.sin(Math.PI - this.heading), Math.cos(Math.PI - this.heading));
          this.heading += Math.max(-step * 2.8, Math.min(step * 2.8, turn));
        }
        this.waiting = Math.max(0, this.waiting - step);
        if (this.coffeeState === 'placing') {
          this.placingProgress = 1 - this.waiting / placingDuration;
          if (this.waiting === 0) {
            this.cupsDelivered++; this.coffeeState = 'idle'; this.coffeePresses = 0;
          }
        }
        if (this.waiting === 0 && this.coffeeState === 'drinking') {
          this.coffeeState = 'boosted'; this.boostRemaining = lapDistance;
        }
        continue;
      }
      const detour = this.coffeeTrip.length > 0;
      const target = detour ? this.coffeeTrip[0] : visitorRoute[this.target];
      const dx = target.x - this.x, dz = target.z - this.z, distance = Math.hypot(dx, dz);
      if (distance < 1e-7) {
        if (detour) {
          if (this.coffeeTrip[0].drink) { this.coffeeState = 'drinking'; this.waiting = 1.8; }
          if (this.coffeeTrip[0].place) { this.coffeeState = 'placing'; this.waiting = placingDuration; this.placingProgress = 0; }
          this.coffeeTrip.shift();
          if (!this.coffeeTrip.length) this.target = this.coffeeResume;
        } else {
          this.waiting = visitorRoute[this.target].pause;
          this.target = (this.target + 1) % visitorRoute.length;
        }
        continue;
      }
      const angle = Math.atan2(dx, dz);
      const turn = Math.atan2(Math.sin(angle - this.heading), Math.cos(angle - this.heading));
      const boosted = this.coffeeState === 'boosted' && !reducedMotion;
      const turnSpeed = boosted ? 7 : 2.8;
      this.heading += Math.max(-step * turnSpeed, Math.min(step * turnSpeed, turn));
      // Turn in place before taking the next straight, collision-checked segment.
      if (Math.abs(turn) > .04) continue;
      const travel = Math.min(distance, step * (boosted ? 3.2 : .82));
      const x = this.x + dx / distance * travel, z = this.z + dz / distance * travel;
      if (!canStand(x, z, visitorRadius)) return;
      this.x = x; this.z = z; this.distance += travel; this.moving = true;
      if (this.coffeeState === 'boosted') {
        this.boostRemaining -= travel;
        if (this.boostRemaining <= 0) this.deliverCoffee();
      }
    }
  }
}
