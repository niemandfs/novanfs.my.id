// Komponen utama: menyusun semua bagian website dari atas ke bawah
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Trainings from './components/Trainings.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

// Tahun sekarang untuk footer, dihitung sekali saat file dimuat
const year = new Date().getFullYear()

// Baca tema yang terakhir dipilih pengunjung (kalau ada), default gelap
function getInitialTheme() {
  try {
    return localStorage.getItem('theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  // Tombol "kembali ke atas" muncul setelah scroll agak jauh
  const [showTop, setShowTop] = useState(false)

  // Setiap tema berubah: pasang ke tag <html> dan simpan pilihannya
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Penyimpanan browser tidak tersedia, abaikan
    }
  }, [theme])

  // Pantau posisi scroll untuk tombol "kembali ke atas"
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Trainings />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {year} {profile.name}</p>
        <p className="muted small">Built with React, deployed on Cloudflare Pages via GitHub</p>
      </footer>

      {/* Tombol kembali ke atas */}
      <a href="#top" className={`to-top ${showTop ? 'is-visible' : ''}`} aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </>
  )
}
