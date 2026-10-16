import * as THREE from 'three';
import { box, cylinder, mesh, rod } from './geometry';
import { materials as m } from './materials';
import { plant } from './plants';
import { desks, workspacePlants, workspaceSofas } from './workspace-layout.mjs';
import { createWorkspaceShell } from './workspace-shell';

const leather = new THREE.MeshStandardMaterial({ color: '#a4815d', roughness: .8 });
const upholstery = new THREE.MeshStandardMaterial({ color: '#b49b7a', map: m.sofa.map, roughness: .95 });
const chairMesh = new THREE.MeshStandardMaterial({ color: '#353e3e', map: m.sofa.map, roughness: .9 });
const silver = new THREE.MeshStandardMaterial({ color: '#a7aeae', metalness: .6, roughness: .4 });
const mat = new THREE.MeshStandardMaterial({ color: '#b8bdb5', transparent: true, opacity: .4, roughness: .9, depthWrite: false });
const gold = new THREE.MeshStandardMaterial({ color: '#c5ad64', metalness: .65, roughness: .3 });

function chair(parent: THREE.Object3D, brown: boolean) {
  const cloth = brown ? leather : chairMesh;
  box(parent, .5, .1, .48, 0, .49, 0, cloth, .055);
  box(parent, .49, .43, .085, 0, .77, .22, cloth, .07).rotation.x = -.12;
  rod(parent, [0, .17, 0], [0, .46, 0], .035, m.black);
  for (let i = 0; i < 5; i++) {
    const angle = i * Math.PI * 2 / 5, x = Math.cos(angle) * .32, z = Math.sin(angle) * .32;
    rod(parent, [0, .16, 0], [x, .065, z], .023, m.black);
    cylinder(parent, .041, .041, .035, x, .041, z, m.black).rotation.z = Math.PI / 2;
  }
  for (const x of [-.29, .29]) {
    rod(parent, [x, .47, -.12], [x, .69, -.12], .014, m.black);
    box(parent, .075, .055, .34, x, .7, 0, cloth, .02);
    rod(parent, [x, .68, .15], [x, .47, .15], .014, m.black);
  }
}

function monitor(parent: THREE.Object3D, x: number, portrait = false, active = false) {
  const width = portrait ? .34 : .63, height = portrait ? .61 : .36;
  box(parent, .23, .025, .16, x, .795, -.17, m.black);
  rod(parent, [x, .81, -.17], [x, 1.09, -.17], .018, m.black);
  box(parent, width, height, .045, x, 1.17, -.17, m.black, .009);
  box(parent, width - .028, height - .028, .007, x, 1.17, -.143, active ? silver : m.screen);
  if (active) {
    // Abstract application windows: no personal screen content is reproduced.
    box(parent, width * .75, height * .52, .004, x, 1.2, -.137, m.white);
    box(parent, width * .75, .03, .004, x, 1.2 + height * .26, -.134, chairMesh);
  }
}

function workstation(parent: THREE.Object3D, desk: typeof desks[number], index: number) {
  const group = new THREE.Group(); parent.add(group); group.position.set(desk.x, 0, desk.z); group.rotation.y = desk.rotation;
  box(group, 1.6, .035, .8, 0, .755, 0, m.black, .009);
  for (const x of [-.66, .66]) {
    box(group, .06, .71, .065, x, .38, 0, silver);
    box(group, .09, .045, .65, x, .035, 0, m.metal, .015);
  }
  box(group, 1.3, .055, .05, 0, .56, -.17, m.metal);
  const portrait = desk.islandIndex === 5 && desk.side === 1;
  monitor(group, -.34, portrait, portrait); monitor(group, .34, portrait, portrait);
  box(group, .42, .018, .15, -.1, .785, .22, index % 4 ? m.black : m.white, .009);
  for (let row = 0; row < 4; row++) box(group, .38, .003, .008, -.1, .796, .167 + row * .029, silver);
  const mouse = mesh(group, new THREE.SphereGeometry(.045, 10, 6), m.black, .22, .802, .23); mouse.scale.set(.6, .4, 1);
  if (index % 3 === 0) {
    box(group, .3, .016, .22, -.6, .79, .2, silver);
    box(group, .3, .2, .014, -.6, .89, .095, m.black).rotation.x = -.12;
  }
  cylinder(group, .035, .03, .095, .63, .823, .18, index % 2 ? m.white : leather);
  if (index % 4 === 1) cylinder(group, .035, .035, .26, .6, .91, -.25, silver);
  const seat = new THREE.Group(); group.add(seat); seat.position.set(0, 0, .85); seat.rotation.y = index % 2 ? .07 : -.09;
  chair(seat, index % 3 !== 1);
  box(group, 1.45, .006, 1.1, 0, .027, .72, mat);
  cylinder(group, .12, .085, .26, .66, .145, .49, m.black);
  cylinder(group, .126, .126, .025, .66, .276, .49, silver);
  const cable = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.3, .74, -.3), new THREE.Vector3(.25, .15, -.3), new THREE.Vector3(.65, .14, -.22));
  mesh(group, new THREE.TubeGeometry(cable, 8, .007, 4, false), m.black, 0, 0, 0);
  if (index % 4 === 0) box(group, .22, .42, .4, .53, .23, -.18, m.black, .014);
  if (index === 5 || index === 11) {
    box(group, .13, .035, .13, .62, .8, -.28, m.black);
    cylinder(group, .045, .065, .08, .62, .86, -.28, gold);
    rod(group, [.62, .89, -.28], [.62, 1.06, -.28], .014, gold);
    cylinder(group, .08, .025, .13, .62, 1.1, -.28, gold);
  }
}

function mossWall(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group); group.position.set(-.485, 1.78, 19.75); group.rotation.y = Math.PI / 2;
  box(group, 2.05, 2.1, .07, 0, 0, 0, m.black);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512;
  const c = canvas.getContext('2d')!; c.fillStyle = '#20391b'; c.fillRect(0, 0, 512, 512);
  let seed = 89;
  const random = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  for (let i = 0; i < 1700; i++) {
    const x = random() * 512, y = random() * 512, r = 2 + random() * 20;
    c.fillStyle = `hsl(${74 + random() * 34} 42% ${15 + random() * 24}%)`;
    c.beginPath(); c.ellipse(x, y, r, r * (.5 + random()), random() * Math.PI, 0, Math.PI * 2); c.fill();
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  const moss = new THREE.MeshStandardMaterial({ map, bumpMap: map, bumpScale: .09, roughness: 1 });
  box(group, 1.97, 2.02, .025, 0, 0, .05, moss);
  const clumps = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshStandardMaterial({ roughness: 1 }), 110);
  const transform = new THREE.Object3D();
  for (let i = 0; i < 110; i++) {
    const r = .035 + random() * .085;
    transform.position.set((random() - .5) * 1.8, (random() - .5) * 1.85, .085);
    transform.scale.set(r, r, r * .55); transform.updateMatrix(); clumps.setMatrixAt(i, transform.matrix);
    clumps.setColorAt(i, new THREE.Color().setHSL(.21 + random() * .06, .45, .14 + random() * .16));
  }
  group.add(clumps);
  const guitar = new THREE.Group(); parent.add(guitar); guitar.position.set(-.43, 1.25, 18.05); guitar.rotation.y = Math.PI / 2;
  for (const [y, radius] of [[0, .17], [.2, .125]]) {
    const body = mesh(guitar, new THREE.SphereGeometry(radius, 16, 12), m.black, 0, y, 0); body.scale.set(1, 1.13, .25);
  }
  box(guitar, .055, .62, .035, 0, .55, 0, m.bark);
  cylinder(guitar, .05, .05, .008, 0, .14, .05, gold).rotation.x = Math.PI / 2;
  box(guitar, .08, .14, .04, 0, .9, 0, m.black, .01);
  for (let i = 0; i < 6; i++) rod(guitar, [-.02 + i * .008, .02, .06], [-.02 + i * .008, .93, .025], .0012, silver);
  box(parent, .4, .9, 1.1, -.27, .45, 22.6, m.white);
}

function sofa(parent: THREE.Object3D, spec: typeof workspaceSofas[number]) {
  const group = new THREE.Group(); parent.add(group); group.position.set(spec.x, 0, spec.z); group.rotation.y = spec.rotation;
  box(group, spec.width, .2, .86, 0, .28, 0, upholstery, .045);
  for (const x of [-spec.width / 4, spec.width / 4]) {
    box(group, spec.width / 2 - .045, .18, .67, x, .46, .06, upholstery, .055);
    box(group, spec.width / 2 - .05, .48, .15, x, .69, -.31, upholstery, .055).rotation.x = -.12;
  }
  for (const x of [-spec.width / 2, spec.width / 2]) {
    box(group, .13, .38, .86, x, .49, 0, upholstery, .045);
    for (const z of [-.32, .32]) rod(group, [x, .02, z], [x, .22, z], .018, m.black);
  }
  box(group, .34, .34, .13, spec.width * .32, .71, -.08, m.white, .045).rotation.z = -.18;
}

export function createWorkspace(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  const shell = createWorkspaceShell(group);
  desks.forEach((desk, index) => workstation(group, desk, index));
  for (const p of workspacePlants) {
    const foliage = new THREE.Group(); group.add(foliage);
    foliage.position.set(p.x, 0, p.z); foliage.scale.set(.65, 1, .65);
    plant(foliage, 0, 0, p.size);
  }
  mossWall(shell.west);
  workspaceSofas.forEach(spec => sofa(group, spec));
  cylinder(group, 1.46, 1.46, .018, 15.9, .035, 22.25, m.jute);
  box(group, .6, .055, 1.8, 15.3, .46, 22.55, m.oak, .01);
  for (const x of [15.07, 15.53]) for (const z of [21.8, 23.3]) rod(group, [x, .03, z], [x, .43, z], .019, m.black);
  const pouf = mesh(group, new THREE.SphereGeometry(1, 24, 12), m.sofa, 15.05, .3, 21.35); pouf.scale.set(.52, .32, .4);
  box(shell.east, .35, .65, 2.1, 17.07, .61, 19.05, m.white, .008);
  box(shell.east, .075, 1.05, 1.9, 17.19, 1.73, 19.05, m.black, .015);
  box(shell.east, .008, .99, 1.84, 17.147, 1.73, 19.05, m.screen);
  for (const z of [18.3, 19.1, 19.8]) box(shell.east, .012, .6, .008, 16.887, .61, z, m.trim);
  // A red framed print and the small bell are prominent end-of-room details.
  const print = new THREE.Group(); shell.east.add(print); print.position.set(17.14, 1.6, 20.6); print.rotation.y = -Math.PI / 2;
  box(print, .55, .85, .04, 0, 0, 0, m.white);
  const red = new THREE.MeshStandardMaterial({ color: '#b74937', roughness: .9 });
  box(print, .5, .8, .007, 0, 0, .025, red);
  for (const y of [-.12, .12]) for (let i = 0; i < 3; i++) box(print, .035, .16, .008, -.12 + i * .1, y + i * .025, .03, m.white).rotation.z = -.45;
  cylinder(group, .055, .12, .2, 7.9, 2.2, 19.7, gold);
  cylinder(group, .09, .11, .025, 7.9, 2.09, 19.7, gold);
  return shell;
}
