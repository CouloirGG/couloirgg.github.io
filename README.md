# CouloirGG

AI adoption and workflow consulting led by **Stuart White**.

Live site: [couloir.gg](https://couloir.gg)

## Current publication scope

The owner confirmed on September 24, 2026 that the required outside-work acknowledgement is complete and instructed us to publish consulting only. AXIS and art commission offerings are withheld pending separate scope confirmation.

- Consulting serves businesses outside the games industry. Engagements exclude game-related entertainment and work for companies in the games business.
- Twenty years of career experience spans Zipper Interactive, Turn 10 Studios, Microsoft, 343 Industries, Bungie, and EA. These are career references, not consulting clients or endorsements.
- Use factual career names in text. Do not restore employer logos without separate permission; consulting approval does not grant permission to use employer intellectual property.
- Public contact: `hello@couloir.gg`.

## Editing and preview

Static HTML, CSS, and JavaScript. Main navigation and related-page links share `assets/site-navigation.css`; mobile navigation uses `assets/site-navigation.js`. Keep the main menu consistent: Consulting, Blog, Contact.

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. This raw local server does not apply Jekyll exclusions. GitHub Pages publishes `main` through Jekyll, with exclusions in `_config.yml`.

## Published pages

- `/`: consulting overview, services, career introduction, and relevant reading.
- `/consulting/`: approach, background, and engagement examples.
- `/blog/`: articles on operations, systems, and AI adoption.
- `/privacy/`, `/terms/`, and `404.html`: supporting pages.
- Retired game, AXIS, download, and commission URLs redirect to consulting. The former career article URL redirects to `/blog/systems-under-pressure/`.

## Content rules

Use calm, concrete language and short headings. Preserve the teal/lime palette. No em dashes, invented biography, client results, metrics, or testimonials. Discuss consulting prices per engagement.

Client material under `/private/` must not be changed, linked publicly, or included in the sitemap. `_config.yml` excludes it from the published site along with working notes, retired product imagery, and employer logos. Publication exclusions do not make files in a public Git repository private.

Do not publish employer confidential information or work-derived materials. Do not present the consulting practice as employer endorsed. Review screenshots as well as text before publishing.

Earlier product drafts are preserved in the ignored `.local-drafts/before-consulting-only-2026-09-24.zip`. Do not publish this archive. Restoring product or commission promotion requires confirmation of the approved scope.
