# Architecture

React 19 + TypeScript + Vite 8 SPA. `src/App.tsx` owns routes, metadata and JSON-LD. `HomePage.tsx` renders the sections; `ProjectPage.tsx` is a lazy route resolved by project slug; unknown URLs render `NotFoundPage.tsx`. React Router uses BrowserRouter, so hosting must return `index.html` for route requests.

Content is authored in `src/content/portfolio.ts` against interfaces in `src/types/portfolio.ts`; global identity and contact settings live in `src/config/site.ts`. Components map arrays to cards and case studies. No CMS or global state is needed. Local state handles the mobile menu, selected experience and form errors.

`src/styles.css` is the single styling system. `useReveal.ts` scopes GSAP ScrollTrigger effects to the homepage and reverts the context on unmount. `HeroVisual.tsx` checks WebGL, motion preference and viewport, then dynamically imports the R3F scene when visible. The static CSS workstation is present first and survives a WebGL error. Scene geometry is authored in code; no model or texture download is required. `vite.config.ts` splits the lazy Three.js vendor code into bounded chunks so the production build has no oversized-chunk warning.

`CursorFollower.tsx` mounts once in `App.tsx`, outside the route switch. It listens to fine mouse pointer events, interpolates two positions in `requestAnimationFrame`, and writes only transforms to DOM refs. It stops frames when settled and cleans up listeners, frames, and timers on unmount. CSS supplies colors and sizes; a small exported config supplies follow speeds and enablement. The overlay never receives pointer events.

Contact uses native form semantics, client-side validation and a honeypot. Valid submission opens a prefilled `mailto:` URL and explains that sending requires the visitor's email app. No API key or backend is present. Analytics is intentionally absent until a provider and privacy decision are made.
