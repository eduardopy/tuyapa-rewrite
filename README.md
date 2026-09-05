# TUYA PA — fable-reimagined

Rewrite of tuyamedical.com, designed from scratch rather than restyled from the BootstrapMade template. This branch builds on `site-reimagine` and fixes what kept it from shipping.

## What changed from site-reimagine

- **Fort Pierce removed.** No other source (live site, `main`, `site-rewrite`) mentions a third office; it was a placeholder. The site says two offices everywhere: title, description, schema, hero, copy, locations, footer.
- **CNAME restored** (`www.tuyamedical.com`). The reimagine branch had dropped it, which would detach the custom domain on deploy.
- **Giovana de Souza, ARNP** added to Providers (initials avatar until a photo exists).
- **Services section** ported from the live site, tightened, bilingual. Keeps the search terms people use.
- **Patient quotes** ported from the live site (four of the five; the anonymous one duplicated Dr. Fermin). Kept in English, with a note in Spanish mode.
- **Unverified per-provider tags removed.** "Accepting new patients" is now one practice-wide line under the Providers heading. Only Dr. Mendez keeps an English · Spanish tag, because the live site says so.
- **Caregiver-portal claim softened** to "ask us about caregiver access".
- **Open/closed status** now uses `Intl.DateTimeFormat` with `America/New_York`; no hand-rolled DST math.
- **Language** picks `?lang=es` / `#es` first, then the saved choice, then the browser language. `localStorage` access is guarded.
- **Images**: provider photos resized to 400×400 (~25 KB each instead of up to 1 MB), header uses a 152 px logo, unreferenced hero backup deleted. Provider images carry width/height and lazy-load.
- **Real office photos, web-sized.** The hero shows the Vero Beach waiting room with the Sebastian sign inset; each location card has its building; a "Step inside" strip shows four interiors. All cut from `pictures/` at 800–1400 px, 60–220 KB each (the live site shipped the same photos at 4–6 MB apiece).
- **Locations are photo cards** with a call button and a Google Maps "Get directions" link per office. The My Maps embed is gone: it was a third-party iframe and it shows a third pin south of Vero Beach that the site copy does not claim.
- **Section nav** in the header on wide screens (Services · Locations · Providers · New patients); hidden under 980 px where the floating call button does the work.
- **Open Graph card** is a 1200×630 crop of the waiting room (`assets/img/og.jpg`).
- Stylesheet is linked with a `?v=` query; bump it when you change CSS so GitHub Pages caches don't serve stale styles.

## Design intent

- **Audience first**: 65+ patients on phones with weak vision and arthritic fingers; adult children doing first-time research on desktop.
- **Phone is the hero**, next to a real photo of the waiting room. One huge, tappable number.
- **Decision panel** ("What brings you here?") replaces a generic marketing hero.
- **Locations as a table**, not three identical cards — three offices, easy to scan.
- **Single page, bilingual via toggle** (`data-lang` spans + localStorage). No `/es/` directory. `?lang=es` links straight to Spanish.
- **Live "Open / Closed" status** in the header, computed client-side from Eastern Time.
- **Floating "Call now" button** on mobile, always reachable.
- **No contact form, no FAQ accordion, no carousel.** Services and patient quotes are static, scannable blocks.
- **Caregiver section** speaks directly to adult children — the people often doing the research.

## Visual

- Warm cream background (`#fbf8f3`), navy ink, ochre accents.
- Serif headings (system serif stack — `ui-serif, Georgia, …`), sans body.
- 19px base font, 1.6 line-height; bumped up for the audience.
- No web fonts, no vendor libraries, no build step.

## Stack

Plain HTML, CSS, and a single inline `<script>`. Hosted on GitHub Pages.

## Structure

```
/                           Single-page bilingual homepage
/privacy/                   Privacy policy
/integrations/              OAuth integration contact (noindex)
/oauth/callback/            Patient Fusion OAuth callback
/.well-known/jwks.json      Public keys
/pdfs/                      New-patient forms
/pictures/                  Original office photos (source for assets/img/office/)
/assets/styles.css
/assets/img/
CNAME, robots.txt, sitemap.xml
```

## Local preview

```bash
python -m http.server 8000
# http://localhost:8000
```

## Branches in this repo

- `main` — snapshot of the live site (template, untouched).
- `site-rewrite` — first cleanup pass: same structure as live, hand-written CSS, fixes for dead links / SEO / accessibility.
- `site-reimagine` — designed from the ground up; not constrained to the template's structure.
- `fable-reimagined` — this branch. `site-reimagine` plus the fixes above.

## TODO before this could go live

- [ ] **Third map pin** — the practice's Google My Maps has a pin south of Vero Beach (Fort Pierce area). If that is a real office, add it back as a third location card; if not, delete the pin from the map.
- [ ] **Provider languages** — confirm which providers see patients in Spanish; only Dr. Mendez is tagged today.
- [ ] **Insurance list** — verify it's current.
- [ ] **Spanish copy** — have a native speaker review the translation pass.
- [ ] **Bare-domain HTTPS** — `https://tuyamedical.com` (no www) serves GitHub's `*.github.io` certificate. Remove the non-GitHub A record on the apex, point it at all four GitHub Pages IPs, and re-enable "Enforce HTTPS" in repo settings.
