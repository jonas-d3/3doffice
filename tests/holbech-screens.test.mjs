import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { HolbechScreens } from '../src/screens/holbech-screens.ts';

const context = () => new Proxy({}, { get: (_, key) => key === 'measureText' ? () => ({ width: 100 }) : () => {} });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: context }) };
globalThis.innerHeight = 1000;
function setup() {
  const screens = new HolbechScreens(), scene = new THREE.Scene(), desk = new THREE.Group(); scene.add(desk);
  const displays = screens.materials.map((material, i) => { const panel = new THREE.Group();desk.add(panel);const mesh = new THREE.Mesh(new THREE.PlaneGeometry(.6,.33),material);mesh.position.x=i*.7;panel.add(mesh);return mesh; });
  screens.decorate(displays[0]);
  const camera = new THREE.PerspectiveCamera(60,1.5,.05,100);camera.position.set(0,0,2);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const wall=new THREE.Group(),roof=new THREE.Group(),visitor={group:new THREE.Group(),viewCamera:new THREE.PerspectiveCamera()};scene.add(wall,roof,visitor.group);scene.updateMatrixWorld(true);
  const originalTarget={original:true},renders=[];let target=originalTarget;
  const renderer={getRenderTarget:()=>target,setRenderTarget:value=>{target=value;},render:(_scene,view)=>{renders.push({view,target});}};
  const walls=[{group:wall,axis:'x',position:0,inside:1}],roofs=[roof];
  const render=()=>screens.render(renderer,scene,walls,roofs,visitor);
  return {screens,scene,camera,visitor,renderer,renders,render,wall,roof,originalTarget};
}

test('visibility allocates only the overview; live captures require explicit tracking and targets are reused',()=>{
 const s=setup();s.render();assert.equal(s.renders.length,0);
 s.screens.update(s.camera,.1,false);s.render();assert.equal(s.renders.length,1);assert.notEqual(s.renders[0].view,s.visitor.viewCamera);assert.equal(s.screens.liveTarget,undefined);
 assert.equal(s.screens.materials[0].toneMapped,true,'linear capture receives tone mapping in the main framebuffer');
 s.screens.invalidate();s.render();assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,0);
 s.screens.setTracking(true);s.screens.update(s.camera,.1,false);s.render();assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,1);const target=s.screens.liveTarget;
 s.screens.update(s.camera,1,false);s.render();assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,1,'reduced motion captures only the explicit still');
 s.screens.setTracking(false);s.screens.invalidate();s.render();assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,1);
 assert.equal(s.screens.materials[1].toneMapped,false,'the static sRGB interface keeps its colors');
 s.screens.setTracking(true);s.screens.update(s.camera,.1,false);s.render();assert.equal(s.screens.liveTarget,target);assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,2);
});

test('late assets coalesce with the 12 Hz live cadence and cannot restart reduced-motion captures',()=>{
 const s=setup();s.screens.setTracking(true);
 for(let i=0;i<60;i++){s.screens.invalidate();s.screens.update(s.camera,1/60,true);s.render();}
 assert.ok(s.renders.filter(r=>r.view===s.visitor.viewCamera).length<=12);
 assert.equal(s.screens.materials[1].toneMapped,true);
 s.screens.setTracking(false);s.screens.setTracking(true);s.screens.update(s.camera,.1,false);s.render();const count=s.renders.filter(r=>r.view===s.visitor.viewCamera).length;
 for(let i=0;i<20;i++){s.screens.invalidate();s.screens.update(s.camera,.1,false);s.render();}
 assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,count);
});

test('distance stops tracking during pause, return never restarts, looking away pauses within the near area',()=>{
 const s=setup();s.screens.update(s.camera,.1,true);s.render();s.screens.setTracking(true);s.screens.update(s.camera,.1,true);s.render();const count=s.renders.length;
 s.camera.lookAt(0,0,10);s.camera.updateMatrixWorld();s.screens.update(s.camera,1,true);s.render();assert.equal(s.renders.length,count);assert.equal(s.screens.tracking,true);
 s.screens.setPaused(true);s.camera.position.set(0,0,9);s.screens.update(s.camera,.1,false);s.render();assert.equal(s.screens.tracking,false);
 s.camera.position.set(0,0,2);s.camera.lookAt(0,0,0);s.camera.updateMatrixWorld();s.screens.setPaused(false);s.screens.update(s.camera,1,true);s.render();assert.equal(s.screens.tracking,false);assert.equal(s.renders.filter(r=>r.view===s.visitor.viewCamera).length,1);
});

test('capture restores target and visibility after failure without automatic retries',()=>{
 const s=setup();s.screens.update(s.camera,.1,true);s.render();s.screens.setTracking(true);s.screens.update(s.camera,.1,true);
 s.wall.visible=false;s.roof.visible=false;s.visitor.group.visible=true;let calls=0;
 s.renderer.render=()=>{calls++;assert.equal(s.visitor.group.visible,false);assert.ok(s.screens.materials.every(m=>!m.visible));throw Error('capture failed');};
 s.render();assert.equal(s.renderer.getRenderTarget(),s.originalTarget);assert.equal(s.wall.visible,false);assert.equal(s.roof.visible,false);assert.equal(s.visitor.group.visible,true);assert.ok(s.screens.materials.every(m=>m.visible));assert.equal(s.screens.tracking,false);
 s.screens.update(s.camera,1,true);s.render();assert.equal(calls,1);
});
