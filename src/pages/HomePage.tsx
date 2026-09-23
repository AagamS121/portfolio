import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { Link } from 'react-router'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { Header } from '../components/Header'
import { HeroVisual } from '../components/HeroVisual'
import {
  certifications,
  education,
  experience,
  languages,
  projects,
  skillGroups,
} from '../content/portfolio'
import { navItems, siteConfig } from '../config/site'
import { useReveal } from '../hooks/useReveal'

function SectionHeading({
  id,
  index,
  label,
  title,
  description,
}: {
  id: string
  index: string
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">
        <span>{index}</span> / {label}
      </span>
      <div className="section-heading-main">
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" /> IT SUPPORT + WEB DEVELOPMENT{' '}
            <span className="availability-line" /> MUMBAI, INDIA
          </div>
          <p className="hero-kicker">HELLO, I'M AAGAM SHAH</p>
          <h1 id="hero-title">
            Building clarity
            <br />
            from <em>complexity.</em>
          </h1>
          <p className="hero-role">
            IT SUPPORT ENGINEER <span>/</span> WEB DEVELOPER
          </p>
          <p className="hero-description">
            I troubleshoot the systems people rely on and build the websites they use. From hardware
            and networks to hosting and front-end development, I work across the full technical
            stack.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a href={siteConfig.resumePath} className="button button-outline" download>
              Download resume <Download size={17} />
            </a>
          </div>
          {siteConfig.social.length > 0 && (
            <div className="social-links" aria-label="Social profiles">
              {siteConfig.social.map((item) => (
                <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
          <div className="hero-scroll">
            <ArrowDown size={16} /> SCROLL TO EXPLORE <span>01 — 08</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-bottom container">
        <span>
          HARDWARE <b>↗</b> SYSTEMS <b>↗</b> NETWORKS <b>↗</b> WEB
        </span>
        <span>MADE FOR THE REAL WORLD</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section container" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        index="01"
        label="ABOUT"
        title="One connected technical mindset."
      />
      <div className="about-grid">
        <div className="about-intro" data-reveal>
          <span className="overline">THE SHORT VERSION</span>
          <p>
            My work starts at the device, moves through the network and server, and ends at the
            website in someone’s browser.
          </p>
          <p>
            That range helps me solve problems in context. At Shree Balaji Computer Trading Co., I
            support customer systems while independently developing and maintaining company
            websites.
          </p>
          <a className="text-link" href="#experience">
            More about my experience <ArrowRight size={17} />
          </a>
        </div>
        <div className="about-side" data-reveal>
          <div className="metrics">
            <div>
              <strong>
                1,000<span>+</span>
              </strong>
              <small>technical queries resolved</small>
            </div>
            <div>
              <strong>
                150<span>+</span>
              </strong>
              <small>client systems supported in an earlier role</small>
            </div>
            <div>
              <strong>02</strong>
              <small>company websites developed & maintained</small>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
              <b>~/aagam/overview</b>
            </div>
            <div className="terminal-body">
              <p>
                <i>$</i> whoami
              </p>
              <strong>Aagam Shah</strong>
              <p>
                <i>$</i> focus --areas
              </p>
              <strong>support / infrastructure / web</strong>
              <p>
                <i>$</i> location
              </p>
              <strong>
                Mumbai, India<span className="terminal-caret">_</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const [selected, setSelected] = useState(experience[0].id)
  const current = experience.find((item) => item.id === selected) ?? experience[0]
  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const direction =
      event.key === 'ArrowRight' || event.key === 'ArrowDown'
        ? 1
        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
          ? -1
          : 0
    if (!direction) return
    event.preventDefault()
    const next = experience[(index + direction + experience.length) % experience.length]
    setSelected(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          index="02"
          label="EXPERIENCE"
          title="Work across the stack."
          description="From frontline support and system repairs to live websites and commerce operations."
        />
        <div className="experience-grid" data-reveal>
          <div className="experience-list" role="tablist" aria-label="Work experience">
            {experience.map((item, i) => (
              <button
                className={`experience-tab ${selected === item.id ? 'selected' : ''}`}
                id={`tab-${item.id}`}
                key={item.id}
                type="button"
                role="tab"
                tabIndex={selected === item.id ? 0 : -1}
                aria-selected={selected === item.id}
                aria-controls="experience-panel"
                onKeyDown={(event) => moveTab(event, i)}
                onClick={() => setSelected(item.id)}
              >
                <span>0{i + 1}</span>
                <strong>{item.company}</strong>
                <small>{item.period}</small>
                <ChevronRight size={17} />
              </button>
            ))}
          </div>
          <article
            className="experience-detail"
            id="experience-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`tab-${current.id}`}
          >
            <div className="experience-detail-top">
              <span className="pill">{current.period}</span>
              <span className="detail-index">
                SELECTED EXPERIENCE / {experience.findIndex((item) => item.id === current.id) + 1}
              </span>
            </div>
            <h3>{current.role}</h3>
            <p className="detail-company">
              {current.company}
              {current.location ? ` · ${current.location}` : ''}
            </p>
            <p className="detail-summary">{current.summary}</p>
            <ul className="achievement-list">
              {current.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="tag-list">
              {current.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section container"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        id="skills-title"
        index="03"
        label="CAPABILITIES"
        title="Practical skills. Connected thinking."
        description="Four areas of work that meet in real technical environments."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.id} data-reveal>
            <div className="skill-card-top">
              <span>0{index + 1}</span>
              <span className="skill-symbol" aria-hidden>
                {['⌘', '▣', '⌁', '</>'][index]}
              </span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-items">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="04"
          label="SELECTED WORK"
          title="Built to work outside the demo."
          description="Live websites, independent front-end practice and hands-on infrastructure work."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id} data-reveal>
              <div className="project-media">
                <img
                  src={project.cover}
                  alt={`${project.gallery?.length ? 'Cover image' : 'Abstract illustration'} for ${project.title}`}
                  loading="lazy"
                />
                <span className="project-number">
                  0{index + 1} / 0{projects.length}
                </span>
                {project.featured && <span className="featured-badge">FEATURED</span>}
              </div>
              <div className="project-body">
                <span className="overline">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="tag-list">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Link className="text-link" to={`/projects/${project.slug}`}>
                    View case study <ArrowUpRight size={17} />
                  </Link>
                  <div className="project-external-links">
                    {project.liveUrl && (
                      <a
                        className="icon-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        className="icon-link"
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} repository`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section container"
      aria-labelledby="certifications-title"
    >
      <SectionHeading
        id="certifications-title"
        index="05"
        label="CREDENTIALS"
        title="Learning that supports the work."
        description="Certifications and technical training listed in my 2026 resume."
      />
      <div className="cert-grid">
        {certifications.map((certificate) => (
          <article className="cert-card" key={certificate.id} data-reveal>
            <span className="cert-icon">
              {certificate.image ? (
                <img src={certificate.image} alt="" loading="lazy" />
              ) : (
                <ShieldCheck size={23} />
              )}
            </span>
            <div>
              <span className="overline">
                {certificate.issuer ? `${certificate.issuer} / ` : ''}
                {certificate.year}
              </span>
              <h3>{certificate.title}</h3>
              {certificate.skills && <p>{certificate.skills.join(' · ')}</p>}
            </div>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                aria-label={`View credential for ${certificate.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          index="06"
          label="EDUCATION"
          title="Where the foundation formed."
        />
        <div className="education-grid">
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.id} data-reveal>
                <span className="education-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.institution}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                </div>
                <ArrowUpRight size={18} />
              </article>
            ))}
          </div>
          <div className="languages" data-reveal>
            <span className="overline">LANGUAGES</span>
            <div>
              {languages.map((language) => (
                <p key={language}>{language}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = new FormData(form)
    if (values.get('website')) return
    const name = String(values.get('name') || '').trim()
    const email = String(values.get('email') || '').trim()
    const message = String(values.get('message') || '').trim()
    const nextErrors: Record<string, string> = {}
    if (name.length < 2) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = 'Please enter a valid email address.'
    if (message.length < 10) nextErrors.message = 'Please add at least 10 characters.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('Please correct the highlighted fields.')
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with the message ready to send.')
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-heading">
        <span className="overline">SEND A MESSAGE</span>
        <p>Tell me what you are working on.</p>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <small id="name-error" className="field-error">
              {errors.name}
            </small>
          )}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <small id="email-error" className="field-error">
              {errors.email}
            </small>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can I help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <small id="message-error" className="field-error">
            {errors.message}
          </small>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-bottom">
        <span role="status">{status}</span>
        <button className="button button-primary" type="submit">
          Prepare email <ArrowUpRight size={18} />
        </button>
      </div>
      <small className="form-note">
        This opens your email app. No message is sent until you confirm it there.
      </small>
    </form>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          index="07"
          label="CONTACT"
          title="Have a technical challenge?"
          description="Whether it is a system that needs fixing or a website that needs building, let’s talk."
        />
        <div className="contact-grid">
          <div className="contact-intro" data-reveal>
            <p>Let’s make it work.</p>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email} <ArrowUpRight size={27} />
            </a>
            <div className="contact-facts">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <Phone size={17} /> {siteConfig.phone}
              </a>
              <span>
                <MapPin size={17} /> {siteConfig.location}
              </span>
            </div>
            <a className="button button-outline" href={siteConfig.resumePath} download>
              Download resume <Download size={17} />
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="footer-brand">
              AAGAM SHAH<span>.</span>
            </span>
            <p>IT support / infrastructure / web development</p>
            {siteConfig.social.length > 0 && (
              <div className="social-links">
                {siteConfig.social.map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
        <div className="footer-nav">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AAGAM SHAH</span>
          <span>BUILT WITH CARE IN MUMBAI, INDIA</span>
        </div>
      </div>
    </footer>
  )
}

export function HomePage() {
  const root = useReveal()
  return (
    <>
      <Header />
      <main id="main" ref={root}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
