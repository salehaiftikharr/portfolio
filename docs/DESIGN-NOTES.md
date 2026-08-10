# Design and change record

## Rendered audit, August 10, 2026

Audited with Playwright at 1440x900, 1280x800, 1024x768, 768x1024, 390x844,
and 360x640 across / and /work, plus keyboard, heading, and landmark passes.
Before screenshots live in the session scratchpad under `audit/`.

**What a recruiter gets in five seconds:** name, role (Forward Deployed
Engineer building AI agents), availability, and two working calls to action.
The serif display and single green accent read as a deliberate identity.

**Strong:** the top-projects carousel with real product screenshots and live
links; the minion demo that replays a real agent run; honors that link to
their sources; the resume, site, and GitHub sharing one voice.

**Defects found:**

1. Every anchor jump buried the section heading under the fixed header
   (measured 0px from viewport top at all six sizes).
2. No skip link; first tab stop was the logo.
3. The 404 page was the unbranded framework default.
4. Gallery videos autoplayed on load, two at once, costing mobile bandwidth
   and violating the motion budget.
5. Projects did not distinguish live products from client work from
   source-only repos, leaving credibility on the table.
6. Skills were grouped by tool taxonomy (Languages, Frameworks, Tools)
   rather than by capability, so the product story got no help from them.
7. Framer-motion entrances ignored prefers-reduced-motion.
8. The meta description still framed Saleha as a recent graduate.

**No issues found with:** horizontal overflow (clean at every viewport),
image alt text, heading order (single h1, ordered h2/h3/h4), landmark
structure, tab order, or console errors.

## Five highest-impact changes

1. Honest status labels on every project (Live, Live with gated demo,
   Client production, Source available) in the gallery and carousel.
2. Anchor offsets fixed globally so navigation never hides headings.
3. Accessibility baseline: skip link, reduced-motion support across all
   entrance animation, a branded 404, focus-visible styling.
4. Skills reorganized by capability: agent systems, product and interface
   engineering, backend and data, reliability and delivery, data analysis.
5. Gallery video covers converted to poster-plus-play (opens the existing
   lightbox), and metadata cleaned of student framing with a canonical URL
   and theme color added.

## Standing decisions (do not revisit without Saleha)

- Light paper canvas, single deep green accent, dark terminal as the only
  inverted surface. No violet, no gradients, no glows.
- Fraunces for display, Inter for body, Geist Mono for terminal text.
- No resume links anywhere on the site (her explicit call; the PDF stays
  at its URL for recruiters who already have it).
- Orion appears only inside the SuperOrgs experience entry.
- Saaya demo passphrase is never published on the site.
- Flagships are Saaya and Forge, in the carousel, in that order.
