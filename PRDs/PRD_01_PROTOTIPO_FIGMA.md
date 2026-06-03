# PRD_01 — Protótipo Navegável (Figma)

> **Status:** 🔄 70% completo  
> **Prazo:** 03/06/2026 23:59  
> **Dependência:** Link Figma compartilhável ("View only" ou "Edit")  
> **Entrega:** Link URL no portal DLJ4

---

## 🎯 Objetivo

6 telas mobile-first navegáveis no Figma com UI "enterprise-grade". Jurados DLJ4 precisam conseguir clicar e sentir que é um app real.

---

## 📐 Especificação Técnica

| Item | Valor |
|------|-------|
| **Dimensão** | 375×812px (iPhone 13 Pro, 9:16) |
| **Tipografia** | Inter (Google Fonts) — 400/600/700 |
| **Cores** | Primary: `#22C55E`, Secondary: `#16A34A`, BG: `#F9FAFB`, Text: `#111827` |
| **Ícones** | Heroicons ou Lucide (SVG) |
| **Espaçamento** | Sistema 8px (8, 16, 24, 32, 48) |
| **Border radius** | 8px cards, 16px botões, 24px modais |

---

## 🖥️ TELA 1 — SPLASH SCREEN (Concluída ✅)

**Tempo de transição:** Auto → Home após 2s ou clique no botão

```
┌─────────────────────────────────┐
│         [Logo WG 200×200]       │
│                                 │
│     "Cada grama conta"          │
│     (Inter Bold 24px)          │
│                                 │
│        [Começar]                │
│      (Primary green, 16px)     │
│                                 │
│  BG: Gradiente #22C55E→#16A34A│
└─────────────────────────────────┘
```

**Checklist:**
- [x] Logo PNG transparente 200×200px
- [x] Tagline centralizada
- [x] Botão [Começar] com transição para Home
- [x] Background gradiente verde

---

## 🖥️ TELA 2 — HOME / DASHBOARD (Concluída ✅)

**Mock data:**
```
Nome: Maria Silva
Pontos: 2.340
Posição: #47/312
Streak: 🔥 7 dias
```

```
┌─────────────────────────────────┐
│ ☰  Waste Guardian    [👤 Maria]│
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🌱 Você evitou 2.3kg     │   │
│  │    esta semana           │   │
│  │    [Ver detalhes]        │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌───────────┐ ┌───────────┐   │
│  │ CO₂: 1.8kg│ │Top 15%🏆  │   │
│  │   evitado │ │comunidade │   │
│  └───────────┘ └───────────┘   │
│                                 │
│         [ESCANEAR]             │
│         (FAB 56×56px)          │
│                                 │
├─────────────────────────────────┤
│  🏠  📊  🎁  👤               │
│ Home Impacto Doar Perfil       │
└─────────────────────────────────┘
```

**Checklist:**
- [x] Header com logo + avatar
- [x] Card principal com métricas
- [x] 2 cards secundários (CO₂ + Ranking)
- [x] FAB para scanner
- [x] Bottom nav com 4 itens

---

## 🖥️ TELA 3 — SCANNER / CÂMERA (Em progresso 🔄)

**Estado atual:** Viewfinder pronto, mock AI integrado

```
┌─────────────────────────────────┐
│         [Viewfinder]            │
│    ┌───────────────────┐        │
│    │                   │        │
│    │   [Círculo branco]│        │
│    │    72×72px        │        │
│    │                   │        │
│    └───────────────────┘        │
│         "Escaneando..."        │
│                                 │
├─────────────────────────────────┤
│  RESULTADO MOCK:                │
│  ┌─────────────────────────┐   │
│  │ 🍶 Iogurte Natural       │   │
│  │ Validade: 05/06 (2 dias)│   │
│  │ Valor: R$ 8,90          │   │
│  │ CO₂: 250g               │   │
│  │ ⚠️ PRÓXIMO VENCIMENTO   │   │
│  │                          │   │
│  │[Ver Receitas][Agendar]  │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Mock AI data — variedade de produtos:**
```
1. Iogurte Natural Integral — Vence 05/06, R$ 8,90, 250g CO₂
2. Pão de Forma Integral — Vence 04/06, R$ 5,50, 180g CO₂
3. Banana madura (3 un) — Vence hoje, R$ 4,20, 120g CO₂
4. Leite Longa Vida — Vence 08/06, R$ 6,30, 200g CO₂
5. Queijo Minas — Vence 06/06, R$ 12,80, 400g CO₂
```

**Checklist:**
- [ ] Viewfinder com cantos arredondados (overlay câmera)
- [ ] Botão captura central (círculo branco 72×72px)
- [ ] Animação "Escaneando..." durante loading
- [ ] Resultado com card de produto
- [ ] 3 CTAs funcionais (Ver Receitas, Agendar Doação, Descartar)
- [ ] Mock data variado (5+ produtos)

---

## 🖥️ TELA 4 — RECEITAS INTELIGENTES (Em progresso 🔄)

```
┌─────────────────────────────────┐
│  ← Receitas para hoje          │
├─────────────────────────────────┤
│                                 │
│  Baseado em: Iogurte (2 dias)  │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🎯 Torta de Iogurte     │   │
│  │    30min • Fácil • R$12  │   │
│  │    Economia: R$ 12,00   │   │
│  │    CO₂: 400g evitado    │   │
│  │    [Ver] [Modo] [Vídeo] │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🥤 Smoothie de Frutas   │   │
│  │    5min • Fácil • R$ 8   │   │
│  │    Economia: R$ 8,00     │   │
│  │    [Ver] [Modo]         │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🍰 Bolo de Iogurte      │   │
│  │    45min • Médio • R$15 │   │
│  │    Economia: R$ 15,00    │   │
│  │    [Ver] [Modo]         │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Biblioteca de receitas por ingrediente:**
```
Iogurte:
  - Torta de Iogurte (30min, fácil, R$12)
  - Smoothie de Frutas (5min, fácil, R$8)
  - Bolo de Iogurte (45min, médio, R$15)
  - Panqueca (20min, fácil, R$10)

Pão:
  - Torrada com Ovo (10min, fácil, R$6)
  - Bruschetta (15min, fácil, R$12)
  - Pão Doce (10min, fácil, R$5)
  - Romena (5min, fácil, R$4)

Banana:
  - Smoothie (5min, fácil, R$6)
  - Banana崩ada c/ Aveia (10min, fácil, R$5)
  - Bolo de Banana (40min, médio, R$10)
  - Pura com pasta de amendoim (2min, fácil, R$7)
```

**Checklist:**
- [ ] Título "Receitas para hoje" com ingrediente base
- [ ] Cards com: foto placeholder, nome, tempo, dificuldade, custo, economia, CO₂
- [ ] 3 botões: Ver Ingredientes, Modo de Preparo, Vídeo
- [ ] 5+ receitas variadas
- [ ] Mock data realista

---

## 🖥️ TELA 5 — IMPACTO PESSOAL (Em progresso 🔄)

```
┌─────────────────────────────────┐
│         Seu Impacto            │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐   │
│  │  Evolução Semanal        │   │
│  │  ▓▓▓▓▓▓░░  S4           │   │
│  │  ▓▓▓▓░░░░  S3           │   │
│  │  ▓▓▓░░░░░  S2           │   │
│  │  ▓▓░░░░░░  S1           │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  🏆 TOP 15% da comunidade│   │
│  │  ▓▓▓▓▓▓▓▓▓░░  progresso  │   │
│  └─────────────────────────┘   │
│                                 │
│  🏆 Iniciante Verde            │
│  💰 Economizador               │
│  🌍 Herói                      │
│                                 │
│  Stats: 24.5kg salvos |        │
│         18.2kg CO₂ evitados    │
│         R$ 180 economizados    │
│                                 │
│  Ranking:                      │
│  #47 Maria Silva (2.340 pts)   │
│  #48 João (2.310 pts)          │
│  #49 Ana (2.290 pts)          │
└─────────────────────────────────┘
```

**Gamificação — sistema de pontos:**
```
AÇÕES:
- Scan produto: +10 pontos
- Receita completada: +30 pontos
- Doação agendada: +50 pontos
- Dashboard visualizado: +5 pontos

NÍVEIS:
- Bronze: 0-500 pts (Iniciante Verde)
- Prata: 501-1500 pts (Economizador)
- Ouro: 1501-3000 pts (Herói Climático)
- Diamante: 3000+ pts (Guardião do Planeta)

STREAKS:
- 3 dias consecutivos: +20 pts bonus
- 7 dias consecutivos: +50 pts bonus
- 30 dias consecutivos: +200 pts bonus
```

**Checklist:**
- [ ] Gráfico de barras (S1-S4 evolução semanal)
- [ ] Progress bar "TOP 15%"
- [ ] 3 medalhas com ícones
- [ ] Stats cards (kg, CO₂, R$)
- [ ] Lista ranking top 10 com avatares
- [ ] Sistema de pontos implementado

---

## 🖥️ TELA 6 — DOAÇÃO / MAPA (Em progresso 🔄)

```
┌─────────────────────────────────┐
│  ← Doar Alimentos              │
├─────────────────────────────────┤
│                                 │
│  [Mapa OpenStreetMap]          │
│  📍 📍 📍 (3 pins)             │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📍 Banco de Alimentos  │   │
│  │    Municipal            │   │
│  │    2.3km • Aberto agora │   │
│  │    Seg-Sex 08:00-18:00  │   │
│  │    Aceita: Frutas,       │   │
│  │    laticínios, pães      │   │
│  │    [Agendar Retirada]    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📍 Coletivo Sesc        │   │
│  │    Mesa Brasil          │   │
│  │    4.1km • Fechado hoje │   │
│  │    [Ver Necessidades]   │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📍 Associação de        │   │
│  │    Catadores            │   │
│  │    1.8km • Aberto agora │   │
│  │    [Agendar Retirada]   │   │
│  └─────────────────────────┘   │
│                                 │
│  Badge: "Sua doação gerou      │
│         R$ 50 de impacto"      │
└─────────────────────────────────┘
```

**Mock data cooperativas (São Paulo — zona sul):**
```
1. Banco de Alimentos Municipal
   Endereço: R. das Palmeiras, 123 — Pinheiros
   Distância: 2.3km
   Horário: Seg-Sex 08:00-18:00
   Aceita: Frutas, legumes, laticínios, pães, industrializados
   Contato: (11) 3333-4444
   Status: ABERTO AGORA ✅

2. Coletivo Sesc Mesa Brasil
   Endereço: Av. Paulista, 1000 — Bela Vista
   Distância: 4.1km
   Horário: Seg-Sáb 09:00-17:00
   Aceita: Perecíveis (frutas, verduras, meats)
   Contato: (11) 2222-3333
   Status: FECHADO ❌ (abre amanhã 09:00)

3. Associação de Catadores Recycla
   Endereço: R. Augusta, 500 — Consolação
   Distância: 1.8km
   Horário: Ter-Sáb 07:00-15:00
   Aceita: Embalagens, vidros, papéis (NÃO alimentos)
   Contato: (11) 4444-5555
   Status: ABERTO AGORA ✅
```

**Checklist:**
- [ ] Mapa com 3 pins (OpenStreetMap embed ou mock visual)
- [ ] 3 cards cooperativa (nome, endereço, distância, horário, status)
- [ ] Badge de impacto monetário
- [ ] CTAs: Agendar Retirada, Ver Necessidades
- [ ] Status "Aberto/Fechado agora" atualizado
- [ ] Contato telefônico visível

---

## 🔗 COMO GERAR LINK COMPARTILHÁVEL FIGMA

1. No Figma, clique no ícone de compartilhamento (topo direito)
2. Selecione "Anyone with the link can view"
3. Copie o link
4. Cole no campo de entrega do portal DLJ4

```
Formato esperado: https://www.figma.com/proto/XXXXXXXXXXXXX
```

---

## ✅ CHECKLIST CONSOLIDADO DE QUALIDADE

```
ANTES DE ENVIAR:
[ ] 6 telas completas (todas com conteúdo, não vazias)
[ ] Navegação funcionando (clique → próxima tela)
[ ] Dados mockados realistas (nomes, valores, datas)
[ ] UI/UX enterprise-grade (não protótipo escolar)
[ ] Tagline e branding consistentes ("Cada grama conta")
[ ] Link compartilhável ativado (View only)
[ ] Formato mobile-first (375×812px)
[ ] Cores primárias aplicadas (#22C55E)
[ ] Bottom nav com 4 itens
[ ] Sistema de gamificação visível (pontos, ranking)
```

---

## 📁 Output Final

```
📁 03_Arquitetura_Projeto/spa-workspace/
├── index.html      ✅
├── styles.css      ✅
├── app.js          ✅
└── netlify.toml    ✅

🔗 Link Figma: https://www.figma.com/proto/XXXXXXXXXXXXX
```

**OBS:** O spa-workspace em `03_Arquitetura_Projeto/` é o preview HTML do protótipo. O Figma é a entrega oficial DLJ4. Ambos devem estar prontos.

---

*Última atualização: 2026-06-03*