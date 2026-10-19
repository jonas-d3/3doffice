import * as THREE from 'three';

let seed = 42;
export const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

function texture(kind: 'wood' | 'fabric') {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = kind === 'wood' ? '#ccad7d' : '#a8a59d';
  ctx.fillRect(0, 0, 512, 512);
  if (kind === 'wood') {
    for (let board = 0; board < 8; board++) {
      ctx.fillStyle = `rgba(${random() > .5 ? '255,238,199' : '92,53,20'},${.03 + random() * .11})`;
      ctx.fillRect(board * 64, 0, 64, 512);
      ctx.fillStyle = '#96754f';
      ctx.fillRect(board * 64, 0, 1, 512);
      ctx.fillRect(board * 64, Math.floor(random() * 510), 64, 1);
      for (let i = 0; i < 80; i++) {
        const x = board * 64 + random() * 63;
        ctx.strokeStyle = `rgba(99,61,25,${random() * .18})`;
        ctx.lineWidth = .4 + random() * .6;
        ctx.beginPath(); ctx.moveTo(x, 0);
        ctx.bezierCurveTo(x + random() * 7, 160, x - random() * 7, 340, x, 512); ctx.stroke();
      }
      const x = board * 64 + 12 + random() * 40, y = random() * 512;
      for (let i = 1; i < 5; i++) {
        ctx.strokeStyle = `rgba(90,53,24,${.3 / i})`;
        ctx.beginPath(); ctx.ellipse(x, y, i * 1.7, i * 5, 0, 0, Math.PI * 2); ctx.stroke();
      }
    }
  } else {
    for (let y = 0; y < 512; y += 2) for (let x = 0; x < 512; x += 2) {
      ctx.fillStyle = `rgba(${random() > .5 ? '255,255,255' : '0,0,0'},${random() * .16})`;
      ctx.fillRect(x, y, 1, 2);
    }
  }
  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  return map;
}

const woodMap = texture('wood');
woodMap.repeat.set(2.5, 2);
const fabricMap = texture('fabric');
fabricMap.repeat.set(3, 3);
const standard = (color: string, roughness = .75) => new THREE.MeshStandardMaterial({ color, roughness });
export const materials = {
  wall: standard('#f2f0e9'), white: standard('#faf9f5'), trim: standard('#e4e2d9'),
  floor: new THREE.MeshStandardMaterial({ map: woodMap, roughness: .68, bumpMap: woodMap, bumpScale: .012 }),
  oak: new THREE.MeshStandardMaterial({ map: woodMap, color: '#edcf9a', roughness: .52 }),
  black: standard('#202626', .55), metal: standard('#414746', .38),
  sofa: new THREE.MeshStandardMaterial({ color: '#dddedb', map: fabricMap, roughness: .95 }),
  rug: new THREE.MeshStandardMaterial({ color: '#565e56', map: fabricMap, roughness: 1 }),
  jute: new THREE.MeshStandardMaterial({ color: '#d4c3a4', map: fabricMap, roughness: 1 }),
  green: standard('#4a6948'), soil: standard('#302821'), bark: standard('#625043'),
  screen: new THREE.MeshStandardMaterial({ color: '#111d23', roughness: .16, metalness: .3 }),
  glass: new THREE.MeshStandardMaterial({ color: '#b0d3dd', emissive: '#9cc1d3', emissiveIntensity: .2, roughness: .23, metalness: .1 }),
  light: new THREE.MeshStandardMaterial({ color: '#fff5d7', emissive: '#ffebbd', emissiveIntensity: 2 }),
};
export const cushionMaterials = ['#788378', '#e6dfcf', '#b8796f', '#b9b7aa'].map(color => new THREE.MeshStandardMaterial({ color, map: fabricMap, roughness: 1 }));
