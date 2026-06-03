# Changelog — Waste Guardian SPA Evolution

## Session Overview

This document tracks all changes from the start of development through the React rebuild. Timeline: 2026-06-03.

---

## v1.0.0 — 2026-06-03

### What Changed

#### Vanilla SPA (`03_Arquitetura_Projeto/spa-workspace/`)

**Initial Build** — From zero to 6-screen working prototype

##### styles.css — Full redesign (2026-06-03 07:18)
- Replaced `:root` CSS with complete OKLCH design token system from PRD_01_PART_A
- Added 10-step typography scale, 13-step spacing, 6 border-radius tokens, 4 shadow levels
- Added motion easings (`--ease-out`, `--ease-spring`, `--ease-in-out`)
- Added `prefers-reduced-motion` global override
- Added screen fade animations (`screenFadeIn`, `screenFadeOut`)
- Added stagger animation utilities (`.stagger-item`)
- Added bottom nav dot indicator CSS
- Added modal/backdrop CSS

**Bug Fix: Splash always visible** — Splash `#splash` had `display: flex` hardcoded at ID level (higher specificity than `.screen.active`), causing it to cover all screens permanently. Fixed by changing to `display: none` and only showing via `.active` class.

#### index.html — Icon migration + accessibility (2026-06-03)
- Added Lucide CDN (`unpkg.com/lucide@latest`)
- Replaced all navigation/action emojis with `<i data-lucide="...">` tags
- Food recognition emojis preserved (🍶🍌🍞🥛🧀🍅🥕🍎🥕)
- Added skip link as first body element
- Added `id="main"` to all `<main>` elements
- Added `aria-current="page"` to active nav items
- Added `aria-label` to all icon-only buttons
- Added `aria-label` to bottom nav containers
- Added modal close button accessibility

**Doacao screen updates:**
- Replaced 🗺️ map placeholder with 3 CSS-positioned map pins (absolute positioning, top/left percentages)
- Added status badges (`.coop-status open/closed`) with dot indicator
- Contact numbers converted to `tel:` links
- "Agendar Retirada" button disabled for closed cooperative

**Impacto screen updates:**
- Stat boxes given `animate-in` class for load animation
- Bar chart bars now use `--bar-height` CSS custom property (S1=60%, S2=75%, S3=82%, S4=100%)

**Perfil screen updates:**
- Avatar given `aria-label="Avatar de Maria Silva"`
- Profile level now uses `<i data-lucide="leaf">` icon

**Recipe modal updates:**
- Added `.modal-handle` div (drag indicator bar)

#### app.js — Scanner state machine + animations (2026-06-03)
- Added `window.appState` global store for cross-screen context
- Implemented `navigateTo()` with screen animation triggers
- Implemented 4-state scanner machine (`idle → scanning → result/error`)
- Added 8-product mock database (iogurte, pao, banana, leite, queijo, tomate, maca, cenoura)
- Added `getExpiryBadge()` with danger/warning/success coloring
- Added `animateImpactoScreen()` with bar chart `scaleY` animation + count-up
- Added `applyStaggerAnimation()` utility
- Added `triggerScreenAnimations()` called 60ms after `navigateTo()`
- Recipe modal: backdrop tap closes, Escape key closes, focus trap, body scroll lock
- Added `injectScannerStyles()` for CSS injection (`.pulsing`, `.scanner-state-*`, `.scanner-error`)

---

### React Rebuild (`03_Arquitetura_Projeto/react-workspace/`)

#### Project Setup (2026-06-03)
- Created React 18 + Vite + Tailwind + Framer Motion + Lucide + Zustand + React Router project
- `package.json` with all dependencies
- `vite.config.js` (port 5173, host: true)
- `tailwind.config.js` with full design tokens (primary/surface/ink/border/success/warning/danger/gold/bronze/silver/streak colors, custom radii, shadows, animations)
- `postcss.config.js`
- `index.html` (pt-BR, Inter font, viewport-fit=cover)
- `src/index.css` (Tailwind base + `.glass` + `.glass-dark` utilities + reduced-motion guard)
- `src/main.jsx` (React 18 StrictMode root)
- `public/leaf.svg` (brand favicon)
- `.gitignore`

#### Splash Screen — `src/screens/Splash.jsx` (2026-06-03)
- 3-stop green gradient background with breathing radial halo + floating glow accents
- Glass-morphism card (`.glass-dark` style, rounded-2xl, shadow-xl)
- Logo: white circle with green Leaf icon, scale-in animation
- Title: "Waste Guardian" clamp(1.875rem → 2.5rem), font-weight 800
- Tagline: "Cada grama conta"
- Stats grid (2 cols): Scale + Cloud icons + values
- CTA: "Começar Agora" — white, 56px, whileTap scale, focus ring
- Framer Motion stagger: `delayChildren: 0.2s`, `staggerChildren: 0.18s`, cubic-bezier `[0.16, 1, 0.3, 1]`
- Auto-transition: `useEffect` redirects to `/home` after 2500ms (skipped for reduced-motion)
- Footnote: "v1.0 — Liga Jovem 4ª Edição"

#### Zustand Store — `src/stores/useAppStore.js` (2026-06-03)
- `user` slice: Maria Silva mock data (name, initials, streak, foodsSavedKg, co2AvoidedKg, rankingPosition, rankingTotal, percentile, points)
- `scanner` slice: state/lastScanned/lastError + actions (setScannerState, setLastScanned, resetScanner)
- `receitas` slice: contextProduct/selectedRecipe + actions (setContextProduct, setSelectedRecipe, clearReceitasContext)
- `doacao` slice: contextProduct/pendingCoopId + actions (setDoacaoProduct, setPendingCoopId, clearDoacaoContext)

#### Home Screen — `src/screens/Home.jsx` (2026-06-03)
- Sticky header (60px): Leaf icon + "Waste Guardian" + MS avatar (aria-label)
- Hero card: green-tinted glass, "Olá, Maria!" + flame streak badge "7 dias consecutivos"
- Impact row (50/50): Leaf card ("2.3kg Alimentos salvos") + Cloud card ("1.8kg CO₂ evitado")
- Ranking bar: Trophy icon + "TOP 15% dos usuários" + "#47/312" green
- FAB: full-width green gradient, ScanLine icon, "Escanear Alimento", hover/tap animations, links `/scanner`
- Quick actions (3-col grid): ChefHat→`/receitas`, BarChart3→`/impacto`, Gift→`/doacao`
- Bottom nav (70px fixed): Inicio/Impacto/Doar/Perfil, active dot indicator, aria-current
- Framer Motion stagger container (`staggerChildren: 0.07s`, fade+rise per item)

#### Scanner Screen — `src/screens/Scanner.jsx` (2026-06-03)
- Header: ArrowLeft + "Scanner" centered
- Camera frame (280px): dark gradient bg (#1a1a2e → #16213e), vignette overlay, 200x200 viewfinder with white border + green corner accents + glow
- Idle state: pulsing ScanLine icon (scale 1↔1.1, 2s loop) + "Posicione o produto"
- Capture button: 72x72 white circle, 4px primary ring, overlaps frame edge, disabled during scan
- Scanning state: green sweep line animation + "Escaneando..."
- 1.5s timeout: 95% result / 5% error
- Result card: spring slide-up from `y:300`, glass card, emoji 48px, name + color-coded expiry badge, Valor+CO₂ stats, "Ver Receitas" (primary) + "Agendar Doação" (outline) CTAs
- Error state: red circle icon + "Não consegui identificar" + "Tentar novamente" button
- Context passing: both CTAs set product in Zustand before navigating
- Bottom nav: Inicio | Scanner (active) | Receitas | Perfil

#### Receitas Screen — `src/screens/Receitas.jsx` (2026-06-03)
- Header: ArrowLeft + "Receitas" centered
- Context banner (green card): "Baseado em: [produto] (vence em N dias)" when arriving from scanner; generic "Encontre uma receita..." otherwise
- `useEffect` auto-promotes `scanner.lastScanned` → `receitas.contextProduct`
- `pickRecipes(product)`: 4 Iogurte-specific recipes OR 4 generic fallback
- Recipe cards: emoji 32px + name + economy badge + meta row (time/level/cost) + CO₂ impact line
- Bottom sheet modal (Framer Motion spring): `y: "100%"` → `0`, backdrop `rgba(15,23,42,0.55)`, scroll lock
- Modal content: handle bar, close ×, emoji 64px, name, meta row, Ingredientes bullets, Modo de Preparo numbered, green impact footer
- Bottom nav: Inicio | Scanner | Receitas (active) | Perfil

#### Impacto Screen — `src/screens/Impacto.jsx` (2026-06-03)
- Header: ArrowLeft + "Meu Impacto" centered
- Hero stats (3 boxes): primary-50 ("24.5kg Alimentos salvos"), blue-50 ("18.2kg CO₂"), success-50 ("R$ 180 Economia")
- Progress section: trophy + "TOP 15% da comunidade" + "#47/312", 8px progress bar fills 0→85%
- Bar chart (Evolução Semanal): 4 bars S1-S4, `transform-origin: bottom`, `scaleY: 0→1` spring, staggered
- Badges grid (4 cols): earned (gradient green + emoji + name), locked (gray + Lock icon, 50% opacity)
- Ranking list: gold/silver/bronze tints for top 3, current user green tint + 3px left border, "Você" tag
- Ranking row tap: toast "Ver perfil completo (em breve)"
- Bottom nav: Início | Impacto (active) | Doar | Perfil

#### Doacao Screen — `src/screens/Doacao.jsx` (2026-06-03)
- Header: ArrowLeft + "Doar Alimentos" centered
- Impact banner: gradient green (primary→primary-dark), Heart icon + "R$ 50" bold + "de impacto social gerado", breathing opacity animation
- Map placeholder (180px): soft gradient bg, 3 MapPin icons absolutely positioned with staggered drop animation
- 3 cooperative cards:
  - Banco de Alimentos (open): green status badge, "Agendar Retirada" active
  - Sesc Mesa Brasil (closed): red status badge, CTA disabled + "Fechado" state
  - Associação Recycla (open): green status badge, active CTA
- Each card: emoji + name + distance badge + address + hours + status + accepts + tel: link + CTA
- Optional context banner when arriving from scanner with scanned product
- Toast feedback on "Agendar Retirada" tap
- Bottom nav: Início | Scanner | Doar (active) | Perfil

#### Perfil Screen — `src/screens/Perfil.jsx` (2026-06-03)
- Header: ArrowLeft + "Meu Perfil" centered
- Profile card: 80px gradient avatar "MS", "Maria Silva" bold, leaf "Nível Economizador" badge
- Stats row (3 glass boxes): "2.340 Pontos" / "#47 Ranking" / "23 Scans" — primary bold tabular nums
- Menu list (glass): Configurações / Notificações / Ajuda / Compartilhar — each with icon tile + chevron-right
- Logout button: danger style, "Sair", toast "Até breve!" on tap
- Bottom nav: Início | Scanner | Doar | Perfil (active)

---

## Files Summary

### Created (React rebuild)
```
react-workspace/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .gitignore
├── public/leaf.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── stores/useAppStore.js
    └── screens/
        ├── Splash.jsx
        ├── Home.jsx
        ├── Scanner.jsx
        ├── Receitas.jsx
        ├── Impacto.jsx
        ├── Doacao.jsx
        └── Perfil.jsx
```

### Modified (vanilla SPA)
```
spa-workspace/
├── styles.css  (full redesign + bug fix)
├── index.html  (icons, accessibility, Doacao enhancements)
└── app.js     (state machine, animations, context passing)
```

---

## Screenshots Captured

- `splash-preview.png` — Splash screen (React)
- `home-mobile.png` — Home screen (React)
- `scanner-idle.png` / `scanner-result.png` / `scanner-error.png` — Scanner states
- `receitas-generic.png` / `receitas-modal.png` — Receitas screen
- `impacto-fullpage.png` — Impacto screen
- `doacao-fullpage.png` — Doacao screen
- `perfil-fullpage.png` — Perfil screen
