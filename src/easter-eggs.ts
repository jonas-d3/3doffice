import * as THREE from 'three';
import { box, cylinder, mesh } from './geometry';
import { CreeperFollow, creeperStart } from './easter-egg-state.mjs';
import type { JesperScreen } from './jesper-screen';
import type { Navigation } from './navigation';
import type { Visitor } from './visitor';

function createCreeper(parent: THREE.Object3D) {
  const group = new THREE.Group(); group.name = 'Den diskrete creeper'; parent.add(group);
  const green = new THREE.MeshStandardMaterial({ color: '#598d39', roughness: 1 });
  const pale = new THREE.MeshStandardMaterial({ color: '#85ad50', roughness: 1 });
  const black = new THREE.MeshStandardMaterial({ color: '#1b2919', roughness: 1 });
  box(group, .22, .32, .2, 0, .36, 0, green);
  box(group, .34, .34, .34, 0, .67, 0, green);
  for (const x of [-.095, .095]) for (const z of [-.09, .09]) {
    box(group, .14, .19, .16, x, .115, z, pale).name = 'Creeperfod';
  }
  const face = ['00000000', '00000000', '01100110', '01100110', '00011000', '00111100', '00100100', '00000000'];
  face.forEach((row, y) => [...row].forEach((pixel, x) => {
    if (pixel === '1') box(group, .043, .043, .006, (x - 3.5) * .042, .67 + (3.5 - y) * .042, .172, black);
  }));
  for (let i = 0; i < 18; i++) {
    box(group, .041, .041, .006, ((i * 3) % 8 - 3.5) * .042, .67 + ((i * 5) % 8 - 3.5) * .042, -.172, i % 3 ? pale : black);
  }
  group.position.set(creeperStart.x, 0, creeperStart.z);
  group.rotation.y = -Math.PI / 2;
  return group;
}

type Target = 'coffee' | 'salmon';

export class EasterEggs {
  readonly creeper: THREE.Group;
  readonly follower = new CreeperFollow();
  private creeperFeet: THREE.Object3D[];
  private ray = new THREE.Raycaster();
  private surfaces: THREE.Mesh[] = [];
  private projection = new THREE.Vector3();
  private point = new THREE.Vector3();
  private direction = new THREE.Vector3();
  private frustum = new THREE.Frustum();
  private matrix = new THREE.Matrix4();
  private sphere = new THREE.Sphere(new THREE.Vector3(), .5);
  private gesture: { id: number; x: number; y: number; moved: boolean } | null = null;
  private cup = new THREE.Group();
  private label = document.createElement('canvas');
  private labelTexture: THREE.CanvasTexture;
  private coffeeState = 'idle';
  private dirty = true;

  constructor(
    private office: THREE.Group,
    private coffee: THREE.Group,
    private jesper: JesperScreen,
    private visitor: Visitor,
    private navigation: Navigation,
    private reducedMotion: MediaQueryList,
    private blocked: () => boolean,
  ) {
    this.creeper = createCreeper(office);
    this.creeperFeet = this.creeper.children.filter(part => part.name === 'Creeperfod');
    this.label.width = 512; this.label.height = 128;
    this.labelTexture = new THREE.CanvasTexture(this.label); this.labelTexture.colorSpace = THREE.SRGBColorSpace;
    const label = mesh(coffee, new THREE.PlaneGeometry(.35, .088), new THREE.MeshBasicMaterial({ map: this.labelTexture, toneMapped: false, side: THREE.DoubleSide }), 0, .43, .18);
    // The photographed counter is reflected in Z; keep the lettering readable.
    label.scale.x = -1; label.castShadow = label.receiveShadow = false;
    const white = new THREE.MeshStandardMaterial({ color: '#eee8d6' });
    cylinder(this.cup, .045, .034, .09, 0, .045, 0, white);
    cylinder(this.cup, .039, .039, .004, 0, .09, 0, new THREE.MeshStandardMaterial({ color: '#4c2f20' }));
    this.cup.position.set(0, .065, .12); this.cup.visible = false; coffee.add(this.cup);
    this.paintCoffee();
    office.updateMatrixWorld(true);
    // Cache static scene meshes; visibility is checked at ray-hit time so
    // cutaway walls never become invisible interaction blockers.
    office.traverse(object => { if (object instanceof THREE.Mesh) this.surfaces.push(object); });
    const canvas = navigation.canvas;
    canvas.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || this.gesture) { this.gesture = null; return; }
      this.gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
    });
    canvas.addEventListener('pointermove', event => {
      if (this.gesture && Math.hypot(event.clientX - this.gesture.x, event.clientY - this.gesture.y) > 6) this.gesture.moved = true;
    });
    canvas.addEventListener('pointerup', event => {
      const gesture = this.gesture; this.gesture = null;
      if (!gesture || gesture.id !== event.pointerId || gesture.moved || this.blocked() || !navigation.isWalking) return;
      const rect = canvas.getBoundingClientRect();
      this.ray.setFromCamera(new THREE.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2), navigation.camera);
      this.ray.far = 3.5;
      const hit = this.firstHit();
      if (!hit) return;
      if (hit.object.userData.coffeeButton && this.belongsTo(hit.object, coffee)) this.activate('coffee');
      else if (hit.object === jesper.screen && hit.uv && jesper.hitFish(hit.uv)) this.activate('salmon');
    });
    const cancel = () => { this.gesture = null; };
    canvas.addEventListener('pointercancel', cancel); canvas.addEventListener('lostpointercapture', cancel);
    addEventListener('blur', cancel);
  }

  private belongsTo(object: THREE.Object3D, target: THREE.Object3D) {
    for (let current: THREE.Object3D | null = object; current; current = current.parent) if (current === target) return true;
    return false;
  }

  private firstHit() {
    return this.ray.intersectObjects(this.surfaces, false).find(hit => {
      for (let object: THREE.Object3D | null = hit.object; object; object = object.parent) if (!object.visible) return false;
      const material = (hit.object as THREE.Mesh).material;
      const materials = Array.isArray(material) ? material : [material];
      return materials.some(value => value.visible && (!value.transparent || value.opacity >= .5));
    });
  }

  private clearSight(point: THREE.Vector3, target: THREE.Object3D) {
    const origin = this.navigation.camera.position;
    this.direction.copy(point).sub(origin);
    this.ray.far = this.direction.length() + .01; this.ray.set(origin, this.direction.normalize());
    const hit = this.firstHit();
    return !hit || this.belongsTo(hit.object, target);
  }

  private targetPoint(target: Target) {
    if (target === 'coffee') return this.coffee.localToWorld(this.point.set(0, .43, .18));
    return this.jesper.screen!.getWorldPosition(this.point);
  }

  private available(target: Target) {
    if (this.blocked() || !this.navigation.isWalking || (target === 'salmon' && (!this.jesper.screen || this.jesper.catchState.phase !== 'idle'))) return false;
    const point = this.targetPoint(target), camera = this.navigation.camera;
    if (camera.position.distanceToSquared(point) > 3.5 ** 2) return false;
    this.projection.copy(point).project(camera);
    if (this.projection.z < -1 || this.projection.z > 1 || Math.abs(this.projection.x) > .85 || Math.abs(this.projection.y) > .75) return false;
    return this.clearSight(point, target === 'coffee' ? this.coffee : this.jesper.screen!);
  }

  private paintCoffee() {
    const c = this.label.getContext('2d')!;
    c.fillStyle = '#142d26'; c.fillRect(0, 0, 512, 128);
    c.fillStyle = '#c7e8ac'; c.font = 'bold 45px monospace'; c.textAlign = 'center';
    const walk = this.visitor.walk;
    c.fillText(walk.coffeePresses < 3 ? (walk.coffeePresses ? `${walk.coffeePresses} / 3 SHOTS` : 'KAFFE?') : 'DEPLOY DOBBELT', 256, 79);
    this.labelTexture.needsUpdate = true; this.dirty = true;
  }

  private activate(target: Target) {
    if (!this.available(target)) return;
    if (target === 'salmon') {
      if (this.jesper.catchFish(this.reducedMotion.matches)) this.dirty = true;
    } else {
      const walk = this.visitor.walk;
      walk.orderCoffee();
      this.cup.visible = walk.coffeeCupWaiting; this.paintCoffee();
    }
  }

  update(dt: number) {
    let changed = this.dirty; this.dirty = false;
    if (this.blocked()) return changed;
    const state = this.visitor.walk.coffeeState;
    if (state !== this.coffeeState) {
      this.coffeeState = state; this.cup.visible = this.visitor.walk.coffeeCupWaiting; this.paintCoffee(); changed = true;
    }
    if (!this.navigation.isWalking || this.reducedMotion.matches) return changed;
    const camera = this.navigation.camera; camera.updateMatrixWorld();
    this.matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); this.frustum.setFromProjectionMatrix(this.matrix);
    const follower = this.follower;
    this.sphere.center.set(follower.x, .43, follower.z);
    // Check each frame so the 100 ms stop delay starts as soon as it is seen.
    // A wall or a desk can hide it even when it is inside the camera's frustum.
    const watched = this.frustum.intersectsSphere(this.sphere) && [.74, .4, .13].some(height => {
      this.point.set(follower.x, height, follower.z);
      return this.frustum.containsPoint(this.point) && this.clearSight(this.point, this.creeper);
    });
    if (follower.update(dt, watched, camera.position, true)) {
      this.creeper.position.set(follower.x, 0, follower.z);
      this.creeper.rotation.y = follower.heading;
      this.creeperFeet.forEach((foot, i) => { foot.rotation.x = Math.sin(follower.distance * 18) * .35 * (i === 0 || i === 3 ? 1 : -1); });
      this.creeper.updateMatrixWorld(true); changed = true;
    }
    return changed;
  }
}
