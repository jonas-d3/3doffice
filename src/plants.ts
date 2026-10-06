import * as THREE from 'three';
import { materials as m, random } from './materials';
import { mesh, cylinder, rod } from './geometry';
type Parent = THREE.Object3D;

function leaf(parent: Parent, position: THREE.Vector3, length: number, width: number, angle: number, lean: number) {
  const vertices: number[] = [], indices: number[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12, halfWidth = Math.pow(Math.sin(t * Math.PI), .75) * width;
    for (const side of [-1, 0, 1]) vertices.push(side * halfWidth, t * length, Math.sin(t * Math.PI * .8) * length * .2 + Math.abs(side) * halfWidth * .3);
  }
  for (let i = 0; i < 12; i++) for (let j = 0; j < 2; j++) {
    const a = i * 3 + j; indices.push(a, a + 3, a + 1, a + 1, a + 3, a + 4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.setIndex(indices); geometry.computeVertexNormals();
  const material = m.green.clone(); material.color.setHSL(.25 + random() * .05, .3 + random() * .15, .17 + random() * .07); material.side = THREE.DoubleSide;
  const object = mesh(parent, geometry, material, ...position.toArray() as [number, number, number]);
  object.rotation.set(lean, angle, .2); return object;
}

export function plant(parent: Parent, x: number, z: number, size = 1) {
  const group = new THREE.Group(); group.position.set(x, 0, z); group.scale.setScalar(size); parent.add(group);
  cylinder(group, .3, .245, .55, 0, .295, 0, m.black);
  cylinder(group, .27, .27, .02, 0, .56, 0, m.soil);
  for (let i = 0; i < 10; i++) {
    const angle = i * 2.4, height = .7 + random() * .7, reach = .15 + random() * .45;
    const tip = new THREE.Vector3(Math.sin(angle) * reach, .5 + height, Math.cos(angle) * reach);
    rod(group, [0, .5, 0], tip.toArray(), .012, m.green);
    leaf(group, tip, .55 + random() * .35, .14 + random() * .09, angle, .45 + random() * .7);
  }
}

