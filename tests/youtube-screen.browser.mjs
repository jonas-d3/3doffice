// Start pnpm dev, then run with PLAYWRIGHT_MODULE pointing to an installed Playwright.
// PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node --test tests/youtube-screen.browser.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');

test('YouTube receives play/pause clicks from walking and overview cameras', async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chromium' });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    // Exercise a real cross-origin iframe and browser hit testing without YouTube/network variability.
    await page.route('https://www.youtube.com/embed/**', route => route.fulfill({
      contentType: 'text/html',
      body: `<style>body{margin:0;display:grid;place-items:center;height:100vh}button{width:120px;height:80px}</style>
        <button onclick="this.textContent=this.textContent==='Play'?'Pause':'Play'">Play</button>`,
    }));
    const url = new URL(process.env.OFFICE_URL ?? 'http://127.0.0.1:5173/3doffice/dist/');
    url.searchParams.set('measure', '');
    await page.goto(url.href);
    await page.waitForFunction(() => window.officeDebug?.metrics.firstFrame);

    for (const walking of [true, false]) {
      await page.evaluate(walking => {
        const d = officeDebug, screen = d.model.martinScreen;
        d.navigation.setView(walking ? 'workspace' : 'overview', true);
        screen.getWorldPosition(d.navigation.controls.target);
        const normal = screen.position.clone(); screen.getWorldDirection(normal);
        d.camera.position.copy(d.navigation.controls.target).addScaledVector(normal, 1.5);
        if (walking) {
          d.camera.position.y = 1.62;
          const direction = d.navigation.controls.target.clone().sub(d.camera.position).normalize();
          d.navigation.yaw = Math.atan2(direction.x, -direction.z);
          d.navigation.pitch = Math.asin(direction.y);
        } else {
          d.camera.lookAt(d.navigation.controls.target); d.navigation.controls.update();
        }
      }, walking);
      const iframe = page.locator('.youtube-screen');
      await iframe.waitFor({ state: 'visible' });
      const frame = page.frameLocator('.youtube-screen');
      await frame.getByRole('button', { name: 'Play', exact: true }).waitFor();
      for (const expected of ['Pause', 'Play']) {
        // A physical click at the projected screen center must reach the iframe, not the WebGL canvas.
        await page.mouse.click(720, 500);
        await frame.getByRole('button', { name: expected, exact: true }).waitFor({ timeout: 3000 });
      }
      assert.equal(await iframe.evaluate(el => document.elementFromPoint(innerWidth / 2, innerHeight / 2) === el), true);
    }
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
