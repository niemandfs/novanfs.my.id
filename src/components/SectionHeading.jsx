// Judul tiap bagian: label kecil di atas, judul besar dengan kursor berkedip, lalu deskripsi
import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title}
        {/* Garis tegak berkedip, efek seperti sedang mengetik */}
        <span className="cursor" aria-hidden="true" />
      </h2>
      {text && <p className="section-text">{text}</p>}
    </Reveal>
  )
}
