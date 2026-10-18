import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { screenButton, trackButton, stopButton } from '../src/holbech-screen-buttons.mjs';
import { hitHolbechButton, installHolbechControl } from '../src/holbech-screen-control.mjs';
const rect={left:0,top:0,width:1000,height:800};
function setup(){
 const scene=new THREE.Scene(),desk=new THREE.Group();scene.add(desk);desk.position.set(2,1,3);desk.rotation.y=.4;
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(.6,.33),new THREE.MeshBasicMaterial());desk.add(screen);scene.updateMatrixWorld(true);
 const camera=new THREE.PerspectiveCamera(45,1.25,.01,100),center=new THREE.Vector3();screen.getWorldPosition(center);camera.position.copy(center).add(new THREE.Vector3(0,0,1).transformDirection(desk.matrixWorld));camera.lookAt(center);camera.updateMatrixWorld();
 function point(box=trackButton){const p=new THREE.Vector3(((box.x+box.width/2)/1024-.5)*.6,(.5-(box.y+box.height/2)/565)*.33,0);screen.localToWorld(p);p.project(camera);return{clientX:(p.x+1)*500,clientY:(1-p.y)*400};}
 return{scene,desk,screen,camera,point};
}
test('shared button rectangles use the inverted UV y-axis and reject the rest of the screen',()=>{
 for(const [box,tracking]of[[trackButton,false],[stopButton,true]]){assert.equal(screenButton({x:(box.x+box.width/2)/1024,y:1-(box.y+box.height/2)/565},tracking),true);assert.equal(screenButton({x:0,y:0},tracking),false);}
});
test('button picking follows the transformed display, ignores its frame, and respects blockers and hidden parents',()=>{
 const s=setup();const hit=()=>hitHolbechButton(s.screen,s.camera,s.scene,s.point(),rect,false);
 const frame=new THREE.Mesh(s.screen.geometry,new THREE.MeshBasicMaterial({transparent:true}));frame.position.z=.001;s.screen.add(frame);assert.equal(hit(),true);
 const wall=new THREE.Mesh(new THREE.BoxGeometry(2,2,.05),new THREE.MeshBasicMaterial());s.scene.add(wall);wall.position.copy(s.camera.position).lerp(s.screen.getWorldPosition(new THREE.Vector3()),.5);wall.quaternion.copy(s.screen.getWorldQuaternion(new THREE.Quaternion()));assert.equal(hit(),false);wall.visible=false;assert.equal(hit(),true);
 s.desk.visible=false;assert.equal(hit(),false);s.desk.visible=true;s.camera.position.copy(s.screen.getWorldPosition(new THREE.Vector3())).add(new THREE.Vector3(0,0,-1).transformDirection(s.desk.matrixWorld));s.camera.lookAt(s.desk.position);s.camera.updateMatrixWorld();assert.equal(hit(),false);
});
function interaction(){
 const s=setup(),canvas=new EventTarget(),events=new EventTarget();canvas.getBoundingClientRect=()=>rect;canvas.setPointerCapture=()=>{};canvas.hasPointerCapture=()=>false;
 let tracking=false,blocked=false,activations=0;const controller={liveDisplay:s.screen,get tracking(){return tracking;},setTracking(value){tracking=value;activations++;}};
 installHolbechControl(canvas,s.camera,s.scene,()=>controller,()=>blocked,()=>{},events);
 function fire(type,extra={}){const event=new Event(type,{cancelable:true});Object.assign(event,{...s.point(),pointerId:1,isPrimary:true,button:0,...extra});canvas.dispatchEvent(event);}
 return{...s,fire,events,get activations(){return activations;},block(){blocked=true;}};
}
test('only a completed primary click activates; drag, cancellation, multi-touch and blocked UI do not',()=>{
 const click=interaction();click.fire('pointerdown');click.fire('pointerup');assert.equal(click.activations,1);
 for(const cancel of ['drag','pointercancel','lostpointercapture','blur','multi','blocked']){const s=interaction();s.fire('pointerdown');if(cancel==='drag')s.fire('pointermove',{clientX:100});else if(cancel==='blur')s.events.dispatchEvent(new Event('blur'));else if(cancel==='multi')s.fire('pointerdown',{pointerId:2,isPrimary:false});else if(cancel==='blocked')s.block();else s.fire(cancel);s.fire('pointerup');assert.equal(s.activations,0,cancel);}
});
