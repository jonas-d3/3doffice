# Plan: Aktivér Davids udsyn fra Holbechs skærm

Holbechs højre skærm skal starte med en statisk startside og knappen **Track David** inde på selve skærmfladen. Først efter et klik på knappen vises og renderes Davids udsyn. Formålet er at undgå livekameraets ekstra arbejde, indtil brugeren aktivt vælger det. Venstre skærm beholder oversigten over modellen.

Status: Implementeret og verificeret sammen med performanceplan 7 den 18. oktober 2026. [Målinger, screenshots og kontrol](performance/results/07/README.md).

## Brugerforløb

1. Ved opstart viser højre skærm en rolig, statisk startside med titlen **David**, teksten “Se kontoret gennem Davids øjne” og en tydelig **Track David**-knap. Knappen tegnes i skærmens eksisterende interface og følger skærmens perspektiv og placering.
2. Klik eller tryk på knappen viser et aktuelt billede fra Davids øjenhøjde. Derefter følger billedet hans bevægelse og blikretning. Brugerens hovedkamera og Davids gangtilstand ændres ikke.
3. Under tracking ligger **Stop tracking** i skærmens øverste bjælke. Knappen vender tilbage til startsiden og stopper alle optagelser fra Davids kamera.
4. Når man bevæger sig væk eller zoomer ud af skærmens nærområde, **slukkes tracking automatisk**, og skærmen vender tilbage til startsiden. Brug den eksisterende afstandsgrænse på 8 meter fra hovedkameraet til skærmens centrum som udgangspunkt. Ved tilbagekomst kræves et nyt klik på **Track David**; tracking genoptages aldrig automatisk efter afstandsbetinget stop.
5. Et midlertidigt kig væk, mens man stadig er inden for nærområdet, pauser optagelserne. Hjælp, spil, skjult fane og reduceret bevægelse følger projektets pauseregler. Afstandsbetinget stop skal også registreres under en animationspause. Ved reduceret bevægelse giver et eksplicit klik ét aktuelt stillbillede.

Stopknappen supplerer det automatiske stop ved afgang. Der tilføjes ingen knap i den globale værktøjslinje eller som et fast overlay oven på 3D-visningen.

## Teknisk udgangspunkt

Før ændringen oprettede `src/holbech-screens.ts` begge render targets straks. `liveDirty` starter som sand, og `render()` optager altid Davids kamera, når enten det fælles `dirty`-flag eller `liveDirty` er sat. Derfor er det utilstrækkeligt blot at skjule billedet eller sætte en knap ovenpå: både ressourceoprettelse, opdatering og selve capture skal kræve aktivering.

Den lokale A/B-måling viste cirka 8,5 ms pr. animationscallback uden liveopdatering og 18,4 ms på callbacks med liveoptagelse, efter opvarmning. Det er CPU-tider omkring callbacken på M3 Pro i Chromium ved 1440 × 1000 og pixel ratio 1, ikke GPU-tider eller garanterede værdier på andre maskiner. Denne plan fjerner den ekstra optagelse i inaktiv tilstand; den gør ikke selve den aktive optagelse billigere.

## Trin 1: En komplet start og stopfunktion på skærmen

**Omfang:** M. Ingen afhængighed af de øvrige performanceplaner.

**Filer:** `src/holbech-screens.ts`, nyt `src/holbech-screen-control.ts`, `src/main.ts` og en fokuseret testfil, eksempelvis `tests/holbech-screens.test.mjs`.

Implementér den mindste komplette vej fra knaptryk til kameraoptagelse:

- Tegn startsiden som en lokal CanvasTexture og start med tracking deaktiveret. Opret højre skærms WebGLRenderTarget ved første godkendte aktivering. Genbrug højst ét target på senere aktiveringer; lad skærmens mesh og materialereference være stabile.
- Adskil oversigtens invalidation, trackingvalget og behovet for et nyt livebillede. `update()` må ikke sætte liveoptagelser i gang, mens tracking er deaktiveret. `render()` skal kontrollere aktivering igen, også når venstre oversigt er dirty eller billeder netop er indlæst.
- Lad aktivering anmode om første optagelse i det normale render-loop og udløse repaint, også når hovedkamera og David står stille. Både Stop tracking og afgang fra nærområdet deaktiverer tracking, rydder ventende liveoptagelse, viser startsiden og anmoder om repaint. Kontrollér afstandsbetinget stop før tidlige returns for animation, synlighed og pauser; det må ikke afhænge af, at en optagelse er planlagt. Genindtræden i nærområdet må ikke aktivere tracking.
- Tegn knapperne på skærmens tekstur/ramme. Brug samme definerede rektangler til tegning og UV-hit-test, med korrekt konvertering mellem canvas-koordinater og Three.js-UV'er. Bevar korrekt farverum og tone mapping for både den statiske brugerflade og livebilledet.
- Tilslut en lille pointer-controller fra `main.ts`, som bruger den konkrete højre skærmreference, kameraet, scenen og en callback til at anmode om rendering. Referencen findes allerede via `model.holbechScreens`; udvid kun `workspace.ts` eller `model.ts`, hvis den aktuelle integration kræver det.

**Acceptkriterier:**

- [x] Før første klik findes ingen allokeret live-render-target, og der udføres nul renderkald med `visitor.viewCamera`, både ved opstart, zoom og efter sene billedloads. Venstre skærms eksisterende rendering fungerer fortsat.
- [x] Track David viser et aktuelt billede og starter højst 12 opdateringer/sekund under synligheds- og pausereglerne. Et klik kan også vise første billede ved reduceret bevægelse. Stop tracking og afstand over 8 meter giver nul efterfølgende liveoptagelser, indtil brugeren klikker Track David igen.
- [x] Gentagne start/stop-forløb opretter ikke ekstra targets, teksturer eller event listeners. Hovedkamera, figurens bevægelse og venstre skærm bevarer deres funktion.

**Kontrol:** Test deaktiveret opstart, aktivering, manuelt og automatisk stop før en ventende capture, genaktivering og sene invalidationer. Kontrollér afstand lige inden for og uden for 8 meter, afgang under animationspause og tilbagekomst uden klik. Kontrollér runtime-renderkald pr. kamera; en test, der alene ser efter en bestemt variabel eller kodelinje, er utilstrækkelig. Kør relevante tests og `pnpm build`.

## Trin 2: Præcis betjening uden utilsigtede aktiveringer

**Omfang:** M. Afhænger af trin 1.

**Filer:** `src/holbech-screen-control.ts`, `src/holbech-screens.ts`, `src/main.ts` og fokuserede interaktionstests.

Brug mønstret fra `src/easter-eggs.ts` til at skelne klik fra kameratræk: primær pointer, samme pointer-id, højst 6 px bevægelse og afbrydelse ved `pointercancel`, mistet capture og blur. Flerfingerbevægelser må ikke aktivere knappen. Denne funktion skal virke ved direkte zoom fra overblikket såvel som i gåtilstand; kopier derfor ikke EasterEggs-kravet om `navigation.isWalking`.

Raycast skærmen og knapområdet ved en konkret inputhandling. Kontrollér forside, synlige forældre og nærmeste blokerende geometri. Den dekorative skærmramme må ikke blokere sin egen knap; vægge og andre genstande foran knappen skal blokere. Begræns eventuelle blocker-tests til strækningen mellem kamera og knap. Undgå en ny, løbende raycast gennem hele modellen for hver animationsframe.

Bevar almindelig rotation, panorering og touch-navigation uden for knaptrykket. Blokér aktivering under hjælp, aktive spil og skjult fane. Genbrug input- og pausemønstre frem for at tilføje en generel ny interaktionsplatform.

**Acceptkriterier:**

- [x] Kun et klik/tryk inden for den tegnede knap aktiverer handlingen; resten af skærmen, venstre skærm, træk og flerfingerbevægelser gør ikke.
- [x] Knapperne virker forfra i både overblikszoom og gåtilstand. De kan ikke aktiveres bagfra, gennem synlige vægge eller under blokerende UI/spil.
- [x] Kamera- og touchbetjening fungerer efter både gennemført og afbrudt knaptryk. Gåtur, zoom ud eller kameraskift ud af nærområdet slukker tracking; genbesøg viser Track David og kræver et nyt klik. Allerede oprettede ressourcer genbruges ved ny aktivering.

**Kontrol:** Test UV-grænser, flyttet/roteret skærm, synlige og skjulte forældre, væg foran knappen og annullerede pointerforløb. Kontrollér mouse og touch i browseren med screenshots af startsiden og det aktive billede.

## Trin 3: Verificér frame-tider og integration med indlæsningsplanerne

**Omfang:** S/M. Afhænger af trin 1–2.

**Filer:** `README.md`, relevante tests og måleresultater under `docs/plans/performance/results/07/`. Produktionskoden ændres i dette trin kun ved fundne fejl.

Mål samme kameravinkler og figurtilstand før og efter: opstart, tæt på Holbech før klik, første aktivering, aktiv tracking, efter manuelt stop, efter afgang og ved tilbagekomst uden nyt klik. Registrér callback-tidens median, p95 og maksimum, callbacks over 50 ms samt renderkald og tegnekald særskilt for hovedkamera og Davids kamera. Mål første aktiveringsframe separat, så udskudt allokering eller shader-opvarmning ikke forsvinder i gennemsnittet.

Følgende integrationsregler gælder også for senere performancearbejde:

- **Plan 2:** Billedloads må invalidere venstre oversigt og et allerede aktiveret livebillede, men må aldrig aktivere tracking. Flere invalidationer samles til nødvendige optagelser.
- **Plan 3:** Import, forudindlæsning og oprettelse af Holbechs controller må ikke omgå klikkravet. Startknappen skal kunne vises og bruges, når skærmen bliver relevant.
- **Plan 7A:** Venstre oversigt kan oprettes ved synlighed. Højre live-target kræver stadig et eksplicit Track David-klik; synlighed er kun en betingelse for løbende opdatering efter aktivering. Afgang slukker tracking, og senere nærhed eller synlighed må ikke genaktivere den.

**Acceptkriterier:**

- [x] I inaktiv tilstand, efter Stop tracking og efter afstandsbetinget stop er antal optagelser og ekstra shadow passes for Davids kamera præcis nul, inklusive efter billedloads og genbesøg uden nyt klik. Sammenlignelige frame-tider ligger omkring baseline med livekameraet slået fra; mål afvigelser frem for at love en bestemt FPS.
- [x] Capture gendanner render target, vægge, tage, David og materialers synlighed, også ved fejl. Pause/genoptagelse giver ingen ophobning af opdateringer. Ved capture-fejl forbliver start/stop-betjeningen brugbar, og der forsøges ikke igen i en ukontrolleret løkke.
- [x] `pnpm test` og `pnpm build` består. Produktionsbuildets konsol, knapper, overblikszoom, gåtilstand og touch er verificeret, og brugerforløbet er opdateret i README.

**Aflevering:** Dokumentér den inaktive besparelse og den tilbageværende aktive pris. Optimering af selve livekameraets geometri og skygger hører fortsat til det efterfølgende performancearbejde.
