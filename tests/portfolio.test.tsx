import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from '../src/App'
import { certifications, experience, projects, skillGroups } from '../src/content/portfolio'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('portfolio', () => {
  it('renders resume sourced sections and navigation', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building clarity')
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Download resume/i })[0]).toHaveAttribute(
      'href',
      '/resume/Aagam_Shah_Resume_2026.pdf',
    )
    expect(screen.getByRole('heading', { name: 'Balaji Computers' })).toBeInTheDocument()
    expect(document.querySelector('.hero-static')).toBeInTheDocument()
    expect(document.querySelector('.webgl-layer')).not.toBeInTheDocument()
    expect(document.querySelectorAll('.cursor-follower')).toHaveLength(1)
  })

  it('opens each project from the shared data model', async () => {
    renderAt(`/projects/${projects[0].slug}`)
    expect(
      await screen.findByRole('heading', { level: 1, name: projects[0].title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Visit live website/i })).toHaveAttribute(
      'href',
      projects[0].liveUrl,
    )
    expect(document.querySelectorAll('.cursor-follower')).toHaveLength(1)
  })

  it('shows a themed 404 for unknown paths', () => {
    renderAt('/projects/unknown')
    expect(screen.getByRole('heading', { name: 'Signal lost.' })).toBeInTheDocument()
    expect(document.querySelectorAll('.cursor-follower')).toHaveLength(1)
  })

  it('validates the contact form with accessible field errors', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const button = screen.getByRole('button', { name: /Prepare email/i })
    await user.click(button)
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Your message')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('Please correct')
  })

  it('switches experience with accessible tabs', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('tab', { name: /New Shiv Infotech/i }))
    const panel = screen.getByRole('tabpanel')
    expect(
      within(panel).getByRole('heading', { name: 'IT Support Technician' }),
    ).toBeInTheDocument()
    await user.keyboard('{ArrowUp}')
    expect(within(panel).getByRole('heading', { name: 'E-Commerce Manager' })).toBeInTheDocument()
  })

  it('opens and closes mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('keeps content collections valid for future additions', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length)
    expect(new Set(experience.map((e) => e.id)).size).toBe(experience.length)
    expect(new Set(skillGroups.map((s) => s.id)).size).toBe(skillGroups.length)
    expect(new Set(certifications.map((c) => c.id)).size).toBe(certifications.length)
    projects.forEach((project) => expect(project.responsibilities.length).toBeGreaterThan(0))
  })
})
