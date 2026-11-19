// Animasi "muncul dari bawah" saat bagian ini masuk layar waktu di-scroll
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className }) {
  // Hormati setting "kurangi animasi" di perangkat pengunjung
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: animasi cuma sekali, amount: mulai saat 20% elemen terlihat
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
