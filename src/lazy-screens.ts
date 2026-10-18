import * as THREE from 'three';
import { LazyFeature } from './lazy-feature.mjs';
import { loadQueue, invalidateAssets } from './image-assets';
import { screenPriority } from './feature-triggers.mjs';

type Screens = {
  materials: THREE.MeshBasicMaterial[];
  screen?: THREE.Object3D;
  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean): boolean;
  loadImages?(): void;
  decorate?(screen: THREE.Mesh): void;
};

export function screenPlaceholder(name: string) {
  const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 144;
  const context = canvas.getContext('2d')!;
  context.fillStyle = '#172b35'; context.fillRect(0, 0, 256, 144);
  context.fillStyle = '#bce8db'; context.font = 'bold 22px sans-serif'; context.textAlign = 'center';
  context.fillText(name, 128, 78, 240);
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ name, map, toneMapped: false });
}

export function lazyScreens<M, T extends Screens>(name: string, count: number, load: () => Promise<M>, create: (module: M) => T) {
  const materials = Array.from({ length: count }, () => screenPlaceholder(name));
  let screen: THREE.Mesh | undefined;
  const feature = new LazyFeature(name, loadQueue, load, module => {
    const controller = create(module);
    controller.screen = screen;
    screen?.parent?.parent?.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      const index = materials.indexOf(object.material);
      if (index >= 0) object.material = controller.materials[index];
    });
    if (screen) controller.decorate?.(screen);
    controller.loadImages?.();
    materials.forEach(material => { material.map?.dispose(); material.dispose(); });
    return controller;
  }, invalidateAssets, (name: string) => {
    dispatchEvent(new CustomEvent('feature-load-error', { detail: name }));
  });
  feature.prefetch();
  return {
    materials, feature,
    get value() { return feature.value; },
    get screen() { return screen; },
    set screen(value: THREE.Mesh | undefined) {
      screen = value;
      const displays: THREE.Mesh[] = [];
      value?.parent?.parent?.traverse(object => {
        if (object instanceof THREE.Mesh && materials.includes(object.material)) displays.push(object);
      });
      if (value && !displays.includes(value)) displays.push(value);
      displays.forEach(display => { display.userData.relatedScreens = displays; });
    },
    update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
      const priority = screen ? screenPriority(screen, camera, innerHeight) : 0;
      feature.setRelevant(priority > 0, priority);
      return feature.value?.update(camera, dt, animate) ?? false;
    },
  };
}
