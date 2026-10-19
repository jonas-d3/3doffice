import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { createScreenVisibility } from './youtube-screen-visibility.mjs';

const playlistUrl = 'https://open.spotify.com/embed/playlist/70o2jGU2JKUAtbzEex4lEN?utm_source=generator&si=34bb707eeaca4768';
const width = 640, height = 352;
const playerWidth = width / 2;

export class SpotifyScreen {
  private renderer = new CSS3DRenderer();
  private scene = new THREE.Scene();
  private iframe = document.createElement('iframe');
  private display: CSS3DObject;
  private center = new THREE.Vector3();
  private worldScale = new THREE.Vector3();
  private visible: ReturnType<typeof createScreenVisibility>;
  private screen: THREE.Mesh<THREE.PlaneGeometry>;
  private loaded = false;

  constructor(screen: THREE.Mesh, scene: THREE.Scene, canvas: HTMLCanvasElement) {
    if (!(screen.geometry instanceof THREE.PlaneGeometry)) throw new Error('Spotify requires a flat monitor');
    this.screen = screen as THREE.Mesh<THREE.PlaneGeometry>;
    this.visible = createScreenVisibility(this.screen, scene);
    this.iframe.className = 'spotify-screen';
    this.iframe.title = 'Apply Tour-playliste på Gansteds venstre skærm';
    this.iframe.width = String(playerWidth); this.iframe.height = String(height);
    this.iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    this.iframe.allowFullscreen = true;
    this.iframe.loading = 'lazy';
    this.iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    // Transform a wrapper: Chromium misses pointer hits on an iframe rotated 90° directly.
    const panel = document.createElement('div');
    panel.className = 'spotify-panel';
    panel.style.inlineSize = `${playerWidth}px`; panel.style.blockSize = `${height}px`;
    panel.appendChild(this.iframe);
    this.display = new CSS3DObject(panel); this.display.visible = false;
    this.scene.add(this.display);
    this.renderer.domElement.className = 'spotify-layer';
    this.renderer.domElement.hidden = true;
    this.renderer.domElement.style.overflow = 'clip';
    canvas.after(this.renderer.domElement);
    this.resize();
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.unload(); });
    window.addEventListener('pagehide', () => this.unload());
    canvas.addEventListener('webglcontextlost', () => this.unload());
  }

  resize() { this.renderer.setSize(innerWidth, innerHeight); }

  private unload() {
    this.display.visible = false; this.renderer.domElement.hidden = true;
    if (!this.loaded) return;
    // Removing the Spotify document stops playback without a cross-origin player API.
    this.iframe.removeAttribute('src'); this.loaded = false;
  }

  update(camera: THREE.PerspectiveCamera, enabled: boolean) {
    enabled &&= !document.hidden;
    this.screen.getWorldPosition(this.center);
    if (!enabled || camera.position.distanceToSquared(this.center) > 25) this.unload();
    this.display.visible = enabled && this.visible(camera);
    this.renderer.domElement.hidden = !this.display.visible;
    if (!this.display.visible) return;
    // Cross-origin content stays in an interactive HTML layer aligned with the monitor.
    this.screen.matrixWorld.decompose(this.display.position, this.display.quaternion, this.worldScale);
    const size = this.screen.geometry.parameters;
    // Cover only the left half; the right half keeps the flowchart from the monitor texture.
    this.display.position.set(-size.width / 4, 0, 0).applyMatrix4(this.screen.matrixWorld);
    this.display.scale.set(size.width / width, size.height / height, 1).multiply(this.worldScale);
    if (!this.loaded) { this.iframe.src = playlistUrl; this.loaded = true; }
    this.renderer.render(this.scene, camera);
  }
}
