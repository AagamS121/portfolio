# Development guide

Node 22.12+ is recommended (Vite 8 also supports Node 20.19+). Use npm only.

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run test
npm run build
npm run preview
```

Development runs on Vite's displayed localhost URL. If WebGL is unavailable, check the CSS hero before investigating graphics drivers. If `/projects/:slug` fails after deployment but works locally, add the host's SPA fallback. A `mailto:` form requires a configured email app; it does not send via a server. Source facts and editing steps live in `02-RESUME_SOURCE.md` and `09-EDITING_GUIDE.md`.

Run `npm run format` after code edits to apply the shared Prettier style.
