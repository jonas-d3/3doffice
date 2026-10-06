import * as THREE from 'three';
import { materials as m } from './materials';
import { box, cylinder, mesh, rod } from './geometry';
import { plant } from './plants';
import { minecraft } from './layout.mjs';

function parquet() {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;
  const tones = ['#c69a65', '#d3ae7b', '#dec092', '#cdaa75', '#d9b585'];
  // Opposing strips give the tabletop the V-shaped grain visible in the photos.
  for (let row = -4; row < 22; row++) for (const side of [-1, 1]) {
    const y = row * 56, edge = side === -1 ? 0 : 512;
    ctx.save(); ctx.beginPath(); ctx.moveTo(edge, y); ctx.lineTo(256, y + 128);
    ctx.lineTo(256, y + 184); ctx.lineTo(edge, y + 56); ctx.closePath(); ctx.clip();
    ctx.fillStyle = tones[(row + 10 + side) % tones.length]; ctx.fillRect(0, y, 512, 190);
    ctx.strokeStyle = '#79522d25'; ctx.lineWidth = .6;
    for (let line = 0; line < 20; line++) {
      ctx.beginPath(); ctx.moveTo(edge, y + line * 3); ctx.lineTo(256, y + 128 + line * 3); ctx.stroke();
    }
    ctx.restore();
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  return new THREE.MeshStandardMaterial({ map, roughness: .48 });
}

function armchair(parent: THREE.Object3D, x: number, z: number, rotation: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  box(group, .48, .065, .47, 0, .46, 0, m.black, .045);
  box(group, .39, .035, .37, 0, .51, -.015, m.rug, .035);
  const back = box(group, .46, .44, .055, 0, .69, .21, m.black, .065); back.rotation.x = -.12;
  for (const side of [-1, 1]) {
    box(group, .04, .14, .34, side * .25, .61, .03, m.black, .02);
    for (const front of [-1, 1]) rod(group, [side * .19, .44, front * .17], [side * .27, .025, front * .27], .014, m.black);
  }
}

function pickaxe(parent: THREE.Object3D) {
  const group = new THREE.Group(); group.position.set(.57, 1.025, 15.08); group.rotation.y = Math.PI / 2; parent.add(group);
  const palette: Record<string, THREE.Material> = {
    T: new THREE.MeshStandardMaterial({ color: '#14595b', roughness: .65 }),
    C: new THREE.MeshStandardMaterial({ color: '#42c6c8', roughness: .5 }),
    B: m.black, H: new THREE.MeshStandardMaterial({ color: '#765b35', roughness: .8 }),
  };
  const pixels = ['.....TTTT.......', '....TCCCCT......', '.....TCCCCT.....', '......TCCCCT....', '.....BBTCCCT....', '....BHB.TCCCT...', '...BHB...TCCT...', '..BHB.....TT....', '.BHB............', '..B.............'];
  pixels.forEach((row, y) => [...row].forEach((pixel, x) => {
    if (palette[pixel]) box(group, .05, .05, .07, (x - 7) * .05, (pixels.length - y) * .05, 0, palette[pixel]);
  }));
}

export function createMinecraft(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  // Keep furniture in its original modelling coordinates and rotate the entire
  // room so its entrance faces across the corridor toward the toilet foyer.
  const room = { minX: .25, maxX: 4.45, minZ: 11.6, maxZ: 17.4, height: minecraft.height };
  const entrance = { minX: .55, maxX: 1.55 };
  group.rotation.y = -Math.PI / 2;
  group.position.set(minecraft.maxX + room.minZ, 0, minecraft.minZ - room.minX);
  const { minX, maxX, minZ, maxZ, height } = room;
  const width = maxX - minX, depth = maxZ - minZ, centerX = (minX + maxX) / 2, centerZ = (minZ + maxZ) / 2;
  const walls: { group: THREE.Group; axis: 'x' | 'z'; position: number; inside: number }[] = [];
  const wall = (axis: 'x' | 'z', position: number, inside: number) => {
    const part = new THREE.Group(); group.add(part); walls.push({ group: part, axis, position, inside }); return part;
  };
  const floor = m.floor.clone(); floor.map = m.floor.map!.clone(); floor.map.rotation = Math.PI / 2; floor.map.repeat.set(1.4, 1.7); floor.bumpMap = floor.map;
  box(group, width + .2, .22, depth + .2, centerX, -.14, centerZ, m.trim, .02);
  box(group, width, .05, depth, centerX, -.005, centerZ, floor);
  box(group, entrance.maxX - entrance.minX, .025, .2, 1.05, .025, 11.5, m.oak);

  const front = wall('z', 11.5, 1);
  for (const [left, right] of [[minX - .1, entrance.minX], [entrance.maxX, maxX + .1]]) {
    box(front, right - left, height, .2, (left + right) / 2, height / 2, 11.5, m.wall);
    box(front, right - left, .11, .05, (left + right) / 2, .055, 11.62, m.white);
  }
  box(front, 1, height - 2.25, .2, 1.05, (height + 2.25) / 2, 11.5, m.wall);
  for (const x of [entrance.minX, entrance.maxX]) box(front, .065, 2.28, .25, x, 1.14, 11.5, m.white);
  box(front, 1.07, .07, .25, 1.05, 2.28, 11.5, m.white);
  const door = new THREE.Group(); door.position.set(.55, 0, 11.5); door.rotation.y = -Math.PI / 2; front.add(door);
  box(door, 1, 2.2, .05, .5, 1.1, 0, m.white, .008);
  for (const y of [.62, 1.62]) box(door, .79, .83, .012, .5, y, -.034, m.trim, .006);
  rod(door, [.79, 1.03, -.06], [.94, 1.03, -.06], .016, m.metal);
  const sign = document.createElement('canvas'); sign.width = 512; sign.height = 160;
  const ctx = sign.getContext('2d')!; ctx.fillStyle = '#f2f0e9'; ctx.fillRect(0, 0, 512, 160);
  ctx.fillStyle = '#3f583f'; ctx.font = 'bold 48px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('MINECRAFT', 256, 96);
  const signTexture = new THREE.CanvasTexture(sign); signTexture.colorSpace = THREE.SRGBColorSpace;
  const plaque = mesh(front, new THREE.PlaneGeometry(.38, .12), new THREE.MeshBasicMaterial({ map: signTexture }), 1.86, 1.57, 11.393); plaque.rotation.y = Math.PI;

  const west = wall('x', minX - .1, 1), east = wall('x', maxX + .1, -1);
  for (const [part, x, inward] of [[west, minX - .1, 1], [east, maxX + .1, -1]] as const) {
    box(part, .2, height, depth + .2, x, height / 2, centerZ, m.wall);
    box(part, .05, .11, depth, x + inward * .125, .055, centerZ, m.white);
  }
  // Closed service door and the white cabinet, on the plant side of the room.
  box(west, .05, 2.25, .87, .275, 1.125, 16.6, m.white, .006);
  for (const z of [16.13, 17.07]) box(west, .09, 2.32, .06, .29, 1.16, z, m.trim);
  box(west, .09, .065, 1, .29, 2.31, 16.6, m.trim);
  rod(west, [.32, 1.03, 16.25], [.32, 1.03, 16.4], .016, m.metal);
  box(group, .5, 1.02, 1.6, .52, .53, 15.15, m.white, .015);
  for (const z of [14.76, 15.16, 15.56]) box(group, .007, .95, .012, .774, .54, z, m.trim);
  pickaxe(group);

  const rear = wall('z', maxZ + .1, -1);
  box(rear, width + .2, 1.05, .2, centerX, .525, maxZ + .1, m.wall);
  for (const [left, right] of [[minX - .1, 1.64], [2.96, maxX + .1]]) box(rear, right - left, height, .2, (left + right) / 2, height / 2, maxZ + .1, m.wall);
  box(rear, 1.32, .27, .2, 2.3, height - .135, maxZ + .1, m.wall);
  const window = new THREE.Group(); window.position.set(2.3, 1.85, 17.3); window.rotation.x = -.12; rear.add(window);
  box(window, 1.2, 1.46, .035, 0, 0, 0, m.glass);
  for (const x of [-.63, .63]) box(window, .065, 1.58, .16, x, 0, 0, m.white);
  for (const y of [-.77, .77]) box(window, 1.32, .065, .16, 0, y, 0, m.white);
  box(window, 1.17, .66, .025, 0, .38, -.05, m.trim);
  for (let i = 0; i < 16; i++) box(window, 1.17, .009, .03, 0, .68 - i * .039, -.07, m.white);
  box(rear, 1.43, .045, .3, 2.3, 1.055, 17.28, m.white);
  box(rear, 1.2, .66, .13, 2.65, .46, 17.31, m.white, .015);
  for (let i = 0; i < 23; i++) box(rear, .021, .57, .013, 2.1 + i * .05, .46, 17.237, m.trim);

  // Screen, video bar and ventilation unit face the table from the entrance wall.
  box(front, 1.78, 1.04, .065, 2.74, 1.77, 11.66, m.black, .025);
  box(front, 1.71, .97, .008, 2.74, 1.77, 11.699, m.screen, .01);
  box(front, .68, .075, .07, 2.74, 1.2, 11.72, m.black, .022);
  cylinder(front, .018, .018, .015, 2.74, 1.2, 11.765, m.metal).rotation.x = Math.PI / 2;
  box(front, 1.83, .41, .3, 2.74, 2.52, 11.78, m.white, .02);
  box(front, 1.58, .13, .015, 2.74, 2.61, 11.94, m.black);
  for (let i = 0; i < 23; i++) box(front, .012, .13, .018, 1.97 + i * .067, 2.74 - .13, 11.95, m.trim);
  box(front, 1.75, .012, .018, 2.74, 2.4, 11.94, m.metal);
  box(group, .35, .9, .28, 4.225, .47, 11.75, m.white, .01);
  box(group, .25, .2, .18, 4.225, 1.01, 11.75, m.black, .008);
  cylinder(group, .02, .03, .13, 4.19, 1.15, 11.77, m.white);
  box(east, .045, 1.12, 2.6, 4.4, 1.7, 14.05, m.white, .015);
  box(east, .12, .035, .5, 4.33, 1.12, 13.1, m.trim);
  for (const [i, color] of ['#154d86', '#cd3939', '#249061', '#202626'].entries()) {
    rod(east, [4.31, 1.14, 12.95 + i * .09], [4.31, 1.27, 12.95 + i * .09], .012, new THREE.MeshStandardMaterial({ color }));
  }

  box(group, 2.7, .023, 4.8, 2.5, .04, 14.5, m.jute, .02);
  box(group, 1.1, .07, 2.8, 2.5, .77, 14.5, parquet(), .012);
  for (const x of [2.06, 2.94]) for (const z of [13.22, 15.78]) box(group, .055, .7, .055, x, .39, z, m.black);
  for (const z of [13.4, 14.5, 15.6]) { armchair(group, 1.66, z, -Math.PI / 2); armchair(group, 3.34, z, Math.PI / 2); }
  armchair(group, 2.5, 12.77, Math.PI); armchair(group, 2.5, 16.23, 0);
  box(group, .36, .017, .13, 2.66, .817, 13.45, m.black, .008);
  for (let row = 0; row < 4; row++) for (let key = 0; key < 12; key++) box(group, .022, .003, .018, 2.5 + key * .028, .828, 13.405 + row * .025, m.metal);
  const mouse = mesh(group, new THREE.SphereGeometry(1, 16, 12), m.black, 2.87, .83, 13.28); mouse.scale.set(.027, .015, .043);
  cylinder(group, .08, .08, .035, 2.5, .827, 14.24, m.black);
  cylinder(group, .035, .035, .007, 2.5, .811, 13.88, m.metal);
  plant(group, .8, 16.73, 1.15); plant(group, 1.38, 17.03, .52); plant(group, .64, 16.24, .68);

  const roof = new THREE.Group(); group.add(roof);
  box(roof, width + .2, .1, 4.45, centerX, height + .05, 13.725, m.wall);
  const slope = box(roof, width + .2, .09, 1.48, centerX, height - .055, 16.7, m.wall); slope.rotation.x = .14;
  const lamps = new THREE.Group(); group.add(lamps);
  box(lamps, .09, .075, 2.65, 2.5, 2.57, 14.5, m.black, .01);
  box(lamps, .065, .012, 2.57, 2.5, 2.527, 14.5, m.light);
  for (const z of [13.55, 15.45]) rod(lamps, [2.5, 2.62, z], [2.5, 2.89, z], .004, m.black);
  box(roof, 2.6, .045, .05, 2.15, 2.76, 16.6, m.white);
  for (const x of [1.15, 2.2, 3.2]) {
    const spot = cylinder(roof, .045, .045, .16, x, 2.68, 16.6, m.white); spot.rotation.z = .3;
  }
  const light = new THREE.PointLight('#fff3dd', 3, 8, 2); light.position.set(2.5, 2.45, 14.5); group.add(light);
  // Cutaway visibility is evaluated using the camera's world coordinates.
  for (const wall of walls) {
    if (wall.axis === 'x') { wall.axis = 'z'; wall.position += group.position.z; }
    else { wall.axis = 'x'; wall.position = group.position.x - wall.position; wall.inside *= -1; }
  }
  return { walls, roof };
}
