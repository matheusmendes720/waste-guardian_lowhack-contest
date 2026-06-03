import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Leaf,
  Settings,
  Bell,
  HelpCircle,
  Share2,
  ChevronRight,
  Home as HomeIcon,
  ScanLine,
  Gift,
  User as UserIcon,
  LogOut
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

      <h1 className="text-base font-bold tracking-tight text-ink">Meu Perfil</h1>

      <span className="flex h-10 w-10 items-center justify-center" aria-hidden="true" />
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Profile header (avatar, name, level)                                      */
/* -------------------------------------------------------------------------- */

function ProfileHeader({ user }) {
  return (
    <motion.section
      variants={itemVariants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Identificacao do usuario"
    >
      <GlassCard className="flex flex-col items-center gap-3 p-5 text-center">
        <div
          className="flex items-center justify-center rounded-full font-bold text-white shadow-md"
          style={{
            height: '80px',
            width: '80px',
            fontSize: '28px',
            background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
          }}
          aria-hidden="true"
        >
          {user.initials}
        </div>
        <h2
          className="font-bold text-ink"
          style={{ fontSize: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.01em' }}
        >
          {user.name}
        </h2>
        <div
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
          style={{ background: 'rgba(220,252,231,0.85)' }}
        >
          <Leaf size={16} strokeWidth={2} className="text-primary" />
          <span className="text-xs font-semibold text-primary-dark">
            Nível Economizador
          </span>
        </div>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Stats row (3 equal boxes)                                                 */
/* -------------------------------------------------------------------------- */

function StatsRow({ user }) {
  const stats = [
    {
      key: 'points',
      value: user.points.toLocaleString('pt-BR'),
      label: 'Pontos'
    },
    {
      key: 'ranking',
      value: `#${user.rankingPosition}`,
      label: 'Ranking'
    },
    {
      key: 'scans',
      value: String(user.scans ?? 23),
      label: 'Scans'
    }
  ]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-3"
      aria-label="Estatisticas do perfil"
    >
      {stats.map((s) => (
        <motion.div
          key={s.key}
          variants={itemVariants}
          className="glass flex flex-col items-center justify-center gap-0.5 rounded-xl p-3 shadow-sm"
          style={{ borderRadius: '20px', minHeight: '92px' }}
        >
          <span className="text-2xl font-bold text-primary tabular-nums">
            {s.value}
          </span>
          <span className="text-[11px] font-semibold text-ink-secondary">
            {s.label}
          </span>
        </motion.div>
      ))}
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Menu list                                                                 */
/* -------------------------------------------------------------------------- */

const MENU_ITEMS = [
  { key: 'settings',    label: 'Configurações', icon: Settings },
  { key: 'notifications', label: 'Notificações', icon: Bell },
  { key: 'help',        label: 'Ajuda',         icon: HelpCircle },
  { key: 'share',       label: 'Compartilhar',  icon: Share2 }
]

function MenuList() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      aria-label="Menu do perfil"
    >
      <GlassCard className="overflow-hidden">
        <ul className="divide-y divide-white/40">
          {MENU_ITEMS.map(({ key, label, icon: Icon }) => (
            <motion.li key={key} variants={itemVariants}>
              <button
                type="button"
                aria-label={label}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface-muted focus:outline-none focus-visible:bg-surface-muted"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary"
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <span className="flex-1 text-sm font-semibold text-ink">
                  {label}
                </span>
                <ChevronRight
                  size={18}
                  strokeWidth={2}
                  className="text-ink-muted"
                  aria-hidden="true"
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </GlassCard>
    </motion.section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Logout button                                                             */
/* -------------------------------------------------------------------------- */

function LogoutButton({ onLogout }) {
  return (
    <motion.button
      variants={itemVariants}
      type="button"
      onClick={onLogout}
      whileTap={{ scale: 0.98 }}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-danger-border bg-danger-bg px-4 font-semibold text-danger-fg shadow-sm transition-colors hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-danger-border"
      style={{ minHeight: '48px', fontSize: '0.95rem' }}
    >
      <LogOut size={18} strokeWidth={2} />
      Sair
    </motion.button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation                                                         */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Início',  icon: HomeIcon,  to: '/home' },
  { label: 'Scanner', icon: ScanLine,  to: '/scanner' },
  { label: 'Doar',    icon: Gift,      to: '/doacao' },
  { label: 'Perfil',  icon: UserIcon,  to: '/perfil' }
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
/*  Toast (lightweight, bottom-center)                                        */
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
/*  Perfil screen                                                             */
/* -------------------------------------------------------------------------- */

export default function Perfil() {
  const navigate = useNavigate()
  const storeUser = useAppStore((s) => s.user)
  const [toast, setToast] = React.useState({ visible: false, message: '' })
  const toastTimerRef = React.useRef(null)

  React.useEffect(() => () => clearTimeout(toastTimerRef.current), [])

  // Merge the store data with profile-specific mock fields
  // (the store keeps ranking points in `points`, scans added inline).
  const user = {
    name: storeUser.name,
    initials: storeUser.initials,
    points: storeUser.points,
    rankingPosition: storeUser.rankingPosition,
    scans: 23
  }

  const showToast = (message) => {
    setToast({ visible: true, message })
    clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }))
    }, 1800)
  }

  const handleLogout = () => {
    showToast('Até breve!')
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
          aria-label="Tela de perfil do usuario"
        >
          <ProfileHeader user={user} />
          <StatsRow user={user} />
          <MenuList />
          <LogoutButton onLogout={handleLogout} />
        </motion.main>

        <BottomNav />
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
