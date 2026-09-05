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

## Design intent

- **Audience first**: 65+ patients on phones with weak vision and arthritic fingers; adult children doing first-time research on desktop.
- **Phone is the hero**, not a stock photo. One huge, tappable number.
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
/pictures/                  Office photos (not yet surfaced — reserved for a future "see our offices" block)
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

- [ ] **Giovana de Souza photo** — add `assets/img/doctors/doctors-6.jpg` (square) and swap the initials avatar.
- [ ] **Provider languages** — confirm which providers see patients in Spanish; only Dr. Mendez is tagged today.
- [ ] **Insurance list** — verify it's current.
- [ ] **Spanish copy** — have a native speaker review the translation pass.
- [ ] **Bare-domain HTTPS** — `https://tuyamedical.com` (no www) serves GitHub's `*.github.io` certificate. Remove the non-GitHub A record on the apex, point it at all four GitHub Pages IPs, and re-enable "Enforce HTTPS" in repo settings.
