import { lazy, Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

const HeroScene = lazy(() => import('./three/HeroScene'))

function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/** Defers the WebGL chunk until the hero is visible and the device can render it. */
export function HeroVisual() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    // Small screens use the static illustration to avoid a competing GPU workload.
    if (
      !canUseWebGL() ||
      window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 700px)').matches
    )
      return
    const hero = document.querySelector('.hero-visual')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-static">
        <span className="static-monitor">
          <i />
          <b>
            &gt; SYSTEMS ONLINE<span>_</span>
          </b>
        </span>
        <span className="static-base" />
      </div>
      {ready && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ErrorBoundary>
      )}
      <div className="visual-caption">
        <span>01 / WORKSTATION</span>
        {ready && <span>MOVE TO EXPLORE</span>}
      </div>
    </div>
  )
}
