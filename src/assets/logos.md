# Monitor logos

Downloaded on 2026-10-16. The original logos are kept locally and fitted to a monitor canvas without stretching when used.

- `fck-logo.png`: [F.C. København's official design guide](https://design.fck.dk/), [blue primary logo asset](https://res.cloudinary.com/brandpad/image/upload/c_scale,w_768/v1714103781/28337/logo-blue). Previously spanned Lars' four monitors; retained as an unused source asset. His screens now use locally drawn animations in `src/lars-screens.ts`.
- `satyricon-logo.png`: [Satyricon's official website](https://www.satyriconofficial.com/), [logo asset](https://www.satyriconofficial.com/images/logo.png). Previously used on Henrik's monitor; retained as an unused source asset.

Seat locations are taken from `ressources/locations.png`. Logos remain the property of their respective owners.

## David's Wiibroe images

Downloaded on 2026-10-17 from Carlsberg Danmark. Displayed on David's two desktop monitors, west side of island 0, northern seat. Both original images are stored locally and fitted without stretching.

- `wiibroe-pilsner.png`: [Wiibroe Pilsner product page](https://carlsbergdanmark.dk/produkter/wiibroe/wiibroe-pilsner/), [bottle image](https://carlsbergdanmark.dk/media/y5vhk1lx/dk_wiibroe-pilsner-oel.png?height=700&mode=max).
- `wiibroe-2026.jpg`: [Wiibroe Årgangsøl 2026 press release](https://carlsbergdanmark.dk/newsroom/i-dag-blev-det-afsloeret-her-er-kunstneren-og-motivet-bag-wiibroe-aargangsoel-2026-1/), [glass and can photograph](https://carlsbergdanmark.dk/media/ydzct00x/wiibroe-oel-2026.jpg?width=1240&height=838&quality=85).

Wiibroe branding and photographs remain the property of their respective owners.

The app imports `wiibroe-pilsner.webp` (187 × 700, quality 80, lossless alpha) and `wiibroe-2026.webp` (1024 × 692, quality 80). Run `pnpm optimize:images` to reproduce them from the originals above. Canvas sizing, fitting and backgrounds remain unchanged.

## Martin's Astro wallpaper

Downloaded on 2026-10-17 from [Astro's official press resources](https://astro.build/press/).

- `astro-logo.png`: [Gradient logo on dark](https://astro.build/assets/press/astro-logo-light-gradient.png). The original logo is stored locally and fitted without stretching above the caption “Det kan laves i CSS” on a dark background. Displayed on Martin's left monitor, east side of island 2, northern seat, next to Lars.

Astro branding remains the property of its respective owners.

## Henrik's 1000mods player

Downloaded on 2026-10-17 from [1000mods' official Bandcamp album page](https://1000mods.bandcamp.com/album/cheat-death).

- `1000mods-cheat-death.jpg`: [Cheat Death album cover](https://f4.bcbits.com/img/a0752363589_5.jpg), artwork by Eva Mourtzi. Shown without cropping or stretching in the decorative player on Henrik's left monitor, east side of island 0, northern seat. The album page supplies the title track's 5:35 duration. Cover artwork and branding remain the property of their respective owners.

The equalizer, burning suspension bridge, smoke, fire, and fictional deployment terminal are drawn locally in `src/henrik-screens.ts`. No music, remote player, live logs, or Slack data is fetched by the application.

The app imports `1000mods-cheat-death.webp` (512 × 512, quality 80), generated with `pnpm optimize:images`. The original JPEG is retained; the cover still occupies the same 320 × 320 field in the player. See [conversion results](../../docs/plans/performance/results/01-image-optimization/README.md).
