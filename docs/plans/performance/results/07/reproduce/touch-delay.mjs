// Run from the repository root with PLAYWRIGHT_MODULE pointing to an installed Playwright.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import { writeFile } from 'node:fs/promises';
const out='docs/plans/performance/results/07';
const b=await chromium.launch({headless:true,channel:'chromium',args:['--use-angle=metal']});
const p=await b.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce',hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.route('**/henrik-screens-*.js',async r=>{await new Promise(resolve=>setTimeout(resolve,1200));await r.continue();});
await p.goto('http://127.0.0.1:4175/3doffice/dist/?measure');await p.waitForFunction(()=>window.officeDebug?.metrics.firstFrame);
const before=await p.evaluate(()=>{const d=window.officeDebug;return{distance:d.camera.position.distanceTo(d.navigation.controls.target),t:performance.now()};});
await p.locator('#zoom-in').tap();await p.waitForFunction(distance=>{const d=window.officeDebug;return d.camera.position.distanceTo(d.navigation.controls.target)<distance*.95;},before.distance);
const input=await p.evaluate(before=>{const d=window.officeDebug;return{responseMs:performance.now()-before.t,distanceBefore:before.distance,distanceAfter:d.camera.position.distanceTo(d.navigation.controls.target),firstFrame:d.metrics.firstFrame};},before);
await p.evaluate(()=>{const d=window.officeDebug;let screen;d.model.office.traverse(o=>{if(o.isMesh&&o.material.name==='Henrik'&&!screen)screen=o;});screen.getWorldPosition(d.navigation.controls.target);const normal=screen.position.clone();screen.getWorldDirection(normal);d.camera.position.copy(d.navigation.controls.target).addScaledVector(normal,1.5);d.camera.lookAt(d.navigation.controls.target);d.navigation.controls.update();});
const start=Date.now();await p.waitForFunction(()=>window.officeDebug.features.find(f=>f.name==='Henrik')?.state==='ready');const screenWaitMs=Date.now()-start;
await p.locator('[data-view="tetris"]').tap();await p.waitForFunction(()=>window.officeDebug.features.find(f=>f.name==='Tetris')?.state==='ready');await p.waitForTimeout(300);
const point=await p.evaluate(()=>{const d=window.officeDebug,s=d.model.tetrisGlass,v=s.position.clone();s.getWorldPosition(v);v.project(d.camera);return{x:(v.x+1)*innerWidth/2,y:(1-v.y)*innerHeight/2};});
await p.touchscreen.tap(point.x,point.y);await p.locator('#tetris-controls').waitFor({state:'visible'});
const xBefore=await p.evaluate(()=>window.officeDebug.features.find(f=>f.name==='Tetris').value.game.piece.x);
await p.locator('[data-tetris="right"]').tap();await p.waitForTimeout(100);const xAfter=await p.evaluate(()=>window.officeDebug.features.find(f=>f.name==='Tetris').value.game.piece.x);await p.locator('#tetris-pause').tap();await p.waitForTimeout(100);const paused=await p.evaluate(()=>window.officeDebug.features.find(f=>f.name==='Tetris').value.game.status);const status=await p.locator('#tetris-status').textContent();await p.locator('#tetris-close').tap();await p.locator('#tetris-controls').waitFor({state:'hidden'});
const result={input,screenWaitMs,touch:{opened:true,movedFrom:xBefore,movedTo:xAfter,paused,status,closed:true},errors};if(xAfter!==xBefore+1||paused!=='paused'||errors.length)throw Error(JSON.stringify(result));console.log(result);await writeFile(`${out}/touch-delay.json`,JSON.stringify(result,null,2));await b.close();
