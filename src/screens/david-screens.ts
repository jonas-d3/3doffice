import * as THREE from 'three';
import { createDirectorState, currentRequest, decide, davidButtons } from './david-director.mjs';

const width = 1024, height = 565;
const ink = '#102f29', cream = '#f5eedb', muted = '#98aca7', orange = '#ffbc76', mint = '#bbf1cd';
type Context = CanvasRenderingContext2D;

function box(c: Context, x: number, y: number, w: number, h: number, color: string) {
  c.fillStyle = color; c.fillRect(x, y, w, h);
}
function text(c: Context, value: string, x: number, y: number, size: number, color: string, maxWidth = 948, font = 'Arial, sans-serif') {
  c.fillStyle = color; c.font = `700 ${size}px ${font}`; c.fillText(value, x, y, maxWidth);
}

export class DavidScreens {
  readonly materials: [THREE.MeshBasicMaterial, THREE.MeshBasicMaterial];
  readonly state = createDirectorState();
  readonly displays: THREE.Mesh[] = [];
  screen?: THREE.Object3D;
  private contexts: Context[] = [];

  constructor() {
    const material = (name: string) => {
      const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
      this.contexts.push(canvas.getContext('2d')!);
      const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
      map.minFilter = THREE.LinearFilter; map.generateMipmaps = false;
      return new THREE.MeshBasicMaterial({ name, map, toneMapped: false });
    };
    this.materials = [material('David / DirektørOS'), material('David / Wiibroe-kontrol')];
    this.draw();
  }

  decorate(screen: THREE.Mesh) {
    screen.parent?.parent?.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      const index = this.materials.indexOf(object.material);
      if (index < 0) return;
      this.displays[index] = object;
      object.name = index === 0 ? 'david-director-screen' : 'david-wiibroe-screen';
    });
  }

  act(action: string) {
    if (!decide(this.state, action)) return false;
    this.draw(); return true;
  }

  // Canvas uploads happen only after a decision; there is no idle animation cost.
  update(_camera: THREE.PerspectiveCamera, _dt: number, _animate: boolean) { return false; }

  private button(c: Context, button: typeof davidButtons[number]) {
    const right = button.screen === 1, disabled = this.state.friday && !right;
    const color = right ? ink : button.action === 'approve' ? mint : button.action === 'reject' ? orange : '#c8d6ee';
    box(c, button.x, button.y, button.width, button.height, disabled ? '#233331' : color);
    const foreground = disabled ? '#849691' : right ? cream : ink;
    box(c, button.x + 12, button.y + 20, 28, 28, disabled ? '#354743' : right ? '#325448' : '#ffffff66');
    text(c, button.key, button.x + 19, button.y + 41, 20, foreground);
    const label = right && this.state.friday ? 'TILBAGE TIL MANDAG' : button.label;
    text(c, label, button.x + 52, button.y + 43, right ? 28 : 22, foreground, button.width - 64);
    if (right) text(c, this.state.friday ? 'NY UGE  ↗' : 'DIREKTØRENS BESLUTNING  ↗', 628, button.y + 41, 19, '#b6d2b9', 336);
  }

  private drawDirector(c: Context) {
    const state = this.state, request = currentRequest(state), revision = state.revisions[state.request];
    box(c, 0, 0, width, height, '#101d1d');
    box(c, 0, 0, 8, height, orange);
    text(c, 'DirektørOS', 38, 66, 49, cream);
    text(c, 'DAVID GUTFELT / CHEFEN', 651, 40, 20, muted, 335);
    text(c, state.friday ? 'STATUS: FREDAG' : 'STATUS: FULD RATE', 651, 68, 22, mint, 335);
    box(c, 38, 91, 948, 1, '#354641');
    text(c, 'SCOPE', 38, 126, 20, muted);
    box(c, 133, 111, 404, 13, '#2c413c');
    box(c, 133, 111, 404 * Math.min(state.scope / 300, 1), 13, state.scope > 200 ? orange : mint);
    text(c, `${state.scope}%`, 553, 128, 28, orange, 110);
    text(c, `${state.billed.toLocaleString('da-DK')} kr. faktureret`, 702, 127, 22, cream, 284);

    box(c, 38, 155, 948, 244, '#263934');
    box(c, 38, 155, 5, 244, state.friday ? mint : orange);
    text(c, state.friday ? 'ALLE 3 SAGER / UDSAT' : request.from, 63, 190, 21, muted, 700);
    text(c, state.friday ? 'LUKKET' : `SAG 0${state.request + 1}`, 836, 190, 21, orange, 125);
    const title = state.friday ? ['Vi tager den', 'MANDAG.'] : request.title;
    text(c, title[0], 62, 251, 49, cream, 888);
    text(c, title[1], 62, 309, 49, state.friday ? mint : cream, 888);
    const subline = state.friday ? 'Godkendt af bestyrelsen. Altså David.' : revision
      ? `REV. ${revision}: “Bare en lille ændring.” ${request.extra}` : 'Det tager højst fem minutter. Helt sikkert.';
    text(c, subline, 64, 365, 25, state.friday ? mint : orange, 883);
    davidButtons.filter(b => b.screen === 0).forEach(button => this.button(c, button));
    text(c, state.receipt, 38, 535, 23, mint, 948);
  }

  private drawWiibroe(c: Context) {
    const state = this.state;
    box(c, 0, 0, width, height, cream);
    box(c, 0, 0, 8, height, ink);
    text(c, 'Wiibroe', 37, 77, 67, ink, 500, 'Georgia, serif');
    text(c, 'KRITISK INFRASTRUKTUR', 541, 44, 23, ink, 445);
    text(c, 'HELSINGØR / KONTROLCENTRAL', 541, 76, 21, '#5a7063', 445);
    box(c, 38, 99, 948, 2, '#c4c9ad');

    box(c, 38, 119, 576, 164, ink);
    text(c, 'STRATEGISK RESERVE', 58, 151, 20, '#b6d2b9', 500);
    text(c, String(state.stock), 54, 247, 105, cream, 200);
    text(c, state.friday ? 'FREDAGSBEREDSKAB' : 'KRITISK', 221, 198, 28, '#ffcb88', 365);
    text(c, 'Kun 47 tilbage.', 222, 234, 25, cream, 365);
    for (let i = 0; i < 18; i++) box(c, 58 + i * 30, 262, 22, 5, i < 3 ? '#ffcb88' : '#39594b');

    text(c, 'TEMPERATUR', 653, 143, 19, '#5a7063', 332);
    text(c, 'Kasemat-kold', 653, 181, 32, ink, 332);
    box(c, 653, 201, 333, 1, '#c4c9ad');
    text(c, 'LOKAL SNEDYBDE', 653, 231, 19, '#5a7063', 332);
    text(c, '¾ porter', 653, 271, 35, ink, 332);

    text(c, 'HELSINGØR-TAPAS', 38, 320, 20, '#5a7063', 530);
    text(c, '✓ Flæskesvær   ✓ Chips', 38, 359, 29, ink, 560);
    text(c, 'DILDSNAPS', 653, 320, 20, '#5a7063', 332);
    text(c, state.dill ? 'MED I SCOPE ✓' : 'AFVENTER CHEFEN', 653, 359, 25, ink, 332);
    box(c, 38, 391, 948, 51, state.dill ? '#f4d7ac' : '#e0e3ca');
    text(c, state.alert, 53, 424, 24, ink, 918);
    this.button(c, davidButtons[3]);
    text(c, 'LOKALT BEREDSKAB · ALTID KLAR TIL FREDAG', 38, 551, 16, '#5a7063');
  }

  private draw() {
    this.drawDirector(this.contexts[0]); this.drawWiibroe(this.contexts[1]);
    this.materials.forEach(material => { material.map!.needsUpdate = true; });
  }
}
