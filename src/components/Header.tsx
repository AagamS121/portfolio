import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, siteConfig } from '../config/site'

/** One navigation model for desktop, mobile, footer and route return links. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { pathname } = useLocation()
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])
  useEffect(() => {
    setOpen(false)
    if (pathname !== '/') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -55% 0px' },
    )
    navItems.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [pathname])
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" to="/#home" aria-label="Aagam Shah, home">
          <span className="brand-mark">
            AS<span>.</span>
          </span>
          <span className="brand-name">
            AAGAM SHAH<small>IT SUPPORT / WEB DEVELOPMENT</small>
          </span>
        </Link>
        <nav
          className={`nav ${open ? 'nav-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navItems.map(([id, label]) => (
            <Link
              key={id}
              className={active === id && pathname === '/' ? 'active' : ''}
              to={`/#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-cta" href={`mailto:${siteConfig.email}`}>
          LET'S TALK <ArrowUpRight size={15} aria-hidden />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
