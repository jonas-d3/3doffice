/** Loaded only after the user asks to enable the camera. Frames stay in this worker. */
export async function createHeadTracker() {
  const worker = new Worker(new URL('./head-tracker.worker.ts', import.meta.url), { type: 'module' });
  let closed = false;
  let resolve: ((position: number | null) => void) | undefined;
  let reject: ((reason: Error) => void) | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const fail = () => {
    clearTimeout(timer); reject?.(new Error('Hovedstyringen kunne ikke starte. Prøv igen.'));
    resolve = undefined; reject = undefined;
  };
  worker.onerror = fail;
  worker.onmessage = ({ data }) => {
    if (data.error) { fail(); return; }
    clearTimeout(timer); resolve?.(data.position ?? null); resolve = undefined; reject = undefined;
  };
  function wait(timeout: number) {
    return new Promise<number | null>((done, error) => {
      resolve = done; reject = error; timer = setTimeout(fail, timeout);
    });
  }
  try {
    const ready = wait(30000);
    worker.postMessage({ model: new URL(`${import.meta.env.BASE_URL}models/face_landmarker.task`, location.href).href });
    await ready;
  } catch (error) { worker.terminate(); throw error; }
  return {
    async track(video: HTMLVideoElement, time: number) {
      const frame = await createImageBitmap(video);
      if (closed) { frame.close(); return null; }
      const result = wait(2000);
      worker.postMessage({ frame, time }, [frame]);
      return result;
    },
    close() { closed = true; fail(); worker.terminate(); },
  };
}
