# Andrew Morriss — manual Codex rebuild

Built from the current CRM `DEMO_BUILD_PROMPT.md` on 11 September 2026. This is a manual comparison build; the automatic worker remains off and no CRM queue status or lead URL has been changed.

Design: Industrial, muted orange with green charcoal and pale mineral surfaces. Fonts: Barlow Condensed + Manrope, self-hosted. Static HTML, CSS and JavaScript. Three-image hero with pause/reduced-motion handling, photo service cards, about/crew sections, natural-ratio gallery, explicitly labelled sample reviews, map and Call/Gmail links. No forms or automatic messages.

Business details: phone +64 27 289 3799 and email andrew@concreteandworks.co.nz match the CRM and existing demo. Marton and 39 Kensington Road are consistent with the public White Pages listing: https://whitepages.co.nz/w/andrew-morriss-concrete-kingsinton . The CRM calls Marton “Taranaki”; this demo correctly uses Rangitīkei.

Assets: reused the existing repository’s stock photographs, not verified client project photos. Images are explicitly described as illustrative. No real logo, team photographs, Google rating/review count or verified Google review-write URL was found. The Google review button links to the business search on Maps, not a verified direct review composer. Social links are explicitly labelled business searches. Review text and supporting team roles remain labelled examples. Obtain owner approval and real assets before treating the demo as a finished business site.

Checks: at 375px, 768px and 1440px, document width matches the viewport. Mobile menu opens and closes with Escape. Hero contact buttons fit above the fold. Local assets, all page/anchor links, Gmail recipient and no-form requirement verified. Additional browser and Lighthouse checks are recorded during final verification.

Original site: https://andrew-morriss-concrete-works-ltd-d.vercel.app/ . The redesign was promoted to the existing production domain on 11 September 2026 at the user’s request. The Git main branch has not been changed.

Final local Lighthouse mobile audit: performance 80, accessibility 100, best practices 100, SEO 100; LCP 4.5 seconds on simulated throttling. JPEG assets converted to resized WebP. Dark mode and reduced motion checked visually. Removed redundant brand accessible-name overrides after the audit’s experimental label check.

Photo follow-up: user requires Google Business Profile, Facebook and Instagram images first, with faithful upscaling when needed. Public searches did not establish verified profiles; native Chrome access timed out. Requested profile links from the user. Real-photo replacement remains pending; the current stock images remain clearly labelled.


## Supplied logo and blue theme — 11 September 2026
- User supplied `Desktop/Andrew Morris /logo.png`; used exact full artwork in all page headers and footers, favicon and social share image.
- Original: 1448 × 1086 PNG. Preserved in `img/originals/andrew-morriss-logo.png`.
- Built-in image editing request: faithfully upscale to 3840 × 2880 preserving every letter, blue colour, white background and digger artwork. Returned 1448 × 1086; rejected as a 4K master.
- Created actual 3840 × 2880 master from supplied original using macOS sips standard resampling, with no generative redraw. Stored in `img/masters/andrew-morriss-logo-4k.png`; not native 4K detail.
- Responsive lossless PNG derivatives: 480 × 360 and 960 × 720. Favicon: 128 × 96. Source and master excluded from Vercel payload.
- Brand palette: deep blue #073b77, navy #102b49, white #ffffff, pale blue #edf3f9; light blue #b5d8ff for contrast over hero photography. Existing stock photographs remain labelled and unchanged.
- Validation: 375px and 1440px visual checks; 768px dark mode and footer; privacy page; mobile menu opens and Escape closes; local asset references and key text/button contrast pairs pass (minimum checked 5.43:1). Impeccable detector used degraded regex mode; browser and direct contrast checks supplemented it.
