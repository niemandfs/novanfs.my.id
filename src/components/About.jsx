// Bagian About: ringkasan diri, angka singkat, dan kegiatan sekarang
import { Compass, Hammer, BookOpen } from 'lucide-react'
import { currently, profile, stats } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// Ikon untuk tiap baris "Currently", urut sesuai data
const currentlyIcons = [Hammer, Compass, BookOpen]

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading eyebrow="~/profile" title="Ops mindset. Automation first." />

      <Reveal className="about">
        {/* Foto profil kalau ada, kalau tidak tampil inisial di lingkaran */}
        {profile.photo ? (
          <img className="avatar avatar-photo" src={profile.photo} alt={profile.name} />
        ) : (
          <div className="avatar" aria-hidden="true">{profile.initials}</div>
        )}

        <div>
          <h3 className="about-name">{profile.name}</h3>

          {/* Angka singkat */}
          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <p className="about-text">{profile.summary}</p>
        </div>
      </Reveal>

      {/* Kegiatan sekarang */}
      <Reveal>
        <p className="eyebrow">Currently</p>
        <ul className="currently">
          {currently.map((item, index) => {
            const ItemIcon = currentlyIcons[index] || Hammer
            return (
              <li key={item.title}>
                <span className="currently-icon"><ItemIcon size={16} /></span>
                <span>
                  <strong>{item.title}</strong>
                  <span className="muted small">{item.text}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
