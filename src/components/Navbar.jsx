// Navigasi melayang di atas: logo, menu, tombol ganti tema, dan tombol Hire Me
import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data.js'

export default function Navbar({ theme, onToggleTheme }) {
  // Status menu di layar HP: terbuka atau tertutup
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        {/* Logo: inisial + nama pendek, klik untuk kembali ke atas */}
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        {/* Menu. Di HP disembunyikan dan muncul lewat tombol garis tiga */}
        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          {/* Link Contact khusus menu HP, karena tombol Contact disembunyikan di layar kecil */}
          <li className="nav-contact-mobile">
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Tombol ganti tema gelap/terang */}
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Tombol menuju bagian kontak */}
          <a href="#contact" className="btn btn-outline nav-hire">
            Contact
          </a>

          {/* Tombol menu, cuma tampil di layar kecil */}
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
