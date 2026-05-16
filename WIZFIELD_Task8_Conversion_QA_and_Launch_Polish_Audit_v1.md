# WIZFIELD Task 8 Conversion QA and Launch Polish Audit v1

## 1. Executive Summary

This audit reviews the current WIZFIELD marketing website implementation against the canonical WIZFIELD marketing strategy, homepage wireframe, page architecture, marketing copy system, website visual design system, marketing visual asset package, Brand DNA authority, and product-truth guardrails.

Audit target:

- Production website: `https://www.wizfield.com`
- Apex domain: `https://wizfield.com`
- Implementation repo: `c:\Projects\wizfield-website`
- Canonical source docs: `c:\Projects\WizField web`

High-level result:

- The implementation is structurally present: all required public marketing routes load in production.
- The website is built on a clean Next.js App Router foundation with centralized content, reusable rendering, tokenized global styles, shared header/footer, CTA styling, and asset placeholders.
- No dangerous AI, Growth Center, Language Store, Multi-Business, or Pricing claims were found in the inspected source/live text.
- The site is not yet public-launch polished. The most serious issues are linked 404 routes for `Docs` and `Log In`, repeated `h1` usage across every section, pricing-page duplication/placeholder clarity issues, and a contact form that is explicitly UI-only.

Verdict:

> GO — Website implementation is structurally sound and ready for targeted correction/polish execution

This is not a full public-launch approval. It means the implementation is sound enough to move into focused correction and polish rather than architectural rework.

## 2. Audit Methodology

### Source Document Review

Reviewed the canonical source set at `c:\Projects\WizField web`, including:

- `WIZFIELD_Marketing_Website_Master_Plan_v1.md`
- `WIZFIELD_Homepage_Detailed_Wireframe_and_Copy_Map_v1.md`
- `WIZFIELD_Full_Page_Architecture_Pack_v1.md`
- `WIZFIELD_Marketing_Copy_System_v1.md`
- `WIZFIELD_Website_Visual_Design_System_v1.md`
- `WIZFIELD_Marketing_Visual_Asset_Package_v1.md`
- Product-truth docs for AI, Growth Center, Language Store, Multi-Business, pricing, and field-service boundaries.

### Repository Inspection

Inspected the implementation repo at `c:\Projects\wizfield-website`, including:

- `package.json`
- `app/layout.tsx`
- `app/globals.css`
- required route files under `app/`
- `components/marketing.tsx`
- `lib/site-content.ts`

### Live Route Inspection

Fetched production route content for:

- `https://www.wizfield.com`
- `https://wizfield.com`
- `/platform`
- `/ai`
- `/growth-center`
- `/language-store`
- `/multi-business`
- `/pricing`
- `/features`
- `/contact`
- linked-but-not-required `/docs`
- linked-but-not-required `/login`

### Claims Review

Scanned implementation text and live route output for risky claims across:

- AI autonomy and self-learning.
- Growth Center auto-posting and ROI claims.
- Language Store universal translation claims.
- Multi-Business blended-data claims.
- Pricing inventions.

### Visual / Responsive Review

The audit used source-level and text-extracted production inspection. No pixel-level browser viewport session was available in this environment, so visual and mobile findings are classified as code-grounded or inferred where not directly visible.

### Finding Types

Verified findings:

- Live route load/404 behavior from production fetches.
- Source-code structure and content.
- Verification history from Task 7.

Code-grounded findings:

- Heading hierarchy.
- CTA destinations.
- placeholder structure.
- form semantics.
- metadata structure.

Inferred risks:

- mobile layout crowding risks.
- premium-perception risk from placeholder-heavy pages.
- visual rhythm risks on long pages.

Items not verifiable in current environment:

- actual rendered visual fidelity at specific viewport widths.
- keyboard-only behavior in a real browser session.
- redirect status code from apex to `www`.
- contact-form network behavior beyond source inspection.

## 3. Production Route Verification Matrix

| Route | Loads in production | H1 present | Primary CTA present | Nav/footer present | Placeholder strategy present | Major visual breakage observed | Verdict |
|---|---|---|---|---|---|---|---|
| `/` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/platform` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/ai` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/growth-center` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/language-store` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/multi-business` | Yes | Yes | Yes | Yes | Yes | Not visually verified; pricing duplication visible textually | Pass with correction |
| `/pricing` | Yes | Yes | Yes | Yes | Yes | Pricing card duplication visible textually | Pass with correction |
| `/features` | Yes | Yes | Yes | Yes | Yes | Not visually verified; no textual breakage | Pass with polish |
| `/contact` | Yes | Yes | Yes | Yes | Yes | Form is UI-only and success preview is always visible | Pass with correction |

Additional route checks:

- `https://wizfield.com` serves website content, but no visible redirect to `https://www.wizfield.com` was confirmed by fetch output.
- `/docs` returns 404 while linked in header/footer/homepage/contact.
- `/login` returns 404 while linked in header/footer.
- No obvious production 404s were found on the nine required marketing routes.

## 4. Homepage QA Audit

Required homepage order:

1. Hero
2. Problem
3. Platform Thesis
4. Product Preview
5. AI Intelligence Strip
6. Growth Center
7. Language Store
8. Multi-Business Control
9. Operational Journey
10. Built from the Field, Built to Scale
11. Pricing Preview
12. Product Confidence / Docs Strip
13. Final CTA

Result:

- All 13 sections are present in production and appear in the correct order.
- The hero uses the approved headline and primary `Start Trial` CTA.
- Core approved copy is largely preserved.
- Task 6 asset IDs are visible in designed placeholders.
- The homepage is structurally complete for a v0 implementation pass.

Findings:

- Each section title renders as an `h1` because the shared `MarketingSection` component uses `h1` for every section. This is a sitewide accessibility/SEO issue.
- The homepage `See How It Works` CTA links to `#platform-thesis`; source assigns that id by section index, which currently works for the Platform Thesis section but is fragile.
- The Product Confidence / Docs strip links to `/docs`, which is currently a production 404.
- Pricing Preview uses placeholder pricing safely, but the placeholder uses a hyphen instead of the exact approved em dash format.
- Placeholder strategy is present and developer-friendly, but the site remains placeholder-heavy and does not yet deliver premium final visual impact.

Homepage verdict:

- Structurally sound.
- Requires targeted corrections before public launch polish.

## 5. Internal Page QA Audit

### `/platform`

Expected sections: 8.  
Observed sections: 8.

Result:

- Page structure matches the approved architecture.
- CTA use is appropriate: `Start Trial`, `View Features`, and final pricing route are present.
- Placeholders support the intended visual slots.
- Claims stay bounded around operating modules and no autonomous AI control.

Correction needs:

- Multiple `h1` issue applies.
- Final CTA uses the generic home final CTA motif instead of a page-specific platform final CTA asset ID.

### `/ai`

Expected sections: 9.  
Observed sections: 9.

Result:

- Page covers AI truth model, Business Brain, Copilot drafts, guarded send, reply observation, Voice Pilot, boundaries, and final CTA.
- Claims are notably safe: no autonomy, no silent outbound, no self-learning claim, and Voice is labeled Pilot.

Correction needs:

- Copy uses `Voice Intake Intelligence - Pilot` instead of the approved punctuation `Voice Intake Intelligence — Pilot`.
- Multiple `h1` issue applies.
- Final CTA uses generic home motif ID.

### `/growth-center`

Expected sections: 10.  
Observed sections: 10.

Result:

- Page includes operations-to-marketing, profile/channel readiness, opportunity flow, Content Studio, campaigns, publishing control, Automations V1, internal analytics, and final CTA.
- Publishing remains explicit.
- No ROI/ad dashboard claim found.

Correction needs:

- Multiple `h1` issue applies.
- Final CTA uses generic home motif ID.

### `/language-store`

Expected sections: 9.  
Observed sections: 9.

Result:

- Page preserves worker language, reviewed English output, estimate/invoice line scope, review, snapshot-safe history, and availability.
- No universal translation, bilingual PDF, translated SMS/email, or every-field claim found.

Correction needs:

- Multiple `h1` issue applies.
- Final CTA uses generic home motif ID.

### `/multi-business`

Expected sections: 8.  
Observed sections: 8.

Result:

- Page covers workspace switcher, audience, explicit switching, context change, separation, shared billing, plan fit, final CTA.
- No merged analytics or cross-business intelligence claim found.

Correction needs:

- Plan Fit section renders both local plan fit cards and the generic `PricingCards` component, causing duplicated pricing content and unnecessary `[PRICE TBD - OWNER INPUT REQUIRED]` price blocks on a page that should focus on structure.
- Multiple `h1` issue applies.

### `/pricing`

Expected sections: 9.  
Observed sections: 9.

Result:

- Starter, Pro, Business are present.
- Starter/Pro show self-serve path through `Start Trial`.
- Business shows Contact Sales.
- Pro recommendation appears.
- No invented actual prices or trial duration found.

Correction needs:

- Plan Cards section renders both item cards and generic pricing cards, creating duplicate Starter/Pro/Business presentations.
- Business card also displays `[PRICE TBD - OWNER INPUT REQUIRED]` in the generic pricing cards, while Business should read `Contact Sales`.
- Placeholder pricing format uses hyphen instead of exact approved em dash.
- Multiple `h1` issue applies.

### `/features`

Expected sections: 9.  
Observed sections: 9.

Result:

- Page covers hero, cluster index, core operations, communication, financial/document, intelligence/growth, multi-business, related routing, final CTA.
- Claims stay within summary-level capability scope.

Correction needs:

- Multiple `h1` issue applies.
- Some sections are compressed and may feel skeletal until richer native visuals/assets are produced.

### `/contact`

Expected sections: 7.  
Observed sections: 7.

Result:

- Sales-intent positioning is clear.
- Self-serve trial alternative remains visible.
- No response-time guarantee is made.
- Backend destination is honestly described as owner input.

Correction needs:

- Contact form is not a real form; fields are labels containing spans rather than inputs/selects/textareas.
- `Send Inquiry` is rendered as a CTA link to `#`, not a submit button.
- Success state preview is always visible as a section rather than only appearing after submission.
- `/docs` in success links is currently a 404.
- Multiple `h1` issue applies.

## 6. Navigation, Header, and Footer Audit

Header required labels:

- Platform
- AI
- Growth Center
- Language Store
- Pricing
- Docs
- Log In
- Start Trial

Result:

- Header includes the required labels exactly.
- `Start Trial` is visually and structurally primary.
- Mobile nav exists through a `details` menu.
- Brand handling is coherent as a temporary W mark, pending final logo assets.

Findings:

- `/docs` is linked but returns 404.
- `/login` is linked but returns 404.
- The mobile nav uses native `details/summary`, which is acceptable for v0 but should be checked in browser for keyboard/close behavior and visual polish.

Footer:

- Footer includes Product, Company / Conversion, and Resources groups.
- Product links match approved group structure.
- Docs appears in Resources but is 404.
- Terms/Privacy are not linked; footer text states those destinations remain owner inputs.

Verdict:

- Header/footer are structurally aligned, but linked 404s are serious pre-launch correction items.

## 7. CTA and Conversion Path Audit

Primary conversion:

> Start Trial

Result:

- `Start Trial` appears in the header, hero, pricing-oriented sections, final CTAs, and relevant pages.
- Primary CTA styling maps to the WIZFIELD gradient CTA system.
- Contact Sales does not replace self-serve trial globally.
- Contact page preserves trial alternative.

Findings:

- `Start Trial` currently routes to `/pricing`, not a signup/product flow. This is acceptable as a v0 placeholder only if owner confirms.
- `Explore Docs` routes to `/docs`, which is a 404.
- `Log In` routes to `/login`, which is a 404.
- Pricing page hero includes `Start Trial` linking to the pricing page itself, causing a self-link conversion loop.
- Contact page `Send Inquiry` is a non-functional `#` CTA. The page discloses this, but it is not launch-ready as a real lead path.

CTA verdict:

- Conversion model is structurally present.
- Dead linked routes and placeholder conversion destinations require correction before public-launch polish.

## 8. Copy Fidelity Audit

Overall:

- Approved copy is largely preserved and safely compressed in places.
- Core positioning, CTA labels, page headlines, and product boundaries are recognizable.

Acceptable implementation compression:

- Some long page copy is shortened into bullets/cards.
- Some asset descriptions summarize the Task 6 asset package rather than duplicating every asset metadata field.

Non-blocking drift:

- Approved em dashes are often rendered as hyphens, such as `Voice Intake Intelligence - Pilot` and `Run one business - or several`.
- Pricing placeholder uses `[PRICE TBD - OWNER INPUT REQUIRED]` instead of `[PRICE TBD — OWNER INPUT REQUIRED]`.
- Some final CTA asset IDs are generic rather than page-specific.

Correction required:

- Preserve the exact approved pricing placeholder format.
- Preserve official product name punctuation: `Voice Intake Intelligence — Pilot`.
- Remove duplicated pricing content that weakens pricing-page clarity.

Product naming:

- `WIZFIELD`, `Business Brain`, `Operator Copilot`, `Growth Center`, `Language Store`, and `Multi-Business Control` are generally consistent.
- `Voice Intake Intelligence — Pilot` needs typographic correction.

## 9. Claims-Safety Audit

### AI

Confirmed no:

- autonomous business operation claim.
- autonomous dispatch claim.
- self-learning promise.
- silent outbound messaging claim.
- full phone replacement claim.
- guaranteed ROI claim.

AI risk:

- No launch-blocking claim risk found.
- Typographic product-name correction needed for `Voice Intake Intelligence — Pilot`.

### Growth Center

Confirmed no:

- auto-posting claim.
- marketing autopilot claim.
- ROI/ad dashboard claim.
- guaranteed lead flow claim.
- Instagram publishing as shipped.

Growth Center risk:

- No launch-blocking claim risk found.

### Language Store

Confirmed no:

- universal translation claim.
- bilingual PDF claim.
- translated SMS/email claim.
- every-field translation claim.

Language Store risk:

- No launch-blocking claim risk found.

### Multi-Business

Confirmed no:

- blended analytics claim.
- merged record claim.
- cross-business intelligence dashboard claim.

Multi-Business risk:

- No launch-blocking claim risk found.

### Pricing

Confirmed no:

- invented plan price.
- invented trial duration.
- unlimited Business claim.
- unapproved exact entitlement table.

Pricing risk:

- Business displays a `[PRICE TBD - OWNER INPUT REQUIRED]` price placeholder inside generic pricing cards, which conflicts with Business being `Contact Sales`. This is a serious commercial polish issue, not a false price claim.

Claims verdict:

- No P0 claims-safety blocker found.

## 10. Visual System Fidelity Audit

What works:

- Bright base is preserved.
- No dark cyberpunk drift found.
- WIZFIELD tokens exist in `app/globals.css`.
- Glass, standard panel, CTA gradient, and hero ambient utilities exist.
- Header/footer, panels, cards, flow rails, pricing cards, and placeholders share a consistent system.
- Random stock images are not used.

Concerns:

- The current site remains visibly placeholder-heavy. This is acceptable for Task 7 v0, but it limits premium perception.
- Several pages use the same generic final CTA asset placeholder (`wf-home-final-cta-w-motif`) instead of page-specific Task 6 final CTA asset IDs.
- The implementation uses many inline Tailwind arbitrary values. Most reference CSS variables, but some raw rgba values remain in component classes. This is acceptable for v0 but should be tightened.
- Because all sections use the same component rhythm, some long internal pages may feel monotonous until richer visual assets/native visual variants are added.

Visual verdict:

- The website feels structurally aligned with WIZFIELD, but not visually launch-polished.

## 11. Placeholder Asset Audit

What works:

- Placeholder cards are designed, not random blank boxes.
- Asset IDs are visible in developer-friendly form.
- Placeholders preserve layout space.
- No stock imagery is used.
- Placeholder summaries reinforce intended visual meaning.

Issues:

- Page-specific final CTA asset IDs are not fully used; many internal pages reuse `wf-home-final-cta-w-motif`.
- Pricing and Multi-Business use generic pricing cards where page-specific plan structure visuals would be cleaner.
- Placeholder density is high, especially on internal pages. This is acceptable for implementation v0 but can damage premium perception if shown as final public experience.

Placeholder verdict:

- Acceptable for Task 7 v0.
- Needs targeted placeholder/native visual polish before final asset production or public-launch polish.

## 12. Responsive and Mobile Audit

Confirmed from code:

- Header switches to a mobile `details` menu under `lg`.
- Section split layouts collapse below `lg`.
- Card grids use responsive `md`/`lg` grid classes.
- Pricing cards stack on smaller screens.
- Flow rails wrap.
- Contact form surface stacks naturally.

Likely risks:

- Flow rails with many pills may become visually busy on narrow screens.
- The mobile `details` menu should be browser-tested for close behavior, focus behavior, and overlap.
- Repeated large section headings may create long scroll depth and monotony on mobile.
- Placeholder min-heights may feel tall on smaller devices.
- Contact form labels/spans are not real controls, so mobile form usability is not valid yet.

Not verifiable here:

- exact viewport overflow.
- tap target comfort in a real mobile browser.
- visual stacking rhythm on real devices.

Responsive verdict:

- Structurally responsive, but needs browser/device QA before public launch.

## 13. Pricing Page Audit

Required:

- Starter present: yes.
- Pro present: yes.
- Business present: yes.
- `Start Trial` for Starter/Pro: yes in generic pricing cards.
- `Contact Sales` for Business: yes.
- Pro recommended treatment: yes.
- No invented prices: yes.
- No invented trial duration: yes.
- No Business unlimited claim: yes.
- Language Store note concise/safe: yes.

Issues:

- Pricing page duplicates plan presentation: local item cards plus generic `PricingCards`.
- Business displays a price placeholder inside generic pricing cards instead of only `Contact Sales`.
- Placeholder text uses hyphen instead of the exact approved em dash placeholder.
- The Pricing hero `Start Trial` CTA links back to `/pricing`, producing a self-referential primary conversion path.

Pricing verdict:

- Structurally correct but commercially/polish weak.
- Correction required before public launch polish.

## 14. Contact Page Audit

Required:

- Sales-intent positioning clear: yes.
- Self-serve Start Trial alternative visible: yes.
- No fake response-time promise: yes.
- Approved form fields represented: yes, visually.
- Inquiry categories represented: yes.
- Post-submit success UI state present: yes, but static/always visible.

Contact form state:

- UI only.

Issues:

- The contact form is not built with actual form controls.
- `Send Inquiry` is a link to `#`, not a submit action.
- Static success preview is always visible, which is acceptable as a visual preview but not a true post-submit state.
- `/docs` link in success preview is a 404.

Contact verdict:

- Honest as a UI-only first pass.
- Not ready as a real lead-capture surface.

## 15. Metadata / SEO Foundation Audit

What works:

- Root metadata defines `metadataBase`, title template, and site description.
- Route-level metadata exists for implemented pages.
- Titles are route-specific and brand-consistent.
- Metadata does not appear to contain dangerous unsupported claims.

Issues:

- Pages render multiple `h1` elements because every section title uses `h1`.
- `/docs` and `/login` are linked but have no route metadata because they 404.
- No Terms/Privacy pages are present.
- No custom Open Graph or social metadata was observed.

SEO verdict:

- Sufficient v0 metadata foundation.
- Heading structure and linked 404s should be corrected before launch polish.

## 16. Accessibility and Readability Audit

What works:

- CTA links have visible text.
- Focus ring styling is present on CTA buttons.
- Color tokens generally favor readable text.
- Body copy uses readable sizes and line heights.
- Header nav has an `aria-label`.

Issues:

- Multiple `h1` elements per page harm semantic hierarchy.
- Contact form fields are not actual inputs/select/textarea controls.
- The mobile menu uses `details/summary`; this should be keyboard/browser tested.
- Placeholder cards include decorative spans without accessible labels; acceptable for placeholders but should be reviewed when final assets arrive.
- Links to 404 routes create accessibility and user-flow frustration.

Accessibility verdict:

- No obvious inaccessible color/contrast blocker from code.
- Heading hierarchy and contact form semantics are serious correction items.

## 17. Technical Quality Audit

What works:

- Fresh Next.js 16 App Router project.
- Centralized content in `lib/site-content.ts`.
- Shared rendering in `components/marketing.tsx`.
- Token foundation in `app/globals.css`.
- Required route files exist under `app/`.
- Task 7 verification passed: lint, TypeScript check, and production build.
- Placeholder system is maintainable and asset replacement should be straightforward.

Issues:

- The shared renderer uses `h1` for every section.
- `PricingCards` is generic and over-applied, causing duplicated pricing content on `/pricing` and `/multi-business`.
- Contact form is not semantic or functional.
- Linked `/docs` and `/login` routes are missing.
- NPM reported two moderate audit vulnerabilities during scaffold install. No evidence yet that these are launch-blocking, but they should be tracked.
- No `typecheck` script exists in `package.json`; typecheck was run manually with `npx tsc --noEmit`.

Technical verdict:

- Maintainable v0 architecture.
- Needs focused correction packages, not a rebuild.

## 18. Issue Register — Severity Ranked

| ID | Severity | Area | Finding | Evidence | Why it matters | Recommended correction |
|---|---|---|---|---|---|---|
| T8-01 | P1 | Navigation / Conversion | `/docs` returns 404 while linked in header/footer/homepage/contact. | Live fetch of `https://www.wizfield.com/docs` returned 404; source links `/docs`. | Docs is a locked nav maturity signal and a live dead link damages trust. | Add a Docs route/placeholder, wire to a real docs URL, or temporarily remove/disable Docs links with owner approval. |
| T8-02 | P1 | Navigation / Conversion | `/login` returns 404 while linked in header/footer. | Live fetch of `https://www.wizfield.com/login` returned 404; source links `/login`. | Log In is a primary utility path; dead links imply product incompleteness. | Add login route/redirect to actual app login, or adjust link destination. |
| T8-03 | P1 | Accessibility / SEO | Every marketing section renders an `h1`. | `components/marketing.tsx` uses `h1` in `MarketingSection` for all sections. | Breaks semantic hierarchy, SEO clarity, and assistive-tech navigation. | Render only page hero as `h1`; render subsequent section titles as `h2`. |
| T8-04 | P1 | Pricing | Pricing page duplicates Starter/Pro/Business cards and shows Business price placeholder. | `/pricing` live output shows local plan cards plus generic `PricingCards`; Business includes `[PRICE TBD - OWNER INPUT REQUIRED]`. | Weakens commercial clarity and conflicts with Business as Contact Sales. | Use one canonical plan-card presentation; make Business price line `Contact Sales` only. |
| T8-05 | P1 | Contact | Contact form is UI-only with no real fields or backend behavior. | `ContactFormPanel` renders `label` + `span`; `Send Inquiry` is link `#`; live page discloses UI-only. | Honest but not launch-ready for lead capture. | Implement semantic form controls and either safe no-op messaging or real backend route once owner confirms destination. |
| T8-06 | P2 | CTA | Pricing hero `Start Trial` links to `/pricing` itself. | `primaryCta` maps to `/pricing`; Pricing page hero uses `primaryCta`. | Creates a conversion loop instead of a trial/signup action. | Owner should confirm trial destination; route `Start Trial` to signup/product flow when available. |
| T8-07 | P2 | Copy Fidelity | Approved em dash punctuation is replaced by hyphens in several places. | `Voice Intake Intelligence - Pilot`, `Run one business - or several`, pricing placeholder uses hyphen. | Small but visible brand/copy-system drift, especially in claims-sensitive names. | Restore approved punctuation and exact placeholder format. |
| T8-08 | P2 | Placeholder / Visual | Internal page final CTA assets reuse homepage motif ID. | Multiple final CTA sections use `wf-home-final-cta-w-motif`. | Weakens Task 6 asset traceability and page-specific visual direction. | Use page-specific final CTA asset IDs from the asset package. |
| T8-09 | P2 | Visual Polish | Site is highly placeholder-heavy. | Every major route includes many `Asset Placeholder` blocks. | Acceptable for Task 7 v0, but not premium enough for public launch. | Prioritize Tier 1/Tier 2 asset production and native lightweight diagrams. |
| T8-10 | P2 | Domain / SEO | Apex serves content but redirect to `www` was not confirmed. | Fetch of `https://wizfield.com` returned content using apex URLs. | Canonical domain consistency matters for SEO and analytics. | Confirm hosting redirect/canonical strategy and enforce preferred domain. |
| T8-11 | P2 | Legal / Footer | Terms/Privacy are absent and only mentioned as owner inputs. | Footer text says Terms and Privacy remain owner inputs. | Public launch usually needs legal routes. | Owner to provide Terms/Privacy pages or approved temporary footer treatment. |
| T8-12 | P2 | Dependencies | NPM install reported two moderate vulnerabilities during Task 7 scaffold. | Task 7 install output. | Not proven launch-blocking, but should be tracked. | Run `npm audit` during correction pass and decide fix path. |
| T8-13 | P3 | Responsive | Flow rails and placeholders may be tall/crowded on mobile. | Source uses flex-wrap rails and min-height placeholders; no browser viewport verification. | Could affect mobile polish. | Perform browser/device QA and tune spacing/min-heights if needed. |

## 19. Recommended Correction Packages

### Package 1 — Navigation and Dead-Link Corrections

Scope:

- `/docs` route/destination.
- `/login` route/destination.
- Header/footer/homepage/contact links.

Why needed:

- Live linked 404s are serious trust and conversion issues.

Likely files:

- `lib/site-content.ts`
- `components/marketing.tsx`
- optional new routes under `app/docs` and `app/login`, or external URLs.

Acceptance criteria:

- No header/footer primary utility link returns 404.
- Docs remains aligned with locked strategy or owner-approved temporary treatment.
- Log In points to a real route or approved external app login.

Before asset production:

- Yes.

Before public launch:

- Yes.

### Package 2 — Semantic Heading and Accessibility Corrections

Scope:

- Page hero heading remains `h1`.
- Subsequent section headings become `h2`.
- Contact form fields become real form controls or clearly non-interactive mockup outside a form-like UX.

Why needed:

- Corrects SEO/accessibility structure and form semantics.

Likely files:

- `components/marketing.tsx`

Acceptance criteria:

- One primary `h1` per page.
- Section titles render semantically as `h2`.
- Contact form controls are semantic if presented as a form.

Before asset production:

- No, but should happen before broader polish QA.

Before public launch:

- Yes.

### Package 3 — Pricing and Conversion Clarity Corrections

Scope:

- Remove duplicated plan-card rendering.
- Business displays `Contact Sales`, not a price placeholder.
- Restore exact `[PRICE TBD — OWNER INPUT REQUIRED]` placeholder where needed.
- Decide `Start Trial` destination.

Why needed:

- Pricing is a high-intent conversion page and currently feels repetitive.

Likely files:

- `lib/site-content.ts`
- `components/marketing.tsx`

Acceptance criteria:

- One clear Starter/Pro/Business card set.
- Starter/Pro preserve `Start Trial`.
- Business preserves `Contact Sales`.
- No invented prices/trial duration.

Before asset production:

- Recommended.

Before public launch:

- Yes.

### Package 4 — Placeholder and Visual-System Polish

Scope:

- Replace generic final CTA motif IDs with page-specific asset IDs.
- Improve native lightweight visuals for flow rails and pricing structures.
- Prioritize Tier 1/Tier 2 visual assets.

Why needed:

- The current site is structurally correct but visually placeholder-heavy.

Likely files:

- `lib/site-content.ts`
- `components/marketing.tsx`
- future asset files once produced.

Acceptance criteria:

- Placeholder IDs match Task 6 asset package.
- Key pages feel less skeletal.
- No stock-image drift.

Before asset production:

- Yes, for asset-slot accuracy.

Before public launch:

- Yes, at least for homepage and pricing.

### Package 5 — Contact, Legal, Metadata, and Domain Polish

Scope:

- Contact backend destination.
- Terms/Privacy destination.
- final Docs destination.
- canonical apex/www redirect.
- Open Graph/social metadata.
- npm audit review.

Why needed:

- Completes operational launch foundation.

Likely files:

- `app/layout.tsx`
- `lib/site-content.ts`
- `components/marketing.tsx`
- hosting configuration outside repo may be involved.

Acceptance criteria:

- Contact behavior is honest and owner-approved.
- Legal links/routes are resolved or intentionally omitted.
- canonical domain behavior is confirmed.
- dependency/security posture is reviewed.

Before asset production:

- No.

Before public launch:

- Yes.

## 20. Launch-Readiness Verdict

GO — Website implementation is structurally sound and ready for targeted correction/polish execution

Rationale:

- All required marketing routes load in production.
- Homepage and internal pages broadly follow the approved architecture.
- No P0 claims-safety blocker was found.
- Shared implementation architecture is maintainable and tokenized.
- Remaining issues are serious but targeted: dead utility links, heading semantics, pricing clarity, contact form state, placeholder polish, and owner-input destinations.

This verdict does not mean the site is ready for unrestricted public launch. It means Task 7 does not need architectural rework before targeted correction/polish execution.

## 21. Open Owner Decisions or Inputs, if any

- Actual Starter and Pro prices.
- Final Docs destination: internal `/docs` route or external docs URL.
- Final app login destination for `Log In`.
- Final logo assets: full horizontal logo, standalone W symbol, favicon-ready W mark.
- Contact form backend destination and routing owner.
- Terms and Privacy page plan.
- Preferred apex/www canonical domain behavior.
- Final visual asset production workflow: Figma, image generation, or mixed.
- Whether `Start Trial` should continue routing to `/pricing` temporarily or move to a signup/product entry route.

