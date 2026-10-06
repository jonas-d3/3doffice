// Estimated interior dimensions from the reference photos, in metres.
// The corridor continues straight through the office doorway along +Z.
export const hallway = { minX: .25, maxX: 1.85, minZ: 3.6, maxZ: 11.4, height: 2.55 };
export const doorway = { minX: .475, maxX: 1.625, minZ: 3.4, maxZ: 3.6 };

// The foyer branches left when leaving the office, as in floorplan.excalidraw.
export const restrooms = {
  height: 2.55,
  foyer: { minX: 2.05, maxX: 4.25, minZ: 6.7, maxZ: 8.3 },
  left: { minX: 2.05, maxX: 5.05, minZ: 4.5, maxZ: 6.5 },
  right: { minX: 2.05, maxX: 5.05, minZ: 8.5, maxZ: 10.5 },
  entrance: { minX: 1.85, maxX: 2.05, minZ: 7, maxZ: 8 },
  leftDoor: { minX: 2.65, maxX: 3.65, minZ: 6.5, maxZ: 6.7 },
  rightDoor: { minX: 2.65, maxX: 3.65, minZ: 8.3, maxZ: 8.5 },
};

export function walkingLocation(x, z) {
  if (z <= 3.5) return 'Kontoret · i øjenhøjde';
  if (x > hallway.maxX) {
    if (z < restrooms.foyer.minZ) return 'Venstre toilet';
    if (z > restrooms.foyer.maxZ) return 'Højre toilet';
    return 'Toiletentré';
  }
  return 'Toiletgangen';
}
