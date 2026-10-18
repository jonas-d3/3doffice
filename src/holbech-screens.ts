import * as THREE from 'three';
import { screenPriority } from './feature-triggers.mjs';
import { drawScreenButton, trackButton, stopButton, screenSize } from './holbech-screen-buttons.mjs';
import type { CutawayWall } from './architecture';
import type { Visitor } from './visitor';

function canvasMaterial(transparent = false) {
  const canvas = document.createElement('canvas'); canvas.width = screenSize.width; canvas.height = screenSize.height;
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map, transparent, toneMapped: false, depthWrite: !transparent });
}
function editorFrame(material: THREE.MeshBasicMaterial, live: boolean, tracking: boolean) {
  const c = (material.map!.image as HTMLCanvasElement).getContext('2d')!;
  c.clearRect(0, 0, 1024, 565);
  c.fillStyle = '#18232d'; c.fillRect(0, 0, 1024, 60); c.fillRect(0, 523, 1024, 42);
  c.fillStyle = '#7af0c4'; c.font = '700 30px monospace'; c.fillText('3doffice', 22, 40);
  c.fillStyle = '#f3f6fc'; c.font = '24px monospace'; c.fillText(live ? 'David' : 'Scene / hele modellen', 225, 39);
  c.fillStyle = '#a8b8c8'; c.font = '21px monospace'; c.fillText(live ? 'Davids udsyn / kamera i øjenhøjde' : 'Holbech / bygger kontoret inde i kontoret', 22, 552);
  if (tracking) drawScreenButton(c, stopButton, 'Stop tracking');
  material.map!.needsUpdate = true;
}

export class HolbechScreens {
  private overviewTarget?: THREE.WebGLRenderTarget;
  private liveTarget?: THREE.WebGLRenderTarget;
  private startMaterial = canvasMaterial();
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial] = [
    new THREE.MeshBasicMaterial({ color: '#172b35', toneMapped: false }), this.startMaterial.clone(),
  ];
  private frames: THREE.MeshBasicMaterial[] = [];
  private overviewCamera = this.camera(-5.4, 12.2, 18, 32, 46, 42);
  private overviewDisplay?: THREE.Mesh;
  liveDisplay?: THREE.Mesh;
  tracking = false;
  private paused = false;
  private overviewRelevant = false;
  private liveRelevant = false;
  private elapsed = 0;
  private liveDirty = false;
  private dirty = true;
  private center = new THREE.Vector3();

  constructor() {
    const c = (this.startMaterial.map!.image as HTMLCanvasElement).getContext('2d')!;
    c.fillStyle = '#172b35'; c.fillRect(0, 0, 1024, 565);
    c.textAlign = 'center'; c.fillStyle = '#f3f6fc'; c.font = 'bold 60px sans-serif'; c.fillText('David', 512, 180);
    c.font = '32px sans-serif'; c.fillText('Se kontoret gennem Davids øjne', 512, 242);
    drawScreenButton(c, trackButton, 'Track David');
  }

  private camera(x: number, z: number, height: number, dx: number, dy: number, dz: number) {
    const width = height * 768 / 424;
    const camera = new THREE.OrthographicCamera(-width, width, height, -height, .1, 200);
    camera.position.set(x + dx, dy, z + dz); camera.lookAt(x, 0, z); return camera;
  }

  decorate(firstDisplay: THREE.Mesh) {
    firstDisplay.parent!.parent!.traverse(object => {
      if (!(object instanceof THREE.Mesh) || !this.materials.includes(object.material)) return;
      const live = object.material === this.materials[1];
      if (live) this.liveDisplay = object; else this.overviewDisplay = object;
      object.name = `Holbech / ${live ? 'Davids udsyn' : 'hele modellen'}`;
      const material = canvasMaterial(true); this.frames[live ? 1 : 0] = material; editorFrame(material, live, false);
      const frame = new THREE.Mesh(object.geometry, material); frame.position.z = .001; object.add(frame);
    });
  }

  // Active live video picks up assets at its next 12 Hz tick. In reduced motion
  // only a fresh explicit activation requests another still.
  invalidate() { this.dirty = true; }
  setPaused(paused: boolean) { this.paused = paused; if (paused) this.elapsed = 0; }
  setTracking(tracking: boolean) {
    if (tracking === this.tracking) return;
    this.tracking = tracking; this.liveDirty = tracking; this.elapsed = 0;
    this.materials[1].map = tracking && this.liveTarget ? this.liveTarget.texture : this.startMaterial.map;
    this.materials[1].toneMapped = !!(tracking && this.liveTarget);
    this.materials[1].needsUpdate = true;
    if (this.frames[1]) editorFrame(this.frames[1], true, tracking);
  }

  update(camera: THREE.PerspectiveCamera, dt: number, animate: boolean) {
    let changed = false;
    // Leaving the area cancels tracking even during help, reduced motion or a game.
    if (this.tracking && this.liveDisplay && camera.position.distanceTo(this.liveDisplay.getWorldPosition(this.center)) > 8) {
      this.setTracking(false); changed = true;
    }
    this.overviewRelevant = !!this.overviewDisplay && screenPriority(this.overviewDisplay, camera, innerHeight, 6, false) > 0;
    this.liveRelevant = !!this.liveDisplay && screenPriority(this.liveDisplay, camera, innerHeight, 8, false) > 0;
    if (!this.paused && this.tracking && this.liveRelevant && animate) {
      this.elapsed += dt;
      if (this.elapsed >= 1 / 12) { this.elapsed %= 1 / 12; this.liveDirty = true; }
    } else this.elapsed = 0;
    return changed || !this.paused && (this.dirty && this.overviewRelevant || this.tracking && this.liveRelevant && this.liveDirty);
  }

  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, walls: CutawayWall[], roofs: THREE.Object3D[], visitor: Visitor) {
    if (this.paused) return;
    const live = this.tracking && this.liveRelevant && this.liveDirty;
    if (!live && !(this.dirty && this.overviewRelevant)) return;
    const previousTarget = renderer.getRenderTarget();
    const visibility = [...walls.map(wall => wall.group), ...roofs, visitor.group, ...this.materials, ...this.frames]
      .map(object => ({ object, visible: object.visible }));
    try {
      const target = live
        ? this.liveTarget ??= new THREE.WebGLRenderTarget(768, 424, { type: THREE.HalfFloatType, samples: 2 })
        : this.overviewTarget ??= new THREE.WebGLRenderTarget(768, 424, { type: THREE.HalfFloatType, samples: 2 });
      const material = this.materials[live ? 1 : 0];
      if (material.map !== target.texture) {
        material.map = target.texture; material.color.set('#ffffff'); material.toneMapped = true; material.needsUpdate = true;
      }
      // Neither display nor its frame samples a texture being captured.
      [...this.materials, ...this.frames].forEach(material => { material.visible = false; });
      const camera = live ? visitor.viewCamera : this.overviewCamera;
      roofs.forEach(roof => { roof.visible = live; });
      walls.forEach(wall => { wall.group.visible = live || (camera.position[wall.axis] - wall.position) * wall.inside > 0; });
      if (live) visitor.group.visible = false;
      camera.updateWorldMatrix(true, false); renderer.setRenderTarget(target); renderer.render(scene, camera);
      if (live) { this.liveDirty = false; this.elapsed = 0; } else this.dirty = false;
    } catch {
      // Keep controls usable; a new explicit activation can retry, never an automatic frame loop.
      this.dirty = false; this.setTracking(false);
    } finally {
      renderer.setRenderTarget(previousTarget);
      visibility.forEach(({ object, visible }) => { object.visible = visible; });
    }
  }
}
