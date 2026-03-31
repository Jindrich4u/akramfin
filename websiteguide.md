# PROMPT: STRICT CORPORATE DESIGN SYSTEM COMPLIANCE
**ROLE:** Senior Front-End Architect & Design Systems Lead
**OBJECTIVE:** Create a high-end, production-ready corporate website with UNCOMPROMISING adherence to the following design constraints.

## 1. STRICT VISUAL DESIGN RULES
### A. Spacing & Layout
*   **Density:** High density. Reduce standard whitespace by 50%.
*   **Gap System:**
    *   `gap: 2rem` (32px) for major grids.
    *   `gap: 1rem` (16px) for minor grids.
    *   `padding: 3rem` (48px) for section verticals (NOT 6rem+).
*   **Footer:** Compact. No massive empty spaces. Border-top separation required.

### B. "No-Frills" Styling
*   **Borders:** Thick, bold borders (2px or 3px solid).
*   **Radius:** **0px STRICT.** Sharp corners on EVERYTHING (buttons, cards, inputs, images).
*   **Shadows:** **NONE.** Flat design only.
*   **Gradients:** **NONE.** Solid colors only.
*   **Transparency:** **NONE.** Solid backgrounds only.

### C. Color Palette (Deep Corporate)

*   **Neutral:** Slate Blue (#486581) - Used for Secondary Text, Subtitles.
*   **Highlight Contrast:**
    *   `::selection` MUST be Background: Gold, Text: Deep Navy.
    *   **NEVER** use default light blue selection.
    *   Ensure text is always readable against the selection background.

### D. Interaction (Touch & Click)
*   **Hover Effects:** **MINIMAL TO NONE.**
    *   **Buttons:** Slight opacity change ONLY. No color inversion.
    *   **Cards:** **NO** background change, **NO** text color change, **NO** movement/lift.
    *   **Links:** Underline or color shift ONLY.
*   **Focus States:** High contrast outline (Gold or Navy).

## 2. CONTENT & ASSET INTEGRITY
### A. "Real World" Rule
*   **NO** Lorem Ipsum. Write professional, context-aware copy.
*   **NO** Placeholders.
    *   **BAD:** `[INSERT IMAGE HERE]`, `[MAP]`, `[VIDEO]`
    *   **GOOD:** An actual `<img>` tag with a real source, or a removed section if asset is missing.
*   **NO** Dead Links.
    *   Every `<a>` tag must point to a real, existing HTML file (`project-1.html`, `service-consulting.html`).
    *   **NEVER** use `#` or `javascript:void(0)`.

### B. Imagery
*   **Style:** Photorealistic, Architectural, High-End Corporate.
*   **People:** Diverse professional portraits (suits, safety gear for construction). No generic "thumbs up" stock photos.
*   **Architecture:** Skyscrapers, modern offices, construction sites, blueprints.

## 3. TECHNICAL IMPLEMENTATION
### A. Code Quality
*   **HTML5:** Semantic markers (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
*   **CSS:** Variable-driven (`:root`).
*   **Responsive:** Mobile-first. Grid collapses to single column. Images scale 100%.

### B. Navigation
*   **Depth:** Do not nest excessively, but ensure "Detail Pages" exist.
*   **Footer:** Must mirror main navigation + Address/Contact info.

## 4. EXAMPLE PROMPT FOR AGENT
"Build a 20-page  website. Use strict 0px border-radius, 3px solid Navy borders, and Gold accents. No shadows. Section padding max 4rem. Create unique HTML files for every single link. remove all hover effects on cards. Ensure text selection is Gold background/Navy text. Use only high-quality architectural images. NO PLACEHOLDERS."

