# Logical Marketer — revised homepage

A responsive, dependency-free static website using the approved plain-language copy and original materials supplied in the Desktop folder.

## Preview

Open `index.html` directly, or run `node scripts/serve.mjs` from this folder and visit http://127.0.0.1:4173.

## Files

- `index.html`: page content and search/social metadata.
- `styles.css`: base responsive design.
- `refinements.css`: 18px body copy, larger headings and spacing, responsive adjustments, and motion styling.
- `app.js`: mobile menu, accessible native image dialog, email-draft generation, one-time scroll reveals, and scroll-responsive header. Motion respects reduced-motion preferences.
- `assets/images/`: optimized images used by this page only.
- `IMAGE-CREDITS.md`: provenance and privacy handling.
- `scripts/check.mjs`: asset, anchor, structured data, pricing-copy, and WebP checks.
- `scripts/prepare-assets.py`: reproducible asset processing with Pillow; original input folder is required to regenerate.

## Pricing scope

$750 includes a website, Google Business Profile optimization, and INITIAL BASIC WEBSITE SEO. It does not include ongoing SEO, maintenance, or long-term marketing. These are separate optional plans. Scope and separate domain/hosting costs must be agreed before work begins.

## Contact delivery

The form generates a message and offers an explicit link to open the visitor’s email app. It does not submit to a backend or claim delivery. Resend is NOT connected. Before launch, configure a backend/serverless endpoint with a server-side Resend key and validation/spam controls. Never put a secret in browser JavaScript. Confirm `amir@logicalmarketer.net` is active.

## Before publication

Confirm contact details and business information, final domain/canonical/social-share URLs, and proposal scope. The historical result periods are visible on each graph; no future results are guaranteed. The inquiry images included here have all contact-information rows cropped away. The new site has not been published.

## Verification

Run `node scripts/check.mjs` and `node --check app.js`. Browser visual/interaction QA remains unverified because the prior browser origin permission was declined.

## November 8 update

Normal body text is 18px, with larger headings, controls, and spacing. Added staggered scroll reveals, subtle card/button hover effects, and a soft header transition. Copy explains the methods refined and major changes made over the past year. The $750 package includes initial basic website SEO only.
