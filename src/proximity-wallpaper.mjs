import { Vector3 } from 'three';

/**
 * @param {import('three').Object3D} screen
 * @param {import('three').MeshBasicMaterial} material
 * @param {import('three').Texture} nearTexture
 */
export function createProximityWallpaper(screen, material, nearTexture) {
  const farTexture = material.map;
  const screenPosition = new Vector3();
  let close = false;

  /** @param {import('three').Vector3} cameraPosition */
  return cameraPosition => {
    const distanceSquared = screen.getWorldPosition(screenPosition).distanceToSquared(cameraPosition);
    // Hysteresis keeps small movements at the boundary from flickering the image.
    const next = close ? distanceSquared < 5 ** 2 : distanceSquared <= 4 ** 2;
    if (next === close) return false;
    close = next;
    material.map = close ? nearTexture : farTexture;
    return true;
  };
}
