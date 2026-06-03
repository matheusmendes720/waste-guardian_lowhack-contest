import React from 'react'
import { motion } from 'framer-motion'
import {
  Leaf,
  Flame,
  Cloud,
  Trophy,
  ScanLine,
  ChefHat,
  BarChart3,
  Gift,
  Home as HomeIcon
} from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore.js'

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

function GlassCard({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`glass rounded-xl shadow-sm ${className}`}
      style={{ borderRadius: '20px' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

function Header({ user }) {
  return (
    <motion.header
      variants={itemVariants}
      className="sticky top-0 z-30 flex h-[60px] items-center justify-between border-b border-white/40 bg-white/70 px-4 backdrop-blur-xl"
      style={{ minHeight: '60px' }}
    >
      <div className="flex items-center gap-2">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-sm"
          aria-hidden="true"
        >
          <Leaf size={20} strokeWidth={2} />
        </span>
        <span className="text-base font-bold tracking-tight text-ink">
          Waste Guardian
        </span>
      </div>

      <button
        type="button"
        aria-label={`Perfil de ${user.name}`}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {user.initials}
      </button>
    </motion.header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Hero card                                                                 */
/* -------------------------------------------------------------------------- */

function HeroCard({ user }) {
  return (
    <motion.section
      variants={itemVariants}
      className="glass relative overflow-hidden rounded-xl p-5 shadow-sm"
      style={{
        borderRadius: '20px',
        background:
          'linear-gradient(135deg, rgba(220,252,231,0.85) 0%, rgba(255,255,255,0.75) 100%)'
      }}
      aria-label="Saudacao do usuario"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.18), rgba(34,197,94,0) 70%)' }}
        aria-hidden="true"
      />
      <h1
        className="font-bold text-ink"
        style={{ fontSize: '24px', lineHeight: 1.2, letterSpacing: '-0.01em' }}
      >
        Olá, {user.firstName}!
      </h1>
      <p className="mt-1 text-sm text-ink-secondary">
        Veja o impacto que voce gerou esta semana.
      </p>

      <div
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-warning-bg px-3 py-1.5"
        style={{ background: 'rgba(254,243,199,0.85)' }}
      >
        <Flame size={16} strokeWidth={2} className="text-streak" />
        <span
          className="text-xs font-semibold"
          style={{ color: '#B45309' }}
        >
          {user.streak} dias consecutivos
        </span>
      </div>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Impact cards row                                                          */
/* -------------------------------------------------------------------------- */

function ImpactCards({ user }) {
  return (
    <motion.section
      variants={itemVariants}
      className="grid grid-cols-2 gap-3"
      aria-label="Indicadores de impacto"
    >
      <GlassCard className="relative overflow-hidden p-4">
        <span
          className="absolute left-0 top-0 h-full w-1 bg-primary"
          aria-hidden="true"
        />
        <div className="mb-1 flex items-center gap-1.5 text-primary">
          <Leaf size={16} strokeWidth={2} />
          <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
            Salvos
          </span>
        </div>
        <div
          className="font-extrabold tabular-nums text-ink"
          style={{ fontSize: '1.5rem', lineHeight: 1.1 }}
        >
          {user.foodsSavedKg}
          <span className="ml-1 text-sm font-semibold text-ink-secondary">kg</span>
        </div>
        <div className="mt-0.5 text-xs text-ink-secondary">Alimentos salvos</div>
      </GlassCard>

      <GlassCard className="relative overflow-hidden p-4">
        <span
          className="absolute left-0 top-0 h-full w-1"
          style={{ background: '#3B82F6' }}
          aria-hidden="true"
        />
        <div className="mb-1 flex items-center gap-1.5" style={{ color: '#3B82F6' }}>
          <Cloud size={16} strokeWidth={2} />
          <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
            CO&#8322;
          </span>
        </div>
        <div
          className="font-extrabold tabular-nums text-ink"
          style={{ fontSize: '1.5rem', lineHeight: 1.1 }}
        >
          {user.co2AvoidedKg}
          <span className="ml-1 text-sm font-semibold text-ink-secondary">kg</span>
        </div>
        <div className="mt-0.5 text-xs text-ink-secondary">CO&#8322; evitado</div>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Ranking bar                                                               */
/* -------------------------------------------------------------------------- */

function RankingBar({ user }) {
  return (
    <motion.section variants={itemVariants}>
      <GlassCard
        className="flex items-center justify-between gap-3 p-4"
        aria-label="Sua posicao no ranking"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{ background: 'rgba(250,204,21,0.18)' }}
            aria-hidden="true"
          >
            <Trophy size={18} strokeWidth={2} className="text-gold" />
          </span>
          <p className="text-sm font-medium text-ink">
            Voce esta no <span className="font-bold">TOP {user.percentile}%</span>{' '}
            dos usuarios
          </p>
        </div>
        <span
          className="shrink-0 text-base font-bold tabular-nums text-primary"
          aria-label={`Posicao ${user.rankingPosition} de ${user.rankingTotal}`}
        >
          #{user.rankingPosition}/{user.rankingTotal}
        </span>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  FAB (primary CTA)                                                         */
/* -------------------------------------------------------------------------- */

function Fab({ onClick }) {
  return (
    <motion.button
      variants={itemVariants}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      aria-label="Escanear Alimento"
      className="flex w-full items-center justify-center gap-2 rounded-xl px-5 font-semibold text-white shadow-xl transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{
        height: '56px',
        fontSize: '1rem',
        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
      }}
    >
      <ScanLine size={20} strokeWidth={2} />
      Escanear Alimento
    </motion.button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Quick actions grid                                                        */
/* -------------------------------------------------------------------------- */

const QUICK_ACTIONS = [
  { label: 'Receitas', icon: ChefHat, to: '/receitas' },
  { label: 'Impacto', icon: BarChart3, to: '/impacto' },
  { label: 'Doar', icon: Gift, to: '/doacao' }
]

function QuickActions() {
  const navigate = useNavigate()

  return (
    <motion.section
      variants={itemVariants}
      className="grid grid-cols-3 gap-3"
      aria-label="Acoes rapidas"
    >
      {QUICK_ACTIONS.map(({ label, icon: Icon, to }) => (
        <motion.button
          key={label}
          type="button"
          onClick={() => navigate(to)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label={label}
          className="glass flex flex-col items-center justify-center gap-2 rounded-xl p-4 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ borderRadius: '20px', minHeight: '96px' }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary"
            aria-hidden="true"
          >
            <Icon size={20} strokeWidth={2} />
          </span>
          <span className="text-xs font-semibold text-ink">{label}</span>
        </motion.button>
      ))}
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation                                                         */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Inicio', icon: HomeIcon, to: '/home' },
  { label: 'Impacto', icon: BarChart3, to: '/impacto' },
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
/*  Home screen                                                               */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const user = useAppStore((s) => s.user)
  const navigate = useNavigate()

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
        <Header user={user} />

        <motion.main
          id="main-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 px-4 pb-32 pt-4"
        >
          <HeroCard user={user} />
          <ImpactCards user={user} />
          <RankingBar user={user} />
          <Fab onClick={() => navigate('/scanner')} />
          <QuickActions />
        </motion.main>

        <BottomNav />
      </div>
    </div>
  )
}
