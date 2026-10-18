# Plan 6: Selektive og billigere skygger

Reducér antallet og kompleksiteten af skyggekastere, mens møbler og rum fortsat har tydelig kontakt med gulvet. `geometry.ts` sætter aktuelt både castShadow og receiveShadow på næsten alle meshes; 4.498 af 4.551 kontormeshes kastede skygger i målingen.

Prioritér denne plan efter udskudt indlæsning, hvis målingerne stadig viser behov. Afhængighed: plan 5 anbefales først, så skyggevalgene følger de endelige instance-/materialegrupper. Hvis denne plan udføres tidligere, skal grupperingen genkontrolleres efter instancing. Det eksisterende overbliks udseende og fri zoom er visuelle referencepunkter ved sammenligning.

## Trin 6A: Eksplicit skyggevalg uden visuel ændring

Tilføj en enkel mulighed i geometrihelperne for at vælge casting og receiving separat, med nuværende adfærd som migrationsdefault. Lav en optælling pr. rum/objektgruppe. Klassificér store flader og møbler, små dekorative dele, skærme og dynamiske figurer.

Berørte filer: `src/geometry.ts`, eventuelt målemodulet fra oversigten og én repræsentativ rumfil. Omfang: S/M.

- [ ] Eksisterende kald bevarer deres adfærd, og shadow casting kan fravælges uden at fjerne receiving.
- [ ] InstancedMesh-grupper blander ikke dele med forskellige shadow flags.
- [ ] Baseline for skyggekastere og shadow-pass-arbejde er registreret ved faste kameravisninger.

Kontrol: build og skærmbilleder uden bevidst grafisk ændring. Tilføj ikke en test, der alene genkender en bestemt options-syntaks.

## Trin 6B: Fjern skygger fra små detaljer

Begynd med Kontorets tastaturdele, små skærmstandere, stolhjul og pynt. Bevar store stol-/bordflader, vægge, bjælker og figurer som skyggekastere, indtil en sammenligning viser, at andre valg er acceptable. Migrér derefter Day21 og de øvrige rum enkeltvis.

Filer pr. ændring: `src/geometry.ts`, én rumfil og eventuelt en delt møbelhelper. Omfang: S/M pr. rum.

- [ ] Casting er slået fra for de udvalgte små detaljer, mens nødvendige kontakt- og figurskygger bevares.
- [ ] Shadow-pass-draw calls og/eller trekanter falder i den sammenlignelige måling.
- [ ] Overblik, Kontoret, Day21 og de ændrede rums nærvisninger har ingen tydelig flydende-møbel-effekt eller utilsigtet tab af rumlighed.

Kontrol: samme lys, kamera, pixel ratio og figurposition før/efter; browserbilleder og fælles tests/build.

## Trin 6C: Afprøv simplere casting, hvor effekten er størst

Kun hvis målingen stadig viser væsentligt shadow-pass-arbejde: afprøv en enklere shadow-only geometri for én detaljeret møbeltype. Den må ikke blive synlig i hovedkameraet eller deltage i picking/occlusion. Kontrollér at den valgte Three.js-mekanisme faktisk caster uden at tegne farve eller skrive uønsket dybde. Fjern eller deaktiver forsøget, hvis besparelsen er lille.

Berørte filer: den valgte møbel-/rumfil, `src/geometry.ts`, eventuel shadow-helper og occlusion-registrering. Omfang: M.

- [ ] Den detaljerede variant og den simple caster kan sammenlignes direkte ved identiske forhold.
- [ ] Den simple caster bidrager hverken med usynlige klikblokeringer eller forkert dybde i normal visning.
- [ ] Den valgte løsning giver målt reduktion og acceptable skygger i nærvisning.

Kontrol: render- og raycast-kontrol samt før/efter-skærmbilleder. Dette trin er betinget af resultatet fra 6B, ikke et krav om at indføre proxies.

## Skyggeopdateringer og kvalitet

Bevar i første omgang den nuværende 2048 × 2048-map og automatiske opdatering. Figuren, døre, creeper og cutaway-vægge ændrer scenen; global fastfrysning af shadow maps vil derfor kunne give forkerte skygger. Lavere opløsning eller ændret opdateringsfrekvens er kun et efterfølgende målt forsøg med eksplicit invalidation af alle bevægelige skyggekastere og synlighedsændringer.

Aflever skyggekastere, shadow-pass-arbejde, frame-tider og sammenlignelige screenshots før/efter. Planen er færdig, når de valgte forenklinger er dokumenteret og den dynamiske skyggeadfærd fungerer.
