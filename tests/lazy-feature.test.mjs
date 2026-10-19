import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LoadQueue } from '../src/loading/load-queue.mjs';
import { LazyFeature } from '../src/loading/lazy-feature.mjs';
const tick=()=>new Promise(r=>setImmediate(r));
async function drain(turns){for(let i=0;i<10;i++){turns.shift()?.();await tick();}}
test('prefetch imports without construction or activation; concurrent prepare creates once',async()=>{
 const turns=[],queue=new LoadQueue(fn=>turns.push(fn));let imports=0,created=0;
 const feature=new LazyFeature('game',queue,async()=>{imports++;return {};},()=>{created++;return {active:false};});
 feature.prefetch();await drain(turns);assert.equal(imports,0);queue.release();await drain(turns);assert.equal(imports,1);assert.equal(created,0);
 const first=feature.prepare(),second=feature.prepare();assert.equal(first,second);await drain(turns);await first;assert.equal(created,1);assert.equal(feature.value.active,false);
});
test('failed initialization can retry on another approach without importing again or replaying input',async()=>{
 const turns=[],queue=new LoadQueue(fn=>turns.push(fn));queue.release();let attempts=0;
 let imports=0;
 const feature=new LazyFeature('game',queue,async()=>{imports++;return {};},()=>{if(++attempts===1)throw Error('unavailable');return {active:false};});
 feature.setRelevant(true);await drain(turns);assert.equal(feature.state,'error');
 for(let i=0;i<10;i++)feature.setRelevant(true);await drain(turns);assert.equal(attempts,1);
 feature.setRelevant(false);feature.setRelevant(true);feature.setRelevant(false);await drain(turns);assert.equal(attempts,2);assert.equal(imports,1);assert.equal(feature.value.active,false);
});
test('failed module graphs require explicit reload and never loop on retry or reapproach', async () => {
 const turns=[],queue=new LoadQueue(fn=>turns.push(fn));queue.release();let attempts=0,created=0;
 const feature=new LazyFeature('game',queue,async()=>{attempts++;throw Error('failed module');},()=>{created++;});
 feature.prefetch();await drain(turns);assert.equal(feature.reloadRequired,true);
 feature.setRelevant(true);feature.setRelevant(false);feature.setRelevant(true);await feature.prepare(100,true);await drain(turns);
 assert.equal(feature.state,'error');assert.equal(attempts,1);assert.equal(created,0);
});
test('leaving while an import is pending lowers the later construction priority',async()=>{
 const turns=[],queue=new LoadQueue(fn=>turns.push(fn));queue.release();let resolve;const order=[];
 const old=new LazyFeature('old',queue,()=>new Promise(r=>{resolve=r;}),()=>{order.push('old');return {};});
 old.setRelevant(true,90);turns.shift()();await tick();old.setRelevant(false);
 queue.add('new','work',()=>order.push('new'),20);resolve({});await drain(turns);assert.deepEqual(order,['new','old']);
});
