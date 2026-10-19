import * as THREE from 'three';
import { sceneSurfaces } from '../scene/scene-surfaces.mjs';
import type { Navigation } from '../navigation/navigation';

export function belongsTo(object: THREE.Object3D, target: THREE.Object3D) {
  for (let current: THREE.Object3D | null = object; current; current = current.parent) if (current === target) return true;
  return false;
}
export function visibleHit(ray: THREE.Raycaster, surfaces: THREE.Mesh[]) {
  return ray.intersectObjects(surfaces, false).find(hit => {
    for (let object: THREE.Object3D | null = hit.object; object; object = object.parent) if (!object.visible) return false;
    const material = (hit.object as THREE.Mesh).material;
    return (Array.isArray(material) ? material : [material]).some(value => value.visible && (!value.transparent || value.opacity >= .5));
  });
}

export function installInteraction(office: THREE.Group, navigation: Navigation, blocked: () => boolean,
  target: THREE.Object3D, point: () => THREE.Vector3, activate: (hit: THREE.Intersection) => void) {
  const ray = new THREE.Raycaster(), projected = new THREE.Vector3(), direction = new THREE.Vector3();
  const surfaces = sceneSurfaces(office), canvas = navigation.canvas;
  let gesture: { id: number; x: number; y: number; moved: boolean } | null = null;
  canvas.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || gesture) { gesture = null; return; }
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
  });
  canvas.addEventListener('pointermove', event => {
    if (gesture && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 6) gesture.moved = true;
  });
  canvas.addEventListener('pointerup', event => {
    const start = gesture; gesture = null;
    if (!start || start.id !== event.pointerId || start.moved || blocked() || !navigation.isWalking) return;
    const p = point(), camera = navigation.camera;
    if (camera.position.distanceToSquared(p) > 3.5 ** 2) return;
    projected.copy(p).project(camera);
    if (projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > .85 || Math.abs(projected.y) > .75) return;
    direction.copy(p).sub(camera.position); ray.far = direction.length() + .01; ray.set(camera.position, direction.normalize());
    const obstruction = visibleHit(ray, surfaces);
    if (obstruction && !belongsTo(obstruction.object, target)) return;
    const rect = canvas.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2), camera); ray.far = 3.5;
    const hit = visibleHit(ray, surfaces);
    if (hit && belongsTo(hit.object, target)) activate(hit);
  });
  const cancel = () => { gesture = null; };
  canvas.addEventListener('pointercancel', cancel); canvas.addEventListener('lostpointercapture', cancel); addEventListener('blur', cancel);
}
