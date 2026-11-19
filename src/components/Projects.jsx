// Daftar project bernomor (01, 02, ...) dengan teknologi dan link
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  return (
    <section className="section" id="work">
      <SectionHeading
        eyebrow="~/projects"
        title="Things I've Built"
        text="Hands-on work on pipelines, containers, DNS and web infrastructure."
      />

      <ol className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <li className="project">
              {/* Nomor urut dengan dua digit: 01, 02, ... */}
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <ul className="tag-row">
                  {project.stack.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Link ke repo, cuma tampil kalau ada */}
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
