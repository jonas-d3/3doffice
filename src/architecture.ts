import * as THREE from 'three';
import { box } from './geometry';
import { materials as m } from './materials';

export type Bounds = { minX: number; maxX: number; minZ: number; maxZ: number; height?: number };
export type CutawayWall = { group: THREE.Group; axis: 'x' | 'z'; position: number; inside: number };

export function slab(parent: THREE.Object3D, bounds: Bounds, material = m.floor) {
  const { minX, maxX, minZ, maxZ } = bounds;
  box(parent, maxX - minX, .22, maxZ - minZ, (minX + maxX) / 2, -.14, (minZ + maxZ) / 2, m.trim);
  box(parent, maxX - minX, .05, maxZ - minZ, (minX + maxX) / 2, -.005, (minZ + maxZ) / 2, material);
}

export function partition(parent: THREE.Object3D, walls: CutawayWall[], axis: 'x' | 'z', position: number, from: number, to: number, inside: number, height: number, door?: [number, number]) {
  const group = new THREE.Group(); parent.add(group);
  walls.push({ group, axis, position, inside });
  const piece = (a: number, b: number, bottom = 0) => {
    if (b <= a) return;
    box(group, axis === 'x' ? .2 : b - a, height - bottom, axis === 'z' ? .2 : b - a,
      axis === 'x' ? position : (a + b) / 2, (height + bottom) / 2, axis === 'z' ? position : (a + b) / 2, m.wall);
    if (!bottom) box(group, axis === 'x' ? .23 : b - a, .1, axis === 'z' ? .23 : b - a,
      axis === 'x' ? position : (a + b) / 2, .05, axis === 'z' ? position : (a + b) / 2, m.white);
  };
  if (door) {
    piece(from, door[0]); piece(door[1], to); piece(door[0], door[1], 2.25);
    for (const edge of door) box(group, axis === 'x' ? .24 : .045, 2.27, axis === 'z' ? .24 : .045,
      axis === 'x' ? position : edge, 1.135, axis === 'z' ? position : edge, m.white);
  } else piece(from, to);
  return group;
}

export function roof(parent: THREE.Object3D, bounds: Bounds, height: number) {
  const group = new THREE.Group(); parent.add(group);
  box(group, bounds.maxX - bounds.minX, .1, bounds.maxZ - bounds.minZ,
    (bounds.minX + bounds.maxX) / 2, height + .05, (bounds.minZ + bounds.maxZ) / 2, m.wall);
  group.visible = false;
  return group;
}

export function floorLabel(parent: THREE.Object3D, bounds: Bounds, lines: string[]) {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 384;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#6b7165'; ctx.textAlign = 'center';
  lines.forEach((line, i) => { ctx.font = `${i ? 36 : 58}px sans-serif`; ctx.fillText(line, 512, 140 + i * 74); });
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 1.39), new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false }));
  label.rotation.x = -Math.PI / 2;
  label.position.set((bounds.minX + bounds.maxX) / 2, .025, (bounds.minZ + bounds.maxZ) / 2);
  parent.add(label);
}
