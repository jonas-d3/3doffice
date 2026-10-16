import * as THREE from 'three';
import { box, cylinder, mesh, rod } from './geometry';
import { materials as m } from './materials';
import { slab, partition, type CutawayWall } from './architecture';
import { workspace as room, workspaceDoor as door } from './layout.mjs';
import { trussPositions } from './workspace-layout.mjs';

function pineTexture(dark: boolean) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512;
  const c = canvas.getContext('2d')!;
  let seed = 71;
  const random = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  c.fillStyle = dark ? '#69533d' : '#dfd7bd'; c.fillRect(0, 0, 512, 512);
  for (let plank = 0; plank < 8; plank++) {
    c.fillStyle = `rgba(90,65,30,${random() * .1})`; c.fillRect(plank * 64, 0, 64, 512);
    c.fillStyle = dark ? '#473726' : '#a69a7d'; c.fillRect(plank * 64, 0, 1, 512);
    for (let i = 0; i < 50; i++) {
      const x = plank * 64 + random() * 64;
      c.strokeStyle = `rgba(${dark ? '220,193,139' : '114,90,50'},${.03 + random() * .14})`;
      c.lineWidth = .3 + random(); c.beginPath(); c.moveTo(x, 0);
      c.bezierCurveTo(x - 4, 150, x + 5, 350, x, 512); c.stroke();
    }
    const x = plank * 64 + 15 + random() * 32, y = random() * 512;
    for (let ring = 1; ring < 6; ring++) {
      c.strokeStyle = dark ? '#49372466' : '#77654388'; c.lineWidth = .7;
      c.beginPath(); c.ellipse(x, y, ring * 1.2, ring * 3.4, .05, 0, Math.PI * 2); c.stroke();
    }
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping; map.anisotropy = 8;
  return map;
}

const timberMap = pineTexture(true);
const timber = new THREE.MeshStandardMaterial({ map: timberMap, roughness: .95, bumpMap: timberMap, bumpScale: .045 });
function beam(parent: THREE.Object3D, a: number[], b: number[], width = .26) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
  const centre = start.clone().add(end).multiplyScalar(.5);
  const object = box(parent, width, start.distanceTo(end), width, centre.x, centre.y, centre.z, timber);
  object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.sub(start).normalize());
}
const roofY = (z: number) => z < 19.7 ? 4.65 : 4.65 - (z - 19.7) * (3.05 / (room.maxZ - 19.7));
function roofStrip(parent: THREE.Object3D, left: number, right: number, back: number, front: number, material: THREE.Material) {
  const drop = roofY(back) - roofY(front);
  const object = box(parent, right - left, .12, Math.hypot(front - back, drop), (left + right) / 2, (roofY(back) + roofY(front)) / 2, (back + front) / 2, material);
  object.rotation.x = Math.atan2(drop, front - back);
  return object;
}

export function createWorkspaceShell(parent: THREE.Object3D) {
  const walls: CutawayWall[] = [], ceiling = new THREE.Group(); parent.add(ceiling);
  const floorMap = pineTexture(false); floorMap.repeat.set(4.4, 1.8); floorMap.rotation = Math.PI / 2;
  const floor = new THREE.MeshStandardMaterial({ map: floorMap, roughness: .72, bumpMap: floorMap, bumpScale: .012 });
  slab(parent, room, floor); slab(parent, door, floor);
  // Extend the doorway through the thick wall shown on the floor plan.
  for (const x of [door.minX - .06, door.maxX + .06]) box(parent, .12, 2.25, .8, x, 1.125, 17.005, m.white);
  box(parent, 1.12, .12, .8, 2, 2.31, 17.005, m.white);
  const north = partition(parent, walls, 'z', room.minZ - .1, room.minX, room.maxX, 1, 4.65, [door.minX, door.maxX]);
  const south = partition(parent, walls, 'z', room.maxZ + .1, room.minX, room.maxX, -1, 1.6);
  const ends: THREE.Group[] = [];
  for (const [x, inside] of [[room.minX - .1, 1], [room.maxX + .1, -1]]) {
    const group = new THREE.Group(); parent.add(group); walls.push({ group, axis: 'x', position: x, inside }); ends.push(group);
    const shape = new THREE.Shape();
    shape.moveTo(room.minZ, 0); shape.lineTo(room.maxZ, 0); shape.lineTo(room.maxZ, 1.6);
    shape.lineTo(19.7, 4.65); shape.lineTo(room.minZ, 4.65); shape.closePath();
    const wall = mesh(group, new THREE.ExtrudeGeometry(shape, { depth: .2, bevelEnabled: false }), m.wall, x - inside * .1, 0, 0);
    wall.rotation.y = -Math.PI / 2;
    // Shape X becomes world Z; extrusion extends toward -X.
    wall.position.x = x + .1;
    box(group, .23, .12, room.maxZ - room.minZ, x, .06, (room.minZ + room.maxZ) / 2, m.white);
  }
  // North wall doors visible in the walkthrough remain closed.
  for (const x of [8.2, 12.4]) {
    box(north, 1.02, 2.28, .06, x, 1.14, room.minZ + .035, m.trim);
    box(north, .89, 2.15, .035, x, 1.075, room.minZ + .075, m.white);
    rod(north, [x + .24, 1.03, room.minZ + .11], [x + .38, 1.03, room.minZ + .11], .014);
  }
  for (const x of [1.8, 5.8, 9.8, 13.8, 16.1]) box(south, 1.3, .48, .09, x, .62, room.maxZ - .07, m.white);
  const leaf = new THREE.Group(); parent.add(leaf); leaf.position.set(2.55, 0, room.minZ); leaf.rotation.y = -Math.PI / 2;
  box(leaf, .85, 2.18, .05, .425, 1.09, 0, m.white);
  for (const y of [.58, 1.55]) box(leaf, .65, .8, .016, .425, y, -.034, m.trim);
  rod(leaf, [.64, 1.02, -.06], [.76, 1.02, -.06], .013);

  roofStrip(ceiling, room.minX, room.maxX, room.minZ, 19.7, m.wall);
  for (const [back, front] of [[19.7, 20], [21.15, 21.9], [23.05, room.maxZ]]) roofStrip(ceiling, room.minX, room.maxX, back, front, m.wall);
  const sky = new THREE.MeshStandardMaterial({ color: '#eaf7ff', emissive: '#c8e7ff', emissiveIntensity: .65, roughness: .2 });
  for (const [back, front] of [[20, 21.15], [21.9, 23.05]]) {
    let left = room.minX;
    for (const centre of [1.8, 5.8, 9.8, 13.8]) for (const offset of [-.94, 0, .94]) {
      const x = centre + offset, a = x - .38, b = x + .38;
      roofStrip(ceiling, left, a, back, front, m.wall);
      const window = new THREE.Group(); ceiling.add(window);
      window.position.set(x, (roofY(back) + roofY(front)) / 2, (back + front) / 2);
      window.rotation.x = Math.atan2(roofY(back) - roofY(front), front - back);
      const length = Math.hypot(front - back, roofY(back) - roofY(front));
      box(window, .76, .04, length, 0, .14, 0, sky);
      for (const side of [-1, 1]) {
        box(window, .07, .3, length, side * .38, .04, 0, m.white);
        box(window, .76, .3, .07, 0, .04, side * length / 2, m.white);
      }
      box(window, .68, .025, .025, 0, .11, length * .25, m.white);
      left = b;
    }
    roofStrip(ceiling, left, room.maxX, back, front, m.wall);
  }
  for (const x of trussPositions) {
    beam(parent, [x, 0, 19.65], [x, 4.6, 19.65], .27);
    beam(parent, [x, .15, 17.6], [x, 3.25, 19.65], .22);
    beam(parent, [x, 0, 23.7], [x, 2.9, 22.45], .25);
    beam(parent, [x, 2.95, 19.65], [x, 2.95, 22.45], .25);
    beam(parent, [x, 2.1, 19.65], [x, 2.95, 20.3], .15);
    for (const z of [19.65, 22.45]) cylinder(parent, .032, .032, .29, x, 2.9, z, m.metal).rotation.z = Math.PI / 2;
  }
  // Silver ventilation duct follows the tall north wall.
  const duct = new THREE.MeshStandardMaterial({ color: '#bbc0c1', metalness: .75, roughness: .38 });
  cylinder(north, .23, .23, 16.8, 8.2, 3.3, 17.86, duct).rotation.z = Math.PI / 2;
  for (let x = -.1; x < 16.6; x += .42) {
    const ring = mesh(north, new THREE.TorusGeometry(.234, .009, 5, 20), duct, x, 3.3, 17.86); ring.rotation.y = Math.PI / 2;
  }
  cylinder(north, .35, .35, 2.2, 16.5, 1.1, 17.9, m.white);
  rod(north, [16.5, 2.15, 17.9], [16.15, 3.3, 17.86], .23, duct);
  for (const z of [19.7, 22.4]) {
    box(ceiling, 17.5, .05, .05, 8.3, roofY(z) - .14, z, m.black);
    for (let x = .5; x < 17; x += 1.4) {
      cylinder(ceiling, .045, .045, .14, x, roofY(z) - .24, z, m.black);
      cylinder(ceiling, .04, .04, .005, x, roofY(z) - .313, z, m.light);
    }
  }
  return { walls, roof: ceiling, west: ends[0], east: ends[1] };
}
