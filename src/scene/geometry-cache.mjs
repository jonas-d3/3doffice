import { BoxGeometry, CylinderGeometry } from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Scene-lifetime ownership: consumers must clone before changing UVs/vertices and
// must not dispose a shared geometry when removing an individual mesh.
const boxes = new Map(), cylinders = new Map();
export function boxGeometry(width, height, depth, radius = 0) {
  const key = `${width},${height},${depth},${radius}`;
  if (!boxes.has(key)) boxes.set(key, radius ? new RoundedBoxGeometry(width, height, depth, 3, radius) : new BoxGeometry(width, height, depth));
  return boxes.get(key);
}
export function cylinderGeometry(top, bottom, height, segments) {
  const key = `${top},${bottom},${height},${segments}`;
  if (!cylinders.has(key)) cylinders.set(key, new CylinderGeometry(top, bottom, height, segments));
  return cylinders.get(key);
}
