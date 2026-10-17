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

## Easter eggs

- **Creeperen:** Den lille grønne creeper i Minecraft-rummet vågner først, når du har set den i gå-tilstand. Derefter følger den din position rundt om vægge og møbler, mens du kigger væk. Når du ser den igen, fortsætter den i cirka 100 ms, før både skridt og retning fryser. Kig væk, og den følger videre; den holder knap en meters afstand.
- **Deploy dobbelt:** Gå hen til kaffemaskinen i køkkenet, og tryk tre gange direkte på en af dens to runde knapper. Der vises ingen handlingsknap eller kaffebeskeder oven på modellen; kun maskinens eget display skifter. Figuren følger den korteste vej langs sin eksisterende rute, henter koppen, drikker og tager en kort tur på cirka 22 meter ind i Kontoret i forhøjet tempo med kappen løftet. Derefter går David i normal fart hen til Thranes bord og sætter den tomme kop fra sig. Kaffemaskinen nulstilles med det samme, så næste kop kan bestilles, mens han er på toilettet. Han løber straks til det højre toilet, lukker døren og bliver der i 30 sekunder med døren helt lukket. Så åbner han døren og går tilbage. Hvis en ny kop er bestilt, henter han den; ellers genoptager han sin normale rundtur. Ét eller to tryk på den næste bestilling bevares også efter toiletbesøget. Toiletbesøget og døren følger figurens pause. Kopperne bliver på bordet og stables, når de ledige pladser er fyldt; de ryddes ved genindlæsning. Hvis figuren er sat på pause, venter ordren, til du vælger **Start figur**.
- **Jesper har bid:** Klik direkte på laksen, mens den springer på Jespers venstre skærm. Laksen springer ud af skærmen og lander på bordet; præsentationen på højre skærm viser **LEAD LANDET**. Der vises ingen ekstra knap eller besked oven på modellen. Fangsten bliver liggende, til siden genindlæses.

Kaffeknapperne og laksen aktiveres med klik eller tryk direkte på genstanden, når man står tæt på med fri synslinje. Kameratræk og tofingerbevægelser tæller ikke som klik. Easter eggs bruger lokal geometri og teksturer uden nye afhængigheder eller eksterne kald.

Hjælp, TV-spil og skjulte faner pauser forløbene. Ved reduceret bevægelse står creeperen stille, og laksen placeres direkte på bordet. Figuren starter fortsat på pause; starter man den selv, henter den kaffen uden ekstra fart eller vandret kappe. Ruter og tilstandsskift testes i `tests/easter-eggs.test.mjs`.

## Model og præcision

MØDE 4 er **7,758 × 6,205 m**, MØDE 3 er **4,835 × 4,362 m**, og køkkenets hovedrum er **6,567 × 3,100 m**, som angivet på PDF-planen. Bredden på passagen neden for MØDE 2 er angivet til **5,107 m**.

MØDE 2 (ca. 4,835 × 3,600 m), gangen (ca. 1,100 × 6,900 m), toiletterne (ca. 1,423 × 1,800 m), toiletentréen (ca. 1,623 × 1,500 m), vægtykkelser og dørplaceringer er aflæst efter planens skala. Planens let skrå ydervæg ved MØDE 4 er forenklet til en ret væg. Højder, vinduer, møbler og øvrige detaljer er fortsat anslået ud fra fotos; modellen er ikke beregnet til præcis opmåling.

`src/layout.mjs` er den fælles grundplan i meter: X går mod højre og Z nedad på PDF'en. Rumskal, gangruter, stednavne og minikort bruger denne plan. `src/placement.mjs` tilpasser de detaljerede fotomodellers lokale koordinater til planen; samme transformation bruges til møblernes kollisionsfelter og kameravisninger. Interiøret ligger i `src/model.ts`, `src/minecraft.ts`, `src/kitchen.ts`, `src/restrooms.ts` og `src/lobby.ts`. Den lille gangs møbelplacering og kollisionsfelter deles gennem `src/lobby-layout.mjs`. Kontorets rumskal ligger i `src/workspace-shell.ts`, dets inventar i `src/workspace.ts`, og møbelplaceringer og kollisionsfelter deles i `src/workspace-layout.mjs`. Fælles vægge og gulve ligger i `src/architecture.ts`, minikortet i `src/minimap.ts` og navigationen i `src/navigation.ts`.

Day21s rumskal ligger i `src/day21-shell.ts`, inventaret i `src/day21.ts`, og de fælles møbelplaceringer og kollisionsfelter i `src/day21-layout.mjs`. Bordene genbruger Kontorets justerede proportioner. Videofilen i `ressources/day21/` er lokal reference og er fortsat udeladt fra Git og produktionsbuildet.

Kør `pnpm test` for målforhold, rumplacering, sammenhængende gangruter, døråbninger, møbler og vægkollisioner. `pnpm build` kontrollerer typerne og opdaterer produktionsfilerne. Materialer og skærmbilleder leveres lokalt; siden henter ingen eksterne billeder, skrifttyper eller API-data.

Personmarkeringerne i `ressources/locations.png` bruges som referencer til arbejdspladserne. Thrane sidder vest for den midterste bordø i Kontorets nordlige række (øindeks 5, side −1), over for Anja. Hans ene skærm viser en retro pixel-pinup i badedragt fra `src/assets/thrane-pixel-pinup.jpg`. Når kameraet kommer inden for 4 meter af skærmen, skifter den til en tegnet flok fiktive børn fra `src/assets/thrane-children.jpg`. Pinup-billedet vender tilbage ved 5 meter; forskellen mellem afstandene forhindrer flimren ved grænsen. Afstanden måles fra skærmens faktiske placering i modellen. Motiverne indlæses lokalt fra start, og deres genereringsprompter ligger i de tilsvarende `.md`-filer i `src/assets/`.

Lars sidder øst for ø 2 på den sydlige plads. Hans fire skærme viser hver sit animerede motiv: **FCK-minikamp** med pixelspillere, scoring og blå/hvid jubel nederst til venstre; **Overdommer Lars** med nedtælling fra 03:30, pointtavle og strafpoint nederst til højre; **AI-kode til bedømmelse** med forstørrelsesglas og stemplet “MENER DU VIRKELIG DET?” øverst til venstre; og **Reflog er din ven**, hvor et slettet commit synker i graven og fiskes op igen, øverst til højre. Motiverne er inspireret af Slack og tegnes lokalt i `src/lars-screens.ts`. Kamp, point og kode er fiktive; der hentes ingen live data og udføres ingen git-kommandoer. Skærmene opdateres ved højst 8 billeder/sekund inden for 8 meter og foran kameraet, og følger de øvrige skærmes pauser ved reduceret bevægelse, åben hjælp, TV-spil og skjult fane.

Henrik sidder øst for ø 0 på den nordlige plads. Hans venstre skærm viser en retro-musikafspiller med 1000mods' *Cheat Death*, det officielle albumcover, en animeret equalizer og en tæller. Den højre viser en hængebro i brand over en terminal med `pnpm deploy`, “DET BRÆNDER” og fiktive statuslinjer. Det er visuelle animationer uden lyd eller rigtige deployments. `src/henrik-screens.ts` opdaterer dem med højst 12 billeder/sekund, når man er tæt på og kigger mod skærmene; de står stille ved reduceret bevægelse, åben hjælp eller aktivt TV-spil, og når fanen er skjult. Coveret ligger lokalt med kilde i `src/assets/logos.md`.

Thrane og Lars har hver fire store skærme i to etager samt en åben bærbar til venstre på bordet. Skærmstativer, let vippede topskærme og den bærbares proportioner er tilnærmet efter kontorvideoen i `ressources/kontoret/2026-10-16 15.31.08.mov` (Thranes opstilling ses omkring 16 sekunder). Thranes skiftende billede sidder på nederste venstre skærm.

Thranes tre øvrige skærme viser **Pedel-Thranes kontrolrum** nederst til højre, **Musikkommando** øverst til venstre og **Tokenbanken** øverst til højre. Kontrolrummet har en animeret serverpark, en fornærmet printer og en terrasselem, der afventer tekniker. Musikcentralen viser en dansende equalizer, volumen 11 ud af 10 og “HØJTTALERE OVERTAGET”. Tokenbanken modtager fiktive ansøgninger om flere credits og stempler dem med “NEJ”. Motiverne er inspireret af Slack og tegnes lokalt i `src/thrane-screens.ts`; de bruger ingen live data og afspiller ingen lyd. Animationerne opdateres ved højst 8 billeder/sekund inden for 8 meter og foran kameraet, og følger de øvrige skærmes pauser ved reduceret bevægelse, åben hjælp, TV-spil og skjult fane.

Davids to store skærme viser Wiibroe: en pilsnerflaske på den venstre og et foto af årgangsøl 2026 med ølglas på den højre. Hans plads er vest for ø 0 på den nordlige plads, over for Henrik. Billederne ligger lokalt i `src/assets/`, med kilder i `src/assets/logos.md`.

Martins venstre skærm viser Astro-logoet på mørk baggrund med teksten “Det kan laves i CSS”. Han sidder øst for ø 2 på den nordlige plads, ved siden af Lars. Logoet ligger lokalt i `src/assets/astro-logo.png`, med kilde i `src/assets/logos.md`. Hans højre skærm har en rigtig YouTube-embed med videoen `pomFE55c_Sw`, afspilningsknapper og fuld skærm. `src/youtube-screen.ts` placerer en iframe på skærmens flade med CSS3DRenderer. Den indlæses først, når skærmen er synlig inden for 4 meter, og starter kun efter et klik. Et synlighedstjek skjuler HTML-laget bag vægge og møbler og fra skærmens bagside. Afspilleren aflæsses og lyden stopper, når man går mere end 5 meter væk, åbner hjælp eller TV-spillet eller skjuler fanen; ved tilbagekomst starter videoen forfra. YouTubes hjemmeside og søgefelt indgår ikke i embed-afspilleren.

Palm sidder øst for ø 1 på den nordlige plads. Hans venstre skærm viser “PALM AI”, hvor kuverter skiftevis sendes til Preben og gennem en makulator. Højre skærm viser designfeedback fra runde 48 og frem, med fiktive rettelser og en fremdriftsbjælke, der når 99 % og begynder forfra. Begge tegnes lokalt i `src/palm-screens.ts` og animeres ved højst 12 billeder/sekund, når kameraet er tæt på og rettet mod skærmene. Animationerne fryses ved reduceret bevægelse, åben hjælp og aktivt TV-spil; skjulte faner opdateres ikke.

Nicolai sidder vest for ø 1 på den nordlige plads, over for Palm og ved siden af Annie. Hans venstre skærm viser MegaMind med en pulserende kredsløbshjerne og moduler, der gradvist går fra planlagt til live — helt op til kaffemaskinen og verdensherredømme. Højre skærm viser en stigende release-tæller, en deploy-timer og en fiktiv samtale, hvor Nicolai leverer, inden Holbech er færdig med at ønske. “Logo: afventer Thrane” bliver stående. Skærmene tegnes lokalt i `src/nicolai-screens.ts`; de viser ingen live Slack- eller kundedata. Animationerne kører ved højst 12 billeder/sekund inden for 8 meter og foran kameraet og fryses ved reduceret bevægelse, åben hjælp eller aktivt TV-spil. Skjulte faner opdateres ikke.

Anja sidder øst for ø 5, over for Thrane. Hendes venstre højkantsskærm viser to simulerede webcamfelter: økologisk mælk i et køleskab og en elevatordør af træ med ruder. Lokalt genererede billeder kombineres med dansk klokkeslæt, live-indikatorer og en diskret bevægelig skannelinje. Højre skærm viser animerede linje- og søjlegrafer over mælkeforbrug og døraktivitet med fiktive data. `src/anja-screens.ts` opdaterer skærmene ved højst 8 billeder/sekund, når kameraet er inden for 8 meter og rettet mod skærmenes forside. Animationerne følger samme pauser som Palms skærme. Der er ingen forbindelse til rigtige webcams; billedkilderne er beskrevet i `src/assets/anja-webcams.md`.

Annie sidder vest for ø 1 på den sydlige plads; hendes venstre skærm viser linje- og søjlegrafer, og den højre viser et cirkel- og procesdiagram. Skærmbillederne er lokale SVG-illustrationer i `src/assets/annie-*.svg` med fiktive eksempeldata.

Holbech sidder øst for ø 1 på den sydlige plads, ved siden af Palm og over for Annie. Begge hans skærme viser selve 3D-modellen i en lille editor-ramme: hele modellen til venstre og Kontoret tættere på til højre. `src/holbech-screens.ts` gengiver den faktiske scene til to teksturer ved opstart og igen, når billederne er indlæst. Udsnittene genbruges derefter uden ekstra rendering pr. billede. Skærmene skjules under optagelsen for at undgå, at en tekstur læses og skrives samtidig; vægge og tage gendannes bagefter.

Jespers venstre skærm viser en stiliseret canadisk lakseelv med bjerge, grantræer, strømmende vand og en springende laks. Højre skærm viser en fiktiv PowerPoint-præsentation i fuld størrelse med “Den næste store fangst / CMS + AI”. Han sidder øst for ø 4 i den nordlige række, på bordøen vest for Thranes. Motivet tegnes lokalt i `src/jesper-screen.ts`; baggrunden genbruges, og animationen opdateres ved højst 12 billeder/sekund, når kameraet er inden for 8 meter og vender mod skærmens forside. Den følger samme pauser ved reduceret bevægelse, hjælp, TV-spil og skjult fane som Palms skærme. Idéen bygger på Jespers Slack-beskeder om laksefiskeri og kundepitch; motivet er en illustration med fiktivt præsentationsindhold.
