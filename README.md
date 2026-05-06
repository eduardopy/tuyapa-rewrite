# TUYA PA — site-reimagine

Experimental rewrite of tuyamedical.com, designed from scratch rather than restyled from the BootstrapMade template.

## Design intent

- **Audience first**: 65+ patients on phones with weak vision and arthritic fingers; adult children doing first-time research on desktop.
- **Phone is the hero**, not a stock photo. One huge, tappable number.
- **Decision panel** ("What brings you here?") replaces a generic marketing hero.
- **Locations as a table**, not three identical cards — three offices, easy to scan.
- **Single page, bilingual via toggle** (`data-lang` spans + localStorage). No `/es/` directory.
- **Live "Open / Closed" status** in the header, computed client-side from Eastern Time.
- **Floating "Call now" button** on mobile, always reachable.
- **No contact form, no testimonials carousel, no FAQ accordion, no service grid.**
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
- `site-reimagine` — this branch. Designed from the ground up; not constrained to the template's structure.

## TODO before this could go live

- [ ] **Fort Pierce address** — currently a placeholder. Confirm and fill in.
- [ ] **Doctor photos** — confirm none of the existing five are template stock.
- [ ] **Insurance list** — verify it's current.
- [ ] **Spanish copy** — have a native speaker review the translation pass.
- [ ] **Open/closed status logic** — DST math is approximate; consider replacing with `Intl.DateTimeFormat` time-zone formatting if browser support allows.
- [ ] **Doctor bios** — currently placeholder copy; replace with real ones.
- [ ] **Caregiver-portal access** — claim is on the page; confirm the practice actually does this.
- [ ] **Provider "Accepting new patients" tags** — confirm with each provider.
