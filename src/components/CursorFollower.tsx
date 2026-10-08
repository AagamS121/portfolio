import { useEffect, useRef } from 'react'

/** Motion settings are in pixels-independent units per second; visual settings are CSS tokens. */
export const cursorFollowerConfig = {
  enabled: true,
  dotFollowSpeed: 24,
  ringFollowSpeed: 9,
  clickDurationMs: 180,
} as const

const interactiveSelector =
  'a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), summary, [role="button"], [role="tab"], [data-cursor-hover]'

/**
 * A decorative, pointer-transparent overlay shared by every route.
 * Its two positions live in refs so animation frames never re-render the app.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cursorFollowerConfig.enabled) return

    const dot = dotRef.current
    const ring = ringRef.current
    const overlay = overlayRef.current
    if (!dot || !ring || !overlay) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const position = { targetX: 0, targetY: 0, dotX: 0, dotY: 0, ringX: 0, ringY: 0 }
    let hasPosition = false
    let frame = 0
    let lastFrameTime = 0
    let clickTimer = 0

    const place = (element: HTMLElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`
    }

    const stopFrame = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      lastFrameTime = 0
    }

    const hide = () => {
      overlay.classList.remove('is-visible', 'is-hovered', 'is-pressed')
      hasPosition = false
      stopFrame()
      window.clearTimeout(clickTimer)
    }

    const animate = (time: number) => {
      // Exponential interpolation makes the trail consistent at 60Hz, 120Hz and beyond.
      const delta = lastFrameTime ? Math.min((time - lastFrameTime) / 1000, 0.05) : 1 / 60
      lastFrameTime = time
      const dotEase = 1 - Math.exp(-cursorFollowerConfig.dotFollowSpeed * delta)
      const ringEase = 1 - Math.exp(-cursorFollowerConfig.ringFollowSpeed * delta)
      position.dotX += (position.targetX - position.dotX) * dotEase
      position.dotY += (position.targetY - position.dotY) * dotEase
      position.ringX += (position.targetX - position.ringX) * ringEase
      position.ringY += (position.targetY - position.ringY) * ringEase

      const dotSettled =
        Math.hypot(position.targetX - position.dotX, position.targetY - position.dotY) < 0.1
      const ringSettled =
        Math.hypot(position.targetX - position.ringX, position.targetY - position.ringY) < 0.1
      if (dotSettled) {
        position.dotX = position.targetX
        position.dotY = position.targetY
      }
      if (ringSettled) {
        position.ringX = position.targetX
        position.ringY = position.targetY
      }
      place(dot, position.dotX, position.dotY)
      place(ring, position.ringX, position.ringY)

      frame = dotSettled && ringSettled ? 0 : window.requestAnimationFrame(animate)
      if (!frame) lastFrameTime = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) {
        hide()
        return
      }
      position.targetX = event.clientX
      position.targetY = event.clientY
      if (!hasPosition) {
        // Reveal only after the first real mouse position; never animate in from (0, 0).
        position.dotX = position.ringX = event.clientX
        position.dotY = position.ringY = event.clientY
        place(dot, event.clientX, event.clientY)
        place(ring, event.clientX, event.clientY)
        hasPosition = true
      } else if (!frame) {
        frame = window.requestAnimationFrame(animate)
      }
      overlay.classList.add('is-visible')
      overlay.classList.toggle(
        'is-hovered',
        event.target instanceof Element && Boolean(event.target.closest(interactiveSelector)),
      )
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !hasPosition) return
      window.clearTimeout(clickTimer)
      overlay.classList.add('is-pressed')
      clickTimer = window.setTimeout(
        () => overlay.classList.remove('is-pressed'),
        cursorFollowerConfig.clickDurationMs,
      )
    }

    const onAvailabilityChange = () => {
      if (!finePointer.matches || reducedMotion.matches) hide()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('blur', hide)
    document.addEventListener('pointerleave', hide)
    document.addEventListener('visibilitychange', hide)
    finePointer.addEventListener('change', onAvailabilityChange)
    reducedMotion.addEventListener('change', onAvailabilityChange)

    return () => {
      hide()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('blur', hide)
      document.removeEventListener('pointerleave', hide)
      document.removeEventListener('visibilitychange', hide)
      finePointer.removeEventListener('change', onAvailabilityChange)
      reducedMotion.removeEventListener('change', onAvailabilityChange)
    }
  }, [])

  if (!cursorFollowerConfig.enabled) return null
  return (
    <div className="cursor-follower" ref={overlayRef} aria-hidden="true">
      <span className="cursor-follower__ring" ref={ringRef} />
      <span className="cursor-follower__dot" ref={dotRef} />
    </div>
  )
}
