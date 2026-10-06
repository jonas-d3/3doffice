# Space Invaders — kontoret i 3D

En lokal, interaktiv Three.js-model af kontoret og toiletgangen, bygget ud fra de fire fotos i `ressources/space-invaders/`, fotoet i `ressources/toilet-gangen/`, de tre fotos i `ressources/toilet-entre/`, `ressources/left-toilet/` og `ressources/right-toilet/` samt `ressources/floorplan.excalidraw`. Modellen indeholder mødebordet, 14 stole, sofa, sofabord, tæpper, planter, vinduer, radiatorer, skærm og loftslamper. Den åbne kontordør fører til gangen med hvide døre, vægskærm, radiator og et lille rundt bord. Halvvejs ligger en toiletentré med vindue og håndvask samt to separate toiletter med mørke fliser, håndvaske, spejle og radiatorer.

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

- Træk for at dreje. Højreklik og træk, eller vælg panoreringsværktøjet, for at panorere.
- Scroll eller brug +/− for at zoome. Touch: én finger drejer, to fingre panorerer/zoomer.
- Vælg Overblik, Mødebord eller Lounge for et fast udgangspunkt.
- Vælg Gå rundt: W/A/S/D eller piletaster bevæger kameraet; træk eller Q/E drejer blikket. Shift øger hastigheden. Pileknapperne på skærmen fungerer også med touch.
- Gå gennem den åbne kontordør for at komme ud i gangen og tilbage igen. Vælg Gang for at starte direkte uden for døren. Vælg Toiletter for at starte i entréen. Fra gangen går du ind til venstre halvvejs nede; herfra er der et toilet til hver side. Rumplanen og stednavnet følger dig gennem alle rummene.
- Escape eller H vender tilbage til overblikket, når 3D-visningen har tastaturfokus.
- Vægge foran kameraet skjules i overblik. I gå-tilstand er vægge og loft synlige.

## Model og præcision

Dette er en manuelt opbygget, stiliseret 3D-rekonstruktion, ikke en opmålt scanning. Kontoret er anslået til 7,6 × 7,0 × 3,05 meter og gangen til 7,8 × 1,6 × 2,55 meter. Gangen fortsætter lige frem gennem kontordøren, i forlængelse af kontoret. Toiletentréen er anslået til 2,2 × 1,6 meter og hvert toiletrum til 3,0 × 2,0 meter. Deres placering følger den tilføjede plantegning. Indretning, materialer, størrelser og skjulte detaljer er anslået ud fra fotos. Modellen kan derfor bruges til at udforske rummene, men ikke til præcis opmåling.

Geometri findes i `src/model.ts` og `src/restrooms.ts`, fælles former i `src/geometry.ts`, materialer i `src/materials.ts` og navigation i `src/navigation.ts`. Gangens, toiletternes og døråbningernes grænser findes i `src/layout.mjs`. Møblernes kollisionsfelter i `src/movement.mjs` skal tilpasses, hvis indretningen flyttes. Alle materialer genereres lokalt; siden henter ingen eksterne billeder, skrifttyper eller API-data.
