export interface Experience {
  id: string
  company: string
  role: string
  location?: string
  period: string
  startDate?: string
  endDate?: string
  summary: string
  achievements: string[]
  technologies: string[]
  companyUrl?: string
  featured?: boolean
}
export interface Project {
  id: string
  slug: string
  title: string
  eyebrow: string
  shortDescription: string
  fullDescription: string
  category: string
  technologies: string[]
  cover: string
  gallery?: string[]
  liveUrl?: string
  repositoryUrl?: string
  responsibilities: string[]
  challenge?: string
  solution?: string
  result?: string
  year?: string
  featured?: boolean
}
export interface SkillGroup {
  id: string
  title: string
  description: string
  skills: string[]
}
export interface Certification {
  id: string
  title: string
  issuer?: string
  year: string
  credentialUrl?: string
  image?: string
  skills?: string[]
}
export interface Education {
  id: string
  title: string
  institution: string
  location?: string
  year: string
}
export interface Social {
  label: string
  url: string
}
