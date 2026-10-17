import { canStand, canWalkBetween } from './movement.mjs';
import { day21, workspace } from './layout.mjs';

export const creeperStart = { x: 3.9, z: 10.65 };
export const creeperRadius = .18;
const followSpeed = .8, catchUpSpeed = 1.6, followDistance = 1.4, stopDelay = .25;

// A small floor grid shares the player's collision map. Cache its static edges
// lazily, then smooth each route into straight walks through rooms and doors.
const cell = .1, minColumn = Math.floor(day21.minX / cell);
const columns = Math.ceil(workspace.maxX / cell) - minColumn + 1;
const rows = Math.ceil(workspace.maxZ / cell) + 1;
const edges = new Map();
const gridPoint = id => ({ x: (id % columns + minColumn) * cell, z: Math.floor(id / columns) * cell });

const clearWalk = (a, b, radius = creeperRadius) => canWalkBetween(a, b, radius);

function nearestCell(point, radius = creeperRadius) {
  const column = Math.round(point.x / cell) - minColumn, row = Math.round(point.z / cell);
  let closest = -1, distance = Infinity;
  for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
    const x = column + dx, z = row + dz;
    if (x < 0 || x >= columns || z < 0 || z >= rows) continue;
    const id = z * columns + x, candidate = gridPoint(id);
    const d = Math.hypot(candidate.x - point.x, candidate.z - point.z);
    if (d < distance && canStand(candidate.x, candidate.z, creeperRadius) && clearWalk(point, candidate, radius)) {
      closest = id; distance = d;
    }
  }
  return closest;
}

function routeTo(start, target) {
  if (clearWalk(start, target)) return [{ ...target }];
  const first = nearestCell(start), last = nearestCell(target, .17);
  if (first < 0 || last < 0) return [];
  const previous = new Int32Array(columns * rows).fill(-1), queue = new Int32Array(columns * rows);
  previous[first] = first; queue[0] = first;
  let count = 1;
  for (let head = 0; head < count && previous[last] < 0; head++) {
    const id = queue[head], point = gridPoint(id);
    if (!edges.has(id)) {
      edges.set(id, [id - 1, id + 1, id - columns, id + columns].filter(next => {
        if (next < 0 || next >= columns * rows) return false;
        const candidate = gridPoint(next);
        return Math.hypot(candidate.x - point.x, candidate.z - point.z) < cell * 1.01 && clearWalk(point, candidate);
      }));
    }
    for (const next of edges.get(id)) {
      if (previous[next] >= 0) continue;
      previous[next] = id; queue[count++] = next;
    }
  }
  if (previous[last] < 0) return [];
  const path = [];
  for (let id = last; ; id = previous[id]) {
    path.push(gridPoint(id));
    if (id === first) break;
  }
  path.reverse();
  const smooth = [];
  let origin = start;
  for (let i = 0; i < path.length; i++) {
    while (i + 1 < path.length && clearWalk(origin, path[i + 1])) i++;
    smooth.push(path[i]); origin = path[i];
  }
  return smooth;
}

export class CreeperFollow {
  x = creeperStart.x;
  z = creeperStart.z;
  heading = -Math.PI / 2;
  distance = 0;
  discovered = false;
  watchedFor = stopDelay;
  path = [];
  destination = { x: Infinity, z: Infinity };
  replanIn = 0;

  update(dt, watched, player, enabled) {
    if (!enabled || !Number.isFinite(dt) || dt <= 0 || !Number.isFinite(player.x) || !Number.isFinite(player.z)) return false;
    if (!this.discovered) {
      if (watched) this.discovered = true;
      return false;
    }
    let time = Math.min(dt, .1);
    if (watched) {
      time = Math.min(time, Math.max(0, stopDelay - this.watchedFor));
      this.watchedFor = Math.min(stopDelay, this.watchedFor + Math.min(dt, .1));
    } else this.watchedFor = 0;
    if (time <= 1e-8) return false;
    this.replanIn -= time;
    if (this.replanIn <= 0 && (Math.hypot(player.x - this.destination.x, player.z - this.destination.z) > .3 || !this.path.length)) {
      this.path = routeTo(this, player); this.destination = { x: player.x, z: player.z }; this.replanIn = .5;
    }
    // Gain ground when far away, then return to a slow stalk within two metres.
    const gap = Math.hypot(player.x - this.x, player.z - this.z);
    const urgency = Math.max(0, Math.min(1, (gap - 2) / 3));
    const frameStart = { x: this.x, z: this.z };
    let remaining = (followSpeed + (catchUpSpeed - followSpeed) * urgency) * time, moved = false;
    while (remaining > 1e-8 && this.path.length) {
      const target = this.path[0], dx = target.x - this.x, dz = target.z - this.z;
      const distance = Math.hypot(dx, dz);
      if (distance < 1e-8) { this.path.shift(); continue; }
      const toPlayer = Math.hypot(player.x - this.x, player.z - this.z);
      const clearance = toPlayer < followDistance + remaining && clearWalk(this, player, .17)
        ? Math.max(0, toPlayer - followDistance) : Infinity;
      const travel = Math.min(remaining, distance, clearance);
      if (travel <= 1e-8) break;
      const next = { x: this.x + dx / distance * travel, z: this.z + dz / distance * travel };
      if (!clearWalk(this, next)) { this.path = []; break; }
      // A fast frame can span a corner; leave that turn for the next frame if
      // the straight line between rendered positions would clip an obstacle.
      if (moved && !clearWalk(frameStart, next)) break;
      this.x = next.x; this.z = next.z; this.heading = Math.atan2(dx, dz);
      this.distance += travel; remaining -= travel; moved = true;
    }
    return moved;
  }
}

export class SalmonCatch {
  phase = 'idle';
  elapsed = 0;

  start(reducedMotion) {
    if (this.phase !== 'idle') return false;
    this.phase = reducedMotion ? 'landed' : 'leaping';
    this.elapsed = reducedMotion ? 1.8 : 0;
    return true;
  }

  update(dt, animate) {
    if (!animate || this.phase !== 'leaping' || !Number.isFinite(dt) || dt <= 0) return false;
    this.elapsed = Math.min(1.8, this.elapsed + Math.min(dt, .1));
    if (this.elapsed >= 1.8) this.phase = 'landed';
    return true;
  }
}
