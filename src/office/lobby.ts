import * as THREE from 'three';
import { box, cylinder, mesh, rod } from '../scene/geometry';
import { materials as m } from '../textures/materials';
import { lobby, workspaceDoor } from './layout.mjs';
import { lobbyFurniture as furniture } from './lobby-layout.mjs';
import { partition, roof, slab, type CutawayWall } from '../scene/architecture';

const green = new THREE.MeshStandardMaterial({ color: '#626e57', roughness: .8 });
const paper = new THREE.MeshStandardMaterial({ color: '#e3d9b9', roughness: .95 });
const brass = new THREE.MeshStandardMaterial({ color: '#b9a374', metalness: .65, roughness: .35 });

function textPanel(parent: THREE.Object3D, lines: string[], width: number, height: number, background: string, color = '#eee9dc') {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = Math.round(512 * height / width);
  const ctx = canvas.getContext('2d')!; ctx.fillStyle = background; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  lines.forEach((line, i) => {
    ctx.font = `${lines.length === 1 ? 'bold ' : ''}${Math.min(70, 440 / Math.max(line.length, 1) * 1.7)}px Arial`;
    ctx.fillText(line, 256, canvas.height / 2 + (i - (lines.length - 1) / 2) * 65, 455);
  });
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  return mesh(parent, new THREE.PlaneGeometry(width, height), new THREE.MeshStandardMaterial({ map, roughness: .85 }), 0, 0, 0);
}

function logoWall(parent: THREE.Object3D) {
  const logos: [string, string, string][] = [
    ['apply’ed', '#202224', '#ffffff'], ['TESTAVIVA', '#173039', '#ffffff'], ['Gjensidige', '#e9e6df', '#193259'], ['IDA', '#242e65', '#ffffff'], ['Astma-Allergi', '#eeeae3', '#334f75'], ['DANSK ERHVERV', '#202958', '#ffffff'],
    ['SUNDHEDS SIKRING', '#eeeae3', '#193047'], ['Sund & Bælt', '#0b203a', '#ffffff'], ['Lederne', '#163d35', '#ffffff'], ['Copydan/', '#eeeae3', '#333333'], ['SES', '#626d70', '#ffffff'], ['sampension', '#eeeae3', '#152e3e'],
    ['Ørsted', '#35768e', '#ffffff'], ['CONCITO', '#eeeae3', '#384936'], ['SCANGLAS', '#212223', '#ffffff'], ['Brobizz', '#17393c', '#ffffff'], ['GYLDENDAL', '#eeeae3', '#222222'],
    ['Storebælt', '#0c203a', '#ffffff'], ['forca', '#24525c', '#ffffff'], ['GLASSOLUTIONS', '#eeeae3', '#843b49'], ['Brunata', '#eeeae3', '#222222'], ['Femern', '#0c203a', '#ffffff'],
    ['HAVER TIL MAVER', '#eeeae3', '#353c2d'], ['KLIMA AMBASSADEN', '#eeeae3', '#578283'], ['RAMBØLL', '#397795', '#ffffff'], ['DANSKE REGIONER', '#eeeae3', '#333333'], ['Clever', '#16413d', '#ffffff'],
  ];
  let index = 0;
  for (let row = 0; row < 5; row++) for (let col = 0; col < (row < 2 ? 6 : 5); col++) {
    const [name, background, color] = logos[index++];
    const tile = new THREE.Group(); parent.add(tile);
    tile.position.set(4.47 - col * .365, 2.04 - row * .355, lobby.maxZ - .028); tile.rotation.y = Math.PI;
    box(tile, .295, .295, .025, 0, 0, 0, m.black);
    const print = textPanel(tile, [name], .287, .287, background, color); print.position.z = .014;
  }
  box(parent, .075, .1, .025, 4.42, .28, lobby.maxZ - .02, m.white, .006);
  mesh(parent, new THREE.CircleGeometry(.023, 16), m.trim, 4.42, .28, lobby.maxZ - .035).rotation.y = Math.PI;
}

function cabinet(parent: THREE.Object3D) {
  const b = furniture.cabinet, x = (b.minX + b.maxX) / 2, z = (b.minZ + b.maxZ) / 2;
  box(parent, b.maxX - b.minX, .98, b.maxZ - b.minZ, x, .54, z, green, .009);
  box(parent, 1.96, .06, .39, x, .03, z, m.black);
  box(parent, 2.075, .035, .47, x, 1.047, z, green, .006);
  for (let i = 1; i < 4; i++) box(parent, .008, .93, .012, b.minX + i * (b.maxX - b.minX) / 4, .55, b.maxZ + .003, m.metal);
  // Books and two frames leaning against the wall behind the cabinet.
  const spines = ['#315746', '#db6433', '#253146', '#c9bd95', '#555045'];
  for (let i = 0; i < 5; i++) {
    const book = new THREE.Group(); parent.add(book); book.position.set(4.12 + (i % 2) * .015, 1.09 + i * .065, 15.29); book.rotation.y = .03 * (i - 2);
    box(book, .48, .056, .32, 0, 0, 0, paper);
    for (const y of [-.032, .032]) box(book, .495, .009, .335, 0, y, 0, new THREE.MeshStandardMaterial({ color: spines[i], roughness: .8 }));
    box(book, .495, .066, .02, 0, 0, .16, new THREE.MeshStandardMaterial({ color: spines[i] }));
  }
  for (const [x, size] of [[3.8, .43], [4.4, .57]]) {
    const frame = new THREE.Group(); parent.add(frame); frame.position.set(x, 1.08 + size / 2, 15.1); frame.rotation.x = -.14;
    box(frame, size * .7, size, .025, 0, 0, 0, m.oak);
    box(frame, size * .7 - .035, size - .035, .008, 0, 0, .018, m.white);
    const print = textPanel(frame, ['apply:', 'DESIGN'], size * .6, size * .55, '#eee9dd', '#384138'); print.position.z = .023;
  }
  // Cream typewriter and the small black joystick visible in the photos.
  const typewriter = new THREE.Group(); parent.add(typewriter); typewriter.position.set(3.13, 1.105, 15.28);
  box(typewriter, .36, .09, .27, 0, 0, 0, paper, .025);
  box(typewriter, .3, .08, .07, 0, .06, -.08, m.black, .012);
  for (let row = 0; row < 4; row++) for (let col = 0; col < 10; col++) {
    cylinder(typewriter, .009, .01, .01, -.135 + col * .03, .054, -.04 + row * .04, m.black);
  }
  box(parent, .17, .035, .14, 3.47, 1.08, 15.36, m.black, .014);
  rod(parent, [3.47, 1.09, 15.36], [3.47, 1.21, 15.36], .009, m.black);
  mesh(parent, new THREE.SphereGeometry(.024, 12, 8), m.black, 3.47, 1.22, 15.36);
}

function coatRack(parent: THREE.Object3D) {
  const b = furniture.coats, z = (b.minZ + b.maxZ) / 2;
  for (const x of [b.minX + .035, b.maxX - .035]) {
    box(parent, .035, 1.85, .035, x, .95, z, m.black);
    box(parent, .055, .045, b.maxZ - b.minZ, x, .035, z, m.black);
    rod(parent, [x, .1, b.minZ + .04], [x, .75, z], .012, m.black);
  }
  box(parent, b.maxX - b.minX, .04, .04, (b.minX + b.maxX) / 2, 1.86, z, m.black);
  const colors = ['#345b8c', '#b38c53', '#202e3e', '#303940', '#151d24', '#263c50'];
  for (let i = 0; i < 6; i++) {
    const x = 1.05 + i * .205;
    const cloth = m.sofa.clone(); cloth.color.set(colors[i]);
    const shape = new THREE.Shape();
    shape.moveTo(-.09, 0); shape.lineTo(-.23, -.08); shape.lineTo(-.28, -.55);
    shape.lineTo(-.19, -.58); shape.lineTo(-.17, -.32); shape.lineTo(-.17, -.99);
    shape.quadraticCurveTo(0, -1.06, .17, -.99); shape.lineTo(.17, -.32);
    shape.lineTo(.19, -.58); shape.lineTo(.28, -.55); shape.lineTo(.23, -.08); shape.lineTo(.09, 0); shape.closePath();
    const coat = mesh(parent, new THREE.ExtrudeGeometry(shape, { depth: .045, bevelEnabled: true, bevelSize: .015, bevelThickness: .012, bevelSegments: 2, steps: 1 }), cloth, x, 1.65, z);
    coat.rotation.y = Math.PI / 2; coat.rotation.z = (i % 3 - 1) * .04;
    rod(parent, [x, 1.78, z], [x, 1.64, z - .22], .006, brass);
    rod(parent, [x, 1.64, z - .22], [x, 1.64, z + .22], .006, brass);
    rod(parent, [x, 1.64, z + .22], [x, 1.78, z], .006, brass);
    rod(parent, [x, 1.78, z], [x, 1.86, z], .006, brass);
  }
  const red = new THREE.MeshStandardMaterial({ color: '#b72922', roughness: .4 });
  cylinder(parent, .075, .08, .42, .96, .25, 15.5, red);
  box(parent, .09, .045, .07, .96, .49, 15.5, m.black);
  rod(parent, [1, .46, 15.5], [1.05, .17, 15.5], .012, m.black);
}

function lamp(parent: THREE.Object3D) {
  const b = furniture.lamp, x = (b.minX + b.maxX) / 2, z = (b.minZ + b.maxZ) / 2;
  cylinder(parent, .16, .17, .035, x, .027, z, m.black);
  rod(parent, [x, .04, z], [x - .08, 1.38, z], .014, m.black);
  rod(parent, [x - .08, 1.38, z], [x + .13, 1.65, z], .012, brass);
  rod(parent, [x + .13, 1.65, z], [x + .38, 1.56, z], .012, m.black);
  const shade = cylinder(parent, .065, .145, .15, x + .38, 1.5, z, m.black); shade.rotation.z = -.25;
  cylinder(parent, .135, .135, .008, x + .36, 1.422, z, m.white);
}

function banner(parent: THREE.Object3D) {
  const b = furniture.banner, x = (b.minX + b.maxX) / 2, z = (b.minZ + b.maxZ) / 2;
  box(parent, .25, .065, .83, x, .04, z, m.trim, .012);
  const panel = textPanel(parent, ['Digital fremdrift', 'til ambitiøse kunder', '', 'apply:'], .78, 1.94, '#29221d');
  panel.position.set(x, 1.04, z); panel.rotation.y = Math.PI / 2;
  for (const edge of [-.405, .405]) rod(parent, [x, .08, z + edge], [x, 2.04, z + edge], .009, m.trim);
  box(parent, .025, .025, .82, x, 2.03, z, m.trim);
  const sign = textPanel(parent, [], .38, .19, '#00a76f');
  const signMap = (sign.material as THREE.MeshStandardMaterial).map as THREE.CanvasTexture;
  const signCanvas = signMap.image as HTMLCanvasElement, ctx = signCanvas.getContext('2d')!;
  ctx.strokeStyle = '#ffffff'; ctx.fillStyle = '#ffffff'; ctx.lineWidth = 16; ctx.lineCap = 'round';
  // Left arrow and a simple running-person exit pictogram.
  ctx.beginPath(); ctx.moveTo(210, 128); ctx.lineTo(65, 128); ctx.moveTo(115, 75); ctx.lineTo(60, 128); ctx.lineTo(115, 181); ctx.stroke();
  ctx.strokeRect(345, 42, 88, 175);
  ctx.beginPath(); ctx.arc(318, 65, 17, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(313, 97); ctx.lineTo(284, 141); ctx.lineTo(332, 168); ctx.lineTo(315, 211);
  ctx.moveTo(285, 141); ctx.lineTo(244, 195); ctx.moveTo(306, 110); ctx.lineTo(350, 128); ctx.moveTo(306, 110); ctx.lineTo(267, 93); ctx.lineTo(243, 127); ctx.stroke();
  signMap.needsUpdate = true;
  sign.position.set(lobby.minX + .025, 2.3, 15.35); sign.rotation.y = Math.PI / 2;
  const material = sign.material as THREE.MeshStandardMaterial; material.emissive.set('#1a8a60'); material.emissiveIntensity = .7;
}

export function createLobby(parent: THREE.Object3D) {
  const group = new THREE.Group(); parent.add(group);
  const walls: CutawayWall[] = [];
  const floor = m.floor.clone(); floor.color.set('#edbb72'); floor.map = m.floor.map!.clone();
  floor.map.repeat.set(3.5, .7); floor.map.rotation = 0; floor.bumpMap = floor.map;
  slab(group, lobby, floor);
  // A lower suspended ceiling and a dropped beam at the banner end.
  const ceiling = roof(group, lobby, 2.5);
  for (const z of [15.54, 16.08]) box(ceiling, 5.1, .008, .008, 2.28, 2.494, z, m.trim);
  for (let x = .2; x < lobby.maxX; x += .62) box(ceiling, .008, .008, 1.58, x, 2.494, 15.811, m.trim);
  box(ceiling, .15, .23, 1.58, .65, 2.385, 15.811, m.wall);
  for (const x of [1.2, 2.8, 4.2]) {
    box(ceiling, .1, .018, .045, x, 2.48, 15.81, m.light);
    const light = new THREE.PointLight('#fff0d7', .8, 4, 2); light.position.set(x, 2.3, 15.81); group.add(light);
  }
  cylinder(ceiling, .065, .065, .025, 2.2, 2.47, 15.81, m.white);
  partition(group, walls, 'x', lobby.minX - .1, lobby.minZ, lobby.maxZ, 1, 2.5);
  const south = partition(group, walls, 'z', lobby.maxZ + .1, lobby.minX, lobby.maxX, -1, 2.5, [workspaceDoor.minX, workspaceDoor.maxX]);
  logoWall(south);
  const northDetails = new THREE.Group(); group.add(northDetails);
  walls.push({ group: northDetails, axis: 'z', position: lobby.minZ, inside: 1 });
  cabinet(northDetails); coatRack(northDetails); lamp(northDetails);
  const endDetails = new THREE.Group(); group.add(endDetails);
  walls.push({ group: endDetails, axis: 'x', position: lobby.minX, inside: 1 });
  banner(endDetails);
  const glass = new THREE.MeshStandardMaterial({ color: '#51483b', transparent: true, opacity: .8, roughness: .2 });
  const vase = mesh(south, new THREE.SphereGeometry(.15, 20, 14), glass, 4.51, .18, 16.42); vase.scale.set(.8, 1.15, .8);
  return { walls, roof: ceiling };
}
