import * as THREE from 'three';
import { refreshSceneSurfaces } from './scene-surfaces.mjs';
import { box, rod } from './geometry';
import { BARREL_RADIUS, LADDER_X, PLATFORM_HALF, platformY } from './donkey-kong.mjs';
import { day21Tables } from './day21-layout.mjs';

const table = day21Tables[0];
// The right-hand truss crosses the table: keep the miniature in the clear left bay.
export const kongPosition = new THREE.Vector3(table.x - .4, .77, table.z);
export const kongTable = { minX: table.x - table.width / 2, maxX: table.x + table.width / 2,
  minZ: table.z - table.depth / 2, maxZ: table.z + table.depth / 2, height: .77 };
const material = (color: string) => new THREE.MeshStandardMaterial({ color, roughness: .72 });
const red = material('#cd3e4f'), gold = material('#edb756'), teal = material('#4caeae');
const dark = material('#25303b'), fur = material('#714124'), face = material('#d6a46c');
const blue = material('#2858ad');
const barrelWood = material('#a8622f'), barrelMetal = material('#37434a');
const bodyGeometry = new THREE.CylinderGeometry(BARREL_RADIUS, BARREL_RADIUS, .065, 12).rotateX(Math.PI / 2);
const ringGeometry = new THREE.TorusGeometry(BARREL_RADIUS + .001, .004, 4, 12);
const grainGeometry = new THREE.BoxGeometry(.065, .008, .002);

export function barrelModel() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(bodyGeometry, barrelWood); body.castShadow = true; g.add(body);
  for (const z of [-.025, .025]) {
    const ring = new THREE.Mesh(ringGeometry, barrelMetal); ring.position.z = z; g.add(ring);
  }
  // End grain makes the rolling motion legible even when viewed head-on.
  for (const z of [-.033, .033]) {
    const grain = new THREE.Mesh(grainGeometry, gold); grain.position.z = z; g.add(grain);
  }
  return g;
}

export function createDonkeyKongModel(parent: THREE.Object3D) {
  const group = new THREE.Group(); group.name = 'Donkey Kong · bordspil';
  group.position.copy(kongPosition); parent.add(group);
  box(group, 1.36, .035, .34, 0, .018, 0, dark, .012);
  for (const x of [-.61, .61]) box(group, .035, .85, .035, x, .44, -.12, dark);
  for (let level = 0; level < 3; level++) {
    const slope = level % 2 ? .045 : -.045;
    const beam = box(group, PLATFORM_HALF * 2, .035, .23, 0, platformY(level, 0) - .0175, 0, red);
    beam.rotation.z = Math.atan(slope);
    for (let i = 0; i < 10; i++) {
      const x = -.58 + i * .12;
      rod(group, [x, platformY(level, x) - .032, .119], [x + .06, platformY(level, x + .06) - .004, .119], .004, gold);
    }
  }
  LADDER_X.forEach((x, level) => {
    const bottom = platformY(level, x), top = platformY(level + 1, x);
    for (const side of [-1, 1]) rod(group, [x + side * .038, bottom, .13], [x + side * .038, top + .03, .13], .006, teal);
    for (let y = bottom + .03; y < top + .02; y += .045) rod(group, [x - .038, y, .13], [x + .038, y, .13], .005, teal);
  });
  const gorilla = new THREE.Group(); group.add(gorilla); gorilla.position.set(-.49, platformY(2, -.49), -.045);
  box(gorilla, .16, .16, .11, 0, .12, 0, fur, .02);
  box(gorilla, .095, .08, .105, 0, .235, .01, fur, .015);
  box(gorilla, .077, .045, .025, 0, .225, .068, face, .008);
  for (const side of [-1, 1]) {
    box(gorilla, .065, .15, .08, side * .105, .11, 0, fur, .014).rotation.z = side * .2;
    box(gorilla, .065, .04, .11, side * .055, .025, .025, fur, .008);
    box(gorilla, .012, .012, .008, side * .022, .247, .084, dark);
  }
  box(gorilla, .06, .07, .015, 0, .13, .063, face, .012);
  const player = new THREE.Group(); group.add(player);
  for (const side of [-1, 1]) {
    box(player, .022, .042, .035, side * .017, .025, 0, blue);
    box(player, .029, .014, .046, side * .018, .008, .008, dark);
    box(player, .017, .05, .026, side * .04, .078, 0, red);
  }
  box(player, .055, .052, .038, 0, .072, 0, blue);
  box(player, .05, .04, .041, 0, .118, 0, face);
  box(player, .064, .018, .052, 0, .145, .005, red);
  box(player, .022, .009, .005, .011, .117, .024, dark);
  const flagX = .51, flagY = platformY(2, flagX);
  rod(group, [flagX, flagY, -.06], [flagX, flagY + .24, -.06], .006, gold);
  box(group, .095, .065, .008, flagX - .048, flagY + .2, -.06, gold);

  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 128;
  const c = canvas.getContext('2d')!; c.fillStyle = '#25303b'; c.fillRect(0, 0, 1024, 128);
  c.fillStyle = '#edb756'; c.font = 'bold 68px monospace'; c.textAlign = 'center'; c.fillText('DONKEY KONG', 512, 78);
  c.font = '20px monospace'; c.fillStyle = '#fff1ca'; c.fillText('KLIK / ENTER  ·  NÅ FLAGET', 512, 110);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.25, .156), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }));
  sign.position.set(0, 1.12, -.1); group.add(sign);
  return { group, player, gorilla };
}

// Each chunk adds five draw calls, regardless of how many old barrels it holds.
// Completed chunks keep their matrices; settled barrels need no per-frame uploads.
export class BarrelInstances {
  private chunks: THREE.InstancedMesh[][] = [];
  private dummy = new THREE.Object3D();
  private pose = new THREE.Object3D();
  private size = 128;
  private prototype = barrelModel();
  private revisions: number[] = [];
  constructor(private parent: THREE.Object3D) {}

  update(barrels: { x: number; y: number; z: number; angle: number; heading: number; revision: number }[]) {
    const changedChunks = new Set<THREE.InstancedMesh[]>();
    let structureChanged = false;
    barrels.forEach((b, index) => {
      if (b.revision === this.revisions[index]) return;
      this.revisions[index] = b.revision;
      const chunkIndex = Math.floor(index / this.size), slot = index % this.size;
      if (!this.chunks[chunkIndex]) {
        structureChanged = true;
        this.chunks[chunkIndex] = this.prototype.children.map(part => {
          const mesh = part as THREE.Mesh;
          const instances = new THREE.InstancedMesh(mesh.geometry, mesh.material, this.size);
          instances.count = 0; instances.castShadow = true; instances.frustumCulled = false;
          this.parent.add(instances); return instances;
        });
      }
      const chunk = this.chunks[chunkIndex]; changedChunks.add(chunk);
      // Update one last time on the frame a barrel goes to sleep.
      this.pose.position.set(b.x, b.y, b.z); this.pose.rotation.set(0, b.heading + Math.PI / 2, 0); this.pose.rotateZ(-b.angle); this.pose.updateMatrix();
      chunk.forEach((instances, partIndex) => {
        const part = this.prototype.children[partIndex]; part.updateMatrix();
        this.dummy.matrix.multiplyMatrices(this.pose.matrix, part.matrix);
        instances.setMatrixAt(slot, this.dummy.matrix);
        instances.count = Math.max(instances.count, slot + 1); instances.instanceMatrix.needsUpdate = true;
      });
    });
    changedChunks.forEach(chunk => chunk.forEach(mesh => { mesh.computeBoundingBox(); mesh.computeBoundingSphere(); }));
    if (structureChanged) refreshSceneSurfaces(this.parent);
  }
}
