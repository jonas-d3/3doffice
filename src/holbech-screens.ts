import * as THREE from 'three';
import type { CutawayWall } from './architecture';

function editorFrame(title: string) {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 565;
  const c = canvas.getContext('2d')!;
  c.fillStyle = '#18232d'; c.fillRect(0, 0, 1024, 60); c.fillRect(0, 523, 1024, 42);
  c.fillStyle = '#7af0c4'; c.font = '700 30px monospace'; c.fillText('3doffice', 22, 40);
  c.fillStyle = '#f3f6fc'; c.font = '24px monospace'; c.fillText(title, 225, 39);
  c.fillStyle = '#a8b8c8'; c.font = '21px monospace'; c.fillText('Holbech / bygger kontoret inde i kontoret', 22, 552);
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map, transparent: true, toneMapped: false, depthWrite: false });
}

export class HolbechScreens {
  private targets = [0, 1].map(() => new THREE.WebGLRenderTarget(768, 424, { type: THREE.HalfFloatType, samples: 2 }));
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial] = [
    new THREE.MeshBasicMaterial({ map: this.targets[0].texture }),
    new THREE.MeshBasicMaterial({ map: this.targets[1].texture }),
  ];
  private cameras = [
    this.camera(-5.4, 12.2, 18, 32, 46, 42),
    this.camera(8.2, 20.8, 7.2, 11, 17, 21),
  ];
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
    displays.forEach((display, index) => {
      display.name = `Holbech / ${index === 0 ? 'hele modellen' : 'kontoret'}`;
      const frame = new THREE.Mesh(display.geometry, editorFrame(index === 0 ? 'Scene / hele modellen' : 'Model / Kontoret'));
      frame.position.z = .001; display.add(frame);
    });
  }

  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, walls: CutawayWall[], roofs: THREE.Object3D[]) {
    if (!this.dirty) return;
    const previousTarget = renderer.getRenderTarget();
    const visibility = [...walls.map(wall => wall.group), ...roofs].map(object => ({ object, visible: object.visible }));
    // Hide the displays during capture so no texture is sampled while it is being written.
    this.materials.forEach(material => { material.visible = false; });
    try {
      roofs.forEach(roof => { roof.visible = false; });
      this.cameras.forEach((camera, index) => {
        walls.forEach(wall => { wall.group.visible = (camera.position[wall.axis] - wall.position) * wall.inside > 0; });
        renderer.setRenderTarget(this.targets[index]);
        renderer.render(scene, camera);
      });
      this.dirty = false;
    } finally {
      renderer.setRenderTarget(previousTarget);
      visibility.forEach(({ object, visible }) => { object.visible = visible; });
      this.materials.forEach(material => { material.visible = true; });
    }
  }
}
