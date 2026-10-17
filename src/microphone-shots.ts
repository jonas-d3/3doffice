import { SoundShotDetector } from './sound-shots.mjs';

const browserAudio = {
  supported: () => !!(globalThis.isSecureContext && typeof navigator.mediaDevices?.getUserMedia === 'function' && typeof globalThis.AudioContext === 'function'),
  createContext: () => new AudioContext(),
  requestStream: () => navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: false }, video: false,
  }),
};

/** One explicit opt-in per visit to the board. Only live waveform analysis. */
export class MicrophoneShots {
  state: 'off' | 'requesting' | 'calibrating' | 'listening' | 'error' | 'unsupported' = 'off';
  message = '';
  level = 0;
  detector = new SoundShotDetector();
  private environment: typeof browserAudio;
  private generation = 0;
  private context: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private analyser: AnalyserNode | null = null;
  private samples = new Float32Array(1024);

  constructor(environment = browserAudio) { this.environment = environment; }
  get active() { return ['requesting', 'calibrating', 'listening'].includes(this.state); }

  async start() {
    if (this.active) return;
    if (!this.environment.supported()) {
      this.state = 'unsupported'; this.message = 'Lydskud kræver en browser med mikrofonadgang via HTTPS eller localhost.'; return;
    }
    this.stop(); this.state = 'requesting'; this.message = '';
    const generation = this.generation;
    try {
      const context = this.environment.createContext(); this.context = context;
      // Resume during the click gesture, before waiting for microphone permission.
      const resumed = context.resume().then(() => null, error => error);
      const stream = await this.environment.requestStream();
      if (generation !== this.generation) { stream.getTracks().forEach(track => track.stop()); return; }
      this.stream = stream;
      const resumeError = await resumed;
      if (generation !== this.generation) return;
      if (resumeError) throw resumeError;
      if (context.state !== 'running' || !stream.getAudioTracks().some(track => track.readyState === 'live')) throw new Error('Audio unavailable');
      this.analyser = context.createAnalyser(); this.analyser.fftSize = this.samples.length;
      this.source = context.createMediaStreamSource(stream); this.source.connect(this.analyser);
      // No connection to the speakers: never play the user's microphone back.
      stream.getAudioTracks().forEach(track => track.addEventListener('ended', () => {
        if (generation === this.generation) this.fail('Mikrofonen blev afbrudt. Aktivér den igen for at fortsætte.');
      }, { once: true }));
      this.state = 'calibrating';
    } catch (error) {
      if (generation !== this.generation) return;
      const name = error instanceof Error ? error.name : '';
      this.fail(name === 'NotAllowedError' ? 'Ingen mikrofonadgang. Tillad mikrofonen i browseren, og prøv igen.'
        : name === 'NotFoundError' ? 'Ingen mikrofon fundet. Tilslut en mikrofon, og prøv igen.'
          : 'Mikrofonen kunne ikke starte. Prøv igen, eller spil uden mikrofon.');
    }
  }

  private fail(message: string) { this.stop(); this.state = 'error'; this.message = message; }

  stop() {
    this.generation++;
    this.stream?.getTracks().forEach(track => track.stop()); this.stream = null;
    this.source?.disconnect(); this.source = null; this.analyser = null;
    if (this.context) void this.context.close().catch(() => {});
    this.context = null; this.level = 0;
    const sensitivity = this.detector.sensitivity;
    this.detector = new SoundShotDetector(); this.detector.sensitivity = sensitivity;
    if (this.active) this.state = 'off';
  }

  update(dt: number) {
    if (!this.analyser) return false;
    if (this.context?.state !== 'running') { this.fail('Mikrofonen holder pause. Aktivér den igen for at fortsætte.'); return false; }
    this.analyser.getFloatTimeDomainData(this.samples);
    let sum = 0;
    for (const sample of this.samples) sum += sample * sample;
    const rms = Math.sqrt(sum / this.samples.length);
    const fire = this.detector.update(dt, rms);
    this.level = Math.min(1, rms / this.detector.threshold);
    this.state = this.detector.ready ? 'listening' : 'calibrating';
    return fire;
  }
}
