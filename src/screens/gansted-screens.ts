import * as THREE from 'three';
import { registerImage } from '../textures/image-assets';
import playlistPreviewUrl from '../textures/images/gansted-spotify-half.png';
import websiteFlowchartUrl from '../textures/images/gansted-website-flowchart.webp';

const width = 960, height = 529;

function label(c: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, color: string, weight = 600) {
  c.font = `${weight} ${size}px Arial, sans-serif`; c.fillStyle = color; c.fillText(value, x, y);
}

function drawPlaylist(c: CanvasRenderingContext2D) {
  c.fillStyle = '#155487'; c.fillRect(0, 0, width / 2, height);
  label(c, 'Flikaridoo', 24, 120, 40, '#ffffff', 800);
  label(c, 'kgansted · Apply Tour', 24, 175, 22, '#b4d0e7');
  c.fillStyle = '#104375'; c.fillRect(0, 250, width / 2, 279);
  ["Don't Stop Believin'", 'Dancing In the Dark', "I Don't Want to Miss a Thing"].forEach((title, i) => {
    label(c, `${i + 1}   ${title}`, 24, 315 + i * 75, 22, '#ffffff', 400);
  });
}

function drawSplitScreen(c: CanvasRenderingContext2D) {
  drawPlaylist(c);
  c.fillStyle = '#fffdf5'; c.fillRect(width / 2, 0, width / 2, height);
}

function drawTodo(c: CanvasRenderingContext2D) {
  c.fillStyle = '#f5f1e7'; c.fillRect(0, 0, width, height);
  c.fillStyle = '#e66439'; c.fillRect(0, 0, 12, height);
  label(c, 'GANSTED / NOTER TIL MIG SELV', 48, 44, 19, '#776f64');
  const lists = [
    {
      heading: ['burde være', 'et website'],
      items: ['Microsoft Teams', 'Zoom', 'Netbank', 'Denne todo-liste'],
    },
    { heading: ['kan man', 'nok ikke'], items: ['Børnene', 'Printeren'] },
    { heading: ['afklares'], items: ['Lars', 'Parkeringsappen'] },
  ];
  lists.forEach(({ heading, items }, column) => {
    const x = 48 + column * 308;
    if (column > 0) {
      c.strokeStyle = '#ded8cb'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(x - 24, 82); c.lineTo(x - 24, 477); c.stroke();
    }
    heading.forEach((line, i) => label(c, line, x, 105 + i * 39, 34, '#243b34', 800));
    items.forEach((value, i) => {
      const y = 204 + i * 50;
      label(c, value, x, y, 27, '#243b34');
      c.strokeStyle = '#ded8cb'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(x, y + 20); c.lineTo(x + 260, y + 20); c.stroke();
    });
  });
}

export class GanstedScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  screen?: THREE.Object3D;
  private playlistContext!: CanvasRenderingContext2D;

  constructor() {
    const material = (name: string, draw: (c: CanvasRenderingContext2D) => void, pixelRatio = 1) => {
      const canvas = document.createElement('canvas'); canvas.width = width * pixelRatio; canvas.height = height * pixelRatio;
      const context = canvas.getContext('2d')!; context.scale(pixelRatio, pixelRatio);
      draw(context);
      const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshBasicMaterial({ name, map, toneMapped: false });
    };
    this.materials = [material('Gansted / Apply Tour og website-flowchart', c => { this.playlistContext = c; drawSplitScreen(c); }, 2), material('Gansted / Todo-lister', drawTodo)];
  }

  loadImages() {
    registerImage(playlistPreviewUrl, image => {
      this.playlistContext.drawImage(image, 0, 0, width / 2, height);
      this.materials[0].map!.needsUpdate = true;
    }, this.screen);
    registerImage(websiteFlowchartUrl, image => {
      const scale = Math.min(width / 2 / image.naturalWidth, height / image.naturalHeight);
      const imageWidth = image.naturalWidth * scale, imageHeight = image.naturalHeight * scale;
      this.playlistContext.drawImage(image, width / 2 + (width / 2 - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight);
      this.materials[0].map!.needsUpdate = true;
    }, this.screen);
  }

  update() { return false; }
}
