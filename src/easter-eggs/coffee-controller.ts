import * as THREE from 'three';
import { mesh, cylinder } from '../scene/geometry';
import { installInteraction } from './easter-interaction';
import type { Navigation } from '../navigation/navigation';
import type { Visitor } from '../characters/visitor';

export class CoffeeController {
  private cup = new THREE.Group();
  private label = document.createElement('canvas');
  private labelTexture: THREE.CanvasTexture;
  private coffeeState = 'idle';
  private dirty = true;
  constructor(office: THREE.Group, coffee: THREE.Group, private visitor: Visitor, navigation: Navigation, private blocked: () => boolean) {
    this.label.width = 512; this.label.height = 128;
    this.labelTexture = new THREE.CanvasTexture(this.label); this.labelTexture.colorSpace = THREE.SRGBColorSpace;
    const label = mesh(coffee, new THREE.PlaneGeometry(.35, .088), new THREE.MeshBasicMaterial({ map: this.labelTexture, toneMapped: false, side: THREE.DoubleSide }), 0, .43, .18);
    // The photographed counter is reflected in Z; keep the lettering readable.
    label.scale.x = -1; label.castShadow = label.receiveShadow = false;
    const white = new THREE.MeshStandardMaterial({ color: '#eee8d6' });
    cylinder(this.cup, .045, .034, .09, 0, .045, 0, white);
    cylinder(this.cup, .039, .039, .004, 0, .09, 0, new THREE.MeshStandardMaterial({ color: '#4c2f20' }));
    this.cup.position.set(0, .065, .12); this.cup.visible = false; coffee.add(this.cup);
    this.paintCoffee();
    const point = new THREE.Vector3();
    installInteraction(office, navigation, blocked, coffee, () => coffee.localToWorld(point.set(0, .43, .18)), hit => {
      if (!hit.object.userData.coffeeButton) return;
      visitor.walk.orderCoffee(); this.cup.visible = visitor.walk.coffeeCupWaiting; this.paintCoffee();
    });
  }
  private paintCoffee() {
    const c = this.label.getContext('2d')!;
    c.fillStyle = '#142d26'; c.fillRect(0, 0, 512, 128);
    c.fillStyle = '#c7e8ac'; c.font = 'bold 45px monospace'; c.textAlign = 'center';
    const walk = this.visitor.walk;
    c.fillText(walk.coffeePresses < 3 ? (walk.coffeePresses ? `${walk.coffeePresses} / 3 SHOTS` : 'KAFFE?') : 'DEPLOY DOBBELT', 256, 79);
    this.labelTexture.needsUpdate = true; this.dirty = true;
  }

  update() {
    let changed = this.dirty; this.dirty = false;
    if (this.blocked()) return changed;
    const state = this.visitor.walk.coffeeState;
    if (state !== this.coffeeState) {
      this.coffeeState = state; this.cup.visible = this.visitor.walk.coffeeCupWaiting; this.paintCoffee(); changed = true;
    }
    return changed;
  }
}
