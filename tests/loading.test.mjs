import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LoadQueue } from '../src/load-queue.mjs';
import { AssetCache } from '../src/asset-cache.mjs';
const tick = () => new Promise(resolve => setImmediate(resolve));
function setup() { const turns=[]; const queue=new LoadQueue(fn=>turns.push(fn)); return {queue, async step(){turns.shift()?.();await tick();},turns}; }
test('nothing starts before first frame; priority wins and work yields between starts', async()=>{
 const {queue,step}=setup(), order=[];
 queue.add('background','work',()=>order.push('background'));
 queue.add('visible','work',()=>order.push('visible'),10);
 await step();assert.deepEqual(order,[]);queue.release();await step();assert.deepEqual(order,['visible']);await step();assert.deepEqual(order,['visible','background']);
});
test('downloads have a limit of two; hidden tabs pause queued work',async()=>{
 const {queue,step}=setup();let starts=0;const finish=[];
 for(let i=0;i<4;i++)queue.add(String(i),'download',()=>{starts++;return new Promise(r=>finish.push(r));});
 queue.release();await step();await step();await step();assert.equal(starts,2);
 queue.setPaused(true);finish[0]();await tick();await step();assert.equal(starts,2);
 queue.setPaused(false);await step();assert.equal(starts,3);
});
test('shared images deduplicate, keep ready data, and retry only when requested',async()=>{
 const {queue,step}=setup();let attempts=0;let resolve;
 const cache=new AssetCache(queue,()=>{attempts++;return new Promise(r=>resolve=r);});
 const a=cache.request('image'),b=cache.request('image',10);assert.equal(a,b);queue.release();await step();assert.equal(attempts,1);
 const image={width:20};resolve(image);await a;assert.equal(await cache.request('image'),image);assert.equal(attempts,1);
 let failures=0;const bad=new AssetCache(queue,()=>{failures++;return Promise.reject(new Error('offline'));});
 const first=bad.request('bad');const rejected=assert.rejects(first);await step();await rejected;
 await assert.rejects(bad.request('bad'));assert.equal(failures,1);
 const retry=bad.request('bad',10,true);const retryRejected=assert.rejects(retry);await step();await retryRejected;assert.equal(failures,2);
});
