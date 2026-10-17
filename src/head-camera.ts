import { HeadSteering } from './head-steering.mjs';

type Tracker = { track(video: HTMLVideoElement, time: number): Promise<number | null>; close(): void };
type CameraEnvironment = {
  supported(): boolean;
  requestStream(): Promise<MediaStream>;
  createVideo(): HTMLVideoElement;
  createTracker(): Promise<Tracker>;
  now(): number;
};
const browser: CameraEnvironment = {
  supported: () => isSecureContext && !!navigator.mediaDevices?.getUserMedia && typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && typeof createImageBitmap === 'function',
  requestStream: () => navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user', width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15, max: 20 } } }),
  createVideo: () => { const video = document.createElement('video'); video.muted = true; video.playsInline = true; return video; },
  createTracker: async () => (await import('./head-camera-browser')).createHeadTracker(),
  now: () => performance.now(),
};

export class HeadCamera {
  state = 'off';
  message = '';
  steering = new HeadSteering();
  private environment: CameraEnvironment;
  private generation = 0;
  private stream: MediaStream | null = null;
  private video: HTMLVideoElement | null = null;
  private tracker: Tracker | null = null;
  private busy = false;
  private nextFrame = 0;
  private lastVideoTime = -1;

  constructor(environment = browser) { this.environment = environment; }
  get active() { return ['requesting', 'loading', 'calibrating', 'tracking', 'lost'].includes(this.state); }
  get ready() { return this.state === 'tracking'; }
  get targetX() { return this.steering.targetX; }

  async start(x = 400) {
    if (this.active) return;
    this.stop(); this.message = '';
    if (!this.environment.supported()) {
      this.state = 'unsupported'; this.message = 'Kameraets hovedstyring understøttes ikke her. Du kan stadig gå til siderne.'; return;
    }
    const generation = this.generation;
    this.state = 'requesting'; this.steering.recenter(x);
    try {
      const stream = await this.environment.requestStream();
      if (generation !== this.generation) { stream.getTracks().forEach(track => track.stop()); return; }
      this.stream = stream;
      stream.getVideoTracks().forEach(track => track.addEventListener('ended', () => {
        if (generation === this.generation) this.fail('Kameraet blev afbrudt. Aktivér det igen, eller gå til siderne.');
      }, { once: true }));
      this.state = 'loading';
      const video = this.environment.createVideo(); this.video = video; video.srcObject = stream;
      await video.play();
      if (generation !== this.generation) return;
      const tracker = await this.environment.createTracker();
      if (generation !== this.generation) { tracker.close(); return; }
      this.tracker = tracker;
      this.state = 'calibrating'; this.steering.lastSeen = this.environment.now();
    } catch (error) {
      if (generation !== this.generation) return;
      const name = error instanceof Error ? error.name : '';
      this.fail(name === 'NotAllowedError' ? 'Ingen adgang til kameraet. Tillad kamera i browseren, eller gå til siderne.'
        : name === 'NotFoundError' ? 'Der er intet kamera tilgængeligt. Du kan stadig gå til siderne.'
        : 'Kameraets hovedstyring kunne ikke starte. Prøv igen, eller gå til siderne.');
    }
  }

  recenter(x = this.targetX) {
    this.steering.recenter(x); this.steering.lastSeen = this.environment.now();
    if (this.tracker) this.state = 'calibrating';
  }

  stop() {
    this.generation++;
    this.stream?.getTracks().forEach(track => track.stop()); this.stream = null;
    if (this.video) { this.video.pause(); this.video.srcObject = null; this.video = null; }
    this.tracker?.close(); this.tracker = null;
    this.busy = false; this.nextFrame = 0; this.lastVideoTime = -1;
    if (this.active) this.state = 'off';
  }

  private fail(message: string) { this.stop(); this.state = 'error'; this.message = message; }

  update(dt: number) {
    const tracker = this.tracker, video = this.video;
    if (!tracker || !video) return;
    const now = this.environment.now();
    this.steering.update(dt, now); this.state = this.steering.state;
    if (this.busy || now < this.nextFrame || video.readyState < 2 || video.currentTime === this.lastVideoTime) return;
    this.busy = true; this.nextFrame = now + 1000 / 15; this.lastVideoTime = video.currentTime;
    const generation = this.generation;
    void tracker.track(video, now).then(position => {
      if (generation !== this.generation) return;
      // Use capture time, so delayed results cannot revive stale tracking.
      this.steering.observe(position, now);
    }).catch(() => {
      if (generation === this.generation) this.fail('Hovedstyringen blev afbrudt. Prøv igen, eller gå til siderne.');
    }).finally(() => { if (generation === this.generation) this.busy = false; });
  }
}
