import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Group, Mesh, MeshBasicMaterial, BoxGeometry, Matrix4, Box3, Vector3, Raycaster } from 'three';
import { instanceStatic } from '../src/static-instances.mjs';
test('instances preserve world transforms, bounds and picking through rotated parents',()=>{
 const root=new Group();root.position.set(3,0,4);root.rotation.y=.3;
 const geometry=new BoxGeometry(1,1,1),material=new MeshBasicMaterial();const meshes=[];
 for(let i=0;i<3;i++){const parent=new Group();root.add(parent);parent.position.set(i*2,0,0);parent.rotation.y=i*.4;const mesh=new Mesh(geometry,material);parent.add(mesh);meshes.push(mesh);}
 root.updateMatrixWorld(true);const expected=meshes.map(m=>m.matrixWorld.clone());const bounds=new Box3().setFromObject(root);
 const batches=instanceStatic(root);assert.equal(batches.length,1);assert.equal(batches[0].count,3);
 const matrix=new Matrix4();for(let i=0;i<3;i++){batches[0].getMatrixAt(i,matrix);matrix.premultiply(root.matrixWorld);assert.ok(matrix.elements.every((v,j)=>Math.abs(v-expected[i].elements[j])<1e-6));}
 const after=new Box3().setFromObject(root);assert.ok(after.containsBox(bounds));
 const center=new Vector3().setFromMatrixPosition(expected[0]);const ray=new Raycaster(center.clone().add(new Vector3(0,5,0)),new Vector3(0,-1,0));assert.ok(ray.intersectObject(root,true).some(h=>h.instanceId===0));
});
test('negative transforms, interactive targets, transparency and cutaway boundaries stay separate',()=>{
 const root=new Group(),wall=new Group();root.add(wall);const geometry=new BoxGeometry(),material=new MeshBasicMaterial();
 const add=(parent=root)=>{const m=new Mesh(geometry,material);parent.add(m);return m;};
 add();add();const mirrored=add();mirrored.scale.z=-1;const button=add();button.userData.coffeeButton=true;const inWall=add(wall);
 const groups=instanceStatic(root,{boundaries:[wall]});assert.equal(groups[0].count,2);assert.equal(mirrored.parent,root);assert.equal(button.parent,root);assert.equal(inWall.parent,wall);
});
test('casting and receiving flags are never mixed',()=>{
 const root=new Group(),geometry=new BoxGeometry(),material=new MeshBasicMaterial();
 for(const cast of [true,false])for(let i=0;i<2;i++){const m=new Mesh(geometry,material);m.castShadow=cast;m.receiveShadow=true;root.add(m);}
 const groups=instanceStatic(root);assert.equal(groups.length,2);assert.deepEqual(groups.map(m=>m.castShadow).sort(),[false,true]);assert.ok(groups.every(m=>m.receiveShadow));
});
