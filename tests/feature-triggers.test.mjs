import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Group, Mesh, PlaneGeometry, PerspectiveCamera, Vector3 } from 'three';
import { screenPriority } from '../src/feature-triggers.mjs';
test('zoom and transformed screen size lift visible content without requiring walking',()=>{
 const desk=new Group(), screen=new Mesh(new PlaneGeometry(.6,.36));desk.add(screen);desk.position.set(9,1,18);desk.rotation.y=Math.PI/2;
 const camera=new PerspectiveCamera(42,1.4,.05,300);camera.position.set(30,6,18);camera.lookAt(9,1,18);
 assert.equal(screenPriority(screen,camera),0);
 camera.fov=8;camera.updateProjectionMatrix();assert.ok(screenPriority(screen,camera)>0);
 camera.position.set(5,1,18);camera.lookAt(9,1,18);assert.equal(screenPriority(screen,camera),0,'back facing');
 camera.position.set(11,1,18);camera.lookAt(9,1,18);assert.ok(screenPriority(screen,camera)>0);
 desk.visible=false;assert.equal(screenPriority(screen,camera),0);
});
test('a second or upper monitor can prepare its controller while the first is outside portrait viewport',()=>{
 const desk=new Group();const screens=[[-.34,0],[.34,0],[-.34,.5],[.34,.5]].map(([x,y])=>{const s=new Mesh(new PlaneGeometry(.602,.332));s.position.set(x,y,0);desk.add(s);return s;});
 const camera=new PerspectiveCamera(42,.6,.05,300);camera.position.set(.34,0,1.2);camera.lookAt(.34,0,0);
 assert.equal(screenPriority(screens[0],camera),0);assert.ok(screenPriority(screens[1],camera)>0);
 screens[0].userData.relatedScreens=screens;
 assert.ok(screenPriority(screens[0],camera)>0);
 camera.position.set(.34,.5,1.2);camera.lookAt(.34,.5,0);assert.ok(screenPriority(screens[0],camera)>0);
});
