import { test } from 'node:test';
import assert from 'node:assert/strict';
import { boxGeometry, cylinderGeometry } from '../src/geometry-cache.mjs';
test('geometry cache shares equal parameters and isolates radius, size and segment changes',()=>{
 assert.equal(boxGeometry(1,2,3),boxGeometry(1,2,3));assert.notEqual(boxGeometry(1,2,3),boxGeometry(2,2,3));
 assert.equal(boxGeometry(1,2,3,.1),boxGeometry(1,2,3,.1));assert.notEqual(boxGeometry(1,2,3,.1),boxGeometry(1,2,3,.2));
 assert.equal(cylinderGeometry(1,1,2,28),cylinderGeometry(1,1,2,28));assert.notEqual(cylinderGeometry(1,1,2,28),cylinderGeometry(1,1,2,64));
 const shared=boxGeometry(1,2,3), clone=shared.clone();const original=shared.getAttribute('uv').getX(0);clone.getAttribute('uv').setX(0,.123);assert.equal(shared.getAttribute('uv').getX(0),original);
});
