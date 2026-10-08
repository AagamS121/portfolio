import { act, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CursorFollower } from '../src/components/CursorFollower'

function mockMedia({ fine = true, reduced = false } = {}) {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query) =>
      ({
        matches: query.includes('prefers-reduced-motion') ? reduced : fine,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
      }) as unknown as MediaQueryList,
  )
}

function pointer(target: Element, type: string, x: number, y: number, pointerType = 'mouse') {
  const event = new MouseEvent(type, { bubbles: true, clientX: x, clientY: y })
  Object.defineProperty(event, 'pointerType', { value: pointerType })
  target.dispatchEvent(event)
}

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('CursorFollower', () => {
  it('reveals at the first mouse position, then trails with independent speeds', () => {
    mockMedia()
    const frames: FrameRequestCallback[] = []
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      frames.push(callback)
      return frames.length
    })
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
    render(
      <>
        <a href="#work">Work</a>
        <CursorFollower />
      </>,
    )
    const link = document.querySelector('a')!
    const overlay = document.querySelector('.cursor-follower')!
    const dot = document.querySelector<HTMLElement>('.cursor-follower__dot')!
    const ring = document.querySelector<HTMLElement>('.cursor-follower__ring')!

    pointer(link, 'pointermove', 20, 30)
    expect(overlay).toHaveClass('is-visible', 'is-hovered')
    expect(dot.style.transform).toContain('20px, 30px')
    expect(ring.style.transform).toContain('20px, 30px')
    expect(frames).toHaveLength(0)

    pointer(link, 'pointermove', 120, 30)
    act(() => frames[0](16))
    const dotX = Number(dot.style.transform.match(/translate3d\(([-\d.]+)px/)?.[1])
    const ringX = Number(ring.style.transform.match(/translate3d\(([-\d.]+)px/)?.[1])
    expect(dotX).toBeGreaterThan(ringX)
    expect(ringX).toBeGreaterThan(20)
    expect(dotX).toBeLessThan(120)
  })

  it('provides brief click feedback without blocking the clicked control', () => {
    mockMedia()
    vi.useFakeTimers()
    const onClick = vi.fn()
    render(
      <>
        <button onClick={onClick}>Contact</button>
        <CursorFollower />
      </>,
    )
    const button = document.querySelector('button')!
    const overlay = document.querySelector('.cursor-follower')!
    pointer(button, 'pointermove', 80, 90)
    pointer(button, 'pointerdown', 80, 90)
    fireEvent.click(button)
    expect(overlay).toHaveClass('is-pressed', 'is-hovered')
    expect(onClick).toHaveBeenCalledOnce()
    act(() => vi.advanceTimersByTime(180))
    expect(overlay).not.toHaveClass('is-pressed')
  })

  it('stays hidden for touch and reduced motion', () => {
    mockMedia()
    render(<CursorFollower />)
    const overlay = document.querySelector('.cursor-follower')!
    pointer(overlay, 'pointermove', 20, 30, 'touch')
    expect(overlay).not.toHaveClass('is-visible')
  })

  it('does not appear when reduced motion is requested', () => {
    mockMedia({ reduced: true })
    render(<CursorFollower />)
    const overlay = document.querySelector('.cursor-follower')!
    pointer(overlay, 'pointermove', 20, 30)
    expect(overlay).not.toHaveClass('is-visible')
  })
})
