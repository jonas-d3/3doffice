/** Short sounds fire once; sustained sounds produce a salvo. No audio is saved. */
export class SoundShotDetector {
  sensitivity = 1;
  noise = .004;
  elapsed = 0;
  quiet = 0;
  loud = 0;
  cooldown = 0;
  latched = false;

  get ready() { return this.elapsed >= .65; }
  get threshold() { return Math.max(.014, this.noise * 3) / this.sensitivity; }

  update(dt, level) {
    if (!Number.isFinite(dt) || dt <= 0 || !Number.isFinite(level)) return false;
    dt = Math.min(dt, .05);
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (!this.ready) {
      this.elapsed += dt;
      this.noise += (level - this.noise) * (1 - Math.exp(-dt * 8));
      return false;
    }
    if (level < Math.max(this.noise * 1.35, this.threshold * .6)) {
      this.noise += (level - this.noise) * (1 - Math.exp(-dt * 2));
      this.quiet += dt; this.loud = 0;
      if (this.quiet >= .02) this.latched = false;
    } else {
      this.quiet = 0;
      if (level >= this.threshold) this.loud += dt; else this.loud = 0;
      const onset = !this.latched && this.loud >= .015;
      const sustained = this.loud >= .22;
      if ((onset || sustained) && this.cooldown <= 0) {
        this.latched = true; this.cooldown = .075;
        return true;
      }
    }
    return false;
  }
}
