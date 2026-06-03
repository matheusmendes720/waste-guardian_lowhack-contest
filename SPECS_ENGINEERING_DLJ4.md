# 📋 SPECS ENGINEERING — DLJ4 ENTREGA 01
## Kickstart de Paralelização para Sub-Agents

> **Data:** 2026-06-03 14:00  
> **Versão:** 1.0  
> **Mentalidade:** SPECS-FIRST → PRD → EXECUÇÃO  
> **Objetivo:** Detalhar TUDO para delegação paralela

---

## 🎯 ENTREGAVEIS DE HOJE (5 PEDAÇOS)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  DELIVERABLE 1: SPA DEPLOYADO (Netlify)                                   │
│  DELIVERABLE 2: TEXTO DESCRITIVO (800-1500w)                              │
│  DELIVERABLE 3: MODELO FINANCEIRO B2B2C                                    │
│  DELIVERABLE 4: PESQUISA CAMPO (10 entrevistas)                           │
│  DELIVERABLE 5: VÍDEO PITCH (5:00 exatos) ← AMANHÃ                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📦 DELIVERABLE 1: SPEC — SPA DEPLOY (Netlify)

> **Squad:** FRONTEND_AGENT  
> **Status:** 80% feito  
> **Deadline:** 17:00 HOJE  
> **Prioridade:** 🔴 CRÍTICA

---

## 1.1 REQUISITOS FUNCIONAIS

### 1.1.1 Telas Obrigatórias (6)

```
TELA 01: SPLASH SCREEN
├── Entrada: Auto-display ao carregar
├── Comportamento: 
│   ├── Logo + tagline animados (2.5s)
│   └── Auto-transition para Home
├── CTA: Botão "Começar Agora" → Home
└── Timeout: 2500ms → navigateTo('home')

TELA 02: HOME / DASHBOARD
├── Elementos obrigatórios:
│   ├── Saudação: "Olá, [NOME]! 👋" (dinâmico)
│   ├── Streak badge: "🔥 X dias consecutivos"
│   ├── Card 1: "X.Xkg alimentos salvos" (primary)
│   ├── Card 2: "X.Xkg CO₂ evitado" (secondary)
│   ├── Ranking: "TOP X% — #XX/XXX"
│   ├── Botão FAB: [ESCANEAR ALIMENTO] (56x56px)
│   ├── Quick actions: 3 cards (Receitas, Impacto, Doar)
│   └── Bottom nav: Home | Impacto | Doar | Perfil
└── Estado: Always on (sem logout)

TELA 03: SCANNER / CÂMERA
├── Elementos:
│   ├── Viewfinder: Interface mockada (não câmera real)
│   ├── Animação: "Escaneando..." (loop)
│   ├── Botão captura: 72x72px (tap → resultado mock)
│   ├── Card resultado: Aparece após captura
│   │   ├── Ícone alimento (emoji)
│   │   ├── Nome do produto
│   │   ├── Alerta validade: "⚠️ Vence em X dias"
│   │   ├── Valor: "R$ X,XX"
│   │   └── CO₂: "XXXg"
│   └── Ações: [Ver Receitas] [Agendar Doação]
└── Mock data: 5 produtos aleatórios (rotativo)

TELA 04: RECEITAS INTELIGENTES
├── Elementos:
│   ├── Header: "Receitas para hoje" + badge count
│   ├── Lista cards: 4 receitas
│   │   ├── Card receita:
│   │   │   ├── Ícone: 🎯
│   │   │   ├── Nome: "Xxxx de Xxxx"
│   │   │   ├── Tag: "Economia: R$ XX"
│   │   │   ├── Meta: ⏱️ 30min | 🟢 Fácil | 💰 R$ XX
│   │   │   └── Badge: "🌱 XXXg CO₂ evitado"
│   └── Interação: Tap → Modal com detalhes
└── Modal receita:
    ├── Header: Ícone grande + nome
    ├── Meta: Tempo | Dificuldade | Custo | CO₂
    ├── Ingredientes: Lista com bullets
    ├── Modo preparo: Lista ordenada (1-7)
    └── Footer: Badge impacto "🌱 R$ XX + XXXg CO₂"

TELA 05: IMPACTO PESSOAL
├── Elementos:
│   ├── Header stats: 3 boxes (kg, CO₂, R$)
│   ├── Progress bar: "TOP X%" com posição
│   ├── Gráfico barras: Semanas S1-S4
│   ├── Medalhas: 4 badges (3 earned, 1 locked)
│   └── Ranking: Top 5 + "Você"
└── Dados mock:
    ├── Seu ranking: #47/312
    ├── Seus pontos: 2.340
    ├── Medalhas: Iniciante Verde, Economizador, Herói Climático

TELA 06: DOAÇÃO / MAPA
├── Elementos:
│   ├── Badge impacto: "R$ XX de impacto gerado"
│   ├── Mapa placeholder: 180px altura (mock visual)
│   └── Lista cooperativas: 3 cards
│       ├── Card:
│       │   ├── Ícone + Nome
│       │   ├── Distância: "📍 X.Xkm"
│       │   ├── Detalhes: Endereço, funcionamento, aceita
│       │   └── Botão: [Agendar Retirada]
└── Cooperativas mock:
    ├── Banco de Alimentos Municipal (2.3km)
    ├── Coletivo Sesc Mesa Brasil (4.1km)
    └── Associação de Catadores (1.8km)

TELA 07: PERFIL
├── Elementos:
│   ├── Avatar: 80x80px (iniciais MS)
│   ├── Nome: "Maria Silva"
│   ├── Nível: "🌱 Nível Economizador"
│   ├── Stats: Pontos | Ranking | Scans
│   ├── Menu: Configurações, Notificações, Ajuda, Compartilhar
│   └── Botão: [Sair] (estético)
└── Estado: Apenas leitura (sem edição)
```

### 1.1.2 Navegação

```
NAVEGAÇÃO PRINCIPAL (SPA sem reload):
├── Splash → Home (auto 2.5s)
├── Home → Scanner (FAB button)
├── Home → Receitas (quick action)
├── Home → Impacto (quick action)
├── Home → Doação (quick action)
├── Bottom nav: Home | Impacto | Doar | Perfil
└── Back buttons: Todas as telas (←)

MODAIS:
├── Receita tap → Modal receita
└── Close: X button ou tap outside
```

---

## 1.2 REQUISITOS VISUAIS (DESIGN SYSTEM)

### 1.2.1 Cores

```css
:root {
    /* Primary Brand */
    --primary:        #22C55E;  /* Verde principal */
    --primary-dark:   #16A34A;  /* Verde escuro */
    --primary-light:  #4ADE80;  /* Verde claro */
    --secondary:      #10B981;  /* Verde esmeralda */
    
    /* Neutros */
    --background:     #F9FAFB;  /* Cinza claro */
    --surface:       #FFFFFF;  /* Branco */
    --border:        #E5E7EB;  /* Cinza borda */
    
    /* Texto */
    --text-primary:   #111827;  /* Preto */
    --text-secondary: #6B7280;  /* Cinza médio */
    --text-light:     #9CA3AF;  /* Cinza claro */
    
    /* Feedback */
    --warning:        #F59E0B;  /* Amarelo */
    --danger:         #EF4444;  /* Vermelho */
    --success:        #10B981;  /* Verde check */
}
```

### 1.2.2 Tipografia

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Sizes */
h1: 32px / 700 / -0.5px tracking
h2: 24px / 700 / 0
h3: 20px / 600 / 0
h4: 18px / 600 / 0
body: 16px / 400 / 0
small: 14px / 400 / 0
caption: 12px / 400 / 0

/* Line Height */
headings: 1.2
body: 1.5
```

### 1.2.3 Espaçamento (Sistema 8px)

```css
--space-xs:  4px;
--space-sm:  8px;
--space-md:  16px;
--space-lg:  24px;
--space-xl:  32px;
--space-2xl: 48px;
```

### 1.2.4 Border Radius

```css
--radius-sm:  8px;   /* Cards, inputs */
--radius-md:  12px;  /* Buttons */
--radius-lg:  16px;  /* Modais */
--radius-xl:  24px;  /* Splash screen */
--radius-full: 9999px; /* Avatar, badges */
```

### 1.2.5 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 1.3 REQUISITOS TÉCNICOS

### 1.3.1 Stack

```
FRONTEND:
├── HTML5 (single page, all screens in one file)
├── CSS3 (embedded, no external dependencies)
├── JavaScript Vanilla (no frameworks)
├── Google Fonts: Inter
└── Emojis: Native (no icon library)

DEPLOY:
├── Platform: Netlify
├── Method: Drag & drop ou Netlify CLI
├── Domain: [team-name].netlify.app
└── SSL: Automático

MOBILE:
├── Dimensão base: 375x812px (iPhone 13 Pro)
├── Responsivo: 320px - 428px (safe area)
├── Touch targets: 44x44px minimum
└── Safe area: 16px padding horizontal
```

### 1.3.2 Performance

```
METRICAS:
├── First Contentful Paint: < 1.5s
├── Largest Contentful Paint: < 2.5s
├── Total Blocking Time: < 200ms
├── Cumulative Layout Shift: < 0.1

OTIMIZAÇÕES:
├── CSS crítico inline
├── Fontes: display=swap
├── Imagens: nenhuma (emojis only)
└── JavaScript: defer (no render blocking)
```

### 1.3.3 Browser Support

```
MÍNIMO:
├── Chrome 90+
├── Firefox 88+
├── Safari 14+
├── Edge 90+

FALLBACK:
├── CSS Grid → Flexbox
├── CSS Variables → hardcoded
└── ES6+ → ES5 (se necessário)
```

---

## 1.4 DADOS MOCKADOS

### 1.4.1 Usuário

```javascript
const userData = {
    name: 'Maria Silva',
    initials: 'MS',
    level: 'Economizador',
    points: 2340,
    ranking: 47,
    totalRanking: 312,
    streak: 7,
    foodsSaved: 24.5,  // kg
    co2Avoided: 18.2,  // kg
    moneySaved: 180,   // R$
    scans: 23,
    badges: [
        { id: 'iniciante', name: 'Iniciante Verde', earned: true },
        { id: 'economizador', name: 'Economizador', earned: true },
        { id: 'heroi', name: 'Herói Climático', earned: true },
        { id: 'mestre', name: 'Mestre', earned: false }
    ]
};
```

### 1.4.2 Mock Scans (5 items)

```javascript
const mockScans = [
    {
        icon: '🍶',
        name: 'Iogurte Natural Integral',
        expiry: '05/06/2026',
        daysLeft: 2,
        value: 'R$ 8,90',
        co2: '250g'
    },
    {
        icon: '🍞',
        name: 'Pão de Forma',
        expiry: '04/06/2026',
        daysLeft: 1,
        value: 'R$ 6,50',
        co2: '180g'
    },
    {
        icon: '🍌',
        name: 'Banana Prata',
        expiry: '03/06/2026',
        daysLeft: 0,
        value: 'R$ 4,90',
        co2: '120g'
    },
    {
        icon: '🥛',
        name: 'Leite Integral',
        expiry: '06/06/2026',
        daysLeft: 3,
        value: 'R$ 5,90',
        co2: '200g'
    },
    {
        icon: '🧀',
        name: 'Queijo Minas',
        expiry: '08/06/2026',
        daysLeft: 5,
        value: 'R$ 12,90',
        co2: '300g'
    }
];
```

### 1.4.3 Receitas (4 items)

```javascript
const recipes = {
    torta: {
        name: 'Torta de Iogurte',
        icon: '🍰',
        time: '30 min',
        level: 'Fácil',
        cost: 'R$ 12',
        co2: '400g',
        ingredients: [
            '1 iogurte natural (200g)',
            '2 ovos',
            '1 xícara de farinha de trigo',
            '1/2 xícara de açúcar',
            '1 colher de sopa de óleo',
            '1 colher de chá de fermento'
        ],
        steps: [
            'Preheat o forno a 180°C.',
            'Misture o iogurte com os ovos e o óleo.',
            'Adicione o açúcar e misture bem.',
            'Acrescente a farinha e o fermento.',
            'Misture até ficar homogêneo.',
            'Despeje em uma forma untada.',
            'Asse por 25-30 minutos.'
        ]
    },
    smoothie: { ... },
    bolo: { ... },
    sorvete: { ... }
};
```

### 1.4.4 Cooperativas (3 items)

```javascript
const cooperatives = [
    {
        name: 'Banco de Alimentos Municipal',
        icon: '🏢',
        distance: '2.3km',
        address: 'Rua das Flores, 123 - Centro',
        hours: 'Seg-Sex 08:00-18:00',
        accepts: 'Frutas, legumes, laticínios, pães',
        contact: '(11) 3333-4444'
    },
    {
        name: 'Coletivo Sesc Mesa Brasil',
        icon: '🤝',
        distance: '4.1km',
        address: 'Av. Brasil, 456 - Jardim',
        hours: 'Seg-Sáb 09:00-17:00',
        accepts: 'Alimentos não perecíveis',
        contact: '(11) 4444-5555'
    },
    {
        name: 'Associação de Catadores',
        icon: '♻️',
        distance: '1.8km',
        address: 'Rua Verde, 789 - Parque',
        hours: 'Seg-Sex 07:00-16:00',
        accepts: 'Alimentos próximos ao vencimento',
        contact: '(11) 5555-6666'
    }
];
```

### 1.4.5 Ranking (Top 5 + Você)

```javascript
const rankingData = [
    { rank: '🥇', name: 'Ana Silva', points: 3420 },
    { rank: '🥈', name: 'João Costa', points: 3180 },
    { rank: '🥉', name: 'Pedro Santos', points: 2980 },
    { rank: '#47', name: 'Você (Maria)', points: 2340, current: true },
    { rank: '#48', name: 'Carlos Lima', points: 2280 }
];
```

---

## 1.5 CHECKLIST DE QUALIDADE

```
FUNCIONAL:
[ ] 6 telas completas (todas acessíveis via navegação)
[ ] Splash auto-transition (2500ms)
[ ] Botão FAB escanear funciona
[ ] Bottom nav alterna telas
[ ] Modal receita abre/fecha
[ ] Mock scan mostra resultado aleatório

VISUAL:
[ ] Cores seguem design system
[ ] Espaçamentos consistentes (sistema 8px)
[ ] Border radius corretos
[ ] Sombras aplicadas
[ ] Mobile-first (375x812px)
[ ] Responsivo (320-428px)

PERFORMANCE:
[ ] Carrega em < 3s (3G)
[ ] Sem console errors
[ ] Sem recursos quebrados

DEPLOY:
[ ] Link Netlify funciona
[ ] HTTPS ativo
[ ] Compartilhável (view only)
```

---

## 1.6 OUTPUT ESPERADO DO AGENT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUTPUT: SPA_PRONTO                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Arquivos:                                                              │
│  ├── index.html (SPA completa)                                            │
│  ├── styles.css (design system)                                           │
│  ├── app.js (lógica + mock)                                               │
│  └── netlify.toml (config)                                                │
│                                                                             │
│  🔗 Deploy:                                                                │
│  └── https://[team-name].netlify.app                                       │
│                                                                             │
│  ✅ Checklist:                                                             │
│  ├── 6 telas navegáveis                                                  │
│  ├── Mock data realista                                                   │
│  ├── Mobile-first                                                         │
│  └── Performance < 3s                                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📦 DELIVERABLE 2: SPEC — TEXTO DESCRITIVO

> **Squad:** CONTENT_AGENT  
> **Status:** 0% (a fazer)  
> **Deadline:** 22:00 HOJE  
> **Prioridade:** 🔴 ALTA

---

## 2.1 ESTRUTURA DO DOCUMENTO

```
DOCUMENTO: TEXTO_DESCRITIVO_WASTE_GUARDIAN.md
FORMATO: Markdown (exportar PDF depois)
EXTENSÃO: 800-1500 palavras (exato)
IDIOMA: Português Brasil
POV: Terceira pessoa (o projeto) + primeira (a equipe)

HEADERS:
# (H1): Título do projeto
## (H2): Section headings
### (H3): Sub-sections (se necessário)
```

---

## 2.2 SEÇÃO 1: O PROBLEMA (150-200 palavras)

### Requisitos de Conteúdo

```
ELEMENTOS OBRIGATÓRIOS:

1. Contextualização Nacional
   - "O Brasil descarta 1.500 toneladas de alimentos por dia"
   - "O equivalente a 375 caminhões de lixo por dia"

2. Dados Quantitativos (COM FONTES)
   - R$ 61,3 bilhões/ano perdidos (Senado Federal, 2024)
   - 30% do purchased doméstico vai para o lixo (UNEP 2024)
   - R$ 180-350 por família/mês desperdiçados (IBGE 2024)
   - 10kg CO₂/família/mês (EPA Carbon Calculator)

3. Impacto no Dia-a-Dia
   - "Ninguém quer jogar comida fora"
   - "Mas sem dados, sem método, sem hábito — isso acontece"
   - "O planeta paga a conta"

4. ODS Alinhamento (mencionar)
   - ODS 12.3: Reduzir desperdício alimentar
   - ODS 11.6: Cidades sustentáveis
   - ODS 13.3: Educação climática
```

### Checklist de Qualidade

```
[ ] Dados com fontes (IBGE, FAO, UNEP, EPA)
[ ] Números exatos (não adjetivos)
[ ] 150-200 palavras (contar)
[ ] Linguição simples (não jargão)
[ ] POV: "O Waste Guardian busca resolver..."
```

### Exemplo de Parágrafo

```markdown
## 1. O Problema

O Brasil é o décimo maior desperdiçador de alimentos do mundo, 
descartando 1.500 toneladas por dia — o equivalente a 375 
caminhões de lixoCHEcode. Essa perda representa R$ 61,3 bilhões 
anuais em alimentos que nunca chegam às mesas (Senado Federal, 
2024). Para as famílias brasileiras, o impacto é direto: 
cada domicílio desperdiça entre R$ 180 e R$ 350 por mês em 
alimentos jogados fora, frequentemente por falta de 
visibilidade sobre o que tem em casa (IBGE, 2024). Mais do que 
um problema financeiro, o desperdício alimentar gera 10kg de 
CO₂ por família, por mês, agravando a crise climática (EPA). 
O ODS 12.3 estabelece que precisamos reduzir esse desperdício 
pela metade até 2030. [CONTINUAR...]
```

---

## 2.3 SEÇÃO 2: A SOLUÇÃO (200-300 palavras)

### Requisitos de Conteúdo

```
ELEMENTOS OBRIGATÓRIOS:

1. Nome e Tagline
   - Nome: Waste Guardian
   - Tagline: "Cada grama conta"
   - Subtítulo: "Seu copiloto de sustentabilidade doméstica"

2. O que é (Descrição do App)
   - Aplicativo mobile
   - IA para identificação de alimentos
   - Gamificação de impacto ambiental
   - Conexão com cooperativas

3. Features (5 principais)
   a) Scanner Inteligente
      - Câmera + IA
      - Identifica alimento + validade
      - Calcula valor e CO₂
   
   b) Receitas Personalizadas
      - Baseadas em ingredientes próximos ao vencimento
      - Economia em R$ e CO₂ por receita
   
   c) Gamificação
      - Ranking semanal
      - Medalhas e achievements
      - Streaks de economia
   
   d) Impacto Ambiental
      - Dashboard com métricas em tempo real
      - kg salvos, CO₂ evitado, R$ economizados
   
   e) Conexão Social
      - Mapa de cooperativas
      - Agendamento de doação
      - Impacto social mensurado

4. Diferencial vs Concorrentes
   - "Não é só um app de lembretes"
   - "IA + Gamificação + Conexão social"
   - "Impacto quantificado, não qualificado"

5. Link do Protótipo
   - https://[team-name].netlify.app
   - (Colocar no texto: "Protótipo disponível em...")
```

---

## 2.4 SEÇÃO 3: INOVAÇÃO (150-200 palavras)

### Requisitos de Conteúdo

```
ELEMENTOS OBRIGATÓRIOS:

1. Diferencial Técnico
   - Uso de IA (OCR) para identificação de alimentos
   - Não é só "lista de compras" ou "lembrete de validade"
   - Algoritmo de recomendações baseado em padrões

2. Diferencial de Gamificação
   - Ranking social (não solitário)
   - Medalhas com significado (ODS)
   - Progresso visível (kg, CO₂, R$)

3. Diferencial de Conexão Social
   - Integração com Lei 14.016/2020 (Doação de Alimentos)
   - Match entre excedente e necessidade
   - Impacto social mensurável

4. Diferencial de Modelo
   - B2B2C (não caridade, não app gratuito genérico)
   - Empresas pagam para patrocinar sustentabilidade
   - Usuário finalbeneficia de graça

5. Alinhamento ODS
   - ODS 11.6: Cidades sustentáveis
   - ODS 12.3: Consumo responsável
   - ODS 13.3: Educação climática
   - ODS 2.1: Fome zero
```

---

## 2.5 SEÇÃO 4: IMPACTO SOCIAL (150-200 palavras)

### Requisitos de Conteúdo

```
ELEMENTOS OBRIGATÓRIOS:

1. Metas Quantificadas (COM CÁLCULOS)

ODS 12.3 — CONSUMO RESPONSÁVEL:
├── Meta: 120kg/mês de alimentos salvos
├── Cálculo: 50 fam × 2.4kg/semana × 50% redução × 4 sem
└── Fonte: UNEP Food Waste Index 2024

ODS 11.6 — CIDADES SUSTENTÁVEIS:
├── Meta: 0.8 ton CO₂ evitado/mês
├── Cálculo: 3.06kg CO₂ × 120kg food = 367kg ≈ 0.8 ton
└── Fonte: EPA Carbon Calculator

ODS 13.3 — EDUCAÇÃO CLIMÁTICA:
├── Meta: 50 famílias piloto
├── Base: Alinhamento com currículo escolar ESG
└── Fonte: DLJ4 Theme Alignment

ODS 2.1 — FOME ZERO:
├── Meta: 80kg/mês doados via cooperativas
├── Cálculo: 40% items scanned × 120kg eligible
└── Fonte: Lei 14.016/2020

2. Projeção Anual (se aplicável)
├── 50 famílias × 6 meses = 720kg salvos
├── 0.8 × 6 = 4.8 ton CO₂ evitado
├── R$ 90 × 50 × 6 = R$ 27.000 economizados

3. Escalabilidade
├── "No Ano 2, com 500 famílias..."
├── "Objetivo: expandir para escolas técnicas"
```

### Tabela de Métricas

```markdown
| ODS | Meta | Métrica | Cálculo | Fonte |
|-----|------|---------|---------|-------|
| 12.3 | Reduzir desperdício | 120kg/mês | 50×2.4×4×0.5 | UNEP 2024 |
| 11.6 | Impacto ambiental | 0.8 ton CO₂ | 3.06×120 | EPA |
| 13.3 | Engajamento | 50 famílias | Piloto | DLJ4 |
| 2.1 | Fome zero | 80kg doados | 0.4×120 | Lei 14.016 |
```

---

## 2.6 SEÇÃO 5: SUSTENTABILIDADE FINANCEIRA (150-200 palavras)

### Requisitos de Conteúdo

```
ELEMENTOS OBRIGATÓRIOS:

⚠️ CRÍTICO: "100% gratuito sem fins lucrativos" = NOTA 2
⚠️ CRÍTICO: Jurados penalizam modelo "romântico"

1. Modelo de Negócio: B2B2C

B2B (quem paga):
├── Supermercados (Pão de Açúcar, Extra, Carrefour)
├── Indústria alimentícia (Nestlé, Danone, JBS)
├── Fabricantes de eletrodomésticos (Samsung, LG)
├── Redes de restaurante (Outback, Madero)
└── Motivo: Marketing ESG + dados de consumo

B2C (quem usa de graça):
├── Famílias de classe média
├── App gratuito + gamificação
└── Geração de dados para B2B

2. Fontes de Receita

| Fonte | Mensal (Ano 1) | Anual |
|-------|---------------|-------|
| Assinatura B2B | R$ 5.000-15.000 | R$ 60.000-180.000 |
| Freemium → Premium | R$ 2.000 | R$ 24.000 |
| Dados anonimizados | R$ 1.500 | R$ 18.000 |
| **TOTAL** | **R$ 8.500-18.500** | **R$ 102.000-222.000** |

3. Estrutura de Custos

| Item | Mensal (Ano 1) |
|------|---------------|
| Firebase (Auth + Firestore + Storage) | R$ 500-1.000 |
| OpenAI API (OCR + Receitas) | R$ 200-500 |
| Desenvolvimento | Time voluntário |
| Marketing | Orgânico |
| **TOTAL** | **R$ 700-1.500** |

4. Margem Operacional
- Margem: 75-85%
- Break-even: Mês 3-6
- Projeção Ano 2: R$ 1.200.000-2.400.000
```

---

## 2.7 FORMATAÇÃO DO DOCUMENTO

```markdown
# WASTE GUARDIAN
## Seu Copiloto de Sustentabilidade Doméstica

---

### 1. O Problema

[150-200 palavras]

---

### 2. A Solução

[200-300 palavras]

---

### 3. Inovação

[150-200 palavras]

---

### 4. Impacto Social

[150-200 palavras]

---

### 5. Sustentabilidade Financeira

[150-200 palavras]

---

**Equipe:** ENGAJAM  
**Orientadora:** [NOME]  
**Escola:** [NOME]  
**Competição:** Desafio Liga Jovem 4ª Edição — Sebra  
**Data:** 03/06/2026
```

---

## 2.8 CHECKLIST DE QUALIDADE

```
CONTEÚDO:
[ ] 800-1500 palavras (exato — usar contador)
[ ] 5 seções obrigatórias completas
[ ] Fontes citadas (IBGE, FAO, UNEP, EPA, Lei 14.016)
[ ] Números exatos (não adjetivos)
[ ] ODS mencionados (11, 12, 13, 2)
[ ] Modelo B2B2C explícito
[ ] Link do protótipo incluso

FORMATO:
[ ] Markdown (exportar PDF depois)
[ ] Headers hierárquicos (H1 > H2)
[ ] Sem erros ortográficos
[ ] Linguição técnica simples (não excessiva)

QUALIDADE:
[ ] Texto faz sentido (lido por Humano)
[ ] Não parece "copiado de IA" (evitar repetições)
[ ] Dados são verificáveis (fontes reais)
```

---

## 2.9 OUTPUT ESPERADO DO AGENT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUTPUT: TEXTO_DESCRITIVO_PRONTO                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Arquivo:                                                               │
│  └── 04_BI_Ofensivo/TEXTO_DESCRITIVO_WASTE_GUARDIAN.md                    │
│                                                                             │
│  📊 Métricas:                                                              │
│  ├── Extensão: 800-1500 palavras                                          │
│  ├── Seções: 5                                                            │
│  └── Status: ✅ Completo                                                   │
│                                                                             │
│  ✅ Checklist:                                                             │
│  ├── Problema com fontes                                                  │
│  ├── Solução com features                                                 │
│  ├── Inovação com diferenciais                                            │
│  ├── Impacto quantificado (ODS + métricas)                               │
│  └── Sustentabilidade financeira (B2B2C + números)                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📦 DELIVERABLE 3: SPEC — MODELO FINANCEIRO B2B2C

> **Squad:** FINANCE_AGENT  
> **Status:** 0% (a fazer)  
> **Deadline:** 19:00 HOJE  
> **Prioridade:** 🔴 ALTA

---

## 3.1 ESTRUTURA DO DOCUMENTO

```
DOCUMENTO: MODELO_FINANCEIRO_B2B2C_DLJ4.md
FORMATO: Markdown + Planilha (se possível)
EXTENSÃO: Livre (mas completo)
IDIOMA: Português Brasil
POV: Apresentação para jurados (profissional)
```

---

## 3.2 BLOCO 1: PRODUTO

```
ELEMENTOS:

1. Identidade
   - Nome: Waste Guardian
   - Tipo: Aplicativo mobile (SaaS)
   - Segmento: Gestão de desperdício alimentar doméstico
   - Fase: Protótipo (DLJ4 Fase 1)

2. Descrição
   - "Gerenciamento inteligente de alimentos domésticos via IA"
   - "Gamificação de impacto ambiental"
   - "Conexão com cooperativas para doação"

3. Diferencial
   - "App gratuito para usuário final"
   - "Empresas pagam por posicionamento ESG"
   - "Dados anonimizados como valor adicional"
```

---

## 3.3 BLOCO 2: PREÇO

```
ELEMENTOS:

1. Modelo Freemium

FREE TIER (100%):
├── Scanner de alimentos (IA mock → real)
├── Receitas personalizadas
├── Gamificação básica (ranking, medalhas)
├── Dashboard de impacto
└── Mapa de cooperativas

PREMIUM TIER (10% convertidos):
├── Preço: R$ 40/mês
├── Acesso: Dashboard avançado
├── Acesso: IA completa (sugestões proativas)
├── Acesso: Notificações inteligentes
└── Acesso: Histórico ilimitado

JUSTIFICATIVA:
├── Benchmark: Apps like Notion, Spotify freemium
├── Preço acessível para classe média
└── Não é obrigatório (gamificação funciona free)

2. Modelo B2B

TIER 1 — PATROCINADOR BRONZE:
├── Preço: R$ 2.000/mês
├── Benefícios:
│   ├── Logo no app (pequeno, footer)
│   ├── Badge "Patrocinador ESG"
│   └── 100 relatórios/mês
└── Target: Pequenos mercados

TIER 2 — PATROCINADOR PRATA:
├── Preço: R$ 5.000/mês
├── Benefícios:
│   ├── Logo no app (médio, header)
│   ├── Banner em receitas
│   ├── Dashboard exclusivo
│   └── 500 relatórios/mês
└── Target: Supermercados, redes

TIER 3 — PATROCINADOR OURO:
├── Preço: R$ 15.000/mês
├── Benefícios:
│   ├── Logo grande (splash screen)
│   ├── Integração de ofertas
│   ├── API de dados anonimizados
│   └── Relatórios ilimitados
└── Target: Indústrias, eletrodomésticos

JUSTIFICATIVA:
├── Benchmark: Patrocínio esportivo R$ 50k-500k/ano
├── ESG Mandate: Empresas precisam de projetos sustentáveis
└── ROI: Marketing tradicional 10x mais caro
```

---

## 3.4 BLOCO 3: QUEM PAGA

```
ELEMENTOS:

1. B2B — Empresas (Pagadores Primários)

SEGMENTO A: SUPERMERCADOS
├── Exemplos: Pão de Açúcar, Extra, Carrefour, Dia
├── Motivação: Marketing ESG + dados de compra
├── Ticket: R$ 5.000-15.000/mês
└── Volume: 3-5 clientes no Ano 1

SEGMENTO B: INDÚSTRIA ALIMENTÍCIA
├── Exemplos: Nestlé, Danone, JBS, Pepsico
├── Motivação: Dados de descarte + brand safety
├── Ticket: R$ 10.000-15.000/mês
└── Volume: 2-3 clientes no Ano 1

SEGMENTO C: ELETRODOMÉSTICOS
├── Exemplos: Samsung, LG, Electrolux
├── Motivação: Integração app (geladeiras smart)
├── Ticket: R$ 15.000-20.000/mês
└── Volume: 1-2 clientes no Ano 1

SEGMENTO D: REDES DE RESTAURANTE
├── Exemplos: Outback, Madero, McDonald's
├── Motivação: Sustentabilidade + relatórios ESG
├── Ticket: R$ 3.000-8.000/mês
└── Volume: 2-3 clientes no Ano 1

2. B2C — Usuários (Geração de Valor)

SEGMENTO: FAMÍLIAS DE CLASSE MÉDIA
├── Perfil: 4 pessoas, renda R$ 3.000-8.000
├── Uso: Free tier (100%)
├── Geração de valor: Dados anonimizados
└── Conversão: 10% → Premium (R$ 40/mês)

JUSTIFICATIVA:
├── "Usuário não paga, empresa paga pelo acesso aos dados"
├── "Modelo comprovado: Google, Facebook, Instagram"
└── "Não é caridade, é economia de plataforma"
```

---

## 3.5 BLOCO 4: CUSTOS OPERACIONAIS

```
ELEMENTOS:

1. Custos Fixos (Mensal)

FIREBASE:
├── Auth: R$ 0 (free tier até 10k users)
├── Firestore: R$ 0.18/1000 writes, R$ 0.06/1000 reads
├── Storage: R$ 0.026/GB
├── Hospedagem: R$ 0 (Netlify/alternativa)
├── Estimativa: R$ 500-1.000/mês (500 famílias)
└── Cálculo: 500 fam × 10 scans × 30 dias = 150k ops/mês

OPENAI API:
├── GPT-4o Mini: R$ 0.165/1M tokens input
├── OCR (food recognition): R$ 0.003/imagem
├── Estimativa: R$ 200-500/mês
└── Cálculo: 500 fam × 10 scans × R$ 0.01 = R$ 150/mês base

2. Custos Variáveis

DESENVOLVIMENTO:
├── Fase 1: Time voluntário (equipe DLJ4)
├── Fase 2+: R$ 15.000-30.000/mês (se crescer)
└── Atual: R$ 0

MARKETING:
├── Canal: ODS viral + boca a boca
├── Eventos: DLJ4, hackathons
├── Custo: R$ 0 (orgânico)
└── Paid ads (futuro): R$ 2.000-5.000/mês

INFRAESTRUTURA:
├── Domínio: R$ 30/ano
├── SSL: R$ 0 (Cloudflare)
├── CDN: R$ 0 (Netlify)
└── Total: ~R$ 30/mês

3. Tabela Consolidada

| Categoria | Mês 1-6 | Mês 7-12 | Ano 2 | Ano 3 |
|-----------|---------|----------|-------|-------|
| Firebase | R$ 3.000 | R$ 6.000 | R$ 15K | R$ 80K |
| OpenAI | R$ 1.500 | R$ 3.000 | R$ 8K | R$ 40K |
| Desenvolvimento | R$ 0 | R$ 0 | R$ 180K | R$ 480K |
| Marketing | R$ 0 | R$ 0 | R$ 30K | R$ 120K |
| **TOTAL** | **R$ 4.500** | **R$ 9.000** | **R$ 233K** | **R$ 720K** |
```

---

## 3.6 BLOCO 5: PROJEÇÃO FINANCEIRA (3 ANOS)

```
ELEMENTOS:

1. Premissas

USUÁRIOS:
├── Ano 1: 50 famílias piloto
├── Ano 2: 500 famílias (+10x)
└── Ano 3: 5.000 famílias (+10x)

B2B CLIENTES:
├── Ano 1: 5 clientes (R$ 5.000 avg)
├── Ano 2: 20 clientes (R$ 7.500 avg)
└── Ano 3: 50 clientes (R$ 10.000 avg)

CONVERSÃO PREMIUM:
├── Ano 1: 10% (5 famílias)
├── Ano 2: 15% (75 famílias)
└── Ano 3: 20% (1.000 famílias)

2. Projeção de Receita

| Fonte | Ano 1 | Ano 2 | Ano 3 |
|-------|-------|-------|-------|
| B2B Assinatura | R$ 300.000 | R$ 1.800.000 | R$ 6.000.000 |
| Freemium → Premium | R$ 24.000 | R$ 360.000 | R$ 4.800.000 |
| Dados anonimizados | R$ 18.000 | R$ 180.000 | R$ 1.200.000 |
| **TOTAL** | **R$ 342.000** | **R$ 2.340.000** | **R$ 12.000.000** |

3. Projeção de Lucro

| Item | Ano 1 | Ano 2 | Ano 3 |
|------|-------|-------|-------|
| Receita | R$ 342.000 | R$ 2.340.000 | R$ 12.000.000 |
| Custos | R$ 13.500 | R$ 233.000 | R$ 720.000 |
| **LUCRO** | **R$ 328.500** | **R$ 2.107.000** | **R$ 11.280.000** |
| **MARGEM** | **96%** | **90%** | **94%** |

⚠️ NOTA: Margem altíssima porque desenvolvimento é voluntário na Fase 1
⚠️ REALISTA: Incluir custo de desenvolvimento após DLJ4 (R$ 15-30k/mês)

4. Break-even Analysis

├── Mês 1-6: -R$ 13.500 (investimento)
├── Mês 7-12: +R$ 171.000 (lucro acumulado)
├── **Break-even: Mês 9** (conservador)
└── **Break-even: Mês 4** (otimista)
```

---

## 3.7 BLOCO 6: BENCHMARKS E JUSTIFICATIVAS

```
ELEMENTOS:

1. Benchmarks de Mercado

APP COMPARÁVEL: Tinder (Match Group)
├── Modelo: Freemium + B2B (ads)
├── Preço premium: R$ 30-50/mês
├── B2B: Facebook Ads, Google Ads
└── Resultado: R$ 2.7B receita/ano

APP COMPARÁVEL: Spotify
├── Modelo: Freemium + Premium
├── Preço premium: R$ 21.90/mês
├── B2B: Podcast ads, Brand partnerships
└── Resultado: R$ 13B receita/ano

APP COMPARÁVEL: Notion
├── Modelo: Freemium + Teams
├── Preço premium: R$ 80/usuário/mês
├── B2B: Enterprise sales
└── Resultado: R$ 200M ARR

2. Justificativa de Preços

PREMIUM R$ 40/mês:
├── Comparável: Netflix (R$ 55), Spotify (R$ 22)
├── Valor: Economia de R$ 90/mês em alimentos
├── ROI: 2.25x por mês
└── Justificativa: "Paga pra si mesmo"

B2B R$ 2.000-15.000/mês:
├── Comparável: Marketing tradicional R$ 50k-500k/ano
├── ESG budget: Empresas têm 1-5% budget para ESG
├── ROI: Brand awareness + dados + compliance
└── Justificativa: "10x mais barato que mídia tradicional"

3. Riscos e Mitigações

RISCO 1: Não consegue clientes B2B
├── Probabilidade: Alta (Fase 1)
├── Mitigação: MVP com 1-2 pilotos gratuitos
└── Impacto: Baixo (time voluntário)

RISCO 2: Custo Firebase explodes
├── Probabilidade: Baixa
├── Mitigação: Arquitetura serverless, scale down
└── Impacto: R$ 500-2.000/mês (gerenciável)

RISCO 3: Concorrência copy
├── Probabilidade: Média
├── Mitigação: Dados + relationships (moat)
└── Impacto: Médio (primeiro-mover advantage)
```

---

## 3.8 OUTPUT ESPERADO DO AGENT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUTPUT: MODELO_FINANCEIRO_PRONTO                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Arquivos:                                                              │
│  ├── 04_BI_Ofensivo/MODELO_FINANCEIRO_B2B2C_DLJ4.md                       │
│  └── (Opcional) Planilha Excel/LibreOffice                                  │
│                                                                             │
│  ✅ Checklist:                                                             │
│  ├── Bloco 1: Produto (identidade + descrição)                             │
│  ├── Bloco 2: Preço (Freemium + B2B tiers)                                │
│  ├── Bloco 3: Quem paga (B2B + B2C)                                      │
│  ├── Bloco 4: Custos (Firebase + OpenAI + Dev)                           │
│  ├── Bloco 5: Projeção 3 anos (receita + lucro)                          │
│  └── Bloco 6: Benchmarks + justificativas                                 │
│                                                                             │
│  📊 Métricas:                                                              │
│  ├── Receita Ano 1: R$ 342.000                                            │
│  ├── Margem: 90%+                                                         │
│  └── Break-even: Mês 4-9                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📦 DELIVERABLE 4: SPEC — PESQUISA DE CAMPO

> **Squad:** RESEARCH_AGENT  
> **Status:** 0% (a fazer)  
> **Deadline:** 21:00 HOJE  
> **Prioridade:** 🔴 CRÍTICA (Nota máxima 2 sem isso)

---

## 4.1 OBJETIVO DA PESQUISA

```
META: Validar problema + solução com 10+ famílias reais

RESULTADO ESPERADO:
├── Problema validado: Famílias descartam alimentos semanalmente
├── Solução validada: Usariam app de scan de alimentos
├── Modelo validado: Doariam para cooperativa
├── Preço validado: Freemium aceito
└── Métricas: Números reais de campo
```

---

## 4.2 PERFIL DO ENTREVISTADO

```
CRITÉRIOS DE SELEÇÃO:

OBRIGATÓRIOS:
├── Família com 3-5 pessoas
├── Classe média (renda R$ 3.000-10.000)
├── Cozinha em casa pelo menos 4x/semana
├── Descarte alimentos pelo menos 1x/semana
└── Smartphone com câmera

PREFERENCIAIS:
├── Responsável pela compra/conserto de comida
├── Idade: 25-55 anos
├── Acesso à internet WiFi
└── Experiência previa com apps de delivery/cozinha

CANAIS DE RECRUTAMENTO:
├── Contatos pessoais (família, amigos)
├── Redes sociais (WhatsApp, Instagram)
├── Vizinhança
└── Escola (pais de colegas)
```

---

## 4.3 PROTOCOLO DE ENTREVISTA

```
DURAÇÃO: 10-15 minutos
FORMATO: Presencial ou videochamada
REGISTRO: Notas + foto (se consentir)

ESTRUTURA:

BLOCO 1: CONTEXT (2 min)
├── Apresentação da equipe
├── Explicação do projeto (resumo 30s)
└── Consentimento para registro

BLOCO 2: PROBLEMA (5 min)
├── Pergunta 1: "Com que frequência você descarta alimentos por vencimento?"
├── Pergunta 2: "Quanto você估算 que gasta por mês em alimentos descartados?"
├── Pergunta 3: "Pode me dar um exemplo recente? O que foi, quanto custou?"
└── Pergunta 4: "Por que acha que acontece?"

BLOCO 3: SOLUÇÃO (5 min)
├── Pergunta 5: "Você já jogou iogurte, pão ou frutas fora por esquecer a data?"
├── Pergunta 6: "Você usaria um app que escaneia alimentos e sugere receitas?"
├── Pergunta 7: "Quanto tempo você gasta por semana pensando no que tem na geladeira?"
└── Pergunta 8: "O que te impediria de usar esse app?"

BLOCO 4: MODELO (3 min)
├── Pergunta 9: "Você doaria alimentos próximos ao vencimento para uma cooperativa?"
├── Pergunta 10: "Quanto você pagaria por um app assim?"
└── Pergunta 11: "Quanto seria aceitável gastar por mês?"

BLOCO 5: FECHAMENTO (1 min)
├── Agradecimento
├── Permissão para follow-up
└── foto (opcional)
```

---

## 4.4 FORMULÁRIO DE REGISTRO

```markdown
## ENTREVISTA #[NÚMERO]
**Data:** DD/MM/AAAA
**Entrevistador:** [NOME]
**Duração:** X minutos

### Perfil do Entrevistado
| Campo | Valor |
|-------|-------|
| Nome | [ANÔNIMO / CÓDIGO] |
| Idade | XX |
| Pessoas em casa | X |
| Renda familiar | R$ X.XXX |
| Bairro | [opcional] |

### Respostas

**P1 - Frequência descarte:**
[ ] Diário  [ ] 3-5x/semana  [ ] 1-2x/semana  [ ] 1-2x/mês  [ ] Nunca

**P2 - Valor estimado mensal:**
R$ ______ (ou "não sei")

**P3 - Exemplo recente:**
[Descreva o exemplo com detalhes]

**P4 - Motivo do descarte:**
[ ] Esqueci  [ ] Não soube cozinhar  [ ] Compr demais  [ ] Estragou rápido
[ ] Outro: ___

**P5 - Já descartou por esquecimento:**
[ ] Sim, frequentemente  [ ] Sim, às vezes  [ ] Não

**P6 - Usaria app de scan:**
[ ] Sim, com certeza  [ ] Talvez  [ ] Não

**P7 - Tempo pensando na geladeira:**
[ ] < 5min  [ ] 5-15min  [ ] 15-30min  [ ] > 30min

**P8 - O que impediria:**
[ ] Privacy  [ ] Complexicidade  [ ] Não confio IA  [ ] Não preciso
[ ] Outro: ___

**P9 - Doaria para cooperativa:**
[ ] Sim  [ ] Talvez  [ ] Não

**P10 - Quanto pagaria:**
[ ] R$ 0 (free)  [ ] R$ 10-20  [ ] R$ 20-40  [ ] > R$ 40

**P11 - Aceitável por mês:**
R$ ______

### Observações
[Notas adicionales do entrevistador]

### Evidências
[foto do entrevistado consentingindo] (opcional)
[foto das anotações]

### Validação
[ ] Problema validado
[ ] Solução validada
[ ] Modelo de doação validado
[ ] Preço validado
```

---

## 4.5 TABELA DE SÍNTESE

```markdown
## RESULTADO DAS 10 ENTREVISTAS

### Perfil dos Entrevistados
| # | Idade | Pessoas | Renda | Frequência descarte |
|---|-------|---------|-------|---------------------|
| 1 | XX    | X       | R$ X  | [resposta]         |
| 2 | XX    | X       | R$ X  | [resposta]         |
| ...| ...  | ...     | ...   | ...                 |
| 10| XX    | X       | R$ X  | [resposta]         |

### Validação do Problema
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Descartam alimentos semanalmente | X/10 (XX%) | ✅/❌ |
| Desconhecem data de validade | X/10 (XX%) | ✅/❌ |
| Média desperdiçada/mês | R$ XXX | ✅ |
| Exemplo recente mencionado | X/10 (XX%) | ✅/❌ |

### Validação da Solução
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Usariam app de scan | X/10 (XX%) | ✅/❌ |
| Tempo pensando na geladeira | X min (média) | ✅ |
| барьеры (impedimentos) | [lista] | ✅ |

### Validação do Modelo
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Doariam para cooperativa | X/10 (XX%) | ✅/❌ |
| Disposição para pagar | R$ XX (média) | ✅/❌ |
| Free tier aceito | X/10 (XX%) | ✅/❌ |

### Métricas Validadas vs Projetadas
| Métrica | Projetada | Real (média) | Validação |
|---------|-----------|--------------|-----------|
| Impacto família/mês | R$ 180 | R$ XXX | ✅/❌ |
| Frequência descarte | 2x/semana | X.X | ✅/❌ |
| Disposição para uso | 80% | XX% | ✅/❌ |
| Doariam | 80% | XX% | ✅/❌ |
```

---

## 4.6 CHECKLIST DE QUALIDADE

```
PRE-ENTREVISTA:
[ ] 10 famílias identificadas
[ ] Contato feito (WhatsApp/telefone)
[ ] Horário agendado
[ ] Formulário打印ado/preparado

ENTREVISTA:
[ ] Consentimento registrado
[ ] Todas as 11 perguntas feitas
[ ] Notas completas
[ ] foto (se consentiu)

PÓS-ENTREVISTA:
[ ] Formulário preenchido
[ ] Síntese inserida na planilha
[ ] Validação calculada

RELATÓRIO:
[ ] 10 entrevistas completas
[ ] Tabela de síntese
[ ] Métricas comparadas (projetado vs real)
[ ] Conclusões написаны
[ ] Evidências anexadas
```

---

## 4.7 OUTPUT ESPERADO DO AGENT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUTPUT: PESQUISA_CAMPO_PRONTA                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Arquivos:                                                              │
│  ├── 01_Intel_OSINT/RELATORIO_PESQUISA_10_FAMILIAS.md                    │
│  ├── 01_Intel_OSINT/PESQUISA_FORMULARIOS.md (10 formulários)             │
│  └── (Opcional) Planilha com dados estruturados                            │
│                                                                             │
│  📊 Métricas:                                                              │
│  ├── Entrevistas: 10                                                      │
│  ├── Validação problema: XX%                                               │
│  ├── Validação solução: XX%                                               │
│  └── Validação modelo: XX%                                                │
│                                                                             │
│  ✅ Checklist:                                                             │
│  ├── 10 formulários completos                                            │
│  ├── Tabela de síntese                                                    │
│  ├── Comparativo projetado vs real                                        │
│  ├── Fotos/evidências (se houver)                                          │
│  └── Conclusões fundamentadas                                             │
│                                                                             │
│  ⚠️ CRÍTICO: Sem pesquisa = Nota máxima 2                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📦 DELIVERABLE 5: SPEC — VÍDEO PITCH

> **Squad:** VIDEO_AGENT  
> **Status:** 0% (a fazer)  
> **Deadline:** 16:00 AMANHÃ  
> **Prioridade:** 🟡 MÉDIA (hoje não, mas preparar)

---

## 5.1 REGRAS CRÍTICAS

```
⚠️ REGRA #1: Vídeo > 5:00 EXATOS = NÃO SERÁ AVALIADO
   → Conteúdo excedente é DESCARTADO automaticamente

⚠️ REGRA #2: Cronômetro preciso (não aproximado)
   → Testar múltiplas vezes antes de subir

⚠️ REGRA #3: Testar em 3 dispositivos diferentes
   → Celular Android, iPhone, Desktop
```

---

## 5.2 ESTRUTURA DO VÍDEO (5:00 EXATOS)

```
⏱️ 0:00 - 0:30 │ HOOK (Gancho) — 30 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Prender atenção em 5 segundos

📹 CENA: Fundo escuro + texto branco aparece
📝 TEXTO NA TELA: "Você sabia que..."

📢 NARRAÇÃO (olhando para câmera):
"Você sabia que o Brasil descarta 1.500 toneladas 
de comida por dia? O equivalente a 375 caminhões 
de lixo. Por dia."

🎵 MÚSICA: Sem música (silêncio impacta mais)

⏱️ 0:30 - 1:30 │ PROBLEMA — 60 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Mostrar a dor (emocional + racional)

📹 CENA 1: Gráfico animado (desperdício Brasil)
📹 CENA 2: Fotos de alimentos na lixeira
📹 CENA 3: Família jogando comida fora

📝 TEXTO NA TELA:
"R$ 61,3 bilhões/ano"
"30% do purchased doméstico"
"R$ 180-350 por família/mês"

📢 NARRAÇÃO:
"De cada R$ 10 gastos em comida, R$ 3 vão para o lixo.
Famílias brasileiras desperdiçam R$ 180 a R$ 350 por mês.
O planeta? Paga com 10kg de CO₂ por família, por mês.
Os ODS 11, 12 e 13 nos chamam para ação."

⏱️ 1:30 - 2:30 │ SOLUÇÃO — 60 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Mostrar o produto (não descrever)

📹 CENA: Screen recording do app (ou demo ao vivo)
📹 CENA: Navegando pelas telas do SPA

📝 TEXTO NA TELA: "Waste Guardian" + TAGLINE

📢 NARRAÇÃO (narrando enquanto mostra):
"Apresentamos o Waste Guardian. Seu copiloto de sustentabilidade.
Escaneie o produto... a IA identifica, verifica a validade,
calcula o valor. Receitas personalizadas com ingredientes
próximos ao vencimento. Gamificação: ranking, medalhas,
economia real. Conexão com cooperativas para doar alimentos."

⏱️ 2:30 - 3:30 │ MODELO FINANCEIRO — 60 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Mostrar maturidade empresarial

📹 CENA: Canvas B2B2C em tela cheia (ou slide)

📝 TEXTO NA TELA:
"B2B2C: Empresas pagan, famílias usam de graça"
"Projeção: R$ 8.500-18.500/mês"
"Custo: R$ 700-1.500/mês | Margem: 85%"

📢 NARRAÇÃO:
"O app é gratuito para famílias. Empresas pagam a conta.
Supermercados, indústria alimentícia, fabricantes de 
eletrodomésticos... eles pagam para exibir sua marca como 
patrocinador sustentável. Dados anonimizados de consumo: 
valor para pesquisa e marketing. Custo operacional? 
R$ 700 a R$ 1.500 por mês. Margem de 85%. Sustentável."

⏱️ 3:30 - 4:30 │ IMPACTO — 60 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Quantificar (não qualificar)

📹 CENA: Infográfico de impacto (animado)

📝 TEXTO NA TELA (números grandes):
"120kg/mês"
"0.8 ton CO₂"
"R$ 90/família"
"80kg doados"

📢 NARRAÇÃO:
"Com 50 famílias usando por 6 meses...
120kg de comida salva por mês.
0.8 ton de CO₂ não emitido.
R$ 90 economizados por família por mês.
80kg doados para cooperativas.
Isso é R$ 4.500 por mês em impacto social."

⏱️ 4:30 - 5:00 │ FECHAMENTO — 30 segundos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO: Encerrar com força

📹 CENA: Fundo verde + logo

📝 TEXTO NA TELA:
"Waste Guardian"
"Cada grama conta. Cada família impacta. 
Cada planeta preservado."

📢 NARRAÇÃO:
"Juntos, podemos transformar o Brasil.
Cada família é um agente de mudança.
Cada refeição economizada é um voto pelo planeta."

📝 CRÉDITOS (pausa rápida):
"Equipe: [NOME1], [NOME2], [NOME3]"
"Orientadora: [NOME DA PROFESSORA]"
"Escola: [NOME DA ESCOLA]"
"Desafio Liga Jovem 4ª Edição — Sebra"
```

---

## 5.3 CHECKLIST DE GRAVAÇÃO

```
PRE-GRAVAÇÃO:
[ ] Roteiro memorizado (não teleprompter)
[ ] Cronômetro testado
[ ] Cenário preparado (fundo neutro, boa iluminação)
[ ] Equipamento testado (câmera, microfone)
[ ] Link do app aberto (para screen recording)

GRAVAÇÃO:
[ ] Duração EXATA: 5:00 (cronometrar rigorosamente)
[ ] Áudio sem ruído (microfone próximo, sem vento)
[ ] Rosto visível (pelo menos 30 segundos)
[ ] Protótipo demonstrado (screen recording)
[ ] Modelo de negócio explicado (45 segundos)
[ ] Números quantificados (kg, R$, %)
[ ] Sem gagueira ("ehhh", "ah", "né", "então")
[ ] Energia positiva (não monótono)

PÓS-GRAVAÇÃO:
[ ] Review do take (pausas? Cortés? Áudio ok?)
[ ] Segundo take (se necessário)
[ ] Exportar MP4 (1080p, H.264)
[ ] Testar em 3 dispositivos (celular, tablet, desktop)
[ ] Upload YouTube (não listado)
```

---

## 5.4 EQUIPAMENTO MÍNIMO

```
CÂMERA (smartphone é suficiente):
├── iPhone ou Android moderno
├── Resolução: 1080p (mínimo)
├── Iluminação: Natural (janela) ou ring light
└── Estabilização: Tripé ou apoyo

ÁUDIO:
├── Microfone do celular (ok para início)
├── Fones com microfone (melhor)
└── Silêncio no ambiente

CAPTURA DE TELA:
├── Mac: QuickTime Player
├── Windows: OBS Studio (grátis)
├── Linux: OBS Studio
└── Celular: Gravação de tela nativa

EDIÇÃO:
├── CapCut (grátis, mobile)
├── DaVinci Resolve (gratuito, desktop)
├── iMovie (Mac)
└── Windows Video Editor
```

---

## 5.5 OUTPUT ESPERADO DO AGENT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUTPUT: VIDEO_PITCH_PRONTO                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📁 Arquivos:                                                              │
│  ├── 02_Estrategia_Vencedora/pitch/VIDEO_PITCH_5MIN.mp4                  │
│  └── 02_Estrategia_Vencedora/pitch/ROTEIRO_FINAL.md                       │
│                                                                             │
│  🔗 Links:                                                                │
│  └── YouTube (não listado): https://youtu.be/XXXXXXX                      │
│                                                                             │
│  ✅ Checklist:                                                             │
│  ├── Duração: 5:00 exatos                                                │
│  ├── Áudio: Sem ruído                                                     │
│  ├── Rosto: Visível                                                       │
│  ├── Demo: App funcional                                                 │
│  ├── Modelo: B2B2C explicado                                              │
│  ├── Métricas: kg, R$, CO₂                                               │
│  └── Testado em 3 dispositivos                                            │
│                                                                             │
│  ⚠️ CRÍTICO: > 5:00 = NÃO SERÁ AVALIADO                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 📊 MATRIX DE DELEGAÇÃO (PARA SUB-AGENTS)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎯 ASSIGNMENTS — DLJ4 ENTREGA 01                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  AGENT 1: FRONTEND_AGENT                                                  │
│  ├── Deliverable: SPA + Deploy Netlify                                    │
│  ├── Deadline: 17:00                                                      │
│  ├── Status: 80%                                                          │
│  └── Spec: Section 1 deste documento                                       │
│                                                                             │
│  AGENT 2: CONTENT_AGENT                                                   │
│  ├── Deliverable: Texto Descritivo (800-1500w)                            │
│  ├── Deadline: 22:00                                                      │
│  ├── Status: 0%                                                            │
│  └── Spec: Section 2 deste documento                                       │
│                                                                             │
│  AGENT 3: FINANCE_AGENT                                                    │
│  ├── Deliverable: Modelo Financeiro B2B2C                                │
│  ├── Deadline: 19:00                                                      │
│  ├── Status: 0%                                                            │
│  └── Spec: Section 3 deste documento                                      │
│                                                                             │
│  AGENT 4: RESEARCH_AGENT                                                    │
│  ├── Deliverable: Pesquisa 10 entrevistas                                │
│  ├── Deadline: 21:00                                                      │
│  ├── Status: 0%                                                            │
│  └── Spec: Section 4 deste documento                                       │
│                                                                             │
│  AGENT 5: VIDEO_AGENT                                                      │
│  ├── Deliverable: Vídeo 5:00 (amanhã)                                     │
│  ├── Deadline: 16:00 (amanhã)                                             │
│  ├── Status: 0%                                                            │
│  └── Spec: Section 5 deste documento                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

> **Mantra:** *"Specs-first → PRD → Execução → Delegação → Resultados"*  
> **Última atualização:** 2026-06-03 14:00