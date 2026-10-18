import * as THREE from 'three';
import { boxGeometry, cylinderGeometry } from './geometry-cache.mjs';
import { materials as m } from './materials';

export type Shadows = { cast?: boolean; receive?: boolean };

export function mesh(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number, shadows: Shadows = {}) {
  const object = new THREE.Mesh(geometry, material);
  object.position.set(x, y, z); object.castShadow = shadows.cast ?? true; object.receiveShadow = shadows.receive ?? true;
  parent.add(object); return object;
}
export function box(parent: THREE.Object3D, w: number, h: number, d: number, x: number, y: number, z: number, material: THREE.Material, radius = 0, shadows: Shadows = {}) {
  return mesh(parent, boxGeometry(w, h, d, radius), material, x, y, z, shadows);
}
export function cylinder(parent: THREE.Object3D, top: number, bottom: number, height: number, x: number, y: number, z: number, material: THREE.Material, shadows: Shadows = {}) {
  return mesh(parent, cylinderGeometry(top, bottom, height, top > 1 ? 64 : 28), material, x, y, z, shadows);
}
export function rod(parent: THREE.Object3D, a: number[], b: number[], radius: number, material = m.metal, shadows: Shadows = {}) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
  const object = cylinder(parent, radius, radius, start.distanceTo(end), 0, 0, 0, material, shadows);
  object.position.copy(start.add(end).multiplyScalar(.5));
  object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...b).sub(new THREE.Vector3(...a)).normalize());
  return object;
}
