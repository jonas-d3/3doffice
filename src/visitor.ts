import * as THREE from 'three';
import { box, cylinder, mesh } from './geometry';
import { VisitorWalk } from './visitor-walk.mjs';
import applyLogoUrl from './assets/apply-monogram.svg';

const capeGreen = '#287248';

function capeFabric(onLoad: () => void) {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = capeGreen; ctx.fillRect(0, 0, 512, 1024);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4;
  const logo = new Image();
  logo.onload = () => {
    const print = document.createElement('canvas'); print.width = 320; print.height = 181;
    const ink = print.getContext('2d')!;
    ink.drawImage(logo, 0, 0, print.width, print.height);
    ink.globalCompositeOperation = 'source-in'; ink.fillStyle = '#f5f4e9';
    ink.fillRect(0, 0, print.width, print.height);
    // The a: mark on the kitchen wall, located by ressources/locations.png.
    // Account for the cape's physical proportions so the print stays undistorted.
    ctx.drawImage(print, 96, 260); texture.needsUpdate = true; onLoad();
  };
  logo.src = applyLogoUrl;
  return texture;
}

// A small, fully modelled likeness of the reference: floral shirt, shorts,
// swept brown hair, beard, hanging sunglasses and striped slides.
function floralFabric() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#f0efdf'; ctx.fillRect(0, 0, 512, 512);
  let seed = 73;
  const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 115; i++) {
    const x = random() * 512, y = random() * 512, rotation = random() * Math.PI * 2;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rotation);
    const length = 18 + random() * 29;
    ctx.strokeStyle = '#54726a'; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(0, 12); ctx.quadraticCurveTo(-4, -8, 3, -length); ctx.stroke();
    for (let j = 0; j < 5; j++) for (const side of [-1, 1]) {
      const leafY = 3 - j * length / 6;
      ctx.fillStyle = ['#315b6b', '#608b94', '#8eaaa3', '#afab80'][Math.floor(random() * 4)];
      ctx.beginPath(); ctx.moveTo(0, leafY);
      ctx.quadraticCurveTo(side * 15, leafY - 2, side * (8 + random() * 9), leafY - 14);
      ctx.quadraticCurveTo(side * 2, leafY - 11, 0, leafY); ctx.fill();
    }
    if (i % 3 === 0) {
      ctx.translate(9, -12); ctx.fillStyle = '#ccab72';
      for (let petal = 0; petal < 5; petal++) {
        ctx.rotate(Math.PI * 2 / 5); ctx.beginPath(); ctx.ellipse(0, 5, 3, 6, 0, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#61706b'; ctx.beginPath(); ctx.arc(0, 0, 2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export class Visitor {
  readonly group = new THREE.Group();
  readonly walk = new VisitorWalk();
  private body = new THREE.Group();
  private legs: { hip: THREE.Group; knee: THREE.Group }[] = [];
  private arms: THREE.Group[] = [];
  private stride = 0;
  private cape = new THREE.PlaneGeometry(.44, 1.02, 12, 22);
  private dirty = false;

  constructor() {
    this.group.name = 'Besøgende i blomsterskjorte';
    this.group.add(this.body);
    const material = (color: string, roughness = .85) => new THREE.MeshStandardMaterial({ color, roughness });
    const skin = material('#c78f74'), hair = material('#51483c'), hairLight = material('#63594a');
    const beard = material('#655044'), shorts = material('#c6b083'), seam = material('#ab956f');
    const black = material('#25292a'), stripe = material('#d6d8cc'), white = material('#ede6d9');
    const shirt = new THREE.MeshStandardMaterial({ map: floralFabric(), roughness: .95 });
    const sphere = new THREE.SphereGeometry(1, 20, 14);
    const oval = (parent: THREE.Object3D, mat: THREE.Material, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
      const part = mesh(parent, sphere, mat, x, y, z); part.scale.set(sx, sy, sz); return part;
    };
    const joint = (parent: THREE.Object3D, x: number, y: number, z: number) => {
      const pivot = new THREE.Group(); pivot.position.set(x, y, z); parent.add(pivot); return pivot;
    };

    box(this.body, .43, .52, .29, 0, 1.22, 0, shirt, .075);
    // The untucked hem sits over the waist of two independently animated legs.
    box(this.body, .42, .1, .285, 0, .975, 0, shirt, .035);
    cylinder(this.body, .065, .075, .12, 0, 1.51, 0, skin);
    oval(this.body, skin, 0, 1.665, .005, .135, .175, .123);
    oval(this.body, beard, 0, 1.57, .036, .122, .083, .105);
    oval(this.body, skin, 0, 1.624, .108, .064, .052, .033);
    oval(this.body, skin, 0, 1.66, .13, .026, .044, .035);
    oval(this.body, beard, -.024, 1.61, .135, .03, .013, .012);
    oval(this.body, beard, .024, 1.61, .135, .03, .013, .012);
    box(this.body, .046, .006, .006, 0, 1.592, .14, hair, .002);
    for (const side of [-1, 1]) {
      oval(this.body, skin, side * .132, 1.66, -.003, .027, .042, .022);
      oval(this.body, hair, side * .119, 1.705, -.012, .021, .065, .084);
      oval(this.body, white, side * .052, 1.702, .111, .026, .012, .009);
      oval(this.body, hair, side * .051, 1.702, .12, .009, .01, .005);
      const brow = box(this.body, .052, .012, .016, side * .051, 1.728, .112, hair, .004);
      brow.rotation.z = side * -.1;
    }
    oval(this.body, hair, 0, 1.789, -.024, .138, .071, .117);
    oval(this.body, hair, 0, 1.723, -.077, .129, .102, .063);
    // Offset locks give the short, swept side part a recognisable silhouette.
    for (let i = 0; i < 5; i++) {
      const lock = oval(this.body, i % 2 ? hair : hairLight, -.085 + i * .039, 1.805 + Math.sin(i * .65) * .014, .009, .043, .036, .105);
      lock.rotation.z = -.24; lock.rotation.x = -.18;
    }

    for (const side of [-1, 1]) {
      const collar = box(this.body, .09, .115, .018, side * .054, 1.445, .143, shirt, .008);
      collar.rotation.z = side * -.38; collar.rotation.x = -.12;
    }
    const capeMaterial = new THREE.MeshStandardMaterial({ color: capeGreen, roughness: .82 });
    const capeOutside = new THREE.MeshStandardMaterial({ map: capeFabric(() => { this.dirty = true; }), roughness: .82 });
    mesh(this.body, this.cape, capeOutside, 0, 0, 0);
    const capeInside = capeMaterial.clone(); capeInside.side = THREE.BackSide;
    mesh(this.body, this.cape, capeInside, 0, 0, 0).castShadow = false;
    for (const side of [-1, 1]) {
      const shoulder = box(this.body, .075, .028, .26, side * .16, 1.46, -.015, capeMaterial, .012);
      shoulder.rotation.z = side * -.12;
      oval(this.body, seam, side * .16, 1.444, .123, .018, .018, .009);
    }
    (this.cape.getAttribute('position') as THREE.BufferAttribute).setUsage(THREE.DynamicDrawUsage);
    this.poseCape(0);
    box(this.body, .012, .37, .009, 0, 1.19, .148, white, .003);
    for (let i = 0; i < 5; i++) oval(this.body, seam, 0, 1.35 - i * .068, .155, .007, .007, .004);
    // Sunglasses hooked into the open placket.
    const glasses = joint(this.body, .047, 1.346, .17); glasses.rotation.z = -.13;
    for (const side of [-1, 1]) box(glasses, .035, .062, .012, side * .021, 0, 0, black, .012);
    box(glasses, .016, .008, .012, 0, .013, 0, black, .003);
    box(glasses, .008, .067, .008, -.035, .044, 0, black, .003);

    for (const side of [-1, 1]) {
      const arm = joint(this.body, side * .235, 1.397, 0);
      cylinder(arm, .061, .065, .2, 0, -.075, 0, shirt);
      oval(arm, skin, 0, -.218, 0, .057, .105, .058);
      const elbow = joint(arm, 0, -.285, 0); elbow.rotation.x = -.1;
      oval(elbow, skin, 0, -.095, .008, .048, .126, .047);
      oval(elbow, skin, 0, -.231, .019, .044, .069, .033);
      oval(elbow, skin, -side * .032, -.212, .034, .019, .038, .02);
      this.arms.push(arm);

      const hip = joint(this.body, side * .112, .94, 0);
      box(hip, .199, .37, .24, 0, -.137, 0, shorts, .035);
      box(hip, .18, .025, .228, 0, -.308, 0, seam, .009);
      box(hip, .004, .24, .135, side * .1, -.118, .018, seam, .001);
      oval(hip, skin, 0, -.35, 0, .072, .11, .076);
      const knee = joint(hip, 0, -.43, 0);
      oval(knee, skin, 0, -.185, -.006, .06, .2, .061);
      oval(knee, skin, 0, -.4, .009, .041, .075, .042);
      oval(knee, skin, 0, -.464, .06, .052, .036, .108);
      box(knee, .126, .035, .26, 0, -.488, .052, black, .016);
      box(knee, .122, .048, .098, 0, -.444, .068, black, .02);
      for (let i = 0; i < 3; i++) box(knee, .124, .008, .011, 0, -.417, .035 + i * .026, stripe, .003);
      this.legs.push({ hip, knee });
    }
    // A soft contact shadow keeps him grounded between the building's shadow texels.
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64;
    const ctx = canvas.getContext('2d')!, gradient = ctx.createRadialGradient(32, 32, 3, 32, 32, 30);
    gradient.addColorStop(0, '#00000038'); gradient.addColorStop(1, '#00000000');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 64, 64);
    const shadow = mesh(this.group, new THREE.PlaneGeometry(.8, .65), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false }), 0, .012, 0);
    shadow.rotation.x = -Math.PI / 2; shadow.castShadow = shadow.receiveShadow = false;
    this.group.position.set(this.walk.x, 0, this.walk.z);
  }

  private poseCape(phase: number) {
    const positions = this.cape.getAttribute('position');
    const uv = this.cape.getAttribute('uv');
    for (let i = 0; i < positions.count; i++) {
      const u = uv.getX(i), drop = 1 - uv.getY(i);
      // Anchor the shoulders; let the folds and scalloped hem follow the gait.
      const fold = Math.cos(u * Math.PI * 8) * (.006 + drop * .009);
      const flutter = Math.sin(drop * 9 - phase * 1.7 + u * 3) * drop * drop * .018 * this.stride;
      // Reverse X so the outside faces backwards and the logo reads correctly.
      positions.setXYZ(i, (.5 - u) * (.36 + drop * .07),
        1.45 - drop * 1.02 + Math.cos(u * Math.PI * 6) * .012 * drop,
        -.157 - drop * .025 - drop * drop * .14 * this.stride + fold + flutter);
    }
    positions.needsUpdate = true;
    this.cape.computeVertexNormals();
    this.cape.computeBoundingSphere();
  }

  update(dt: number) {
    const dirty = this.dirty; this.dirty = false;
    if (this.walk.paused) return dirty;
    this.walk.update(dt);
    const phase = this.walk.distance * Math.PI * 2 / 1.15;
    this.stride = THREE.MathUtils.damp(this.stride, this.walk.moving ? 1 : 0, 12, dt);
    this.poseCape(phase);
    this.group.position.set(this.walk.x, 0, this.walk.z);
    this.group.rotation.y = this.walk.heading;
    this.body.rotation.z = Math.cos(phase) * .014 * this.stride;
    let lowestFoot = Infinity;
    for (let i = 0; i < 2; i++) {
      const swing = Math.sin(phase + i * Math.PI) * this.stride;
      const hip = -swing * .36, knee = Math.max(0, swing) * .6;
      this.legs[i].hip.rotation.x = hip;
      this.legs[i].knee.rotation.x = knee;
      this.arms[i].rotation.x = swing * .27;
      const angle = hip + knee;
      lowestFoot = Math.min(lowestFoot, .94 - .43 * Math.cos(hip) - .488 * Math.cos(angle)
        - .052 * Math.sin(angle) - .0175 * Math.abs(Math.cos(angle)) - .13 * Math.abs(Math.sin(angle)));
    }
    this.body.position.y = .006 - lowestFoot;
    return true;
  }
}
