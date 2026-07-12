---
name: Juney
description: Healthcare staffing platform connecting facilities, clinicians, and recruiting partners through AI-driven matching.
colors:
  indigo-authority: "oklch(0.490 0.210 264)"
  indigo-deep: "oklch(0.420 0.210 264)"
  indigo-wash: "oklch(0.940 0.055 264)"
  indigo-mid: "oklch(0.760 0.110 264)"
  teal-health: "oklch(0.655 0.145 190)"
  teal-wash: "oklch(0.952 0.038 190)"
  coral-action: "oklch(0.640 0.175 27)"
  coral-wash: "oklch(0.968 0.030 27)"
  clinical-white: "oklch(1.000 0.005 264)"
  clinical-ground: "oklch(0.979 0.008 264)"
  clinical-raised: "oklch(0.992 0.006 264)"
  ink-deep: "oklch(0.148 0.022 264)"
  ink-body: "oklch(0.380 0.018 264)"
  ink-muted: "oklch(0.560 0.014 264)"
  ink-ghost: "oklch(0.720 0.010 264)"
  rule-default: "oklch(0.918 0.008 264)"
  rule-strong: "oklch(0.865 0.010 264)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(3rem, 5.5vw + 0.5rem, 5.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.042em"
  headline:
    fontFamily: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.10em"
rounded:
  full: "9999px"
  panel: "1.75rem"
  icon: "10px"
spacing:
  section: "7rem"
  content: "2.5rem"
  tight: "1rem"
  compact: "0.5rem"
components:
  button-primary:
    backgroundColor: "{colors.indigo-authority}"
    textColor: "{colors.clinical-white}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-deep}"
  button-ghost:
    backgroundColor: "{colors.clinical-white}"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  glass-panel:
    backgroundColor: "oklch(1.000 0.005 264 / 0.72)"
    rounded: "{rounded.panel}"
  pathway-icon:
    backgroundColor: "{colors.clinical-white}"
    rounded: "{rounded.icon}"
    size: "2.5rem"
---

# Design System: Juney

## 1. Overview

**Creative North Star: "The Clinical Compass"**

Juney's visual system is built on the metaphor of a precision instrument — a compass that three distinct audiences (facilities, clinicians, recruiting partners) each hold and immediately understand which direction to go. Authority comes from exactness: every spacing decision, every color assignment, every typographic weight is deliberate and measurable. The design is never decorative; it's diagnostic.

The system rejects the generic SaaS template look — identical card grids, gradient hero backgrounds, "Trusted by 1000+ teams" badges. It rejects playful illustrations that would undermine clinical authority. It rejects dark mode aesthetics that suggest developer tools rather than patient care. It rejects dashboard-density layouts on a conversion surface. And it rejects sterile hospital-white that confuses cleanliness with coldness.

The register is brand: design IS the product. The landing page is the acquisition surface, and the visitor's impression of competence, trust, and precision is what's being manufactured.

**Key Characteristics:**
- Indigo-anchored authority with teal and coral as audience-coded accents
- Glassmorphic elevation with ambient depth — diffuse halos, not hard edges
- Bricolage Grotesque display type: editorial weight, geometric confidence
- Tri-funnel architecture as the core structural motif
- OKLCH color space throughout; all neutrals tinted toward indigo (hue 264)
- Refined and authoritative component feel — minimal chrome, subtle state changes

## 2. Colors

A full-palette strategy: three named accent roles (indigo, teal, coral) plus indigo-tinted neutrals. Every neutral carries 0.008–0.022 chroma at hue 264 — never dead gray, never warm.

### Primary
- **Indigo Authority** (`oklch(0.490 0.210 264)`): The brand's dominant voice. Primary CTAs, the wordmark accent dot, accent text on the hero headline. Trust, expertise, medical-tech authority.
- **Indigo Deep** (`oklch(0.420 0.210 264)`): Hover/active state for primary buttons. Darkened version of Indigo Authority for interactive feedback.
- **Indigo Wash** (`oklch(0.940 0.055 264)`): Light tint for ghost button hover backgrounds, selected states, soft emphasis.
- **Indigo Mid** (`oklch(0.760 0.110 264)`): Border hover accent on ghost buttons and secondary interactive elements.

### Secondary
- **Teal Health** (`oklch(0.655 0.145 190)`): The human warmth counterpoint. Used for the professionals pathway icon, shield badges, the eyebrow status dot. Represents the care side of the platform.
- **Teal Wash** (`oklch(0.952 0.038 190)`): Light tint for teal-accented backgrounds when needed.

### Tertiary
- **Coral Action** (`oklch(0.640 0.175 27)`): Energy and urgency. Reserved for the recruiting partners pathway. Creates a warm third point in the audience-coded triad.
- **Coral Wash** (`oklch(0.968 0.030 27)`): Light tint for coral-accented backgrounds.

### Neutral
- **Clinical White** (`oklch(1.000 0.005 264)`): Card and surface white. Not pure white — carries a whisper of indigo chroma.
- **Clinical Ground** (`oklch(0.979 0.008 264)`): Page background. The lightest indigo-tinted neutral.
- **Clinical Raised** (`oklch(0.992 0.006 264)`): Slightly elevated surface variant.
- **Ink Deep** (`oklch(0.148 0.022 264)`): Primary heading and display text color. Near-black, indigo-tinted.
- **Ink Body** (`oklch(0.380 0.018 264)`): Body text. Dark enough for 4.5:1 contrast against Clinical Ground.
- **Ink Muted** (`oklch(0.560 0.014 264)`): Secondary text, descriptions, nav links in default state.
- **Ink Ghost** (`oklch(0.720 0.010 264)`): Tertiary text, compliance badge labels, decorative text.
- **Rule Default** (`oklch(0.918 0.008 264)`): Dividers, pathway separators, stats border-top.
- **Rule Strong** (`oklch(0.865 0.010 264)`): Ghost button borders, eyebrow pill borders.

### Named Rules
**The Audience Triad Rule.** Indigo, teal, and coral are audience-coded: facilities = indigo, professionals = teal, partners = coral. They never swap roles. A facility CTA is always indigo; a professional pathway icon is always teal. The triad is a wayfinding system, not a decorative palette.

**The Indigo Tint Rule.** Every neutral — background, surface, ink, rule — carries chroma toward hue 264. No pure grays, no warm tints. The entire tonal range belongs to the same indigo family. This is what makes the page feel cohesive rather than assembled.

## 3. Typography

**Display Font:** Bricolage Grotesque (variable, opsz 12–96, weights 300–800)
**Body Font:** DM Sans (variable, opsz 9–40, weights 300–700)

**Character:** Bricolage Grotesque's geometric confidence anchors authority — it's editorial without being magazine-derivative. DM Sans provides a humanist counterpoint at body scale: readable, warm enough to not feel clinical, but technically clean. The pairing works on a geometric-vs-humanist contrast axis.

### Hierarchy
- **Display** (800, `clamp(3rem, 5.5vw + 0.5rem, 5.25rem)`, line-height 1.04, letter-spacing -0.042em): Hero headlines only. Bricolage Grotesque at maximum weight. Fluid scaling from 48px to 84px. The ceiling respects the ≤6rem / 96px maximum.
- **Headline** (800, `1.625rem`, line-height 1, letter-spacing -0.035em): Stats values, section headings. Bricolage Grotesque, tabular-nums enabled for numerical data.
- **Title** (700, `15px`, line-height snug, letter-spacing -0.025em): Pathway labels, card titles. Bricolage Grotesque at a smaller committed weight.
- **Body** (400, `1.125rem` / `18px`, line-height 1.7, max-width 46ch): Subheadlines, descriptions. DM Sans. The 46ch measure keeps reading comfortable without formal column constraints.
- **Label** (600, `0.68rem`, line-height 1.2, letter-spacing 0.10em, all-small-caps + uppercase): Eyebrow tags, audience identifiers, kicker text. DM Sans. Open tracking compensates for the small size.

### Named Rules
**The Weight Commitment Rule.** Display and headline text are always weight 800 (extrabold). Body text is always 400 (regular). There is no 500 or 600 in running prose. Weight contrast is binary: heavy for hierarchy, regular for reading.

## 4. Elevation

Ambient depth through diffuse, multi-layered box shadows and glassmorphism. Shadows are halos — they create atmosphere and float elements above the ground without hard edges. The glass panel is the signature elevation technique: `backdrop-filter: blur(28px) saturate(160%)` at 72% opacity, with a compound shadow stack (4px/16px/40px layers plus an inset highlight).

### Shadow Vocabulary
- **Glass panel shadow** (`0 4px 8px -2px oklch(0.148 0.022 264 / 0.06), 0 16px 40px -8px oklch(0.148 0.022 264 / 0.10), 0 40px 80px -16px oklch(0.148 0.022 264 / 0.06), 0 0 0 1px oklch(1.000 0 0 / 0.55) inset`): The primary elevation layer. Used on the tri-funnel hub and any major floating container.
- **Button glow** (`0 4px 16px oklch(0.490 0.210 264 / 0.28), 0 1px 3px oklch(0.490 0.210 264 / 0.20)`): Primary CTA shadow. Indigo-tinted, creating an accent halo. Intensifies on hover.
- **Subtle lift** (`0 1px 3px oklch(0.148 0.022 264 / 0.06)`): Ghost buttons, the eyebrow pill. Barely there at rest, present enough to indicate clickability.

### Named Rules
**The Halo Rule.** Shadows are always diffuse (large blur radius, low opacity, multiple layers). No hard 2px-offset drop shadows. If a shadow looks like it could cast on a desk, it's too sharp.

## 5. Components

### Buttons
Refined and authoritative: buttons communicate confidence through committed color and gentle motion, not through chrome or ornamentation.

- **Shape:** Fully rounded (pill, `border-radius: 9999px`)
- **Primary:** Indigo Authority background, white text, 14px 28px padding, 14px font size, semibold (600). Shadow: indigo-tinted button glow.
- **Hover:** Background darkens to Indigo Deep, shadow intensifies, subtle 1px upward lift. Transition 200ms ease.
- **Focus:** 2px outline at Indigo Authority, 2px offset.
- **Ghost:** Clinical White background, Ink Deep text, Rule Strong 1px border. Shadow: subtle lift.
- **Ghost Hover:** Border shifts to Indigo Mid, background shifts to Indigo Wash. Shadow deepens slightly.

### Glass Panel (Signature Component)
The glassmorphic container is the primary structural element — the tri-funnel hub, and potentially future modal and overlay surfaces. One glass panel per context. Never nested.

- **Corner Style:** 1.75rem radius
- **Background:** `oklch(1.000 0.005 264 / 0.72)` with `backdrop-filter: blur(28px) saturate(160%)`
- **Border:** 1px solid white at 60% opacity
- **Shadow:** Full glass panel shadow stack (three ambient layers + inset highlight)
- **Interior:** Content uses spacing and 1px dividers for hierarchy. No sub-cards, no nested containers.

### Pathway Rows
Interactive list items within the glass panel. Each row represents one audience funnel.

- **Shape:** 14px border-radius, 18px 20px padding
- **Default:** No background, flex layout with icon + text + revealed chevron
- **Hover:** Translucent background shift, 3px rightward translate, icon scales to 1.08x with accent shadow
- **Chevron:** Hidden by default, slides in from -4px on hover/focus with 160ms ease
- **Expandable description:** grid-template-rows reveal (0fr → 1fr), 260ms ease-out-expo

### Pathway Icons
Audience-coded icon pips preceding each pathway row.

- **Shape:** 2.5rem square, 10px border-radius
- **Background:** Clinical White, 1px Rule Default border
- **Color:** Inherited from the pathway's audience accent (indigo / teal / coral)
- **Hover:** Scale 1.08x with matching color shadow

### Navigation
Top-level nav bar with wordmark, inline links, and a ghost CTA.

- **Wordmark:** 15px bold Bricolage Grotesque, Ink Deep, with an Indigo Authority accent dot. 8px indigo rounded-xl icon with white medical cross SVG.
- **Links:** 14px medium DM Sans, Ink Muted default → Ink Deep on hover. 150ms color transition.
- **Nav CTA (Sign In):** Ghost button style (Clinical White bg, Rule Strong border, subtle lift shadow). Border and shadow intensify on hover.

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all color definitions. Hex is acceptable only as a fallback for environments that don't support OKLCH.
- **Do** keep all neutrals tinted toward hue 264 (indigo). Test by sampling any gray in the design — it should show chroma ≥ 0.005 at hue 264.
- **Do** maintain the audience triad coding: indigo for facilities, teal for professionals, coral for partners. This is structural, not decorative.
- **Do** use Bricolage Grotesque at weight 800 for all display and headline text. The typographic authority of the system depends on this commitment.
- **Do** cap body text at 46ch width. The current hero subheadline uses this measure; all future body blocks should follow.
- **Do** provide `@media (prefers-reduced-motion: reduce)` alternatives for every animation. The current global reduce-motion rule covers this.
- **Do** use the glass panel's compound shadow stack (three layers + inset) for primary elevation. Single-layer shadows are too flat for this system.

### Don't:
- **Don't** use a generic SaaS template look. No identical card grids, no gradient hero backgrounds, no "Trusted by 1000+ teams" badges. (PRODUCT.md: *"Generic, template-heavy SaaS looks."*)
- **Don't** add playful or casual illustrations. No cartoon medical professionals, no blob people, no hand-drawn doodles. Authority is non-negotiable. (PRODUCT.md: *"Playful or casual illustrations that undermine authority."*)
- **Don't** introduce dark mode or terminal aesthetics. Healthcare is a light-register domain. (PRODUCT.md: *"Dark mode / terminal aesthetic."*)
- **Don't** create dashboard-density layouts on the landing page. Information density serves persuasion here, not comprehension. (PRODUCT.md: *"Overly dense, dashboard-like layouts."*)
- **Don't** default to sterile hospital-white. The page should feel human and modern, not like a waiting room. (PRODUCT.md: *"Sterile hospital-white."*)
- **Don't** nest cards inside cards. The glass panel is a single container; hierarchy within it comes from spacing and 1px dividers.
- **Don't** use pure gray (chroma 0) anywhere. Every neutral is indigo-tinted per the Indigo Tint Rule.
- **Don't** apply border-left or border-right greater than 1px as a colored accent stripe on any element.
- **Don't** use gradient text (`background-clip: text` with a gradient).
- **Don't** use glassmorphism decoratively. One glass panel per context, purposeful containment only.
