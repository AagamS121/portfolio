import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { Header } from '../components/Header'
import { projects } from '../content/portfolio'
import { NotFoundPage } from './NotFoundPage'

/** Case studies render directly from the same project objects as home cards. */
export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFoundPage />
  return (
    <>
      <Header />
      <main id="main" className="case-study">
        <div className="container">
          <Link className="back-link" to="/#projects">
            <ArrowLeft size={17} /> ALL PROJECTS
          </Link>
          <div className="case-head">
            <span className="eyebrow">CASE STUDY / {project.eyebrow.toUpperCase()}</span>
            <h1>{project.title}</h1>
            <p>{project.shortDescription}</p>
            <div className="case-actions">
              {project.liveUrl && (
                <a
                  className="button button-primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live website <ExternalLink size={17} />
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  className="button button-outline"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository <ExternalLink size={17} />
                </a>
              )}
              <Link className="button button-outline" to="/#contact">
                Discuss a project <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="case-cover">
            <img
              src={project.cover}
              alt={`${project.gallery?.length ? 'Cover image' : 'Abstract visual'} representing ${project.title}`}
            />
          </div>
          {project.gallery && project.gallery.length > 0 && (
            <div className="case-gallery">
              {project.gallery.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} project screenshot ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
          <div className="case-content">
            <aside>
              <span className="overline">PROJECT DETAILS</span>
              <div>
                <small>CATEGORY</small>
                <strong>{project.category}</strong>
              </div>
              <div>
                <small>TOOLS & AREAS</small>
                <strong>{project.technologies.join(' · ')}</strong>
              </div>
              {project.year && (
                <div>
                  <small>YEAR</small>
                  <strong>{project.year}</strong>
                </div>
              )}
            </aside>
            <div className="case-narrative">
              <section>
                <span className="overline">01 / OVERVIEW</span>
                <h2>The work</h2>
                <p>{project.fullDescription}</p>
              </section>
              {project.challenge && (
                <section>
                  <span className="overline">02 / CONTEXT</span>
                  <h2>The challenge</h2>
                  <p>{project.challenge}</p>
                </section>
              )}
              <section>
                <span className="overline">03 / RESPONSIBILITIES</span>
                <h2>What I handled</h2>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item}>
                      <span>↗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              {project.solution && (
                <section>
                  <span className="overline">04 / APPROACH</span>
                  <h2>The solution</h2>
                  <p>{project.solution}</p>
                </section>
              )}
              {project.result && (
                <section>
                  <span className="overline">05 / OUTCOME</span>
                  <h2>The result</h2>
                  <p>{project.result}</p>
                </section>
              )}
            </div>
          </div>
          <div className="next-project">
            <span className="overline">NEXT PROJECT</span>
            {(() => {
              const next = projects[(projects.indexOf(project) + 1) % projects.length]
              return (
                <Link to={`/projects/${next.slug}`}>
                  {next.title} <ArrowUpRight />
                </Link>
              )
            })()}
          </div>
        </div>
      </main>
    </>
  )
}
