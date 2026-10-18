# Resultater: performanceplan 2–6

Implementeret 18. oktober 2026 på `performance`, med `57f7265` som baseline. Plan 2 blev gemt i `c2a83c5`, plan 3 i `205b99b`. Chunking, geometri, instancing, skygger og integrationsrettelser følger i samme branches efterfølgende commit. Plan 7 og den særskilte Track David-plan er ikke udført.

Den lokale median til første brugbare overblik faldt fra **1.015 til 546 ms** ved kold indlæsning. Første overblik bruger **4.417 mod 7.528 draw calls** inklusive skygger, en reduktion på **41,3 %**. Initial JavaScript er **196.662 gzip-bytes**, 0,9 % over plan 3 og under loftet på 204.672 bytes.

## Leverance og én afvigelse

- Fælles prioriteret kø: højst to billedrequests og én import/oprettelse ad gangen, med en ny browserturn mellem jobstarter. Den åbner efter første 3D-rendering og næste animation frame; skjult fane stopper nye opgaver.
- Delt billeddata pr. URL, separate mutérbare teksturer, placeholder, eksplicit render-invalidation og genforsøg ved ny tilgang. Thranes 4 m/5 m-hysterese er bevaret.
- Otte personlige skærme, Tetris, TV, whiteboard, Donkey Kong, YouTube, kaffe, laks og creeper har adskilt import, oprettelse og aktivering. En forsinket completion genafspiller ikke gamle input.
- Three.js-runtime har egen stabil chunk; CSS3DRenderer, kamera-browserkode, MediaPipe og spil er ude af den statiske opstartsgraf. Manifest og `pnpm check:bundle` kontrollerer dette.
- Uforanderlig Box-/RoundedBox-/Cylinder-geometri genbruges. Kontoret og Day21 batches separat, med egne grupper for hver cutaway-væg og hvert tag. Negative transformationer og interaktive flader bevares som selvstændige objekter.
- Små detaljer kaster færre skygger. Store møbler, vægge og figurer bevarer casting. Shadow map er fortsat 2048 × 2048 med automatisk opdatering.

**Afvigelse fra plan 3A:** browseren cacher fejlede dynamiske module-imports. Et nyt `import()` til samme URL gav samme afvisning uden ny request i Chromium. Derfor viser importfejl en forklaring samt **Genindlæs / Luk**. Genindlæsning sker kun ved brugerens klik; kontoret og andre funktioner kan fortsat bruges. Det oprindelige kriterium om genforsøg af en manglende chunk uden genstart er ikke opfyldt. Oprettelsesfejl og billedfejl kan fortsat genforsøges uden genindlæsning. Dette følger den begrænsning, [Vite dokumenterer](https://vite.dev/guide/troubleshooting#failed-to-fetch-dynamically-imported-module), og opfylder plan 4's genforsøg-eller-genindlæsning.

## Målemetode

Produktionsbuilds via pnpm, Chromium 151.0.7922.34 med Metal, 1440 × 1000, pixel ratio 1, reduceret bevægelse og samme seed for tilfældighed. Hver fase har fem friske browsercontexts med et efterfølgende varmt genbesøg. Tabellen bruger medianer. Netværket er lokalt uden kunstig forsinkelse i disse målinger; shader-/drivercache deles i browserprocessen. Resultaterne er ikke mobilmålinger eller garantier for andre maskiner.

`?measure` aktiverer `window.officeDebug`; normal brug eksponerer ikke debugobjektet og indsamler ikke frames. Første-frame-markøren sættes i animation-framen efter første `renderer.render()`, hvor navigationen allerede er installeret. Det er en ensartet browserindikator, ikke en GPU-timestamp eller en præcis måling af skærmens fysiske præsentation. Render-CPU-tider er ikke GPU-tider. Hovedrenderingen tæller sine shadow calls; Holbechs offscreen-kald registreres separat i `offscreenCalls` og er nul i første frame efter ændringen.

| Fase | Kold første frame, ms | Varm første frame, ms | Modeloprettelse, ms | Første draw calls | Trekanter |
| --- | ---: | ---: | ---: | ---: | ---: |
| Før | 1.015,0 | 998,3 | 291,0 | 7.528 | 1.190.892 |
| Efter plan 3 | 638,6 | 690,4 | 250,3 | 7.445 | 1.189.926 |
| Efter geometri/instancing | 572,1 | 503,6 | 149,0 | 4.683 | 1.189.926 |
| Efter detaljeskygger | 545,6 | 470,5 | 152,1 | 4.417 | 1.120.694 |

Rå målinger: [før](before.json), [plan 3](plan3.json), [plan 5](plan5.json), [efter](after.json). Den sidste fase blev målt før den afsluttende fejltekst/fejltilstandsrettelse; den ændrer ikke model, geometri eller normal indlæsning. Endeligt bundle og fejlflows blev derefter verificeret igen.

| Scenetrin | Meshes i kontormodellen | Unikke geometrier | Casting-meshes |
| --- | ---: | ---: | ---: |
| Før, med eager controllers | 4.670 | 4.668 | 4.615 |
| Efter plan 3, før valgfrie modeller | 4.546 | 4.546 | 4.495 |
| Efter cache og instancing | 2.823 | 1.432 | 2.772 |
| Efter detaljeskygger | 2.823 | 1.432 | 2.506 |

Geometricachen alene gav 1.432 geometrier, men stadig 4.546 meshes og 7.445 første-frame-kald. Draw-call-reduktionen tilskrives instancing og casting-valg, ikke cachen. Tallene tæller også usynlige sceneobjekter; `renderer.info.memory` i rådata tæller ressourcer, rendereren faktisk har taget i brug. En InstancedMesh tæller som ét mesh uanset antal instances.

## Faste visninger, gåtur og skygger

Et isoleret renderkald ved hver visning måler shadow-passet separat. Korte, identiske 1,1-sekunders W-gåture fra Kontoret og Day21 registrerer animation-frame-intervaller. Det er én kort gåtur pr. fase, så især p95 og CPU-tider er støjfølsomme.

| Visning | Før: alle / shadow calls | Plan 5: alle / shadow calls | Efter: alle / shadow calls |
| --- | ---: | ---: | ---: |
| Overblik | 7.528 / 3.734 | 4.683 / 2.313 | 4.417 / 2.047 |
| Kontoret | 6.084 / 4.613 | 3.504 / 2.890 | 3.238 / 2.624 |
| Day21 | 5.529 / 4.613 | 3.240 / 2.890 | 2.974 / 2.624 |
| Køkken | 5.176 / 4.613 | 3.308 / 2.890 | 3.042 / 2.624 |
| Gå rundt | 4.978 / 4.613 | 3.255 / 2.890 | 2.989 / 2.624 |

Overblikkets shadow-trekanter falder fra 590.124 efter plan 5 til 520.892 efter plan 6. Kontorets shadow-trekanter falder fra 628.098 til 558.866.

| Gåtur | Før median / p95, ms | Plan 5 median / p95, ms | Efter median / p95, ms |
| --- | ---: | ---: | ---: |
| Kontoret | 16,7 / 33,2 | 8,4 / 18,9 | 8,5 / 26,2 |
| Day21 | 16,7 / 33,3 | 8,3 / 16,8 | 8,4 / 25,4 |

Den samlede ændring forbedrer disse gåture mod baseline. Den enkelte korte måling beviser ikke bedre frame-tider fra plan 6 alene: p95 er højere end efter plan 5 trods færre shadow calls. [Rå render- og gådata](shadow-walk.json).

### Forsøg med simplere stoleskygger

26 sæder i fire instancegrupper fik midlertidigt simple box-casters. Originalerne var stadig synlige; proxy-materialerne havde `colorWrite=false` og `depthWrite=false`, og deres raycast gav ingen hits. Ved samme kamera faldt shadow-trekanterne 558.866 → 543.890 (**2,7 %**), mens samlede draw calls steg 3.238 → 3.240. Forsøget er derfor fjernet. [Data](proxy-experiment.json), [original](proxy-chair-seat-original.jpg), [forsøg](proxy-chair-seat.jpg).

## Importer, billeder og aktivering

| Funktion | Import/download | Oprettelse/indhold | Aktivering |
| --- | --- | --- | --- |
| Fem store statiske billeder | Gradvis efter første frame, relevant skærm prioriteres | Stabil tekstur får færdige billeddata | Thrane beholder eksisterende 4 m/5 m-motivskift |
| Henrik / Anja | Controller-kode varmes efter første frame; billeder registreres ved oprettelse | Synlig skærm, ≥28 projicerede pixels eller under 6 m | Indhold kan ses direkte fra overblikszoom |
| Palm, Nicolai, Thrane, Lars, Jesper, Holbech | Gradvis kode-prefetch efter første frame | Samme relevansregel; enhver tilknyttet skærm kan udløse oprettelse | Eksisterende animationsgrænser og reduceret bevægelse bevares |
| TV / whiteboard | Gradvis kode-prefetch; font først med whiteboard-controller | Synlig relevant flade; whiteboard også ved Gå rundt | TV-knap; whiteboardets fem streger og derefter valgt styring |
| Tetris | Gradvis kode-prefetch | Tetris-visning eller relevant glasflade | Eksisterende tap/klik eller Enter |
| Donkey Kong | Gradvis kode-prefetch | Gåtilstand i bordets område | Spil-knap eller Enter |
| YouTube / CSS3DRenderer | Gradvis kode-prefetch | Relevant skærm | Eksisterende iframe ved synlig tilgang; afspilning kræver brugerens klik, ingen autoplay |
| Kaffe | Gradvis kode-prefetch | Køkkenvisning eller under 6 m fra maskinen | Knapper på maskinen |
| Laks / creeper | Gradvis kode-prefetch | Gåtilstand; laks kræver Jespers controller | Eksisterende klik-/følgeregler |
| Kamera / mikrofon / WASM / model | Ingen spekulativ aktivering | Eksisterende kontrolmoduler efter behov | Kun eksplicit brugerknap |

Skærmprioritet kræver synlige forældre, kamera foran fladen og centrum inden for frustum med buffer. Personlige skærmes animationer kan desuden fortsætte inden for 8 m, hvis skærmen er relevant. Reglen kræver ikke gåtilstand. Raycast-occlusion håndhæver fortsat de egentlige interaktioner.

I første kolde efter-måling starter de fem store billeder henholdsvis **3, 4, 35, 54 og 79 ms efter første-frame-markøren**. Henrik/Anjas tre billeder starter først ved senere relevant tilgang. Whiteboard-fonten og feature-koden ligger ligeledes efter markøren; WASM/model og sensorer blev ikke startet af prefetch. Rå request-tidslinjer ligger i fase-JSON; [integrationsloggen](integration.json) viser de efterfølgende skærmrequests.

Ved sekventiel direkte overblikszoom blev alle otte controllers klar på 2–62 ms ud over testens faste 350 ms til visuel settling. Det er controller-readiness og ikke tid til alle netværksbilleder er dekodet. Med 1.200 ms kunstig forsinkelse af Henriks modul var ventetiden 1.232 ms. Første zoom via touch ændrede kameraafstanden fra 72,13 til 59,14 på højst 111 ms inklusive browserautomatiseringens overhead. [Forsinkelse og touch](touch-delay.json).

## Bundle og cache

| Fase | Nødvendig JS, bytes | Gzip-bytes |
| --- | ---: | ---: |
| Før, `57f7265` | 824.877 | 227.977 |
| Plan 3, `205b99b` | 720.317 | 194.926 |
| Endeligt | 723.194 | 196.662 |

Alle gzip-tal i denne tabel bruger samme Node `gzipSync`-metode, ikke Vites afrundede konsoltal. Rapporten følger den statiske manifestgraf rekursivt, deduplikerer fælles imports og medtager obligatorisk CSS separat: **13.431 bytes / 3.861 gzip**. HTML er entry-dokumentet og indgår ikke i JS-budgettet. Preview-serverens overførte bytes er ukomprimerede; gzip-tallene er beregnede.

[Baseline og plan 3](bundle-before.json), [endelig importgraf og budget](bundle-after.json). Det endelige manifest og moduloversigt ligger også i `dist/.vite/`. Begge ældre builds havde én statisk JS-entry; kilderevisionerne og de præcise assetnavne er registreret i baselinefilen.

Et kontrolbuild med kun ændret apptekst bevarede `three-6cyogrSz.js` byte-for-byte. SHA-256 er `a488ecbf8ad0920de66f2bbdc65a2e4f23380972944a9fc7115cbd61d639d8e7`. [Cachekontrol](cache-check.json). Three-chunken overstiger fortsat Vites generiske 500 kB-advarsel, fordi runtime kræves i første 3D-frame. Budgettet kontrollerer hele opstartsgrafen.

## Kontrol og screenshots

137 tests består, TypeScript/produktionsbuild består, og `pnpm check:bundle` består. Nye tests dækker køens gate/prioritet/concurrency/pause, billeddeduplikering og fejl, sen motiv-completion, lazy-livscyklus, sekundære/øvre skærme, manifestgraf/CSS, cacheidentitet/kloning, instance-transformationer/bounds/refleksioner og opdatering af fælles occlusion-lister.

Browserkontrol omfatter alle otte personlige skærme fra overblik, Tetris/Donkey Kong med tastatur og genbesøg, Tetris-touch, TV start/hop/pause/luk, whiteboardets fem faktiske pointerstreger, spil uden mikrofon, pause ved afgang, kaffeklik og hjælp. Der blev ikke anmodet om sensorer, og de gennemførte flows havde ingen uhåndterede JavaScript-fejl. [Integration](integration.json), [TV/whiteboard/kaffe](more-flows.json), [fejl og recovery](failures.json), [skift mellem to builds](build-replacement.json).

En afbrudt Thrane-request blev genforsøgt ved relevant tilgang og viste korrekt billede. En afbrudt Tetris-chunk efterlod kontoret brugbart; eksplicit genindlæsning gav en klar, inaktiv controller. Buildskiftet blev simuleret ved at lade en allerede åben side bruge en nyere lokal assetmappe uden de gamle hashfiler. Slettede chunks giver HTML-fallback fra Vite preview; genindlæsning henter den nye HTML/graf. Der er ingen automatisk reload-løkke.

De visuelle kontroller viser bevarede møbler, silhuetter, kontakt med gulvet og cutaway-grænser. Sammenlign:

| Visning | Før | Efter |
| --- | --- | --- |
| Overblik | [før](before-overview.jpg) | [efter](after-overview.jpg) |
| Kontoret | [før](before-workspace.jpg) | [efter](after-workspace.jpg) |
| Day21 | [før](before-day21.jpg) | [efter](after-day21.jpg) |
| Køkken | [før](before-kitchen.jpg) | [efter](after-kitchen.jpg) |
| Gå rundt | [før](before-walk.jpg) | [efter](after-walk.jpg) |

Nærbilleder af de otte skærme ligger som `after-screen-*.jpg`. Mellemfaserne har tilsvarende screenshots. Faktisk kamera-/mikrofontilladelse, videoafspilning på YouTube, fysisk mobilhardware og deploymentens cacheheaders er ikke afprøvet her. Sensorernes stop-/cancel-logik dækkes af eksisterende tests. Skjult-fane-køadfærd er testet med den kontrollerbare scheduler. Ingen deployment er udført.

## Gentag målingen

1. Kør `pnpm test`, `pnpm build` og `pnpm check:bundle`.
2. Start `pnpm preview --port 4175`.
3. Kør `PLAYWRIGHT_MODULE=/absolut/sti/til/playwright/index.mjs pnpm exec node scripts/measure-performance.mjs 4175 local` med en eksisterende Playwright-installation og Chromium. Resultater gemmes i `docs/plans/performance/results/local`; `PERF_OUTPUT` kan vælge en anden mappe. Scriptet bruger Metal som denne måling; tilpas GPU-backend ved anden platform.
4. Sammenlign samme browser, viewport, pixel ratio, kamerapresets og reduceret bevægelse. Brug `?measure` til isolerede render-/requestkontroller. Plan 7 kan bygge videre på de separate offscreen-tal og fælles scene-surface-lister uden en ekstra loader.
