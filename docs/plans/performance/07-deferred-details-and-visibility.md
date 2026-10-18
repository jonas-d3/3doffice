# Plan 7: Udskudte detaljer og billigere synlighedstjek

Udskyd dyre grafikressourcer inden i de moduler, som plan 3 allerede indlæser efter behov, og reducer arbejdet med synlighedstjek. Planen består af to adskilte spor, som måles hver for sig. Udfør 7A–B efter plan 2 og 3 som del af opstartsarbejdet; 7C–D følger senere efter sceneændringer fra plan 5. Det er acceptabelt, at meget indhold forberedes efter opstart, så længe input og rendering forbliver flydende.

Hele modellen tog ca. 238 ms at oprette i den tidligere lokale måling. Holbechs skærme opretter to 768 × 424 render targets og optager scenen ved opstart. YouTube kan udføre fem raycasts gennem hele scenen pr. update, når den indledende afstands-/retningskontrol passerer. Whiteboardets løbende synlighedstjek er allerede begrænset til cirka hver 120 ms.

## Trin 7A: Opret Holbechs render targets ved synlighed

Bevar skærmfladerne og en lille placeholder fra plan 3. Opret render targets og editor-rammer, når en af skærmene bliver relevant i billedet, også ved direkte zoom fra overblikket. Brug projiceret skærmstørrelse og synlighed frem for et krav om gåtilstand eller en enkelt afstandsgrænse. En indlæst controller alene må ikke udløse optagelsen. Brug én pending dirty-tilstand, så flere asset-completions samles til én nødvendig opdatering.

Berørte filer: `src/holbech-screens.ts`, `src/workspace.ts`, `src/main.ts` og en fokuseret livscyklustest. Omfang: M.

- [ ] Første brugbare overbliksframe kræver ingen Holbech-render targets eller offscreen-optagelser.
- [ ] Direkte zoom fra overblikket eller anden relevant nærvisning opretter højst ét sæt targets; begge billeder viser den aktuelle scene, og genbesøg genbruger dem.
- [ ] Capture bevarer nuværende beskyttelse mod at læse/skrive samme tekstur samt gendannelse af target, vægge, tage og materialers synlighed, også ved fejl.

Kontrol: render-call-tælling, første/genbesøg, sent indlæste billeder og fejl under optagelse. Holbechs eget capture-resultat må ikke invalidére sig selv og skabe en løkke.

## Trin 7B: Fordel resterende dyr oprettelse

Profilér igen efter plan 3 og 7A. Hvis flere skærme stadig giver én lang opgave ved zoom eller indgang til Kontoret, fordel oprettelsen i små trin på den fælles kø fra plan 2 og 3. Bevar placeholders og lad første brugbare 3D-frame komme før detaljearbejdet. Der må gerne forberedes mere indhold under rolig navigation, så senere zoom er hurtigere. Brug feature-detection og fallback, hvis `scheduler.yield()` anvendes. Mål både modulevaluering, canvas-oprettelse, texture-upload og offscreen-rendering; et netværksrequest alene flytter ikke alle omkostningerne.

Berørte filer: lazy-handle/trigger fra plan 3, `src/workspace.ts`, højst én skærmcontroller pr. ændring og relevant test. Omfang: M pr. målt problem.

- [ ] Synlige og snart læselige skærme har førsteprioritet. Køen må efterhånden forberede øvrige features, men må ikke starte dem alle i én blok efter første frame eller aktivere spillene.
- [ ] Afgang eller ændret kameravisning nedprioriterer endnu ikke påbegyndt arbejde til fordel for den nye visning. Færdige resultater beholdes; nye spekulative opgaver og dyr initialisering sættes på pause i en skjult fane.
- [ ] En målt lang opgave reduceres/opdeles, uden at første relevante skærm får en urimelig ekstra ventetid. Dokumentér begge tider.

Kontrol: profil før/efter under samme overblikszoom, tilgang og netværksforhold. Kontrollér fortsat respons under hele baggrundsindlæsningen. Hvis opgaverne allerede er korte, afslut trinnet med måleresultatet uden mere kølogik.

## Trin 7C: Afgræns raycast-kandidater

Tilpas `createScreenVisibility()` til en afgrænset kandidatliste eller spatial forespørgsel. Medtag skærmen, relevante vægge, møbler og bevægelige objekter mellem kamera og skærm. Udvælg efter ray-segmentets mulige blockers, ikke alene efter objekters afstand til skærmen. Del en minimal registrering med de controllers, som tidligere cachede sceneobjekter én gang.

Berørte filer: `src/youtube-screen-visibility.mjs`, `src/youtube-screen.ts`, eventuelt nyt `src/visibility-objects.ts`, sceneintegrationen og `tests/youtube-screen.test.mjs`. Omfang: M.

- [ ] Kandidatlisten er mindre i den målte YouTube-visning, og raycast-arbejdet reduceres.
- [ ] Bagfra, væg, delvist dækket hjørne, skjult forælder, flyttet dør og forbipasserende figur giver samme resultat som den komplette sceneforespørgsel.
- [ ] Registrering/fjernelse følger lazy-oprettelse og instancing; gamle objektreferencer hænger ikke tilbage.

Kontrol: udvid eksisterende occlusion-tests med dynamiske blockers og sammenlign begge metoder i repræsentative kameravinkler. Skærmens fem samples bevares i første ændring.

## Trin 7D: Genbrug resultater med korrekt invalidation

Undgå at gentage raycasts, når kamera, skærm og relevante blockers er uændrede. Begynd med cache på disse ændringer. Hvis yderligere frekvensbegrænsning er nødvendig, prøv 10–15 Hz ved stabile forhold. Ved kamera-/blockerændring skal overlayet straks valideres eller skjules konservativt indtil næste kontrol; et gammelt positivt resultat må ikke tegne YouTube oven på en væg.

Berørte filer: `src/youtube-screen.ts`, visibility-helper/registrering og tests. Omfang: M.

- [ ] Uændrede forhold giver ingen overflødige dyre raycasts.
- [ ] Hjælp, skjult fane, aktivt TV-spil og afstand over 5 m udløser eksisterende unload uden at vente på timeren.
- [ ] Faktiske klik og pointerdown bruger aktuelle hit-tests. Creeperens 250 ms-stopadfærd og whiteboardets input må ikke blive langsommere af en generel throttle.

Kontrol: CPU-profil tæt på YouTube, hurtig drejning bag en væg, flyttet blocker, skjult fane og genbesøg. Hvis throttling giver synlige forsinkelser, behold alene kandidatfiltrering og invalidation.

## Aflevering

Aflever opstartens offscreen-renderkald, antal targets/teksturer, long-task-målinger og raycast-arbejde før/efter. Kør den samlede test/build- og gåturskontrol fra oversigten. Fuld streaming af rumgeometri er ikke del af denne plan; overblik, kollisioner og navigation beholder en komplet grundscene.
