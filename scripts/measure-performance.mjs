// Use an existing Playwright installation; this is an opt-in local measurement script.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import { mkdir, writeFile } from 'node:fs/promises';
const [port='4174', label='before'] = process.argv.slice(2);
const out = process.env.PERF_OUTPUT ?? 'docs/plans/performance/results/local';
await mkdir(out,{recursive:true});
const browser = await chromium.launch({headless:true,channel:'chromium',args:['--use-angle=metal']});
const runs=[];
for(let i=0;i<5;i++){
 const context=await browser.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1,reducedMotion:'reduce'});
 const page=await context.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{let seed=89; Math.random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);});
 for(const warm of [false,true]) {
  await page.goto(`http://127.0.0.1:${port}/3doffice/dist/?measure`,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.officeDebug?.metrics.firstFrame>0);
  await page.waitForTimeout(2500);
  const data=await page.evaluate(()=>{const d=window.officeDebug;let meshes=0,casters=0;const geometries=new Set(); d.model.office.traverse(o=>{if(o.isMesh){meshes++;if(o.castShadow)casters++;geometries.add(o.geometry);}});return {metrics:d.metrics,meshes,casters,geometries:geometries.size,resources:performance.getEntriesByType('resource').map(r=>({name:r.name.split('/').pop(),start:r.startTime,duration:r.duration,size:r.encodedBodySize,transfer:r.transferSize}))};});
  runs.push({warm,...data,errors:[...errors]});console.log(label,i,warm,data.metrics.firstFrame);
  if(i===4&&warm){await page.screenshot({path:`${out}/${label}-overview.jpg`});for(const view of ['workspace','day21','kitchen','walk','tetris','donkey-kong']){await page.locator(`[data-view="${view}"]`).click();await page.waitForTimeout(1200);await page.screenshot({path:`${out}/${label}-${view}.jpg`});}}
 }
 await context.close();
}
await writeFile(`${out}/${label}.json`,JSON.stringify({browser:browser.version(),runs},null,2));
await browser.close();
console.log(label,runs.map(r=>({warm:r.warm,firstFrame:r.metrics.firstFrame,model:r.metrics.modelMs,meshes:r.meshes,geometries:r.geometries,casters:r.casters,errors:r.errors})));
