// Furniture is estimated from the 16 October walkthrough, not the proposed desks on the PDF.
// Each black desk is 160 × 80 cm. The long aisle lies between the two banks.
export const deskIslands = [
  { x: 1.8, z: 22.25, rows: 2 }, { x: 5.8, z: 22.25, rows: 2 },
  { x: 9.8, z: 22.25, rows: 2 }, { x: 13.6, z: 22.25, rows: 1 },
  { x: 5.8, z: 18.6, rows: 1 }, { x: 9.8, z: 18.6, rows: 1 }, { x: 13.6, z: 18.6, rows: 1 },
];
export const desks = deskIslands.flatMap((island, islandIndex) =>
  Array.from({ length: island.rows }, (_, row) => [-1, 1].map(side => ({
    x: island.x + side * .405, z: island.z + (row - (island.rows - 1) / 2) * 1.62,
    rotation: side * Math.PI / 2, side, islandIndex,
  }))).flat());
export const trussPositions = [3.8, 7.8, 11.8];
export const workspacePlants = [
  { x: 3.95, z: 19.5, size: 1.05 }, { x: 7.9, z: 19.45, size: .75 },
  { x: 11.9, z: 19.45, size: .8 }, { x: .1, z: 23.5, size: .8 },
  { x: 16.7, z: 23.25, size: .65 },
];
export const workspaceSofas = [
  { x: 15.95, z: 23.88, rotation: Math.PI, width: 2.05 },
  { x: 16.78, z: 22.03, rotation: -Math.PI / 2, width: 2.3 },
];
export const workspaceObstacles = [
  ...desks.flatMap(d => [
    [d.x - .4, d.x + .4, d.z - .8, d.z + .8],
    [d.x + d.side * .85 - .28, d.x + d.side * .85 + .28, d.z - .3, d.z + .3],
  ]),
  // The sloping south braces occupy the walking envelope before their feet touch the floor.
  ...trussPositions.flatMap(x => [[x - .16, x + .16, 17.5, 19.8], [x - .16, x + .16, 22.95, 24.3]]),
  ...[-.38, 17.138].flatMap(x => [17.65, 21.35, 23.7].map(z => [x - .1, x + .1, z - .1, z + .1])),
  ...workspacePlants.map(p => [p.x - .28 * p.size, p.x + .28 * p.size, p.z - .28 * p.size, p.z + .28 * p.size]),
  [14.925, 16.975, 23.43, 24.33], [16.33, 17.23, 20.88, 23.18],
  [15.0, 15.6, 21.65, 23.45], // long coffee table between the sofas
  [14.55, 15.6, 20.95, 21.75], // light grey pouf
  [16.87, 17.258, 18.0, 20.1], // white media cabinet
  [-.5, -.08, 22.0, 23.25], // white cabinet at the moss-wall end
  [2.52, 2.58, 17.405, 18.25], // door folded inside the room
];
export const workspacePreset = { x: 2, z: 20.4, yaw: Math.PI / 2, pitch: -.035 };
