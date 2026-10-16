import { spaceInvaders, minecraft, kitchen, minecraftDoor, kitchenDoor, kitchenNorthDoor } from './layout.mjs';

// Keep the detailed photo reconstructions in their authored coordinate systems.
// Apply the same X/Z fit to meshes, furniture collisions and camera presets.
export const authored = {
  office: { minX: -3.8, maxX: 3.8, minZ: -3.5, maxZ: 3.5, height: 3.05 },
  minecraft: { minX: -5.75, maxX: .05, minZ: 6.7, maxZ: 10.9, height: 2.9 },
  kitchen: { minX: .25, maxX: 6.05, minZ: 12.7, maxZ: 16.3, height: 2.85 },
};
const fit = (from, to) => {
  const sx = (to.maxX - to.minX) / (from.maxX - from.minX);
  const sz = (to.maxZ - to.minZ) / (from.maxZ - from.minZ);
  return { sx, sz, x: to.minX - from.minX * sx, z: to.minZ - from.minZ * sz };
};
export const placements = {
  office: fit(authored.office, spaceInvaders),
  minecraft: fit(authored.minecraft, minecraft),
  kitchen: fit(authored.kitchen, kitchen),
};
export function planPoint(name, x, z) {
  const p = placements[name];
  return { x: x * p.sx + p.x, z: z * p.sz + p.z };
}
export function authoredPoint(name, x, z) {
  const p = placements[name];
  return { x: (x - p.x) / p.sx, z: (z - p.z) / p.sz };
}
export function planFootprint(name, bounds) {
  const a = planPoint(name, bounds[0], bounds[2]), b = planPoint(name, bounds[1], bounds[3]);
  return [a.x, b.x, a.z, b.z];
}
const localBounds = (name, door) => {
  const a = authoredPoint(name, door.minX, door.minZ), b = authoredPoint(name, door.maxX, door.maxZ);
  return { minX: a.x, maxX: b.x, minZ: a.z, maxZ: b.z };
};
export const authoredDoors = {
  minecraft: localBounds('minecraft', minecraftDoor),
  kitchen: localBounds('kitchen', kitchenDoor), kitchenNorth: localBounds('kitchen', kitchenNorthDoor),
};
