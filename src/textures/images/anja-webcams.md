# Anjas simulerede webcams

Begge billeder er genereret med OpenAI imagegen den 17. oktober 2026 til modellen. De viser fiktive motiver og hentes lokalt; der er ingen kameraadgang eller ekstern videoforbindelse.

- `anja-fridge-webcam.webp`: fotorealistisk webcamvinkel inde fra et hvidt kontorkøleskab med blå/hvide kartoner med økologisk mælk, mærket ØKOLOGISK MÆLK og rødt Ø-mærke.
- `anja-elevator-webcam.webp`: fotorealistisk webcamvinkel mod en brun elevatordør af træ med seks glasruder, metalhåndtag og en knap ved siden af døren.

`src/screens/anja-screens.ts` tilføjer klokkeslæt, live-indikatorer og skannelinjer til billederne. Grafernes tal er fiktive og animerede.

Billederne er optimeret fra 1448 × 1086 pixels til WebP på 600 × 450 pixels med `cwebp -q 82 -m 6 -resize 600 0 -metadata none`. Det bevarer billedformatet og dækker kameraernes tegnefelter på 552 × 340 pixels. Den samlede filstørrelse er reduceret fra 4.228.307 til 48.322 bytes (98,9 %).

## Redigering til økologisk mælk

Det indbyggede imagegen-værktøj blev brugt den 17. oktober 2026 med det oprindelige køleskabsbillede som redigeringsmål og følgende prompt:

> undefined
