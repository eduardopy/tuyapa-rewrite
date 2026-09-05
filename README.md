# TUYA PA — codex-reimagined

A new version of `site-reimagine` for the existing static TUYA PA website.
No framework, package installation, or build step is required.

## Preview

From this directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Relative paths also support a GitHub Pages project URL.

## This version

- A split homepage hero with the existing office photograph and a prominent appointment phone link.
- Direct navigation to services, providers, locations, and new-patient information.
- Six providers, including **Giovana de Souza, ARNP**, with the supplied portrait.
- Sebastian and Vero Beach only, as confirmed for this version.
- Address-specific directions, patient-portal links, and the existing PDF resources.
- Restored service descriptions, telehealth, and weekend answering-service information.
- English/Spanish homepage switching, including navigation labels, image description, and page title.
- A phone-friendly layout with persistent call and patient-portal actions and room beneath the footer.
- Standard office hours with a holiday caveat, replacing the approximate open/closed badge.
- Conservative insurance and caregiver copy without the previous blanket coverage or portal-access promises.

Giovana's original supplied photo is preserved as `assets/img/doctors/giovana-de-souza.png`.
CSS frames the portrait without displaying the source image's black bars; the person and source photo are unaltered.
No unverified specialty, biography, language, or new-patient availability has been added for her.

## Files

- `index.html`: bilingual homepage and two-location structured data.
- `assets/styles.css`: shared responsive styling, including supporting document pages.
- `assets/site.js`: language preference, mobile navigation, active-section indication, and copyright year. Storage failures do not break the toggle.
- `privacy/`, `integrations/`, `oauth/`, and `.well-known/`: existing supporting routes.
- `pdfs/`: existing patient forms and handouts.

The homepage and privacy page both support English and Spanish. A `?lang=es` or
`?lang=en` URL selects the language and can be shared. The privacy translation retains the existing policy's substance.
English content and all primary links remain usable without JavaScript.

## Final polish pass

- Refined hero typography, office-photo framing, and a direct care-team link.
- A unified quick-action strip and a distinct navy services chapter.
- Consistent circular portraits for all six providers, with individual framing where needed.
- An existing Vero Beach exterior photograph, clearly captioned and loaded lazily.
- Four practical FAQs using native, keyboard-accessible disclosure controls.
- A compact mobile menu with Escape dismissal, destination focus, and responsive reset.
- More explicit map-link labels and PDF download behavior with document-language labels.
- Active navigation, reduced-motion support, and print-friendly colors.

## Verification

- JavaScript syntax and Git whitespace checks.
- Relative links and assets resolve; homepage anchor destinations exist.
- Structured data parses and contains the two listed offices.
- Six provider cards and all portrait images load.
- Desktop and phone visual review, including Giovana's portrait.
- Spanish layouts at 320, 390, 768, 1024, and 1280 CSS pixels show no horizontal overflow.
- English/Spanish switching and reload persistence work; no browser console errors observed.
- Mobile menu opening, Escape dismissal, navigation closing, and native FAQ keyboard toggling.
- Spanish privacy-page rendering and four PDF download links.

Before changing the production site, the practice should confirm its existing office hours,
plan participation, and provider roster. This branch does not change the live domain or deployment settings.
