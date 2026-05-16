# WIZFIELD Visual Brand DNA — Source of Truth

**Document status:** Canonical visual identity and design-system direction  
**Brand:** WIZFIELD  
**Product identity:** A smart, futuristic operating system for field-service operations  
**Scope:** Brand identity, website, product UI, app icon, documentation surfaces, visual tokens, implementation direction, and non-negotiable design rules  
**Authority:** This document is the single source of truth for all future visual, UI, and marketing design decisions related to WIZFIELD.

---

# 1. Purpose of This Document

This document locks the final visual and design DNA of **WIZFIELD**.

WIZFIELD must not look like a generic SaaS company, a boring enterprise dashboard, or a dark cyberpunk technology experiment. The brand must express a very specific contrast:

> **Crystal-clear operational order, energized by visible intelligent technology.**

The visual system combines:

1. **A bright, clean, optimistic base** that communicates structure, clarity, authority, and trust.
2. **Neon-tech edge lighting** that communicates artificial intelligence, automation, connected intelligence, and forward motion.

This duality is the permanent brand signature of WIZFIELD.

---

# 2. Brand Core

## 2.1 WIZFIELD Is

WIZFIELD is:

- Futuristic
- Sophisticated
- Premium
- Clean
- Light
- Orderly
- Authoritative
- Technological
- Intelligent
- Operationally precise
- Designed for growth and control

WIZFIELD should feel like:

> **A next-generation operating system that brings command, intelligence, and clarity to complex field operations.**

---

## 2.2 WIZFIELD Is Not

WIZFIELD is not:

- Dark, aggressive cyberpunk
- Gritty or dystopian
- Toy-like or cute
- Cartoonish
- Cluttered
- Old-fashioned
- Generic blue SaaS
- Visually cold in a lifeless corporate way
- A random collection of gradients and glass effects

Any design direction that drifts into these areas is off-brand and must be rejected.

---

# 3. Core Visual Thesis

## 3.1 The Contrast Concept

The WIZFIELD visual DNA is based on a deliberate contrast:

### A. Crystal Base
A luminous, near-white operational field representing:

- Order
- Clarity
- Clean data
- Control
- Precision
- Professional software

### B. Intelligent Edge Energy
Digital light emerges through:

- Electric cyan glow
- Hyper-violet glow
- Smooth gradient currents
- Connected nodes
- Glass surfaces that catch colored light

This represents:

- AI
- Automation
- Intelligence in motion
- Connected systems
- Advanced orchestration

---

## 3.2 Brand Formula

The visual formula of WIZFIELD is:

```text
Bright Operational Clarity
+ Glass Intelligence Surfaces
+ Cyan-to-Violet Digital Energy
+ Precision Typography
+ Controlled Premium Spacing
= WIZFIELD
```

---

# 4. Official Color Palette Tokens

The following palette is locked as the official WIZFIELD core visual system.

## 4.1 Primary Brand Tokens

| Token | Name | Hex | Primary Role |
|---|---|---:|---|
| `--wf-base` | Liquid Platinum | `#F8FAFC` | Main background, page canvas, neutral operating field |
| `--wf-indigo` | Digital Indigo | `#6366F1` | Core brand identity, typography accent, interface authority |
| `--wf-cyan` | Electric Cyan | `#00F0FF` | Intelligent action, energy, links, glow, primary tech highlights |
| `--wf-violet` | Hyper Violet | `#7000FF` | Secondary energy, advanced intelligence, gradient balance |
| `--wf-pink` | Plasma Pink | `#FF007A` | Rare critical accent, alert points, tiny high-attention markers |

---

## 4.2 Palette Meaning

### Liquid Platinum — `#F8FAFC`
Represents the spacious, clean, premium operating field of WIZFIELD.

Use for:

- Main page backgrounds
- Marketing sections
- Product shells
- Documentation backgrounds
- Spacious blank areas

Do not replace it with:

- Pure white everywhere
- Gray SaaS backgrounds
- Dark enterprise panels

---

### Digital Indigo — `#6366F1`
Represents brand authority and technological identity.

Use for:

- Brand text accents
- Navigation active states
- Charts where authority or primary identity matters
- Secondary buttons
- Non-glow emphasis

This color replaces boring default black/blue SaaS branding. It adds personality without sacrificing seriousness.

---

### Electric Cyan — `#00F0FF`
Represents visible technology, activation, intelligence, and motion.

Use for:

- Links
- Active signal lines
- Highlight strokes
- Glow edges
- Hero animations
- Selected smart features
- Primary futuristic light source

Cyan should feel energetic, not childish.

---

### Hyper Violet — `#7000FF`
Represents depth, premium intelligence, and advanced systems.

Use for:

- Gradient completion from cyan
- Secondary neon energy
- AI surfaces
- Futuristic accents
- Visual depth in illustrations and iconography

---

### Plasma Pink — `#FF007A`
Represents disruption and rare critical emphasis.

Use only for:

- Tiny notification dots
- Critical alerts
- Micro attention points
- Exceptional status markers

Do not use Plasma Pink as a common decoration color. Overuse destroys the premium balance.

---

# 5. Extended Functional Color System

The core five brand colors define the DNA. Supporting UI colors are allowed only when they preserve that DNA.

## 5.1 Neutral Surface Tokens

```css
:root {
  --wf-base: #F8FAFC;
  --wf-surface-0: rgba(255, 255, 255, 0.84);
  --wf-surface-1: rgba(255, 255, 255, 0.72);
  --wf-surface-2: rgba(255, 255, 255, 0.58);
  --wf-surface-strong: rgba(255, 255, 255, 0.92);
  --wf-border-soft: rgba(255, 255, 255, 0.72);
  --wf-border-faint: rgba(99, 102, 241, 0.12);
  --wf-shadow-soft: 0 20px 60px rgba(77, 91, 145, 0.12);
  --wf-shadow-card: 0 18px 48px rgba(77, 91, 145, 0.10);
}
```

---

## 5.2 Text Tokens

```css
:root {
  --wf-text-primary: #172033;
  --wf-text-secondary: #53607A;
  --wf-text-muted: #7C89A5;
  --wf-text-brand: #6366F1;
  --wf-text-inverse: #FFFFFF;
}
```

Guidance:

- Body copy must remain readable and stable.
- Do not use glowing cyan body text.
- Cyan and violet are highlights, not replacements for content readability.

---

## 5.3 Status Tokens

The WIZFIELD brand may use familiar operational status colors, but they must be visually harmonized with the premium system.

```css
:root {
  --wf-success: #16C79A;
  --wf-warning: #F5A623;
  --wf-danger: #FF4D7E;
  --wf-info: #38BDF8;
}
```

Status colors must support usability first. They are functional utilities, not headline brand colors.

---

# 6. Signature Gradient System

The official WIZFIELD gradient is locked as:

```css
background: linear-gradient(135deg, #00F0FF 0%, #6366F1 48%, #7000FF 100%);
```

## 6.1 Gradient Use Cases

Use the signature gradient for:

- The W logo symbol
- Primary glow strokes
- Smart feature illustrations
- CTA energy fills
- Hero ambient lighting
- App icon internal light
- Selected operational intelligence moments

## 6.2 Gradient Restrictions

Do not:

- Use random rainbow gradients
- Use orange/yellow gradients as visual identity
- Apply full gradient fills to long body copy
- Cover the entire website with intense gradients
- Use gradient overload on every card

The gradient is a **controlled energy system**, not wallpaper.

---

# 7. Logo System — Non-Negotiable Rules

## 7.1 The W Symbol

The WIZFIELD brand symbol is a connected **W-shaped intelligence graph**.

It must always preserve:

1. **Connected edges**
2. **Visible luminous nodes**
3. **Cyan-to-violet energy transition**
4. **A sense of intelligence flowing through a system**
5. **Subtle neon emission even on a light background**

The W is not a plain letter. It is a symbol of:

- Field routes
- Workflow logic
- Business orchestration
- AI connectivity
- Operational nervous system

---

## 7.2 Logo Gradient Rule

```css
--wf-logo-gradient: linear-gradient(135deg, #00F0FF 0%, #6366F1 48%, #7000FF 100%);
```

The gradient should visually flow:

```text
Left / beginning = Cyan energy
Center = Indigo intelligence
Right / completion = Violet power
```

---

## 7.3 Logo Glow Rule

```css
--wf-logo-glow:
  0 0 10px rgba(0, 240, 255, 0.42),
  0 0 24px rgba(112, 0, 255, 0.26),
  0 0 42px rgba(99, 102, 241, 0.18);
```

The logo should glow enough to feel alive, but never enough to become blurry or childish.

---

## 7.4 Node Styling

Logo node treatment:

```css
--wf-node-fill: rgba(255, 255, 255, 0.98);
--wf-node-border: rgba(255, 255, 255, 0.92);
--wf-node-ring-cyan: rgba(0, 240, 255, 0.60);
--wf-node-ring-violet: rgba(112, 0, 255, 0.52);
```

Recommended visual behavior:

- Center fill remains bright / clean.
- Glow ring inherits from the local gradient side.
- Nodes should look like intelligent junctions, not decorative bubbles.

---

## 7.5 Logo Forms

WIZFIELD must maintain these three official logo variants:

### A. Full Horizontal Brand Logo

```text
[ W Intelligence Symbol ]  WIZFIELD
```

Use for:

- Website header
- Sales deck cover
- Documentation top bar
- Product sign-in surfaces

### B. Standalone W Symbol

Use for:

- App icon
- Favicon
- Product loading screen
- Compact mobile header
- Badge / watermark

### C. Monochrome Utility Version

Use only for:

- Technical legal PDFs
- Small internal metadata placements
- One-color limitations

Even in monochrome, the node structure must remain intact.

---

# 8. Typography System

## 8.1 Primary Brand Typeface — Ethocen

**Use for:**

- Logo wordmark direction
- Hero brand headlines when appropriate
- High-impact display phrases
- Premium futuristic title moments

Desired qualities:

- Technological
- Geometric
- Clean cuts
- Elevated and distinctive
- Not playful

---

## 8.2 Interface and Content Typeface — Inter

**Use for:**

- Product interface
- Website paragraphs
- Navigation
- Labels
- Tables
- Documentation
- Dashboard data
- Forms

Inter is mandatory for usability-heavy content because it provides extreme readability and scale stability.

---

## 8.3 Type Hierarchy Guidance

```css
:root {
  --wf-font-display: "Ethocen", "Inter", sans-serif;
  --wf-font-ui: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### Suggested Sizes

| Role | Size | Weight | Notes |
|---|---:|---:|---|
| Hero H1 | 64–84px | 700 | Marketing use only |
| Section H2 | 40–52px | 650–700 | Large sections |
| Product Page H1 | 32–40px | 650 | App/doc page headers |
| Card Title | 18–22px | 600 | Interface cards |
| Body | 15–18px | 400–500 | Long-form text |
| UI Label | 12–14px | 500–600 | Controlled uppercase only when useful |
| Data Value | 24–44px | 600–700 | Dashboard metrics |

---

# 9. Materiality — Glassmorphism Rules

Glassmorphism is a central material rule of WIZFIELD.

The product must feel as though intelligence appears through layered glass interfaces sitting above a clean operational field.

---

## 9.1 Official Glass Surface Recipe

```css
.wf-glass {
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 24px 80px rgba(77, 91, 145, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
}
```

---

## 9.2 Strong Glass Surface

For hero cards, top product cards, and premium system panels:

```css
.wf-glass-strong {
  background: rgba(255, 255, 255, 0.80);
  border: 1px solid rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow:
    0 28px 88px rgba(77, 91, 145, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.90);
}
```

---

## 9.3 Light Panel Surface

For dense product layouts where excessive glass would reduce readability:

```css
.wf-panel {
  background: rgba(255, 255, 255, 0.90);
  border: 1px solid rgba(99, 102, 241, 0.10);
  box-shadow: 0 16px 40px rgba(77, 91, 145, 0.08);
}
```

---

## 9.4 Glass Restrictions

Do not:

- Make every single UI element fully transparent
- Sacrifice legibility for blur effects
- Use dark smoke-glass styles as the default
- Use noisy frosted textures that look cheap
- Create glass panels with low contrast text

Glass is a **premium surface language**, not a gimmick.

---

# 10. Glow System

Glow is WIZFIELD’s visible intelligence layer.

It must be selective, directional, and premium.

---

## 10.1 Cyan Glow Token

```css
--wf-glow-cyan:
  0 0 14px rgba(0, 240, 255, 0.30),
  0 0 34px rgba(0, 240, 255, 0.18);
```

---

## 10.2 Violet Glow Token

```css
--wf-glow-violet:
  0 0 14px rgba(112, 0, 255, 0.28),
  0 0 36px rgba(112, 0, 255, 0.18);
```

---

## 10.3 Hero Ambient Glow

```css
.wf-hero-ambient {
  background:
    radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.18), transparent 32%),
    radial-gradient(circle at 76% 28%, rgba(112, 0, 255, 0.16), transparent 34%),
    radial-gradient(circle at 52% 78%, rgba(99, 102, 241, 0.10), transparent 40%);
}
```

---

## 10.4 Glow Usage Rules

Use glow for:

- Logo
- Hero signal lines
- App icon energy
- Smart CTA edge
- Highlight states
- AI moments
- Premium visualization details

Avoid glow for:

- Paragraph text
- Entire tables
- Every icon
- Every button
- Background overexposure

The correct feeling is:

> **Technology is present and alive — not screaming.**

---

# 11. Website Direction

## 11.1 Marketing Website Feeling

The website must feel like:

- A bright, premium SaaS product
- A serious system with futuristic energy
- A platform built to run real businesses
- More advanced than traditional field-service software

---

## 11.2 Website Hero Formula

The homepage hero should generally follow this structure:

```text
Bright liquid-platinum field
+ refined top navigation
+ strong operational headline
+ AI / automation / multi-business proof points
+ premium glass illustration of the operating system
+ CTA with controlled cyan-violet energy
```

---

## 11.3 Hero Visual Ingredients

- Floating glass cards
- Connected neon lines
- W symbol used as a visual intelligence core
- Field-operations architecture hints
- Dashboard panels, scheduling, workflow, AI recommendations
- No generic abstract blob-only background

---

## 11.4 CTA Button System

### Primary CTA

```css
.wf-cta-primary {
  background: linear-gradient(135deg, #00F0FF 0%, #6366F1 50%, #7000FF 100%);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.50);
  box-shadow:
    0 16px 34px rgba(99, 102, 241, 0.26),
    0 0 24px rgba(0, 240, 255, 0.16);
}
```

### Secondary CTA

```css
.wf-cta-secondary {
  background: rgba(255, 255, 255, 0.72);
  color: #6366F1;
  border: 1px solid rgba(99, 102, 241, 0.14);
  backdrop-filter: blur(18px);
}
```

---

# 12. Product Application UI Direction

## 12.1 Product UI Feeling

The app UI must be **more disciplined than the marketing site**.

It must not become a glowing concept mockup. It must remain:

- Operational
- Fast to scan
- Readable during long work sessions
- Premium but practical
- Visually connected to the brand

The correct product UI ratio is:

```text
80% calm operational clarity
20% controlled intelligent energy
```

---

## 12.2 Product Shell Guidance

### Background

```css
.app-shell {
  background:
    radial-gradient(circle at 10% 10%, rgba(0, 240, 255, 0.10), transparent 28%),
    radial-gradient(circle at 90% 18%, rgba(112, 0, 255, 0.08), transparent 30%),
    #F8FAFC;
}
```

### Panels

- Dashboard cards: `wf-panel`
- Smart AI cards: `wf-glass`
- Hero intelligence panels: `wf-glass-strong`
- Navigation active state: Indigo with cyan or gradient edge highlight

---

## 12.3 App Component Design Rules

### Navigation
- Clean icons
- Indigo active text
- Cyan-violet active rail, pill, or luminous stroke
- No dark sidebar as the default brand shell unless future dark mode is separately designed

### Cards
- Rounded large radius
- Light borders
- Shallow shadows
- Glass only when it adds hierarchy

### Tables
- Highly readable
- Minimal effects
- Soft brand row hover
- Cyan only for interactions, not every cell

### Forms
- Clean white surfaces
- Indigo focus state
- Soft neon edge focus for premium moments

### AI Surfaces
AI-specific panels can use more visible:
- Glow borders
- Glass blur
- Gradient spark effects
- Intelligent node motifs

But these must remain bounded and not invade the entire product shell.

---

# 13. Application Design Tokens

## 13.1 Radius Tokens

```css
:root {
  --wf-radius-sm: 12px;
  --wf-radius-md: 18px;
  --wf-radius-lg: 24px;
  --wf-radius-xl: 32px;
  --wf-radius-pill: 999px;
}
```

---

## 13.2 Spacing Feel

The WIZFIELD layout must breathe.

Recommended spacing character:

- Marketing: generous / cinematic
- Product app: structured / roomy
- Docs: highly readable / refined

```css
:root {
  --wf-space-1: 4px;
  --wf-space-2: 8px;
  --wf-space-3: 12px;
  --wf-space-4: 16px;
  --wf-space-5: 20px;
  --wf-space-6: 24px;
  --wf-space-8: 32px;
  --wf-space-10: 40px;
  --wf-space-12: 48px;
  --wf-space-16: 64px;
}
```

---

# 14. Docs Website Direction

WIZFIELD Docs should use the same DNA, but in a quieter, more editorial form.

## 14.1 Docs Design Rule

Docs must communicate:

- Trust
- Precision
- Product truth
- Seriousness
- Clean intelligence

Docs should not feel like a separate corporate wiki. They should feel like:

> **The calm, authoritative knowledge layer of the WIZFIELD operating system.**

---

## 14.2 Docs Visual Translation

Use:

- Liquid Platinum background
- Digital Indigo navigation and headings
- Cyan/Violet micro accents only
- Light glass hero or callout surfaces
- Very clean reading width
- Premium code block styling

Avoid:

- Heavy hero effects on every page
- Too much glow near long reading sections
- Marketing-style oversized visuals inside technical docs

---

# 15. App Icon Direction

The app icon is a **standalone W intelligence monogram** inside a refined glass tile.

## 15.1 Icon Material

```css
.wf-app-icon-shell {
  background: rgba(255, 255, 255, 0.70);
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 28%;
  backdrop-filter: blur(24px);
  box-shadow:
    0 20px 54px rgba(99, 102, 241, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.90);
}
```

---

## 15.2 App Icon Rules

The icon must:

- Preserve the W node graph
- Keep the cyan-to-violet gradient
- Glow softly within the glass shell
- Remain legible at favicon/app sizes
- Avoid tiny unnecessary text

---

# 16. Illustration and Product Visual Language

## 16.1 Visual Motifs

WIZFIELD illustrations may include:

- Connected node graphs
- Intelligent routing lines
- Glass cuboids / operating hubs
- Soft floating dashboards
- Operational flow diagrams
- Field-service scheduling maps
- AI recommendation panels

---

## 16.2 Avoided Motifs

Do not use:

- Robots as the primary AI metaphor
- Generic brain icons everywhere
- Cartoon hands or playful mascots
- Hard sci-fi weaponized visuals
- Cluttered holographic overload

---

# 17. Motion and Interaction Direction

Motion must feel intelligent and precise.

## 17.1 Approved Motion Behavior

- Slow ambient glow breathing
- Gentle node pulse on brand graphics
- Subtle hover lift on glass cards
- Light border shimmer on premium CTA hover
- Calm directional transition between app panels

## 17.2 Rejected Motion Behavior

- Bouncing playful motion
- Arcade neon flicker
- Excessively fast pulsing
- Constant screen distraction
- Overanimated enterprise dashboards

---

# 18. Dark Mode Position

Dark mode is **not** the primary brand identity.

The locked default WIZFIELD DNA is:

> **Bright crystal base with neon-tech edge energy.**

A future dark mode may exist, but it must be treated as a derived environment, not the canonical brand source.

The main brand should always be judged in its light mode first.

---

# 19. Implementation Package — CSS Variable Foundation

The following variables define the initial canonical token set for web, docs, and application UI.

```css
:root {
  /* Core Brand */
  --wf-base: #F8FAFC;
  --wf-indigo: #6366F1;
  --wf-cyan: #00F0FF;
  --wf-violet: #7000FF;
  --wf-pink: #FF007A;

  /* Typography */
  --wf-text-primary: #172033;
  --wf-text-secondary: #53607A;
  --wf-text-muted: #7C89A5;
  --wf-text-brand: #6366F1;
  --wf-text-inverse: #FFFFFF;

  /* Surfaces */
  --wf-surface-0: rgba(255, 255, 255, 0.84);
  --wf-surface-1: rgba(255, 255, 255, 0.72);
  --wf-surface-2: rgba(255, 255, 255, 0.58);
  --wf-surface-strong: rgba(255, 255, 255, 0.92);

  /* Borders */
  --wf-border-soft: rgba(255, 255, 255, 0.72);
  --wf-border-faint: rgba(99, 102, 241, 0.12);

  /* Shadows */
  --wf-shadow-soft: 0 20px 60px rgba(77, 91, 145, 0.12);
  --wf-shadow-card: 0 18px 48px rgba(77, 91, 145, 0.10);

  /* Gradients */
  --wf-gradient-core: linear-gradient(135deg, #00F0FF 0%, #6366F1 48%, #7000FF 100%);
  --wf-gradient-soft: linear-gradient(135deg, rgba(0, 240, 255, 0.18) 0%, rgba(99, 102, 241, 0.16) 48%, rgba(112, 0, 255, 0.18) 100%);

  /* Glow */
  --wf-glow-cyan: 0 0 14px rgba(0, 240, 255, 0.30), 0 0 34px rgba(0, 240, 255, 0.18);
  --wf-glow-violet: 0 0 14px rgba(112, 0, 255, 0.28), 0 0 36px rgba(112, 0, 255, 0.18);
  --wf-logo-glow: 0 0 10px rgba(0, 240, 255, 0.42), 0 0 24px rgba(112, 0, 255, 0.26), 0 0 42px rgba(99, 102, 241, 0.18);

  /* Radius */
  --wf-radius-sm: 12px;
  --wf-radius-md: 18px;
  --wf-radius-lg: 24px;
  --wf-radius-xl: 32px;
  --wf-radius-pill: 999px;

  /* Fonts */
  --wf-font-display: "Ethocen", "Inter", sans-serif;
  --wf-font-ui: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

---

# 20. Implementation Package — Suggested Utility Classes

```css
.wf-brand-bg {
  background: #F8FAFC;
}

.wf-brand-gradient {
  background: var(--wf-gradient-core);
}

.wf-text-brand {
  color: var(--wf-indigo);
}

.wf-glass {
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow:
    0 24px 80px rgba(77, 91, 145, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
}

.wf-glass-strong {
  background: rgba(255, 255, 255, 0.80);
  border: 1px solid rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow:
    0 28px 88px rgba(77, 91, 145, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.90);
}

.wf-panel {
  background: rgba(255, 255, 255, 0.90);
  border: 1px solid rgba(99, 102, 241, 0.10);
  box-shadow: 0 16px 40px rgba(77, 91, 145, 0.08);
}

.wf-glow-cyan {
  box-shadow: var(--wf-glow-cyan);
}

.wf-glow-violet {
  box-shadow: var(--wf-glow-violet);
}

.wf-cta-primary {
  background: var(--wf-gradient-core);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.50);
  box-shadow:
    0 16px 34px rgba(99, 102, 241, 0.26),
    0 0 24px rgba(0, 240, 255, 0.16);
}

.wf-cta-secondary {
  background: rgba(255, 255, 255, 0.72);
  color: #6366F1;
  border: 1px solid rgba(99, 102, 241, 0.14);
  backdrop-filter: blur(18px);
}
```

---

# 21. Implementation Package — Tailwind / Design-System Translation Guidance

Where Tailwind is used, the implementation should map back to these canonical brand tokens instead of scattering one-off hex codes throughout the app.

Suggested principles:

- Keep raw hex usage centralized.
- Expose semantic variables first.
- Build components from brand utilities rather than ad-hoc styling.
- Hero/marketing visuals may be richer than production UI surfaces.

Suggested semantic mapping:

```text
bg-brand-canvas           -> Liquid Platinum
text-brand                -> Digital Indigo
border-brand-soft         -> faint indigo or white glass border
gradient-brand-energy     -> cyan-indigo-violet gradient
shadow-glass-card         -> premium diffuse glass shadow
glow-ai                    -> cyan/violet glow recipes
```

---

# 22. Approved Brand Translation by Surface

## 22.1 Marketing Website

**Maximum expressive intensity.**

Use:
- Hero gradients
- Ambient glow
- Glass illustrations
- Large display headings
- Strong logo presence
- Premium futuristic detail

---

## 22.2 Application UI

**Controlled operational intensity.**

Use:
- Brand background
- Glass selectively
- Indigo hierarchy
- Glow mainly for AI / active states / branded highlights
- Excellent readability first

---

## 22.3 Docs Website

**Quiet intellectual intensity.**

Use:
- Clean background
- Indigo headings
- Sparse neon micro accents
- Light glass callouts
- Very high readability

---

## 22.4 Sales Decks and Visual Assets

**Premium product storytelling intensity.**

Use:
- Logo glow
- System mockups
- Futuristic lines
- Connected nodes
- Clean chart language
- Heavy spacing discipline

---

# 23. Absolute Do / Do Not Rules

## 23.1 Always Do

- Preserve bright premium base
- Preserve cyan-to-violet intelligent energy
- Preserve W node logo structure
- Preserve clean, structured spacing
- Preserve high readability
- Preserve luxury through restraint
- Keep app UI practical
- Treat Plasma Pink as rare and intentional

---

## 23.2 Never Do

- Turn the brand into dark cyberpunk
- Replace the logo with a generic W
- Use flat stock SaaS blues as the core identity
- Overload every surface with glow
- Use childish neon colors
- Make glass effects muddy or low contrast
- Make the app look like a Dribbble concept that cannot be worked in all day
- Drift away from the locked palette without explicit brand revision

---

# 24. Final Brand Statement

WIZFIELD’s final visual identity is:

> **A bright, premium, future-facing operating system for field operations — where clean structure meets visible intelligent energy.**

It is not decoration. It is the visual manifestation of the product promise:

> **WIZFIELD brings order, intelligence, and growth into businesses that operate in the field.**

---

# 25. Canonical Decision Summary

The following decisions are locked:

1. **Primary visual DNA:** bright crystal base + neon-tech intelligence energy.
2. **Official palette:** Liquid Platinum, Digital Indigo, Electric Cyan, Hyper Violet, Plasma Pink.
3. **Official logo idea:** connected-node W symbol with cyan-to-violet gradient and visible neon glow.
4. **Official materiality:** glassmorphism with crisp thin white borders and controlled blur.
5. **Official typography:** Ethocen for display/logo direction; Inter for product/UI/content.
6. **Website direction:** premium futuristic SaaS, expressive but clean.
7. **Product UI direction:** operational clarity first, branded intelligent energy second.
8. **Docs direction:** calm authoritative brand translation.
9. **App icon direction:** W monogram inside premium glass tile.
10. **Implementation direction:** tokenized CSS variable system; no random scattered color drift.

This document is the visual source of truth for WIZFIELD until the owner explicitly replaces or revises it.

