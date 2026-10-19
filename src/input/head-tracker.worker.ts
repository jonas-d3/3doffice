import { FaceLandmarker } from '@mediapipe/tasks-vision';
import wasmLoaderPath from '@mediapipe/tasks-vision/vision_wasm_module_internal.js?url';
import wasmBinaryPath from '@mediapipe/tasks-vision/vision_wasm_module_internal.wasm?url';
import { facePosition } from './head-steering.mjs';

let detector: FaceLandmarker | undefined;
self.onmessage = async ({ data }: MessageEvent<{ model?: string; frame?: ImageBitmap; time: number }>) => {
  try {
    if (data.model) {
      detector = await FaceLandmarker.createFromOptions({ wasmLoaderPath, wasmBinaryPath }, {
        baseOptions: { modelAssetPath: data.model, delegate: 'CPU' },
        canvas: new OffscreenCanvas(320, 240), runningMode: 'VIDEO', numFaces: 1,
        minFaceDetectionConfidence: .6, minFacePresenceConfidence: .6, minTrackingConfidence: .6,
      });
      self.postMessage({ ready: true });
    } else if (data.frame && detector) {
      const result = detector.detectForVideo(data.frame, data.time);
      self.postMessage({ position: facePosition(result.faceLandmarks[0] || []) });
    }
  } catch {
    self.postMessage({ error: true });
  } finally { data.frame?.close(); }
};
