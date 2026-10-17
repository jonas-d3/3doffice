# Face Landmarker

`face_landmarker.task` is Google's MediaPipe Face Landmarker (float16, version 1).
Source: https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task
Documentation and model cards: https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker#models

Served locally and loaded only after camera activation. Camera frames are processed
in a local Web Worker, are not stored, and are not transmitted. The matching WASM
runtime is bundled from the pinned `@mediapipe/tasks-vision` dependency.
