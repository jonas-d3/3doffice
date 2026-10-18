import { Box3, Matrix4, Raycaster, Vector3 } from 'three';
import { createVisibilityObjects, visibleInScene } from './visibility-objects.mjs';

/** CSS cannot share WebGL's depth buffer. All five samples must be unobstructed.
 * @param {import('three').Mesh<import('three').PlaneGeometry>} screen
 * @param {import('three').Object3D} scene
 */
export function createScreenVisibility(screen, scene, { indexed = true, cache = true } = {}) {
  const center = new Vector3(), normal = new Vector3(), offset = new Vector3(), projected = new Vector3();
  const ray = new Raycaster(), region = new Box3(), objects = indexed ? createVisibilityObjects(scene) : undefined;
  const samples = [[0, 0], [-.49, -.49], [-.49, .49], [.49, -.49], [.49, .49]].map(([x,y])=>({x,y,point:new Vector3()}));
  const stats = { queries: 0, raycasts: 0, candidates: 0, total: 0, cacheHits: 0 };
  const lastCamera = new Matrix4(), lastProjection = new Matrix4(), lastScreen = new Matrix4();
  let lastCandidates = [], hasResult = false, lastResult = false;
  /** @param {import('three').PerspectiveCamera} camera */
  const check = camera => {
    stats.queries++; camera.updateWorldMatrix(true, false); screen.updateWorldMatrix(true, false);
    screen.getWorldPosition(center); offset.copy(camera.position).sub(center);
    normal.set(0, 0, 1).transformDirection(screen.matrixWorld); projected.copy(center).project(camera);
    if (!visibleInScene(screen) || offset.lengthSq() > 16 || normal.dot(offset) <= .05 ||
      projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > 1 || Math.abs(projected.y) > 1) return false;
    const { width, height } = screen.geometry.parameters;
    region.makeEmpty().expandByPoint(camera.position);
    for (const sample of samples) { sample.point.set(sample.x * width, sample.y * height, 0).applyMatrix4(screen.matrixWorld); region.expandByPoint(sample.point); }
    region.expandByScalar(.001);
    const candidates = objects?.select(region);
    stats.candidates = candidates?.length ?? 0; stats.total = objects?.total ?? 0;
    // Re-evaluate bounds before reusing a result, including objects entering the
    // segment. Never keep a positive result across a camera or blocker change.
    if (cache && candidates && hasResult && lastCamera.equals(camera.matrixWorld) &&
      lastProjection.equals(camera.projectionMatrix) && lastScreen.equals(screen.matrixWorld) &&
      candidates.length === lastCandidates.length && candidates.every((entry, i) =>
        entry.object === lastCandidates[i].object && entry.revision === lastCandidates[i].revision)) {
      stats.cacheHits++; return lastResult;
    }
    const meshes = candidates?.map(entry => entry.object);
    const result = samples.every(({ point }) => {
      offset.copy(point).sub(camera.position); ray.far = offset.length() + .001; ray.set(camera.position, offset.normalize()); stats.raycasts++;
      const hits = meshes ? ray.intersectObjects(meshes, false) : ray.intersectObject(scene, true);
      return hits.find(hit => visibleInScene(hit.object))?.object === screen;
    });
    if (cache && candidates) {
      lastCamera.copy(camera.matrixWorld); lastProjection.copy(camera.projectionMatrix); lastScreen.copy(screen.matrixWorld);
      lastCandidates = candidates.map(({ object, revision }) => ({ object, revision })); hasResult = true; lastResult = result;
    }
    return result;
  };
  return Object.assign(check, { stats });
}
