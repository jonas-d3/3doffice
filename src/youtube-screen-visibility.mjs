import { Raycaster, Vector3 } from 'three';

/** @param {import('three').Object3D} object */
function visibleInScene(object) {
  for (let current = object; current; current = current.parent) if (!current.visible) return false;
  return true;
}

/**
 * CSS cannot share WebGL's depth buffer, so hide the overlay when its face is obstructed.
 * @param {import('three').Mesh<import('three').PlaneGeometry>} screen
 * @param {import('three').Object3D} scene
 */
export function createScreenVisibility(screen, scene) {
  const center = new Vector3(), normal = new Vector3(), offset = new Vector3();
  const projected = new Vector3(), point = new Vector3();
  const ray = new Raycaster();
  const { width, height } = screen.geometry.parameters;
  const samples = [[0, 0], [-.49, -.49], [-.49, .49], [.49, -.49], [.49, .49]];

  /** @param {import('three').PerspectiveCamera} camera */
  return camera => {
    screen.updateWorldMatrix(true, false);
    screen.getWorldPosition(center);
    offset.copy(camera.position).sub(center);
    normal.set(0, 0, 1).transformDirection(screen.matrixWorld);
    projected.copy(center).project(camera);
    if (!visibleInScene(screen) || offset.lengthSq() > 16 || normal.dot(offset) <= .05 ||
      projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > 1 || Math.abs(projected.y) > 1) return false;

    return samples.every(([x, y]) => {
      point.set(x * width, y * height, 0).applyMatrix4(screen.matrixWorld);
      offset.copy(point).sub(camera.position);
      ray.set(camera.position, offset.clone().normalize());
      ray.far = offset.length() + .001;
      const hit = ray.intersectObject(scene, true).find(hit => visibleInScene(hit.object));
      return hit?.object === screen;
    });
  };
}
