// Opt-in browser regression check. Build and serve the app first; uses an existing Playwright installation.
// PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/check-spotify-screen.mjs [app URL]
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const url = new URL(process.argv[2] ?? 'http://127.0.0.1:4173/3doffice/dist/');
url.searchParams.set('measure', '');
const output = process.env.BROWSER_OUTPUT ?? '/tmp/3doffice-spotify-check';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: 'chromium', args: ['--use-angle=metal'] });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url.href, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.officeDebug?.metrics.firstFrame > 0);
  assert.equal(await page.locator('iframe.spotify-screen[src]').count(), 0, 'No remote player at startup');
  async function approach(bothScreens = true) {
    await page.evaluate(both => {
      const { model, camera, navigation } = window.officeDebug;
      navigation.setView('overview', true); navigation.suspend(true);
      const screen = model.ganstedScreen;
      model.office.updateWorldMatrix(true, true);
      const center = screen.getWorldPosition(camera.position.clone());
      if (both) center.add(model.office.getObjectByName('gansted-todo-screen').getWorldPosition(camera.position.clone())).multiplyScalar(.5);
      const normal = center.clone().set(0, 0, 1).transformDirection(screen.matrixWorld);
      camera.fov = both ? 42 : 67; camera.updateProjectionMatrix();
      camera.position.copy(center).addScaledVector(normal, 1.45);
      if (both) camera.position.y += .2;
      camera.lookAt(center); camera.updateMatrixWorld();
    }, bothScreens);
    await page.waitForSelector('iframe.spotify-screen[src]');
  }
  await approach();
  assert.equal(await page.locator('iframe.spotify-screen').getAttribute('width'), '320', 'Spotify uses the left half of the 640px monitor');
  const frame = page.frameLocator('iframe.spotify-screen');
  await frame.getByRole('button', { name: 'Play', exact: true }).first().waitFor();
  async function clickPlayer(name) {
    // Playwright's iframe offsets ignore the CSS3D scale. Project the control's local position.
    const pixel = await frame.getByRole('button', { name, exact: true }).first().evaluate(element => {
      const rect = element.getBoundingClientRect(); return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
    });
    const point = await page.evaluate(({ x, y }) => {
      const { model, camera } = window.officeDebug, screen = model.ganstedScreen;
      const iframe = document.querySelector('iframe.spotify-screen'), size = screen.geometry.parameters;
      const p = camera.position.clone().set((x / (iframe.width * 2) - .5) * size.width, (.5 - y / iframe.height) * size.height, 0).applyMatrix4(screen.matrixWorld).project(camera);
      return { x: (p.x + 1) * innerWidth / 2, y: (1 - p.y) * innerHeight / 2 };
    }, pixel);
    assert.equal(await page.evaluate(({ x, y }) => document.elementFromPoint(x, y)?.tagName, point), 'IFRAME', 'Pointer must reach the visible player, not the canvas underneath');
    await page.mouse.click(point.x, point.y);
  }
  await clickPlayer('Play');
  await frame.getByRole('button', { name: 'Pause', exact: true }).waitFor();
  await page.screenshot({ path: `${output}/desktop.png` });
  await clickPlayer('Pause');
  await frame.getByRole('button', { name: 'Play', exact: true }).first().waitFor();
  await page.getByRole('button', { name: 'Hjælp til navigation', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('iframe.spotify-screen').hasAttribute('src'));
  await page.keyboard.press('Escape');
  await page.waitForSelector('iframe.spotify-screen[src]');
  await page.evaluate(() => {
    const { model, camera } = window.officeDebug, screen = model.ganstedScreen;
    const center = screen.getWorldPosition(camera.position.clone());
    const normal = center.clone().set(0, 0, 1).transformDirection(screen.matrixWorld);
    camera.position.copy(center).addScaledVector(normal, -1); camera.lookAt(center); camera.updateMatrixWorld();
  });
  await page.waitForFunction(() => document.querySelector('.spotify-layer').hidden);
  await page.evaluate(() => { const { camera } = window.officeDebug; camera.position.set(15, 2, 22); camera.updateMatrixWorld(); });
  await page.waitForFunction(() => !document.querySelector('iframe.spotify-screen').hasAttribute('src'));
  await page.setViewportSize({ width: 390, height: 844 });
  await approach(false);
  await frame.getByRole('button', { name: 'Play', exact: true }).first().waitFor();
  const bounds = await page.locator('iframe.spotify-screen').boundingBox();
  assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 390, 'Player fits the portrait viewport');
  await clickPlayer('Play');
  await frame.getByRole('button', { name: 'Pause', exact: true }).waitFor();
  await page.screenshot({ path: `${output}/portrait.png` });
  assert.deepEqual(errors, []);
  console.log('PASS: desktop/portrait play, pause, pointer targeting, resize, visibility and unloading. Screenshots:', output);
} finally {
  await browser.close();
}
