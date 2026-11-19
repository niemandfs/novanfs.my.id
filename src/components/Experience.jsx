// Pengalaman kerja dalam bentuk garis waktu (timeline)
import { experience } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow="~/track-record"
        title="Track Record"
        text="Operations roles supporting a national telco's infrastructure."
      />

      <ol className="timeline">
        {experience.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.1}>
            <li className="timeline-item">
              {/* Titik di garis waktu */}
              <span className="timeline-dot" aria-hidden="true" />
              <div className="card timeline-card">
                <div className="timeline-head">
                  <h3>
                    {job.role} <span className="muted">· {job.company}</span>
                  </h3>
                  <span className="mono">{job.period}</span>
                </div>
                <p className="muted small">{job.client}</p>
                <ul className="bullets">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
