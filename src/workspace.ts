import * as THREE from 'three';
import { box, cylinder, mesh, rod } from './geometry';
import { materials as m } from './materials';
import { plant } from './plants';
import { desks, deskIslands, deskSize, chairOffset, workspacePlants, workspaceSofas } from './workspace-layout.mjs';
import { createWorkspaceShell } from './workspace-shell';
import { createProximityWallpaper } from './proximity-wallpaper.mjs';
import { youtubeWallpaper } from './youtube-wallpaper';
import { instanceStatic } from './static-instances.mjs';
import { lazyScreens } from './lazy-screens';
import { registerImage } from './image-assets';
import pinupUrl from './assets/thrane-pixel-pinup.webp';
import childrenUrl from './assets/thrane-children.webp';
import astroLogoUrl from './assets/astro-logo.png';
import wiibroePilsnerUrl from './assets/wiibroe-pilsner.webp';
import wiibroe2026Url from './assets/wiibroe-2026.webp';
import graphsUrl from './assets/annie-graphs.svg';
import diagramsUrl from './assets/annie-diagrams.svg';

const leather = new THREE.MeshStandardMaterial({ color: '#a4815d', roughness: .8 });
const upholstery = new THREE.MeshStandardMaterial({ color: '#b49b7a', map: m.sofa.map, roughness: .95 });
const chairMesh = new THREE.MeshStandardMaterial({ color: '#353e3e', map: m.sofa.map, roughness: .9 });
const silver = new THREE.MeshStandardMaterial({ color: '#a7aeae', metalness: .6, roughness: .4 });
const mat = new THREE.MeshStandardMaterial({ color: '#b8bdb5', transparent: true, opacity: .4, roughness: .9, depthWrite: false });
const gold = new THREE.MeshStandardMaterial({ color: '#c5ad64', metalness: .65, roughness: .3 });

function logoWallpaper(url: string, background: string, crop?: [number, number, number, number], caption?: string) {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 565;
  const context = canvas.getContext('2d')!;
  context.fillStyle = background; context.fillRect(0, 0, canvas.width, canvas.height);
  const imageHeight = caption ? canvas.height - 150 : canvas.height;
  if (caption) {
    context.fillStyle = '#f5edff'; context.font = '700 64px Arial, sans-serif'; context.textAlign = 'center';
    context.fillText(caption, canvas.width / 2, canvas.height - 65, canvas.width * .86);
  }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const use = registerImage(url, image => {
    const [x, y, width, height] = crop ?? [0, 0, image.width, image.height];
    const scale = Math.min(canvas.width / width, imageHeight / height) * .84;
    context.drawImage(image, x, y, width, height,
      (canvas.width - width * scale) / 2, (imageHeight - height * scale) / 2, width * scale, height * scale);
    texture.needsUpdate = true;
  });
  const material = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
  material.userData.imageUses = [use];
  return material;
}

function screenWallpaper(url: string) {
  const map = new THREE.TextureLoader().load(url);
  map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map, toneMapped: false });
}

function chair(parent: THREE.Object3D, brown: boolean) {
  const cloth = brown ? leather : chairMesh;
  box(parent, .5, .1, .48, 0, .49, 0, cloth, .055);
  box(parent, .49, .43, .085, 0, .77, .22, cloth, .07).rotation.x = -.12;
  rod(parent, [0, .17, 0], [0, .46, 0], .035, m.black);
  for (let i = 0; i < 5; i++) {
    const angle = i * Math.PI * 2 / 5, x = Math.cos(angle) * .32, z = Math.sin(angle) * .32;
    rod(parent, [0, .16, 0], [x, .065, z], .023, m.black);
    cylinder(parent, .041, .041, .035, x, .041, z, m.black, { cast: false }).rotation.z = Math.PI / 2;
  }
  for (const x of [-.29, .29]) {
    rod(parent, [x, .47, -.12], [x, .69, -.12], .014, m.black);
    box(parent, .075, .055, .34, x, .7, 0, cloth, .02);
    rod(parent, [x, .68, .15], [x, .47, .15], .014, m.black);
  }
}

function monitor(parent: THREE.Object3D, x: number, portrait = false, active = false, wallpaper?: THREE.Material, upper = false, quadrant?: [number, number]) {
  const width = portrait ? .34 : .63, height = portrait ? .61 : .36;
  const y = upper ? 1.56 : 1.17;
  if (!upper) box(parent, .23, .025, .16, x, .795, -.17, m.black, 0, { cast: false });
  rod(parent, [x, upper ? 1.09 : .81, -.20], [x, y - .08, -.20], .018, m.black, { cast: false });
  const panel = new THREE.Group(); parent.add(panel); panel.position.set(x, y, -.17);
  if (upper) panel.rotation.x = .06;
  box(panel, width, height, .045, 0, 0, 0, m.black, .009);
  box(panel, width - .028, height - .028, .007, 0, 0, .027, active ? silver : m.screen);
  let display: THREE.Mesh | undefined;
  if (wallpaper) {
    const geometry = new THREE.PlaneGeometry(width - .028, height - .028);
    if (quadrant) {
      // UVs start at the bottom left; all four panels share one complete wallpaper.
      const uv = geometry.getAttribute('uv');
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) + quadrant[0]) / 2, (uv.getY(i) + quadrant[1]) / 2);
    }
    display = mesh(panel, geometry, wallpaper, 0, 0, .032);
    display.castShadow = false; display.receiveShadow = false;
    wallpaper.userData.imageUses?.forEach((use: { screen: THREE.Object3D }) => { use.screen = display!; });
  }
  if (active && !wallpaper) {
    // Abstract application windows: no personal screen content is reproduced.
    box(panel, width * .75, height * .52, .004, 0, .03, .033, m.white);
    box(panel, width * .75, .03, .004, 0, .03 + height * .26, .036, chairMesh);
  }
  return display;
}

function laptop(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group); group.position.set(-.51, .79, .18);
  box(group, .32, .016, .23, 0, 0, 0, silver, .006);
  box(group, .27, .003, .095, 0, .01, -.035, m.black, .003);
  for (let row = 0; row < 4; row++) box(group, .25, .002, .004, 0, .012, -.067 + row * .022, silver, 0, { cast: false });
  box(group, .095, .002, .055, 0, .01, .065, chairMesh, .003);
  const lid = new THREE.Group(); group.add(lid); lid.position.set(0, .008, -.11); lid.rotation.x = -.16;
  box(lid, .32, .21, .013, 0, .105, 0, m.black, .006);
  box(lid, .293, .178, .003, 0, .107, .009, m.screen);
  cylinder(lid, .002, .002, .002, 0, .2, .009, silver).rotation.x = Math.PI / 2;
}

export function workstation(parent: THREE.Object3D, desk: typeof desks[number], index: number, wallpaper?: THREE.Material | THREE.Material[], screenLayout: 'dual' | 'quad' | 'spanned' = 'dual') {
  const group = new THREE.Group(); parent.add(group); group.position.set(desk.x, 0, desk.z); group.rotation.y = desk.rotation;
  box(group, deskSize.width, .035, deskSize.depth, 0, .755, 0, m.black, .009);
  const legOffset = deskSize.width / 2 - .14;
  for (const x of [-legOffset, legOffset]) {
    box(group, .06, .71, .065, x, .38, 0, silver);
    box(group, .09, .045, deskSize.depth - .15, x, .035, 0, m.metal, .015);
  }
  box(group, deskSize.width - .3, .055, .05, 0, .56, -.17, m.metal);
  const portrait = desk.islandIndex === 5 && desk.side === 1;
  const wallpapers = Array.isArray(wallpaper) ? wallpaper : [wallpaper];
  const fourScreens = screenLayout !== 'dual';
  const spanWallpaper = screenLayout === 'spanned';
  const display = monitor(group, -.34, portrait, portrait, wallpapers[0], false, spanWallpaper ? [0, 0] : undefined);
  const secondaryDisplay = monitor(group, .34, portrait, portrait, spanWallpaper ? wallpapers[0] : wallpapers[1], false, spanWallpaper ? [1, 0] : undefined);
  if (fourScreens) {
    monitor(group, -.34, false, false, spanWallpaper ? wallpapers[0] : wallpapers[2], true, spanWallpaper ? [0, 1] : undefined);
    monitor(group, .34, false, false, spanWallpaper ? wallpapers[0] : wallpapers[3], true, spanWallpaper ? [1, 1] : undefined);
  }
  box(group, .42, .018, .15, -.1, .785, .17, index % 4 ? m.black : m.white, .009, { cast: false });
  for (let row = 0; row < 4; row++) box(group, .38, .003, .008, -.1, .796, .117 + row * .029, silver, 0, { cast: false });
  const mouse = mesh(group, new THREE.SphereGeometry(.045, 10, 6), m.black, .22, .802, .18, { cast: false }); mouse.scale.set(.6, .4, 1);
  if (fourScreens) laptop(group);
  else if (index % 3 === 0) {
    box(group, .3, .016, .22, -.53, .79, .15, silver);
    box(group, .3, .2, .014, -.53, .89, .045, m.black).rotation.x = -.12;
  }
  cylinder(group, .035, .03, .095, .6, .823, .13, index % 2 ? m.white : leather, { cast: false });
  if (index % 4 === 1) cylinder(group, .035, .035, .26, .58, .91, -.22, silver, { cast: false });
  const seat = new THREE.Group(); group.add(seat); seat.position.set(0, 0, chairOffset); seat.rotation.y = index % 2 ? .07 : -.09;
  chair(seat, index % 3 !== 1);
  box(group, deskSize.width - .15, .006, .95, 0, .027, chairOffset - .1, mat);
  cylinder(group, .12, .085, .26, .56, .145, .42, m.black);
  cylinder(group, .126, .126, .025, .56, .276, .42, silver);
  const cable = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.3, .74, -.25), new THREE.Vector3(.25, .15, -.25), new THREE.Vector3(.55, .14, -.17));
  mesh(group, new THREE.TubeGeometry(cable, 8, .007, 4, false), m.black, 0, 0, 0, { cast: false });
  if (index % 4 === 0) box(group, .22, .42, .4, .43, .23, -.13, m.black, .014);
  if (index === 5 || index === 11) {
    box(group, .13, .035, .13, .58, .8, -.23, m.black);
    cylinder(group, .045, .065, .08, .58, .86, -.23, gold);
    rod(group, [.58, .89, -.23], [.58, 1.06, -.23], .014, gold);
    cylinder(group, .08, .025, .13, .58, 1.1, -.23, gold);
  }
  return { display, secondaryDisplay };
}

function mossWall(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group); group.position.set(-.485, 1.78, 20.3); group.rotation.y = Math.PI / 2;
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
  const guitar = new THREE.Group(); parent.add(guitar); guitar.position.set(-.43, 1.25, 21.65); guitar.rotation.y = Math.PI / 2;
  for (const [y, radius] of [[0, .17], [.2, .125]]) {
    const body = mesh(guitar, new THREE.SphereGeometry(radius, 16, 12), m.black, 0, y, 0); body.scale.set(1, 1.13, .25);
  }
  box(guitar, .055, .62, .035, 0, .55, 0, m.bark);
  cylinder(guitar, .05, .05, .008, 0, .14, .05, gold).rotation.x = Math.PI / 2;
  box(guitar, .08, .14, .04, 0, .9, 0, m.black, .01);
  for (let i = 0; i < 6; i++) rod(guitar, [-.02 + i * .008, .02, .06], [-.02 + i * .008, .93, .025], .0012, silver, { cast: false });
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
  const placeholder = document.createElement('canvas'); placeholder.width = placeholder.height = 2;
  const context = placeholder.getContext('2d')!; context.fillStyle = '#283d45'; context.fillRect(0, 0, 2, 2);
  const pinup = new THREE.Texture<HTMLImageElement | HTMLCanvasElement>(placeholder); pinup.needsUpdate = true;
  const pinupUse = registerImage(pinupUrl, image => { pinup.image = image; pinup.needsUpdate = true; });
  pinup.colorSpace = THREE.SRGBColorSpace;
  pinup.magFilter = THREE.NearestFilter;
  const children = new THREE.Texture<HTMLImageElement | HTMLCanvasElement>(placeholder); children.needsUpdate = true;
  const childrenUse = registerImage(childrenUrl, image => { children.image = image; children.needsUpdate = true; });
  children.colorSpace = THREE.SRGBColorSpace;
  const wallpaper = new THREE.MeshBasicMaterial({ map: pinup, toneMapped: false });
  wallpaper.userData.imageUses = [pinupUse, childrenUse];
  let updateThraneScreen = (_cameraPosition: THREE.Vector3) => false;
  const palmScreens = lazyScreens('Palm', 2, () => import('./palm-screens'), ({ PalmScreens }) => new PalmScreens());
  const nicolaiScreens = lazyScreens('Nicolai', 2, () => import('./nicolai-screens'), ({ NicolaiScreens }) => new NicolaiScreens());
  const anjaScreens = lazyScreens('Anja', 2, () => import('./anja-screens'), ({ AnjaScreens }) => new AnjaScreens());
  const jesperScreen = lazyScreens('Jesper', 2, () => import('./jesper-screen'), ({ JesperScreen }) => new JesperScreen());
  const holbechScreens = lazyScreens('Holbech', 2, () => import('./holbech-screens'), ({ HolbechScreens }) => new HolbechScreens());
  const henrikScreens = lazyScreens('Henrik', 2, () => import('./henrik-screens'), ({ HenrikScreens }) => new HenrikScreens());
  const thraneScreens = lazyScreens('Thrane', 3, () => import('./thrane-screens'), ({ ThraneScreens }) => new ThraneScreens());
  const larsScreens = lazyScreens('Lars', 4, () => import('./lars-screens'), ({ LarsScreens }) => new LarsScreens());
  const thraneWallpapers = [wallpaper, ...thraneScreens.materials];
  const astroWallpaper = logoWallpaper(astroLogoUrl, '#171426', undefined, 'Det kan laves i CSS');
  const martinWallpapers = [astroWallpaper, youtubeWallpaper()];
  let martinScreen!: THREE.Mesh;
  const wiibroeWallpapers: [THREE.Material, THREE.Material] = [
    logoWallpaper(wiibroePilsnerUrl, '#f3edda'),
    logoWallpaper(wiibroe2026Url, '#172d21'),
  ];
  const annieWallpapers: [THREE.Material, THREE.Material] = [screenWallpaper(graphsUrl), screenWallpaper(diagramsUrl)];
  desks.forEach((desk, index) => {
    // Seat references follow ressources/locations.png; north is up on that plan.
    const isThrane = desk.islandIndex === 5 && desk.side === -1;
    const isAnja = desk.islandIndex === 5 && desk.side === 1;
    const isAnnie = desk.islandIndex === 1 && desk.side === -1 && desk.z > deskIslands[1].z;
    const isHenrik = desk.islandIndex === 0 && desk.side === 1 && desk.z < deskIslands[0].z;
    const isLars = desk.islandIndex === 2 && desk.side === 1 && desk.z > deskIslands[2].z;
    const isMartin = desk.islandIndex === 2 && desk.side === 1 && desk.z < deskIslands[2].z;
    const isPalm = desk.islandIndex === 1 && desk.side === 1 && desk.z < deskIslands[1].z;
    const isNicolai = desk.islandIndex === 1 && desk.side === -1 && desk.z < deskIslands[1].z;
    const isHolbech = desk.islandIndex === 1 && desk.side === 1 && desk.z > deskIslands[1].z;
    const isDavid = desk.islandIndex === 0 && desk.side === -1 && desk.z < deskIslands[0].z;
    const isJesper = desk.islandIndex === 4 && desk.side === 1;
    const { display, secondaryDisplay } = workstation(group, desk, index, isAnja ? anjaScreens.materials : isAnnie ? annieWallpapers : isThrane ? thraneWallpapers : isHenrik ? henrikScreens.materials : isLars ? larsScreens.materials : isMartin ? martinWallpapers : isPalm ? palmScreens.materials : isNicolai ? nicolaiScreens.materials : isHolbech ? holbechScreens.materials : isDavid ? wiibroeWallpapers : isJesper ? jesperScreen.materials : undefined, isLars || isThrane ? 'quad' : 'dual');
    if (isMartin && secondaryDisplay) { martinScreen = secondaryDisplay; martinScreen.name = 'martin-youtube-screen'; }
    if (isThrane && display) {
      updateThraneScreen = createProximityWallpaper(display, wallpaper, children);
      thraneScreens.screen = display;
    }
    if (isPalm) palmScreens.screen = display;
    if (isNicolai) nicolaiScreens.screen = display;
    if (isAnja) anjaScreens.screen = display;
    if (isJesper) jesperScreen.screen = display;
    if (isHenrik) henrikScreens.screen = display;
    if (isLars) larsScreens.screen = display;
    if (isHolbech && display) holbechScreens.screen = display;
  });
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
  const television = new THREE.Mesh(new THREE.PlaneGeometry(1.84, .99), new THREE.MeshBasicMaterial({ toneMapped: false }));
  television.position.set(17.141, 1.73, 19.05); television.rotation.y = -Math.PI / 2;
  shell.east.add(television);
  for (const z of [18.3, 19.1, 19.8]) box(shell.east, .012, .6, .008, 16.887, .61, z, m.trim);
  // A red framed print and the small bell are prominent end-of-room details.
  const print = new THREE.Group(); shell.east.add(print); print.position.set(17.14, 1.6, 20.6); print.rotation.y = -Math.PI / 2;
  box(print, .55, .85, .04, 0, 0, 0, m.white);
  const red = new THREE.MeshStandardMaterial({ color: '#b74937', roughness: .9 });
  box(print, .5, .8, .007, 0, 0, .025, red);
  for (const y of [-.12, .12]) for (let i = 0; i < 3; i++) box(print, .035, .16, .008, -.12 + i * .1, y + i * .025, .03, m.white).rotation.z = -.45;
  cylinder(group, .055, .12, .2, 7.9, 2.2, 19.7, gold);
  cylinder(group, .09, .11, .025, 7.9, 2.09, 19.7, gold);
  const boundaries = [...shell.walls.map(wall => wall.group), shell.roof];
  instanceStatic(group, { boundaries });
  for (const boundary of boundaries) instanceStatic(boundary);
  return {
    ...shell, television, holbechScreens, jesperScreen, martinScreen,
    screenFeatures: [henrikScreens.feature, anjaScreens.feature, palmScreens.feature, nicolaiScreens.feature, thraneScreens.feature, larsScreens.feature, jesperScreen.feature, holbechScreens.feature],
    updateScreens(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
      const thraneChanged = updateThraneScreen(camera.position);
      const thraneAnimated = thraneScreens.update(camera, dt, animate);
      const palmChanged = palmScreens.update(camera, dt, animate);
      const nicolaiChanged = nicolaiScreens.update(camera, dt, animate);
      const anjaChanged = anjaScreens.update(camera, dt, animate);
      const jesperChanged = jesperScreen.update(camera, dt, animate);
      const henrikChanged = henrikScreens.update(camera, dt, animate);
      const larsChanged = larsScreens.update(camera, dt, animate);
      const holbechChanged = holbechScreens.update(camera, dt, animate);
      return thraneChanged || thraneAnimated || palmChanged || nicolaiChanged || anjaChanged || jesperChanged || henrikChanged || larsChanged || holbechChanged;
    },
  };
}
