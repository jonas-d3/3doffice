// Build and serve first. PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/check-david-screens.mjs [URL]
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const url = new URL(process.argv[2] ?? 'http://127.0.0.1:4175/3doffice/dist/');
url.searchParams.set('measure', '');
const output = process.env.BROWSER_OUTPUT ?? '/tmp/3doffice-david-check';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, channel: process.env.BROWSER_CHANNEL ?? 'chromium', args: ['--use-angle=metal'] });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', hasTouch: true });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url.href, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.officeDebug?.metrics.firstFrame > 0);
  assert.equal(await page.evaluate(() => !!window.officeDebug.model.davidScreens.value), false, 'Detailed canvases stay deferred in the overview');
  async function approach(single = -1) {
    await page.evaluate(single => {
      const { model, camera, navigation } = window.officeDebug;
      navigation.setView('overview', true); navigation.suspend(true);
      const screen = model.davidScreens.screen;
      model.office.updateWorldMatrix(true, true);
      const displays = screen.userData.relatedScreens;
      const center = single < 0 ? displays[0].getWorldPosition(camera.position.clone()).add(displays[1].getWorldPosition(camera.position.clone())).multiplyScalar(.5)
        : displays[single].getWorldPosition(camera.position.clone());
      const normal = center.clone().set(0, 0, 1).transformDirection(screen.matrixWorld);
      camera.fov = single < 0 ? 42 : 48; camera.updateProjectionMatrix();
      camera.position.copy(center).addScaledVector(normal, single < 0 ? 1.35 : 1.55);
      camera.position.y += .07; camera.lookAt(center); camera.updateMatrixWorld();
    }, single);
    await page.waitForFunction(() => window.officeDebug.model.davidScreens.value?.displays.length === 2);
    await page.locator('#scene').focus();
  }
  async function state() { return page.evaluate(() => ({ ...window.officeDebug.model.davidScreens.value.state })); }
  async function buttonPoint(index) {
    return page.evaluate(index => {
      const { model, camera } = window.officeDebug;
      const buttons = [[0, 173, 455], [0, 469, 455], [0, 808, 455], [1, 512, 495]];
      const [which, x, y] = buttons[index], display = model.davidScreens.value.displays[which];
      const size = display.geometry.parameters;
      const point = camera.position.clone().set((x / 1024 - .5) * size.width, (.5 - y / 565) * size.height, 0).applyMatrix4(display.matrixWorld).project(camera);
      return { x: (point.x + 1) * innerWidth / 2, y: (1 - point.y) * innerHeight / 2 };
    }, index);
  }
  async function click(index) { const p = await buttonPoint(index); await page.mouse.click(p.x, p.y); }
  await approach();
  await page.screenshot({ path: `${output}/desktop.png` });
  for (const [index, name] of [[0, 'director'], [1, 'wiibroe']]) {
    const png = await page.evaluate(index => window.officeDebug.model.davidScreens.value.materials[index].map.image.toDataURL(), index);
    await writeFile(`${output}/${name}.png`, Buffer.from(png.split(',')[1], 'base64'));
  }
  const cameraBefore = await page.evaluate(() => window.officeDebug.camera.position.toArray());
  await click(0);
  assert.equal((await state()).dill, true); assert.equal((await state()).request, 1);
  assert.deepEqual(await page.evaluate(() => window.officeDebug.camera.position.toArray()), cameraBefore, 'Button clicks do not move the camera');
  await page.screenshot({ path: `${output}/approved.png` });
  await click(1); assert.equal((await state()).revisions[1], 1);
  await click(2); assert.equal((await state()).billed, 117000);
  const beforeDrag = await state(), point = await buttonPoint(0);
  await page.mouse.move(point.x, point.y); await page.mouse.down(); await page.mouse.move(point.x + 30, point.y); await page.mouse.up();
  assert.deepEqual(await state(), beforeDrag, 'Dragging from a button must not approve a case');
  await page.keyboard.press('f'); assert.equal((await state()).friday, true);
  await page.screenshot({ path: `${output}/friday.png` });
  const friday = await state(); await click(0); assert.deepEqual(await state(), friday);
  await page.keyboard.press('f'); assert.equal((await state()).scope, 100);
  await page.keyboard.press('1'); assert.equal((await state()).dill, true);
  await page.getByRole('button', { name: 'Hjælp til navigation', exact: true }).click();
  const beforeHelp = await state(); await page.keyboard.press('f'); assert.deepEqual(await state(), beforeHelp);
  await page.getByRole('button', { name: 'Luk hjælp', exact: true }).click();
  await approach();
  const versions = await page.evaluate(() => window.officeDebug.model.davidScreens.value.materials.map(m => m.map.version));
  // Wait for real animation frames, not a wall-clock timeout.
  await page.evaluate(() => new Promise(resolve => { let frames = 0; function tick() { if (++frames === 20) resolve(); else requestAnimationFrame(tick); } requestAnimationFrame(tick); }));
  assert.deepEqual(await page.evaluate(() => window.officeDebug.model.davidScreens.value.materials.map(m => m.map.version)), versions, 'Idle screens do not upload textures');
  await page.setViewportSize({ width: 390, height: 844 });
  // The app refits the overview in its resize handler; finish that before approaching the desk.
  await page.waitForFunction(() => Math.abs(window.officeDebug.camera.aspect - 390 / 844) < .0001);
  await approach(1);
  await page.screenshot({ path: `${output}/portrait-before.png` });
  let touch = await buttonPoint(3);
  await page.touchscreen.tap(touch.x, touch.y);
  assert.equal((await state()).friday, true);
  await page.screenshot({ path: `${output}/portrait.png` });
  await page.touchscreen.tap(touch.x, touch.y); assert.equal((await state()).friday, false);
  await approach(0); touch = await buttonPoint(0); await page.touchscreen.tap(touch.x, touch.y);
  assert.equal((await state()).dill, true);
  assert.deepEqual(errors, []);
  console.log('PASS: deferred loading, mouse, keyboard, touch, drag cancellation, help, cross-screen state, reset and idle texture uploads. Screenshots:', output);
} finally { await browser.close(); }
