# Plan 1: Resultater

Gennemført 18. oktober 2026. De fem billeder fylder nu **390.664 B mod 1.156.837 B**, en besparelse på **766.173 B / 66,2 %**. Originaler, kilder og billedprompts er bevaret. Appen importerer kun de fem WebP-varianter. Indlæsningstidspunktet og skærmenes adfærd er uændret.

## Reproduktion og kvalitetsvalg

Kør `pnpm install --frozen-lockfile` og derefter `pnpm optimize:images`. Scriptet er separat fra buildet. `sharp` er fastlåst til 0.34.5; målingen brugte libvips 8.17.3 på macOS arm64. `pnpm-workspace.yaml` tillader kun sharps installationsscript. De genererede billeder checkes ind og kræver ikke sharp i browseren.

Scriptet bruger automatisk orientering, skalering efter bredde uden opskalering, sRGB og WebP effort 6. Det beskærer ikke. Højden afrundes til hele pixels. Se [sharps outputdokumentation](https://sharp.pixelplumbing.com/api-output/#webp) og [skalering](https://sharp.pixelplumbing.com/api-resize/).

| Billede | Original | WebP | Før | Efter | Kvalitet |
| --- | --- | --- | ---: | ---: | --- |
| 1000mods-cover | 700 × 700 | 512 × 512 | 295.666 B | 95.762 B | 80 |
| Thranes børn | 1672 × 941 | 1024 × 576 | 288.442 B | 121.362 B | 80 |
| Thranes pixelmotiv | 1672 × 941 | 1024 × 576 | 146.915 B | 82.940 B | 90, nearest |
| Wiibroe-flaske | 187 × 700 | 187 × 700 | 275.032 B | 32.714 B | 80, alpha 100 |
| Wiibroe 2026 | 1240 × 838 | 1024 × 692 | 150.782 B | 57.886 B | 80 |
| **I alt** | | | **1.156.837 B** | **390.664 B** | |

Pixelmotivet blev også konverteret ved kvalitet 80 og lossless med samme nearest-skalering: henholdsvis 52.084 B og 474.176 B. Kvalitet 90 er valgt efter visuel kontrol af figurens og bølgernes kanter. Three.js `NearestFilter`, UV'er og skiftet ved 4/5 meter er bevaret.

To gentagne kørsler af den endelige opskrift gav identiske SHA-256-hashes. Originalernes hashes var uændrede. Flaskens alpha-kanal blev sammenlignet pixel for pixel og er identisk. Alle output er sRGB og har korrekt orientering. Metadata og outputhashes findes i [assets.json](assets.json).

## Bytes, pixels og GPU-hukommelse

De fem dekodede kilder går fra 4.806.724 til 2.281.300 pixels, **52,5 % færre**. Som ukomprimeret RGBA svarer det til 19,23 → 9,13 MB; dette er en beregning, ikke en måling af browserens faktiske hukommelse.

Coveret tegnes stadig på Henriks 768 × 424-canvas, og Wiibroe-billederne på hver sit 1024 × 565-canvas. Deres GPU-teksturer er derfor lige store før og efter. Coverets logiske billedfelt er stadig 320 × 320.

Thranes to billeder bruges direkte som teksturer. Når begge er uploadet, falder deres beregnede RGBA8-plads inklusive alle mipniveauer fra 16.775.776 til 6.291.416 B: **ca. 10,48 MB mindre**. Driverens faktiske allokering kan afvige; dette er ikke en måling af samlet VRAM.

## Browsermålinger

Baseline: Git `abb2bfd38e27bbbb3ac06eeb2a6a0c02d29bdc3a`, ren arbejdsmappe ved start. Under arbejdet kom der samtidige ændringer til Holbechs skærme, besøgsfiguren og deres dokumentation. De blev bevaret. Sammenligningen brugte derfor en separat kopi af baseline med kun plan 1-imports og billeder ændret i efter-varianten. Det aktuelle samlede produktionsbuild blev også kontrolleret særskilt.

Chromium 151.0.7922.34, ANGLE Metal / Apple M3 Pro, viewport 1440 × 1000, DPR 1, reduceret bevægelse og samme tilfældighedsseed. Begge varianter blev bygget med Vite i produktionstilstand og den eksisterende `/3doffice/dist/`-sti. Midlertidig instrumentering i kopien registrerede modeloprettelse og rendering; den findes ikke i appens kode. Første frame er næste animation frame efter afsluttet første hovedrender, ikke et DOM-paint eller en direkte GPU-måling.

Fem friske browserkontekster pr. variant, hver efterfulgt af en genindlæsning med varm HTTP-cache. Tabellen viser medianer. Browserprocessens shader-cache blev delt; første kolde før-kørsel tog 6,4 s og er med i rådata. Tallene dokumenterer lokal adfærd, ikke mobilperformance eller en garanteret opstartsgevinst.

| Måling | Før | Efter |
| --- | ---: | ---: |
| Første 3D-frame, kold HTTP-cache | 943,5 ms | 939,9 ms |
| Første 3D-frame, varm HTTP-cache | 846,5 ms | 863,5 ms |
| Modeloprettelse, kold | 289,8 ms | 292,1 ms |
| Modeloprettelse, varm | 241,2 ms | 234,3 ms |
| Første hovedrender, CPU-kald, kold | 129,7 ms | 120,8 ms |
| Alle eksterne billedfiler, body bytes | 1.219.732 B | 453.559 B |
| Billedtransfer, varm cache | 0 B | 0 B |

Opstartstiden er omtrent uændret. Alle fem billedrequests starter fortsat under opstart; dette arbejde udfører ikke plan 2. Requesttidspunkter og de 20 kørsler ligger i [browser-results.json](browser-results.json).

Separat dekodningskontrol brugte `createImageBitmap()` på allerede hentede blobs, fem gentagelser pr. billede. Medianer i ms:

| Billede | Før | Efter |
| --- | ---: | ---: |
| Cover | 3,1 | 5,3 |
| Børn | 4,6 | 7,4 |
| Pixelmotiv | 3,8 | 5,3 |
| Flaske | 2,0 | 2,0 |
| Wiibroe 2026 | 2,9 | 4,8 |

WebP gav altså ikke hurtigere dekodning i denne isolerede prøve. Det er ikke den præcise dekodningssti for appens `HTMLImageElement`, og tallene må ikke lægges til eller trækkes fra opstartstiden. Den observerede `texSubImage2D`-CPU-tid for pixelmotivet var 6,9 → 6,3 ms i én kørsel; canvas-upload lå omkring måleopløsningen på 0–0,1 ms. Det er CPU-tid ved uploadkaldet, ikke GPU-tid. Børneteksturen blev aktiveret i den særskilte visuelle nærkontrol.

En kort, identisk W-bevægelse i Kontoret og Day21 gav medianer for frame-intervaller på henholdsvis 22,2 → 25,0 ms og 17,5 → 25,0 ms. Målingen er en enkelt kort rute, ikke en stabil FPS-benchmark. Antal meshes/skyggekastere var identisk, 4.754/4.696 for hele scenen inklusive figur. Renderstatistikken inkluderer hovedkameraets skyggepass; Holbechs offscreen-optagelser er ikke inkluderet i hovedrenderens CPU-tid. Første zoomklik til næste animation frame var 19,8 → 23,1 ms i enkeltprøven. Der påstås ingen forbedring i FPS eller inputlatens.

Rå decode-, upload-, rute- og integrationsdata: [additional-results.json](additional-results.json).

## Visuel kontrol og øvrig validering

Alle nedenstående billeder er fra den samme instrumenterede produktionsbaseline, med samme kamerastillinger før/efter. Nærbillederne bruger det frie overblikskamera. Pixelmotivet ses fra en hævet vinkel uden en anden skærm foran; tættere på skifter motivet som hidtil til børnene.

| Visning | Før | Efter |
| --- | --- | --- |
| Overblik | [før](before-overview.jpg) | [efter](after-overview.jpg) |
| Henrik | [før](before-henrik.jpg) | [efter](after-henrik.jpg) |
| Wiibroe-flaske | [før](before-wiibroe-pilsner.jpg) | [efter](after-wiibroe-pilsner.jpg) |
| Wiibroe 2026 | [før](before-wiibroe-2026.jpg) | [efter](after-wiibroe-2026.jpg) |
| Thrane, pixelmotiv | [før](before-thrane-far.jpg) | [efter](after-thrane-far.jpg) |
| Thrane, nærvisning | [før](before-thrane-near.jpg) | [efter](after-thrane-near.jpg) |

Cover, farver, flaskekanter, pixelmotiv og børnenes ansigter blev visuelt sammenlignet. Nær → fjern → nær skifter korrekt; teksturdimensioner, filtre og UV'er er registreret i rådata. Ingen uventede browserfejl i før/efter eller det samlede produktionsbuild.

- `pnpm test`: alle 120 tests består efter hvert trin, inklusive `tests/proximity-wallpaper.test.mjs`.
- `pnpm build`: består efter hvert trin. Vites eksisterende advarsel om stor JavaScript-chunk består; chunking hører til plan 4.
- Netværkskontrol af det samlede produktionsbuild: præcis fem nye WebP-filer, 390.664 body bytes, ingen af de fem originaler. Buildmappen indeholder kun de valgte varianter.
- Navigation til Kontoret og Day21, bevægelse, hjælp og tilbage til overblik fungerer.
- 1.200 ms forsinkelse på billeder kombineret med en fejlet request til børnebilledet: scenen og zoom fungerer fortsat uden JavaScript-fejl. Det eksisterende manglende billedindhold ved requestfejl er uændret; planen indfører ingen ny fallback.

Der er ikke ændret sensorer, spil, pausekontrol eller touchkode. En fuld touch-/baggrundsfanetest og separate GPU-timer for skygge- og offscreen-pass er ikke udført for dette asset-skift. Ingen deployment.
