import { spaceInvaders, hallway, doorway, restrooms, minecraft, minecraftDoor, kitchen, kitchenDoor, kitchenNorthDoor, lobby, workspace, workspaceDoor, day21, day21Door, day21Meeting, day21MeetingDoor, day21Nook, day21NookOpening } from './layout.mjs';
import { planFootprint } from './placement.mjs';
import { lobbyFurniture } from './lobby-layout.mjs';
import { workspaceObstacles } from './workspace-layout.mjs';
import { day21Obstacles } from './day21-layout.mjs';

// Photo furniture is fitted with the same transforms as the rendered rooms.
export const obstacles = [
  ...workspaceObstacles,
  ...day21Obstacles,
  ...Object.values(lobbyFurniture).map(b => [b.minX, b.maxX, b.minZ, b.maxZ]),
  ...[
  [-3.02, -.57, -3.02, 3.05], // conference table and chairs
  [2.55, 3.75, -2.27, 1.99], // sofa
  [1.58, 2.65, -2.29, -1.22], // sofa return
  [1.17, 2.43, -.64, .54], // coffee table
  [.5, 1.18, -3.18, -2.46], // tall plant
  [-.81, .18, 2.54, 3.18], // whiteboard
  [.13, .63, 2.68, 3.18], // stump
  [2.34, 3.74, 2.12, 3.16], // side table and cabinet
  ].map(bounds => planFootprint('office', bounds)),
  ...[
  [-4.9, -.82, 7.81, 10.09], // Minecraft meeting table and eight chairs
  [-4.3, -2.7, 6.7, 7.23], // Minecraft cabinet
  [-5.65, -4.53, 6.75, 8.15], // Minecraft plants
  [-.24, .04, 10.5, 10.85], // pedestal beside the screen
  [-5.75, -5.58, 8.5, 9.7], // Minecraft radiator
  ].map(bounds => planFootprint('minecraft', bounds)),
  [4.1, 4.84, minecraftDoor.minZ - .025, minecraftDoor.minZ + .025],
  ...[
  [1.7, 5.88, 12.7, 13.4], // kitchen cabinets, sink and posts along the corridor-facing wall
  [.75, 1.55, 16.17, 16.8], // drinks fridge recessed into the chair wall near North
  [1.85, 2.95, 15.07, 16.12], // first lounge chair against the opposite wall
  [3.92, 5.02, 15.07, 16.12], // second lounge chair
  [3.02, 3.84, 15.13, 15.95], // round coffee table
  [.32, 1.04, 14.09, 14.81], // standing table between the two North doors
  [.3, .65, 15.9, 16.25], // plant pedestal beside the fridge niche
  [5.52, 6.02, 15.35, 16.18], // waste bins
  [5.9, 6.05, 14.95, 15.75], // kitchen radiator
  ].map(bounds => planFootprint('kitchen', bounds)),
  [6.09, 6.14, 5.205, 6.305], // Space Invaders door standing open
  [5.035, 5.18, 10.36, 10.94], // corridor radiator
  [6.075, 6.125, 8.255, 9.155], // foyer door folded along the corridor
  [7.22, 7.88, 8.67, 9.16], // foyer basin
  [7.8, 7.96, 9.12, 9.78], // foyer radiator
  [6.55, 7.13, 6.66, 7.57], // upper WC
  [6.65, 7.23, 11.24, 12.15], // lower WC
  [7.26, 7.76, 7.52, 8.18], // upper basin
  [7.26, 7.76, 10.72, 11.38], // lower basin
  [6.46, 6.51, 7.805, 8.555], // open upper toilet door
  [6.46, 6.51, 10.255, 11.005], // open lower toilet door
  [7.61, 7.76, 6.765, 7.215], // upper radiator
  [6.335, 6.49, 11.525, 11.975], // lower radiator
];

const inside = (room, x, z, insetX, insetZ) => x >= room.minX + insetX && x <= room.maxX - insetX
  && z >= room.minZ + insetZ && z <= room.maxZ - insetZ;

export function canStand(x, z, radius = .17) {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return false;
  const inRoom = [spaceInvaders, hallway, minecraft, kitchen, lobby, workspace, day21, day21Meeting, day21Nook, restrooms.foyer, restrooms.left, restrooms.right]
    .some(room => inside(room, x, z, radius, radius));
  // Overlap each threshold with the inset room on both sides, while keeping
  // the camera clear of door jambs. MØDE 2 deliberately has no walkable interior.
  const inZDoor = [doorway, kitchenDoor, workspaceDoor, day21MeetingDoor, day21NookOpening, restrooms.leftDoor, restrooms.rightDoor]
    .some(door => inside(door, x, z, radius, -radius));
  const inXDoor = [minecraftDoor, restrooms.entrance, kitchenNorthDoor, day21Door]
    .some(door => inside(door, x, z, -radius, radius));
  if (!inRoom && !inZDoor && !inXDoor) return false;
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
