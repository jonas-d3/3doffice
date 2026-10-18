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
