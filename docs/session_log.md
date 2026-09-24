# CouloirGG working notes

Updated September 22, 2026.

## Current direction

The site presents Stuart White's independent consulting practice: systems architecture, AI adoption, workflow design, and custom internal tooling. AXIS Producer is the flagship product and remains in development.

The owner has authorized public use of his name and twenty years of career experience across Zipper Interactive, Turn 10 Studios, Microsoft, 343 Industries, Bungie, and EA. The older anonymity instructions are superseded.

## Website update

- Added a named introduction, career logos, and consulting background.
- Removed current game-related products and services from public promotion; existing product URLs redirect to consulting.
- Reworked the career article around systems and operations, retaining a redirect from its previous URL.
- Replaced unsupported client outcome claims with descriptions of possible engagements.
- Preserved private client material without linking it publicly.

## Structure and navigation

- Main menu: Consulting, AXIS, Blog, Contact. Shared styling and mobile behavior now cover ten main pages, including AXIS and its download page. The current section stays visible and active.
- Homepage sequence: offer and contact action, career experience, services and deliverables, short method, AXIS, contact.
- Consulting retains the detailed method, systems, people, and background sections, with direct section links in its introduction.
- Openings size to their content rather than forcing a full viewport of height.
- Contextual links connect the homepage, consulting, AXIS, and articles. Article endings lead to the relevant service/product and related reading.
- AXIS has a working availability-enquiry action while it remains in development. Its existing direct-download URL remains accessible without being promoted as a public launch.

See README.md for current content rules and local preview instructions. Deployment is a separate step from local edits.

## Wording review

- Reviewed all public pages for tone, clarity, and consistency. Consulting uses Stuart's first-person voice; Ben Hawkins's commission page retains its own author and commercial terms.
- Replaced combative consulting language, fixed-scope promises, and unsupported numerical outcomes with practical descriptions of discovery, delivery, and validation.
- Reworked the signal-loss article around an explicitly illustrative example. Revised the AI article to distinguish participant consent from a user's acknowledgement, local processing from optional cloud features, and AI suggestions from reviewed output.
- Updated article titles, excerpts, metadata, social cards, and modification dates together.
- AXIS copy consistently states development status. Removed advertised live subscription prices, trials, refunds, and the free-offer structured data, using the brief's prelaunch status as the assumption pending pricing preference.
- Removed blanket claims that data never leaves the device. Product, download, article, and website privacy copy now distinguish local processing, cloud providers, and team sync.
- Website privacy copy covers Plausible, hosting/fonts, email, and the existing Formspree commission form, with provider policy links. Removed unsupported blanket compliance claims.
- Simplified commission descriptions, upload instructions, and the 404 message. Preserved private client material.
- Validation: all 17 public HTML pages and 216 internal references passed; eight JSON-LD blocks and sitemap parsed; 12 rendered pages checked at 390px and 1440px with no overflow or JavaScript errors. Mobile menu and all eight consulting role interactions passed. Private files remain unchanged.

## September 24: consulting-only publication

The owner confirmed the outside-work acknowledgement and requested consulting-only publication. This supersedes earlier product promotion and employer-logo assumptions.

- Main navigation is Consulting, Blog, Contact. Removed AXIS promotion and rewrote the AI article around consulting practices.
- AXIS, download, and commission pages now redirect to consulting and are absent from the sitemap.
- Removed career logo strips; factual career names remain with an independence statement.
- Home, consulting, and terms explain the restriction on game-related engagements and clients in the games business.
- Jekyll excludes private material, working notes, retired product imagery, and logo assets from publication without modifying their contents.
- Preserved prior product drafts in an ignored local archive. No confidential agreement text is included in the site.
- Pre-publication validation: 17 public HTML files, 150 internal references, seven JSON-LD blocks, and the sitemap passed. Browser checks passed on nine pages at desktop/mobile sizes, seven retired-route redirects, all consulting role interactions, and a complete visitor journey.
