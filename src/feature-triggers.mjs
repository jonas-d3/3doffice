import { Vector3 } from 'three';

const center = new Vector3(), normal = new Vector3(), offset = new Vector3(), projected = new Vector3(), edge = new Vector3();
// Projected size permits free overview zoom, including a narrow camera field of view.
export function screenPriority(screen, camera, viewportHeight = 1000) {
  for (let object = screen; object; object = object.parent) if (!object.visible) return 0;
  screen.getWorldPosition(center); screen.getWorldDirection(normal);
  offset.copy(camera.position).sub(center);
  if (offset.dot(normal) <= 0) return 0;
  camera.updateMatrixWorld(); projected.copy(center).project(camera);
  if (projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > 1.3 || Math.abs(projected.y) > 1.3) return 0;
  const height = screen.geometry?.parameters?.height ?? .36;
  edge.set(0, height / 2, 0); screen.localToWorld(edge); edge.project(camera);
  const pixels = edge.distanceTo(projected) * viewportHeight;
  return pixels >= 28 || offset.lengthSq() < 6 ** 2 ? 10 + Math.min(pixels, 1000) : 0;
}
