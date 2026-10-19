import { InstancedMesh, Matrix4, Mesh } from 'three';

/** Batch only a known static room; never call this on the live office root.
 * @param {import('three').Object3D} root
 * @param {{boundaries?: import('three').Object3D[], filter?: (mesh: import('three').Mesh)=>boolean}} options
 */
export function instanceStatic(root, { boundaries = [], filter = () => true } = {}) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(), matrix = new Matrix4(), groups = new Map();
  function visit(object) {
    if (object !== root && boundaries.includes(object)) return;
    if (object instanceof Mesh && !object.isInstancedMesh && !object.children.length && !object.name && object.visible
      && !Object.keys(object.userData).length && !Array.isArray(object.material) && !object.material.transparent
      && object.geometry.type !== 'PlaneGeometry' && filter(object)) {
      matrix.multiplyMatrices(inverse, object.matrixWorld);
      // Three.js does not support negative instance matrices. Reflections stay as ordinary meshes.
      if (matrix.determinant() > 0) {
        const key = `${object.geometry.uuid}:${object.material.uuid}:${object.castShadow}:${object.receiveShadow}:${object.renderOrder}:${object.layers.mask}`;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push({ object, matrix: matrix.clone() });
      }
    }
    object.children.forEach(visit);
  }
  visit(root);
  const batches = [];
  for (const entries of groups.values()) {
    if (entries.length < 2) continue;
    const first = entries[0].object;
    const batch = new InstancedMesh(first.geometry, first.material, entries.length);
    batch.castShadow = first.castShadow; batch.receiveShadow = first.receiveShadow;
    batch.renderOrder = first.renderOrder; batch.layers.mask = first.layers.mask;
    entries.forEach(({ object, matrix }, i) => { batch.setMatrixAt(i, matrix); object.removeFromParent(); });
    batch.instanceMatrix.needsUpdate = true;
    batch.computeBoundingBox(); batch.computeBoundingSphere(); root.add(batch); batch.updateWorldMatrix(true, false);
    batches.push(batch);
  }
  return batches;
}
