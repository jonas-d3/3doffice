import { test } from 'node:test';
import assert from 'node:assert/strict';
import { staticClosure, manifestFiles, optionalModule } from '../scripts/report-bundle.mjs';
test('static closure deduplicates shared dependencies and cycles without following dynamic imports',()=>{
 const manifest={html:{file:'entry.js',imports:['a','b'],dynamicImports:['lazy']},a:{file:'a.js',imports:['shared']},b:{file:'b.js',imports:['shared']},shared:{file:'shared.js',imports:['a']},lazy:{file:'lazy.js'}};
 assert.deepEqual([...staticClosure(manifest,'html')].sort(),['a','b','html','shared']);
 manifest.shared.imports.push('lazy');assert.ok(staticClosure(manifest,'html').has('lazy'));
});
test('startup includes mandatory CSS once, without pulling in dynamic styles', () => {
  const manifest = {
    html: { file: 'entry.js', css: ['entry.css', 'shared.css'], imports: ['shared'], dynamicImports: ['lazy'] },
    shared: { file: 'shared.js', css: ['shared.css'] },
    lazy: { file: 'lazy.js', css: ['lazy.css'] },
  };
  assert.deepEqual(manifestFiles(manifest, staticClosure(manifest, 'html')), ['entry.js', 'entry.css', 'shared.css', 'shared.js']);
});
test('optional module guard includes the browser camera entry', () => {
  for (const id of ['/src/head-camera-browser.ts', '/src/head-camera.ts', '/src/head-tracker.worker.ts', '/src/tetris-game.ts']) assert.ok(optionalModule.test(id), id);
  assert.equal(optionalModule.test('/src/lazy-screens.ts'), false);
});
