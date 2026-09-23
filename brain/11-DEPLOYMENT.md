# Deployment

Run `npm run build`, then deploy the `dist/` output. Set `VITE_SITE_URL` to the exact public origin before building for absolute canonical and OpenGraph URLs and an automatically generated sitemap/robots reference. The site is a client-side SPA; deep links to `/projects/:slug` must return `index.html`.

## Vercel

Build command: `npm run build`; output: `dist`. `vercel.json` includes the SPA rewrite. Configure the environment variable in project settings.

## Netlify

Build command: `npm run build`; publish directory: `dist`. `public/_redirects` is copied to output with the SPA fallback.

## cPanel/static Apache hosting

Upload `dist` contents to the web root. `public/.htaccess` is copied to output with rules to serve existing files and directories normally and rewrite other paths to `/index.html`:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

Enable HTTPS at the host. Replace the illustrative project covers with real screenshots when available. Verify the resume URL, sitemap, `robots.txt`, and the social preview after deployment. Without `VITE_SITE_URL`, sitemap generation is deliberately skipped because no deployment domain was supplied.
