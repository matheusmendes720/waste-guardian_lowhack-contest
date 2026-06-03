import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ScanLine,
  ChefHat,
  Gift,
  Home as HomeIcon,
  Leaf,
  AlertCircle,
  Sparkles
} from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore.js'

/* -------------------------------------------------------------------------- */
/*  Mock product catalogue (PRD_01_PART_B_SCREEN_SPECS.md)                    */
/* -------------------------------------------------------------------------- */

const MOCK_SCANS = [
  { id: 'iogurte', emoji: '🍶', name: 'Iogurte Natural Integral', expiry: '05/06/2026', daysLeft: 2, value: 'R$ 8,90', co2: '250g' },
  { id: 'pao',     emoji: '🍞', name: 'Pão de Forma Integral',     expiry: '04/06/2026', daysLeft: 1, value: 'R$ 6,50', co2: '180g' },
  { id: 'banana',  emoji: '🍌', name: 'Banana Prata (3 un)',       expiry: '03/06/2026', daysLeft: 0, value: 'R$ 4,90', co2: '120g' },
  { id: 'leite',   emoji: '🥛', name: 'Leite Integral UHT',        expiry: '08/06/2026', daysLeft: 5, value: 'R$ 5,90', co2: '200g' },
  { id: 'queijo',  emoji: '🧀', name: 'Queijo Minas Frescal',      expiry: '06/06/2026', daysLeft: 3, value: 'R$ 12,90', co2: '400g' },
  { id: 'tomate',  emoji: '🍅', name: 'Tomate Italiano (4 un)',    expiry: '05/06/2026', daysLeft: 2, value: 'R$ 7,80', co2: '150g' },
  { id: 'maca',    emoji: '🍎', name: 'Maçã Fuji (5 un)',          expiry: '12/06/2026', daysLeft: 9, value: 'R$ 9,50', co2: '100g' },
  { id: 'cenoura', emoji: '🥕', name: 'Cenoura Orgânica (1 kg)',   expiry: '10/06/2026', daysLeft: 7, value: 'R$ 4,50', co2: '80g'  }
]

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function pickRandomProduct() {
  return MOCK_SCANS[Math.floor(Math.random() * MOCK_SCANS.length)]
}

/**
 * Translate `daysLeft` into the badge styling + copy described in the spec.
 * Returns { tone, label, classes } so the card can stay declarative.
 */
function getExpiryTone(daysLeft) {
  if (daysLeft <= 0) {
    return {
      tone: 'danger',
      label: 'Vence hoje',
      classes: 'bg-danger-bg text-danger-fg border-danger-border'
    }
  }
  if (daysLeft === 1) {
    return {
      tone: 'warning',
      label: 'Vence amanhã',
      classes: 'bg-warning-bg text-warning-fg border-warning-border'
    }
  }
  if (daysLeft <= 7) {
    return {
      tone: 'warning',
      label: `Vence em ${daysLeft} dias`,
      classes: 'bg-warning-bg/80 text-warning-fg border-warning-border/70'
    }
  }
  return {
    tone: 'success',
    label: `Fresco, vence em ${daysLeft} dias`,
    classes: 'bg-success-bg text-success-fg border-success-border'
  }
}

/* -------------------------------------------------------------------------- */
/*  Reusable: glass card                                                      */
/* -------------------------------------------------------------------------- */

function GlassCard({ className = '', children, ...rest }) {
  return (
    <div className={`glass rounded-xl shadow-md ${className}`} style={{ borderRadius: '20px' }} {...rest}>
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

      <h1 className="text-base font-bold tracking-tight text-ink">Scanner</h1>

      <span className="flex h-10 w-10 items-center justify-center" aria-hidden="true" />
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Camera frame (viewfinder + capture button)                                */
/* -------------------------------------------------------------------------- */

function CameraFrame({ state, onCapture }) {
  const isScanning = state === 'scanning'
  const isResult = state === 'result'

  return (
    <section
      className="relative mx-auto w-full overflow-hidden"
      style={{ height: '280px' }}
      aria-label="Area do viewfinder da camera"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"
        aria-hidden="true"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.45) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Viewfinder box */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center rounded-2xl border-2 border-white/80"
          style={{
            width: '200px',
            height: '200px',
            boxShadow: '0 0 40px rgba(255,255,255,0.18), inset 0 0 30px rgba(34,197,94,0.10)'
          }}
        >
          {/* Corner accents */}
          {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} h-5 w-5 border-primary`}
              style={{
                borderTopWidth: pos.includes('top') ? '3px' : 0,
                borderBottomWidth: pos.includes('bottom') ? '3px' : 0,
                borderLeftWidth: pos.includes('left') ? '3px' : 0,
                borderRightWidth: pos.includes('right') ? '3px' : 0,
                borderTopLeftRadius: pos.includes('top') && pos.includes('left') ? '8px' : 0,
                borderTopRightRadius: pos.includes('top') && pos.includes('right') ? '8px' : 0,
                borderBottomLeftRadius: pos.includes('bottom') && pos.includes('left') ? '8px' : 0,
                borderBottomRightRadius: pos.includes('bottom') && pos.includes('right') ? '8px' : 0
              }}
              aria-hidden="true"
            />
          ))}

          {/* Center icon — pulsing ScanLine */}
          {!isResult && (
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-white"
            >
              <ScanLine size={64} strokeWidth={1.6} />
            </motion.div>
          )}

          {/* Scanning horizontal sweep line */}
          {isScanning && (
            <motion.span
              aria-hidden="true"
              className="absolute left-2 right-2 h-0.5 rounded-full bg-primary"
              style={{ boxShadow: '0 0 12px rgba(34,197,94,0.9)' }}
              animate={{ top: ['10%', '90%', '10%'] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            />
          )}
        </motion.div>
      </div>

      {/* Capture button — overlaps bottom of camera frame */}
      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <motion.button
          type="button"
          onClick={onCapture}
          disabled={isScanning || isResult}
          aria-label="Capturar produto"
          whileTap={{ scale: 0.94 }}
          animate={isScanning ? { scale: [1, 1.06, 1] } : { scale: 1 }}
          transition={isScanning ? { repeat: Infinity, duration: 1.2 } : { duration: 0.2 }}
          className="flex items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-primary/40 transition-opacity focus:outline-none focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-70"
          style={{ width: '72px', height: '72px' }}
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
              boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.6)'
            }}
          >
            <ScanLine size={26} strokeWidth={2.4} className="text-white" />
          </span>
        </motion.button>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Status text under the viewfinder                                          */
/* -------------------------------------------------------------------------- */

function ScannerStatus({ state, onRetry }) {
  if (state === 'scanning') {
    return (
      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
          Escaneando
        </p>
        <div className="flex items-center gap-1.5" aria-label="Escaneando">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-white"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (state === 'error') {
    return (
      <div className="mt-6 flex flex-col items-center gap-4 px-6 text-center">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: 'rgba(254,226,226,0.9)' }}
          aria-hidden="true"
        >
          <AlertCircle size={24} className="text-danger-fg" />
        </span>
        <p className="text-sm font-semibold text-ink">Não consegui identificar</p>
        <p className="-mt-2 text-xs text-ink-secondary">
          Posicione o produto dentro do quadro e tente novamente.
        </p>
        <motion.button
          type="button"
          onClick={onRetry}
          whileTap={{ scale: 0.97 }}
          className="mt-1 inline-flex h-10 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}
        >
          <Sparkles size={16} strokeWidth={2} />
          Tentar novamente
        </motion.button>
      </div>
    )
  }

  // idle
  return (
    <p className="mt-8 text-center text-sm font-semibold text-white/90">
      Posicione o produto dentro do quadro
    </p>
  )
}

/* -------------------------------------------------------------------------- */
/*  Result card                                                               */
/* -------------------------------------------------------------------------- */

function ResultCard({ product, onRecipes, onDonate }) {
  const tone = getExpiryTone(product.daysLeft)
  const isDanger = tone.tone === 'danger'

  return (
    <motion.div
      key={product.id}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 28 }}
      className="mt-6"
    >
      <GlassCard className="overflow-hidden p-5">
        {/* Header row: emoji + name + badge */}
        <div className="flex items-start gap-3">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-3xl"
            aria-hidden="true"
          >
            {product.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h2
              className="font-semibold text-ink"
              style={{ fontSize: '18px', lineHeight: 1.25 }}
            >
              {product.name}
            </h2>
            <p className="mt-1 text-xs text-ink-secondary">
              Vence em <span className="font-semibold tabular-nums text-ink">{product.expiry}</span>
            </p>
            <span
              className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${tone.classes}`}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: isDanger ? '#B91C1C' : undefined }}
                aria-hidden="true"
              />
              {tone.label}
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-primary-50/70 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-dark opacity-80">
              Valor estimado
            </p>
            <p className="mt-0.5 text-lg font-extrabold tabular-nums text-ink">
              {product.value}
            </p>
          </div>
          <div className="rounded-xl bg-white/60 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
              CO&#8322; evitado
            </p>
            <p className="mt-0.5 text-lg font-extrabold tabular-nums text-ink">
              {product.co2}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <motion.button
            type="button"
            onClick={onRecipes}
            whileTap={{ scale: 0.97 }}
            className="flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}
          >
            <ChefHat size={18} strokeWidth={2} />
            Ver Receitas
          </motion.button>

          <motion.button
            type="button"
            onClick={onDonate}
            whileTap={{ scale: 0.97 }}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-white text-sm font-semibold text-primary-dark shadow-sm transition-colors hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Gift size={18} strokeWidth={2} />
            Agendar Doação
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation (Scanner active)                                        */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Inicio',   icon: HomeIcon, to: '/home' },
  { label: 'Scanner',  icon: ScanLine, to: '/scanner' },
  { label: 'Receitas', icon: ChefHat, to: '/receitas' },
  { label: 'Perfil',   icon: Leaf,    to: '/perfil' }
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
                  <span className="absolute top-1 h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
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
/*  Scanner screen                                                            */
/* -------------------------------------------------------------------------- */

export default function Scanner() {
  const navigate = useNavigate()

  const state = useAppStore((s) => s.scanner.state)
  const lastScanned = useAppStore((s) => s.scanner.lastScanned)
  const setScannerState = useAppStore((s) => s.setScannerState)
  const setLastScanned = useAppStore((s) => s.setLastScanned)
  const resetScanner = useAppStore((s) => s.resetScanner)
  const setDoacaoProduct = useAppStore((s) => s.setDoacaoProduct)

  // Local copy of the "currently displayed" product so the card stays
  // visible across idle/rescan transitions without re-rolling the dice.
  const [displayedProduct, setDisplayedProduct] = useState(lastScanned)
  const scanTimeoutRef = useRef(null)

  useEffect(() => {
    if (state === 'result' && lastScanned) {
      setDisplayedProduct(lastScanned)
    }
  }, [state, lastScanned])

  useEffect(() => () => clearTimeout(scanTimeoutRef.current), [])

  const handleCapture = () => {
    if (state === 'scanning' || state === 'result') return
    setScannerState('scanning')
    setDisplayedProduct(null)

    scanTimeoutRef.current = setTimeout(() => {
      const isError = Math.random() < 0.05
      if (isError) {
        setScannerState('error', { lastError: 'Produto nao identificado' })
        return
      }
      const product = pickRandomProduct()
      setLastScanned(product)
      setScannerState('result')
    }, 1500)
  }

  const handleRetry = () => {
    clearTimeout(scanTimeoutRef.current)
    resetScanner()
    setDisplayedProduct(null)
  }

  const handleGoToRecipes = () => {
    if (!displayedProduct) return
    setLastScanned(displayedProduct)
    navigate('/receitas')
  }

  const handleGoToDonation = () => {
    if (!displayedProduct) return
    setLastScanned(displayedProduct)
    setDoacaoProduct(displayedProduct)
    navigate('/doacao')
  }

  const showResultCard = state === 'result' && displayedProduct

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)'
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

        <main
          id="main-content"
          className="flex flex-col px-4 pb-32 pt-2"
          aria-label="Tela de scanner de produtos"
        >
          <CameraFrame
            state={state}
            onCapture={handleCapture}
          />

          <ScannerStatus state={state} onRetry={handleRetry} />

          <AnimatePresence mode="popLayout">
            {showResultCard && (
              <ResultCard
                product={displayedProduct}
                onRecipes={handleGoToRecipes}
                onDonate={handleGoToDonation}
              />
            )}
          </AnimatePresence>
        </main>

        <BottomNav />
      </div>
    </div>
  )
}
