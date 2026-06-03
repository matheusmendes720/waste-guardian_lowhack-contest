import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Scale, Cloud } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Stagger container — children animate in sequence
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Splash() {
  const navigate = useNavigate()

  // Auto-transition to home after 2.5s (matches PRD spec).
  // Skipped when user prefers reduced motion.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const t = setTimeout(() => navigate('/splash', { replace: true }), 2500)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        background:
          'linear-gradient(160deg, #22C55E 0%, #16A34A 55%, #12833A 100%)'
      }}
      aria-label="Tela inicial do Waste Guardian"
    >
      {/* Breathing radial halo — the only infinite loop allowed on the Splash */}
      <div
        className="pointer-events-none absolute inset-0 animate-breathe"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)'
        }}
        aria-hidden="true"
      />

      {/* Soft floating glow accents */}
      <div
        className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.35), rgba(74,222,128,0) 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />

      {/* Skip link (a11y) */}
      <a
        href="#splash-cta"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-dark"
      >
        Pular para o conteúdo
      </a>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-4 w-full max-w-[400px]"
      >
        {/* Glass card */}
        <div
          className="glass-dark rounded-2xl px-7 pt-10 pb-7 text-center shadow-xl"
          style={{ borderRadius: '28px' }}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg"
            aria-hidden="true"
          >
            <Leaf
              size={40}
              strokeWidth={1.6}
              className="text-primary"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(1.875rem, 7vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Waste Guardian
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-2 text-white/90"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}
          >
            Cada grama conta
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mx-auto my-6 h-px w-16 bg-white/30"
            aria-hidden="true"
          />

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3"
            role="list"
            aria-label="Impacto medio por usuario"
          >
            <div
              className="rounded-xl bg-white/15 px-3 py-4 backdrop-blur-sm"
              role="listitem"
            >
              <div className="mb-1 flex justify-center text-white/90">
                <Scale size={18} strokeWidth={1.5} />
              </div>
              <div
                className="text-white font-bold tabular-nums"
                style={{ fontSize: '1.5rem', lineHeight: 1.1 }}
              >
                2.3<span className="text-base font-semibold opacity-80">kg</span>
              </div>
              <div className="mt-0.5 text-white/80 text-xs">salvos</div>
            </div>

            <div
              className="rounded-xl bg-white/15 px-3 py-4 backdrop-blur-sm"
              role="listitem"
            >
              <div className="mb-1 flex justify-center text-white/90">
                <Cloud size={18} strokeWidth={1.5} />
              </div>
              <div
                className="text-white font-bold tabular-nums"
                style={{ fontSize: '1.5rem', lineHeight: 1.1 }}
              >
                1.8<span className="text-base font-semibold opacity-80">kg</span>
              </div>
              <div className="mt-0.5 text-white/80 text-xs">CO&#8322; evitado</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            id="splash-cta"
            variants={itemVariants}
            onClick={() => navigate('/splash', { replace: true })}
            whileTap={{ scale: 0.97 }}
            className="mt-7 w-full rounded-xl bg-white px-5 py-4 font-semibold text-primary-dark shadow-md transition-colors hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            style={{ minHeight: '56px', fontSize: '1rem' }}
            aria-label="Comecar agora e abrir o aplicativo"
          >
            Começar Agora
          </motion.button>

          {/* Footnote */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-white/70"
            style={{ fontSize: '0.75rem' }}
          >
            v1.0 — Liga Jovem 4ª Edição
          </motion.p>
        </div>
      </motion.section>
    </main>
  )
}
