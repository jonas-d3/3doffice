import * as THREE from 'three';
import { LoadQueue } from './load-queue.mjs';
import { AssetCache } from './asset-cache.mjs';
import { screenPriority } from './feature-triggers.mjs';

export const loadQueue = new LoadQueue();
const cache = new AssetCache(loadQueue, (url: string) => new THREE.ImageLoader().loadAsync(url));
let invalidate = () => {};
export function onAssetChange(callback: () => void) { invalidate = callback; }
export function invalidateAssets() { invalidate(); }

type ImageUse = { url: string; apply: (image: HTMLImageElement) => void; screen?: THREE.Object3D; relevant: boolean; ready: boolean; pending: boolean };
const uses: ImageUse[] = [];
export function registerImage(url: string, apply: ImageUse['apply'], screen?: THREE.Object3D) {
  const use: ImageUse = { url, apply, screen, relevant: false, ready: false, pending: false };
  uses.push(use);
  request(use, 0, false);
  return use;
}
function request(use: ImageUse, priority: number, retry: boolean) {
  if (use.ready) return;
  if (use.pending) { loadQueue.promote(`image:${use.url}`, priority); return; }
  use.pending = true;
  cache.request(use.url, priority, retry).then((image: HTMLImageElement) => {
    use.apply(image); use.ready = true; invalidate();
  }).catch(() => { /* Keep the placeholder. A new approach retries once. */ }).finally(() => { use.pending = false; });
}
export function updateImagePriorities(camera: THREE.PerspectiveCamera) {
  const priorities = new Map<string, number>();
  for (const use of uses) {
    if (!use.screen || use.ready) continue;
    const priority = screenPriority(use.screen, camera, innerHeight);
    priorities.set(use.url, Math.max(priorities.get(use.url) ?? 0, priority));
    if (priority && (use.pending || !use.relevant)) request(use, priority, !use.relevant);
    use.relevant = priority > 0;
  }
  priorities.forEach((priority, url) => loadQueue.setPriority(`image:${url}`, priority));
}
