/** Mirror the eye midpoint and add a little nose offset for head turns. */
export function facePosition(landmarks) {
  const nose = landmarks[1], left = landmarks[33], right = landmarks[263];
  if (![nose, left, right].every(point => point && Number.isFinite(point.x) && Number.isFinite(point.y))) return null;
  const span = Math.hypot(left.x - right.x, left.y - right.y);
  if (span < .035) return null;
  const middle = (left.x + right.x) / 2;
  return 1 - middle + (middle - nose.x) / span * .12;
}

/** Camera coordinates become a stable, calibrated position on the board. */
export class HeadSteering {
  state = 'calibrating';
  center = null;
  samples = [];
  lastSeen = -Infinity;

  constructor(x = 400) { this.recenter(x); }

  recenter(x = this.targetX) {
    this.targetX = this.desiredX = this.anchorX = x;
    this.center = null; this.samples = []; this.state = 'calibrating';
  }

  observe(position, time) {
    if (!Number.isFinite(position)) {
      this.samples = []; this.state = 'lost'; return;
    }
    if (this.state === 'lost') this.recenter();
    this.lastSeen = time;
    if (this.center === null) {
      if (this.samples.some(sample => Math.abs(sample.position - position) > .035)) this.samples = [];
      this.samples.push({ position, time });
      if (this.samples.length < 6 || time - this.samples[0].time < 600) return;
      this.center = this.samples.reduce((sum, sample) => sum + sample.position, 0) / this.samples.length;
      this.samples = []; this.state = 'tracking';
    }
    const delta = position - this.center;
    const movement = Math.sign(delta) * Math.max(0, Math.abs(delta) - .006);
    this.desiredX = Math.max(55, Math.min(745, this.anchorX + movement * (345 / .14)));
  }

  update(dt, time) {
    if (time - this.lastSeen > 400) { this.samples = []; this.state = 'lost'; }
    if (this.state === 'tracking') this.targetX += (this.desiredX - this.targetX) * (1 - Math.exp(-14 * dt));
    return this.targetX;
  }
}
