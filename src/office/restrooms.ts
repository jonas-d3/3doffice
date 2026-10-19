import * as THREE from 'three';
import { materials as m, cushionMaterials } from '../textures/materials';
import { mesh, box, cylinder, rod } from '../scene/geometry';
import { restrooms as layout } from './layout.mjs';
import { partition, roof as makeRoof } from '../scene/architecture';
import { setRestroomDoorClosure } from '../navigation/movement.mjs';

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
  const h = layout.height;
  let visitDoor!: THREE.Group;
  for (const room of [layout.left, layout.foyer, layout.right]) {
    floor(group, room);
    roof.add(makeRoof(group, room, h));
    const light = new THREE.PointLight('#fff4df', 1.4, 4, 2);
    light.position.set((room.minX + room.maxX) / 2, 2.35, (room.minZ + room.maxZ) / 2); group.add(light);
    cylinder(roof, .13, .13, .045, light.position.x, 2.51, light.position.z, m.light);
  }
  for (const child of roof.children) child.visible = true;
  for (const door of [layout.entrance, layout.leftDoor, layout.rightDoor]) floor(group, door);
  partition(group, walls, 'z', layout.left.minZ - .1, 6.235, 7.858, 1, h);
  partition(group, walls, 'z', layout.right.maxZ + .1, 6.235, 7.858, -1, h);
  for (const room of [layout.left, layout.right]) partition(group, walls, 'x', room.maxX + .1, room.minZ - .1, room.maxZ + .1, -1, h);
  for (const [door, inside] of [[layout.leftDoor, -1], [layout.rightDoor, 1]] as const) {
    const z = (door.minZ + door.maxZ) / 2;
    partition(group, walls, 'z', z, 6.235, 8.058, inside, h, [door.minX, door.maxX]);
    // The visited toilet opens into the foyer, clear of David while it closes.
    const leaf = new THREE.Group(); group.add(leaf);
    leaf.position.set(door.minX, 0, z); leaf.rotation.y = Math.PI / 2;
    if (door === layout.rightDoor) { visitDoor = leaf; leaf.position.x = door.maxX; leaf.name = 'Davids toiletdør'; }
    box(leaf, .75, 2.16, .04, .375, 1.08, 0, doorPaint, .006);
    rod(leaf, [.55, 1.02, -.04], [.68, 1.02, -.04], .016, brass);
  }
  const window = new THREE.Group(); group.add(window);
  const x = layout.foyer.maxX + .1, z = (layout.foyer.minZ + layout.foyer.maxZ) / 2;
  walls.push({ group: window, axis: 'x', position: x, inside: -1 });
  box(window, .2, 1.04, 1.5, x, .52, z, m.wall);
  box(window, .2, .14, 1.5, x, 2.48, z, m.wall);
  box(window, .07, 1.37, 1.4, x, 1.725, z, m.glass);
  const view = mesh(window, new THREE.PlaneGeometry(1.4, 1.37), courtyardView(), x - .11, 1.725, z);
  view.rotation.y = -Math.PI / 2; view.castShadow = false;
  for (const edge of [z - .72, z, z + .72]) box(window, .15, 1.46, .045, x - .08, 1.73, edge, m.white);
  for (const y of [1.02, 1.73, 2.44]) box(window, .15, .055, 1.5, x - .08, y, z, m.white);
  box(window, .3, .055, 1.5, x - .14, 1.015, z, m.white);
  radiator(group, 7.88, 9.45, -Math.PI / 2, .65);
  basin(group, 7.55, 8.915, 0);
  towel(group, 7.65, 10.1, Math.PI);
  toilet(group, 6.84, 7.06, 0);
  toilet(group, 6.94, 11.75, Math.PI);
  basin(group, 7.51, 11.05, -Math.PI / 2);
  basin(group, 7.51, 7.85, -Math.PI / 2);
  radiator(group, 7.67, 6.99, -Math.PI / 2, .45);
  radiator(group, 6.42, 11.75, Math.PI / 2, .45);
  roof.visible = false;
  const updateDoor = (closure: number) => {
    const angle = (1 + THREE.MathUtils.smoothstep(closure, 0, 1)) * Math.PI / 2;
    if (visitDoor.rotation.y === angle) return false;
    visitDoor.rotation.y = angle;
    setRestroomDoorClosure(closure);
    return true;
  };
  setRestroomDoorClosure(0);
  return { walls, roof, updateDoor };
}
