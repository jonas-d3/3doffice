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
test('optional module guard detects deferred features in nested source folders', () => {
  for (const id of [
    '/src/input/head-camera-browser.ts', '/src/input/head-camera.ts', '/src/input/head-tracker.worker.ts',
    '/src/games/tetris/tetris-game.ts', '/src/games/donkey-kong/donkey-kong-game.ts',
    '/src/games/invaders/whiteboard-game.ts', '/src/games/runner/tv-game.ts',
    '/src/screens/david-screens.ts', '/src/screens/jesper-screen.ts', '/src/screens/spotify-screen.ts',
    '/src/screens/youtube-screen.ts', '/src/easter-eggs/coffee-controller.ts',
    '/src/easter-eggs/salmon-controller.ts', '/src/easter-eggs/creeper-controller.ts',
  ]) assert.ok(optionalModule.test(id), id);
  for (const id of ['/src/screens/lazy-screens.ts', '/src/screens/david-screen-control.mjs', '/src/loading/lazy-feature.mjs']) {
    assert.equal(optionalModule.test(id), false, id);
  }
});
