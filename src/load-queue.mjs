// One start per browser turn; network and module/initialization work have separate limits.
export class LoadQueue {
  constructor(schedule = fn => requestAnimationFrame(() => setTimeout(fn, 0))) {
    this.schedule = schedule;
    this.tasks = new Map();
    this.running = { download: 0, work: 0 };
    this.released = false;
    this.paused = false;
    this.scheduled = false;
  }

  add(key, lane, run, priority = 0) {
    const existing = this.tasks.get(key);
    if (existing) { existing.priority = Math.max(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
    this.tasks.set(key, { key, lane, run, priority, promise, resolve, reject, started: false });
    this.wake();
    return promise;
  }

  promote(key, priority) {
    const task = this.tasks.get(key);
    if (task) task.priority = Math.max(task.priority, priority);
    this.wake();
  }
  release() { this.released = true; this.wake(); }
  setPaused(paused) { this.paused = paused; this.wake(); }

  wake() {
    if (!this.released || this.paused || this.scheduled) return;
    const available = () => [...this.tasks.values()].filter(t => !t.started && this.running[t.lane] < (t.lane === 'download' ? 2 : 1));
    if (!available().length) return;
    this.scheduled = true;
    this.schedule(() => {
      this.scheduled = false;
      if (this.paused) return;
      const task = available().sort((a, b) => b.priority - a.priority)[0];
      if (!task) return;
      task.started = true; this.running[task.lane]++;
      Promise.resolve().then(task.run).then(task.resolve, task.reject).finally(() => {
        this.tasks.delete(task.key); this.running[task.lane]--; this.wake();
      });
      this.wake();
    });
  }
}
