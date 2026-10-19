import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BoxGeometry, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene } from 'three';
import { createScreenVisibility } from '../src/screens/youtube-screen-visibility.mjs';

function setup() {
  const scene = new Scene();
  const screen = new Mesh(new PlaneGeometry(.602, .332), new MeshBasicMaterial());
  scene.add(screen);
  const camera = new PerspectiveCamera(60, 1.5, .05, 100);
  const visible = createScreenVisibility(screen, scene);
  function look(x, y, z) {
    camera.position.set(x, y, z); camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld(); scene.updateMatrixWorld(true);
  }
  look(0, 0, 1);
  return { scene, screen, camera, visible, look };
}

test('shows the player only near the front of an on-screen monitor', () => {
  const { camera, visible, look } = setup();
  assert.equal(visible(camera), true);
  look(0, 0, -1);
  assert.equal(visible(camera), false, 'The monitor back must not show an iframe');
  look(0, 0, 9);
  assert.equal(visible(camera), false, 'Do not load players across the room');
  look(0, 0, 1);
  camera.lookAt(0, 0, 2); camera.updateMatrixWorld();
  assert.equal(visible(camera), false, 'Hide the iframe when looking away');
});

test('walls and partial occlusion hide the HTML overlay; hidden walls do not', () => {
  const { camera, scene, visible } = setup();
  const wall = new Group();
  const blocker = new Mesh(new BoxGeometry(.15, .3, .05), new MeshBasicMaterial());
  blocker.position.set(.14, 0, .5); wall.add(blocker); scene.add(wall);
  scene.updateMatrixWorld(true);
  assert.equal(visible(camera), false, 'Even a blocked corner must not paint over furniture');
  wall.visible = false;
  assert.equal(visible(camera), true);
});

test('follows the screen through desk position and rotation', () => {
  const { camera, screen, scene, visible } = setup();
  const desk = new Group(); scene.add(desk); desk.add(screen);
  desk.position.set(10, 1.17, 22); desk.rotation.y = Math.PI / 2;
  camera.position.set(11, 1.17, 22); camera.lookAt(desk.position);
  camera.updateMatrixWorld(); scene.updateMatrixWorld(true);
  assert.equal(visible(camera), true);
  desk.visible = false;
  assert.equal(visible(camera), false);
});

test('segment candidates exclude unrelated geometry and agree with full-scene raycasts for changing blockers', () => {
  const {camera,scene,screen,visible}=setup();
  const reference=createScreenVisibility(screen,scene,{indexed:false,cache:false});
  for(let i=0;i<100;i++){const mesh=new Mesh(new BoxGeometry(1,1,1),new MeshBasicMaterial());mesh.position.set(30+i,0,0);scene.add(mesh);}
  assert.equal(visible(camera),reference(camera));assert.ok(visible.stats.candidates<10);
  const door=new Group(),blocker=new Mesh(new BoxGeometry(.15,.3,.05),new MeshBasicMaterial());blocker.position.set(.14,0,.5);door.add(blocker);scene.add(door);
  for(const change of [()=>{},()=>{door.visible=false;},()=>{door.visible=true;door.position.x=3;},()=>{door.position.x=0;door.rotation.y=.5;},()=>{scene.remove(door);},()=>{scene.add(door);door.position.x=0;door.rotation.y=0;}]){
    change();scene.updateMatrixWorld(true);assert.equal(visible(camera),reference(camera));
  }
  assert.equal(visible(camera),false,'late-added figure/door blocks a corner');
});

test('a blocker far from the screen but on the camera-to-screen segment still occludes',()=>{
 const{camera,scene,screen,visible}=setup();camera.position.z=3.8;camera.updateMatrixWorld();
 const blocker=new Mesh(new BoxGeometry(.2,.2,.1),new MeshBasicMaterial());blocker.position.z=3.5;scene.add(blocker);scene.updateMatrixWorld(true);
 assert.equal(visible(camera),false);blocker.position.x=2;scene.updateMatrixWorld(true);assert.equal(visible(camera),true);
});

test('unchanged queries reuse the result; moving, hiding and adding blockers invalidate immediately',()=>{
 const{camera,scene,screen,visible}=setup();
 const reference=createScreenVisibility(screen,scene,{indexed:false,cache:false});
 assert.equal(visible(camera),true);const initial=visible.stats.raycasts;
 for(let i=0;i<20;i++)assert.equal(visible(camera),true);
 assert.equal(visible.stats.raycasts,initial);
 const door=new Group(),blocker=new Mesh(new BoxGeometry(.2,.2,.1),new MeshBasicMaterial());door.add(blocker);door.position.set(20,0,.5);scene.add(door);
 assert.equal(visible(camera),true);door.position.x=19;assert.equal(visible(camera),true);assert.equal(visible.stats.raycasts,initial,'irrelevant movement does not repeat rays');
 for(const change of [()=>{door.position.x=0;},()=>{door.visible=false;},()=>{door.visible=true;},()=>{scene.remove(door);},()=>{scene.add(door);},()=>{door.position.x=3;},()=>{camera.position.x=.2;camera.lookAt(screen.position);},()=>{camera.fov=45;camera.updateProjectionMatrix();},()=>{screen.position.x=.2;}]){
   change();scene.updateMatrixWorld(true);camera.updateMatrixWorld();const count=visible.stats.raycasts;
   assert.equal(visible(camera),reference(camera));assert.ok(visible.stats.raycasts>count,'changed view or blocker gets a fresh result in this query');
 }
});

test('instance and geometry updates change bounds and invalidate a stationary view',()=>{
 const{camera,scene,screen,visible}=setup(),reference=createScreenVisibility(screen,scene,{indexed:false,cache:false});
 const geometry=new BoxGeometry(.2,.2,.1),instances=new InstancedMesh(geometry,new MeshBasicMaterial(),1);
 instances.setMatrixAt(0,new Matrix4().makeTranslation(3,0,.5));instances.instanceMatrix.needsUpdate=true;scene.add(instances);
 assert.equal(visible(camera),true);
 instances.setMatrixAt(0,new Matrix4().makeTranslation(0,0,.5));instances.instanceMatrix.needsUpdate=true;
 assert.equal(visible(camera),false);assert.equal(visible(camera),reference(camera));
 instances.count=0;assert.equal(visible(camera),true);instances.count=1;assert.equal(visible(camera),false);
 geometry.translate(3,0,0);assert.equal(visible(camera),true);assert.equal(visible(camera),reference(camera));
 scene.remove(instances);assert.equal(visible(camera),true);
});
