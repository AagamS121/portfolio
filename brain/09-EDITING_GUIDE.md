# Editing guide

For a prioritized list of missing project details and case study worksheets, also read `NEXT_CONTENT_AND_CASE_STUDIES.md` in the repository root.

1. **Profile/contact/social:** edit `src/config/site.ts`. Add social objects like `{ label: 'GitHub', url: 'https://github.com/...' }` only with a verified URL. Hero and footer links render automatically.
2. **Experience, skills, certificates, education:** add objects to the matching arrays in `src/content/portfolio.ts`. Follow the interfaces in `src/types/portfolio.ts` and examples in `05-CONTENT_MODEL.md`.
3. **Project:** add a cover to `public/assets`, then add a `Project` object in `src/content/portfolio.ts`. Give it a unique slug. The card and case study appear automatically. Add a verified `liveUrl` if public.
4. **Screenshots:** add optimized WebP/AVIF files to `public/assets`, then set a project `cover` path and optional `gallery: ['/assets/example-1.webp']`. The current illustrations are illustrative, not screenshots. Gallery images render on the case study.
5. **Resume:** replace `public/resume/Aagam_Shah_Resume_2026.pdf`, or change the filename and update `resumePath` in `src/config/site.ts`. Keep one public copy.
6. **Theme:** edit the `:root` variables at the top of `src/styles.css`. Change `--accent-primary` for the main accent. Adjust `public/og-preview.svg`, its raster `public/og-preview.png`, and `public/favicon.svg` separately for matching previews.
7. **Fonts:** update the Google Fonts link in `index.html` and the `font-family` declarations in `src/styles.css`.
8. **Motion:** change `src/hooks/useReveal.ts` for scroll effects. To disable them entirely, remove `useReveal` from HomePage. Browser reduced-motion already disables them.
9. **3D:** replace `src/components/three/HeroScene.tsx`; the hero text remains independent in `HomePage.tsx`.
10. **Deploy:** run `npm run lint`, `npm run test`, `npm run build`; set `VITE_SITE_URL` to the final origin; deploy `dist/` with SPA route fallback. See `11-DEPLOYMENT.md`.
