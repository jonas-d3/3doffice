import { Box3, Matrix4 } from 'three';
import { sceneSurfaces } from './scene-surfaces.mjs';

export function visibleInScene(object) {
  for (; object; object = object.parent) if (!object.visible) return false;
  return true;
}
// A conservative broad phase over world bounds. Moving objects are checked on
// every query, so objects entering the ray segment cannot reuse a positive result.
export function createVisibilityObjects(root) {
  const entries = new WeakMap(), geometries = new WeakMap();
  return {
    total: 0,
    select(region) {
      root.updateWorldMatrix(true, true);
      const objects = sceneSurfaces(root), candidates = []; this.total = objects.length;
      for (const object of objects) {
        if (!visibleInScene(object)) continue;
        const geometry = object.geometry, position = geometry.attributes.position, index = geometry.index;
        let shape = geometries.get(geometry);
        if (!shape || shape.position !== position || shape.version !== position?.version || shape.index !== index || shape.indexVersion !== index?.version) {
          geometry.computeBoundingBox(); geometry.computeBoundingSphere();
          shape = { position, version: position?.version, index, indexVersion: index?.version }; geometries.set(geometry, shape);
        }
        let entry = entries.get(object);
        if (!entry) { entry = { object, bounds: new Box3(), matrix: new Matrix4(), revision: 0 }; entries.set(object, entry); }
        const instanceVersion = object.instanceMatrix?.version;
        const side = Array.isArray(object.material) ? object.material.map(m => m.side).join(',') : object.material.side;
        const deformed = object.isSkinnedMesh || object.morphTargetInfluences?.length;
        if (entry.shape !== shape || entry.instanceVersion !== instanceVersion || entry.count !== object.count ||
          !entry.matrix.equals(object.matrixWorld) || entry.side !== side || entry.material !== object.material || entry.layers !== object.layers.mask || deformed) {
          if (object.isInstancedMesh) {
            object.computeBoundingBox(); object.computeBoundingSphere(); entry.bounds.copy(object.boundingBox);
          } else entry.bounds.copy(geometry.boundingBox);
          entry.bounds.applyMatrix4(object.matrixWorld);
          Object.assign(entry, { shape, instanceVersion, count: object.count, side, material: object.material, layers: object.layers.mask });
          entry.matrix.copy(object.matrixWorld); entry.revision++;
        }
        // Deformed meshes remain conservative candidates; current office meshes use CPU positions.
        if (deformed || entry.bounds.intersectsBox(region)) candidates.push(entry);
      }
      return candidates;
    },
  };
}
