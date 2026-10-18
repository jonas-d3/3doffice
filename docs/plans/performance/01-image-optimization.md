# Plan 1: Billedoptimering

Status: Gennemført 18. oktober 2026. Se [målinger, kvalitetsvalg og før/efter-billeder](results/01-image-optimization/README.md). Kør `pnpm optimize:images` for at genskabe de valgte assets.

Reducér downloadstørrelse og unødigt store billeddimensioner efter behov. Denne plan er sekundær i forhold til at flytte indlæsningen væk fra opstart og er ingen forudsætning for plan 2. Brug måleprotokollen i [oversigten](README.md). Bevar billedkvaliteten, også når brugeren zoomer direkte fra overblikket ind på skærmen.

## Udgangspunkt og valg

Prøvekonverteringen brugte WebP ved kvalitet 80. Resultaterne er kandidater, der skal godkendes visuelt i scenen; især pixelgrafik kan kræve højere kvalitet eller lossless.

| Original i `src/assets/` | Før | Prøve | Kandidatbredde |
| --- | ---: | ---: | ---: |
| `1000mods-cheat-death.jpg` | 295.666 B | 88.088 B | 512 px |
| `thrane-children.jpg` | 288.442 B | 119.042 B | 1.024 px |
| `thrane-pixel-pinup.jpg` | 146.915 B | 52.134 B | 1.024 px |
| `wiibroe-pilsner.png` | 275.032 B | 34.434 B | 187 px, uændret |
| `wiibroe-2026.jpg` | 150.782 B | 55.628 B | 1.024 px |

Bevar originalerne som kilder, men lad kun de valgte optimerede filer blive importeret af appen. Bevar billedkilder, prompts, alpha og farver. WebP er første valg; en ekstra AVIF-variant kræver en dokumenteret gevinst. Eksisterende små SVG'er og webcam-WebP'er er lavere prioritet.

## Trin 1A: Reproducerbar konvertering

Opret et lille script med en eksplicit liste over kilde, output, dimensioner og kvalitet. Brug eksempelvis en fastlåst `sharp`-devDependency installeret med pnpm. Scriptet skal køres særskilt og ikke genkomprimere billeder ved hvert build.

Berørte filer: nyt `scripts/optimize-images.mjs`, `package.json`, `pnpm-lock.yaml`. Omfang: M, tre filer plus genererede assets.

- [x] Scriptet genererer de fem kandidater deterministisk fra originalerne og rapporterer dimensioner og bytes.
- [x] En anden kørsel ændrer ikke indholdet, og originalerne overskrives ikke.
- [x] Output bevarer aspektforhold, alpha hvor relevant og korrekt orientering.

Kontrol: kør scriptet to gange; sammenlign filhashes og metadata. Ingen unit-test er nødvendig for selve konverteringslisten.

## Trin 1B: Henrik og Wiibroe

Skift albumcoveret og Wiibroe-billederne til de valgte outputfiler. Kontrollér coveret i 320 × 320-feltet og flaskens kanter mod skærmens baggrund.

Berørte filer: `src/henrik-screens.ts`, `src/workspace.ts`, tre billedoutputs og eventuelt `src/assets/logos.md`. Omfang: S i kode.

- [x] Originalerne hentes ikke længere af produktionsbuildet.
- [x] Logoer, tekst, farver og flaskens kontur er læselige på nærmeste normale kameraafstand.
- [x] Før/efter-bytes og skærmbilleder er registreret.

Kontrol: build, netværkslog og nærbilleder i browseren.

## Trin 1C: Thranes billeder

Skift pinup og børnebillede. Sammenlign kvalitet 80 med højere kvalitet/lossless, hvis pixelkanter får støj. Bevar `NearestFilter` og den nuværende billedbeskæring. Sænk ikke opløsningen yderligere uden at kontrollere nærvisningen.

Berørte filer: `src/workspace.ts`, to billedoutputs og de tilhørende billedbeskrivelser. Omfang: S i kode.

- [x] Begge billeder vises korrekt, også efter skift frem og tilbage.
- [x] De fem valgte outputs er samlet mindre end originalerne ved bevaret kvalitet. Prøvens 349 kB er en reference, ikke et bindende totalbudget; skarphed i overblikszoom og nærvisning prioriteres over yderligere komprimering.
- [x] Buildet indeholder kun de importerede varianter, og billedbytes samt decode-/upload-arbejde er registreret særskilt fra tidspunktet for indlæsning.

Kontrol: `tests/proximity-wallpaper.test.mjs`, fælles build/test-kontrol og visuel sammenligning ved både overblik og nærvisning.

## Afgrænsning og aflevering

WebP reducerer filbytes; GPU-hukommelse reduceres primært ved færre pixels. Rapportér derfor begge dele særskilt. Oprydning af andre ubrugte assets og referencefotos er ikke del af planen.

Aflever script, valgte assets, opdaterede imports og en før/efter-tabel. Ingen afhængigheder til de øvrige planer.
