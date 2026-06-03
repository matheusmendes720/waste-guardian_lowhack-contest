import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Leaf,
  Cloud,
  Wallet,
  Trophy,
  Lock,
  Home as HomeIcon,
  BarChart3,
  Gift,
  User as UserIcon
} from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore.js'

/* -------------------------------------------------------------------------- */
/*  Mock data                                                                 */
/* -------------------------------------------------------------------------- */

const IMPACTO_DATA = {
  heroStats: {
    foodsSavedKg: 24.5,
    co2AvoidedKg: 18.2,
    moneySaved: 180
  },
  ranking: { position: 47, total: 312, percentile: 15 },
  weeklyEvolution: [
    { week: 'S1', value: 60 },
    { week: 'S2', value: 75 },
    { week: 'S3', value: 82 },
    { week: 'S4', value: 100 }
  ],
  badges: [
    { id: 'iniciante', name: 'Iniciante Verde', emoji: '🌱', earned: true },
    { id: 'economizador', name: 'Economizador', emoji: '💰', earned: true },
    { id: 'heroi', name: 'Herói Climático', emoji: '🌍', earned: true },
    { id: 'mestre', name: 'Mestre', emoji: '⭐', earned: false }
  ],
  rankingList: [
    { position: 1, name: 'Ana Silva', points: 3420 },
    { position: 2, name: 'João Costa', points: 3180 },
    { position: 3, name: 'Pedro Santos', points: 2980 },
    { position: 47, name: 'Maria Silva', points: 2340, isCurrentUser: true },
    { position: 48, name: 'Carlos Lima', points: 2280 }
  ]
}

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

      <h1 className="text-base font-bold tracking-tight text-ink">Meu Impacto</h1>

      <span className="flex h-10 w-10 items-center justify-center" aria-hidden="true" />
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Hero stats row (3 boxes)                                                   */
/* -------------------------------------------------------------------------- */

function HeroStats({ stats }) {
  const boxes = [
    {
      key: 'foods',
      value: stats.foodsSavedKg.toFixed(1),
      unit: 'kg',
      label: 'Alimentos salvos',
      bg: '#F0FDF4',
      accent: '#22C55E',
      icon: Leaf
    },
    {
      key: 'co2',
      value: stats.co2AvoidedKg.toFixed(1),
      unit: 'kg',
      label: 'CO₂ evitado',
      bg: '#EFF6FF',
      accent: '#3B82F6',
      icon: Cloud
    },
    {
      key: 'money',
      value: stats.moneySaved.toLocaleString('pt-BR'),
      unit: 'R$',
      label: 'Economia',
      bg: '#D1FAE5',
      accent: '#047857',
      icon: Wallet,
      prefix: true
    }
  ]

  return (
    <motion.section
      variants={itemVariants}
      className="grid grid-cols-3 gap-3"
      aria-label="Estatísticas de impacto"
    >
      {boxes.map((b) => {
        const Icon = b.icon
        return (
          <div
            key={b.key}
            className="rounded-2xl p-3 shadow-sm"
            style={{
              background: b.bg,
              borderRadius: '20px',
              minHeight: '120px'
            }}
          >
            <div
              className="mb-2 flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,0.7)' }}
              aria-hidden="true"
            >
              <Icon size={16} strokeWidth={2} style={{ color: b.accent }} />
            </div>
            <div
              className="flex items-baseline font-extrabold text-ink"
              style={{
                fontSize: '1.875rem',
                lineHeight: 1.05,
                fontFeatureSettings: '"tnum"'
              }}
            >
              {b.prefix && (
                <span className="mr-0.5 text-base font-bold" style={{ color: b.accent }}>
                  {b.unit}
                </span>
              )}
              <span className="tabular-nums">{b.value}</span>
              {!b.prefix && (
                <span className="ml-0.5 text-sm font-semibold text-ink-secondary">
                  {b.unit}
                </span>
              )}
            </div>
            <div className="mt-1 text-[11px] font-semibold text-ink-secondary">
              {b.label}
            </div>
          </div>
        )
      })}
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Progress section (ranking position)                                        */
/* -------------------------------------------------------------------------- */

function ProgressSection({ ranking }) {
  const fillPercent = 85

  return (
    <motion.section variants={itemVariants} aria-label="Posição no ranking">
      <GlassCard className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ background: 'rgba(34,197,94,0.15)' }}
              aria-hidden="true"
            >
              <Trophy size={18} strokeWidth={2} className="text-primary" />
            </span>
            <p className="text-sm font-medium leading-snug text-ink">
              Você está no{' '}
              <span className="font-bold text-primary-dark">TOP {ranking.percentile}%</span>{' '}
              da comunidade
            </p>
          </div>
          <span
            className="shrink-0 text-sm font-extrabold tabular-nums text-primary"
            aria-label={`Posição ${ranking.position} de ${ranking.total}`}
          >
            #{ranking.position}/{ranking.total}
          </span>
        </div>
        <div
          className="mt-3 h-2 w-full overflow-hidden rounded-full bg-primary-50"
          role="progressbar"
          aria-valuenow={fillPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${fillPercent}%` }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #4ADE80 0%, #22C55E 100%)'
            }}
          />
        </div>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Weekly bar chart                                                          */
/* -------------------------------------------------------------------------- */

function WeeklyChart({ data }) {
  return (
    <motion.section variants={itemVariants} aria-label="Evolução semanal">
      <GlassCard className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-ink">Evolução Semanal</h2>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-secondary">
            Últimas 4 semanas
          </span>
        </div>

        <div
          className="flex items-end justify-around gap-3"
          style={{ height: '160px' }}
        >
          {data.map((d, i) => (
            <div
              key={d.week}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div className="flex h-full w-full items-end justify-center">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="relative w-full"
                  style={{
                    height: `${d.value}%`,
                    transformOrigin: 'bottom',
                    background: 'linear-gradient(180deg, #4ADE80 0%, #22C55E 60%, #16A34A 100%)',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    boxShadow: 'inset 0 -8px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  <span
                    className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold tabular-nums text-primary-dark"
                    aria-hidden="true"
                  >
                    {d.value}%
                  </span>
                </motion.div>
              </div>
              <span className="text-[11px] font-semibold text-ink-secondary">
                {d.week}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Badges grid                                                               */
/* -------------------------------------------------------------------------- */

function Badges({ badges }) {
  return (
    <motion.section variants={itemVariants} aria-label="Conquistas">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-bold text-ink">Conquistas</h2>
        <span className="text-[11px] font-semibold text-ink-secondary">
          {badges.filter((b) => b.earned).length}/{badges.length} desbloqueadas
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.5 + i * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative"
            style={{ height: '96px' }}
          >
            {badge.earned ? (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl px-1 text-center text-white shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #4ADE80 0%, #22C55E 50%, #16A34A 100%)',
                  width: '80px',
                  margin: '0 auto'
                }}
              >
                <span className="text-2xl" aria-hidden="true">{badge.emoji}</span>
                <span className="text-[9px] font-bold uppercase leading-tight tracking-wide">
                  {badge.name}
                </span>
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl bg-gray-100 text-ink-muted"
                style={{
                  opacity: 0.5,
                  width: '80px',
                  margin: '0 auto'
                }}
              >
                <Lock size={18} strokeWidth={2} aria-hidden="true" />
                <span className="text-[9px] font-bold uppercase leading-tight tracking-wide">
                  {badge.name}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Ranking list                                                              */
/* -------------------------------------------------------------------------- */

const RANK_STYLES = {
  1: { bg: 'oklch(82% 0.15 90 / 0.15)', border: '#FACC15', label: 'Ouro' },
  2: { bg: 'oklch(78% 0.02 250 / 0.20)', border: '#C0C5CC', label: 'Prata' },
  3: { bg: 'oklch(70% 0.12 60 / 0.15)', border: '#B45309', label: 'Bronze' }
}

function RankingList({ list, onUserTap }) {
  return (
    <motion.section variants={itemVariants} aria-label="Ranking da comunidade">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-bold text-ink">Ranking</h2>
        <span className="text-[11px] font-semibold text-ink-secondary">Top 5</span>
      </div>
      <GlassCard className="overflow-hidden p-1">
        {list.map((row, i) => {
          const isCurrent = !!row.isCurrentUser
          const podium = RANK_STYLES[row.position]
          const rowBg = isCurrent
            ? 'rgba(34,197,94,0.10)'
            : podium
              ? podium.bg
              : 'transparent'

          return (
            <motion.button
              key={`${row.position}-${row.name}`}
              type="button"
              onClick={() => onUserTap && onUserTap(row)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + i * 0.06,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileTap={{ scale: 0.99 }}
              className="relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{
                background: rowBg,
                borderLeft: isCurrent ? '3px solid #22C55E' : '3px solid transparent'
              }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: isCurrent
                    ? '#22C55E'
                    : podium
                      ? 'rgba(255,255,255,0.7)'
                      : 'rgba(0,0,0,0.05)',
                  color: isCurrent ? '#FFFFFF' : '#111827',
                  border: podium ? `1.5px solid ${podium.border}` : 'none'
                }}
                aria-hidden="true"
              >
                {row.position}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm ${
                    isCurrent ? 'font-bold text-ink' : 'font-semibold text-ink'
                  }`}
                >
                  {row.name}
                  {isCurrent && (
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-primary">
                      Você
                    </span>
                  )}
                </p>
                {podium && !isCurrent && (
                  <p
                    className="text-[10px] font-bold uppercase tracking-wide"
                    style={{ color: podium.border }}
                  >
                    {podium.label}
                  </p>
                )}
              </div>
              <span className="shrink-0 text-sm font-extrabold tabular-nums text-ink">
                {row.points.toLocaleString('pt-BR')}
                <span className="ml-1 text-[10px] font-semibold text-ink-secondary">pts</span>
              </span>
            </motion.button>
          )
        })}
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation (Impacto active)                                         */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Início',   icon: HomeIcon,   to: '/home' },
  { label: 'Impacto',  icon: BarChart3,  to: '/impacto' },
  { label: 'Doar',     icon: Gift,       to: '/doacao' },
  { label: 'Perfil',   icon: UserIcon,   to: '/perfil' }
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
/*  Impacto screen                                                             */
/* -------------------------------------------------------------------------- */

export default function Impacto() {
  const navigate = useNavigate()
  const user = useAppStore((s) => s.user)
  const [toast, setToast] = React.useState({ visible: false, message: '' })
  const toastTimerRef = React.useRef(null)

  React.useEffect(() => () => clearTimeout(toastTimerRef.current), [])

  const showToast = (message) => {
    setToast({ visible: true, message })
    clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }))
    }, 1800)
  }

  const handleUserTap = (row) => {
    showToast(`Ver perfil completo (em breve) — ${row.name}`)
  }

  // Prefer the live user data from the store for ranking numbers when available,
  // fall back to mock data.
  const ranking = {
    position: user.rankingPosition ?? IMPACTO_DATA.ranking.position,
    total: user.rankingTotal ?? IMPACTO_DATA.ranking.total,
    percentile: user.percentile ?? IMPACTO_DATA.ranking.percentile
  }

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #F0FDF4 0%, #F7F8F7 35%, #F7F8F7 100%)'
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
          aria-label="Tela de impacto pessoal"
        >
          <HeroStats stats={IMPACTO_DATA.heroStats} />
          <ProgressSection ranking={ranking} />
          <WeeklyChart data={IMPACTO_DATA.weeklyEvolution} />
          <Badges badges={IMPACTO_DATA.badges} />
          <RankingList
            list={IMPACTO_DATA.rankingList}
            onUserTap={handleUserTap}
          />
        </motion.main>

        <BottomNav />
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
