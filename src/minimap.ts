import { spaceInvaders, minecraft, meeting2, hallway, restrooms, kitchen, lobby, doorway, minecraftDoor, kitchenDoor, kitchenNorthDoor, workspace, workspaceDoor, mapPoint } from './layout.mjs';
import { lobbyFurniture } from './lobby-layout.mjs';
import { desks } from './workspace-layout.mjs';
import type { Bounds } from './architecture';

export function renderMinimap() {
  const svg = document.querySelector('#floor-plan')!;
  const rect = (bounds: Bounds, fill: string, dashed = false) => {
    const p = mapPoint(bounds.minX, bounds.minZ);
    return `<rect x="${p.x}" y="${p.y}" width="${(bounds.maxX - bounds.minX) * 14}" height="${(bounds.maxZ - bounds.minZ) * 14}" fill="${fill}" stroke="#9fa695" stroke-width="1.5" ${dashed ? 'stroke-dasharray="3 2"' : ''}/>`;
  };
  const label = (bounds: Bounds, lines: string[]) => {
    const p = mapPoint((bounds.minX + bounds.maxX) / 2, (bounds.minZ + bounds.maxZ) / 2);
    return lines.map((line, i) => `<text x="${p.x}" y="${p.y + (i - (lines.length - 1) / 2) * 10}" text-anchor="middle" fill="#53604f" stroke="none" font-size="${i ? 5.5 : 6.5}">${line}</text>`).join('');
  };
  svg.innerHTML = `<title>Grundplan: MØDE 4 er Space Invaders. MØDE 3 er Minecraft, med MØDE 2 nedenfor. Toiletterne ligger på den anden side af gangen. Køkkenet forbinder gangen med passagen neden for MØDE 2. Fra den lille gang fører sidedøren ind i Kontoret.</title>`
    + [spaceInvaders, minecraft, hallway, restrooms.left, restrooms.foyer, restrooms.right, kitchen, lobby, workspace].map(b => rect(b, '#e5e3d8')).join('')
    + rect(meeting2, '#eeede8', true)
    + [doorway, minecraftDoor, restrooms.entrance, restrooms.leftDoor, restrooms.rightDoor, kitchenDoor, kitchenNorthDoor, workspaceDoor].map(b => rect(b, '#eeede8').replace('stroke="#9fa695"', 'stroke="none"')).join('')
    + label(spaceInvaders, ['SPACE INVADERS', 'MØDE 4 · 7,758 × 6,205 m'])
    + label(minecraft, ['MINECRAFT', 'MØDE 3 · 4,835 × 4,362 m'])
    + label(meeting2, ['MØDE 2', 'Ikke implementeret'])
    + label(kitchen, ['KØKKEN', '6,567 × 3,100 m'])
    + label(restrooms.left, ['WC']) + label(restrooms.right, ['WC'])
    + Object.values(lobbyFurniture).map(b => rect(b, '#a1a78f')).join('')
    + label(lobby, ['LILLE GANG'])
    + desks.map(d => rect({ minX: d.x - .4, maxX: d.x + .4, minZ: d.z - .8, maxZ: d.z + .8 }, '#a1a78f')).join('')
    + label({ ...workspace, minZ: 19.85, maxZ: 20.85 }, ['KONTORET · 17,758 × 6,970 m'])
    + '<g id="map-camera"><path d="m-7-10 7-8 7 8" fill="#4c786235" stroke="none"/><circle r="3.5" fill="#35664b" stroke="#fff" stroke-width="1.5"/></g>';
}
