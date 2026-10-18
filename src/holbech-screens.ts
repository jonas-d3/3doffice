import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';
import type { CutawayWall } from './architecture';
import type { Visitor } from './visitor';

function editorFrame(title: string, caption = 'Holbech / bygger kontoret inde i kontoret') {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 565;
  const c = canvas.getContext('2d')!;
  c.fillStyle = '#18232d'; c.fillRect(0, 0, 1024, 60); c.fillRect(0, 523, 1024, 42);
  c.fillStyle = '#7af0c4'; c.font = '700 30px monospace'; c.fillText('3doffice', 22, 40);
  c.fillStyle = '#f3f6fc'; c.font = '24px monospace'; c.fillText(title, 225, 39);
  c.fillStyle = '#a8b8c8'; c.font = '21px monospace'; c.fillText(caption, 22, 552);
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map, transparent: true, toneMapped: false, depthWrite: false });
}

export class HolbechScreens {
  private targets?: THREE.WebGLRenderTarget[];
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial] = [
    new THREE.MeshBasicMaterial(),
    new THREE.MeshBasicMaterial(),
  ];
  private overviewCamera = this.camera(-5.4, 12.2, 18, 32, 46, 42);
  private liveDisplay?: THREE.Mesh;
  private center = new THREE.Vector3();
  private normal = new THREE.Vector3();
  private offset = new THREE.Vector3();
  private projected = new THREE.Vector3();
  private elapsed = 0;
  private liveDirty = true;
  dirty = true;

  private camera(x: number, z: number, height: number, dx: number, dy: number, dz: number) {
    const width = height * 768 / 424;
    const camera = new THREE.OrthographicCamera(-width, width, height, -height, .1, 200);
    camera.position.set(x + dx, dy, z + dz); camera.lookAt(x, 0, z);
    return camera;
  }

  decorate(firstDisplay: THREE.Mesh) {
    const displays: THREE.Mesh[] = [];
    firstDisplay.parent!.parent!.traverse(object => {
      if (object instanceof THREE.Mesh && this.materials.includes(object.material)) displays.push(object);
    });
    displays.forEach(display => {
      const live = display.material === this.materials[1];
      if (live) this.liveDisplay = display;
      display.name = `Holbech / ${live ? 'Davids udsyn' : 'hele modellen'}`;
      const frame = new THREE.Mesh(display.geometry, live
        ? editorFrame('David / live', 'Davids udsyn / kamera i øjenhøjde')
        : editorFrame('Scene / hele modellen'));
      frame.position.z = .001; display.add(frame);
    });
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    if (!animate || !this.liveDisplay) return false;
    this.liveDisplay.getWorldPosition(this.center);
    this.liveDisplay.getWorldDirection(this.normal); this.offset.copy(camera.position).sub(this.center);
    if ((this.offset.lengthSq() > 8 ** 2 && !screenPriority(this.liveDisplay, camera, innerHeight)) || this.offset.dot(this.normal) <= 0) return false;
    camera.updateMatrixWorld(); this.projected.copy(this.center).project(camera);
    if (this.projected.z < -1 || this.projected.z > 1 || Math.abs(this.projected.x) > 1.3 || Math.abs(this.projected.y) > 1.3) return false;
    this.elapsed += dt;
    if (this.elapsed < 1 / 12) return false;
    this.elapsed %= 1 / 12;
    this.liveDirty = true;
    return true;
  }

  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, walls: CutawayWall[], roofs: THREE.Object3D[], visitor: Visitor) {
    if (!this.dirty && !this.liveDirty) return;
    if (!this.targets) {
      this.targets = [0, 1].map(() => new THREE.WebGLRenderTarget(768, 424, { type: THREE.HalfFloatType, samples: 2 }));
      this.materials.forEach((material, index) => { material.map = this.targets![index].texture; material.needsUpdate = true; });
    }
    const previousTarget = renderer.getRenderTarget();
    const visibility = [...walls.map(wall => wall.group), ...roofs, visitor.group, ...this.materials]
      .map(object => ({ object, visible: object.visible }));
    // Hide the displays during capture so no texture is sampled while it is being written.
    this.materials.forEach(material => { material.visible = false; });
    try {
      if (this.dirty) {
        const camera = this.overviewCamera;
        roofs.forEach(roof => { roof.visible = false; });
        walls.forEach(wall => { wall.group.visible = (camera.position[wall.axis] - wall.position) * wall.inside > 0; });
        renderer.setRenderTarget(this.targets[0]);
        renderer.render(scene, camera);
      }
      // David sees the enclosed rooms, without his own head obscuring the camera.
      walls.forEach(wall => { wall.group.visible = true; });
      roofs.forEach(roof => { roof.visible = true; });
      visitor.group.visible = false;
      visitor.viewCamera.updateWorldMatrix(true, false);
      renderer.setRenderTarget(this.targets[1]);
      renderer.render(scene, visitor.viewCamera);
      this.dirty = false;
      this.liveDirty = false;
    } finally {
      renderer.setRenderTarget(previousTarget);
      visibility.forEach(({ object, visible }) => { object.visible = visible; });
    }
  }
}
