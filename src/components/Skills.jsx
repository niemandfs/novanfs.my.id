// Bagian "What I Can Do": kotak-kotak tool di kiri, dua kartu kemampuan di kanan
import { capabilities, tools } from '../data.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="skills-grid">
        {/* Kolom kiri: judul dan kotak tool */}
        <div>
          <SectionHeading
            eyebrow="~/toolbox"
            title="Toolbox"
            text="Production operations background, now focused on automating how changes reach servers and websites."
          />
          <Reveal>
            <ul className="tool-grid">
              {tools.map((tool) => (
                <li key={tool.name} className="tool">
                  <Icon name={tool.icon} size={20} />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Kolom kanan: dua kartu kemampuan */}
        <div className="cap-cards">
          {capabilities.map((cap, index) => (
            <Reveal key={cap.label} delay={index * 0.1}>
              <article className="card cap-card">
                {/* Ikon dan judul kartu dalam satu baris */}
                <div className="cap-top">
                  <span className="cap-icon">
                    <Icon name={cap.icon} size={22} />
                  </span>
                  <h3 className="cap-title">{cap.label}</h3>
                </div>
                <p>{cap.text}</p>
                <ul className="tag-row">
                  {cap.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
