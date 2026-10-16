import * as THREE from 'three';
import { box, cylinder, mesh, rod } from './geometry';
import { materials as m } from './materials';
import { slab, partition, type CutawayWall } from './architecture';
import { day21 as room, day21Door as door, day21Meeting as meeting, day21MeetingDoor as meetingDoor, day21Nook as nook } from './layout.mjs';
import { day21Trusses, day21NorthPostZ, day21GlassRoom, day21GlassDoor, day21Stairs as stairs } from './day21-layout.mjs';
import { pineTexture } from './workspace-shell';

const timberMap = pineTexture(true);
const timber = new THREE.MeshStandardMaterial({ map: timberMap, color: '#8c796b', roughness: .96, bumpMap: timberMap, bumpScale: .04 });
const paleTimber = new THREE.MeshStandardMaterial({ map: timberMap, color: '#e7cd98', roughness: .85 });
const glass = new THREE.MeshStandardMaterial({ color: '#d9e5df', transparent: true, opacity: .13, roughness: .13, metalness: .1, depthWrite: false, side: THREE.DoubleSide });
const sky = new THREE.MeshStandardMaterial({ color: '#eef8ff', emissive: '#dceeff', emissiveIntensity: .8 });
const roofY = (z: number) => z <= 20.55 ? room.height : room.height - (z - 20.55) * 1.8 / (room.maxZ - 20.55);
function beam(parent: THREE.Object3D, a: number[], b: number[], width = .24, material = timber) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
  const centre = start.clone().add(end).multiplyScalar(.5);
  const obj = box(parent, width, start.distanceTo(end), width, centre.x, centre.y, centre.z, material);
  obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.sub(start).normalize());
}
function roofPiece(parent: THREE.Object3D, left: number, right: number, back: number, front: number, material = m.wall) {
  const drop = roofY(back) - roofY(front);
  const obj = box(parent, right - left, .1, Math.hypot(front - back, drop), (left + right) / 2, (roofY(back) + roofY(front)) / 2, (back + front) / 2, material);
  obj.rotation.x = Math.atan2(drop, front - back);
}
function glazing(parent: THREE.Object3D, axis: 'x' | 'z', at: number, from: number, to: number, opening?: [number, number]) {
  const group = new THREE.Group(); parent.add(group);
  const panel = (a: number, b: number) => {
    if (b <= a) return;
    const count = Math.ceil((b - a) / 1.3), width = (b - a) / count;
    for (let i = 0; i < count; i++) {
      const centre = a + (i + .5) * width;
      const p = box(group, axis === 'z' ? width : .018, 2.45, axis === 'x' ? width : .018, axis === 'x' ? at : centre, 1.25, axis === 'z' ? at : centre, glass);
      p.castShadow = false;
      for (const edge of [centre - width / 2, centre + width / 2]) box(group, axis === 'z' ? .035 : .055, 2.55, axis === 'x' ? .035 : .055, axis === 'x' ? at : edge, 1.275, axis === 'z' ? at : edge, m.black);
    }
    for (const y of [.04, 2.53]) box(group, axis === 'z' ? b - a : .055, .045, axis === 'x' ? b - a : .055, axis === 'x' ? at : (a + b) / 2, y, axis === 'z' ? at : (a + b) / 2, m.black);
  };
  if (opening) { panel(from, opening[0]); panel(opening[1], to); }
  else panel(from, to);
  return group;
}

export function createDay21Shell(parent: THREE.Object3D) {
  const walls: CutawayWall[] = [], ceiling = new THREE.Group(); parent.add(ceiling);
  const floorMap = pineTexture(false); floorMap.repeat.set(4.2, 2.8); floorMap.rotation = Math.PI / 2;
  const floor = new THREE.MeshStandardMaterial({ map: floorMap, roughness: .72, bumpMap: floorMap, bumpScale: .013 });
  for (const bounds of [room, door, meeting, meetingDoor, nook]) slab(parent, bounds, floor);
  const northWest = partition(parent, walls, 'z', room.minZ - .1, room.minX, meeting.minX, 1, room.height);
  const northEast = partition(parent, walls, 'z', room.minZ - .1, nook.maxX, room.maxX, 1, room.height);
  partition(parent, walls, 'z', meeting.minZ - .1, meeting.minX, nook.maxX, 1, room.height);
  partition(parent, walls, 'x', meeting.minX - .1, meeting.minZ, room.minZ, 1, room.height);
  partition(parent, walls, 'x', nook.maxX + .1, nook.minZ, room.minZ, -1, room.height);
  const south = partition(parent, walls, 'z', room.maxZ + .1, room.minX, room.maxX, -1, 1.6);
  const west = new THREE.Group(); parent.add(west); walls.push({ group: west, axis: 'x', position: room.minX, inside: 1 });
  const end = new THREE.Shape(); end.moveTo(room.minZ, 0); end.lineTo(room.maxZ, 0); end.lineTo(room.maxZ, 1.6); end.lineTo(20.55, room.height); end.lineTo(room.minZ, room.height); end.closePath();
  mesh(west, new THREE.ExtrudeGeometry(end, { depth: .2, bevelEnabled: false }), m.wall, room.minX, 0, 0).rotation.y = -Math.PI / 2;
  const east = partition(parent, walls, 'x', room.maxX + .1, room.minZ, room.maxZ, -1, room.height, [door.minZ, door.maxZ]);
  const thickness = door.maxX - door.minX, centreX = (door.minX + door.maxX) / 2;
  for (const z of [door.minZ - .035, door.maxZ + .035]) box(parent, thickness, 2.27, .07, centreX, 1.135, z, m.white);
  box(parent, thickness, .08, door.maxZ - door.minZ + .14, centreX, 2.29, (door.minZ + door.maxZ) / 2, m.white);
  // The door is folded against the wall, leaving the filmed route open.
  box(east, .06, 2.18, 1.1, room.maxX - .05, 1.09, door.maxZ + .55, m.white);
  rod(east, [room.maxX - .095, 1.02, door.maxZ + .83], [room.maxX - .095, 1.02, door.maxZ + 1.0], .013);
  const meetingFront = glazing(parent, 'z', meeting.maxZ + .1, meeting.minX, meeting.maxX, [meetingDoor.minX, meetingDoor.maxX]);
  walls.push({ group: meetingFront, axis: 'z', position: meeting.maxZ, inside: -1 });
  glazing(parent, 'x', meeting.maxX + .1, meeting.minZ, meeting.maxZ);
  glazing(parent, 'z', day21GlassRoom.minZ, day21GlassRoom.minX, day21GlassRoom.maxX, [day21GlassDoor.minX, day21GlassDoor.maxX]);
  glazing(parent, 'x', day21GlassRoom.minX, day21GlassRoom.minZ, day21GlassRoom.maxZ);
  // A folded glass leaf runs beside the entrance instead of across the passage.
  glazing(parent, 'x', day21GlassDoor.minX, day21GlassRoom.minZ - .96, day21GlassRoom.minZ);
  for (const [back, front] of [[room.minZ, 18.25], [19.2, 20.55], [20.55, 22.2], [23.15, room.maxZ]]) roofPiece(ceiling, room.minX, room.maxX, back, front);
  for (const [back, front] of [[18.25, 19.2], [22.2, 23.15]]) {
    let left = room.minX;
    for (const x of [...day21Trusses].reverse()) {
      roofPiece(ceiling, left, x - .5, back, front);
      roofPiece(ceiling, x - .5, x + .5, back, front, sky);
      for (const edge of [x - .5, x + .5]) roofPiece(ceiling, edge - .035, edge + .035, back, front, m.white);
      for (const z of [back, front]) roofPiece(ceiling, x - .5, x + .5, z - .035, z + .035, m.white);
      left = x + .5;
    }
    roofPiece(ceiling, left, room.maxX, back, front);
  }
  roofPiece(ceiling, meeting.minX, nook.maxX, meeting.minZ, room.minZ);
  for (const x of day21Trusses) {
    const northZ = day21NorthPostZ(x);
    beam(parent, [x, 0, northZ], [x, 3.3, northZ], .27);
    beam(parent, [x - 1.0, 0, northZ], [x, 2.6, northZ], .22);
    beam(parent, [x, 2.63, northZ], [x, 2.63, 20.55], .26);
    beam(parent, [x, 0, 20.55], [x, 3.35, 22.05], .26);
    beam(parent, [x, 0, 24.15], [x, 3.35, 22.05], .25);
    beam(parent, [x, 2.7, 20.5], [x, 2.7, 23.35], .22);
    for (const z of [northZ, 20.55]) cylinder(parent, .027, .027, .28, x, 2.6, z, m.black).rotation.z = Math.PI / 2;
  }
  beam(parent, [room.minX, .08, 20.55], [room.maxX, .08, 20.55], .16);
  for (const x of [-7.9, -11.7, -15.5, -19.3, -23.1]) {
    rod(ceiling, [x, 3.3, 22], [x, 2.75, 22], .009, m.white);
    mesh(ceiling, new THREE.SphereGeometry(.19, 20, 12), m.light, x, 2.59, 22);
  }
  for (const x of [-9, -19.5]) {
    box(ceiling, .95, .07, .95, x, 3.31, 19.8, m.white);
    for (let i = 0; i < 15; i++) box(ceiling, .62, .009, .013, x, 3.267, 19.52 + i * .04, m.trim);
  }
  for (const x of [-2.5, -8.5, -12.5, -17.5, -22.5, -26]) box(south, 1.6, .55, .1, x, .65, room.maxZ - .06, m.white);
  // Open timber stair and upper landing are visible architectural features; the tour stays on this floor.
  const stone = new THREE.MeshStandardMaterial({ color: '#c7c5b9', roughness: 1 });
  box(parent, 3.5, .04, 1.55, -14.8, .04, 19.8, stone);
  for (let i = 0; i < 12; i++) box(parent, .25, .055, 1.0, stairs.maxX - .12 - i * .25, .19 + i * .235, 19.87, m.black);
  for (const z of [19.3, 20.43]) {
    beam(parent, [stairs.maxX, .08, z], [stairs.minX, 2.93, z], .13, paleTimber);
    beam(parent, [stairs.maxX, .95, z], [stairs.minX, 3.8, z], .075, paleTimber);
    for (let i = 0; i < 12; i++) rod(parent, [stairs.maxX - i * .25, .2 + i * .235, z], [stairs.maxX - i * .25, 1 + i * .235, z], .013, m.white);
  }
  for (const x of [stairs.minX, stairs.maxX]) beam(parent, [x, 0, 20.5], [x, 3.4, 20.5], .18, paleTimber);
  box(ceiling, 3.8, .16, 2.2, -14.8, 3.25, 20.05, paleTimber);
  for (let x = -16.6; x < -12.9; x += .18) rod(ceiling, [x, 3.3, 18.95], [x, 4.12, 18.95], .014, m.white);
  box(ceiling, 3.8, .065, .075, -14.8, 4.16, 18.95, paleTimber);
  return { walls, roof: ceiling, west, south, northWest, northEast };
}
