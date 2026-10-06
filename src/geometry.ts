import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { materials as m } from './materials';

export function mesh(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number) {
  const object = new THREE.Mesh(geometry, material);
  object.position.set(x, y, z); object.castShadow = true; object.receiveShadow = true;
  parent.add(object); return object;
}
export function box(parent: THREE.Object3D, w: number, h: number, d: number, x: number, y: number, z: number, material: THREE.Material, radius = 0) {
  return mesh(parent, radius ? new RoundedBoxGeometry(w, h, d, 3, radius) : new THREE.BoxGeometry(w, h, d), material, x, y, z);
}
export function cylinder(parent: THREE.Object3D, top: number, bottom: number, height: number, x: number, y: number, z: number, material: THREE.Material) {
  return mesh(parent, new THREE.CylinderGeometry(top, bottom, height, top > 1 ? 64 : 28), material, x, y, z);
}
export function rod(parent: THREE.Object3D, a: number[], b: number[], radius: number, material = m.metal) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
  const object = cylinder(parent, radius, radius, start.distanceTo(end), 0, 0, 0, material);
  object.position.copy(start.add(end).multiplyScalar(.5));
  object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...b).sub(new THREE.Vector3(...a)).normalize());
  return object;
}
