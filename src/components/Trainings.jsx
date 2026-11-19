// Pelatihan dan pendidikan, dua kolom: judul + tanggal, lalu deskripsi
import { trainings } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Trainings() {
  return (
    <section className="section" id="trainings">
      <SectionHeading
        eyebrow="~/learning"
        title="Learning Log"
        text="Programs and courses behind the move from operations into DevOps."
      />

      <div className="training-grid">
        {trainings.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 0.1}>
            <article className="card training">
              <div className="training-head">
                <h3>{item.title}</h3>
                <span className="mono">{item.period}</span>
              </div>
              <p className="training-org">{item.org}</p>
              <p className="muted">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
