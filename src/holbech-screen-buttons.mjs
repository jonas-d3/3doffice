// Canvas coordinates are shared by drawing and UV hit testing.
export const screenSize = { width: 1024, height: 565 };
export const trackButton = { x: 282, y: 292, width: 460, height: 92 };
export const stopButton = { x: 730, y: 9, width: 276, height: 43 };
export function screenButton(uv, tracking) {
  const x = uv.x * screenSize.width, y = (1 - uv.y) * screenSize.height;
  const box = tracking ? stopButton : trackButton;
  return x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height;
}
export function drawScreenButton(context, box, label) {
  context.fillStyle = '#7af0c4'; context.fillRect(box.x, box.y, box.width, box.height);
  context.fillStyle = '#10271f'; context.font = `${box === trackButton ? 36 : 26}px sans-serif`;
  context.textAlign = 'center'; context.textBaseline = 'middle';
  context.fillText(label, box.x + box.width / 2, box.y + box.height / 2);
  context.textAlign = 'left'; context.textBaseline = 'alphabetic';
}
