import * as THREE from 'three';

const lists = new WeakMap<THREE.Object3D, THREE.Mesh[]>();
export function sceneSurfaces(root: THREE.Object3D) {
  let list = lists.get(root);
  if (!list) { list = []; lists.set(root, list); refreshSceneSurfaces(root); }
  return list;
}
export function refreshSceneSurfaces(root: THREE.Object3D) {
  const list = lists.get(root);
  if (!list) return;
  list.length = 0;
  root.updateMatrixWorld(true);
  root.traverse(object => { if (object instanceof THREE.Mesh) list.push(object); });
}
