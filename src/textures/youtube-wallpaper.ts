import * as THREE from 'three';

export function youtubeWallpaper() {
  const canvas = document.createElement('canvas'); canvas.width = 960; canvas.height = 529;
  const c = canvas.getContext('2d')!;
  c.fillStyle = '#151515'; c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = '#ff0033'; c.beginPath(); c.roundRect(375, 110, 210, 145, 36); c.fill();
  c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(461, 149); c.lineTo(461, 217); c.lineTo(520, 183); c.fill();
  c.textAlign = 'center'; c.font = 'bold 48px Arial'; c.fillText('YouTube', 480, 340);
  c.fillStyle = '#b9b9b9'; c.font = '26px Arial'; c.fillText('Gå tættere på for at afspille', 480, 402);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
}

