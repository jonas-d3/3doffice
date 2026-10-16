// Plan coordinates in metres: +X is right and +Z is down on grundplan.pdf.
// MØDE 4, MØDE 3 and the kitchen use printed dimensions. Other dimensions,
// partitions and door positions are traced estimates; heights remain photo estimates.
export const spaceInvaders = { minX: 0, maxX: 7.758, minZ: 0, maxZ: 6.205, height: 3.05 };
export const minecraft = { minX: 0, maxX: 4.835, minZ: 6.655, maxZ: 11.017, height: 2.9 };
export const meeting2 = { minX: 0, maxX: 4.835, minZ: 11.217, maxZ: 14.817, height: 2.9 };
export const hallway = { minX: 5.035, maxX: 6.135, minZ: 6.405, maxZ: 13.305, height: 2.55 };
export const doorway = { minX: 5.035, maxX: 6.135, minZ: 6.205, maxZ: 6.405 };
export const minecraftDoor = { minX: 4.835, maxX: 5.035, minZ: 7.405, maxZ: 8.305 };
export const restrooms = {
  height: 2.55,
  left: { minX: 6.335, maxX: 7.758, minZ: 6.655, maxZ: 8.455 },
  foyer: { minX: 6.335, maxX: 7.958, minZ: 8.655, maxZ: 10.155 },
  right: { minX: 6.335, maxX: 7.758, minZ: 10.355, maxZ: 12.155 },
  entrance: { minX: 6.135, maxX: 6.335, minZ: 9.155, maxZ: 10.055 },
  leftDoor: { minX: 6.485, maxX: 7.235, minZ: 8.455, maxZ: 8.655 },
  rightDoor: { minX: 6.485, maxX: 7.235, minZ: 10.155, maxZ: 10.355 },
};
export const kitchen = { minX: 5.035, maxX: 11.602, minZ: 13.505, maxZ: 16.605, height: 2.85 };
export const kitchenDoor = { minX: 5.035, maxX: 6.135, minZ: 13.305, maxZ: 13.505 };
export const lobby = { minX: -.272, maxX: 4.835, minZ: 15.017, maxZ: 16.605, height: 2.5 };
export const kitchenNorthDoor = { minX: 4.835, maxX: 5.035, minZ: 15.217, maxZ: 16.405 };

export const contains = (bounds, x, z) => x >= bounds.minX && x <= bounds.maxX && z >= bounds.minZ && z <= bounds.maxZ;
/** @returns {string} */
export function walkingLocation(x, z) {
  const locations = [
    { bounds: spaceInvaders, name: 'Space Invaders · MØDE 4' },
    { bounds: minecraft, name: 'Minecraft · MØDE 3' },
    { bounds: kitchen, name: 'Køkken' }, { bounds: lobby, name: 'Lille gang ved køkkenet' },
    { bounds: restrooms.left, name: 'Venstre toilet' }, { bounds: restrooms.right, name: 'Højre toilet' },
    { bounds: restrooms.foyer, name: 'Toiletentré' },
  ];
  for (const { bounds, name } of locations) if (contains(bounds, x, z)) return name;
  return 'Toiletgangen';
}
export const mapPoint = (x, z) => ({ x: 14 + x * 14, y: 14 + z * 14 });
