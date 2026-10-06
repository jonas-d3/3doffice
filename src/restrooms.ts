import * as THREE from 'three';
import { materials as m, cushionMaterials } from './materials';
import { mesh, box, cylinder, rod } from './geometry';
import { restrooms as layout } from './layout.mjs';

const ceramic = new THREE.MeshStandardMaterial({ color: '#fffdf3', roughness: .2 });
const chrome = new THREE.MeshStandardMaterial({ color: '#bac4c4', metalness: .7, roughness: .22 });
const brass = new THREE.MeshStandardMaterial({ color: '#b89950', metalness: .65, roughness: .3 });
const tile = new THREE.MeshStandardMaterial({ color: '#484843', roughness: .78 });
const grout = new THREE.MeshStandardMaterial({ color: '#77756a', roughness: 1 });
const doorPaint = new THREE.MeshStandardMaterial({ color: '#41494e', roughness: .6 });
const mirror = new THREE.MeshStandardMaterial({ color: '#bbcbd0', metalness: .25, roughness: .08 });
type Bounds = { minX: number; maxX: number; minZ: number; maxZ: number };
type CutawayWall = { group: THREE.Group; axis: 'x' | 'z'; position: number; inside: number };

function courtyardView() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ccd6dc'; ctx.fillRect(0, 0, 512, 512);
  ctx.fillStyle = '#697477'; ctx.fillRect(172, 65, 40, 110);
  ctx.fillStyle = '#929c9e'; ctx.fillRect(0, 140, 512, 105);
  for (let y = 145; y < 245; y += 12) { ctx.fillStyle = '#bac0bd'; ctx.fillRect(0, y, 512, 2); }
  const brickwork = (left: number, top: number, width: number, height: number) => {
    ctx.fillStyle = '#8e8570'; ctx.fillRect(left, top, width, height);
    for (let y = top; y < top + height; y += 18) for (let x = left - ((y - top) / 18 % 2) * 22; x < left + width; x += 44) {
      ctx.fillStyle = ['#caba85', '#d3c38e', '#beaf7d'][Math.abs(Math.floor(x / 44 + y / 18)) % 3];
      ctx.fillRect(Math.max(left, x) + 1, y + 1, Math.min(42, left + width - Math.max(left, x)), 16);
    }
  };
  brickwork(0, 245, 512, 267);
  for (const x of [67, 239]) {
    ctx.fillStyle = '#e8e4ce'; ctx.fillRect(x - 5, 291, 70, 155);
    ctx.fillStyle = '#394b4d'; ctx.fillRect(x, 296, 60, 145);
    ctx.fillStyle = '#748582'; ctx.fillRect(x + 4, 300, 52, 3);
  }
  brickwork(390, 0, 122, 512);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
}

function floor(parent: THREE.Object3D, room: Bounds) {
  const width = room.maxX - room.minX, depth = room.maxZ - room.minZ;
  const x = (room.minX + room.maxX) / 2, z = (room.minZ + room.maxZ) / 2;
  box(parent, width + .16, .22, depth + .16, x, -.14, z, m.trim);
  box(parent, width, .05, depth, x, -.005, z, tile);
  for (let tx = room.minX + .6; tx < room.maxX; tx += .6) box(parent, .008, .002, depth, tx, .021, z, grout);
  for (let tz = room.minZ + .6; tz < room.maxZ; tz += .6) box(parent, width, .002, .008, x, .021, tz, grout);
}

// Local basin faces +Z; the tap and mirror sit against the wall behind it.
function basin(parent: THREE.Object3D, x: number, z: number, rotation: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  box(group, .66, .05, .49, 0, .82, 0, m.black, .012);
  box(group, .62, .035, .44, 0, .855, 0, ceramic, .016);
  for (const side of [-1, 1]) {
    box(group, .025, .15, .46, side * .31, .91, 0, ceramic, .009);
    box(group, .61, .15, .025, 0, .91, side * .22, ceramic, .009);
    for (const front of [-1, 1]) rod(group, [side * .3, .8, front * .21], [side * .3, .025, front * .21], .011, m.black);
    rod(group, [side * .3, .2, -.21], [side * .3, .2, .21], .009, m.black);
  }
  rod(group, [-.3, .2, -.21], [.3, .2, -.21], .009, m.black);
  cylinder(group, .035, .035, .006, 0, .876, .035, chrome);
  rod(group, [0, .83, .035], [0, .54, .035], .026, chrome);
  rod(group, [0, .54, .035], [0, .54, -.25], .024, chrome);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, .97, -.18), new THREE.Vector3(0, 1.2, -.18),
    new THREE.Vector3(0, 1.26, -.07), new THREE.Vector3(0, 1.17, .04),
  ]);
  mesh(group, new THREE.TubeGeometry(curve, 24, .012, 8, false), m.black, 0, 0, 0);
  rod(group, [-.07, 1.02, -.18], [.07, 1.02, -.18], .012, m.black);
  box(group, .67, .85, .035, 0, 1.69, -.245, m.metal, .009);
  box(group, .64, .82, .008, 0, 1.69, -.222, mirror);
  cylinder(group, .035, .043, .13, -.23, 1.05, -.15, cushionMaterials[2]);
  rod(group, [-.23, 1.12, -.15], [-.23, 1.17, -.15], .008, m.black);
  rod(group, [-.23, 1.17, -.15], [-.19, 1.17, -.15], .008, m.black);
}

function radiator(parent: THREE.Object3D, x: number, z: number, rotation: number, width = .75) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  box(group, width, .67, .11, 0, .48, 0, m.white, .018);
  for (let i = 0; i < 15; i++) box(group, .018, .58, .014, -width * .44 + i * width * .88 / 14, .48, .063, m.trim);
  for (const side of [-1, 1]) rod(group, [side * width * .47, .16, 0], [side * width * .47, .07, -.06], .014, chrome);
  rod(group, [width / 2, .72, 0], [width / 2 + .09, .72, 0], .035, ceramic);
}

function towel(parent: THREE.Object3D, x: number, z: number, rotation: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  rod(group, [0, 1.85, -.015], [0, 1.85, .04], .022, chrome);
  const cloth = mesh(group, new THREE.SphereGeometry(1, 16, 12), m.white, 0, 1.43, .05);
  cloth.scale.set(.2, .43, .045); cloth.rotation.z = -.08;
  for (const dx of [-.08, .035, .11]) {
    const fold = mesh(group, new THREE.SphereGeometry(1, 8, 10), m.white, dx, 1.42, .076);
    fold.scale.set(.02, .35, .018);
  }
}

function toilet(parent: THREE.Object3D, x: number, z: number, rotation: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  const foot = cylinder(group, .13, .19, .28, 0, .17, .04, ceramic); foot.scale.z = 1.4;
  const profile = [[0, .23], [.13, .23], [.24, .3], [.285, .41], [.28, .45], [.225, .45], [.2, .36], [.1, .29], [0, .29]];
  const bowl = mesh(group, new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 48), ceramic, 0, 0, .1);
  bowl.scale.z = 1.22;
  const water = cylinder(group, .105, .105, .004, 0, .296, .1, new THREE.MeshStandardMaterial({ color: '#becabd', roughness: .12 }));
  water.scale.z = 1.3;
  const seat = new THREE.Shape(); seat.absellipse(0, 0, .29, .37, 0, Math.PI * 2, false, 0);
  const hole = new THREE.Path(); hole.absellipse(0, 0, .205, .275, 0, Math.PI * 2, true, 0); seat.holes.push(hole);
  const ring = mesh(group, new THREE.ExtrudeGeometry(seat, { depth: .025, bevelEnabled: true, bevelThickness: .008, bevelSize: .008, bevelSegments: 2, steps: 1, curveSegments: 32 }), ceramic, 0, .465, .1);
  ring.rotation.x = -Math.PI / 2;
  box(group, .57, .56, .21, 0, .58, -.26, ceramic, .045);
  box(group, .59, .055, .23, 0, .875, -.26, ceramic, .025);
  cylinder(group, .03, .03, .01, .08, .909, -.26, chrome);
  const lid = mesh(group, new THREE.SphereGeometry(1, 32, 24), ceramic, 0, .81, -.15);
  lid.scale.set(.285, .355, .025); lid.rotation.x = -.08;
  cylinder(group, .055, .065, .28, -.43, .16, -.17, m.black);
  rod(group, [-.43, .28, -.17], [-.43, .48, -.17], .009, m.black);
  const roll = cylinder(group, .067, .067, .12, .45, .81, -.05, m.white); roll.rotation.z = Math.PI / 2;
  rod(group, [.38, .81, -.05], [.53, .81, -.05], .01, m.black);
  box(group, .11, .12, .009, .45, .72, .01, m.white);
}

export function createRestrooms(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  const walls: CutawayWall[] = [];
  const roof = new THREE.Group(); group.add(roof);
  const height = layout.height;
  const wall = (axis: 'x' | 'z', position: number, from: number, to: number, inside: number, door?: [number, number]) => {
    const part = new THREE.Group(); group.add(part); walls.push({ group: part, axis, position, inside });
    const piece = (a: number, b: number, bottom = 0, top = height) => {
      const center = (a + b) / 2;
      box(part, axis === 'x' ? .2 : b - a, top - bottom, axis === 'z' ? .2 : b - a,
        axis === 'x' ? position : center, (top + bottom) / 2, axis === 'z' ? position : center, m.wall);
      if (!bottom) box(part, axis === 'x' ? .215 : b - a, .1, axis === 'z' ? .215 : b - a,
        axis === 'x' ? position : center, .05, axis === 'z' ? position : center, m.black);
    };
    if (door) { piece(from, door[0]); piece(door[1], to); piece(door[0], door[1], 2.2); }
    else piece(from, to);
    return part;
  };
  for (const room of [layout.foyer, layout.left, layout.right]) {
    floor(group, room);
    box(roof, room.maxX - room.minX + .2, .08, room.maxZ - room.minZ + .2,
      (room.minX + room.maxX) / 2, height + .04, (room.minZ + room.maxZ) / 2, m.wall);
    const light = new THREE.PointLight('#fff4df', 2.2, 5, 2);
    light.position.set((room.minX + room.maxX) / 2, 2.35, (room.minZ + room.maxZ) / 2); group.add(light);
    cylinder(roof, .13, .13, .045, light.position.x, 2.51, light.position.z, m.light);
  }
  floor(group, layout.entrance); floor(group, layout.leftDoor); floor(group, layout.rightDoor);
  // The corridor supplies the wall at x=1.95, including the foyer entrance.
  wall('z', 4.4, 1.95, 5.15, 1);
  wall('z', 10.6, 1.95, 5.15, -1);
  wall('x', 5.15, 4.4, 6.6, -1);
  wall('x', 5.15, 8.4, 10.6, -1);
  wall('z', 6.6, 1.95, 5.15, -1, [2.65, 3.65]);
  wall('z', 8.4, 1.95, 5.15, 1, [2.65, 3.65]);
  for (const [z, direction] of [[6.6, -1], [8.4, 1]]) {
    for (const x of [2.65, 3.65]) box(group, .065, 2.23, .24, x, 1.115, z, m.white);
    box(group, 1.065, .065, .24, 3.15, 2.23, z, m.white);
    const door = new THREE.Group(); door.position.set(2.65, 0, z); door.rotation.y = direction < 0 ? Math.PI / 2 : -Math.PI / 2; group.add(door);
    box(door, 1, 2.16, .05, .5, 1.08, 0, doorPaint, .006);
    rod(door, [.8, 1.02, -.045], [.93, 1.02, -.045], .016, brass);
    box(group, 1, .022, .2, 3.15, .031, z, chrome);
  }
  // Window wall of the shared foyer; the two toilet rooms extend further back.
  const windowWall = new THREE.Group(); group.add(windowWall);
  walls.push({ group: windowWall, axis: 'x', position: 4.35, inside: -1 });
  box(windowWall, .2, 1.04, 1.6, 4.35, .52, 7.5, m.wall);
  box(windowWall, .2, .14, 1.6, 4.35, 2.48, 7.5, m.wall);
  box(windowWall, .07, 1.37, 1.48, 4.36, 1.725, 7.5, m.glass);
  const view = mesh(windowWall, new THREE.PlaneGeometry(1.48, 1.37), courtyardView(), 4.31, 1.725, 7.5);
  view.rotation.y = -Math.PI / 2; view.castShadow = false; view.receiveShadow = false;
  for (const z of [6.74, 7.24, 7.76, 8.26]) box(windowWall, .15, 1.46, .045, 4.27, 1.73, z, m.white);
  for (const y of [1.02, 1.73, 2.44]) box(windowWall, .15, .055, 1.58, 4.27, y, 7.5, m.white);
  box(windowWall, .37, .055, 1.62, 4.18, 1.015, 7.5, m.white);
  for (const z of [7, 7.5, 8]) rod(windowWall, [4.17, 1.55, z], [4.17, 1.64, z], .009, m.black);
  radiator(group, 4.1, 7.5, -Math.PI / 2, .8);
  basin(group, 3.86, 6.96, 0);
  towel(group, 3.94, 8.25, Math.PI);
  // White wall tiles behind the shared basin.
  box(group, .76, 2.35, .016, 3.84, 1.2, 6.705, ceramic);
  for (let y = .2; y < 2.45; y += .3) box(group, .76, .008, .018, 3.84, y, 6.716, grout);
  for (const x of [3.6, 3.9, 4.2]) box(group, .008, 2.35, .018, x, 1.2, 6.716, grout);
  cylinder(group, .045, .075, .23, 4.13, 1.15, 6.9, cushionMaterials[2]);
  for (let i = 0; i < 7; i++) {
    const z = 6.9 + Math.cos(i * 2.4) * .12, x = 4.12 + Math.sin(i * 2.4) * .07, y = 1.42 + (i % 3) * .05;
    rod(group, [4.13, 1.23, 6.9], [x, y, z], .003, m.green);
    const flower = mesh(group, new THREE.SphereGeometry(.04, 8, 6), cushionMaterials[2], x, y, z); flower.scale.y = .45;
  }
  for (const [z, color] of [[7.25, '#e8e2d2'], [7.45, '#ba3040'], [7.63, '#932c3b'], [7.8, '#eee8db']] as const) {
    cylinder(group, .021, .03, .14, 4.17, 1.115, z, new THREE.MeshStandardMaterial({ color, roughness: .3 }));
  }
  toilet(group, 3.65, 4.97, 0);
  toilet(group, 3.05, 10.03, Math.PI);
  basin(group, 4.76, 5.8, -Math.PI / 2);
  basin(group, 4.76, 9.2, -Math.PI / 2);
  radiator(group, 4.97, 5, -Math.PI / 2, .65);
  radiator(group, 2.13, 9.88, Math.PI / 2, .65);
  towel(group, 4.55, 4.53, 0);
  towel(group, 4.15, 10.47, Math.PI);
  for (const z of [4.52, 10.48]) box(group, .48, .48, .022, 4.05, 1.63, z, m.trim, .009);
  rod(group, [4.25, .05, 4.53], [4.25, 2.5, 4.53], .012, chrome);
  cylinder(group, .105, .1, .24, 4.66, .15, 9.23, brass);
  cylinder(group, .12, .1, .19, 4.67, .13, 5.8, m.jute);
  for (const centerZ of [5.5, 9.5]) {
    const slope = box(roof, 1.2, .08, 2, 4.52, 2.35, centerZ, m.wall); slope.rotation.z = -.35;
  }
  return { walls, roof };
}
