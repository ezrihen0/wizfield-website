# WIZFIELD Homepage Detailed Wireframe and Copy Map v1

## 1. Executive Summary

This document is the canonical homepage wireframe and copy map for `www.wizfield.com`.

The homepage must present WIZFIELD as:

> The intelligent operating system for field-service businesses.

The primary conversion goal is:

> Start Trial

The homepage must feel like a premium, bright, future-facing operating system for real field-service businesses. It must not become a generic SaaS landing page, a narrow chimney-only pitch, a dark cyberpunk concept, or an inflated AI story.

The page sells four ideas together:

- Operational Control: calls, leads, customers, jobs, estimates, invoices, communication, reports, and customer access in one coordinated system.
- Intelligent Assistance: Business Brain, Operator Copilot, and Voice Intake Intelligence as bounded AI support with human control.
- Growth Enablement: Growth Center turns operational signals into opportunities, drafts, campaigns, explicit publishing workflows, and internal analytics.
- Multi-Business Structure: one user/account context can operate multiple separated business workspaces through explicit switching.

Visual execution must inherit the official WIZFIELD Brand DNA:

- Liquid Platinum canvas.
- Digital Indigo hierarchy.
- Electric Cyan / Hyper Violet intelligent edge energy.
- Glass intelligence surfaces where they improve hierarchy.
- Premium spacing discipline.
- Futuristic and clean, not dark cyberpunk, playful, or generic SaaS.

Source hierarchy used:

- Product truth documents override marketing ambition.
- Visual Brand DNA overrides generic marketing taste.
- AI risk register overrides aggressive AI copy.

## 2. Homepage Conversion Logic

The homepage should move the visitor through this belief sequence:

1. Instant category recognition: WIZFIELD is the intelligent operating system for field-service businesses.
2. Pain recognition: service businesses become fragmented because tools, communication, follow-up, and growth workflows are disconnected.
3. Strategic reframe: the buyer does not need another isolated CRM; they need one operating system.
4. Product proof: WIZFIELD is real software grounded in field operations, not concept art.
5. Differentiation: AI, Growth Center, Language Store, and Multi-Business Control make the platform distinct.
6. Credibility: WIZFIELD is built from real field operations and documented like a serious platform.
7. Action: Start Trial.

Primary conversion path:

- Top navigation `Start Trial`.
- Hero `Start Trial`.
- Mid-page `Start Trial` after product proof.
- Pricing preview `Start Trial`.
- Final CTA `Start Trial`.

Secondary conversion path:

- Hero `See How It Works`.
- Pricing preview `View Full Pricing`.
- Business plan `Contact Sales`.
- Docs strip `Explore Docs`.

Conversion philosophy:

- The page should not hide the product behind enterprise demo friction.
- Trial remains the dominant self-serve action.
- Business buyers still have an assisted route through `Contact Sales`.
- Docs acts as a maturity and confidence signal, not a distraction from trial conversion.

## 3. Final Recommended Homepage Section Order

Use this exact section order:

1. Hero — Brand Declaration
2. Problem — Service Businesses Become Fragmented
3. Platform Thesis — One Operating System
4. Product Preview — Real Software, Not Concept Art
5. AI Intelligence Strip
6. Growth Center
7. Language Store
8. Multi-Business Control
9. Operational Journey
10. Built from the Field, Built to Scale
11. Pricing Preview
12. Product Confidence / Docs Strip
13. Final CTA

Do not delete sections.

Do not merge sections for the canonical homepage. A later implementation agent may visually compress spacing between adjacent sections on mobile, but the strategic content blocks should remain distinct.

## 4. Detailed Section-by-Section Wireframe and Copy Map

### Section 1 — Hero: Brand Declaration

#### A. Section Role

The hero must explain the category, create premium product desire, and make the visitor feel WIZFIELD is a serious operating system within the first five seconds.

Conversion job:

- Establish what WIZFIELD is.
- Signal that the product is broader than CRM and broader than a chimney-only tool.
- Make `Start Trial` feel like the natural next step for a serious operator.
- Introduce AI, growth, and multi-business cues without overloading the hero.

Exact first-five-second impression:

> This is a bright, premium, serious operating system for real field-service businesses. It brings order to daily operations, adds bounded intelligence around the work, and has the structure to support growth and multiple businesses.

#### B. Final Recommended Copy Map

Eyebrow:

> Field-Service Operating System

Final recommended H1:

> Run your field-service business from one intelligent operating system.

Final recommended subheadline:

> WIZFIELD helps service owners manage calls, leads, jobs, estimates, invoices, communication, customer workflows, intelligence, and growth from one premium system built for real field work.

Primary CTA:

> Start Trial

Secondary CTA:

> See How It Works

Compact proof line:

> Operations. Intelligence. Growth. Multi-Business Control.

Optional microcopy under CTAs:

> Built for owners who need clarity now and room to scale next.

Suggested navigation relationship:

- Top nav left: WIZFIELD logo using the connected W intelligence symbol.
- Top nav center: `Platform`, `AI`, `Growth Center`, `Language Store`, `Pricing`, `Docs`.
- Top nav right: `Log In`, `Start Trial`.
- Hero primary CTA duplicates nav primary CTA and must use `wf-cta-primary`.
- Hero secondary CTA uses a restrained glass secondary button and scrolls to Platform Thesis or Product Preview.

#### C. Visual Composition

Desktop layout:

- Split hero with copy on the left and a flagship operating-system visual on the right.
- Left column is text-led, spacious, and authoritative.
- Right column shows a credible WIZFIELD product operating-system mockup, not generic abstract SaaS art.

Hero visual anatomy:

- Large central glass intelligence surface representing the WIZFIELD home/dashboard shell.
- Visible product navigation hints: Home, Customers, Jobs, Estimates, Invoices, Calls, Marketing, Settings.
- Operational modules on the main dashboard:
  - Today's jobs.
  - Recent calls or lead intake.
  - Estimate follow-up.
  - Unpaid invoice or revenue attention card.
- AI cue:
  - Business Brain card labeled `Business Brain` with safe language such as `3 operating signals need review`.
  - Operator Copilot mini card showing `Draft ready for review`, not auto-send.
- Growth cue:
  - Growth Center card showing `Opportunity -> Draft`, not auto-publish.
- Multi-business cue:
  - Compact workspace switcher pill showing `North Ridge Services` and a dropdown cue with another workspace name.
  - Do not imply blended cross-business analytics.
- Ambient energy treatment:
  - Intelligent edge energy flows from cyan to violet around the visual edges.
  - Subtle connected node lines may echo the W logo graph.
  - Glow is directional, mainly around the hero visual, CTA edge, and intelligence cards.

Brand DNA execution:

- Base is Liquid Platinum.
- Primary heading uses strong Digital Indigo / dark readable text hierarchy.
- Glass surfaces use the official glass intelligence surface feel.
- Energy uses Electric Cyan to Hyper Violet with restraint.
- Avoid dark-mode hero, cyberpunk panels, cartoon field-worker art, robots, and abstract blob-only storytelling.

#### D. Responsive Notes

Desktop:

- Above the fold includes nav, eyebrow, H1, subheadline, two CTAs, proof line, and enough of the hero operating-system mockup to establish product credibility.
- H1 is large and cinematic, but not so tall that CTAs fall below the fold on common laptop heights.
- Product visual may float partially into the right edge for depth.

Tablet:

- Maintain split composition if width allows.
- Compress hero visual scale and reduce secondary floating cards.
- Keep CTA pair visible without excessive scrolling.

Mobile:

- Stack copy first, visual second.
- Above or near the fold must include eyebrow, H1, subheadline, `Start Trial`, and `See How It Works`.
- Product visual becomes a simplified vertical card stack with the main dashboard, one AI card, and one workspace switcher cue.
- Do not hide the primary CTA behind the visual.
- Consider sticky mobile CTA only if it does not fight the premium feel.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `HomepageHeroSection`

Custom visual asset required:

- Yes. Requires a flagship product operating-system mockup designed specifically for WIZFIELD.

Reusable patterns:

- Use existing CTA/button patterns if present.
- Primary CTA must use `wf-cta-primary`.
- Secondary CTA should use glass secondary styling.
- Use shared section container, nav, badge, button, and glass card primitives.

Motion ideas:

- Slow ambient glow breathing behind hero mockup.
- Gentle node pulse on the connected W intelligence motif.
- Subtle hero card parallax on desktop only.
- CTA hover may use restrained border shimmer.
- No bouncing, flickering, fast neon loops, or distracting continuous dashboard animation.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Yes.
- Guardrail: frame AI as reviewable intelligence and drafts, not autonomous operation.
- Safe copy: `Business Brain surfaces operating signals. Operator Copilot prepares follow-up drafts for review.`
- Avoid: `AI runs your business`, `AI sends messages automatically`, `AI schedules jobs for you`.

Touches Growth Center truth boundaries:

- Yes.
- Guardrail: show opportunities, drafts, campaigns, and explicit publishing workflow only.
- Safe copy: `Growth Center turns operational signals into drafts and campaigns you choose to publish.`
- Avoid: `auto-posts`, `marketing autopilot`, `guaranteed leads`.

Touches Language Store truth boundaries:

- No direct hero claim recommended.
- If visually hinted, keep it as a small worker-language cue only.

Touches Multi-business truth boundaries:

- Yes.
- Guardrail: show explicit workspace switching and separated context.
- Safe copy: `Switch between business workspaces without losing operating context.`
- Avoid: `cross-business intelligence dashboard`, `blended analytics across every company`.

### Section 2 — Problem: Service Businesses Become Fragmented

#### A. Section Role

This section creates operational recognition. It should make the visitor feel understood without insulting their business or implying they are personally disorganized.

Conversion job:

- Name the pain of disconnected tools.
- Build urgency for an operating-system solution.
- Prepare the strategic reframe in the next section.

#### B. Final Recommended Copy Map

Eyebrow:

> The Fragmentation Problem

H2:

> Your business is not disorganized. Your tools are.

Supporting paragraph:

> Field-service work moves fast. Calls come in, estimates wait, jobs shift, invoices age, customers ask for updates, and follow-ups depend on someone remembering. When every workflow lives in a different place, the business starts carrying the weight.

Pain bullets:

- Calls and customer context get separated.
- Jobs, estimates, and invoices stop telling one story.
- Follow-ups depend on memory instead of a system.
- Marketing gets detached from what is actually happening in the field.
- Team complexity grows faster than the tools supporting it.

Transition microcopy:

> WIZFIELD starts by bringing the operating picture back together.

#### C. Visual Composition

Layout:

- Two-column visual contrast.
- Left: fragmented cards representing calls, jobs, estimates, invoices, follow-ups, and marketing notes drifting apart.
- Right: same cards pulled into an ordered glass operating hub labeled WIZFIELD.

Brand DNA:

- Liquid Platinum background.
- Fragmented side uses low-intensity neutral cards, not chaotic red alerts.
- Ordered side uses glass intelligence surface and a thin cyan-to-violet connection line.
- Keep emotional tension refined, not alarmist.

#### D. Responsive Notes

Desktop:

- Copy left, visual right or centered copy above a wide transformation visual.
- Keep bullets easy to scan.

Tablet:

- Stack copy above visual if two columns become cramped.

Mobile:

- H2 and paragraph first.
- Convert pain bullets into a compact card list.
- Visual simplifies into `fragmented -> unified` vertical flow.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `FragmentationProblemSection`

Custom visual asset required:

- Yes, but it can be implemented as styled cards and lines rather than a static illustration.

Reusable patterns:

- Use reusable section eyebrow, H2, bullet list, and glass card primitives.

Motion ideas:

- On scroll, fragmented cards subtly align into an ordered hub.
- Keep motion slow and minimal.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No.

Touches Growth Center truth boundaries:

- Lightly.
- Guardrail: only say marketing becomes detached from operations; do not claim automated marketing outcomes here.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- No direct claim.

### Section 3 — Platform Thesis: One Operating System

#### A. Section Role

This section reframes WIZFIELD from software feature list to operating-system category.

Conversion job:

- Make the visitor believe WIZFIELD is not another point solution.
- Introduce core product modules in one coherent system.
- Create enough clarity for the visitor to continue into product proof.

#### B. Final Recommended Copy Map

Eyebrow:

> One Operating System

H2:

> Every field-service workflow connected in one place.

Supporting paragraph:

> WIZFIELD connects the daily operating core of a service business: intake, customers, jobs, estimates, invoices, communication, reports, customer access, growth workflows, and workspace control.

Module bullets or cards:

- Calls & Intake
- Customers & Leads
- Jobs & Scheduling
- Estimates & Invoices
- Messaging & Follow-up
- Reports & Documents
- Portal & Customer Access
- Growth Center
- Multi-Business Workspace Control

CTA:

> See How It Works

CTA role:

- Secondary action; may scroll to Product Preview or Operational Journey.

#### C. Visual Composition

Layout:

- Centered section header.
- Large system map beneath.
- WIZFIELD appears as the central glass operating core.
- Modules orbit or connect around it in a structured grid.

Product visual or diagram needed:

- Platform system map with clear labels.
- Use intelligent routing lines, not decorative spaghetti.

Brand DNA:

- Liquid Platinum background.
- WIZFIELD core uses glass intelligence surface.
- Module cards use calm panels with indigo labels.
- Cyan-to-violet lines communicate connected intelligence.

#### D. Responsive Notes

Desktop:

- Use a wide system map with enough spacing for labels.
- Avoid making the map too dense.

Tablet:

- Convert orbit map to a two-column module grid around a top WIZFIELD core.

Mobile:

- Show WIZFIELD core first, then stacked module cards.
- Keep the concept of one system visible near the top.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `PlatformThesisSection`

Custom visual asset required:

- Yes. System map can be built in CSS/SVG.

Reusable patterns:

- Use card and section header patterns.
- Use CTA button pattern for `See How It Works`.

Motion ideas:

- Slow line energy from central hub to module cards.
- Module cards may lift subtly on hover.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Only if AI is included as an intelligence layer visually.
- Guardrail: do not imply autonomous control over modules.

Touches Growth Center truth boundaries:

- Yes, as a module.
- Guardrail: call it `Growth Center` or `marketing operations`, not `autopilot marketing`.

Touches Language Store truth boundaries:

- Optional module mention only.
- Guardrail: if included, call it `Language Store` and avoid `translate everything`.

Touches Multi-business truth boundaries:

- Yes.
- Guardrail: phrase as `workspace control`, not blended analytics.

### Section 4 — Product Preview: Real Software, Not Concept Art

#### A. Section Role

This section proves WIZFIELD is a credible working product, not a vague platform claim.

Conversion job:

- Build trust through realistic product UI.
- Give buyers a concrete feel for the product shell.
- Support the premium SaaS perception with grounded application visuals.

#### B. Final Recommended Copy Map

Eyebrow:

> Product Preview

H2:

> Built for the daily reality of field operations.

Supporting paragraph:

> From the home dashboard to customer records, job flow, estimates, invoices, calls, and follow-up, WIZFIELD keeps the work visible inside one operating environment.

Feature callouts:

- See the operating picture from the home dashboard.
- Track customers, jobs, estimates, invoices, and communication in context.
- Keep field work and office follow-through connected.
- Surface the next actions operators need to review.

CTA:

> Start Trial

CTA placement:

- Mid-page primary CTA after product proof.

#### C. Visual Composition

Layout:

- Large full-width product UI showcase.
- Section copy may sit above or to the left with callout labels around the mockup.

Product visual needed:

- Realistic WIZFIELD dashboard mockup with:
  - Navigation shell.
  - Today's work panel.
  - Calls or leads panel.
  - Estimate/invoice attention cards.
  - Job or schedule cue.
  - Business Brain review card.

Brand DNA:

- Product UI should be calmer than marketing visuals: 80% operational clarity, 20% controlled intelligent energy.
- Use white panels, indigo hierarchy, subtle cyan/violet active states.
- Glass only for the main product showcase container or select intelligence cards.

#### D. Responsive Notes

Desktop:

- Product mockup should be large enough to read key labels.
- Use callout tags sparingly.

Tablet:

- Reduce callouts and preserve the main dashboard surface.

Mobile:

- Use a cropped product screenshot/mockup or stacked mobile-like cards.
- Do not force an unreadable desktop screenshot.
- Keep `Start Trial` visible after the visual/copy block.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `ProductPreviewSection`

Custom visual asset required:

- Yes. Requires a high-fidelity product mockup or implemented marketing mockup.

Reusable patterns:

- Use existing CTA/button pattern and product-card shell if available.

Motion ideas:

- Gentle card reveal and callout fade-in.
- No fake live analytics counters unless product truth supports the numbers shown.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Yes, if Business Brain card appears.
- Guardrail: use `review`, `surface`, `highlight`, or `draft`; do not use `decides`, `runs`, `sends`, or `schedules`.

Touches Growth Center truth boundaries:

- Optional small preview only.
- Guardrail: no provider engagement metrics, ad ROI, or auto-publishing claims.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- Optional workspace cue.
- Guardrail: active workspace only.

### Section 5 — AI Intelligence Strip

#### A. Section Role

This section creates differentiated wow while staying honest about AI boundaries.

Conversion job:

- Make WIZFIELD feel intelligent and future-facing.
- Explain AI as operator support, not staff replacement.
- Introduce Voice Intake Intelligence as a bounded pilot.

#### B. Final Recommended Copy Map

Eyebrow:

> Intelligent Assistance

H2:

> AI that helps operators see, decide, and follow through.

Supporting paragraph:

> WIZFIELD AI is anchored in your workspace's operational records and designed to support human operators with signals, drafts, and controlled workflows.

Three tiles:

Tile 1:

- Title: `Business Brain`
- Copy: `Highlights important operating signals on the home experience so your team knows what needs review.`
- Microcopy: `Workspace-scoped signals. Human action remains in control.`

Tile 2:

- Title: `Operator Copilot`
- Copy: `Helps create customer SMS follow-up drafts from call context, with review and controlled send behavior.`
- Microcopy: `Draft, review, send. No silent outbound messaging.`

Tile 3:

- Title: `Voice Intake Intelligence — Pilot`
- Copy: `A bounded voice intake pilot for guided call handling, clarification, and human escalation paths.`
- Microcopy: `Pilot program. No guaranteed price, time, or booking commitments.`

Optional CTA:

> Explore WIZFIELD AI

#### C. Visual Composition

Layout:

- Horizontal strip with three premium glass cards on desktop.
- Each card includes a small credible UI vignette.

Product visual needed:

- Business Brain preview card.
- Copilot SMS draft preview with visible `Review` and `Send` control language.
- Voice pilot capsule showing call status and escalation cue.

Brand DNA:

- Slightly higher energy than operational sections.
- Use Electric Cyan and Hyper Violet edge lighting.
- Use glass intelligence surfaces.
- Keep text high contrast and readable.

#### D. Responsive Notes

Desktop:

- Three cards in a row or staggered glass strip.
- Keep `Pilot` label visible on Voice tile.

Tablet:

- Two cards top row, one full-width or centered below.

Mobile:

- Stack cards.
- Ensure `Pilot`, `review`, and `no silent outbound` guardrail microcopy remains visible.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `AiIntelligenceStripSection`

Custom visual asset required:

- Yes. Three small product vignettes or cards.

Reusable patterns:

- Glass card pattern.
- CTA/link pattern.

Motion ideas:

- Slow node pulse around card edges.
- Subtle card lift on hover.
- No robot imagery, fake self-learning animation, or autonomous workflow animation.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Yes, directly.
- Exact guardrail: `WIZFIELD AI surfaces signals and drafts actions for human review; it does not run operations autonomously or send customer messages silently.`

Touches Growth Center truth boundaries:

- Only if Growth suggestions are mentioned.
- Guardrail: `Drafts or opportunities require review; WIZFIELD does not auto-publish.`

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- Lightly through workspace-scoped language.
- Guardrail: `workspace-scoped`, not cross-business AI.

### Section 6 — Growth Center

#### A. Section Role

This section presents Growth Center as an operationally connected marketing layer, not generic social media automation.

Conversion job:

- Show WIZFIELD helps the business grow beyond back-office operations.
- Explain the signal-to-draft-to-campaign workflow.
- Preserve explicit publishing truth.

#### B. Final Recommended Copy Map

Eyebrow:

> Growth Center

H2:

> Turn operational signals into marketing momentum.

Supporting paragraph:

> Growth Center connects marketing work to what is already happening inside the business: opportunities, drafts, campaigns, channel targets, explicit publishing jobs, and internal analytics.

Flow copy:

> Signal -> Opportunity -> Draft -> Campaign -> Publish Job -> Internal Analytics

Bullets:

- Surface CRM-derived marketing opportunities.
- Compose multi-platform drafts and variants.
- Organize campaigns and campaign slots.
- Publish intentionally through explicit publish-now or scheduled publish jobs.
- Review internal funnel analytics without pretending to be an ad ROI dashboard.

CTA:

> Explore Growth Center

#### C. Visual Composition

Layout:

- Split section.
- Left: copy and CTA.
- Right: flow visual plus mini Growth Center UI.

Product visual needed:

- Flow diagram and compact Growth Center panel with opportunities, draft, campaign, publish job, and analytics pulse.

Brand DNA:

- Liquid Platinum base.
- Flow line uses cyan-to-violet intelligent edge energy.
- Product panels use clean light surfaces with selective glass.
- Avoid social-media cartoon art.

#### D. Responsive Notes

Desktop:

- Copy left, visual right.
- Flow should be readable without wrapping awkwardly.

Tablet:

- Copy above visual or balanced two-column depending width.

Mobile:

- Stack flow as vertical sequence.
- Keep `explicit publishing` microcopy visible.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `GrowthCenterSection`

Custom visual asset required:

- Yes. Can be CSS/SVG flow plus product cards.

Reusable patterns:

- Section layout, CTA, product card, flow-step components.

Motion ideas:

- Gentle line progression from signal to analytics.
- Draft card may slide into campaign card on scroll.
- Do not animate anything as auto-posting.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Only if AI copy generation is implied.
- Guardrail: do not say AI generates Growth Center copy at runtime; current Growth Center truth says AI copy generation runtime is out of scope.

Touches Growth Center truth boundaries:

- Yes, directly.
- Exact guardrail: `Growth Center creates opportunities, drafts, campaigns, and explicit publish jobs; publishing is always intentional and never silent auto-posting.`

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- No direct claim.

### Section 7 — Language Store

#### A. Section Role

This section introduces a distinctive product differentiator with high empathy and operational usefulness.

Conversion job:

- Show WIZFIELD understands multilingual field teams.
- Explain the two-layer product model clearly.
- Keep claims narrow to real V1 scope.

#### B. Final Recommended Copy Map

Eyebrow:

> Language Store

H2:

> Let your team work in their language. Keep customer-facing output professional.

Supporting paragraph:

> Language Store helps organizations enable worker languages, lets each user choose a preferred language per workspace, and supports reviewed English customer-facing output for specific estimate and invoice line flows.

Bullets:

- Enable worker languages at the organization level.
- Let each user choose a preferred language for each active organization.
- Generate English customer-output drafts for supported estimate and invoice line-item text.
- Review and approve the final English output before it becomes customer-facing.
- Preserve snapshot-safe historical document output.

CTA:

> Explore Language Store

#### C. Visual Composition

Layout:

- Split-view product visual.
- One side shows worker-side language preference and source text.
- Other side shows reviewed English customer-facing output.
- Include a small snapshot-safe document cue.

Product visual needed:

- Language preference card.
- Estimate/invoice line-item editor card.
- English output review card.
- Snapshot-safe final output badge.

Brand DNA:

- Calm and precise.
- Use Digital Indigo for trust and legibility.
- Use subtle cyan/violet accents around translation/review flow.
- Do not turn it into a playful translation app visual.

#### D. Responsive Notes

Desktop:

- Side-by-side source/review/final panels.
- Make the supported scope clear near the visual.

Tablet:

- Two panels side by side or stacked in a short flow.

Mobile:

- Stack in order: language preference -> source text -> reviewed English output -> snapshot-safe final.
- Keep the `specific estimate and invoice line flows` limitation visible.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `LanguageStoreSection`

Custom visual asset required:

- Yes. Requires product-specific split flow.

Reusable patterns:

- Glass card, step card, CTA/link patterns.

Motion ideas:

- Calm transition from source text to reviewed English output.
- No magical instant-translate animation across the entire app.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Potentially if translation provider feels AI-like.
- Guardrail: do not call it autonomous AI; frame it as reviewed English customer-output generation.

Touches Growth Center truth boundaries:

- No.

Touches Language Store truth boundaries:

- Yes, directly.
- Exact guardrail: `Language Store supports worker language preference per organization and reviewed English customer-output generation for specific estimate and invoice line-item flows; it does not translate the entire app or all customer communication.`

Touches Multi-business truth boundaries:

- Yes, because user preference is per organization.
- Guardrail: `preferred language per active organization`, not global cross-org behavior.

### Section 8 — Multi-Business Control

#### A. Section Role

This section sells one of WIZFIELD's strongest structural differentiators for ambitious owners and operators.

Conversion job:

- Make multi-business support visible as a product thesis.
- Show separated workspace context, not blended data.
- Connect growth ambition to operational control.

#### B. Final Recommended Copy Map

Eyebrow:

> Multi-Business Control

H2:

> Run one business — or several — without losing context.

Supporting paragraph:

> WIZFIELD supports owners who operate multiple service businesses through explicit workspace switching, separated organization context, and shared billing architecture designed for scale.

Bullets:

- One user identity can access multiple business workspaces.
- Switch organizations through an explicit workspace switcher.
- The dashboard, customers, jobs, estimates, invoices, settings, search, calls, messaging, reports, booking, and portal context change with the active workspace.
- Keep business data separated by organization.
- Support plan structures built for one or more businesses.

CTA:

> Explore Multi-Business

#### C. Visual Composition

Layout:

- Large workspace switcher mockup.
- Show `Business A`, `Business B`, `Business C` as separate workspaces.
- Show active workspace changing the visible dashboard context.

Product visual needed:

- Workspace switcher.
- Active organization context label.
- Dashboard state before/after switch.

Brand DNA:

- Use clean glass surfaces and indigo workspace labels.
- Use cyan/violet edge energy to show controlled switching, not data blending.

#### D. Responsive Notes

Desktop:

- Visual can show switcher left and active workspace dashboard right.

Tablet:

- Compress to switcher over dashboard card.

Mobile:

- Show a dropdown-like workspace switcher card followed by active dashboard preview.
- Keep copy about separated context visible.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `MultiBusinessControlSection`

Custom visual asset required:

- Yes. Product-specific workspace-switch visual.

Reusable patterns:

- Product card, pill, CTA/link components.

Motion ideas:

- Controlled transition where dashboard labels change after a workspace switch.
- Do not animate cross-business merged data.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No.

Touches Growth Center truth boundaries:

- No.

Touches Language Store truth boundaries:

- Lightly if per-organization preference is referenced; not recommended here.

Touches Multi-business truth boundaries:

- Yes, directly.
- Exact guardrail: `WIZFIELD supports explicit workspace switching and separated active-organization context; it does not claim cross-business intelligence, blended dashboards, or merged analytics.`

### Section 9 — Operational Journey

#### A. Section Role

This section maps WIZFIELD to the actual lifecycle of field-service work.

Conversion job:

- Help buyers picture daily use.
- Show workflow continuity from first contact through growth opportunity.
- Reinforce that WIZFIELD is a system, not isolated tools.

#### B. Final Recommended Copy Map

Eyebrow:

> Operational Journey

H2:

> From first call to paid invoice — without losing the thread.

Supporting paragraph:

> WIZFIELD keeps the operating context connected as work moves from intake to customer record, job, estimate, approval, invoice, follow-up, and growth opportunity.

Journey steps:

- Call / Lead
- Customer
- Job
- Estimate
- Approval
- Invoice
- Follow-up
- Growth Opportunity

Microcopy:

> Each step should carry context forward instead of forcing your team to rebuild the story.

#### C. Visual Composition

Layout:

- Horizontal rail or stepped glass sequence on desktop.
- Each step is a small card with icon/label and one-line description.

Product visual needed:

- Operational lifecycle diagram.
- Optional small product card previews embedded in select steps.

Brand DNA:

- Liquid Platinum field.
- Thin cyan-to-violet route line.
- Glass cards only where hierarchy benefits.
- Premium spacing between steps.

#### D. Responsive Notes

Desktop:

- Horizontal rail with all steps visible.

Tablet:

- Two-row rail or compact grid.

Mobile:

- Vertical timeline.
- Keep the lifecycle sequence intact.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `OperationalJourneySection`

Custom visual asset required:

- Can be built with reusable step components and SVG/CSS line.

Reusable patterns:

- Step card, icon, section header components.

Motion ideas:

- Gentle progression along rail on scroll.
- No fast conveyor-belt effect.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No direct AI claim unless follow-up card mentions Copilot.
- Guardrail: if mentioned, say `draft follow-up for review`.

Touches Growth Center truth boundaries:

- Yes, final step.
- Guardrail: `Growth Opportunity`, not guaranteed lead generation.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- No.

### Section 10 — Built from the Field, Built to Scale

#### A. Section Role

This section gives the brand credibility without making the homepage founder-centric or chimney-only.

Conversion job:

- Ground WIZFIELD in real field-service operations.
- Preserve broad field-service positioning.
- Explain why the product feels practical, not abstract.

#### B. Final Recommended Copy Map

Eyebrow:

> Field Credibility

H2:

> Built from real field operations. Designed for modern service businesses.

Supporting paragraph:

> WIZFIELD was shaped by the daily pressure of service work: calls, customers, jobs, estimates, invoices, follow-up, scheduling, communication, documents, and growth. That field reality becomes a broader operating system for owners who want clarity now and scale later.

Supporting bullets:

- Grounded in real service-business workflows.
- Designed for broad field-service operations, not a narrow single-trade tool.
- Structured for owners who want professional systems before complexity takes over.

Optional proof line:

> Real field credibility should support the thesis, not overpower it.

#### C. Visual Composition

Layout:

- Editorial-style credibility section.
- Could use a tasteful field-operation image treatment blended with product schematic, or a premium operational blueprint.

Product visual needed:

- Not necessarily a product mockup.
- Recommended: premium field-to-system schematic instead of stock trade photography.

Brand DNA:

- Bright, refined, restrained.
- Avoid gritty truck-and-tools stock cliches.
- Use Digital Indigo and subtle energy lines to connect field reality to operating-system design.

#### D. Responsive Notes

Desktop:

- Split copy and visual.
- Keep section calmer after high-energy differentiator sections.

Tablet:

- Stack copy above visual.

Mobile:

- Use copy-first layout.
- Avoid large decorative imagery that pushes message too far down.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `FieldCredibilitySection`

Custom visual asset required:

- Recommended, not mandatory.
- If no asset is available, use a polished schematic/blueprint card.

Reusable patterns:

- Section header, card, bullet list.

Motion ideas:

- Minimal. This section should feel grounded.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No.

Touches Growth Center truth boundaries:

- No.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- No direct claim.

### Section 11 — Pricing Preview

#### A. Section Role

This section reduces pricing uncertainty and routes high-intent visitors toward plan evaluation.

Conversion job:

- Show Starter and Pro are self-serve visible.
- Position Business as Contact Sales.
- Create another strong `Start Trial` moment.

#### B. Final Recommended Copy Map

Eyebrow:

> Pricing Preview

H2:

> Plans that scale with how you operate.

Supporting paragraph:

> Start with the operating system your business needs today, then scale into more workspaces, advanced structure, and sales-assisted support as your operation grows.

Plan cards:

Starter:

- Title: `Starter`
- Positioning: `For one service business getting organized in one operating system.`
- Business count note: `1 business`
- CTA: `Start Trial`

Pro:

- Title: `Pro`
- Positioning: `For growing operators who need more room, more capability, and up to three businesses.`
- Business count note: `Up to 3 businesses`
- CTA: `Start Trial`
- Optional label: `Recommended for growing teams`

Business:

- Title: `Business`
- Positioning: `For larger or more complex operators that need expanded structure and sales-assisted setup.`
- Business count note: `Expanded model`
- CTA: `Contact Sales`

Secondary CTA:

> View Full Pricing

#### C. Visual Composition

Layout:

- Three pricing cards.
- Pro card may be visually emphasized but not exaggerated.
- Starter and Pro show `Start Trial`; Business shows `Contact Sales`.

Brand DNA:

- Clean, calm, premium.
- Use Digital Indigo hierarchy.
- Pro emphasis can use restrained cyan/violet edge energy.
- Avoid over-glowing pricing cards.

#### D. Responsive Notes

Desktop:

- Three cards in a row.

Tablet:

- Starter and Pro side by side, Business full-width below or three equal cards if space allows.

Mobile:

- Stack cards.
- Preserve CTA per card.
- Keep `Start Trial` visible on Starter and Pro.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `PricingPreviewSection`

Custom visual asset required:

- No.

Reusable patterns:

- Pricing card, CTA/button, badge patterns.

Motion ideas:

- Subtle card lift on hover.
- No aggressive pricing animation.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No, unless feature bullets are added. Avoid AI feature detail in preview pricing.

Touches Growth Center truth boundaries:

- No, unless feature bullets are added. Avoid plan entitlement claims not confirmed in Growth Center truth.

Touches Language Store truth boundaries:

- Potentially if plan includes Language Store. Recommended: do not include detailed Language Store entitlement counts on homepage preview unless pricing page is ready to explain them.

Touches Multi-business truth boundaries:

- Yes.
- Guardrail: Starter `1 business`, Pro `up to 3 businesses`, Business `expanded model / Contact Sales`; do not claim a fixed Business cap.

### Section 12 — Product Confidence / Docs Strip

#### A. Section Role

This section turns Docs in the top nav into a credibility asset.

Conversion job:

- Signal product maturity.
- Reassure serious evaluators that WIZFIELD is documented and structured.
- Offer a secondary path for high-consideration visitors without competing with trial.

#### B. Final Recommended Copy Map

Eyebrow:

> Product Confidence

H2:

> Built like a real platform. Documented like one.

Supporting paragraph:

> WIZFIELD includes product documentation so serious buyers and operators can understand the system, its workflows, and its operating boundaries clearly.

CTA:

> Explore Docs

Secondary microcopy:

> Prefer to try it now? Start with a trial and come back to Docs anytime.

Optional secondary CTA:

> Start Trial

#### C. Visual Composition

Layout:

- Calm horizontal strip.
- Left: Docs copy.
- Right: documentation page preview card or code/documentation surface.

Product visual needed:

- Docs preview card using quiet WIZFIELD brand translation.

Brand DNA:

- Quiet intellectual intensity.
- Liquid Platinum background.
- Digital Indigo headings.
- Sparse cyan/violet micro accents.
- Avoid heavy hero glow.

#### D. Responsive Notes

Desktop:

- Horizontal strip with copy and docs visual.

Tablet:

- Split or stack depending width.

Mobile:

- Copy first, then Docs CTA, then optional docs preview.
- Ensure `Start Trial` remains accessible nearby if included.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `DocsConfidenceStripSection`

Custom visual asset required:

- Optional; can be a styled docs-preview card.

Reusable patterns:

- CTA/link, card, section strip components.

Motion ideas:

- Minimal hover on docs card.
- No heavy animation.

#### F. Claims Safety Check

Touches AI truth boundaries:

- No, unless docs preview includes AI docs. Avoid specific claims in preview.

Touches Growth Center truth boundaries:

- No.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- No.

### Section 13 — Final CTA

#### A. Section Role

This section closes the page with direct action after belief has been built.

Conversion job:

- Re-state the core promise.
- Present the primary conversion one final time.
- Offer pricing as a secondary action for evaluators not yet ready.

#### B. Final Recommended Copy Map

Eyebrow:

> Ready for Operational Clarity?

H2:

> Operate smarter. Grow further.

Supporting paragraph:

> Bring calls, jobs, customers, estimates, invoices, communication, intelligence, growth workflows, and workspace control into one field-service operating system.

Primary CTA:

> Start Trial

Secondary CTA:

> View Pricing

Final reassurance line:

> Built for real field work. Designed for the next generation of service businesses.

#### C. Visual Composition

Layout:

- Centered final CTA panel.
- Large glass intelligence surface on Liquid Platinum base.
- Subtle W intelligence graph motif in background.

Brand DNA:

- Premium, spacious, bright.
- `wf-cta-primary` should be visually prominent.
- Controlled cyan-to-violet edge energy around the CTA panel.
- Avoid dark terminal-like closing block.

#### D. Responsive Notes

Desktop:

- Centered CTA panel with strong spacing above and below.

Tablet:

- Same centered layout with slightly reduced width.

Mobile:

- Stack CTAs vertically or full-width depending button system.
- Primary CTA first and visually dominant.

#### E. Implementation Notes for Later Build

Suggested section component name:

- `FinalCtaSection`

Custom visual asset required:

- No, but background motif can reuse W intelligence graph visual language.

Reusable patterns:

- CTA button, section panel, glass surface.

Motion ideas:

- Slow ambient glow.
- CTA hover shimmer restraint.

#### F. Claims Safety Check

Touches AI truth boundaries:

- Lightly through `intelligence`.
- Guardrail: use `intelligence` as product category language, not autonomy.

Touches Growth Center truth boundaries:

- Lightly through `growth workflows`.
- Guardrail: no guaranteed growth outcome.

Touches Language Store truth boundaries:

- No.

Touches Multi-business truth boundaries:

- Lightly through `workspace control`.
- Guardrail: no cross-business analytics claim.

## 5. Required Visual Asset Inventory for Homepage

Required assets:

- Hero Operating System Visual: flagship glass product mockup with operations, AI, Growth Center, and workspace cues.
- Fragmentation-to-Operating-System Visual: refined problem transformation from disconnected cards to unified system.
- Platform System Map: central WIZFIELD hub with operational modules connected by intelligent edge energy.
- Product Dashboard Preview: realistic WIZFIELD dashboard/product shell mockup.
- AI Business Brain Preview: workspace-scoped signal/review card.
- AI Operator Copilot SMS Draft Preview: draft, review, controlled send behavior.
- Voice Intake Intelligence — Pilot Capsule: bounded pilot call-handling cue with human escalation.
- Growth Center Flow Visual: `Signal -> Opportunity -> Draft -> Campaign -> Publish Job -> Internal Analytics`.
- Growth Center UI Mockup: opportunities, drafts, campaigns, explicit publish jobs, analytics pulse.
- Language Store Split Flow: worker language preference, source text, reviewed English output, snapshot-safe final output.
- Multi-Business Workspace Switcher: explicit workspace switching with separated active context.
- Operational Journey Rail: call/lead through growth opportunity lifecycle.
- Pricing Card Set: Starter, Pro, Business Contact Sales.
- Docs Preview Card: calm product documentation surface.
- Final CTA W Intelligence Motif: subtle connected-node W graph background.

Asset quality rules:

- Product visuals must look like credible WIZFIELD product, not vague SaaS screens.
- Use Liquid Platinum base and bright product surfaces.
- Use glass intelligence surfaces only where premium hierarchy benefits.
- Use intelligent edge energy sparingly for connection, intelligence, and active states.
- Avoid generic abstract blobs as primary storytelling visuals.
- Avoid dark cyberpunk, robots, cartoon mascots, and fake dashboard metrics.

## 6. Homepage CTA Placement Matrix

Primary CTA: `Start Trial`

- Top navigation: persistent primary action on desktop; available in mobile menu or sticky mobile CTA if used.
- Hero: primary conversion action, visually dominant with `wf-cta-primary`.
- Product Preview: mid-page conversion after product credibility is established.
- Pricing Preview: CTA on Starter and Pro cards.
- Docs Strip: optional secondary placement as a companion to `Explore Docs`.
- Final CTA: dominant closing action.

Secondary CTAs:

- Hero: `See How It Works`.
- Platform Thesis: `See How It Works` or anchor behavior from hero.
- AI Strip: `Explore WIZFIELD AI`.
- Growth Center: `Explore Growth Center`.
- Language Store: `Explore Language Store`.
- Multi-Business Control: `Explore Multi-Business`.
- Pricing Preview: `View Full Pricing`.
- Business plan card: `Contact Sales`.
- Docs Strip: `Explore Docs`.
- Final CTA: `View Pricing`.

CTA hierarchy rules:

- `Start Trial` is always the most visually important action.
- `See How It Works` is a curiosity/research path, not equal weight to trial.
- `Contact Sales` belongs primarily to Business/high-complexity buyers.
- `Docs` is a confidence path and should not displace trial.

## 7. Homepage Claims-Safety Register

AI safety:

- Allowed homepage framing: Business Brain, Operator Copilot, Voice Intake Intelligence — Pilot, human review, controlled send behavior, workspace-scoped operational signals.
- Required safe language: `surfaces`, `highlights`, `drafts`, `review`, `controlled send`, `pilot`, `human escalation`.
- Forbidden language: `AI runs your business`, `autonomous scheduling`, `AI sends messages automatically`, `silent customer messaging`, `full AI phone replacement`, `self-learning`, `guaranteed ROI`.
- Homepage guardrail: `WIZFIELD AI supports operators with signals, drafts, and reviewable workflows; it does not replace staff or operate the business autonomously.`

Growth Center safety:

- Allowed homepage framing: operational signals to opportunities, drafts, campaigns, explicit publish jobs, internal analytics.
- Required safe language: `you choose when to publish`, `explicit publishing workflow`, `internal analytics`, `drafts and campaigns`.
- Forbidden language: `auto-posts`, `autopilot marketing`, `guaranteed lead generation`, `ROI dashboard`, `ad performance dashboard`, shipped Instagram publishing if not true.
- Homepage guardrail: `Growth Center helps plan and draft marketing from operational signals; publishing remains explicit and controlled.`

Language Store safety:

- Allowed homepage framing: worker language enablement, per-organization user preference, reviewed English customer-output generation for specific estimate/invoice line flows, snapshot-safe output.
- Required safe language: `supported estimate and invoice line flows`, `reviewed English output`, `preferred language per organization`, `snapshot-safe historical output`.
- Forbidden language: `translate the entire app`, `universal translation`, `bilingual PDFs`, `translated SMS/email`, `all customer-facing fields`.
- Homepage guardrail: `Language Store supports internal worker language preferences and reviewed English output for specific estimate and invoice line-item workflows; it is not universal app or document translation.`

Multi-business safety:

- Allowed homepage framing: one user identity with multiple workspaces, explicit workspace switching, active organization context, separated operating context.
- Required safe language: `workspace switching`, `active workspace`, `separated organization context`, `one or more businesses`.
- Forbidden language: `cross-business intelligence dashboard`, `blended multi-org analytics`, `merged data`, `all businesses in one analytics view`.
- Homepage guardrail: `WIZFIELD supports explicit workspace switching and separated business context; it does not claim blended cross-business analytics.`

Pricing safety:

- Allowed homepage framing: Starter visible, Pro visible, Business Contact Sales.
- Current business-count truth: Starter = 1 business, Pro = up to 3 businesses, Business = expanded local model with no fixed hard cap currently enforced in local repo truth.
- Homepage guardrail: `Use fixed business counts only for Starter and Pro; describe Business as sales-assisted expanded structure unless owner-approved pricing copy defines more.`

Field credibility safety:

- Allowed homepage framing: built from real field operations, designed for broad field-service businesses.
- Guardrail: real field credibility should support the brand thesis but not reduce WIZFIELD to a chimney-only tool.

## 8. Build Readiness Verdict

GO — Homepage wireframe and copy map is ready for owner review

Rationale:

- The required homepage section order is preserved.
- Primary and secondary CTAs match locked strategy.
- Docs remains in top navigation and is reinforced by a confidence strip.
- Broad field-service positioning is preserved.
- Real field credibility is present but does not dominate the thesis.
- Pricing posture follows Starter, Pro, Business Contact Sales.
- Voice AI appears as a bounded Pilot.
- The homepage sells Operational Control, Intelligent Assistance, Growth Enablement, and Multi-Business Structure.
- Visual direction is aligned to the official WIZFIELD Brand DNA.
- AI, Growth Center, Language Store, and Multi-Business claims are bounded by canonical product truth.

## 9. Open Questions or Required Owner Decisions, if any

No strategic blockers were found.

Owner review items before Task 4 copywriting:

- Confirm whether the hero proof line should remain `Operations. Intelligence. Growth. Multi-Business Control.` or be softened to `Operations, intelligence, growth, and workspace control.`
- Confirm whether homepage pricing preview should mention Language Store plan entitlements or leave those details to the pricing page.
- Confirm whether `Explore Multi-Business` should link to a dedicated page at launch or scroll to the homepage section until that route exists.
- Confirm final Docs destination: external docs URL or internal `/docs` route.

