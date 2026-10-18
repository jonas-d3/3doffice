import * as THREE from 'three';
import { installInteraction } from './easter-interaction';
import { refreshSceneSurfaces } from './scene-surfaces.mjs';
import type { JesperScreen } from './jesper-screen';
import type { Navigation } from './navigation';
export class SalmonController {
  private dirty = false;
  constructor(office: THREE.Group, jesper: JesperScreen, navigation: Navigation, reducedMotion: MediaQueryList, blocked: () => boolean) {
    const point = new THREE.Vector3();
    installInteraction(office, navigation, blocked, jesper.screen!, () => jesper.screen!.getWorldPosition(point), hit => {
      if (hit.object !== jesper.screen || !hit.uv || !jesper.hitFish(hit.uv)) return;
      if (jesper.catchFish(reducedMotion.matches)) { this.dirty = true; refreshSceneSurfaces(office); }
    });
  }
  update() { const changed = this.dirty; this.dirty = false; return changed; }
}
