import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3doffice/dist/',
  worker: { format: 'es' },
  build: {
    manifest: true,
    rolldownOptions: {
      output: { codeSplitting: { groups: [{ name: 'three', test: /[/]three[/](?:build|src)[/]/ }] } },
    },
  },
  plugins: [{
    name: 'report-chunk-modules',
    generateBundle(_options, bundle) {
      const modules = Object.fromEntries(Object.values(bundle).filter(chunk => chunk.type === 'chunk').map(chunk =>
        [chunk.fileName, Object.keys(chunk.modules).map(id => id.replace(process.cwd(), ''))]));
      this.emitFile({ type: 'asset', fileName: '.vite/modules.json', source: JSON.stringify(modules, null, 2) });
    },
  }],
});
