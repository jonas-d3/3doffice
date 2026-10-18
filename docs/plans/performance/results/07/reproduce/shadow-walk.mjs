// Run from the repository root with PLAYWRIGHT_MODULE pointing to an installed Playwright.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import { writeFile } from 'node:fs/promises';
const out='docs/plans/performance/results/07';
const browser=await chromium.launch({headless:true,channel:'chromium',args:['--use-angle=metal']});const results=[];
for(const [port,label] of [['4177','before'],['4175','after']]){
 const p=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 await p.addInitScript(()=>{let seed=89;Math.random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);});
 await p.goto(`http://127.0.0.1:${port}/3doffice/dist/?measure`);await p.waitForFunction(()=>window.officeDebug?.metrics.firstFrame);
 for(const view of ['overview','workspace','day21','kitchen','walk']){
  await p.locator(`[data-view="${view}"]`).click();await p.waitForTimeout(1500);
  const pass=await p.evaluate(()=>{const d=window.officeDebug,r=d.renderer;let shadow={};const previous=r.shadowMap.render.bind(r.shadowMap);r.shadowMap.render=(...args)=>{const a={...r.info.render},start=performance.now();previous(...args);shadow={calls:r.info.render.calls-a.calls,triangles:r.info.render.triangles-a.triangles,cpu:performance.now()-start};};r.info.autoReset=false;r.info.reset();const start=performance.now();r.render(d.scene,d.camera);const result={...r.info.render,shadow,cpu:performance.now()-start,memory:{...r.info.memory}};r.shadowMap.render=previous;return result;});
  let walk;
  if(['workspace','day21'].includes(view)){
   await p.locator('#scene').focus();await p.evaluate(()=>{window.routeFrames=[];window.routeActive=true;const sample=t=>{if(!window.routeActive)return;window.routeFrames.push(t);requestAnimationFrame(sample);};requestAnimationFrame(sample);});
   await p.keyboard.down('w');await p.waitForTimeout(1100);await p.keyboard.up('w');
   walk=await p.evaluate(()=>{window.routeActive=false;return window.routeFrames.slice(1).map((t,i)=>t-window.routeFrames[i]);});
  }
  results.push({label,view,pass,walk});
 }
 await p.close();
}
await browser.close();await writeFile(`${out}/shadow-walk.json`,JSON.stringify(results,null,2));console.log(results.map(r=>({label:r.label,view:r.view,calls:r.pass.calls,shadow:r.pass.shadow.calls,triangles:r.pass.shadow.triangles,walkFrames:r.walk?.length})));
