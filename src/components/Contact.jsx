// Bagian kontak: judul besar di kiri, kartu email/GitHub/LinkedIn di kanan
import { useState } from 'react'
import { ArrowUpRight, Check, Globe, Mail, Network } from 'lucide-react'
import { contact } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  // Penanda email baru saja disalin, untuk menampilkan tulisan "Copied!"
  const [copied, setCopied] = useState(false)

  // Saat kartu email diklik: salin alamat email, lalu aplikasi email tetap dicoba dibuka
  const copyEmail = () => {
    navigator.clipboard?.writeText(contact.email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Daftar kartu kontak. Ikon generik dipakai, bukan logo merek
  const items = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
    { label: 'GitHub', value: contact.githubLabel, href: contact.github, Icon: Globe },
    { label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin, Icon: Network },
  ]

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <p className="eyebrow">~/contact</p>
        <h2 className="contact-title">
          Get in
          <br />
          touch.
        </h2>
        <p className="contact-lead">Something to build, fix or keep running? I&apos;m listening.</p>
        <p className="muted">
          Open to roles and projects in DevOps, system administration, CI/CD and web operations.
        </p>
      </Reveal>

      <div className="contact-cards">
        {items.map(({ label, value, href, Icon }, index) => (
          <Reveal key={label} delay={index * 0.08}>
            <a
              className="card contact-card"
              href={href}
              // Link ke situs lain dibuka di tab baru, email tidak
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              // Kartu email ikut menyalin alamat waktu diklik
              onClick={label === 'Email' ? copyEmail : undefined}
            >
              <span className="contact-icon"><Icon size={18} /></span>
              <span>
                <span className="eyebrow">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
              {/* Di kartu email, panah berganti jadi "Copied!" sebentar setelah diklik */}
              {label === 'Email' && copied ? (
                <span className="copied">
                  <Check size={16} /> Copied!
                </span>
              ) : (
                <ArrowUpRight size={18} className="contact-arrow" />
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
