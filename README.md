# Aagam Shah portfolio

A responsive portfolio for an IT Support Engineer & Web Developer working across hardware, systems, networking, hosting and websites. Content is sourced from the supplied 2026 resume and lives in typed arrays.

Preview graphic: `public/og-preview.png`. Project cards currently use abstract SVG illustrations; replace them with verified screenshots through the project content objects when available.

## Stack

React 19, TypeScript, Vite 8, React Router, React Three Fiber/Three.js, GSAP, Lucide, CSS tokens, Vitest and Testing Library.

## Run

Requires Node 20.19+ or 22.12+. Use npm:

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run test
npm run build
npm run preview
```

## Structure

`src/content/portfolio.ts` contains resume-sourced collections; `src/config/site.ts` contains identity and contact settings; `src/types/portfolio.ts` defines their interfaces. `src/styles.css` holds the design tokens and styles. `src/components/three/HeroScene.tsx` is the isolated WebGL enhancement. `public/resume/` contains the single downloadable PDF. `brain/` is the maintenance and architecture guide.

## Editing and deployment

Read `brain/09-EDITING_GUIDE.md` to add content or change the theme. Read `brain/11-DEPLOYMENT.md` for Vercel, Netlify and cPanel SPA fallback rules. Set `VITE_SITE_URL` to the final public origin before building. The contact form validates and prepares an email in the visitor's email app; no backend is configured.

For the next content additions and project case study worksheets, see `NEXT_CONTENT_AND_CASE_STUDIES.md`.
