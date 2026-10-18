# Plan 4: Chunking og cache

Adskil den nødvendige Three.js-runtime fra de valgfrie funktioner, så chunkgrænserne understøtter hurtig opstart og gradvis baggrundsindlæsning fra plan 3. Stabil cache ved app-opdateringer er en ekstra gevinst. Three.js skal stadig hentes ved første besøg, og den samlede download senere i sessionen må gerne være stor.

Afhængighed: plan 3. Brug den installerede Vite 8-versions `build.rolldownOptions.output.codeSplitting`; kontrollér API'et i de lokale typer og [Vites dokumentation](https://vite.dev/guide/build#chunking-strategy) ved implementering.

## Trin 4A: Mål hele den initiale importgraf

Tilføj build-manifest og et lille script, som starter ved HTML-entry, følger statiske imports rekursivt og summerer de faktisk nødvendige filer. Dynamiske imports og worker-assets rapporteres separat. Rapportér rå bytes og summen af hver fils gzip-størrelse; se ikke kun på entry-filens størrelse.

Berørte filer: `vite.config.ts`, nyt `scripts/report-bundle.mjs`, `package.json` og eventuel fixture-test af grafvandring. Omfang: M.

- [ ] Rapporten adskiller den statiske opstartsgraf, dynamiske features, worker, WASM og model. En runtime-tidslinje viser separat hvilke dynamiske filer der hentes i baggrunden efter første brugbare frame.
- [ ] En statisk import fra entry til et ellers dynamisk modul bliver synlig i rapporten.
- [ ] Tallene stemmer med netværksloggen for produktionsbuildet, bortset fra serverens dokumenterede kompressionsvalg.

Kontrol: et lille manifest med delt dependency og cyklus tester deduplikering; browsernetværk kontrollerer den virkelige app.

## Trin 4B: Three.js og funktionernes chunks

Gruppér den Three.js-runtime, som allerede kræves initialt. Lad øvrige feature-grænser følge `import()`. Kontroller især CSS3DRenderer: en bred regel for alle filer under `three/` må ikke utilsigtet flytte denne valgfrie renderer tilbage til initial download. Undgå én samlet vendor-chunk, som også indfanger MediaPipe eller workers.

Berørte filer: `vite.config.ts`, bundle-rapporten og eventuelt den lille fælles importgrænse fra plan 3. Omfang: S/M.

- [ ] Der er én delt Three.js-runtime og ingen unødvendig duplikering mellem hovedapp og feature-chunks.
- [ ] Gzip-JS i den statiske opstartsgraf stiger højst 5 % mod resultatet efter plan 3, og alle aftalte features forbliver dynamiske. Større vækst kræver ændring af chunkstrategien. Moduler forudindlæst senere i baggrunden indgår ikke i denne grænse.
- [ ] Et kontrolbuild med kun en appændring beholder vendor-chunkens indhold/hash. Kontrollér i en midlertidig kopi, uden at efterlade testændringen i projektet.

Kontrol: to produktionsbuilds, manifestgraf og kold/varm browserindlæsning. Sammenhold request-antal med bytes; mange små filer er ikke et mål i sig selv.

## Trin 4C: Robuste fejl og et enkelt budget

Sørg for, at en manglende feature-chunk giver en forståelig status og mulighed for at forsøge igen eller genindlæse. `vite:preloadError` må ikke give en automatisk reload-løkke eller lydløst tabe et igangværende spil. Brug den fejlhåndtering, plan 3 allerede leverer.

Berørte filer: `src/main.ts` eller lazy-handle, bundle-rapport/script, `package.json` og relevant loader-test. Omfang: M.

- [ ] En fejlet import kan håndteres uden at gøre resten af kontoret ubrugeligt.
- [ ] Et pnpm-script kontrollerer, at valgfrie features, MediaPipe og WASM ikke ligger i den statiske opstartsgraf. Et budget gælder alene den kritiske opstart; efterfølgende kontrolleret prefetch tæller ikke som en regression i sig selv. WASM/modellen forbliver knyttet til kameraaktivering.
- [ ] HTML og alle chunks virker under `/3doffice/dist/`, også ved genbesøg efter et nyt build.

Kontrol: simuler manglende chunk og et nyt build, mens en ældre side er åben. Kør fælles tests/build og alle spils adgangsveje samt direkte overblikszoom, mens efterfølgende chunks indlæses. En dynamisk graf, hvor alt alligevel importeres samtidig før første brugbare frame, opfylder ikke planen.

## Afgrænsning og aflevering

Ingen hostingflytning eller service worker. Lang cachelevetid for hash-navngivne assets er en hostingegenskab, som verificeres på den faktiske deployment; Vite-konfiguration alene sætter ikke produktionsserverens headers. Aflever før/efter-manifest, initiale bytes, cache-kontrolbuild og budgetscript.
