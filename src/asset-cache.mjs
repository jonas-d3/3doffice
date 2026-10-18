// This cache owns decoded image data, never mutable GPU textures.
export class AssetCache {
  constructor(queue, load) { this.queue = queue; this.load = load; this.entries = new Map(); }
  request(url, priority = 0, retry = false) {
    const old = this.entries.get(url);
    if (old && !(retry && old.state === 'error')) {
      this.queue.promote(`image:${url}`, priority);
      return old.promise;
    }
    const entry = { state: 'pending', promise: null };
    entry.promise = this.queue.add(`image:${url}`, 'download', () => this.load(url), priority)
      .then(image => { entry.state = 'ready'; return image; }, error => { entry.state = 'error'; throw error; });
    this.entries.set(url, entry);
    return entry.promise;
  }
}
