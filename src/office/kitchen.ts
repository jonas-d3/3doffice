import * as THREE from 'three';
import { materials as m, cushionMaterials } from '../textures/materials';
import { box, cylinder, mesh, rod } from '../scene/geometry';
import { authored, authoredDoors } from './placement.mjs';
const room = authored.kitchen, kitchenDoor = authoredDoors.kitchen, kitchenNorthDoor = authoredDoors.kitchenNorth;

const fronts = new THREE.MeshStandardMaterial({ color: '#302d26', roughness: .64 });
const counter = new THREE.MeshStandardMaterial({ color: '#202824', roughness: .29 });
const brass = new THREE.MeshStandardMaterial({ color: '#b59b62', metalness: .68, roughness: .3 });
const steel = new THREE.MeshStandardMaterial({ color: '#a8b2b1', metalness: .72, roughness: .24 });
const timber = m.oak.clone(); timber.color.set('#a9783c'); timber.roughness = .85;
const upholstery = m.sofa.clone(); upholstery.color.set('#998c74');
const clearGlass = new THREE.MeshStandardMaterial({ color: '#d6e8e7', transparent: true, opacity: .25, roughness: .12, depthWrite: false });

function flowers(parent: THREE.Object3D, x: number, y: number, z: number, size = 1) {
  const group = new THREE.Group(); group.position.set(x, y, z); group.scale.setScalar(size); parent.add(group);
  cylinder(group, .065, .08, .22, 0, .11, 0, clearGlass);
  for (let i = 0; i < 11; i++) {
    const angle = i * 2.4, reach = .07 + (i % 3) * .04;
    const tip = [Math.sin(angle) * reach, .34 + (i % 4) * .035, Math.cos(angle) * reach];
    rod(group, [0, .09, 0], tip, .0035, m.bark);
    for (let petal = 0; petal < 4; petal++) {
      const bloom = mesh(group, new THREE.SphereGeometry(.027, 7, 5), cushionMaterials[(i + petal) % 4], tip[0] + Math.sin(petal * 1.57) * .02, tip[1], tip[2] + Math.cos(petal * 1.57) * .02);
      bloom.scale.y = .45;
    }
  }
}

function loungeChair(parent: THREE.Object3D, x: number) {
  const z = 11.62;
  cylinder(parent, .37, .35, .07, x, .07, z, m.black);
  cylinder(parent, .46, .43, .4, x, .3, z, upholstery);
  cylinder(parent, .425, .44, .15, x, .52, z, upholstery);
  const shape = new THREE.Shape();
  shape.absarc(0, 0, .51, 0, Math.PI, false);
  shape.absarc(0, 0, .37, Math.PI, 0, true); shape.closePath();
  const back = mesh(parent, new THREE.ExtrudeGeometry(shape, { depth: .42, bevelEnabled: true, bevelSize: .04, bevelThickness: .04, bevelSegments: 3, curveSegments: 24 }), upholstery, x, .38, z);
  back.rotation.x = -Math.PI / 2;
}

function beam(parent: THREE.Object3D, start: number[], end: number[], width = .17) {
  const a = new THREE.Vector3(...start), b = new THREE.Vector3(...end);
  const object = box(parent, width, a.distanceTo(b), .19, 0, 0, 0, timber, .015);
  object.position.copy(a.clone().add(b).multiplyScalar(.5));
  object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize());
}

function wallGraphic(parent: THREE.Object3D, text: string, width: number, height: number, x: number, y: number, z: number, background?: string) {
  const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 384;
  const ctx = canvas.getContext('2d')!;
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, 768, 384); }
  ctx.fillStyle = background ? '#ffffff' : '#12191a'; ctx.font = 'bold 310px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 384, 214);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return mesh(parent, new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture, transparent: !background, depthWrite: !!background }), x, y, z);
}

function coffeeMachine(parent: THREE.Object3D) {
  const group = new THREE.Group(); group.position.set(3.96, .93, 14.03); group.rotation.y = Math.PI; parent.add(group);
  box(group, .48, .045, .37, 0, .022, 0, steel, .018);
  box(group, .47, .42, .25, 0, .27, -.06, steel, .024);
  box(group, .43, .16, .1, 0, .4, .115, m.black, .016);
  box(group, .12, .055, .008, -.04, .425, .171, m.glass);
  for (const x of [-.15, .13]) {
    const button = cylinder(group, .022, .022, .015, x, .405, .176, steel);
    button.rotation.x = Math.PI / 2;
    button.userData.coffeeButton = true;
  }
  cylinder(group, .058, .058, .055, 0, .283, .145, m.black);
  rod(group, [0, .265, .14], [.12, .255, .24], .018, m.black);
  rod(group, [.19, .3, .13], [.2, .12, .21], .009, steel);
  box(group, .4, .014, .2, 0, .052, .1, m.black);
  for (let i = 0; i < 9; i++) box(group, .016, .003, .16, -.16 + i * .04, .061, .1, steel);
  cylinder(group, .06, .05, .1, -.08, .55, -.055, steel);
  cylinder(group, .035, .032, .075, .08, .535, -.03, m.white);
  cylinder(group, .055, .043, .12, .4, .06, .07, steel);
  group.name = 'Kaffemaskinen';
  return group;
}

function drinksFridge(parent: THREE.Object3D, x: number, z: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = Math.PI; parent.add(group);
  box(group, .75, 2.03, .46, 0, 1.04, 0, m.black, .014);
  box(group, .64, 1.79, .012, 0, 1.09, .237, counter);
  const colors = ['#38864a', '#488cbe', '#bb3434', '#a7ba45', '#d7c86b', '#336f8e'];
  const cans = colors.map(color => new THREE.MeshStandardMaterial({ color, metalness: .38, roughness: .35 }));
  for (let row = 0; row < 6; row++) {
    const y = .27 + row * .285;
    box(group, .65, .013, .09, 0, y, .268, steel);
    for (let col = 0; col < 7; col++) {
      const x = -.275 + col * .09;
      cylinder(group, .033, .033, .18, x, y + .105, .272, cans[(row + col) % cans.length]);
      cylinder(group, .03, .03, .006, x, y + .198, .272, steel);
      box(group, .023, .045, .003, x, y + .12, .306, m.white);
    }
  }
  for (const x of [-.332, .332]) box(group, .012, 1.82, .012, x, 1.1, .295, m.light);
  box(group, .62, 1.79, .005, 0, 1.1, .315, clearGlass);
  rod(group, [.365, .82, .33], [.365, 1.37, .33], .012, steel);
  for (let i = 0; i < 4; i++) box(group, .56, .012, .014, 0, .09 + i * .025, .244, m.metal);
}

export function createKitchen(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  // Keep the photographed furnishings together in their original model frame.
  const minX = 2.05, minZ = 10.9, height = room.height;
  const maxX = minX + room.maxX - room.minX, maxZ = minZ + room.maxZ - room.minZ;
  group.position.set(room.minX - minX, 0, room.minZ - minZ);
  const doorLeft = kitchenDoor.minX - group.position.x, doorRight = kitchenDoor.maxX - group.position.x;
  const doorWidth = doorRight - doorLeft, doorCenter = (doorLeft + doorRight) / 2;
  const width = maxX - minX, depth = maxZ - minZ, cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  // Swap the furnished long walls while keeping the corridor entrance fixed.
  const flipDepth = (parent: THREE.Object3D, offsetX = 0) => {
    const part = new THREE.Group(); part.scale.z = -1;
    part.position.set(offsetX, 0, minZ + maxZ); parent.add(part); return part;
  };
  const counterOffsetX = .25; // Keep the counter clear of the entrance jamb.
  const walls: { group: THREE.Group; axis: 'x' | 'z'; position: number; inside: number }[] = [];
  const wall = (axis: 'x' | 'z', position: number, inside: number) => {
    const part = new THREE.Group(); group.add(part); walls.push({ group: part, axis, position, inside }); return part;
  };
  const floor = m.floor.clone(); floor.color.set('#e4b970'); floor.map = m.floor.map!.clone(); floor.map.repeat.set(2, 1.4); floor.map.rotation = Math.PI / 2; floor.bumpMap = floor.map;
  box(group, width + .2, .22, depth + .2, cx, -.14, cz, m.trim, .018);
  box(group, width, .05, depth, cx, -.005, cz, floor);
  // North is the short wall identified by the user; it lies on the -X side.
  const near = wall('z', minZ - .1, 1), far = wall('x', maxX + .1, -1), north = wall('x', minX - .1, 1);
  const windowLeft = 5.65 + counterOffsetX, windowRight = 6.95 + counterOffsetX;
  for (const [a, b] of [[minX - .1, doorLeft], [doorRight, windowLeft], [windowRight, maxX + .1]]) {
    box(near, b - a, height, .2, (a + b) / 2, height / 2, minZ - .1, m.wall);
  }
  for (const [a, b] of [[minX - .1, doorLeft], [doorRight, maxX + .1]]) {
    box(near, b - a, .13, .05, (a + b) / 2, .065, minZ + .025, m.white);
  }
  box(near, 1.3, 1.02, .2, 6.3 + counterOffsetX, .51, minZ - .1, m.wall);
  box(near, 1.3, .22, .2, 6.3 + counterOffsetX, height - .11, minZ - .1, m.wall);
  box(near, doorWidth, height - 2.3, .2, doorCenter, (height + 2.3) / 2, minZ - .1, m.wall);
  for (const x of [doorLeft, doorRight]) box(near, .065, 2.33, .25, x, 1.165, minZ - .1, m.white);
  box(near, doorWidth + .065, .065, .25, doorCenter, 2.33, minZ - .1, m.white);
  box(group, doorWidth, .025, .2, doorCenter, .025, minZ - .1, m.oak);
  box(far, .2, height, depth + .2, maxX + .1, height / 2, cz, m.wall);
  box(far, .05, .13, depth, maxX - .025, .065, cz, m.white);
  const northOpenStart = kitchenNorthDoor.minZ - group.position.z, northOpenEnd = kitchenNorthDoor.maxZ - group.position.z;
  const northOpenWidth = northOpenEnd - northOpenStart, northOpenCenter = (northOpenStart + northOpenEnd) / 2;
  for (const [a, b] of [[minZ - .1, northOpenStart], [northOpenEnd, maxZ + .1]]) {
    box(north, .2, height, b - a, minX - .1, height / 2, (a + b) / 2, m.wall);
    box(north, .05, .13, b - a, minX + .025, .065, (a + b) / 2, m.white);
  }
  box(north, .2, height - 2.3, northOpenWidth, minX - .1, (height + 2.3) / 2, northOpenCenter, m.wall);
  for (const z of [northOpenStart, northOpenEnd]) box(north, .25, 2.33, .065, minX - .1, 1.165, z, m.white);
  box(north, .25, .065, northOpenWidth + .065, minX - .1, 2.33, northOpenCenter, m.white);
  box(group, .2, .025, northOpenWidth, minX - .1, .025, northOpenCenter, m.oak);

  const loungeWall = wall('z', maxZ + .1, -1);
  const fridgeLeft = 2.5, fridgeRight = 3.4, fridgeCenter = (fridgeLeft + fridgeRight) / 2;
  for (const [a, b] of [[minX - .1, fridgeLeft], [fridgeRight, maxX + .1]]) {
    box(loungeWall, b - a, height, .2, (a + b) / 2, height / 2, maxZ + .1, m.wall);
    box(loungeWall, b - a, .13, .05, (a + b) / 2, .065, maxZ - .025, m.white);
  }
  box(loungeWall, .9, height - 2.23, .2, fridgeCenter, (height + 2.23) / 2, maxZ + .1, m.wall);
  for (const x of [fridgeLeft, fridgeRight]) box(loungeWall, .065, 2.26, .12, x, 1.13, maxZ, m.white);
  box(loungeWall, .965, .065, .12, fridgeCenter, 2.26, maxZ, m.white);
  // A recessed opening in the chair wall houses the drinks fridge.
  for (const x of [fridgeLeft - .075, fridgeRight + .075]) box(loungeWall, .15, 2.23, .6, x, 1.115, maxZ + .3, m.wall);
  box(loungeWall, 1.2, 2.23, .15, fridgeCenter, 1.115, maxZ + .675, m.wall);
  box(loungeWall, .9, .12, .6, fridgeCenter, 2.29, maxZ + .3, m.wall);
  box(group, .9, .05, .6, fridgeCenter, -.005, maxZ + .3, floor);
  const windowWall = flipDepth(near, counterOffsetX);
  box(windowWall, 1.19, 1.49, .03, 6.3, 1.82, maxZ + .04, m.glass);
  for (const x of [5.67, 6.3, 6.93]) box(windowWall, .055, 1.6, .16, x, 1.82, maxZ - .03, m.white);
  for (const y of [1.03, 1.81, 2.61]) box(windowWall, 1.33, .055, .16, 6.3, y, maxZ - .03, m.white);
  box(windowWall, 1.43, .045, .35, 6.3, 1.015, maxZ - .1, m.white);
  for (const x of [6.22, 6.39]) rod(windowWall, [x, 1.55, maxZ - .13], [x, 1.66, maxZ - .13], .009, m.black);

  // Dark drawers, brass knobs and a black counter with an inset sink.
  const worktop = flipDepth(group, counterOffsetX);
  box(worktop, 4.04, .1, .5, 5.32, .09, 14.22, m.black);
  box(worktop, 4.04, .74, .61, 5.32, .51, 14.18, fronts);
  for (let i = 0; i < 6; i++) for (const [y, h] of [[.29, .36], [.68, .35]]) {
    const x = 3.65 + i * .67;
    box(worktop, .65, h, .025, x, y, 13.863, fronts, .003);
    cylinder(worktop, .019, .019, .027, x + .19, y + .09, 13.836, brass).rotation.x = Math.PI / 2;
  }
  for (const [a, b] of [[3.26, 6.09], [6.63, 7.39]]) box(worktop, b - a, .045, .7, (a + b) / 2, .915, 14.16, counter, .006);
  box(worktop, .54, .045, .1, 6.36, .915, 13.86, counter);
  box(worktop, .54, .045, .18, 6.36, .915, 14.42, counter);
  box(worktop, .54, .035, .38, 6.36, .75, 14.1, steel, .018);
  for (const x of [6.105, 6.615]) box(worktop, .025, .16, .39, x, .83, 14.1, steel);
  for (const z of [13.917, 14.283]) box(worktop, .53, .16, .025, 6.36, .83, z, steel);
  cylinder(worktop, .029, .029, .007, 6.36, .772, 14.1, m.black);
  const faucet = new THREE.CatmullRomCurve3([new THREE.Vector3(6.36, .94, 14.38), new THREE.Vector3(6.36, 1.26, 14.38), new THREE.Vector3(6.36, 1.32, 14.2), new THREE.Vector3(6.36, 1.23, 14.09)]);
  mesh(worktop, new THREE.TubeGeometry(faucet, 28, .014, 8, false), m.black, 0, 0, 0);
  cylinder(worktop, .025, .03, .16, 6.77, 1.02, 14.32, clearGlass);
  rod(worktop, [6.77, 1.11, 14.32], [6.77, 1.15, 14.32], .008, m.black);
  box(worktop, .18, .015, .1, 6.79, .95, 14.1, m.trim, .006);
  const coffee = coffeeMachine(worktop);

  // Exposed timber posts and diagonal braces around the counter and window.
  for (const x of [3.35, 5.25, 7.32]) beam(worktop, [x, .02, 13.96], [x, height - .08, 13.96]);
  beam(worktop, [3.27, height - .08, 13.96], [7.41, height - .08, 13.96], .13);
  beam(worktop, [3.35, 1.67, 13.96], [4.1, height - .11, 13.96], .16);
  beam(worktop, [5.25, 1.67, 13.96], [4.53, height - .11, 13.96], .16);
  beam(worktop, [7.32, 1.7, 13.96], [6.65, height - .11, 13.96], .16);
  box(worktop, 4.14, .07, .16, 5.33, .05, 13.97, timber);
  box(windowWall, 1.48, .035, .2, 4.32, 1.45, 14.32, timber);
  for (let i = 0; i < 7; i++) cylinder(windowWall, .037, .03, .14, 3.77 + i * .115, 1.54, 14.29, clearGlass);
  for (const x of [4.69, 4.84]) {
    cylinder(windowWall, .045, .04, .12, x, 1.53, 14.29, m.green);
    const handle = mesh(windowWall, new THREE.TorusGeometry(.027, .006, 8, 16), brass, x + .043, 1.55, 14.29); handle.rotation.y = Math.PI / 2;
  }
  for (const x of [4.5, 4.71]) { cylinder(worktop, .048, .048, .23, x, 1.05, 14.19, m.white); cylinder(worktop, .012, .015, .28, x, 1.07, 14.19, timber); }
  cylinder(worktop, .13, .065, .09, 5.61, 1.005, 14.13, m.trim);
  for (let i = 0; i < 4; i++) mesh(worktop, new THREE.SphereGeometry(.045, 12, 10), new THREE.MeshStandardMaterial({ color: '#e4a625' }), 5.54 + (i % 2) * .08, 1.06 + Math.floor(i / 3) * .04, 14.09 + Math.floor(i / 2) * .065);

  const seating = flipDepth(group);
  loungeChair(seating, 4.2); loungeChair(seating, 6.27);
  cylinder(seating, .41, .41, .035, 5.23, .53, 11.66, m.white);
  for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; rod(seating, [5.23 + Math.sin(a) * .2, .51, 11.66 + Math.cos(a) * .2], [5.23 + Math.sin(a) * .34, .025, 11.66 + Math.cos(a) * .34], .022, timber); }
  flowers(seating, 5.22, .55, 11.5, .62);
  for (const [x, y] of [[5.05, .08], [5.36, .12]]) cylinder(seating, .027, .027, y, x, .55 + y / 2, 11.76, m.white);
  wallGraphic(loungeWall, 'a:', 1.6, 1.05, 5.15, 1.92, maxZ - .014).rotation.y = Math.PI;
  drinksFridge(group, fridgeCenter, maxZ + .23);

  // Small standing table and plant pedestal next to the entrance.
  cylinder(group, .36, .36, .035, 2.48, 1.05, 12.65, m.black);
  rod(group, [2.48, .08, 12.65], [2.48, 1.04, 12.65], .026, m.black);
  for (const [dx, dz] of [[.28, 0], [-.28, 0], [0, .28], [0, -.28]]) rod(group, [2.48, .09, 12.65], [2.48 + dx, .03, 12.65 + dz], .018, m.black);
  flowers(group, 2.48, 1.068, 12.65, 1.1);
  box(group, .32, .64, .3, 2.28, .33, 14.28, m.white);
  cylinder(group, .065, .055, .09, 2.28, .695, 14.28, m.metal);
  for (let i = 0; i < 7; i++) { const a = i * 2.4; const tip = [2.28 + Math.sin(a) * .13, .85 + (i % 3) * .07, 14.28 + Math.cos(a) * .13]; rod(group, [2.28, .73, 14.28], tip, .004, m.green); const leaf = mesh(group, new THREE.SphereGeometry(1, 10, 8), m.green, ...tip as [number, number, number]); leaf.scale.set(.045, .018, .095); leaf.rotation.y = a; }
  for (const [part, x, z, rotation] of [[north, 2.081, 11.6, Math.PI / 2], [loungeWall, 7.15, maxZ - .03, Math.PI]] as const) {
    const door = new THREE.Group(); door.position.set(x, 0, z); door.rotation.y = rotation; part.add(door);
    box(door, .83, 2.14, .04, 0, 1.07, 0, m.white);
    for (const dx of [-.46, .46]) box(door, .065, 2.25, .09, dx, 1.125, .02, m.trim);
    box(door, .98, .065, .09, 0, 2.23, .02, m.trim);
    rod(door, [.28, 1.02, .045], [.37, 1.02, .045], .014, brass);
  }

  // Double exit doors with round windows at the far end of the kitchen.
  const doors = new THREE.Group(); doors.position.set(maxX - .025, 0, 12.47); doors.rotation.y = -Math.PI / 2; far.add(doors);
  for (const x of [-.42, .42]) {
    box(doors, .82, 2.25, .06, x, 1.125, 0, m.white, .006);
    for (const [y, h] of [[.45, .57], [1, .24], [1.73, .91]]) box(doors, .62, h, .014, x, y, .04, m.trim, .008);
    const ring = mesh(doors, new THREE.TorusGeometry(.125, .014, 10, 32), brass, x, 1.6, .065);
    const glass = mesh(doors, new THREE.CircleGeometry(.114, 32), m.glass, x, 1.6, .067); glass.castShadow = false;
    ring.receiveShadow = false;
    box(doors, .24, .055, .055, x, 2.14, .07, steel);
    rod(doors, [x, 2.16, .09], [x + .2, 2.22, .11], .007, steel);
  }
  for (const x of [-.88, .88]) box(doors, .07, 2.34, .12, x, 1.17, .01, m.trim);
  box(doors, 1.82, .08, .12, 0, 2.32, .01, m.trim);
  rod(doors, [.075, 1.04, .085], [.24, 1.04, .085], .017, steel);
  const exit = wallGraphic(doors, '↓ ▷', .4, .17, 0, 2.57, .05, '#16965b'); exit.castShadow = false;
  box(group, .64, .008, 1.74, 7.49, .027, 12.47, m.rug, .01);
  box(far, .12, .75, .74, 7.78, .52, 13.63, m.white, .014);
  for (let i = 0; i < 15; i++) box(far, .014, .65, .022, 7.708, .52, 13.32 + i * .045, m.trim);
  box(group, .45, .64, .47, 7.55, .34, 13.86, steel, .055);
  box(group, .47, .045, .48, 7.55, .685, 13.86, m.metal, .03);
  cylinder(group, .1, .11, .37, 7.67, .21, 13.44, steel);

  const roof = new THREE.Group(); group.add(roof);
  box(roof, width + .2, .1, depth + .2, cx, height + .05, cz, m.wall);
  const slope = box(roof, 4.25, .09, .7, 5.3 + counterOffsetX, 2.66, minZ + maxZ - 14.18, m.wall); slope.rotation.x = -.45;
  for (const z of [11.43, 13.62]) {
    box(roof, 5.2, .035, .05, 4.95, height - .045, z, m.white);
    for (const x of [2.7, 3.8, 4.9, 6, 7.1]) {
      box(roof, .16, .045, .06, x, height - .09, z, m.trim);
      box(roof, .11, .01, .04, x, height - .119, z, m.light);
    }
  }
  cylinder(roof, .07, .065, .035, 4.95, height - .03, cz, m.white);
  for (const x of [3.7, 6.6]) { const light = new THREE.PointLight('#ffe2aa', 2.4, 6, 2); light.position.set(x, 2.55, 12.75); group.add(light); }
  for (const wall of walls) wall.position += group.position[wall.axis];
  return { walls, roof, coffee };
}
