# Design system

The primary styling system is organized global CSS in `src/styles.css`. Variables in `:root` control backgrounds, surfaces, text, accents, border, radius, spacing and shadows. Accent mint `#9ce8d8` identifies actions and technology; warm orange `#ecaa7d` marks metadata. Avoid hardcoded new colors in components.

Type: Space Grotesk for headings; DM Sans for body and controls; DM Mono for technical labels. Font families are also variables at the top of `src/styles.css`. Fonts load through Google Fonts CSS with local fallbacks. Layout uses a 1320px `.container`, a 79px sticky header, generous section space, grid cards, and thin borders. Buttons have primary and outline variants; focused controls show an accent outline.

Breakpoints: 1180px (compact desktop), 900px (tablet navigation and stacked hero), 650px (single-column mobile). WebGL is skipped below 700px, preserving a CSS illustration. Motion uses brief GSAP entrance reveals and restrained hover transitions. `prefers-reduced-motion` removes nonessential movement and loads the static hero. Text contrast and 52px primary actions support readability and touch use.
