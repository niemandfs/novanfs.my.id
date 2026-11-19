// Mengubah nama ikon (teks dari data.js) menjadi komponen ikon lucide-react
import {
  Activity, Cloud, Container, GitBranch, Layers, Rocket, Server, Terminal, Workflow,
} from 'lucide-react'

// Daftar ikon yang boleh dipakai di data.js
const icons = { Activity, Cloud, Container, GitBranch, Layers, Rocket, Server, Terminal, Workflow }

export default function Icon({ name, size = 22 }) {
  // Kalau nama tidak ditemukan, pakai ikon Terminal sebagai cadangan
  const Component = icons[name] || Terminal
  return <Component size={size} strokeWidth={1.6} aria-hidden="true" />
}
