# Plan 5: Genbrug af geometri og færre draw calls

Status 18. oktober 2026: Implementeret og verificeret. Se [målinger, kontrol og afgrænsninger](results/02-06/README.md).

Reducér oprettelsesarbejde og renderkald for gentagne statiske objekter. Udgangspunktet var 4.551 meshes, 4.549 unikke geometrier og 7.534 draw calls i første overbliksrendering inklusive skygger. Genmål med den aktuelle kode og brug [måleprotokollen](README.md).

Planen er sekundær i forhold til at udskyde opstartsarbejde og prioriteres efter nye målinger. Koordinér sceneidentiteter med plan 3; plan 6 følger den valgte gruppering. Geometrigenbrug sparer allokeringer, mens instancing og sammenlægning også kan spare draw calls. Det komplette overblik og direkte zoom ind på skærme skal bevares; optimeringen må ikke kræve, at et rum først aktiveres gennem gåtilstand.

## Trin 5A: Del uforanderlig geometri

Indfør cache for identiske BoxGeometry-, CylinderGeometry- og RoundedBoxGeometry-parametre. Begynd i `geometry.ts` med samme dimensioner og segmenttal som nu. Cacheværdier er uforanderlige og ejes af scenen; et enkelt mesh må ikke dispose dem. Geometri med ændrede UV'er eller vertices skal fortsat være selvstændig eller klones før ændring.

Berørte filer: `src/geometry.ts`, eventuelt nyt `src/geometry-cache.mjs`, `src/workspace.ts` og fokuserede geometritests. Omfang: M.

- [x] Identiske parametre genbruger geometri; forskellige parametre og muterede UV'er påvirker ikke hinanden.
- [x] Placeringer, silhuetter og interaktive skærme er visuelt uændrede.
- [x] Antallet af unikke geometrier og oprettelsestiden er registreret før/efter; draw-call-besparelse tilskrives ikke cachen alene.

Kontrol: tests af cacheidentitet og mutationsisolering, browsernærbilleder og fuldt build.

## Trin 5B: Instancing af én gentaget objektgruppe

Start med statiske stoledele i Kontoret, eksempelvis hjul og ben. Byg instances med samme geometri, materiale og skyggeegenskaber. Gem transformationer relativt til den relevante fælles forælder, og opdatér bounds efter opbygning. Bevar hele stolenes placering og de eksisterende kollisioner fra layoutdata.

Berørte filer: `src/workspace.ts`, eventuelt lille `src/static-instances.ts`, `src/geometry.ts` og en transform-/bounds-test. Omfang: M.

- [x] Den valgte gruppe tegnes med færre draw calls og samme synlige placeringer.
- [x] Reflekterede og negative transformationer identificeres. De holdes uden for InstancedMesh eller bages korrekt i særskilt geometri; negative instance-matricer bruges ikke ukritisk.
- [x] Frustum-culling, skygger og raycasts ser de nye instance-bounds korrekt.

Kontrol: sammenlign med de oprindelige dele i overblik og gåtilstand. Mål samme kameraframe før/efter og gå gennem alle relevante stolegange.

## Trin 5C: Udvid én rumgruppe ad gangen

Udvid til øvrige gentagne dele i Kontoret og derefter bjælker/borde i Day21. Vurdér sammenlægning pr. materiale for statisk geometri, der ikke kan instances effektivt. Hold adskilte grupper pr. rum og pr. cutaway-væg/tag; undgå én samlet mesh for hele kontoret, som forringer culling og synlighedsstyring.

Filer pr. ændring: højst én af `src/workspace.ts`, `src/workspace-shell.ts`, `src/day21.ts` eller `src/day21-shell.ts`, fælles helper og relevante tests. Omfang: M pr. rumgruppe.

- [x] Skærme, kaffeknapper, døre, creeper og øvrige bevægelige/interaktive mål bevarer deres egne identiteter.
- [x] Occlusion-lister indeholder de nye meshes og fjerner erstattede meshes; både eksisterende og senere indlæste controllers får korrekt scenegrundlag.
- [x] De samlede draw calls falder i overblik og mindst én gåvisning, uden tilbagegang i de målte frame-tider. Arbejdsmålet er mindst 30 % færre overbliks-draw calls; resultatet dokumenteres, også hvis yderligere samling vil skade culling eller udseende.

Kontrol: `workspace`, `movement`, `day21`, `youtube-screen`, `whiteboard-play` og `easter-eggs` tests; browserkontrol af skjulte vægge, loft, skærmklik og delvis occlusion.

## Aflevering

Aflever før/efter for meshes, geometrier, draw calls, sceneoprettelse og frame-tider samt sammenlignelige screenshots. Segmentreduktion, simplificerede møbler og andre visuelle ændringer er separate efterfølgende forsøg, som kun indføres ved målt behov. Der tilføjes ingen ny runtime-dependency til batching uden konkret nødvendighed.
