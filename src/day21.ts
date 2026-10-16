import * as THREE from 'three';
import { box, cylinder, mesh, rod } from './geometry';
import { materials as m } from './materials';
import { plant } from './plants';
import { workstation } from './workspace';
import { createDay21Shell } from './day21-shell';
import { day21Desks, day21Plants, day21Tables } from './day21-layout.mjs';

const mustard = new THREE.MeshStandardMaterial({ color: '#bd9b4f', map: m.sofa.map, roughness: .95 });
const grey = new THREE.MeshStandardMaterial({ color: '#a4a49e', map: m.sofa.map, roughness: .95 });
const steel = new THREE.MeshStandardMaterial({ color: '#bdc1bf', metalness: .65, roughness: .35 });
function diningChair(parent: THREE.Object3D, x: number, z: number, rotation: number) {
  const g = new THREE.Group(); parent.add(g); g.position.set(x, 0, z); g.rotation.y = rotation;
  box(g, .46, .07, .44, 0, .46, 0, m.black, .06);
  box(g, .45, .37, .06, 0, .7, -.19, m.black, .055).rotation.x = -.1;
  for (const dx of [-.19, .19]) for (const dz of [-.17, .17]) rod(g, [dx, .44, dz], [dx * 1.2, .03, dz * 1.3], .012, steel);
}
function meetingTable(parent: THREE.Object3D, spec: typeof day21Tables[number]) {
  const g = new THREE.Group(); parent.add(g); g.position.set(spec.x, 0, spec.z); g.rotation.y = spec.rotation;
  if (spec.x > -7) box(g, spec.width + .6, .012, spec.depth + 1.6, 0, .031, 0, grey);
  box(g, spec.width, .04, spec.depth, 0, .75, 0, spec.white ? m.white : m.black, .025);
  for (const x of [-spec.width / 2 + .15, spec.width / 2 - .15]) for (const z of [-spec.depth / 2 + .1, spec.depth / 2 - .1]) rod(g, [x, .73, z], [x, .03, z], .026, m.black);
  for (let i = 0; i < spec.chairs; i++) for (const side of [-1, 1]) diningChair(g, (i - (spec.chairs - 1) / 2) * .66, side * (spec.depth / 2 + .35), side < 0 ? 0 : Math.PI);
  box(g, .26, .012, .2, .2, .78, 0, m.black);
  for (const x of [-.55, .55]) cylinder(g, .035, .03, .09, x, .815, .12, m.white);
}
function sofa(parent: THREE.Object3D, x: number, z: number, rotation: number, fabric: THREE.Material) {
  const g = new THREE.Group(); parent.add(g); g.position.set(x, 0, z); g.rotation.y = rotation;
  box(g, 2.1, .17, .86, 0, .3, 0, fabric, .035);
  box(g, 2.1, .6, .13, 0, .6, -.37, fabric, .04);
  for (const x of [-.52, .52]) {
    box(g, .98, .16, .68, x, .46, .06, m.sofa, .045);
    box(g, .95, .4, .14, x, .68, -.21, m.sofa, .045).rotation.x = -.15;
  }
  for (const x of [-1.04, 1.04]) {
    box(g, .07, .07, .83, x, .65, 0, m.oak);
    for (const z of [-.33, .33]) box(g, .055, .65, .055, x, .34, z, m.oak);
  }
}
function graphicTexture(type: 'rug' | 'print' | 'brick') {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 256;
  const c = canvas.getContext('2d')!;
  c.fillStyle = type === 'rug' ? '#353936' : type === 'print' ? '#ceaaa8' : '#d9d4b9'; c.fillRect(0, 0, 512, 256);
  if (type === 'brick') {
    for (let row = 0; row < 12; row++) for (let col = -1; col < 9; col++) {
      c.fillStyle = ['#d1cbb1', '#e5e0ca', '#c9c5af', '#d9d7c3'][(row * 7 + col + 9) % 4];
      c.fillRect(col * 64 + row % 2 * 32, row * 23, 61, 20);
    }
  } else if (type === 'rug') {
    // The walkthrough's dark graphic rug, with simplified pale map-like shapes.
    c.fillStyle = '#c4cfa3';
    for (const [x, y, w, h] of [[75, 70, 55, 35], [120, 150, 22, 55], [250, 80, 30, 23], [260, 145, 27, 48], [340, 80, 75, 40], [405, 190, 33, 21]]) {
      c.beginPath(); c.ellipse(x, y, w, h, -.3, 0, Math.PI * 2); c.fill();
    }
    c.strokeStyle = '#eeeee8'; c.lineWidth = 1;
    for (let y = 35; y < 240; y += 35) { c.beginPath(); c.moveTo(20, y); c.lineTo(490, y); c.stroke(); }
  } else {
    c.fillStyle = '#4f4c48'; c.font = 'bold 110px sans-serif'; c.textAlign = 'center'; c.fillText('D / 21', 256, 165);
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; return map;
}
export function createDay21(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  const shell = createDay21Shell(group);
  day21Desks.forEach((desk, i) => workstation(group, desk, i + 20));
  day21Tables.forEach(table => meetingTable(group, table));
  for (const p of day21Plants) {
    const g = new THREE.Group(); group.add(g); g.position.set(p.x, 0, p.z); g.scale.set(.65, 1, .65); plant(g, 0, 0, p.size);
  }
  // Movable monitor in the entrance glass room.
  box(group, .07, .86, 1.45, -6.15, 1.48, 22.25, m.black, .015);
  box(group, .008, .8, 1.39, -6.108, 1.48, 22.25, m.screen);
  rod(group, [-6.15, .1, 22.25], [-6.15, 1.35, 22.25], .035, steel);
  for (const z of [21.83, 22.67]) rod(group, [-6.4, .08, z], [-5.9, .08, z], .023, m.black);
  box(shell.west, .065, .83, 1.45, -27.98, 1.8, 22.25, m.black, .015);
  box(shell.west, .008, .77, 1.39, -27.94, 1.8, 22.25, m.screen);
  sofa(group, -21.45, 22.35, -Math.PI / 2, mustard);
  const rug = new THREE.MeshStandardMaterial({ map: graphicTexture('rug'), roughness: 1 });
  box(group, 3.9, .012, 1.8, -23.5, .035, 22.3, rug);
  cylinder(group, .47, .47, .035, -22.95, .44, 22.3, m.oak);
  for (const z of [22.03, 22.57]) for (const x of [-23.22, -22.68]) rod(group, [x, .03, z], [x, .42, z], .014);
  cylinder(group, .19, .19, .035, -23.6, .04, 20.95, m.black);
  rod(group, [-23.6, .06, 20.95], [-23.6, 1.85, 20.95], .014, m.black);
  rod(group, [-23.6, 1.85, 20.95], [-22.9, 1.85, 20.95], .012, m.black);
  cylinder(group, .13, .23, .18, -22.9, 1.75, 20.95, m.white);
  // Coffee counter against the far end, with a light worktop, sink and coffee machine.
  const coffee = new THREE.Group(); shell.west.add(coffee); coffee.position.set(-27.7, 0, 19); coffee.rotation.y = Math.PI / 2;
  box(coffee, 2.3, .82, .6, 0, .44, 0, grey);
  box(coffee, 2.36, .04, .65, 0, .87, 0, m.white);
  for (const x of [-.77, 0, .77]) { box(coffee, .74, .75, .025, x, .46, .315, grey); box(coffee, .15, .025, .035, x, .74, .34, steel); }
  box(coffee, .54, .025, .36, -.6, .895, 0, m.metal);
  rod(coffee, [-.6, .91, -.2], [-.6, 1.18, -.2], .018, steel);
  rod(coffee, [-.6, 1.18, -.2], [-.6, 1.18, .04], .018, steel);
  box(coffee, .42, .48, .36, .65, 1.13, -.07, m.black, .02);
  box(coffee, .32, .15, .016, .65, 1.25, .119, steel);
  cylinder(coffee, .045, .035, .1, .65, .94, .17, m.white);
  for (const y of [1.55, 1.9]) { box(coffee, 1.1, .035, .22, 0, y, -.23, m.white); for (const x of [-.35, 0, .35]) cylinder(coffee, .04, .035, .09, x, y + .06, -.23, m.white); }
  box(shell.northWest, 3, .8, .45, -24.1, .43, 17.92, m.white);
  for (const x of [-25.55, -24.55, -23.55, -22.65]) box(shell.northWest, .013, .73, .01, x, .45, 18.151, m.trim);
  const print = new THREE.MeshStandardMaterial({ map: graphicTexture('print'), roughness: .95 });
  for (const x of [-25.05, -23.25]) { box(shell.northWest, 1.02, 1.3, .035, x, 1.92, 17.72, m.black); box(shell.northWest, .94, 1.22, .008, x, 1.92, 17.744, print); }
  sofa(group, -10.85, 15.6, 0, grey);
  cylinder(group, 1.35, 1.35, .013, -10.9, .03, 16.55, m.rug);
  const ottoman = mesh(group, new THREE.SphereGeometry(1, 24, 12), grey, -10.8, .29, 17.0); ottoman.scale.set(.5, .3, .37);
  const brickMap = graphicTexture('brick'); brickMap.wrapS = brickMap.wrapT = THREE.RepeatWrapping; brickMap.repeat.set(1, 2);
  const brick = new THREE.MeshStandardMaterial({ map: brickMap, bumpMap: brickMap, bumpScale: .022, roughness: 1 });
  box(group, .9, 2.8, 1.28, -9.05, 1.4, 15.46, brick);
  const yellow = new THREE.MeshStandardMaterial({ color: '#c3a44c', roughness: .95 });
  box(group, 2.9, 2.45, .045, -15.2, 1.225, 14.84, yellow);
  box(group, 1.18, .73, .055, -15.2, 1.65, 14.88, m.black);
  box(group, 1.12, .67, .008, -15.2, 1.65, 14.914, m.screen);
  // Small round table at the entrance and a coat rack beside the stairs.
  cylinder(group, .3, .3, .035, -2.7, .51, 18.1, m.white);
  for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; rod(group, [-2.7 + Math.cos(a) * .24, .03, 18.1 + Math.sin(a) * .24], [-2.7 + Math.cos(a) * .15, .5, 18.1 + Math.sin(a) * .15], .018, m.oak); }
  for (const x of [-17.7, -16.9]) rod(group, [x, .04, 18.05], [x, 1.7, 18.05], .018, m.black);
  rod(group, [-17.7, 1.7, 18.05], [-16.9, 1.7, 18.05], .018, m.black);
  for (const x of [-17.5, -17.15]) box(group, .32, .85, .15, x, 1.12, 18.05, x < -17.3 ? m.black : grey, .05);
  return shell;
}
