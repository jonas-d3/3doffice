# Planer for performance i 3doffice

Status: Plan 1 er gennemført; plan 2–7 er klar til implementering. Oprettet 18. oktober 2026. Der er syv planer; det tidligere punkt om billeder er opdelt i optimering og indlæsning efter behov. Se [resultater for plan 1](results/01-image-optimization/README.md).

Det primære mål er et hurtigt, brugbart første overblik. Systemet må gerne hente meget indhold over tid; det valgfrie arbejde skal fordeles efter opstart, så download, evaluering, oprettelse og GPU-upload ikke blokerer den første oplevelse eller efterfølgende input. Samlede bytes er en sekundær måling. Hver plan leveres i små trin med måling og kontrol mellem trinnene.

Det eksisterende overblik med hele kontoret og fri zoom skal bevares. Brugeren skal kunne zoome direkte ind på en skærm fra overblikket og se dens indhold uden først at vælge Kontoret eller Gå rundt. Relevans afgøres af kamera, synlighed og skærmens projicerede størrelse, uafhængigt af navigationsmodus. Eksisterende regler for at starte et bestemt spil bevares; synligt skærmindhold må ikke begrænses til gåtilstand.

| Plan | Leverance | Afhængigheder |
| --- | --- | --- |
| [1. Billedoptimering](01-image-optimization.md) | Mindre billedfiler med passende opløsning | Ingen |
| [2. Billeder efter behov](02-images-on-demand.md) | Billeder hentes efter første brugbare frame og prioriteres efter kameravisning | Ingen; kan bruge nuværende billeder |
| [3. Moduler efter behov](03-lazy-modules.md) | Spil og skærmcontrollers klargøres gradvist efter opstart | Plan 2 leverer mønstret for asynkrone billeder og prioritering |
| [4. Chunking](04-chunking.md) | Stabil Three.js-chunk og kontrollerede feature-chunks | Plan 3 |
| [5. Geometri og draw calls](05-geometry-and-draw-calls.md) | Genbrug, instancing og afgrænset sammenlægning | Kan starte selvstændigt; synkroniser med plan 3 |
| [6. Skygger](06-shadows.md) | Færre skyggekastere med bevaret rumlighed | Plan 5 anbefales først |
| [7. Detaljer og synlighedstjek](07-deferred-details-and-visibility.md) | Udskudte render targets og billigere raycasts | 7A–B: plan 2 og 3. 7C–D: også sceneændringer fra plan 5 |

Prioritér 2 → 3 → 4 → 7A–B for at flytte arbejde væk fra opstart. Derefter følger 1 → 5 → 6 → 7C–D efter de målte resterende problemer. Billedkomprimering er ingen forudsætning for udskudt indlæsning. Hvert undertrin skal efterlade en fungerende app. Der indgår ingen deployment i planerne.

## Fælles indlæsningsforløb

1. Vis det komplette overblik med nødvendige rum, møbler, skærmflader og fungerende kamerastyring. Brug lette, genkendelige skærmrepræsentationer indtil detaljerne er klar. Der skal ikke vente en samlet load-barriere på alle assets.
2. Efter første brugbare 3D-frame kan en lille fælles kø gradvist forudindlæse billeder og feature-kode. Første frame alene er ikke tilladelse til at starte alt samtidig: giv browseren tid til input/rendering mellem opgaverne. Begynd med højst to baggrundsdownloads og én modul-/initialiseringsopgave ad gangen, og tilpas efter måling.
3. Zoom, panorering, kameravalg og egentlig aktivering løfter relevante opgaver foran den spekulative kø. Brug projiceret skærmstørrelse og synlighed sammen med afstand; en rigid afstandsgrænse eller `isWalking` må ikke blokere skærmindhold i overblikszoom.
4. Adskil download/import, dyr initialisering og aktivering. En varm cache må ikke automatisk starte animationer, iframe, spil, kamera eller mikrofon. Et dynamisk import evaluerer også modulet; store allokeringer skal derfor ud af modulets topniveau.
5. Køen må over tid hente alle almindelige billeder og feature-moduler, hvis navigationen forbliver flydende. Bevar færdige resultater. Pausér nye spekulative opgaver ved skjult fane og prioritér brugerens aktuelle behov ved travlhed. WASM/ansigtsmodel og eksternt videoindhold beholder deres eksisterende aktiveringstriggere.

## Målt udgangspunkt

Tallene stammer fra undersøgelsen før disse planer. De er en reference, ikke en garanteret baseline for en senere checkout. Et separat instrumenteret build blev brugt til scenemålingerne; instrumenteringen er ikke tilføjet projektkoden.

| Måling | Resultat |
| --- | ---: |
| Oprindelig entry-JavaScript, minificeret | 807,29 kB |
| Oprindelig entry-JavaScript, gzip | 224,88 kB |
| Billeder hentet ved opstart | ca. 1,22 MB |
| Kontormodellens meshes / unikke geometrier | 4.551 / 4.549 |
| Kontormodellens skyggekastere | 4.498 |
| Første overbliksrendering, inklusive skygger | 7.534 draw calls |
| Lokal oprettelse af kontormodellen | ca. 238 ms |
| Fem store billeder, oprindelige / prøvekonvertering | 1.156.837 / 349.326 bytes |

Tiderne er fra én lokal måling. De dokumenterer ikke FPS, GPU-tid eller mobilperformance. WASM, ansigtsmodel og YouTube-iframe bliver allerede indlæst efter behov. Animationernes afstandstjek, pauser ved skjult fane og begrænsede billedfrekvenser skal bevares.

## Fælles måleprotokol

1. Registrér Git-revision og eksisterende ændringer. Der var igangværende Donkey Kong-filer under planlægningen; undersøg den aktuelle integration ved implementering og bevar andres arbejde.
2. Lav et produktionsbuild med pnpm. Brug samme browser, viewport, pixel ratio, kameravisninger og figur-/animationsstatus før og efter. Mål først kold indlæsning og derefter gentaget besøg med cache.
3. Gentag opstart mindst fem gange og rapportér median. Registrér tid til første brugbare 3D-frame, respons på første kamera-input og scenens oprettelsestid. Adskil den nødvendige statiske importgraf og requests før dette tidspunkt fra efterfølgende baggrundsindlæsning og behovsstyret aktivering. Et almindeligt DOM-paint er ikke nødvendigvis første 3D-frame; en stor totalsum efter 30 sekunder er ikke i sig selv en fejl.
4. Mål en fast gåtur gennem Kontoret og Day21: frame-tider samt antal renderkald, draw calls, geometrier, teksturer og skyggekastere. Adskil hovedkamera, skyggepass og Holbechs offscreen-optagelser. CPU-tiden omkring `renderer.render()` må ikke betegnes som GPU-tid.
5. Zoom direkte fra startoverblikket ind på hver type skærm, både straks efter opstart og med varm cache. Gentag med netværksforsinkelse, mens baggrundskøen arbejder, og med én fejlet billed-/chunk-request. Registrér ventetid til skærmindhold og frame-tider under indlæsning. Gem før/efter-resultater sammen med den gennemførte plan.

Et lille, eksplicit aktiveret målemodul kan tilføjes ved første implementering, hvis browserprofilering ikke er tilstrækkelig. Det skal være inaktivt ved normal brug. Der skal ikke oprettes et separat måleframework.

## Fælles kontrol efter hvert undertrin

- Kør relevante eksisterende tests undervejs; kør `pnpm test` og `pnpm build` ved færdiggørelse af hvert punkt.
- Kontrollér produktionsbuildet i browseren, inklusive konsol og netværk. Bevar base-stien `/3doffice/dist/`.
- Nye tests skal bevise ændret adfærd, eksempelvis async-races, occlusion eller geometri, og ikke blot genkende bestemte kodelinjer.
- Gem før/efter-skærmbilleder, når grafik, materialer eller skygger ændres. Kontrollér både overblik og nærbilleder.
- Kontrollér pause/genoptagelse, reduceret bevægelse, hjælp, touch og kameravisningsskift, når det berørte område bruger dem.

Efter plan 2 kontrolleres første brugbare frame og direkte zoom under baggrundsindlæsning. Efter plan 4 kontrolleres den statiske importgraf og alle spil. Efter plan 7A–B kontrolleres, at arbejdet ikke blot er flyttet til én stor blokering umiddelbart efter første frame. Efter plan 6 og 7C–D gentages navigation, skygger, interaktioner og den samlede måleprotokol.

## Fælles integrationsregler

- Brug pnpm til pakker og scripts.
- Bevar lette, stabile referencer til whiteboard, TV, Tetris-glas, skærme og kaffeknapper. Lazy loading og instancing må ikke gøre interaktive mål uidentificerbare.
- `WhiteboardGame`, `TetrisGame` og `EasterEggs` indsamler i dag sceneobjekter ved oprettelse. Tilføjelse eller udskiftning af geometri kræver opdatering af disse lister, før den næste interaktion behandles.
- Kamera og mikrofon aktiveres fortsat kun gennem brugerens eksisterende knapper. Prefetch må aldrig starte sensorer eller videoafspilning.
- Plan 2 ejer billedrequests og starter den lille fælles prioriteringskø; plan 3 kobler import/initialisering på samme kø; plan 7 fordeler dyre grafikopgaver videre. Undgå tre overlappende loaders.

Tekniske referencer: [Vite chunking](https://vite.dev/guide/build#chunking-strategy), [Three.js geometri](https://threejs.org/manual/pages/optimize-lots-of-objects.html), [teksturer](https://threejs.org/manual/pages/textures.html) og [skygger](https://threejs.org/manual/pages/shadows.html).
