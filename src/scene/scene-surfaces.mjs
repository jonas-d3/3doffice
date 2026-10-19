import { Mesh } from 'three';

// Controllers retain the same array. Structure changes refresh it before the next
// input task; visibility queries can flush it immediately within the current frame.
const records = new WeakMap();
function recordFor(root) {
  let record = records.get(root);
  if (!record) {
    record = { list: [], watched: new Set(), dirty: true, scheduled: false, changed: undefined };
    record.changed = () => {
      record.dirty = true;
      if (record.scheduled) return;
      record.scheduled = true;
      queueMicrotask(() => { record.scheduled = false; if (record.dirty) rebuild(root, record); });
    };
    records.set(root, record);
  }
  return record;
}
function rebuild(root, record) {
  record.list.length = 0; const seen = new Set();
  root.updateWorldMatrix(true, true);
  root.traverse(object => {
    seen.add(object);
    if (object instanceof Mesh) record.list.push(object);
    if (!record.watched.has(object)) {
      object.addEventListener('childadded', record.changed); object.addEventListener('childremoved', record.changed);
    }
  });
  for (const object of record.watched) if (!seen.has(object)) {
    object.removeEventListener('childadded', record.changed); object.removeEventListener('childremoved', record.changed);
  }
  record.watched = seen; record.dirty = false;
}
export function sceneSurfaces(root) {
  const record = recordFor(root);
  if (record.dirty) rebuild(root, record);
  return record.list;
}
export function refreshSceneSurfaces(root) {
  for (let current = root; current; current = current.parent) {
    const record = records.get(current); if (record) rebuild(current, record);
  }
}
