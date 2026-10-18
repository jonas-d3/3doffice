import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Group, Mesh, BoxGeometry, MeshBasicMaterial, Raycaster, Vector3 } from 'three';
import { sceneSurfaces, refreshSceneSurfaces } from '../src/scene-surfaces.mjs';
test('live controllers share new meshes and stop hitting detached barrel geometry',()=>{
 const office=new Group(),first=sceneSurfaces(office),second=sceneSurfaces(office);
 assert.equal(first,second);
 const barrel=new Group(),body=new Mesh(new BoxGeometry(),new MeshBasicMaterial());barrel.add(body);office.add(barrel);
 refreshSceneSurfaces(office);
 const ray=new Raycaster(new Vector3(0,0,3),new Vector3(0,0,-1));assert.ok(ray.intersectObjects(first,false).length);
 office.remove(barrel);refreshSceneSurfaces(office);
 assert.equal(first.length,0);assert.equal(ray.intersectObjects(second,false).length,0);
});
