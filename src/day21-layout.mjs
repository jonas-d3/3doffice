import { day21 } from './layout.mjs';
import { deskSize, chairOffset } from './workspace-layout.mjs';

// Furniture positions are estimates from the October 16 video, not the PDF proposal.
export const day21Trusses = [-3.1, -6.9, -10.7, -14.5, -18.3, -22.1, -25.9];
export const day21NorthPostZ = x => x > -17.35 && x < -4.3 ? 14.95 : 17.82;
export const day21Desks = [-9, -12.8, -16.6].flatMap((x, islandIndex) => [-1, 1].map(side => ({
  x: x + side * (deskSize.depth + .01) / 2, z: 22.15,
  rotation: side * Math.PI / 2, side, islandIndex,
})));
export const day21GlassRoom = { minX: -6.5, maxX: day21.maxX, minZ: 20.563, maxZ: day21.maxZ };
export const day21GlassDoor = { minX: -4.9, maxX: -3.8 };
export const day21Stairs = { minX: -16.3, maxX: -13.3, minZ: 19.25, maxZ: 20.5 };
export const day21Plants = [
  { x: -6.3, z: 20.0, size: .75 }, { x: -12.8, z: 20.0, size: .6 },
  { x: -23.8, z: 20.1, size: .7 }, { x: -26.9, z: 18.7, size: .65 },
  { x: -12.0, z: 15.6, size: .65 }, { x: -8.0, z: 15.3, size: .65 },
  { x: -2.0, z: 23.5, size: .6 },
];
export const day21Tables = [
  { x: -3.5, z: 22.35, width: 2.4, depth: .95, rotation: 0, chairs: 3, white: true },
  { x: -26.0, z: 22.25, width: 2.1, depth: .85, rotation: Math.PI / 2, chairs: 3, white: true },
  { x: -15.0, z: 16.1, width: 1.8, depth: .8, rotation: 0, chairs: 2, white: false },
];
export const day21Obstacles = [
  ...day21Desks.flatMap(d => [
    [d.x - deskSize.depth / 2, d.x + deskSize.depth / 2, d.z - deskSize.width / 2, d.z + deskSize.width / 2],
    [d.x + d.side * chairOffset - .34, d.x + d.side * chairOffset + .34, d.z - .34, d.z + .34],
  ]),
  // Glass and its open doorway remain independent from the desk footprints.
  [-6.54, -6.46, 20.563, 24.375],
  [-6.5, day21GlassDoor.minX, 20.52, 20.60], [day21GlassDoor.maxX, -.95, 20.52, 20.60],
  [day21GlassDoor.minX - .03, day21GlassDoor.minX + .03, 19.60, 20.563], // folded glass leaf
  [-1.03, -.97, 19.15, 20.25], // folded connecting door
  [-6.4, -5.9, 21.83, 22.67], // monitor stand
  [-17.85, -16.75, 17.92, 18.2], // coat rack
  ...day21Trusses.flatMap(x => [
    [x - .15, x + .15, 20.4, 21.65], [x - .15, x + .15, 22.85, 24.3],
    [x - 1.1, x + .15, day21NorthPostZ(x) - .13, day21NorthPostZ(x) + .22],
  ]),
  [day21Stairs.minX, day21Stairs.maxX, day21Stairs.minZ, day21Stairs.maxZ],
  ...day21Plants.map(p => [p.x - .28 * p.size, p.x + .28 * p.size, p.z - .28 * p.size, p.z + .28 * p.size]),
  ...day21Tables.map(t => {
    const width = t.rotation ? t.depth + 1.1 : t.width;
    const depth = t.rotation ? t.width : t.depth + 1.1;
    return [t.x - width / 2, t.x + width / 2, t.z - depth / 2, t.z + depth / 2];
  }),
  [-21.9, -21.0, 21.3, 23.4], // mustard sofa
  [-23.35, -22.55, 21.8, 22.8], // coffee table
  [-28.038, -27.38, 17.9, 20.2], // coffee counter
  [-25.6, -22.6, 17.69, 18.15], // white sideboard
  [-11.9, -9.8, 15.15, 16.05], // nook sofa
  [-11.3, -10.3, 16.65, 17.4], // nook ottoman
  [-9.5, -8.6, 14.817, 16.1], // brick chimney
  [-3.0, -2.4, 17.8, 18.4], // small white table by entry
];
export const day21Preset = { x: -1.85, z: 18.8, yaw: -Math.PI / 2, pitch: -.055 };
