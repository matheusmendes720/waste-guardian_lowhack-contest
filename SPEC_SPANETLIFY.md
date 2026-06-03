# 📱 SPEC — SPA DEPLOY (Netlify)

> **Entregável:** Protótipo Navegável (20% da nota)  
> **Status:** 🔄 80%  
> **Deadline:** 03/06/2026 17:00  
> **Responsável:** FRONTEND_AGENT  
> **Versão:** 1.0

---

## 🎯 OBJETIVO

Deploy de SPA funcional no Netlify como alternativa ao Figma. Diferencial competitivo: **app funciona no celular real**.

---

## 📁 ESTRUTURA DE ARQUIVOS

```
spa-workspace/
├── index.html       (SPA completa — 6 telas em 1 arquivo)
├── styles.css       (Design system mobile-first)
├── app.js           (Navegação + mock data)
├── netlify.toml     (Config deploy)
└── README.md        (Instruções)
```

---

## 🖥️ 6 TELAS OBRIGATÓRIAS

### TELA 1: SPLASH (0:00 - 2:30s auto)
```
ELEMENTOS:
├── Logo: "🌱 Waste Guardian" (emoji + texto)
├── Tagline: "Cada grama conta"
├── CTA: [Começar Agora] → Home
└── Auto-transition: 2500ms
```

### TELA 2: HOME / DASHBOARD
```
ELEMENTOS:
├── Saudação: "Olá, Maria Silva! 👋"
├── Card 1: "🌱 X.Xkg alimentos salvos" (primary)
├── Card 2: "💰 R$ XXX economizados"
├── Card 3: "🌍 X.Xkg CO₂ evitado"
├── Badge: "🔥 7 dias consecutivos"
├── FAB: [ESCANEAR] (56x56px, verde)
├── Quick actions: 3 cards (Receitas, Impacto, Doar)
└── Bottom nav: Home | Impacto | Doar | Perfil
```

### TELA 3: SCANNER
```
ELEMENTOS:
├── Viewfinder: Mock camera interface
├── Animação: "Escaneando..." (loop)
├── Botão captura: 72x72px
└── Card resultado:
    ├── 🍶 Iogurte Natural
    ├── ⚠️ Vence em 2 dias
    ├── R$ 8,90 | 250g CO₂
    └── [Ver Receitas] [Agendar Doação]
```

### TELA 4: RECEITAS
```
ELEMENTOS:
├── Header: "Receitas para hoje" + badge
├── Lista: 4 cards de receitas
│   ├── 🎯 Torta de Iogurte
│   ├── ⏱️ 30min | 🟢 Fácil | 💰 R$ 12
│   └── Badge: "🌱 400g CO₂ evitado"
└── Tap → Modal receita
```

### TELA 5: IMPACTO
```
ELEMENTOS:
├── Header: 3 stats (kg, CO₂, R$)
├── Progress bar: "TOP 15%"
├── Gráfico: Semanas S1-S4
├── Medalhas: 4 badges
└── Ranking: Top 5 + Você
```

### TELA 6: DOAÇÃO / MAPA
```
ELEMENTOS:
├── Badge: "R$ 50 impacto gerado"
├── Mapa mock: 180px altura
├── Lista: 3 cooperativas
│   ├── 🏢 Banco de Alimentos (2.3km)
│   ├── 🤝 Sesc Mesa Brasil (4.1km)
│   └── ♻️ Associação Catadores (1.8km)
└── [Agendar Retirada]
```

### TELA 7: PERFIL (extra)
```
ELEMENTOS:
├── Avatar: MS (80x80px)
├── Nome: "Maria Silva"
├── Nível: "🌱 Nível Economizador"
├── Stats: Pontos | Ranking | Scans
└── Menu: Config, Ajuda, Sair
```

---

## 🎨 DESIGN SYSTEM

### Cores
```css
--primary:      #22C55E;  /* Verde */
--primary-dark: #16A34A;
--secondary:    #10B981;
--background:   #F9FAFB;
--surface:      #FFFFFF;
--text-primary: #111827;
--text-secondary: #6B7280;
--warning:      #F59E0B;
--danger:       #EF4444;
```

### Tipografia
```css
font-family: 'Inter', sans-serif;
h1: 32px / 700
h2: 24px / 700
h3: 20px / 600
body: 16px / 400
```

### Espaçamento (sistema 8px)
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
```

---

## 📊 MOCK DATA

### Usuário
```javascript
const user = {
    name: 'Maria Silva',
    initials: 'MS',
    level: 'Economizador',
    points: 2340,
    ranking: 47,
    totalRanking: 312,
    streak: 7,
    foodsSaved: 24.5,    // kg
    co2Avoided: 18.2,   // kg
    moneySaved: 180,     // R$
    scans: 23
};
```

### Mock Scans (5 items)
```javascript
const mockScans = [
    { icon: '🍶', name: 'Iogurte Natural', expiry: '05/06', daysLeft: 2, value: 'R$ 8,90', co2: '250g' },
    { icon: '🍞', name: 'Pão de Forma', expiry: '04/06', daysLeft: 1, value: 'R$ 6,50', co2: '180g' },
    { icon: '🍌', name: 'Banana Prata', expiry: '03/06', daysLeft: 0, value: 'R$ 4,90', co2: '120g' },
    { icon: '🥛', name: 'Leite Integral', expiry: '06/06', daysLeft: 3, value: 'R$ 5,90', co2: '200g' },
    { icon: '🧀', name: 'Queijo Minas', expiry: '08/06', daysLeft: 5, value: 'R$ 12,90', co2: '300g' }
];
```

---

## 🚀 DEPLOY

### Opção 1: Netlify CLI
```bash
cd "03_Arquitetura_Projeto/spa-workspace"
netlify deploy --prod --dir=.
```

### Opção 2: Drag & Drop
```
1. Acessar: https://app.netlify.com/drop
2. Arrastar pasta spa-workspace
3. Deploy automático
```

### Opção 3: GitHub Pages
```bash
# Push para repo GitHub
# Settings → Pages → main branch
```

---

## ✅ CHECKLIST DE QUALIDADE

```
FUNCIONAL:
[ ] 6 telas completas (todas navegáveis)
[ ] Splash auto-transition (2500ms)
[ ] Botão FAB escanear funciona
[ ] Bottom nav alterna telas
[ ] Modal receita abre/fecha
[ ] Mock scan mostra resultado aleatório

VISUAL:
[ ] Cores seguem design system
[ ] Espaçamentos consistentes (sistema 8px)
[ ] Mobile-first (375x812px)
[ ] Responsivo (320-428px)

DEPLOY:
[ ] Link Netlify funciona
[ ] HTTPS ativo
[ ] Compartilhável
```

---

## 📦 OUTPUT ESPERADO

```
✅ Arquivos:
├── index.html (SPA completa)
├── styles.css (design system)
├── app.js (lógica + mock)
└── netlify.toml (config)

✅ Link:
└── https://[team-name].netlify.app
```

---

## 🔗 ENTREGÁVEL NO PORTAL

**Tipo:** Link URL  
**Valor:** https://[team].netlify.app  
**Formato aceite:** URL pública (Netlify, Vercel, GitHub Pages)