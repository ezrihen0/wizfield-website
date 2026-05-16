# WIZFIELD Website Visual Design System v1

## 1. Executive Summary

This document is the canonical website visual design system for `www.wizfield.com`.

It governs how the WIZFIELD marketing website should look, feel, move, scale, and represent product truth before visual asset production and implementation begin.

It is not production code, a page implementation, a component build, or a final asset package. It is the design-system source that Task 6 visual assets and Task 7 Next.js implementation should inherit.

The website visual thesis is locked:

```text
Bright Operational Clarity
+ Glass Intelligence Surfaces
+ Cyan-to-Violet Digital Energy
+ Precision Typography
+ Controlled Premium Spacing
= WIZFIELD
```

The site must express a premium, bright, product-led operating system for field-service businesses. It must not become dark cyberpunk, generic SaaS blue, cartoon startup design, gray enterprise software, or a stock-photo-heavy trade website.

Canonical source note: `WIZFIELD Visual Brand DNA — Source of Truth.pdf` is the canonical visual authority for WIZFIELD. This Website Visual Design System inherits and translates that PDF into marketing-site design rules. No substitute Brand DNA source is being used.

## 2. Visual Design North Star

The first impression should be:

> This is a bright, premium, intelligent operating system for real field-service businesses. It brings calm structure to operational complexity and surrounds that structure with visible, controlled intelligent energy.

### Emotional Impression

The site should feel:

- Clear.
- Premium.
- Ordered.
- Technological.
- Calm under pressure.
- Built for serious operators.
- Advanced without becoming theatrical.

Visitors should feel that WIZFIELD is more capable and more structured than a simple CRM, but still practical enough for daily field-service work.

### How Premium Is Expressed

Premium is expressed through:

- Spacious layouts.
- Precise type hierarchy.
- Restrained gradients.
- Crisp glass panels.
- High readability.
- Controlled shadows.
- Strong product mockups.
- Fewer, better visual moments.

Premium is not expressed through visual clutter, heavy black sections, luxury metaphors, vague gradients, or decorative motion.

### How Intelligent Operating System Is Expressed

The operating-system idea should appear through:

- Central hubs.
- Connected module maps.
- Workflow rails.
- Product dashboards.
- Workspace switcher visuals.
- Intelligent signal cards.
- Glass surfaces layered above a bright operational field.
- Cyan-to-violet energy used as connection, not wallpaper.

The intelligence layer should look like assistance around the work, not autonomy replacing the operator.

### Field-Service Credibility

Field-service credibility should come from:

- Real workflow labels: calls, leads, jobs, estimates, invoices, follow-up, reports, customer access.
- Product mockups that look usable during real work.
- Operational journey visuals from first call to paid invoice.
- Calm references to real service-business complexity.

Do not make the core identity depend on stock photos of technicians, trucks, tools, rooftops, fireplaces, uniforms, or generic trade imagery. Field credibility supports the operating-system thesis; it does not replace it.

### Competitive Visual Position

Compared with generic CRM sites, WIZFIELD should feel more structured, more product-led, and more operationally specific.

Compared with traditional field-service software, WIZFIELD should feel brighter, more modern, more premium, and more intelligent.

Compared with overdesigned AI startups, WIZFIELD should feel more grounded, more readable, and more honest about human control.

## 3. Brand Token System for the Website

### Core Color Tokens

The locked core palette:

| Token | Name | Hex | Website Role |
|---|---|---:|---|
| `--wf-base` | Liquid Platinum | `#F8FAFC` | Main page canvas and bright operational field |
| `--wf-indigo` | Digital Indigo | `#6366F1` | Brand authority, active states, headings accents |
| `--wf-cyan` | Electric Cyan | `#00F0FF` | Intelligent signal energy, links, glows, active lines |
| `--wf-violet` | Hyper Violet | `#7000FF` | Advanced intelligence, gradient depth, premium energy |
| `--wf-pink` | Plasma Pink | `#FF007A` | Rare alert micro-accent only |

### Functional Tokens

Suggested semantic token architecture:

| Semantic Token | Suggested Source | Purpose |
|---|---|---|
| `--wf-page-canvas` | Liquid Platinum | Page background |
| `--wf-section-surface` | White / soft platinum mix | Quiet section contrast |
| `--wf-surface-elevated` | Strong white surface | Cards and panels requiring readability |
| `--wf-surface-glass` | Translucent white | Standard glass panel |
| `--wf-surface-glass-strong` | More opaque translucent white | Hero and flagship surfaces |
| `--wf-text-primary` | `#172033` | Main readable text |
| `--wf-text-secondary` | `#53607A` | Supporting copy |
| `--wf-text-muted` | `#7C89A5` | Helper text and metadata |
| `--wf-border-soft` | White glass border | Glass edge definition |
| `--wf-border-faint` | Low-opacity indigo | Panels, grid lines, dividers |
| `--wf-interactive-accent` | Digital Indigo / Electric Cyan | Links and focus states |
| `--wf-cta-gradient` | Cyan -> Indigo -> Violet | Primary CTA and selected energy moments |
| `--wf-glow-cyan` | Cyan shadow recipe | Active intelligence glow |
| `--wf-glow-violet` | Violet shadow recipe | Premium AI/advanced glow |
| `--wf-ambient-hero-glow` | Soft radial cyan/violet | Hero background energy |
| `--wf-divider-rail` | Faint indigo/cyan line | Flow rails and section dividers |
| `--wf-alert-micro-accent` | Plasma Pink | Tiny attention marker only |

### Usage Rules

Full gradients are allowed for:

- `Start Trial` primary CTA.
- W logo energy.
- Hero ambient lighting.
- System map connection strokes.
- Premium intelligence highlights.
- Selected diagram rails or node edges.

Full gradients are not allowed for:

- Long body text.
- Whole-page backgrounds.
- Every card.
- Full pricing card backgrounds except a subtle Pro highlight edge.
- Dense FAQ, comparison, or form sections.

Glow is allowed for:

- Hero product visual edges.
- CTA hover/focus edge.
- AI/intelligence signal cards.
- Flow-line energy.
- Logo and W motif.

Glow is not allowed for:

- Paragraph text.
- Dense tables.
- Every icon.
- Entire dashboards.
- Backgrounds so bright that text contrast suffers.

Plasma Pink is allowed only for:

- Tiny alert dots.
- Rare status markers.
- Single-point attention cues.
- Visual anti-pattern examples if needed.

Digital Indigo should dominate:

- Brand authority moments.
- Headline accents.
- Navigation active state.
- Secondary CTA text.
- Focus rings when cyan would reduce contrast.
- Pricing and comparison hierarchy.

Cyan/violet energy should appear as restrained visible intelligence: line edges, connection paths, hero ambient fields, CTA energy, smart-card highlights, and selected node glows.

### Implementation Guidance

Task 7 should centralize raw hex values in token configuration and expose semantic aliases. Suggested naming:

- `--wf-color-page-canvas`
- `--wf-color-section-surface`
- `--wf-color-surface-elevated`
- `--wf-color-surface-glass`
- `--wf-color-text-primary`
- `--wf-color-text-secondary`
- `--wf-color-text-muted`
- `--wf-color-border-soft`
- `--wf-color-border-faint`
- `--wf-gradient-cta`
- `--wf-gradient-energy`
- `--wf-shadow-glass`
- `--wf-shadow-cta`
- `--wf-glow-cyan`
- `--wf-glow-violet`

Tailwind naming should map back to these concepts, such as `bg-wf-canvas`, `text-wf-primary`, `border-wf-faint`, `shadow-wf-glass`, `gradient-wf-energy`, and `glow-wf-ai`.

## 4. Typography System

### Type Roles

| Role | Typeface | Size Guidance | Weight | Use |
|---|---|---:|---:|---|
| Display XL / Homepage H1 | Ethocen or Inter fallback | 64-84 desktop, 42-56 tablet, 36-44 mobile | 700 | Homepage brand declaration |
| Page H1 | Inter, Ethocen only if restrained | 52-68 desktop, 38-48 tablet, 34-42 mobile | 650-700 | Internal page hero |
| Section H2 | Inter | 40-52 desktop, 32-40 tablet, 28-34 mobile | 650-700 | Major section thesis |
| Section H3 | Inter | 26-34 desktop, 22-28 mobile | 600-650 | Subsection title |
| Card title | Inter | 18-22 | 600 | Feature and panel cards |
| Eyebrow labels | Inter | 12-14 | 650-700 | Category and section cue |
| Body large | Inter | 18-21 | 400-500 | Hero and major explainer paragraphs |
| Body standard | Inter | 15-17 | 400-500 | Section copy |
| Small explanatory copy | Inter | 13-14 | 400-500 | Microcopy and guardrails |
| UI / microcopy | Inter | 12-14 | 500-600 | Labels, badges, helpers |
| Pricing numbers | Inter | 42-64 if prices publish | 700 | Pricing amounts |
| CTA text | Inter | 14-16 | 650-700 | Buttons and links |

### Weight and Hierarchy

Headings should feel authoritative, not heavy. Use strong but clean weights and avoid ultra-bold display blocks that make the site feel loud.

Recommended rules:

- Homepage H1: 700, tight but readable.
- Internal H1: 650-700.
- H2: 650-700.
- Card title: 600.
- Body: 400-500.
- Eyebrow: 650-700, letter-spaced.
- CTA: 650-700.

Letter spacing:

- Display headings: slightly tight, approximately `-0.04em` to `-0.02em`.
- H2/H3: slightly tight, approximately `-0.03em` to `-0.01em`.
- Body: normal.
- Eyebrows: modest tracking, approximately `0.08em` to `0.14em`.
- CTA labels: normal to slightly tight; do not over-track.

Line height:

- Display: 0.95-1.05.
- H1/H2: 1.02-1.12.
- H3: 1.12-1.2.
- Body large: 1.5-1.65.
- Body standard: 1.55-1.7.
- Microcopy: 1.45-1.6.

Uppercase usage:

- Eyebrows may be uppercase when short.
- Badges may be uppercase sparingly.
- Navigation should use title case, not shouty uppercase.
- Body copy should not use uppercase emphasis.

### Brand Typographic Feeling

Typography should feel futuristic through geometry, precision, spacing, and hierarchy, not sci-fi gimmicks. Ethocen is reserved for logo/display moments where it adds distinction. Inter carries the long-form work because the site has many explanation-heavy pages.

The correct type personality is:

> Clear enough for operators. Refined enough for premium SaaS. Distinct enough to avoid generic CRM.

## 5. Layout Grid, Width, and Section Rhythm

### Width System

Recommended layout widths:

- Site container: 1180-1240px.
- Wide visual container: 1320-1440px for hero mockups, system maps, and large diagrams.
- Narrow text column: 640-760px.
- Standard two-column text + visual layout: 46% text / 54% visual.
- Homepage hero split: 44% copy / 56% visual on large desktop.
- Internal page hero split: 50% copy / 50% visual or 52% copy / 48% visual depending on visual density.
- Pricing and contact forms: 1080-1180px for clearer decision flow.

### Grid and Gap Rules

Desktop:

- Two-column hero gap: 56-80px.
- Three-card grids: 24-32px.
- Four-card dense grids: 20-24px.
- Diagram node gap: 18-28px.
- Pricing card gap: 24px.

Tablet:

- Reduce gaps by roughly 20%.
- Keep two-column layouts only when both columns remain readable.

Mobile:

- One-column layout by default.
- Card gaps: 14-18px.
- Section internal stack: 20-28px.

### Section Spacing

Desktop:

- Hero sections: 112-156px top/bottom including header relationship.
- Cinematic thesis sections: 104-132px.
- Product proof sections: 88-112px.
- Dense comparison/FAQ sections: 72-96px.
- Final CTA sections: 96-128px.

Tablet:

- Reduce by 15-25%.

Mobile:

- Hero: 72-96px.
- Standard sections: 56-76px.
- Dense sections: 48-64px.

### Section Rhythm Categories

Hero sections:

- Highest visual intensity.
- Ambient glow allowed.
- Strong split composition.
- Primary CTA visible early.

Thesis/explainer sections:

- Calm text-led layout.
- Soft section surface or plain base.
- Minimal glow.

Product proof sections:

- Product mockup frames.
- Glass and elevated panels.
- Realistic UI labels.
- Controlled smart highlights.

Diagram/flow sections:

- Faint rails, connected nodes, small energy accents.
- Preserve readability over decoration.
- Avoid overcomplicated webs.

Pricing/conversion sections:

- Calm, decision-oriented, high contrast.
- Pro card may have a subtle gradient edge or badge.
- Avoid theatrical hero energy.

Trust/docs/contact sections:

- Quiet, structured, editorial.
- Indigo hierarchy.
- Very limited glow.

## 6. Marketing Surface System

### 1. Base Canvas

Purpose: The bright operational field.

Recipe:

- Liquid Platinum background.
- Optional very soft radial ambient glow only in hero or major CTA zones.
- No heavy texture.

Allowed: All pages.

Do not use when: A section needs clear decision contrast such as pricing cards or forms; layer panels above it instead.

Intensity: 1/10.

### 2. Soft Section Surface

Purpose: Create rhythm without breaking the bright brand.

Recipe:

- Slightly warmer or whiter surface over Liquid Platinum.
- Faint indigo border or top divider.
- Minimal shadow.

Allowed: Explainers, FAQ, docs strip, contact form background.

Do not use when: The section requires flagship energy.

Intensity: 2/10.

### 3. Standard Panel

Purpose: Readable content card for dense information.

Recipe:

- Mostly opaque white.
- Faint indigo border.
- Soft shadow.
- Large radius.

Allowed: Feature cards, FAQ, comparison rows, contact cards.

Do not use when: A key flagship visual needs glass intelligence.

Intensity: 3/10.

### 4. Glass Panel

Purpose: Premium intelligence surface.

Recipe:

- Translucent white.
- Crisp white border.
- Backdrop blur.
- Soft layered shadow.

Allowed: Product vignettes, AI cards, hero floating cards, differentiation cards.

Do not use when: Text density is high or background contrast is unstable.

Intensity: 5/10.

### 5. Strong Glass Panel

Purpose: Flagship hero or major product mockup surface.

Recipe:

- More opaque glass.
- Stronger blur.
- Clear border.
- Layered shadow.
- Optional cyan/violet edge energy.

Allowed: Homepage hero, page hero mockups, product dashboard preview.

Do not use for: Every card in a grid.

Intensity: 7/10.

### 6. Spotlight Panel

Purpose: Highlight one key concept without turning the whole section into a hero.

Recipe:

- Standard or strong glass surface.
- Small gradient edge or ambient glow.
- One focused visual or message.

Allowed: AI boundaries, Growth publishing control, Language Store final English, Multi-Business context switch.

Do not use when: Multiple items have equal priority.

Intensity: 6/10.

### 7. Pricing Card Surface

Purpose: Decision clarity.

Recipe:

- Opaque readable panel.
- Faint border.
- Pro card may use subtle gradient ring, badge, or top accent.
- No intense background glow behind prices.

Allowed: Pricing page and homepage pricing preview.

Do not use: Glass-heavy pricing that harms comparison.

Intensity: 4/10.

### 8. Diagram Node Surface

Purpose: Represent systems and flows.

Recipe:

- Small elevated white or glass node.
- Faint indigo border.
- Cyan/violet connection lines.
- Text label remains primary.

Allowed: Platform map, Growth Center flow, Language Store split flow, operational journey, multi-business structure.

Do not use: Dense paragraphs inside nodes.

Intensity: 3-5/10.

### 9. Product Mockup Frame

Purpose: Make WIZFIELD feel like credible software.

Recipe:

- Bright shell.
- Readable nav hints.
- Real workflow labels.
- Subtle glass chrome.
- Controlled highlight cards for AI/growth/workspace cues.

Allowed: Homepage hero, product preview, page heroes, feature proof.

Do not use: Fake dashboards, fake metrics, impossible UI, or generic SaaS screen filler.

Intensity: 6-8/10.

### 10. CTA Panel

Purpose: Focus conversion.

Recipe:

- Bright elevated surface.
- Ambient cyan/violet glow behind, not under text.
- Strong headline.
- Primary CTA plus one secondary action.

Allowed: Final CTA, mid-page conversion, docs confidence strip.

Do not use: Overly dark or noisy conversion blocks.

Intensity: 5-7/10.

## 7. Button and CTA System

### Primary CTA: `Start Trial`

System name:

> `wf-cta-primary`

Appearance:

- Cyan -> Indigo -> Violet gradient fill.
- White text.
- Pill or large rounded rectangle.
- Subtle white inner border.
- Soft indigo/cyan shadow.
- Strong enough to be the dominant action, not loud enough to feel cheap.

Sizing tiers:

- Header: compact, 40-44px tall.
- Standard section: 46-50px tall.
- Hero: 50-56px tall.
- Mobile full-width option: 48-52px tall.

Hover/focus:

- Slight lift.
- Soft border shimmer.
- Slight glow increase.
- Focus ring must be visible and accessible.

Disabled/loading guidance:

- Use reduced opacity and no shimmer.
- Preserve readable text.
- Loading state may show small inline spinner later, but do not invent new CTA styling.

Mobile:

- Full-width in hero and final CTA when stacked.
- Header menu CTA may be full-width inside mobile nav.

### Secondary CTA

Appearance:

- Glass or soft elevated surface.
- Digital Indigo text.
- Faint indigo border.
- Optional small arrow or directional cue only when useful.

Hover/focus:

- Slightly stronger border.
- Soft background lift.
- No full gradient fill.

Use for:

- See How It Works.
- Explore Platform.
- View Pricing.
- Contact Sales when secondary to trial.

### Text Link CTA

Appearance:

- Digital Indigo or high-contrast cyan only where contrast is safe.
- Underline or arrow cue on hover.
- Do not rely on color alone.

Use for:

- Explore page links.
- Docs links.
- Inline routing.
- Footer links.

### Contextual CTAs

Contact Sales:

- Secondary or structured button unless Business page/Contact page context makes it primary.
- Should not visually outrank `Start Trial` on self-serve pages.

View Pricing:

- Secondary button or text CTA after product belief.

Explore Docs:

- Calm secondary/text CTA.
- Signals maturity, not the main conversion.

### CTA Consistency Rules

- Do not create page-specific random CTA treatments.
- `Start Trial` always uses the primary energy treatment.
- Keep CTA pairs ordered primary then secondary.
- Do not replace `Start Trial` with `Get Started`, `Book Demo`, or `Start Free Trial` unless copy system changes.

## 8. Navigation and Header System

Locked navigation:

- Platform
- AI
- Growth Center
- Language Store
- Pricing
- Docs
- Log In
- Start Trial

### Desktop Header

Recommended layout:

- Left: full WIZFIELD logo with connected W symbol.
- Center: primary nav links.
- Right: `Log In` text link and `Start Trial` primary CTA.

Header character:

- Refined glass or near-solid bright surface.
- Subtle blur when sticky.
- Faint bottom border after scroll.
- Compact height: 72-84px desktop.

Sticky recommendation:

- Use sticky header with transparent/soft glass initial state and stronger surface after scroll.
- Avoid heavy fixed nav shadow.

Logo:

- Use full horizontal logo on desktop.
- Preserve connected W symbol, cyan-to-violet energy, and node structure.
- Do not replace with a generic W.

CTA prominence:

- `Start Trial` is visible in the desktop header.
- Do not crowd the header with secondary CTAs.

### Mobile Header

Recommended pattern:

- Logo left.
- Menu trigger right.
- Optional compact `Start Trial` visible if space allows; otherwise place as dominant item inside mobile menu.
- Mobile menu uses bright panel/glass surface, not dark drawer.

Mobile nav:

- Links stacked with generous touch targets.
- `Start Trial` full-width at bottom or top of menu.
- `Log In` remains visible but not dominant.

Avoid:

- Mega menu unless later content depth justifies it.
- Dark cyberpunk nav.
- Generic template nav with weak logo presence.
- Hiding Docs entirely.

## 9. Footer System

Footer mood:

- Calm.
- Premium.
- Structured.
- Editorial.
- Slightly quieter than the page body.

Background:

- Liquid Platinum or soft section surface.
- Optional faint W intelligence motif.
- Faint top divider line.
- No heavy black footer by default.

Hierarchy:

- Brand block first with short positioning line.
- Link groups in clean columns.
- Legal line and copyright separated by a faint divider.
- CTA may reappear as `Start Trial`, but not as a loud hero button unless paired with a final CTA above.

Recommended link groups:

- Product: Platform, AI, Growth Center, Language Store, Multi-Business, Features.
- Company / Conversion: Pricing, Contact, Start Trial, Log In.
- Resources: Docs, Support if credible, Security only if a real page exists.
- Legal: Privacy, Terms.

Optional motif:

- Small connected W node line.
- Tiny cyan/violet rail.
- No noisy pattern.

## 10. Card, Panel, and Content Block System

### Feature Cards

- Visual priority: medium.
- Density: 1 title, 1 short paragraph, optional 2-3 bullets.
- Icon: optional simple line icon or module glyph.
- Surface: standard panel; glass only for elevated feature moments.
- Motion: slight lift on hover.

### Pillar Cards

- Visual priority: high.
- Used for Operational Control, Intelligent Assistance, Growth Enablement, Multi-Business Structure.
- Surface: glass or spotlight panel.
- Icon: optional W-derived node motif.
- Motion: subtle edge glow on hover.

### Three-Up Capability Cards

- Visual priority: medium-high.
- Good for AI/Growth/Language or plan-fit explanations.
- Surface: standard panel with one highlighted card if needed.
- Keep cards visually related, not individually themed.

### AI / Growth / Language Differentiation Cards

- Visual priority: high.
- Surface: glass panel with controlled intelligent edge.
- Must include bounded visual truth: draft/review, explicit publish, reviewed English output.
- Avoid robot, magic wand, universal translation, autopilot imagery.

### Comparison Row Cards

- Visual priority: low-medium.
- Surface: standard panel.
- Density: concise labels and checkable categories.
- No glow unless showing active state.

### Metric-Style Cards

- Use carefully.
- Only show real product-safe labels, not invented metrics.
- Prefer labels like `Signals to review`, `Draft ready`, `Publish job scheduled`.
- Avoid ROI, lead volume, fake revenue lift, fake performance charts.

### Pricing Cards

- Visual priority: high but calm.
- Surface: opaque/elevated.
- Pro card can have subtle gradient ring or recommended badge.
- Starter and Business remain visually credible; do not bury either.

### FAQ Surface

- Visual priority: low.
- Surface: standard panel or accordion surface.
- High readability.
- No glow-heavy FAQ.

### Contact Qualification Cards

- Visual priority: medium.
- Surface: standard panel.
- Use calm icons or labels.
- Support routing, not decorative storytelling.

### Journey Step Cards

- Visual priority: medium.
- Surface: small node cards.
- Connected by faint rail.
- Mobile stacks vertically.

### Workspace Switcher Cards

- Visual priority: high on Multi-Business.
- Surface: product mockup frame plus switcher pill.
- Must show explicit active workspace and separated context.

### Flow Node Cards

- Visual priority: medium.
- Use for platform maps and Growth/Language flows.
- Keep labels short.
- Connection lines should clarify direction.

### Trust / Boundary Cards

- Visual priority: medium-high when correcting risky assumptions.
- Surface: calm indigo-accented standard panel.
- Use for AI boundaries, publishing control, Language Store scope, tenant separation.

## 11. Hero System

### Homepage Hero

Purpose:

- Establish category in five seconds.
- Create premium product desire.
- Introduce operations, intelligence, growth, and multi-business cues.
- Make `Start Trial` feel natural.

Layout:

- Desktop split: copy left, flagship product visual right.
- Large H1.
- Hero copy column capped for readability.
- Two CTA layout.
- Proof line below CTAs.
- Ambient intelligent energy around visual, not behind text.

Visual:

- Flagship operating-system mockup.
- Main dashboard shell.
- Visible nav hints: Home, Customers, Jobs, Estimates, Invoices, Calls, Marketing, Settings.
- Business Brain card says signals need review.
- Operator Copilot card says draft ready for review.
- Growth Center card shows Opportunity -> Draft.
- Workspace switcher cue shows explicit context.

Intensity:

- Highest on site, but still bright and readable.

Mobile:

- Copy first.
- CTA pair visible before or near the visual.
- Product visual simplified to main dashboard plus one AI cue and one workspace cue.

### Internal Page Hero

Purpose:

- Explain page role quickly.
- Route to `Start Trial` and a relevant secondary CTA.
- Provide page-specific proof visual.

Layout:

- Eyebrow.
- H1.
- Short paragraph.
- CTA pair.
- Right-side visual panel or below-copy visual on smaller screens.

Intensity:

- Lower than homepage.
- Page-specific visual signature, shared system language.

### Pricing Hero

Purpose:

- Support decision clarity.
- Avoid theatrical product hype.

Layout:

- Centered or narrow left-aligned headline.
- Plan count cue.
- CTA pair.
- Optional calm plan preview.

Intensity:

- Calm, high contrast, low glow.

### Contact Hero

Purpose:

- Clarify sales intent without gating self-serve trial.

Layout:

- Clear copy.
- `Contact Sales` and `Start Trial` paths.
- Sales intent visual should be structured, not dramatic.

Intensity:

- Calm, trust-oriented.

## 12. Page-Specific Visual Translation

### Homepage

- Intensity: highest.
- Dominant character: cinematic operating-system story.
- Surface mix: base canvas, strong glass hero, product mockup frames, flow nodes, pricing cards, CTA panel.
- Hero visual: flagship operating-system mockup.
- Diagram priority: platform map, operational journey, Growth Center flow.
- Strongest glow: hero visual, CTA, platform map, final CTA motif.
- Calm zones: problem section, field credibility, pricing preview.
- Unique signature: full WIZFIELD system preview in one flagship composition.

### `/platform`

- Intensity: medium-high.
- Dominant character: system architecture and workflow continuity.
- Surface mix: platform map, module cards, product proof panels.
- Hero visual: central WIZFIELD hub with operational modules.
- Diagram priority: one connected operating core and lifecycle flow.
- Strongest glow: central hub and connection rails.
- Calm zones: core operating areas and final CTA.
- Unique signature: the whole operating system explained as one connected map.

### `/ai`

- Intensity: high but bounded.
- Dominant character: intelligent assistance under human control.
- Surface mix: AI command surface, Business Brain card, Copilot draft card, trust boundary cards.
- Hero visual: Business Brain, Operator Copilot, Voice Intake Intelligence — Pilot capsules.
- Diagram priority: workspace records -> AI surfaces -> human review.
- Strongest glow: AI capsules and controlled-send flow edge.
- Calm zones: AI boundaries and trust statement.
- Unique signature: visible intelligence with explicit human control.

### `/growth-center`

- Intensity: medium-high.
- Dominant character: marketing operations connected to real work.
- Surface mix: dashboard mockup, flow nodes, campaign panels, internal analytics panel.
- Hero visual: Growth Center dashboard with opportunities, drafts, campaigns, publish jobs, analytics pulse.
- Diagram priority: Signal -> Opportunity -> Draft -> Campaign -> Publish Job -> Internal Analytics.
- Strongest glow: signal-to-opportunity and publish-job rail.
- Calm zones: analytics explanation, publishing control, automation boundaries.
- Unique signature: operational signals becoming controlled marketing workflows.

### `/language-store`

- Intensity: medium.
- Dominant character: clarity, review, and professional output.
- Surface mix: split-flow panels, settings cards, review/final output panels.
- Hero visual: worker source text, generated English draft, reviewed final English.
- Diagram priority: internal language layer vs customer English output layer.
- Strongest glow: source-to-reviewed-English transition.
- Calm zones: availability, snapshot-safe history, V1 scope.
- Unique signature: split internal language support and reviewed English customer output.

### `/multi-business`

- Intensity: medium-high.
- Dominant character: control, separation, explicit switching.
- Surface mix: workspace switcher visual, separated workspace containers, billing relationship card.
- Hero visual: one owner identity with multiple separated workspaces.
- Diagram priority: switcher flow and active workspace context change.
- Strongest glow: selected active workspace edge.
- Calm zones: billing explanation and plan fit.
- Unique signature: clear workspace separation without blended analytics.

### `/pricing`

- Intensity: medium-low.
- Dominant character: decision clarity.
- Surface mix: pricing cards, comparison cards, FAQ surfaces, billing trust panel.
- Hero visual: clean plan structure cue.
- Diagram priority: Starter 1 business, Pro up to 3 businesses, Business expanded sales-assisted.
- Strongest glow: Pro recommended badge/ring only.
- Calm zones: comparison, FAQ, billing trust.
- Unique signature: premium pricing clarity with no invented prices.

### `/features`

- Intensity: medium.
- Dominant character: capability map.
- Surface mix: feature clusters, product snippets, related routing cards.
- Hero visual: module grid / product map.
- Diagram priority: feature cluster index and cross-links to deeper pages.
- Strongest glow: active cluster highlights.
- Calm zones: dense feature descriptions.
- Unique signature: organized feature inventory that still feels like one operating system.

### `/contact`

- Intensity: low-medium.
- Dominant character: trust, routing, and fit.
- Surface mix: qualification cards, form surface, reassurance panel.
- Hero visual: structured sales-fit panel.
- Diagram priority: minimal; form routing and inquiry type hierarchy.
- Strongest glow: submit CTA/focus state only.
- Calm zones: form, response expectation, trial alternative.
- Unique signature: sales path that does not block self-serve evaluation.

## 13. Diagram, Mockup, and Product-Visual Rules

### System Maps

- Use central hub with clear module labels.
- Use cyan/violet connection lines sparingly.
- Keep directional meaning readable.
- Avoid abstract node webs with no product meaning.

### Flows

- Use left-to-right on desktop, vertical on mobile.
- Label every step.
- Keep microcopy below or beside nodes, not inside tiny nodes.
- Use rail progression only where it clarifies product sequence.

### Operational Journey Rails

Allowed sequence:

> Call / Lead -> Customer -> Job -> Estimate -> Approval -> Invoice -> Follow-up -> Growth Opportunity

Do not imply AI automatically moves the journey forward.

### AI Visual States

Show:

- Signals to review.
- Draft ready for review.
- Explicit send confirmation.
- Outcome observation.
- Voice Intake Intelligence — Pilot with escalation path.

Do not show:

- Autonomous dispatch.
- AI sending silently.
- AI booking jobs with firm commitments.
- AI replacing staff.
- Self-learning loops.
- Cross-business insights.

### Growth Center Flow Diagrams

Show:

> Signal -> Opportunity -> Draft -> Campaign -> Publish Job -> Internal Analytics

Do not show:

- Auto-post.
- Autopilot marketing.
- Guaranteed lead flow.
- Provider engagement metrics.
- ROI dashboards.
- Instagram outbound publishing as shipped.

### Language Store Split Flows

Show:

- Worker language preference.
- Source text.
- English draft.
- User review.
- Final chosen English.
- Snapshot-safe output.

Do not show:

- Universal app translation.
- Bilingual PDFs.
- Translated SMS/email.
- Every customer-facing field translated.
- Customer-selected multilingual output.

### Multi-Business Switching Visuals

Show:

- Explicit workspace switcher.
- Active organization label.
- Separate workspace containers.
- Context change after switch.
- Shared billing relationship as separate from business records.

Do not show:

- Blended cross-business analytics.
- One merged data pool.
- Tenant records mixed in one dashboard.
- Frontend-only casual org toggle.

### Pricing Plan Visuals

Show:

- Starter = 1 business.
- Pro = up to 3 businesses.
- Business = Contact Sales / expanded sales-assisted structure.
- Price placeholders only until owner provides actual prices.

Do not show:

- Invented prices.
- Trial duration.
- Unlimited Business claim.
- Exact feature entitlements not owner-approved.

### Docs Previews

Show:

- Calm documentation surface.
- Indigo headings.
- Clean reading column.
- Product boundary callouts.

Do not show:

- Heavy marketing glow.
- Fake API/code content.
- Dense unreadable code blocks.

### Product Mockup Truth Rules

- Product visuals must look like credible WIZFIELD UI.
- Use labels grounded in locked copy and product truth.
- Avoid fake customer names if they imply testimonial proof.
- Avoid fake revenue, ROI, lead volume, or ad performance metrics.
- AI visuals must not depict autonomy.
- Growth visuals must not depict auto-publish.
- Language visuals must not imply universal translation.
- Multi-business visuals must not blend workspace data.

## 14. Motion and Interaction System

### Motion Principles

Motion should feel:

- Intelligent.
- Precise.
- Calm.
- Directional.
- Subtle.
- Useful.

Motion should never compete with the copy or imply unsupported automation.

### Approved Motion

- Slow ambient glow breathing.
- Gentle node pulse on W intelligence motifs.
- Light border shimmer on CTA hover.
- Subtle product card lift.
- Line-energy progression in diagrams.
- Controlled fade/slide entrance.
- Gentle workspace switch transition visuals.
- Soft focus-ring animation for interactive elements.

### Rejected Motion

- Bounce.
- Arcade neon flicker.
- Constant aggressive pulsing.
- Overanimated dashboards.
- Cartoon motion.
- Confetti or gamified conversion effects.
- Motion implying AI is autonomously acting.

### Reduced Motion

When reduced motion is enabled:

- Disable ambient breathing.
- Disable shimmer loops.
- Keep state changes immediate or simple fade.
- Preserve hover/focus clarity through static border, shadow, or color changes.

### Mobile Motion

- Reduce parallax.
- Avoid scroll-jacking.
- Avoid complex line animations.
- Prefer short fades and simple state transitions.

### Hover vs Touch

- Hover lift should not hide content.
- Touch states need visible press/focus feedback.
- Critical CTAs must not rely on hover-only affordance.

## 15. Responsive Design System

### Breakpoint Logic

Use design behavior, not arbitrary page redesigns:

- Large desktop: full split heroes, wide mockups, multi-column diagrams.
- Desktop/laptop: preserve split heroes, reduce visual overflow.
- Tablet: collapse complex visuals into simpler two-column or stacked groups.
- Mobile: content-first stacking, simplified visuals, full-width CTAs where helpful.

### Grid Collapse Rules

- Four-up grids become two-up on tablet, one-up on mobile.
- Three-up grids may become one-up on mobile.
- Flow diagrams become vertical rails on mobile.
- Comparison tables become grouped cards on mobile.

### CTA Stacking

- Desktop: CTA pair inline.
- Tablet: inline if space allows.
- Mobile: primary full-width, secondary full-width or text link below.
- Do not hide the primary CTA behind visuals.

### Product Mockups

- Desktop: full mockup with secondary cards.
- Tablet: reduce floating cards.
- Mobile: show simplified product card stack.
- Keep labels readable or remove secondary details.

### System Maps

- Desktop: hub-and-spoke or horizontal flow.
- Tablet: simplified hub with grouped modules.
- Mobile: vertical module list with minimal connecting rail.

### Pricing Comparison

- Desktop: plan cards plus comparison grid/table.
- Tablet: plan cards in 2+1 layout if needed.
- Mobile: stacked plan cards and accordion comparison groups.

### Nav

- Desktop: full nav.
- Tablet: compact nav if links fit; otherwise mobile menu.
- Mobile: menu drawer/panel with full-width `Start Trial`.

### Critical Page Patterns

Homepage hero:

- Copy first on mobile.
- Simplify flagship visual.
- Keep proof line readable.

Platform map:

- Convert hub map to grouped module cards on mobile.

AI three-card strip:

- Stack Business Brain, Operator Copilot, Voice Pilot with clear qualifiers.

Growth Center flow:

- Vertical rail on mobile.
- Keep `Publish Job` explicit.

Language Store split flow:

- Stack source, English draft, reviewed final output.

Multi-Business switcher:

- Show current workspace first, then selected workspace state.

Pricing cards/comparison:

- Put plan cards before comparison details.

Contact form:

- Single-column mobile form.
- Full-width submit.
- Helper text remains visible.

## 16. Accessibility and Readability Rules

WIZFIELD can look futuristic without sacrificing accessibility.

### Contrast

- Body text must meet WCAG AA contrast expectations.
- Text over glass must have stable contrast in all responsive states.
- Do not place body text directly over strong glow or busy diagrams.
- Cyan is not a default body text color.

### Readability

- Body line length should generally stay between 55-78 characters.
- Long pages need strong section hierarchy and breathing room.
- Dense sections should use opaque panels, not transparent glass.
- Use bullets for scannability where copy is naturally list-shaped.

### Focus States

- All interactive elements need visible focus.
- Focus can use Indigo outline with subtle cyan glow if contrast is safe.
- Do not remove default focus without replacing it.

### Target Sizing

- Buttons and nav touch targets should be at least 44px tall where practical.
- Mobile form fields should be comfortable, not compressed.

### Link Recognition

- Links should be distinguishable by more than color on hover/focus.
- Footer links need clear hover/focus feedback.

### Text Over Glass

- Use more opaque glass for text-heavy panels.
- Place gradients behind panel edges, not behind paragraphs.
- Avoid low-opacity text inside glass.

### Semantic Respect

Even before code, design should preserve semantic page structure:

- One clear H1 per page.
- Section headings map to visible hierarchy.
- Button styles reflect true action priority.
- Form labels are visible and clear.

## 17. Cross-Page Reusable Component Inventory

This inventory defines visual purpose and reuse role only. It is not code.

| Component | Visual Purpose | Reuse Role |
|---|---|---|
| `MarketingHeader` | Premium top navigation with logo, nav, login, and Start Trial | All marketing pages |
| `MarketingFooter` | Calm structured footer with brand, links, legal | All marketing pages |
| `SectionEyebrow` | Controlled category label | Every major section |
| `PrimaryCTAButton` | `Start Trial` energy CTA | Header, hero, conversion sections, pricing cards |
| `SecondaryCTAButton` | Glass/soft CTA | Hero pairs, routing sections |
| `TextCTA` | Subtle exploration link | Cards, footer, docs links |
| `GlassPanel` | Standard intelligence surface | Hero cards, differentiator cards |
| `StrongGlassPanel` | Flagship glass surface | Hero mockups, major product visuals |
| `StandardPanel` | Readable card surface | Dense cards, FAQ, comparison |
| `SpotlightPanel` | Highlighted concept panel | AI boundaries, publishing control, final English output |
| `PricingCard` | Plan decision card | Pricing and homepage pricing preview |
| `FeatureCard` | Capability explanation | Features, Platform, Homepage |
| `PillarCard` | Four-pillar strategic card | Homepage and Platform |
| `FlowStepCard` | Flow node with label | Growth, Language, Journey |
| `TrustBoundaryCard` | Safe boundary explanation | AI, Growth, Language, Multi-Business |
| `HeroAmbientBackground` | Controlled cyan/violet hero energy | Hero and final CTA |
| `ProductMockupFrame` | Credible WIZFIELD UI preview | Hero, product proof, page visuals |
| `SystemMapSurface` | Hub/module system map | Platform, Homepage |
| `OperationalJourneyRail` | Call-to-invoice/growth journey | Homepage and Platform |
| `WorkspaceSwitcherVisual` | Explicit workspace context | Multi-Business, Homepage |
| `LanguageSplitFlow` | Source to reviewed English flow | Language Store |
| `GrowthCenterFlow` | Signal to publish job flow | Growth Center |
| `FAQAccordionSurface` | Calm expandable answer surface | Pricing, Contact |
| `ContactIntentCard` | Sales-fit routing card | Contact |
| `FormPanel` | Structured contact form surface | Contact |
| `DocsPreviewCard` | Product documentation confidence visual | Homepage, Footer/Docs routes |

## 18. Visual Anti-Patterns / Rejected Directions

### Dark Cyberpunk Site

Why wrong:

- Violates the bright crystal base and makes WIZFIELD feel dystopian or gimmicky.

Correct alternative:

- Liquid Platinum canvas with controlled cyan/violet edge energy.

### Generic SaaS Hero Blob

Why wrong:

- Reduces the operating-system thesis to template decoration.

Correct alternative:

- Product-led hero mockup with real WIZFIELD workflow labels and intelligent system cues.

### Overuse of Gradients

Why wrong:

- Turns brand energy into wallpaper and harms readability.

Correct alternative:

- Reserve gradients for CTA energy, W logo, hero ambient glow, and selected connection lines.

### Overuse of Glass

Why wrong:

- Makes content harder to read and turns premium materiality into a gimmick.

Correct alternative:

- Use glass for hierarchy; use opaque panels for dense content.

### Random Color Drift

Why wrong:

- Weakens brand recognition and creates visual inconsistency.

Correct alternative:

- Use locked core palette and semantic tokens.

### Black-Heavy Sections

Why wrong:

- Breaks the light-mode-first Brand DNA.

Correct alternative:

- Use bright or soft platinum surfaces with controlled contrast.

### Fake AI Hologram / Robot Imagery

Why wrong:

- Implies generic AI theater and unsupported autonomy.

Correct alternative:

- Show Business Brain signals, Copilot drafts, guarded send, reply observation, and Voice Pilot escalation.

### Stock-Field Imagery as Core Identity

Why wrong:

- Makes WIZFIELD look like a traditional trade-service website, not a premium operating system.

Correct alternative:

- Use real workflow labels and product visuals; field credibility supports the system story.

### Noisy Illustrations

Why wrong:

- Competes with copy and product proof.

Correct alternative:

- Use clean system diagrams, glass panels, and W-derived node motifs.

### Inconsistent Button Systems

Why wrong:

- Weakens conversion hierarchy.

Correct alternative:

- Keep `Start Trial` as `wf-cta-primary`; use consistent secondary and text CTA treatments.

### Dribbble Concept Visuals That Harm Usability

Why wrong:

- Makes the product feel fake or unworkable.

Correct alternative:

- Product visuals should look credible, readable, and usable all day.

### Visual Assets That Contradict Product Truth

Why wrong:

- Misleads buyers and creates product/sales risk.

Correct alternative:

- Every mockup must preserve AI, Growth Center, Language Store, Multi-Business, pricing, and field-service boundaries.

## 19. Implementation Handoff Notes for Task 7

Task 7 should implement token-first, not page-by-page styling drift.

### Non-Negotiable Coding Decisions

- Centralize WIZFIELD tokens before assembling pages.
- Use semantic variables or Tailwind theme aliases instead of scattered hex values.
- Preserve `wf-cta-primary` as the only primary CTA energy treatment.
- Build reusable marketing primitives before page assembly.
- Use the approved copy documents exactly.
- Preserve locked navigation labels.
- Keep Docs in top navigation.
- Keep the site bright by default.
- Preserve glass as hierarchy, not decoration everywhere.
- Preserve product-truth visual boundaries.

### Suggested Implementation Order

1. Establish token foundation.
2. Build shared layout primitives.
3. Build CTA/button system.
4. Build header and footer.
5. Build panel/card/surface primitives.
6. Build hero primitives.
7. Build flow/diagram primitives.
8. Integrate Task 6 assets into the system.
9. Assemble pages from approved copy and architecture.
10. Run accessibility and responsive passes.

### Asset Integration Rule

Task 6 visual assets must plug into this design system. They must not force new palettes, new button styles, darker page directions, or unsupported product claims.

### Page Assembly Rule

Implementation should follow:

- Homepage wireframe and copy map for homepage order.
- Full Page Architecture Pack for internal page order.
- Marketing Copy System for final copy.
- This Visual Design System for surfaces, spacing, motion, responsiveness, and visual truth.

## 20. Build Readiness Verdict

GO — Website Visual Design System is ready for owner review

Rationale:

- The locked WIZFIELD Brand DNA is preserved.
- The site remains bright, premium, futuristic, structured, intelligent, clean, product-led, and restrained.
- The design system supports Task 6 asset production and Task 7 implementation.
- Core tokens, typography, layout, surfaces, CTAs, header, footer, cards, heroes, motion, responsive behavior, and accessibility rules are defined.
- Page-specific visual translation is defined for every required marketing page.
- Product visuals are bounded by canonical AI, Growth Center, Language Store, Multi-Business, pricing, and field-service truth.
- Anti-patterns are explicitly rejected.
- No production code, React components, final assets, or website implementation work is included.

## 21. Open Questions or Required Owner Decisions, if any

No strategic blockers were found.

Owner decisions before Task 6 or Task 7:

- Confirm access to the canonical `WIZFIELD Visual Brand DNA — Source of Truth.pdf` remains available for Task 6 and Task 7 handoff.
- Confirm final logo asset availability: full horizontal logo, standalone W symbol, and favicon-ready W mark.
- Confirm Ethocen licensing and webfont delivery approach before implementation.
- Confirm whether mobile should include a persistent `Start Trial` affordance or rely on header/menu placement.
- Confirm whether Docs destination is external documentation or an internal `/docs` route.
- Confirm final pricing values before any visual pricing number treatment is implemented.

