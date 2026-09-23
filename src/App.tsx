import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ErrorBoundary } from './components/ErrorBoundary'
import { siteConfig } from './config/site'
import { projects } from './content/portfolio'

const ProjectPage = lazy(() => import('./pages/ProjectPage'))

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  useEffect(() => {
    const project = projects.find((item) => pathname === `/projects/${item.slug}`)
    const title = project
      ? `${project.title} — ${siteConfig.name}`
      : pathname === '/'
        ? `${siteConfig.name} — ${siteConfig.title}`
        : `${siteConfig.name} — Portfolio`
    document.title = title
    const description =
      project?.shortDescription ?? 'IT support, infrastructure and web development in Mumbai.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    if (siteConfig.siteUrl) {
      const canonical =
        document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
        document.head.appendChild(document.createElement('link'))
      canonical.rel = 'canonical'
      canonical.href = new URL(pathname, siteConfig.siteUrl).href
      document
        .querySelector('meta[property="og:image"]')
        ?.setAttribute('content', new URL('/og-preview.png', siteConfig.siteUrl).href)
    }
  }, [pathname])
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
          ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
          ...(siteConfig.social.length
            ? { sameAs: siteConfig.social.map((item) => item.url) }
            : {}),
        },
        {
          '@type': 'WebSite',
          name: `${siteConfig.name} Portfolio`,
          ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
        },
      ],
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])
  return null
}

export default function App() {
  return (
    <ErrorBoundary>
      <RouteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Suspense fallback={<div className="route-loading">Loading project…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
