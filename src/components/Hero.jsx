// Bagian pembuka: teks besar bergaris di belakang, nama, peran, dan tombol
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { contact, profile } from '../data.js'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top">
      {/* Teks besar bergaris yang berjalan dari kanan ke kiri, cuma hiasan.
          Teksnya ditulis dua kali supaya putarannya nyambung tanpa jeda */}
      <div className="hero-outline-wrap" aria-hidden="true">
        <div className="marquee">
          <span className="hero-outline">{profile.outlineText}</span>
          <span className="hero-outline">{profile.outlineText}</span>
        </div>
      </div>

      <div className="hero-content">
        {/* Pembuka gaya perintah terminal */}
        <motion.p
          className="eyebrow prompt"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          $ whoami
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero-role"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.role}
          <span className="hero-location">{profile.location}</span>
        </motion.p>

        {/* Dua tombol utama */}
        <motion.div
          className="hero-actions"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#work" className="btn btn-solid">
            See projects
          </a>
          <a href={contact.linkedin} className="btn btn-outline" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Tulisan vertikal di kanan bawah */}
      <a href="#work" className="scroll-hint">
        <span className="scroll-line" aria-hidden="true" />
        Scroll down
      </a>
    </section>
  )
}
