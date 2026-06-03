import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Heart,
  MapPin,
  Phone,
  Clock,
  Gift,
  Home as HomeIcon,
  ScanLine,
  Leaf,
  CalendarCheck,
  CheckCircle2,
  XCircle
} from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore.js'

/* -------------------------------------------------------------------------- */
/*  Mock cooperative catalogue                                                 */
/* -------------------------------------------------------------------------- */

const COOPERATIVAS = [
  {
    id: 'banco',
    emoji: '🏪',
    name: 'Banco de Alimentos Municipal',
    address: 'R. das Palmeiras, 123 — Pinheiros',
    hours: 'Seg-Sex 08:00-18:00',
    distance: '2.3km',
    accepts: 'Frutas, legumes, laticínios, pães, industrializados',
    contact: '(11) 3333-4444',
    tel: '1133334444',
    status: 'open'
  },
  {
    id: 'sesc',
    emoji: '🏢',
    name: 'Coletivo Sesc Mesa Brasil',
    address: 'Av. Paulista, 1000 — Bela Vista',
    hours: 'Seg-Sáb 09:00-17:00',
    distance: '4.1km',
    accepts: 'Perecíveis (frutas, verduras, legumes)',
    contact: '(11) 2222-3333',
    tel: '1122223333',
    status: 'closed'
  },
  {
    id: 'recycla',
    emoji: '♻️',
    name: 'Associação Recycla',
    address: 'R. Augusta, 500 — Consolação',
    hours: 'Ter-Sáb 07:00-15:00',
    distance: '1.8km',
    accepts: 'Alimentos próximos ao vencimento',
    contact: '(11) 4444-5555',
    tel: '1144445555',
    status: 'open'
  }
]

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                        */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.07
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }
}

/* -------------------------------------------------------------------------- */
/*  Reusable: glass card                                                      */
/* -------------------------------------------------------------------------- */

function GlassCard({ className = '', children, ...rest }) {
  return (
    <div
      className={`glass rounded-xl shadow-sm ${className}`}
      style={{ borderRadius: '20px' }}
      {...rest}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

function Header() {
  const navigate = useNavigate()
  return (
    <header
      className="sticky top-0 z-30 flex h-[60px] items-center justify-between border-b border-white/40 bg-white/70 px-4 backdrop-blur-xl"
      style={{ minHeight: '60px' }}
    >
      <button
        type="button"
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ArrowLeft size={20} strokeWidth={2} />
      </button>

      <h1 className="text-base font-bold tracking-tight text-ink">
        Doar Alimentos
      </h1>

      <span
        className="flex h-10 w-10 items-center justify-center"
        aria-hidden="true"
      />
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Context banner (when arriving from Scanner with a product)                */
/* -------------------------------------------------------------------------- */

function ContextBanner({ product }) {
  if (!product) return null
  return (
    <motion.section
      variants={itemVariants}
      aria-label="Contexto da doacao"
      className="glass flex items-start gap-3 p-3 shadow-sm"
      style={{
        borderRadius: '20px',
        background:
          'linear-gradient(135deg, rgba(220,252,231,0.85) 0%, rgba(255,255,255,0.75) 100%)'
      }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 text-2xl"
        aria-hidden="true"
      >
        {product.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-dark">
          Doando
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-ink">
          {product.name}
        </p>
      </div>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Impact banner — breathing green gradient                                  */
/* -------------------------------------------------------------------------- */

function ImpactBanner() {
  return (
    <motion.section
      variants={itemVariants}
      aria-label="Impacto social gerado"
      className="relative overflow-hidden rounded-xl text-white shadow-md"
      style={{ borderRadius: '20px' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.22), rgba(255,255,255,0) 70%)'
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4 p-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
          aria-hidden="true"
        >
          <Heart size={22} strokeWidth={2.2} className="text-white" fill="white" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span
              className="font-extrabold tabular-nums"
              style={{ fontSize: '1.875rem', lineHeight: 1 }}
            >
              R$ 50
            </span>
            <span className="text-sm font-semibold opacity-90">gerados</span>
          </div>
          <p className="mt-1 text-xs font-medium opacity-90">
            de impacto social gerado
          </p>
        </div>
      </div>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Map placeholder with 3 staggered drop pins                                 */
/* -------------------------------------------------------------------------- */

const PIN_POSITIONS = [
  { top: '20%', left: '30%' },
  { top: '50%', left: '60%' },
  { top: '70%', left: '25%' }
]

function MapPlaceholder() {
  return (
    <motion.section
      variants={itemVariants}
      aria-label="Mapa de cooperativas proximas"
      className="relative overflow-hidden rounded-xl"
      style={{ height: '180px', borderRadius: '20px' }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-surface-muted to-border"
        aria-hidden="true"
      />
      {/* Soft grid lines for a "map" feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(34,197,94,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />
      {/* Soft glow blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34,197,94,0.18), rgba(34,197,94,0) 70%)'
        }}
        aria-hidden="true"
      />

      {PIN_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
          initial={{ y: -28, opacity: 0, scale: 0.6 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2 + i * 0.18,
            duration: 0.55,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <div
            className="flex h-9 w-9 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-white shadow-md ring-2 ring-primary"
            aria-hidden="true"
          >
            <MapPin
              size={18}
              strokeWidth={2.2}
              className="text-primary"
              fill="currentColor"
            />
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-ink-secondary backdrop-blur">
        3 cooperativas próximas
      </div>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Cooperative card                                                          */
/* -------------------------------------------------------------------------- */

function CoopCard({ coop, onSchedule, onToast }) {
  const isOpen = coop.status === 'open'

  return (
    <motion.div
      variants={itemVariants}
      className="glass flex flex-col gap-3 p-4 shadow-sm"
      style={{ borderRadius: '20px' }}
      aria-label={`Cooperativa ${coop.name}`}
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-2xl"
          aria-hidden="true"
        >
          {coop.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className="font-semibold text-ink"
            style={{ fontSize: '15px', lineHeight: 1.25 }}
          >
            {coop.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink-secondary">{coop.address}</p>
        </div>
        <span
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-[11px] font-bold text-primary-dark"
          aria-label={`Distancia ${coop.distance}`}
        >
          <MapPin size={11} strokeWidth={2.4} />
          {coop.distance}
        </span>
      </div>

      {/* Meta row: hours + status */}
      <div className="flex flex-wrap items-center gap-2 pl-[60px]">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-secondary">
          <Clock size={12} strokeWidth={2} />
          {coop.hours}
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full text-xs font-semibold ${
            isOpen
              ? 'bg-success-bg text-success-fg'
              : 'bg-danger-bg text-danger-fg'
          }`}
          style={{ padding: '2px 8px' }}
          aria-label={isOpen ? 'Aberto agora' : 'Fechado'}
        >
          {isOpen ? (
            <CheckCircle2 size={12} strokeWidth={2.4} />
          ) : (
            <XCircle size={12} strokeWidth={2.4} />
          )}
          {isOpen ? 'Aberto agora' : 'Fechado'}
        </span>
      </div>

      {/* Accepts line */}
      <div className="pl-[60px]">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
          Aceita
        </p>
        <p className="mt-0.5 text-xs text-ink">{coop.accepts}</p>
      </div>

      {/* Contact + CTA */}
      <div className="mt-1 flex items-center justify-between gap-3 pl-[60px]">
        <a
          href={`tel:${coop.tel}`}
          onClick={(e) => {
            e.preventDefault()
            onToast && onToast(`Ligando para ${coop.contact}`)
          }}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary-dark transition-colors hover:text-primary focus:outline-none focus-visible:underline"
          aria-label={`Ligar para ${coop.name}: ${coop.contact}`}
        >
          <Phone size={12} strokeWidth={2.2} />
          {coop.contact}
        </a>
        <motion.button
          type="button"
          onClick={() => isOpen && onSchedule(coop)}
          disabled={!isOpen}
          whileTap={isOpen ? { scale: 0.97 } : undefined}
          aria-label={
            isOpen
              ? `Agendar retirada em ${coop.name}`
              : `${coop.name} esta fechado`
          }
          className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-xl px-4 text-xs font-semibold text-white shadow-sm transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            isOpen
              ? 'opacity-100'
              : 'cursor-not-allowed opacity-50'
          }`}
          style={{
            background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
          }}
        >
          <CalendarCheck size={14} strokeWidth={2.2} />
          Agendar Retirada
        </motion.button>
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation (Doacao active)                                          */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Inicio', icon: HomeIcon, to: '/home' },
  { label: 'Scanner', icon: ScanLine, to: '/scanner' },
  { label: 'Doar', icon: Gift, to: '/doacao' },
  { label: 'Perfil', icon: Leaf, to: '/perfil' }
]

function BottomNav() {
  const location = useLocation()
  const isActive = (to) => location.pathname === to
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-30 w-full max-w-[428px] -translate-x-1/2 border-t border-white/40 bg-white/85 backdrop-blur-xl"
      style={{ minHeight: '70px' }}
      aria-label="Navegacao principal"
    >
      <ul className="flex h-[70px] items-stretch justify-around">
        {NAV_ITEMS.map(({ label, icon: Icon, to }) => {
          const active = isActive(to)
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                aria-label={label}
                aria-current={active ? 'page' : undefined}
                className="group relative flex h-full flex-col items-center justify-center gap-1 text-ink-secondary transition-colors hover:text-primary focus:outline-none focus-visible:text-primary"
              >
                <Icon
                  size={22}
                  strokeWidth={active ? 2.4 : 1.8}
                  className={active ? 'text-primary' : 'text-ink-secondary'}
                />
                <span
                  className={`text-[11px] font-semibold ${
                    active ? 'text-primary' : 'text-ink-secondary'
                  }`}
                >
                  {label}
                </span>
                {active && (
                  <span
                    className="absolute top-1 h-1 w-1 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* -------------------------------------------------------------------------- */
/*  Toast (lightweight, bottom-center)                                         */
/* -------------------------------------------------------------------------- */

function Toast({ message, visible }) {
  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : 80,
        opacity: visible ? 1 : 0
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed bottom-[88px] left-1/2 z-40 -translate-x-1/2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-xl"
      style={{
        background: 'rgba(17,24,39,0.92)',
        backdropFilter: 'blur(8px)'
      }}
      role="status"
      aria-live="polite"
    >
      {message}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Doacao screen                                                              */
/* -------------------------------------------------------------------------- */

export default function Doacao() {
  const navigate = useNavigate()

  const contextProduct = useAppStore((s) => s.doacao.contextProduct)
  const setDoacaoProduct = useAppStore((s) => s.setDoacaoProduct)
  const setPendingCoopId = useAppStore((s) => s.setPendingCoopId)
  const lastScanned = useAppStore((s) => s.scanner.lastScanned)

  // If the user lands on /doacao directly without a doacao context
  // product, fall back to the last scanned product (same pattern as
  // Receitas) so the experience is consistent.
  useEffect(() => {
    if (!contextProduct && lastScanned) {
      setDoacaoProduct(lastScanned)
    }
  }, [contextProduct, lastScanned, setDoacaoProduct])

  const [toast, setToast] = useState({ visible: false, message: '' })
  const toastTimerRef = useRef(null)

  useEffect(() => () => clearTimeout(toastTimerRef.current), [])

  const showToast = (message) => {
    setToast({ visible: true, message })
    clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }))
    }, 1800)
  }

  const handleSchedule = (coop) => {
    setPendingCoopId(coop.id)
    showToast(`Retirada agendada em ${coop.name}`)
  }

  const activeContext = useAppStore((s) => s.doacao.contextProduct)

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background:
          'linear-gradient(180deg, #F0FDF4 0%, #F7F8F7 35%, #F7F8F7 100%)'
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-dark"
      >
        Pular para o conteudo
      </a>

      <div className="mx-auto w-full max-w-[428px]">
        <Header />

        <motion.main
          id="main-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 px-4 pb-32 pt-4"
          aria-label="Tela de doacao de alimentos"
        >
          <ImpactBanner />
          <MapPlaceholder />
          <ContextBanner product={activeContext} />

          <section
            className="flex flex-col gap-3"
            aria-label="Lista de cooperativas"
          >
            <h2 className="px-1 text-sm font-bold text-ink">
              Cooperativas próximas
            </h2>
            {COOPERATIVAS.map((coop) => (
              <CoopCard
                key={coop.id}
                coop={coop}
                onSchedule={handleSchedule}
                onToast={showToast}
              />
            ))}
          </section>
        </motion.main>

        <BottomNav />
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
