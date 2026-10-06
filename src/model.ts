import * as THREE from 'three';
import { materials as m, cushionMaterials, random } from './materials';
import { hallway, restrooms } from './layout.mjs';
import { mesh, box, cylinder, rod } from './geometry';
import { createRestrooms } from './restrooms';

type Parent = THREE.Object3D;
export const room = { width: 7.6, depth: 7, height: 3.05 };

function windowWall() {
  const group = new THREE.Group();
  box(group, .2, 1.12, 7, 0, .56, 0, m.wall);
  box(group, .2, .35, 7, 0, 2.875, 0, m.wall);
  for (const [z, width] of [[-3.12, .76], [-1.15, .96], [1.15, .96], [3.12, .76]]) {
    box(group, .2, 1.58, width, 0, 1.91, z, m.wall);
  }
  for (const z of [-2.25, 0, 2.25]) {
    box(group, .05, 1.48, 1.15, -.04, 1.91, z, m.glass);
    for (const side of [-1, 1]) {
      box(group, .27, 1.65, .065, .045, 1.91, z + side * .6, m.white);
      box(group, .27, .065, 1.27, .045, 1.91 + side * .8, z, m.white);
    }
    for (let i = 0; i < 24; i++) box(group, .015, .015, 1.12, .003, 2.6 - i * .04, z, m.trim);
    box(group, .4, .055, 1.35, .11, 1.09, z, m.white);
    box(group, .14, .57, 1.45, .2, .48, z, m.white, .025);
    for (let i = 0; i < 22; i++) box(group, .04, .49, .022, .28, .48, z - .67 + i * .064, m.trim);
  }
  box(group, .055, .12, 7, .13, .06, 0, m.white);
  box(group, .35, .18, 7, .05, 2.96, 0, m.white);
  return group;
}

function chair(parent: Parent, x: number, z: number, rotation: number) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.rotation.y = rotation; parent.add(group);
  box(group, .44, .065, .44, 0, .47, 0, m.black, .055);
  const back = box(group, .43, .4, .065, 0, .68, .19, m.black, .07);
  back.rotation.x = -.13;
  for (const dx of [-1, 1]) for (const dz of [-1, 1]) {
    rod(group, [dx * .15, .45, dz * .14], [dx * .235, .025, dz * .23], .012, m.black);
    rod(group, [dx * .22, .12, dz * .21], [-dx * .15, .4, dz * .14], .007, m.black);
  }
}

function meetingArea(parent: Parent) {
  box(parent, 2.75, .025, 5.8, -1.8, .035, -.05, m.jute, .035);
  for (const z of [-1.65, -.05, 1.55]) {
    box(parent, 1.03, .075, 1.58, -1.8, .77, z, m.oak, .025);
    for (const x of [-2.23, -1.37]) for (const dz of [-.66, .66]) {
      box(parent, .07, .7, .07, x, .385, z + dz, m.oak, .012);
    }
  }
  for (let i = 0; i < 6; i++) {
    chair(parent, -2.62, -2.04 + i * .8, -Math.PI / 2);
    chair(parent, -.98, -2.04 + i * .8, Math.PI / 2);
  }
  chair(parent, -1.8, -2.82, Math.PI);
  chair(parent, -1.8, 2.74, 0);
  box(parent, .13, .018, .045, -1.63, .816, -2.05, m.black, .008);
  box(parent, .23, .003, .3, -1.95, .812, -1.9, m.white);
}

function sofaModule(parent: Parent, z: number) {
  box(parent, .96, .22, 1.02, 3.12, .27, z, m.sofa, .065);
  box(parent, .88, .2, 1, 3.04, .46, z, m.sofa, .09);
  const back = box(parent, .19, .59, 1.02, 3.56, .64, z, m.sofa, .07); back.rotation.z = -.1;
  for (const x of [2.76, 3.46]) for (const dz of [-.38, .38]) cylinder(parent, .018, .014, .16, x, .1, z + dz, m.metal);
}

function lounge(parent: Parent) {
  cylinder(parent, 1.42, 1.42, .027, 1.76, .034, -.02, m.rug);
  for (let i = 0; i < 4; i++) {
    const z = -1.67 + i * 1.03;
    sofaModule(parent, z);
    const cushion = box(parent, .17, .43, .48, 3.32, .75, z - .18, cushionMaterials[i], .075);
    cushion.rotation.set(.07 * (i - 2), 0, -.22);
  }
  box(parent, 1.01, .22, .94, 2.15, .27, -1.73, m.sofa, .07);
  box(parent, .97, .2, .9, 2.15, .46, -1.74, m.sofa, .08);
  box(parent, 1.1, .57, .17, 2.2, .62, -2.19, m.sofa, .07);
  box(parent, .14, .58, .98, 1.68, .62, -1.74, m.sofa, .06);
  box(parent, .86, .18, .17, 3.04, .65, 1.9, m.sofa, .065);
  box(parent, 1.22, .055, 1.15, 1.8, .47, -.05, m.oak, .025);
  for (const x of [1.29, 2.31]) for (const z of [-.52, .42]) cylinder(parent, .025, .019, .43, x, .24, z, m.oak);
  for (let i = 0; i < 3; i++) {
    cylinder(parent, .045, .045, .13 + i * .025, 1.55 + i * .12, .56 + i * .0125, -.05 + (i % 2) * .1, m.white);
  }
  cylinder(parent, .075, .058, .12, 2.05, .55, -.21, m.black);
  for (let i = 0; i < 3; i++) {
    rod(parent, [2.05, .59, -.21], [2.02 + .055 * i, .82 + .06 * i, -.22], .006, m.green);
    for (let p = 0; p < 5; p++) {
      const petal = mesh(parent, new THREE.SphereGeometry(.033, 8, 6), cushionMaterials[2], 2.02 + .055 * i + Math.sin(p * 1.25) * .025, .82 + .06 * i + Math.cos(p * 1.25) * .03, -.22);
      petal.scale.z = .3;
    }
  }
}

function leaf(parent: Parent, position: THREE.Vector3, length: number, width: number, angle: number, lean: number) {
  const vertices: number[] = [], indices: number[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12, halfWidth = Math.pow(Math.sin(t * Math.PI), .75) * width;
    for (const side of [-1, 0, 1]) vertices.push(side * halfWidth, t * length, Math.sin(t * Math.PI * .8) * length * .2 + Math.abs(side) * halfWidth * .3);
  }
  for (let i = 0; i < 12; i++) for (let j = 0; j < 2; j++) {
    const a = i * 3 + j; indices.push(a, a + 3, a + 1, a + 1, a + 3, a + 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setIndex(indices); geometry.computeVertexNormals();
  const material = m.green.clone(); material.color.setHSL(.25 + random() * .05, .3 + random() * .15, .17 + random() * .07); material.side = THREE.DoubleSide;
  const object = mesh(parent, geometry, material, ...position.toArray() as [number, number, number]);
  object.rotation.set(lean, angle, .2); return object;
}

function plant(parent: Parent, x: number, z: number, size = 1) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.scale.setScalar(size); parent.add(group);
  cylinder(group, .3, .245, .55, 0, .295, 0, m.black);
  cylinder(group, .27, .27, .02, 0, .56, 0, m.soil);
  for (let i = 0; i < 10; i++) {
    const angle = i * 2.4, height = .7 + random() * .7, reach = .15 + random() * .45;
    const tip = new THREE.Vector3(Math.sin(angle) * reach, .5 + height, Math.cos(angle) * reach);
    rod(group, [0, .5, 0], tip.toArray(), .012, m.green);
    leaf(group, tip, .55 + random() * .35, .14 + random() * .09, angle, .45 + random() * .7);
  }
}

function details(parent: Parent) {
  box(parent, 1.84, 1.06, .065, -1.8, 1.94, -3.32, m.black, .022);
  box(parent, 1.77, .99, .008, -1.8, 1.94, -3.282, m.screen, .01);
  box(parent, .82, .065, .09, -1.8, 1.3, -3.24, m.black, .028);
  box(parent, 1.55, .68, .37, -1.8, .82, -3.2, m.trim, .018);
  for (const x of [-2.06, -1.54]) box(parent, .006, .64, .01, x, .82, -3.006, m.metal);
  plant(parent, .84, -2.82, 1.12); plant(parent, -3.06, -2.94, .8); plant(parent, -3.09, 2.93, .72);
  plant(parent, 3, 2.78, .61);
  // Mobile whiteboard and the wooden stump at the entrance end.
  const board = new THREE.Group(); board.position.set(-.3, 0, 2.85); board.rotation.y = -.13; parent.add(board);
  box(board, .86, 1.2, .055, 0, 1.45, 0, m.metal, .02);
  box(board, .8, 1.14, .012, 0, 1.45, -.035, m.white, .01);
  rod(board, [0, .1, 0], [0, .89, 0], .026);
  for (const x of [-.35, .35]) {
    rod(board, [0, .15, 0], [x, .08, -.25], .021);
    rod(board, [0, .15, 0], [x, .08, .25], .021);
    for (const z of [-.25, .25]) cylinder(board, .045, .045, .04, x, .04, z, m.black).rotation.z = Math.PI / 2;
  }
  cylinder(parent, .23, .25, .65, .38, .325, 2.93, m.bark);
  cylinder(parent, .223, .223, .015, .38, .657, 2.93, m.oak);
  box(parent, .16, .003, .21, .38, .668, 2.93, m.white);
  box(parent, .72, .06, .57, 2.68, .68, 2.46, m.oak, .012);
  for (const x of [2.37, 2.99]) for (const z of [2.22, 2.7]) box(parent, .04, .64, .04, x, .33, z, m.oak);
  box(parent, .5, .41, .43, 2.68, .245, 2.46, m.jute, .03);
  box(parent, .52, .78, .47, 3.41, .41, 2.57, m.black, .016);
  for (const y of [.22, .43, .64]) box(parent, .46, .012, .015, 3.41, y, 2.817, m.metal);
}

function lamps(parent: Parent) {
  const group = new THREE.Group(); parent.add(group);
  for (const x of [-1.8, 1.45]) {
    box(group, .09, .105, 4.8, x, 2.65, -.1, m.black, .006);
    box(group, .06, .008, 4.7, x, 2.594, -.1, m.light);
    for (const z of [-1.9, 1.7]) rod(group, [x, 2.71, z], [x, 3.04, z], .004);
  }
  return group;
}

function corridor(parent: Parent) {
  const group = new THREE.Group(); parent.add(group);
  const { minX, maxX, minZ, maxZ, height } = hallway;
  const width = maxX - minX, centerX = (minX + maxX) / 2;
  const centerZ = (minZ + maxZ) / 2, length = maxZ - minZ;
  const floorMaterial = m.floor.clone();
  floorMaterial.map = m.floor.map!.clone();
  floorMaterial.map.repeat.set(.65, 2.8);
  floorMaterial.bumpMap = floorMaterial.map;
  box(group, width + .2, .22, length + .2, centerX, -.14, centerZ, m.trim, .02);
  box(group, width, .05, length, centerX, -.005, centerZ, floorMaterial);

  const leftWall = new THREE.Group(); group.add(leftWall);
  const entrance = restrooms.entrance;
  for (const [start, end] of [[minZ, entrance.minZ], [entrance.maxZ, maxZ]]) {
    box(leftWall, .2, height, end - start, maxX + .1, height / 2, (start + end) / 2, m.wall);
    box(leftWall, .045, .11, end - start, maxX - .023, .055, (start + end) / 2, m.white);
  }
  box(leftWall, .2, height - 2.2, 1, maxX + .1, (height + 2.2) / 2, 7.5, m.wall);
  for (const z of [entrance.minZ, entrance.maxZ]) box(leftWall, .24, 2.23, .065, maxX + .1, 1.115, z, m.white);
  box(leftWall, .24, .065, 1.065, maxX + .1, 2.23, 7.5, m.white);
  box(group, .2, .025, 1, maxX + .1, .025, 7.5, m.metal);
  // Flush white doors and dark reveals, as seen on the left of the photo.
  for (const z of [5.5]) {
    box(leftWall, .035, 2.23, 1.06, maxX - .025, 1.115, z, m.black);
    box(leftWall, .05, 2.15, .92, maxX - .055, 1.075, z - .018, m.white, .008);
    for (const side of [-1, 1]) box(leftWall, .09, 2.28, .065, maxX - .03, 1.14, z + side * .54, m.white);
    box(leftWall, .09, .065, 1.15, maxX - .03, 2.27, z, m.white);
    rod(leftWall, [maxX - .1, 1.02, z + .31], [maxX - .1, 1.02, z + .18], .015);
    box(leftWall, .025, .23, .12, maxX - .035, 1.55, z + .7, m.black, .005);
    // A small person pictogram, avoiding texture or font downloads.
    mesh(leftWall, new THREE.SphereGeometry(.016, 8, 6), m.white, maxX - .052, 1.6, z + .7);
    box(leftWall, .008, .07, .028, maxX - .052, 1.542, z + .7, m.white);
  }

  // The office wall and open doorway form the near end of the corridor.
  const farEnd = new THREE.Group(); group.add(farEnd);
  box(farEnd, width + .32, height, .16, centerX, height / 2, maxZ + .08, m.wall);
  box(farEnd, .77, 2.16, .05, 1.33, 1.08, maxZ - .035, m.black);
  box(farEnd, .38, 1.54, .012, 1.33, 1.23, maxZ - .066, m.screen);
  for (const x of [.9, 1.76]) box(farEnd, .06, 2.23, .1, x, 1.115, maxZ - .055, m.white);
  box(farEnd, .92, .06, .1, 1.33, 2.23, maxZ - .055, m.white);

  const rightWall = new THREE.Group(); group.add(rightWall);
  box(rightWall, .16, height, length, minX - .08, height / 2, centerZ, m.wall);
  box(rightWall, .04, .11, length, minX + .02, .055, centerZ, m.white);

  const fittings = new THREE.Group(); group.add(fittings);
  // Tall, narrow radiator, visible pipework, and green-lit booking display.
  box(fittings, .13, 1.06, .58, .395, .7, 7.5, m.white, .018);
  for (let i = 0; i < 18; i++) box(fittings, .02, .96, .017, .47, .7, 7.765 - i * .031, m.trim);
  for (const z of [7.76, 7.68]) rod(fittings, [.32, 1.19, z], [.32, height, z], .012, m.white);
  rod(fittings, [.4, 1.2, 7.9], [.4, 1.2, 7.78], .027, m.white);
  box(fittings, .045, .38, .29, .295, 1.58, 6.5, m.black, .014);
  box(fittings, .008, .32, .24, .323, 1.58, 6.5, m.screen, .005);
  const greenLight = new THREE.MeshStandardMaterial({ color: '#50d899', emissive: '#31c488', emissiveIntensity: .6 });
  box(fittings, .009, .32, .008, .323, 1.58, 6.36, greenLight);
  box(fittings, .009, .022, .12, .329, 1.6, 6.5, m.trim);
  box(fittings, .009, .012, .09, .329, 1.53, 6.5, greenLight);

  // Opening under a lowered beam into the small landing at the far end.
  box(group, width, .22, .14, centerX, height - .11, 9.6, m.white);
  for (const x of [minX + .03, maxX - .03]) box(group, .06, height - .22, .14, x, (height - .22) / 2, 9.6, m.white);
  cylinder(group, .28, .28, .035, .55, 1.06, 10.55, m.black);
  cylinder(group, .023, .023, 1.02, .55, .54, 10.55, m.black);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2;
    rod(group, [.55, .09, 10.55], [.55 + Math.sin(a) * .26, .04, 10.55 + Math.cos(a) * .26], .019, m.black);
  }
  cylinder(group, .045, .06, .28, .5, 1.217, 10.55, m.trim);
  for (let i = 0; i < 11; i++) {
    const angle = i * 2.4;
    const x = .5 + Math.sin(angle) * .2, z = 10.55 + Math.cos(angle) * .22, y = 1.51 + (i % 4) * .065;
    rod(group, [.5, 1.32, 10.55], [x, y, z], .004, m.bark);
    const sprig = mesh(group, new THREE.SphereGeometry(.06, 7, 5), cushionMaterials[3], x, y, z);
    sprig.scale.set(.55, 1.7, .5);
  }

  const roof = new THREE.Group(); group.add(roof);
  box(roof, width + .32, .08, length, centerX, height + .04, centerZ, m.wall);
  for (let z = minZ + .6; z < maxZ; z += .6) box(roof, width, .007, .009, centerX, height - .004, z, m.trim);
  for (const x of [.52, 1.57]) box(roof, .009, .008, length, x, height - .005, centerZ, m.trim);
  for (const z of [5.15, 7.05, 8.95, 10.8]) {
    box(roof, .055, .024, .13, centerX, height - .017, z, m.metal);
    box(roof, .035, .009, .095, centerX, height - .034, z, m.light);
    const light = new THREE.PointLight('#fff2d5', .7, 3, 2);
    light.position.set(centerX, height - .15, z); group.add(light);
  }
  box(roof, .21, .012, .42, .62, height - .015, 6.15, m.white);
  for (let i = 0; i < 12; i++) box(roof, .16, .014, .018, .62, height - .023, 6.34 - i * .034, m.metal);
  cylinder(roof, .075, .055, .05, .82, height - .04, 5.15, m.white);
  roof.visible = false;
  return { roof, leftWall, rightWall, farEnd, fittings };
}

export function createOffice() {
  const office = new THREE.Group();
  box(office, 7.82, .22, 7.22, 0, -.14, 0, m.trim, .025);
  box(office, 7.6, .05, 7, 0, -.005, 0, m.floor);
  const west = windowWall(); west.position.x = -3.8; office.add(west);
  const east = windowWall(); east.position.x = 3.8; east.rotation.y = Math.PI; office.add(east);
  const north = new THREE.Group(); north.position.z = -3.5; office.add(north);
  box(north, 7.6, 3.05, .2, 0, 1.525, 0, m.wall);
  box(north, 7.6, .12, .06, 0, .06, .13, m.white);
  box(north, 7.6, .2, .34, 0, 2.95, .05, m.white);
  const south = new THREE.Group(); south.position.z = 3.5; office.add(south);
  box(south, 4.2, 3.05, .2, -1.7, 1.525, 0, m.wall);
  box(south, 2.1, 3.05, .2, 2.75, 1.525, 0, m.wall);
  box(south, 1.3, .75, .2, 1.05, 2.675, 0, m.wall);
  for (const x of [.43, 1.67]) box(south, .09, 2.36, .25, x, 1.18, 0, m.white);
  box(south, 1.34, .1, .25, 1.05, 2.34, 0, m.white);
  const openDoor = new THREE.Group(); south.add(openDoor);
  openDoor.position.set(1.645, 0, -.02); openDoor.rotation.y = -Math.PI / 2;
  box(openDoor, 1.14, 2.26, .055, -.57, 1.13, 0, m.trim);
  rod(openDoor, [-1.02, 1.04, -.05], [-.85, 1.04, -.05], .018);
  box(office, 1.15, .022, .25, 1.05, .025, 3.5, m.oak);
  const ceiling = new THREE.Group(); office.add(ceiling);
  box(ceiling, 7.6, .12, 7, 0, 3.12, 0, m.wall);
  for (const x of [-2, 1.6]) box(ceiling, .18, .2, 7, x, 3, 0, m.white);
  ceiling.visible = false;
  meetingArea(office); lounge(office); details(office);
  const pendants = lamps(office);
  const hall = corridor(office);
  const toilets = createRestrooms(office);
  return { office, ceiling, pendants, hall, toilets, walls: [west, east, north, south] };
}
