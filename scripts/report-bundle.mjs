import { readFile, readdir } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function staticClosure(manifest, entry) {
  const seen = new Set();
  function visit(key) {
    if (seen.has(key)) return;
    if (!manifest[key]) throw new Error(`Missing manifest entry: ${key}`);
    seen.add(key);
    for (const imported of manifest[key].imports ?? []) visit(imported);
  }
  visit(entry); return seen;
}

export function manifestFiles(manifest, keys) {
  return [...new Set([...keys].flatMap(key => [manifest[key].file, ...(manifest[key].css ?? [])]))];
}

export const optionalModule = /(?:\/src\/(?:[^/]+\/)*(?:.*-game|(?:anja|david|gansted|henrik|holbech|lars|nicolai|palm|thrane)-screens|jesper-screen|youtube-screen|spotify-screen|coffee-controller|salmon-controller|creeper-controller|head-camera(?:-browser)?|head-tracker)[.\/]|CSS3DRenderer|@mediapipe|\.wasm)/;

export async function reportBundle(directory = 'dist', check = false) {
  const manifest = JSON.parse(await readFile(`${directory}/.vite/manifest.json`, 'utf8'));
  const modules = JSON.parse(await readFile(`${directory}/.vite/modules.json`, 'utf8'));
  const initial = staticClosure(manifest, 'index.html');
  const files = async keys => Promise.all(manifestFiles(manifest, keys).map(async file => {
    const data = await readFile(`${directory}/${file}`);
    return { file, bytes: data.length, gzip: gzipSync(data).length };
  }));
  const startup = await files(initial);
  const dynamic = await files(Object.keys(manifest).filter(key => !initial.has(key) && manifest[key].file.endsWith('.js')));
  const assets = await readdir(`${directory}/assets`);
  const initialJS = startup.filter(f => f.file.endsWith('.js'));
  const violations = initialJS.flatMap(file => (modules[file.file] ?? []).filter(id => optionalModule.test(id)));
  const report = {
    initial: startup,
    initialJS: { bytes: initialJS.reduce((sum, f) => sum + f.bytes, 0), gzip: initialJS.reduce((sum, f) => sum + f.gzip, 0) },
    dynamic,
    worker: assets.filter(file => file.includes('.worker-')),
    wasm: assets.filter(file => file.endsWith('.wasm') || file.startsWith('vision_wasm')),
    model: ['models/face_landmarker.task (requested only by camera activation)'],
    violations,
    // Plan 3: 194,926 bytes with this same gzipSync method (not Vite's display).
    budgetGzip: 204672,
  };
  if (check && (violations.length || report.initialJS.gzip > report.budgetGzip)) throw new Error(`Initial bundle budget failed: ${JSON.stringify(report)}`);
  return report;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  console.log(JSON.stringify(await reportBundle(process.env.BUNDLE_DIR ?? 'dist', process.argv.includes('--check')), null, 2));
}
