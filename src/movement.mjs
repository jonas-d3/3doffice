import { hallway, doorway, restrooms, minecraft, minecraftDoor } from './layout.mjs';

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
  [1.60, 1.69, 2.34, 3.5], // office door, standing open into the office
  [.25, .49, 8.4, 9], // corridor radiator
  [.27, .83, 10.27, 10.83], // corridor standing table
  [1.76, 1.85, 6, 7], // foyer door folded back beside the entrance
  [3.52, 4.2, 6.7, 7.23], // foyer basin
  [4.01, 4.25, 7.08, 7.92], // foyer radiator
  [3.32, 3.98, 4.53, 5.5], // left toilet
  [2.72, 3.38, 9.53, 10.47], // right toilet
  [4.42, 5.05, 5.45, 6.15], // left toilet basin
  [4.42, 5.05, 8.85, 9.55], // right toilet basin
  [4.87, 5.05, 4.65, 5.35], // left toilet radiator
  [2.05, 2.23, 9.5, 10.25], // right toilet radiator
  [2.62, 2.68, 5.6, 6.6], // left door standing open
  [2.62, 2.68, 8.4, 9.4], // right door standing open
  [-4.9, -.82, 7.81, 10.09], // Minecraft meeting table and eight chairs
  [-4.3, -2.7, 6.7, 7.23], // Minecraft cabinet
  [-5.65, -4.53, 6.75, 8.15], // Minecraft plants
  [-.24, .04, 10.5, 10.85], // pedestal beside the screen
  [-5.75, -5.58, 8.5, 9.7], // Minecraft radiator
  [-.85, .15, 6.97, 7.03], // Minecraft entrance door, standing open
];

const inside = (room, x, z, insetX, insetZ) => x >= room.minX + insetX && x <= room.maxX - insetX
  && z >= room.minZ + insetZ && z <= room.maxZ - insetZ;

export function canStand(x, z, radius = .17) {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return false;
  const inOffice = Math.abs(x) <= 3.7 - radius && Math.abs(z) <= 3.4 - radius;
  const inHallway = x >= hallway.minX + radius && x <= hallway.maxX - radius
    && z >= hallway.minZ + radius && z <= hallway.maxZ - radius;
  // Overlap the entrance with both inset rooms to avoid an invisible collision
  // seam. Its horizontal inset still keeps the camera clear of both jambs.
  const inDoorway = x >= doorway.minX + radius && x <= doorway.maxX - radius
    && z >= doorway.minZ - radius && z <= doorway.maxZ + radius;
  const inRestroom = [restrooms.foyer, restrooms.left, restrooms.right].some(room => inside(room, x, z, radius, radius));
  const inEntrance = inside(restrooms.entrance, x, z, -radius, radius);
  const inToiletDoor = [restrooms.leftDoor, restrooms.rightDoor].some(door => inside(door, x, z, radius, -radius));
  const inMinecraft = inside(minecraft, x, z, radius, radius);
  const inMinecraftDoor = inside(minecraftDoor, x, z, -radius, radius);
  if (!inOffice && !inHallway && !inDoorway && !inRestroom && !inEntrance && !inToiletDoor && !inMinecraft && !inMinecraftDoor) return false;
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
