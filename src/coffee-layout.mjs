import { desks, deskSize } from './workspace-layout.mjs';

export const thraneDesk = desks.filter(desk => desk.islandIndex === 5 && desk.side === -1)[0];
// Approach the south end of the desk from the main aisle, clear of his chair.
export const coffeeDropoff = { x: thraneDesk.x - .045, z: thraneDesk.z + deskSize.width / 2 + .32 };

export function coffeeCupPlacement(index) {
  const spot = index % 6;
  return {
    x: .36 + spot % 3 * .125,
    y: .7725 + Math.floor(index / 6) * .087,
    z: spot < 3 ? .29 : 0,
    rotation: Math.PI / 2,
  };
}
