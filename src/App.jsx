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

// Durasi scroll waktu klik menu (milidetik). Besarkan angkanya kalau mau lebih pelan
const SCROLL_DURATION = 1100

// Jarak dari atas layar saat berhenti, biar judul bagian tidak ketutup navbar
const SCROLL_OFFSET = 96

// Kurva gerak: pelan di awal, cepat di tengah, pelan lagi di akhir
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Scroll halus ke posisi tujuan dengan durasi tertentu
function smoothScrollTo(targetY) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  function step(now) {
    // Seberapa jauh waktu sudah berjalan, dari 0 sampai 1
    const progress = Math.min((now - startTime) / SCROLL_DURATION, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

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

  // Tangkap semua klik link "#bagian" (menu, tombol, logo) dan pakai scroll pelan buatan sendiri
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const id = link.getAttribute('href').slice(1)
      const target = id === 'top' ? document.body : document.getElementById(id)
      if (!target) return

      event.preventDefault()

      // Posisi tujuan: atas halaman untuk #top, selain itu posisi bagian dikurangi tinggi navbar
      const targetY =
        id === 'top' ? 0 : target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET

      // Kalau pengunjung memilih "kurangi animasi", langsung lompat tanpa animasi
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) window.scrollTo(0, targetY)
      else smoothScrollTo(targetY)

      // Perbarui alamat di browser (misal novanfs.my.id/#work) tanpa lompat
      history.pushState(null, '', `#${id}`)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

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
