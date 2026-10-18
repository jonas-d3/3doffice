/** @template M,T */
export class LazyFeature {
  /** @param {string} name @param {import('./load-queue.mjs').LoadQueue} queue @param {()=>Promise<M>} load @param {(module:M)=>T} create */
  constructor(name, queue, load, create, changed = () => {}, failed = (_name, _error) => {}) {
    this.name = name; this.queue = queue; this.load = load; this.create = create;
    this.changed = changed; this.failed = failed;
    /** @type {T | undefined} */ this.value = undefined;
    /** @type {Promise<M> | undefined} */ this.module = undefined;
    /** @type {Promise<T | undefined> | undefined} */ this.pending = undefined;
    this.state = 'idle'; this.relevant = false; this.reloadRequired = false;
  }
  warm(priority = 0) {
    this.queue.promote(`import:${this.name}`, priority);
    return this.module ??= this.queue.add(`import:${this.name}`, 'work', this.load, priority);
  }
  prefetch() { this.warm().catch(error => this.error(error, 'import')); }
  error(error, phase) {
    this.state = 'error'; this.reloadRequired = phase === 'import'; this.failed(this.name, error);
  }
  prepare(priority = 10, retry = false) {
    if (this.value) return Promise.resolve(this.value);
    this.queue.promote(`import:${this.name}`, priority); this.queue.promote(`create:${this.name}`, priority);
    if (this.pending) return this.pending;
    if (this.state === 'error') {
      // Browsers retain failed module loads, including failed shared dependencies.
      // Only an explicit page reload can reliably recover that module graph.
      if (!retry || this.reloadRequired) return Promise.resolve(undefined);
    }
    this.state = 'loading';
    let importing = true;
    this.pending = this.warm(priority).then(module => {
      importing = false;
      return this.queue.add(`create:${this.name}`, 'work', () => {
      this.value = this.create(module); this.state = 'ready'; this.changed(); return this.value;
      }, priority);
    }).catch(error => { this.error(error, importing ? 'import' : 'create'); return undefined; }).finally(() => { this.pending = undefined; });
    return this.pending;
  }
  setRelevant(relevant, priority = 10) {
    if (relevant && (!this.relevant || this.state === 'loading')) void this.prepare(priority, !this.relevant);
    this.relevant = relevant;
  }
}
