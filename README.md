# Space Invaders — kontoret i 3D

En lokal, interaktiv Three.js-model af kontoret, bygget ud fra de fire fotos i `ressources/space-invaders/`. Modellen indeholder mødebordet, 14 stole, sofa, sofabord, tæpper, planter, vinduer, radiatorer, skærm og loftslamper.

## Start

```sh
pnpm install
pnpm dev
```

Åbn den lokale adresse, som Vite skriver i terminalen (normalt http://127.0.0.1:5173).

```sh
pnpm test     # Bevægelse, grænser og kollisioner
pnpm build    # Typekontrol og produktionsbuild til dist/
pnpm preview # Se produktionsbuild lokalt
```

## Navigation

- Træk for at dreje. Højreklik og træk, eller vælg panoreringsværktøjet, for at panorere.
- Scroll eller brug +/− for at zoome. Touch: én finger drejer, to fingre panorerer/zoomer.
- Vælg Overblik, Mødebord eller Lounge for et fast udgangspunkt.
- Vælg Gå rundt: W/A/S/D eller piletaster bevæger kameraet; træk eller Q/E drejer blikket. Shift øger hastigheden. Pileknapperne på skærmen fungerer også med touch.
- Escape eller H vender tilbage til overblikket, når 3D-visningen har tastaturfokus.
- Vægge foran kameraet skjules i overblik. I gå-tilstand er vægge og loft synlige.

## Model og præcision

Dette er en manuelt opbygget, stiliseret 3D-rekonstruktion, ikke en opmålt scanning. Rummet er anslået til 7,6 × 7,0 × 3,05 meter. Indretning og materialer er fortolket ud fra fotos; skjulte detaljer er anslået. Modellen kan derfor bruges til at udforske rummet, men ikke til præcis opmåling.

Geometri findes i `src/model.ts`, materialer i `src/materials.ts` og navigation i `src/navigation.ts`. Møblernes kollisionsfelter i `src/movement.mjs` skal tilpasses, hvis indretningen flyttes. Alle materialer genereres lokalt; siden henter ingen eksterne billeder, skrifttyper eller API-data.
