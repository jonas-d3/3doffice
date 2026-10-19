import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { createScreenVisibility } from './youtube-screen-visibility.mjs';

const videoId = 'pomFE55c_Sw';

export class YoutubeScreen {
  private renderer = new CSS3DRenderer();
  private scene = new THREE.Scene();
  private iframe = document.createElement('iframe');
  private display: CSS3DObject;
  private center = new THREE.Vector3();
  private worldScale = new THREE.Vector3();
  private visible: ReturnType<typeof createScreenVisibility>;
  private loaded = false;

  constructor(private screen: THREE.Mesh, scene: THREE.Scene, canvas: HTMLCanvasElement) {
    if (!(screen.geometry instanceof THREE.PlaneGeometry)) throw new Error('YouTube requires a flat monitor');
    this.visible = createScreenVisibility(screen as THREE.Mesh<THREE.PlaneGeometry>, scene);
    this.iframe.className = 'youtube-screen';
    this.iframe.title = 'YouTube på Martins anden skærm';
    this.iframe.width = '960'; this.iframe.height = '529';
    this.iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    this.iframe.allowFullscreen = true;
    this.iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    // Transform a wrapper: Chromium misses pointer hits on an iframe rotated 90° directly.
    const panel = document.createElement('div');
    panel.className = 'youtube-panel';
    panel.style.inlineSize = this.iframe.width + 'px'; panel.style.blockSize = this.iframe.height + 'px';
    panel.appendChild(this.iframe);
    this.display = new CSS3DObject(panel); this.display.visible = false;
    this.scene.add(this.display);
    this.renderer.domElement.className = 'youtube-layer';
    // CSS3DRenderer defaults to overflow:hidden, which can scroll when iframe controls gain focus.
    this.renderer.domElement.style.overflow = 'clip';
    canvas.after(this.renderer.domElement);
    this.resize();
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.unload(); });
  }

  resize() { this.renderer.setSize(innerWidth, innerHeight); }

  private unload() {
    this.display.visible = false; this.renderer.domElement.hidden = true;
    if (!this.loaded) return;
    // Removing the document also stops its audio, including when the tab is hidden.
    this.iframe.removeAttribute('src'); this.loaded = false;
  }

  update(camera: THREE.PerspectiveCamera, enabled: boolean) {
    enabled &&= !document.hidden;
    this.screen.getWorldPosition(this.center);
    if (!enabled || camera.position.distanceToSquared(this.center) > 25) this.unload();
    this.display.visible = enabled && this.visible(camera);
    this.renderer.domElement.hidden = !this.display.visible;
    if (this.display.visible) {
      // Cross-origin video cannot be copied into a WebGL texture. Match an HTML iframe to the plane instead.
      this.screen.matrixWorld.decompose(this.display.position, this.display.quaternion, this.worldScale);
      const { width, height } = (this.screen.geometry as THREE.PlaneGeometry).parameters;
      this.display.scale.set(width / 960, height / 529, 1).multiply(this.worldScale);
      if (!this.loaded) {
        this.iframe.src = `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0`;
        this.loaded = true;
      }
    }
    this.renderer.render(this.scene, camera);
  }
}
