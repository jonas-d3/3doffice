const requests = [
  { from: 'ANNIE / KULTURUDVALGET', title: ['Tre timer Kandis', '& dildsnaps'], extra: 'Nu også med røgmaskine.', cost: 3500 },
  { from: 'THRANE / INDKØB', title: ['Vandkøling til', 'bankkontoen'], extra: 'Og en Mac Studio til hver.', cost: 117000 },
  { from: 'THRANE / DOMÆNER', title: ['Vi har købt nogle', 'underlige domæner'], extra: 'Kan vi også få .pizza?', cost: 499 },
];

export const davidButtons = [
  { screen: 0, action: 'approve', key: '1', label: 'GODKEND', x: 38, y: 421, width: 270, height: 68 },
  { screen: 0, action: 'reject', key: '2', label: 'SCOPE CREEP', x: 323, y: 421, width: 292, height: 68 },
  { screen: 0, action: 'invoice', key: '3', label: 'KAN DET FAKTURERES?', x: 630, y: 421, width: 356, height: 68 },
  { screen: 1, action: 'friday', key: 'F', label: 'IVÆRKSÆT FREDAG', x: 38, y: 462, width: 948, height: 66 },
];

export function davidActionAt(screen, uv, friday) {
  const x = uv.x * 1024, y = (1 - uv.y) * 565;
  return davidButtons.find(b => b.screen === screen && (!friday || b.action === 'friday') &&
    x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height)?.action;
}

export function createDirectorState() {
  return { request: 0, revisions: [0, 0, 0], approved: 0, scope: 100, billed: 0, stock: 47,
    dill: false, friday: false, receipt: 'Afventer en meget vigtig beslutning.', alert: 'Kun 47 tilbage. Situationen følges tæt.' };
}

export function currentRequest(state) { return requests[state.request]; }

// Both monitors read the same small session state. No timers, storage or live Slack access.
export function decide(state, action) {
  if (action === 'friday') {
    if (state.friday) Object.assign(state, createDirectorState());
    else {
      state.friday = true;
      state.receipt = 'Alle sager: Vi tager den mandag.';
      state.alert = state.dill ? 'Fredag frigivet. Dildsnaps er med i scope.' : 'Fredag frigivet. Helsingør overtager herfra.';
    }
    return true;
  }
  if (state.friday) return false;
  const request = currentRequest(state);
  if (action === 'reject') {
    state.revisions[state.request] = Math.min(99, state.revisions[state.request] + 1);
    state.receipt = 'AFVIST → Genåbnet som “bare en lille ændring”.';
  } else if (action === 'approve') {
    state.scope = Math.min(999, state.scope + 35);
    state.approved = Math.min(999, state.approved + 1);
    state.receipt = `GODKENDT → ${request.extra}`;
    if (state.request === 0) {
      state.dill = true;
      state.alert = 'Dildsnaps tilføjet til scope. Tak, direktør.';
    }
    state.request = (state.request + 1) % requests.length;
  } else if (action === 'invoice') {
    state.billed = Math.min(999999, state.billed + request.cost);
    state.receipt = 'FAKTURERET → Fuld rate. Også forberedelsen.';
    state.request = (state.request + 1) % requests.length;
  } else return false;
  return true;
}
