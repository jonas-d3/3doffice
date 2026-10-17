# Space Invaders — kontoret i 3D

En lokal, interaktiv Three.js-model af mødelokalerne, toiletterne, køkkenet, Kontoret og Day21. Rumfordeling og størrelsesforhold følger `ressources/grundplan.pdf` (CAPE, 26.03.2025). Interiøret bygger på de 17 fotos i `ressources/` samt videoerne `ressources/kontoret/2026-10-16 15.31.08.mov` (45 sekunder) og `ressources/day21/2026-10-16 15.41.07.mov` (49 sekunder).

**MØDE 4 er Space Invaders**, **MØDE 3 er Minecraft**, og **MØDE 2 er ikke implementeret**. MØDE 2 vises som en tom, markeret rumskal med lukkede døre, så placeringen og pladsen er med i overblikket.

Space Invaders ligger for enden af den smalle gang. Minecraft ligger umiddelbart nedenfor, langs samme facade, og MØDE 2 fortsætter på samme side. Toiletentréen ligger på modsatte side af gangen, længere nede end Minecrafts dør. Toiletterne ligger på hver sin side af entréen. Køkkenet ligger i gangens forlængelse og strækker sig mod højre på planen. Køkkenets sideåbning forbinder nu med passagen neden for MØDE 2.

Den lille gang vest for køkkenet er indrettet efter de tre fotos i `ressources/lille-gang-fra-køkken/`: en væg med kundelogoer over for det grønne skab, bøger, rammer, skrivemaskine, joystick, gulvlampe, garderobestativ med jakker, brandslukker, banner og udgangsskilt. Gulvet har tværgående træbrædder, og loftet er sænket med pladesamlinger, spots og en lavere bjælke. Vælg **Lille gang** for at stå ved køkkenåbningen og se ned gennem gangen. Sidedøren ved logovæggen fører gennem den tykke væg ind i **Kontoret**. Dørens placering er tilpasset grundplanen ved tilføjelsen af kontoret.

**Kontoret** ligger syd for den lille gang og er **17,758 × 6,970 m** efter grundplanens trykte mål. Indretningen følger videoen fra 16. oktober 2026: sorte hæve-/sænkeborde med skærme, brune og sorte kontorstole, fri gang mellem arbejdspladserne, planter, mosvæg og guitar ved indgangen samt to lysebrune sofaer, sofabord, puf og TV i den modsatte ende. Træskelet, skråloft, ovenlys, spots og synligt ventilationsrør er genskabt fra videoen. Bordplaceringer, antal synlige arbejdspladser, møbeldetaljer og loftshøjder er skønnet fra optagelsen; PDF-planens foreslåede bordopstilling er ikke brugt som møbleringsplan. Bordene er foreløbigt modelleret som 140 × 70 cm med stolene tættere ind til bordene efter brugerens korrektion af gangpladsen; bordmålene er ikke opmålt. Videoens skærmindhold er erstattet af neutrale flader. Vælg **Kontoret** eller gå ind gennem sidedøren fra **Lille gang**.

**Day21** ligger vest for Kontoret og forbindes gennem døren ved mosvæggen. Den lange del følger grundplanens **27,088 m**, med en sydlig arbejdszone på **3,712 m** og en passage på **2,770 m** adskilt af træskelet. Videoens indretning er modelleret med glasrum ved indgangen, mørke stolper og skråstivere, ovenlys, sorte arbejdsborde, åben trætrappe, sennepsfarvet sofa, grafisk gulvtæppe, mødebord, kaffezone, hvide skabe, planter og en nordlig sofakrog med lys murstensskorsten. Placeringer, glasåbninger, møbler og højder er skønnede; nordlige nicher er tilpasset grundplanen. Trappen er en visuel del af modellen, og rundgangen foregår på denne etage. Vælg **Day21**, eller gå ind fra Kontoret; begge retninger er åbne. Minikort og overblik omfatter hele den udvidede model.

De eksisterende møbler og materialer i Space Invaders, Minecraft og køkkenet er bevaret og tilpasset rummenes nye grundmål. Toiletternes inventar er placeret på ny i de mindre rum.

## Start

```sh
pnpm install
pnpm dev
```

Åbn den lokale adresse, som Vite skriver i terminalen (normalt http://127.0.0.1:5173/3doffice/dist/).

```sh
pnpm test     # Bevægelse, grænser og kollisioner
pnpm build    # Typekontrol og produktionsbuild til dist/
pnpm preview # Se produktionsbuild lokalt
```

## GitHub Pages

Siden publiceres på https://jonas-d3.github.io/3doffice/dist/. `base` i `vite.config.ts` sikrer, at alle byggede asset-stier starter med `/3doffice/dist/`. Kør `pnpm build`, og medtag den opdaterede `dist/`-mappe ved deployment.

## Navigation

En stiliseret 3D-figur inspireret af referencefotoet går automatisk fra Space Invaders gennem køkkenet og Kontoret til Day21 og tilbage. Figuren har blomsterskjorte, beige shorts, skæg, solbriller i kraven, stribede sandaler og en grøn kappe med Apply-logo på ryggen, der bevæger sig med gangen. Arme, ben og knæ animeres efter den tilbagelagte afstand. Ruten er kontrolleret med 30 cm fri radius omkring figuren. **Pause figur / Start figur** stopper og genoptager rundturen; ved reduceret bevægelse starter figuren på pause. Rundturen holder også pause, mens fanen er skjult, hjælpen er åben, eller TV-spillet er aktivt. Figuren er bygget af lokal geometri og en genereret stoftekstur i `src/visitor.ts`; rute og bevægelse ligger i `src/visitor-walk.mjs`.

- Træk for at dreje. Højreklik og træk, eller vælg panoreringsværktøjet, for at panorere.
- Scroll eller brug +/− for at zoome. Touch: én finger drejer, to fingre panorerer/zoomer.
- Vælg Overblik, Mødebord eller Lounge for et fast udgangspunkt.
- Vælg Gå rundt: W/A/S/D eller piletaster bevæger kameraet; træk eller Q/E drejer blikket. Shift øger hastigheden. Pileknapperne på skærmen fungerer også med touch.
- Gå gennem den åbne dør fra Space Invaders ud i gangen. Minecraft ligger til højre; længere fremme ligger toiletentréen til venstre. Gangen fører lige frem til køkkenet, hvor sideåbningen giver adgang til passagen neden for MØDE 2. Gang, Toiletter, Minecraft, Køkken, Lille gang og Kontoret vælger et udgangspunkt i det pågældende område. Rumplanen og stednavnet følger dig mellem rummene.
- Escape eller H vender tilbage til overblikket, når 3D-visningen har tastaturfokus.
- Vægge foran kameraet skjules i overblik. I gå-tilstand er vægge og loft synlige.

## Model og præcision

MØDE 4 er **7,758 × 6,205 m**, MØDE 3 er **4,835 × 4,362 m**, og køkkenets hovedrum er **6,567 × 3,100 m**, som angivet på PDF-planen. Bredden på passagen neden for MØDE 2 er angivet til **5,107 m**.

MØDE 2 (ca. 4,835 × 3,600 m), gangen (ca. 1,100 × 6,900 m), toiletterne (ca. 1,423 × 1,800 m), toiletentréen (ca. 1,623 × 1,500 m), vægtykkelser og dørplaceringer er aflæst efter planens skala. Planens let skrå ydervæg ved MØDE 4 er forenklet til en ret væg. Højder, vinduer, møbler og øvrige detaljer er fortsat anslået ud fra fotos; modellen er ikke beregnet til præcis opmåling.

`src/layout.mjs` er den fælles grundplan i meter: X går mod højre og Z nedad på PDF'en. Rumskal, gangruter, stednavne og minikort bruger denne plan. `src/placement.mjs` tilpasser de detaljerede fotomodellers lokale koordinater til planen; samme transformation bruges til møblernes kollisionsfelter og kameravisninger. Interiøret ligger i `src/model.ts`, `src/minecraft.ts`, `src/kitchen.ts`, `src/restrooms.ts` og `src/lobby.ts`. Den lille gangs møbelplacering og kollisionsfelter deles gennem `src/lobby-layout.mjs`. Kontorets rumskal ligger i `src/workspace-shell.ts`, dets inventar i `src/workspace.ts`, og møbelplaceringer og kollisionsfelter deles i `src/workspace-layout.mjs`. Fælles vægge og gulve ligger i `src/architecture.ts`, minikortet i `src/minimap.ts` og navigationen i `src/navigation.ts`.

Day21s rumskal ligger i `src/day21-shell.ts`, inventaret i `src/day21.ts`, og de fælles møbelplaceringer og kollisionsfelter i `src/day21-layout.mjs`. Bordene genbruger Kontorets justerede proportioner. Videofilen i `ressources/day21/` er lokal reference og er fortsat udeladt fra Git og produktionsbuildet.

Kør `pnpm test` for målforhold, rumplacering, sammenhængende gangruter, døråbninger, møbler og vægkollisioner. `pnpm build` kontrollerer typerne og opdaterer produktionsfilerne. Materialer og skærmbilleder leveres lokalt; siden henter ingen eksterne billeder, skrifttyper eller API-data.

Personmarkeringerne i `ressources/locations.png` bruges som referencer til arbejdspladserne. Thrane sidder vest for den midterste bordø i Kontorets nordlige række (øindeks 5, side −1), over for Anja. Hans ene skærm viser en retro pixel-pinup i badedragt fra `src/assets/thrane-pixel-pinup.jpg`. Når kameraet kommer inden for 4 meter af skærmen, skifter den til en tegnet flok fiktive børn fra `src/assets/thrane-children.jpg`. Pinup-billedet vender tilbage ved 5 meter; forskellen mellem afstandene forhindrer flimren ved grænsen. Afstanden måles fra skærmens faktiske placering i modellen. Motiverne indlæses lokalt fra start, og deres genereringsprompter ligger i de tilsvarende `.md`-filer i `src/assets/`.

Lars' fire skærme viser tilsammen ét stort FCK-logo på hvid baggrund, fordelt i fire udsnit over opstillingen på 2 × 2 skærme; Henrik har Satyricon-logoet på sort baggrund. Lars sidder øst for ø 2 på den sydlige plads, og Henrik øst for ø 0 på den nordlige plads. Logoerne ligger lokalt i `src/assets/`, med kilder i `src/assets/logos.md`.

Thrane og Lars har hver fire store skærme i to etager samt en åben bærbar til venstre på bordet. Skærmstativer, let vippede topskærme og den bærbares proportioner er tilnærmet efter kontorvideoen i `ressources/kontoret/2026-10-16 15.31.08.mov` (Thranes opstilling ses omkring 16 sekunder). Thranes skiftende billede sidder på nederste venstre skærm.

Davids to store skærme viser Wiibroe: en pilsnerflaske på den venstre og et foto af årgangsøl 2026 med ølglas på den højre. Hans plads er vest for ø 0 på den nordlige plads, over for Henrik. Billederne ligger lokalt i `src/assets/`, med kilder i `src/assets/logos.md`.
