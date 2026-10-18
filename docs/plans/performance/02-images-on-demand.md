# Plan 2: Billeder indlæses efter behov

Flyt detaljerede billedrequests væk fra den kritiske opstart. Efter første brugbare 3D-frame må billeder gerne hentes gradvist i baggrunden, mens direkte zoom fra overblikket eller anden kamerabevægelse prioriterer de relevante skærme først. Bevar det indlæste resultat til senere besøg. Planen kan udføres med de eksisterende billedfiler før plan 1.

`createWorkspace()` starter i dag begge Thrane-billeder, Wiibroe og Astro. Anja og Henrik starter deres billeder i constructors. Afstandstjek i animationskoden udskyder ikke disse requests. En import af en asset-URL er ikke i sig selv en billeddownload; det afgørende er, hvornår loaderen kaldes.

## Trin 2A: Én skærm med sikker asynkron indlæsning

Start med Thranes børnebillede. Tilføj en lille fælles billedcache efter URL med tilstandene ikke startet, afventer, klar og fejl og en lille kø efter reglerne i oversigten. Samtidige kald deler requesten. Synligt indhold får prioritet over spekulativ indlæsning. Fejl må kunne forsøges igen ved en ny tilgang til skærmen, uden et request pr. frame. Ejerskab til billeddata og GPU-teksturer skal være tydeligt; materialer med forskellige filtre/UV'er må ikke utilsigtet dele mutabel teksturtilstand.

Berørte filer: nyt `src/image-assets.ts`, `src/proximity-wallpaper.mjs`, `src/workspace.ts`, `src/main.ts` og `tests/proximity-wallpaper.test.mjs`. Omfang: M. `main.ts` frigiver baggrundskøen efter den første brugbare frame.

- [ ] Børnebilledet starter ikke som en del af den kritiske opstart. Efter første brugbare frame kan det forudindlæses, og samtidige behov giver højst én request.
- [ ] Det eksisterende 4 m/5 m-billedskift bevares. En sen download anvender den aktuelle afstandstilstand og kan ikke skifte til forkert motiv, efter brugeren er gået væk.
- [ ] Load eller fejl efterlader en brugbar placeholder og invalidérer renderingen ved faktisk ændring.

Kontrol: tests med en kontrollerbar, forsinket loader; gennemgå tilgang, tilbagetrækning før svar, genbesøg, fejl og genforsøg. Kontrollér netværket i produktionsbuildet.

## Trin 2B: Øvrige statiske billeder

Flyt pinup, Wiibroe og Astro til samme mekanisme. Registrér skærmenes world-position og projicerede størrelse, så zoom fra overblikket prioriterer indhold, der bliver læseligt. Brug synlighed og en buffer før den læselige størrelse til at starte forudindlæsning; afstand kan supplere, men må ikke være eneste hårde grænse. Kameravalg må også hæve prioriteten. En rolig overbliksvisning må gradvist hente resten i baggrunden. Bevar små indlejrede SVG'er, hvis deres udskydelse ikke giver en målbar gevinst.

Berørte filer: `src/workspace.ts`, `src/image-assets.ts` og en test af aktiveringsreglerne. Omfang: M.

- [ ] Ingen af de fem store billeder fra plan 1 kræves eller startes før første brugbare 3D-frame; efterfølgende baggrundsrequests er tilladt.
- [ ] Direkte zoom fra overblikket, valg af Kontoret og gang ind mod en skærm prioriterer relevante downloads og giver korrekt motiv efter load, uden krav om gåtilstand.
- [ ] Genbesøg genbruger billedet; placeholders og færdige materialer bruger samme farverum og beskæring som før.

Kontrol: netværkslog og frame-tider fra overblik, direkte zoom, Kontoret og gåtur, både kold og varm cache. Kameraets højde, skærmenes forældretransformationer og synlig skærmstørrelse indgår i testen. Kontrollér at en skærm løftes foran ventende baggrundsbilleder ved zoom.

## Trin 2C: Billeder inde i skærmcontrollers

Flyt Henrik-cover og Anjas webcam-billeder fra constructor til den fælles aktivering. Oprettelse af en controller må ikke automatisk starte dens billeder. Senere kan plan 3 udskyde controlleren selv.

Berørte filer: `src/henrik-screens.ts`, `src/anja-screens.ts`, `src/workspace.ts`, `src/main.ts` og loader-/aktiveringstests. Omfang: M.

- [ ] Billeder kan færdiggøres og vises med kameraet stille og reduceret bevægelse aktiveret.
- [ ] En load-completion anmoder eksplicit om rendering; korrektheden afhænger ikke af, at alle globale loads bliver færdige samtidig.
- [ ] De otte eksterne rasterbilleder fra den oprindelige baseline ligger efter den kritiske opstart. Hele sættet må gerne være indlæst senere, også mens brugeren bliver i overblikket, hvis zoom og panorering fortsat reagerer flydende.

Kontrol: fælles test/build-protokol samt fejlet request, skjult fane under load og genbesøg. Der tilføjes ingen automatisk videoafspilning.

## Aflevering og integration

Aflever en tidslinje for requests i forhold til første brugbare frame samt målte ventetider ved direkte zoom og tilgang. Samlede billedbytes efter baggrundsindlæsning er informative, ikke et succeskriterium. Bevar indlæste billeder resten af sessionen; automatisk eviction indføres kun ved dokumenteret hukommelsesproblem. Holbechs snapshots invalidéres ved relevante billedændringer; synlighedsafhængig genoptagelse tilføjes i plan 7.
