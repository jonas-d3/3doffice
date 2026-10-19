import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Run explicitly with pnpm optimize:images; builds use the checked-in outputs.
// Originals remain the source of truth. Width-only resizing preserves the frame.
const images = [
  { source: '1000mods-cheat-death.jpg', output: '1000mods-cheat-death.webp', width: 512, quality: 80 },
  { source: 'thrane-children.jpg', output: 'thrane-children.webp', width: 1024, quality: 80 },
  // Higher quality and nearest-neighbour resizing retain the deliberately hard pixel edges.
  { source: 'thrane-pixel-pinup.jpg', output: 'thrane-pixel-pinup.webp', width: 1024, quality: 90, kernel: 'nearest' },
];
const assetPath = name => fileURLToPath(new URL(`../src/textures/images/${name}`, import.meta.url));
let beforeTotal = 0, afterTotal = 0;

for (const { source, output, width, quality, kernel = 'lanczos3' } of images) {
  const input = assetPath(source);
  const metadata = await sharp(input).metadata();
  const before = (await stat(input)).size;
  const result = await sharp(input)
    .autoOrient()
    .resize({ width, kernel, withoutEnlargement: true })
    .toColourspace('srgb')
    .webp({ quality, alphaQuality: 100, effort: 6 })
    .toFile(assetPath(output));
  beforeTotal += before; afterTotal += result.size;
  console.log(`${source} → ${output}: ${metadata.width}×${metadata.height} → ${result.width}×${result.height}, ${before} → ${result.size} bytes, alpha: ${metadata.hasAlpha ? 'yes' : 'no'}`);
}

console.log(`Total: ${beforeTotal} → ${afterTotal} bytes (${(100 * (1 - afterTotal / beforeTotal)).toFixed(1)}% smaller)`);
