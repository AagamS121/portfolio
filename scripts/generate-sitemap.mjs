import { readFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { URL } from 'node:url'
import console from 'node:console'

// Search engines need an absolute origin; leave the sitemap absent until deployment provides it.
const origin = process.env.VITE_SITE_URL?.replace(/\/$/, '')
if (origin) {
  const source = await readFile('src/content/portfolio.ts', 'utf8')
  const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1])
  const paths = ['/', ...slugs.map((slug) => `/projects/${slug}`)]
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('\n')
  await writeFile(
    'public/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  await writeFile('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
  console.log(`Generated sitemap with ${paths.length} URLs for ${origin}`)
} else {
  console.log('VITE_SITE_URL is unset; sitemap generation deferred until deployment.')
}
