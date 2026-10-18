import type { LazyFeature } from './lazy-feature.mjs';

type Feature = Pick<LazyFeature<unknown, unknown>, 'name' | 'state' | 'prepare' | 'reloadRequired'>;
export function featureStatus(features: Feature[]) {
  const panel = document.querySelector<HTMLElement>('#feature-loading')!;
  const message = panel.querySelector('span')!;
  const retry = panel.querySelector<HTMLButtonElement>('[data-retry]')!;
  let current: Feature | undefined;
  function show(feature: Feature) {
    current = feature; panel.hidden = false;
    retry.hidden = feature.state !== 'error' || feature.reloadRequired;
    message.textContent = feature.state === 'error'
      ? `${feature.name} kunne ikke indlæses.${feature.reloadRequired ? ' Genindlæs siden for at prøve igen.' : ''}`
      : `Indlæser ${feature.name} … prøv igen om lidt.`;
  }
  retry.addEventListener('click', () => { if (current) { void current.prepare(100, true); show(current); } });
  panel.querySelector('[data-reload]')!.addEventListener('click', () => location.reload());
  panel.querySelector('[data-dismiss]')!.addEventListener('click', () => { current = undefined; panel.hidden = true; });
  return {
    show,
    failed(name: string) { const feature = features.find(f => f.name === name); if (feature) show(feature); },
    update() {
      if (!current) return;
      if (current.state === 'ready') { panel.hidden = true; current = undefined; }
      else if (current.state === 'error') show(current);
    },
  };
}
