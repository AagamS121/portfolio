import type { Social } from '../types/portfolio'

// Change the production URL here once a deployment domain is chosen.
export const siteConfig = {
  name: 'Aagam Shah',
  title: 'IT Support Engineer & Web Developer',
  description: 'IT support, infrastructure, and web development in Mumbai.',
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  email: 'aagamshah.work@gmail.com',
  phone: '+91 63527 57776',
  location: 'Mumbai, Maharashtra, India',
  resumePath: '/resume/Aagam_Shah_Resume_2026.pdf',
  social: [] as Social[],
}

export const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['certifications', 'Certifications'],
  ['education', 'Education'],
  ['contact', 'Contact'],
] as const
