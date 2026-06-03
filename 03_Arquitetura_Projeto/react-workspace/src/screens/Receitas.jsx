import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChefHat,
  Leaf,
  Clock,
  CircleDollarSign,
  X,
  Home as HomeIcon,
  ScanLine,
  Sparkles
} from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore.js'

/* -------------------------------------------------------------------------- */
/*  Mock recipe catalogue                                                     */
/* -------------------------------------------------------------------------- */

const RECIPES = {
  iogurte: [
    {
      id: 'torta',
      emoji: '🍰',
      name: 'Torta de Iogurte',
      time: 30,
      level: 'Fácil',
      cost: 12,
      co2: 400,
      ingredients: [
        '1 iogurte natural (200g)',
        '2 ovos',
        '1 xícara de farinha de trigo',
        '1/2 xícara de açúcar',
        '1 colher de sopa de óleo',
        '1 colher de chá de fermento'
      ],
      steps: [
        'Preaqueça o forno a 180°C.',
        'Misture o iogurte com os ovos e o óleo.',
        'Adicione o açúcar e misture bem.',
        'Acrescente a farinha e o fermento.',
        'Misture até ficar homogêneo.',
        'Despeje em uma forma untada.',
        'Asse por 25-30 minutos.'
      ]
    },
    {
      id: 'smoothie',
      emoji: '🥤',
      name: 'Smoothie Proteico',
      time: 5,
      level: 'Fácil',
      cost: 8,
      co2: 250,
      ingredients: [
        '1 iogurte natural',
        '1 banana madura',
        '1 colher de aveia',
        '1 colher de mel',
        '100ml de leite'
      ],
      steps: ['Bata tudo no liquidificador.', 'Sirva gelado.']
    },
    {
      id: 'bolo',
      emoji: '🎂',
      name: 'Bolo de Iogurte',
      time: 45,
      level: 'Médio',
      cost: 15,
      co2: 500,
      ingredients: [
        '2 iogurtes naturais',
        '2 xícaras de farinha',
        '1 e 1/2 xícara de açúcar',
        '3 ovos',
        '1/2 xícara de óleo',
        '1 colher de sopa de fermento'
      ],
      steps: [
        'Preaqueça o forno a 180°C.',
        'Bata os ovos com o açúcar.',
        'Adicione o iogurte e o óleo.',
        'Acrescente a farinha.',
        'Asse por 35-40 minutos.'
      ]
    },
    {
      id: 'sorvete',
      emoji: '🍦',
      name: 'Sorvete Caseiro',
      time: 20,
      level: 'Fácil',
      cost: 18,
      co2: 600,
      ingredients: [
        '2 iogurtes naturais',
        '1 lata de leite condensado',
        '200ml de creme de leite'
      ],
      steps: [
        'Bata o iogurte com o leite condensado.',
        'Acrescente o creme de leite.',
        'Leve ao freezer por 4+ horas.'
      ]
    }
  ],
  generic: [
    {
      id: 'omelete',
      emoji: '🍳',
      name: 'Omelete de Legumes',
      time: 15,
      level: 'Fácil',
      cost: 8,
      co2: 200,
      ingredients: ['3 ovos', 'Legumes a gosto'],
      steps: [
        'Bata os ovos.',
        'Cozinhe os legumes.',
        'Despeje os ovos na frigideira.',
        'Sirva quente.'
      ]
    },
    {
      id: 'arroz-forno',
      emoji: '🍚',
      name: 'Arroz de Forno com Restos',
      time: 25,
      level: 'Fácil',
      cost: 10,
      co2: 300,
      ingredients: [
        '2 xícaras de arroz',
        'Queijo ralado',
        'Presunto',
        'Molho de tomate'
      ],
      steps: [
        'Misture o arroz com os ingredientes.',
        'Leve ao forno por 20 min.',
        'Sirva quente.'
      ]
    },
    {
      id: 'sopa-pao',
      emoji: '🍲',
      name: 'Sopa de Pão Amanhecido',
      time: 30,
      level: 'Fácil',
      cost: 6,
      co2: 250,
      ingredients: ['Pão amanhecido', 'Caldo de legumes', 'Temperos'],
      steps: [
        'Corte o pão em cubos.',
        'Ferva o caldo.',
        'Junte o pão ao caldo.',
        'Tempere e sirva.'
      ]
    },
    {
      id: 'vitamina',
      emoji: '🥛',
      name: 'Vitamina de Frutas',
      time: 5,
      level: 'Fácil',
      cost: 5,
      co2: 120,
      ingredients: ['2 bananas maduras', '200ml de leite', 'Mel a gosto'],
      steps: ['Bata tudo no liquidificador.', 'Sirva gelado.']
    }
  ]
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Pick the recipe set that best matches the scanned product, with a
 * generic fallback so the screen is never empty.
 */
function pickRecipes(product) {
  if (!product) return RECIPES.generic
  const name = (product.name || '').toLowerCase()
  if (name.includes('iogurte')) return RECIPES.iogurte
  return RECIPES.generic
}

/**
 * Map a difficulty label to a Tailwind class set so the card stays
 * declarative.
 */
function getLevelClasses(level) {
  if (level === 'Médio') {
    return 'bg-warning-bg text-warning-fg border-warning-border'
  }
  return 'bg-success-bg text-success-fg border-success-border'
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

      <h1 className="text-base font-bold tracking-tight text-ink">Receitas</h1>

      <span
        className="flex h-10 w-10 items-center justify-center"
        aria-hidden="true"
      />
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  Context banner                                                            */
/* -------------------------------------------------------------------------- */

function ContextBanner({ product }) {
  return (
    <section
      aria-label="Contexto da receita"
      className="glass flex items-start gap-3 p-4 shadow-sm"
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
        {product ? product.emoji : '🍳'}
      </span>
      <div className="min-w-0 flex-1">
        {product ? (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-dark">
              Baseado em
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold text-ink">
              {product.name}{' '}
              <span className="font-normal text-ink-secondary">
                (vence em {product.daysLeft}{' '}
                {product.daysLeft === 1 ? 'dia' : 'dias'})
              </span>
            </p>
          </>
        ) : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-dark">
              Dica
            </p>
            <p className="mt-0.5 text-sm font-medium text-ink">
              Encontre uma receita para o que está na sua geladeira.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Recipe card                                                               */
/* -------------------------------------------------------------------------- */

function RecipeCard({ recipe, onOpen }) {
  const levelClasses = getLevelClasses(recipe.level)
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileTap={{ scale: 0.98 }}
      aria-label={`Abrir receita: ${recipe.name}`}
      className="glass flex w-full flex-col gap-2 p-4 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      style={{ borderRadius: '20px' }}
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-2xl"
          aria-hidden="true"
        >
          {recipe.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className="font-semibold text-ink"
            style={{ fontSize: '16px', lineHeight: 1.25 }}
          >
            {recipe.name}
          </h3>
        </div>
        <span
          className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-white"
          aria-label="Economia em reais"
        >
          <CircleDollarSign size={12} strokeWidth={2.4} />
          R${recipe.cost}
        </span>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 pl-[60px]">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-secondary">
          <Clock size={13} strokeWidth={2} />
          {recipe.time}min
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${levelClasses}`}
        >
          {recipe.level}
        </span>
      </div>

      {/* Impact line */}
      <div className="flex items-center gap-1.5 pl-[60px] text-xs font-semibold text-primary-dark">
        <Leaf size={13} strokeWidth={2.2} />
        {recipe.co2}g CO₂ evitado
      </div>
    </motion.button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Recipe detail bottom sheet                                                */
/* -------------------------------------------------------------------------- */

function RecipeModal({ recipe, onClose }) {
  // Lock body scroll while the modal is open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <motion.div
      key="modal-root"
      className="fixed inset-0 z-50 flex items-end justify-center"
      initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
      animate={{ backgroundColor: 'rgba(15,23,42,0.55)' }}
      exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
      transition={{ duration: 0.25 }}
      aria-modal="true"
      role="dialog"
      aria-label={`Detalhes da receita ${recipe.name}`}
    >
      {/* Backdrop click target */}
      <button
        type="button"
        aria-label="Fechar modal"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-[428px] flex-col overflow-hidden bg-white shadow-2xl"
        style={{ borderTopLeftRadius: '28px', borderTopRightRadius: '28px' }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3">
          <span
            aria-hidden="true"
            className="block h-1 w-9 rounded-full bg-border-strong"
          />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pb-6 pt-2">
          {/* Hero */}
          <div className="flex flex-col items-center text-center">
            <span
              className="text-5xl"
              aria-hidden="true"
              style={{ fontSize: '64px', lineHeight: 1 }}
            >
              {recipe.emoji}
            </span>
            <h2
              className="mt-2 font-bold text-ink"
              style={{ fontSize: '24px', lineHeight: 1.2 }}
            >
              {recipe.name}
            </h2>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-ink-secondary">
              <span className="inline-flex items-center gap-1">
                <Clock size={13} strokeWidth={2} />
                {recipe.time}min
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${getLevelClasses(
                  recipe.level
                )}`}
              >
                {recipe.level}
              </span>
              <span className="inline-flex items-center gap-1">
                <CircleDollarSign size={13} strokeWidth={2} />
                R${recipe.cost}
              </span>
              <span className="inline-flex items-center gap-1 text-primary-dark">
                <Leaf size={13} strokeWidth={2.2} />
                {recipe.co2}g CO₂
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-border" aria-hidden="true" />

          {/* Ingredientes */}
          <section aria-label="Ingredientes">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Ingredientes
            </h3>
            <ul className="mt-2 space-y-1.5">
              {recipe.ingredients.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-border" aria-hidden="true" />

          {/* Modo de Preparo */}
          <section aria-label="Modo de preparo">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Modo de Preparo
            </h3>
            <ol className="mt-2 space-y-2">
              {recipe.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-ink"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Impact footer */}
          <div
            className="mt-6 flex items-center gap-3 rounded-2xl p-4"
            style={{
              background:
                'linear-gradient(135deg, rgba(220,252,231,0.85) 0%, rgba(255,255,255,0.85) 100%)',
              border: '1px solid rgba(34,197,94,0.2)'
            }}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white"
              aria-hidden="true"
            >
              <Sparkles size={18} strokeWidth={2.2} />
            </span>
            <p className="text-sm font-semibold text-ink">
              Você economiza{' '}
              <span className="text-primary-dark">R${recipe.cost}</span> e
              evita{' '}
              <span className="text-primary-dark">{recipe.co2}g de CO₂</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom navigation (Receitas active)                                       */
/* -------------------------------------------------------------------------- */

const NAV_ITEMS = [
  { label: 'Inicio', icon: HomeIcon, to: '/home' },
  { label: 'Scanner', icon: ScanLine, to: '/scanner' },
  { label: 'Receitas', icon: ChefHat, to: '/receitas' },
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
/*  Receitas screen                                                           */
/* -------------------------------------------------------------------------- */

export default function Receitas() {
  const contextProduct = useAppStore((s) => s.receitas.contextProduct)
  const selectedRecipe = useAppStore((s) => s.receitas.selectedRecipe)
  const setSelectedRecipe = useAppStore((s) => s.setSelectedRecipe)
  const setContextProduct = useAppStore((s) => s.setContextProduct)

  // If the user lands on /receitas directly without a scanned product in
  // the receitas slice, fall back to whatever the scanner last stored so
  // context-aware recipes are still shown.
  const lastScanned = useAppStore((s) => s.scanner.lastScanned)
  useEffect(() => {
    if (!contextProduct && lastScanned) {
      setContextProduct(lastScanned)
    }
  }, [contextProduct, lastScanned, setContextProduct])

  const recipes = pickRecipes(contextProduct)

  const handleOpen = (recipe) => setSelectedRecipe(recipe)
  const handleClose = () => setSelectedRecipe(null)

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

        <main
          id="main-content"
          className="flex flex-col gap-4 px-4 pb-32 pt-4"
          aria-label="Tela de receitas"
        >
          <ContextBanner product={contextProduct} />

          <section
            className="flex flex-col gap-3"
            aria-label="Lista de receitas"
          >
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onOpen={() => handleOpen(recipe)}
              />
            ))}
          </section>
        </main>

        <BottomNav />
      </div>

      <AnimatePresence>
        {selectedRecipe && (
          <RecipeModal recipe={selectedRecipe} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  )
}
