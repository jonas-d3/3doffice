// Estimated furniture footprints in metres, matching model.ts. Camera radius
// keeps a person away from the furniture while allowing sliding along edges.
export const obstacles = [
  [-3.02, -.57, -3.02, 3.05], // conference table and chairs
  [2.55, 3.75, -2.27, 1.99], // sofa
  [1.58, 2.65, -2.29, -1.22], // sofa return
  [1.17, 2.43, -.64, .54], // coffee table
  [.5, 1.18, -3.18, -2.46], // tall plant
  [-.81, .18, 2.54, 3.18], // whiteboard
  [.13, .63, 2.68, 3.18], // stump
  [2.34, 3.74, 2.12, 3.16], // side table and cabinet
];

export function canStand(x, z, radius = .17) {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return false;
  if (Math.abs(x) > 3.7 - radius || Math.abs(z) > 3.4 - radius) return false;
  return !obstacles.some(([left, right, back, front]) =>
    x > left - radius && x < right + radius && z > back - radius && z < front + radius);
}

export function moveWithCollisions(x, z, dx, dz) {
  // Substeps prevent crossing a thin object on slow frames or large inputs.
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / .08));
  for (let i = 0; i < steps; i++) {
    if (canStand(x + dx / steps, z)) x += dx / steps;
    if (canStand(x, z + dz / steps)) z += dz / steps;
  }
  return { x, z };
}
