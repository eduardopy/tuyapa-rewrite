# TUYA PA — tuyamedical.com

Static website for TUYA PA, a geriatric and primary-care practice in Sebastian and Vero Beach, FL.

## Stack

Plain HTML, CSS, and a few lines of vanilla JS. No build step, no dependencies, no framework. Hosted on GitHub Pages.

## Structure

```
/                       English homepage
/es/                    Spanish homepage
/privacy/               Privacy policy
/contact/               OAuth integration contact (noindex)
/oauth/callback/        Patient Fusion OAuth callback
/.well-known/jwks.json  Public keys for OAuth integration
/pdfs/                  New-patient forms and handouts
/pictures/              Office photos (not currently surfaced)
/assets/
  styles.css            Single hand-written stylesheet
  img/                  Logo, favicon, hero, doctor photos
CNAME                   GitHub Pages custom domain
robots.txt
sitemap.xml
```

## Local preview

Any static file server works. From the project root:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Branches

- `main` — what is live at tuyamedical.com.
- `site-rewrite` — current rewrite from the BootstrapMade template into a hand-written site.

## TODO before merging to main

- [ ] Confirm office hours match reality at both locations (currently Mon–Fri 8 AM–5 PM at both).
- [ ] Replace doctor headshots if any are still template stock photos.
- [ ] Verify accepted-insurance list is current.
- [ ] Test contact form end-to-end (StaticForms key still in place).
- [ ] Have native Spanish speaker review `/es/` translation.
- [ ] Deploy to a staging URL before pointing CNAME at it.
