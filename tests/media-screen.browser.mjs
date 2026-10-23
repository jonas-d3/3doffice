// Start pnpm dev, then run with PLAYWRIGHT_MODULE pointing to an installed Playwright.
// PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node --test tests/media-screen.browser.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');

for (const input of ['mouse', 'touch', 'keyboard']) {
  test(`media previews load only on ${input} activation and release players on departure`, async () => {
    const browser = await chromium.launch({ headless: true, channel: 'chromium' });
    try {
      const viewport = input === 'touch' ? { width: 390, height: 844 } : { width: 1440, height: 1000 };
      const point = { x: viewport.width / 2, y: viewport.height / 2 };
      const page = await browser.newPage({ viewport, reducedMotion: 'reduce', hasTouch: input === 'touch', isMobile: input === 'touch' });
      const errors = [], requests = [];
      page.on('pageerror', error => errors.push(error.message));
      // Keep real cross-origin browsing contexts and hit testing; replace only third-party content.
      for (const service of ['https://www.youtube.com/embed/**', 'https://open.spotify.com/embed/**']) {
        await page.route(service, route => {
          requests.push(route.request().url());
          return route.fulfill({ contentType: 'text/html', body:
            `<style>body{margin:0;display:grid;place-items:center;height:100vh}button{width:120px;height:80px;touch-action:manipulation}</style>
            <button onclick="this.textContent=this.textContent==='Play'?'Pause':'Play'">Play</button>` });
        });
      }
      const url = new URL(process.env.OFFICE_URL ?? 'http://127.0.0.1:5173/3doffice/dist/');
      url.searchParams.set('measure', '');
      await page.goto(url.href);
      await page.waitForFunction(() => window.officeDebug?.metrics.firstFrame);

      async function aim(key, walking = true, distance = 1.5) {
        await page.evaluate(({key, walking, distance}) => {
          const d = officeDebug, screen = d.model[key];
          d.navigation.setView(walking ? 'workspace' : 'overview', true);
          // Spotify covers the left half; the flowchart stays on the right.
          d.navigation.controls.target.set(key === 'ganstedScreen' ? -screen.geometry.parameters.width / 4 : 0, 0, 0).applyMatrix4(screen.matrixWorld);
          const normal = screen.position.clone(); screen.getWorldDirection(normal);
          d.camera.position.copy(d.navigation.controls.target).addScaledVector(normal, distance);
          if (walking) {
            d.camera.position.y = 1.62;
            const direction = d.navigation.controls.target.clone().sub(d.camera.position).normalize();
            d.navigation.yaw = Math.atan2(direction.x, -direction.z); d.navigation.pitch = Math.asin(direction.y);
          } else {
            d.camera.lookAt(d.navigation.controls.target); d.navigation.controls.update();
          }
        }, {key, walking, distance});
      }

      for (const [key, kind, label] of [
        ['martinScreen', 'youtube', 'Afspil YouTube på Martins skærm'],
        ['ganstedScreen', 'spotify', 'Åbn Spotify på Gansteds skærm'],
      ]) {
        for (const walking of input === 'mouse' ? [true, false] : [true]) {
          const count = requests.length;
          await aim(key, walking);
          const start = page.getByRole('button', { name: label });
          await start.waitFor();
          assert.equal(await page.locator('iframe').count(), 0, 'No iframe browsing contexts before activation');
          assert.equal(requests.length, count, 'Approaching does not fetch a player');
          if (input === 'touch') await page.touchscreen.tap(point.x, point.y);
          else if (input === 'keyboard') { await start.focus(); await page.keyboard.press('Enter'); }
          else await page.mouse.click(point.x, point.y);

          const iframe = page.locator(`.${kind}-screen`), frame = page.frameLocator(`.${kind}-screen`);
          await frame.getByRole('button', { name: 'Play', exact: true }).waitFor();
          await page.waitForFunction(kind => document.elementFromPoint(innerWidth / 2, innerHeight / 2) === document.querySelector(`.${kind}-screen`), kind);
          assert.equal(requests.length, count + 1, 'One player request per activation');
          // Touch covers our facade activation and teardown. Chromium also suppresses
          // synthesized touch clicks inside this rotated iframe on the pre-facade baseline.
          if (input !== 'touch') {
            for (const expected of ['Pause', 'Play']) {
              await page.mouse.click(point.x, point.y);
              await frame.getByRole('button', { name: expected, exact: true }).waitFor({ timeout: 3000 });
            }
          }
          assert.equal(await iframe.evaluate(el => document.elementFromPoint(innerWidth / 2, innerHeight / 2) === el), true);

          await aim(key, false, 6);
          await iframe.waitFor({ state: 'detached' });
          await aim(key, walking);
          await start.waitFor();
          assert.equal(await page.locator('iframe').count(), 0);
          assert.equal(requests.length, count + 1, 'Returning requires a new explicit activation');
        }
      }
      assert.deepEqual(errors, []);
    } finally { await browser.close(); }
  });
}
