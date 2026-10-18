import * as THREE from 'three';

/** @type {WeakMap<import('three').Object3D, import('three').Mesh[]>} */
const lists = new WeakMap();
export function sceneSurfaces(root) {
  let list = lists.get(root);
  if (!list) { list = []; lists.set(root, list); refreshSceneSurfaces(root); }
  return list;
}
export function refreshSceneSurfaces(root) {
  const list = lists.get(root);
  if (!list) return;
  list.length = 0;
  root.updateMatrixWorld(true);
  root.traverse(object => { if (object instanceof THREE.Mesh) list.push(object); });
}
