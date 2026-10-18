# Plan 3: Moduler og easter eggs indlæses efter behov

Flyt valgfrie controllers ud af den statiske importgraf og udskyd deres oprettelse. Den komplette overbliksmodel, skærmflader og lette aktiveringstriggere er klar fra starten. Efter første brugbare frame må feature-moduler gradvist varmes i baggrunden. Import, oprettelse og aktivering er separate trin: store canvases og sceneobjekter må ikke oprettes som bivirkning af et imports topniveau. Genbrug køen og billedindlæsningen fra plan 2.

I dag importerer `main.ts` alle spil og `EasterEggs`, mens `workspace.ts` importerer skærmcontrollers og `youtubeWallpaper` fra modulet med CSS3DRenderer. Et dynamisk import hjælper først, når de samme moduler ikke også er statisk tilgængelige gennem en anden sti.

## Trin 3A: Tetris som første komplette funktion

Lav en lille lazy-handle, som deler igangværende import, opretter én controller og eksponerer sikre værdier før load. Brug lette prioritetstriggere ved kameravisningen Tetris, tilgang til glasrummet og direkte zoom ind på glasset fra overblikket. Klargøring af glasindhold må ikke i sig selv aktivere spillet. Installer almindelig betjening, når controlleren er klar. Ved første interaktion under load vises en kort status; en gammel handling må ikke aktiveres, efter brugeren har forladt området.

Berørte filer: `src/main.ts`, `src/tetris-game.ts`, nyt `src/lazy-feature.ts`, nyt `src/feature-triggers.ts` og fokuserede tests. Omfang: M.

- [ ] Tetris-controlleren ligger uden for den kritiske opstart; kode kan forudindlæses efter første brugbare frame. Begge eksisterende adgangsveje virker, og baggrundsindlæsning starter ikke spillet.
- [ ] Hurtige gentagne aktiveringer giver én instans og ét sæt listeners. Sen completion efter afgang overtager ikke kamera eller input.
- [ ] Spiltilstand, pause, fokus og tilbagevenden bevares; loadfejl kan genforsøges uden at genstarte kontoret.

Kontrol: lazy-livscyklustest, eksisterende Tetris-tests og browserflow med forsinket/fejlet import. Kontrollér buildets statiske importlukning.

## Trin 3B: TV og whiteboard i hver sin ændring

Brug samme handle til TV-spillet og derefter whiteboard-spillet. TV-indhold prioriteres ved zoom eller tilgang mod TV'et; selve spilstart følger den eksisterende betjening. Whiteboard klargøres ved relevant zoom eller inden for en buffer uden om interaktionsafstanden, så drawing-handleren normalt er klar inden første streg. Hvis den ikke er klar, vises status og ny tegning starter først efter load; en halv pointer-gestus må ikke genafspilles.

Filer pr. ændring: `src/main.ts`, `src/feature-triggers.ts`, den relevante `*-game.ts`, eventuelt dens `*-screen.ts` og relevante tests. Omfang: M pr. funktion.

- [ ] TV/whiteboard-spil og Whiteboard-fonten ligger efter første brugbare frame. De må forudindlæses gradvist, og kameraets aktuelle visning kan hæve prioriteten.
- [ ] Whiteboardets fem streger, TV-betjening, pause/genoptagelse og touch virker efter første og gentagen tilgang.
- [ ] Kamera/mikrofon kræver fortsat et eksplicit klik. Afstand, blur, skjult fane og konteksttab stopper enhederne som før; WASM og modellen forbliver udskudt til kameraaktivering.

Kontrol: eksisterende runner-, invaders-, whiteboard-, mikrofon- og hovedstyringstests. Test afgang mens tilladelse/import afventer. Hvis et browser-API kræver en aktuel brugerhandling, anvendes et nyt klik efter load.

## Trin 3C: YouTube og de øvrige easter eggs

Flyt `youtubeWallpaper()` til et lille selvstændigt modul, så `workspace.ts` ikke statisk trækker CSS3DRenderer ind. Opret YoutubeScreen ved relevant tilgang og bevar eksisterende unload-regler. Del derefter `EasterEggs` i kaffe, laks og creeper efter deres aktivering; en samlet import af alle tre er kun første migrationsskridt.

YouTube-filer: `src/youtube-screen.ts`, nyt wallpaper-modul, `src/workspace.ts`, `src/main.ts`, trigger/tests. Easter-egg-filer: én controller ad gangen, `src/easter-eggs.ts`, `src/main.ts`, trigger og test. Omfang: M pr. ændring.

- [ ] CSS3DRenderer er ude af den statiske initiale importgraf, og videoen starter stadig kun efter klik.
- [ ] Kaffe/laks-kode må forudindlæses efter opstart, mens aktivering følger de eksisterende interaktionsregler; creeper klargøres ved gåtilstand uden en synlig ændring af dens eksisterende følgeadfærd. Jespers synlige skærmindhold kan indlæses gennem overblikszoom uafhængigt af fiskespillets interaktionsregler.
- [ ] Nye sceneobjekter registreres i eksisterende occlusion-lister; indlæsningens rækkefølge giver ikke klik gennem vægge eller manglende mål.

Kontrol: eksisterende YouTube-/easter-egg-tests samt bagfra, delvist skjult skærm, kaffebestilling og creeperens stopforsinkelse.

## Trin 3D: Personlige skærme i små grupper

Lad `workspace.ts` oprette stabile skærmflader og lette, genkendelige placeholders. Tilknyt animation/materiale, når en skærm bliver læselig gennem zoom, panorering eller tilgang, uanset kameratilstand. Modulkoden kan være hentet i baggrunden inden da. Brug synlighed og projiceret størrelse sammen med afstand; kontrollér også eksisterende animationsgrænser, så de ikke efterlader en læselig skærm permanent som placeholder i overblikszoom. Migrér først Henrik/Anja, derefter Palm/Nicolai, Thrane/Lars og til sidst Jesper/Holbech, én gruppe ad gangen.

Filer pr. gruppe: `src/workspace.ts`, højst to skærmmoduler, trigger/handle og en fokuseret test. Jespers forbindelse til laks samt `settleCatch()` skal have en sikker adgangsvej, også før indlæsning. Holbechs `decorate()` må ikke forudsætte færdige render targets; de udskydes videre i plan 7.

- [ ] Hver controller ligger uden for den kritiske opstart. Kode må varmes i baggrunden; store canvases oprettes ved relevans eller i en målt, lille forberedelsesopgave, og sceneidentiteterne bevares.
- [ ] Eksisterende 8/12 fps-grænser, reduceret bevægelse og pauser bevares.
- [ ] Alle dynamiske imports har fejlhåndtering, én instans og en brugbar placeholder. Direkte zoom fra overblikket viser det fulde skærmindhold uden krav om skift til gåtilstand; dette kontrolleres straks efter opstart og efter baggrundsindlæsning.

## Aflevering

Følg fælles kontrol efter hver funktion. Aflever en import-/request-tabel for hver trigger, dokumentér aktiveringsafstande og registrér initial JS og oprettelsestid før/efter. Genlæs eventuelle nye spil som Donkey Kong ved implementering og giv dem samme livscyklus, hvis de er integreret; igangværende arbejde overskrives ikke. Plan 4 tager derefter den endelige chunkfordeling.
