import * as THREE from 'three';
import { box } from './geometry';
import { CreeperFollow, creeperStart } from './easter-egg-state.mjs';
import { sceneSurfaces } from './scene-surfaces.mjs';
import { visibleHit, belongsTo } from './easter-interaction';
import type { Navigation } from './navigation';

const creeperHeightScale = 1.4;

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
  // Grow vertically without widening the footprint in the narrow chair aisles.
  group.scale.y = creeperHeightScale;
  group.rotation.y = -Math.PI / 2;
  return group;
}

export class CreeperController {
  readonly creeper: THREE.Group;
  readonly follower = new CreeperFollow();
  private creeperFeet: THREE.Object3D[];
  private ray = new THREE.Raycaster();
  private surfaces: THREE.Mesh[];
  private point = new THREE.Vector3();
  private direction = new THREE.Vector3();
  private frustum = new THREE.Frustum();
  private matrix = new THREE.Matrix4();
  private sphere = new THREE.Sphere(new THREE.Vector3(), .5 * creeperHeightScale);
  constructor(office: THREE.Group, private navigation: Navigation, private reducedMotion: MediaQueryList, private blocked: () => boolean) {
    this.creeper = createCreeper(office);
    this.creeperFeet = this.creeper.children.filter(part => part.name === 'Creeperfod');
    this.surfaces = sceneSurfaces(office);
  }
  private clearSight(point: THREE.Vector3, target: THREE.Object3D) {
    const origin = this.navigation.camera.position;
    this.direction.copy(point).sub(origin);
    this.ray.far = this.direction.length() + .01; this.ray.set(origin, this.direction.normalize());
    const hit = visibleHit(this.ray, this.surfaces);
    return !hit || belongsTo(hit.object, target);
  }
  update(dt: number) {
    if (this.blocked() || !this.navigation.isWalking || this.reducedMotion.matches) return false;
    const camera = this.navigation.camera; camera.updateMatrixWorld();
    this.matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); this.frustum.setFromProjectionMatrix(this.matrix);
    const follower = this.follower;
    this.sphere.center.set(follower.x, .43 * creeperHeightScale, follower.z);
    // Check each frame so the 250 ms stop delay starts as soon as it is seen.
    // A wall or a desk can hide it even when it is inside the camera's frustum.
    const watched = this.frustum.intersectsSphere(this.sphere) && [.74, .4, .13].some(height => {
      this.point.set(follower.x, height * creeperHeightScale, follower.z);
      return this.frustum.containsPoint(this.point) && this.clearSight(this.point, this.creeper);
    });
    if (follower.update(dt, watched, camera.position, true)) {
      this.creeper.position.set(follower.x, 0, follower.z);
      this.creeper.rotation.y = follower.heading;
      this.creeperFeet.forEach((foot, i) => { foot.rotation.x = Math.sin(follower.distance * 18) * .35 * (i === 0 || i === 3 ? 1 : -1); });
      this.creeper.updateMatrixWorld(true); return true;
    }
    return false;
  }
}
