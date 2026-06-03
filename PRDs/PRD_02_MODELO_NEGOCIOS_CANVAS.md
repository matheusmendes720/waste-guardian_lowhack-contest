# PRD_02 — Modelo de Negócios / Canvas B2B2C

> **Status:** 🔄 60% (rascunho pronto, precisa exportar como imagem)  
> **Prazo:** 03/06/2026 23:59  
> **Entrega:** PNG 1200×800px ou PDF (1 página)

---

## 🎯 Objetivo

Business Model Canvas completo (9 blocos, padrão Osterwalder) em 1 página visual. Entregue como imagem PNG ou PDF. Jurados precisam ver todos os blocos preenchidos em um glance.

---

## 📊 Canvas Completo — WASTE GUARDIAN

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         WASTE GUARDIAN                                  │
│                    BUSINESS MODEL CANVAS                                │
│                    Versão 1.0 | Junho 2026                               │
├─────────────────────┬─────────────────────────┬─────────────────────────┤
│ PARCERIAS           │ ATIVIDADES              │ PROPOSTA DE VALOR       │
│ CHAVE               │ PRINCIPAIS              │                         │
│                     │                         │ "Cada grama economizada,│
│ • Cooperativas      │ • Desenvolvimento IA   │  cada família impactada,│
│   (Banco Alimentos, │ • Engine OCR + OpenAI  │  cada planeta           │
│   Sesc Mesa Brasil) │ • Gamificação           │  preservado"             │
│ • Supermercados     │   (ranking, badges)      │                         │
│   (Pão de Açúcar,   │ • Match doa-ação        │ • IA para não           │
│   Carrefour, Extra)  │   (logística social)     │   desperdiçar           │
│ • Redes ESG         │ • Dashboard B2B        │ • Gamificação de         │
│   (Nestlé, Danone,  │   (métricas impacto)     │   impacto               │
│   JBS)              │                         │ • Conexão social        │
│ • Fabricantes       │                         │   (doação)              │
│   eletrodomésticos  │                         │ • Métricas ODS          │
│   (Samsung, LG)     │                         │   mensuráveis           │
├─────────────────────┼─────────────────────────┼─────────────────────────┤
│ RECURSOS            │ RELACIONAMENTO          │ SEGMENTOS DE            │
│ PRINCIPAIS          │ COM CLIENTES            │ CLIENTES                │
│                     │                         │                         │
│ • App mobile        │ • Gamificação social    │ • Famílias classe média │
│   (Flutter/React    │   (leaderboards)        │   (4 pessoas,          │
│   Native)           │ • Ranking community     │   R$ 600/food/month)    │
│ • Algoritmo IA      │   (top 10 weekly)       │ • Escolas técnicas      │
│   (OpenAI API)      │ • Notificações push     │   (público-alvo DLJ4)   │
│ • Dashboard B2B     │   (alertas validade)    │ • Cooperativas locais   │
│   (Analytics)       │ • Feedback loops        │   (B2B partner)         │
│ • Markting viral    │   (streaks, achievements)│ • Supermercados ESG    │
│   (ODS + Gamificação│ • Suporte chatbot       │   (B2B customer)        │
│                     │   (FAQ automático)      │                         │
├─────────────────────┴─────────────────────────┴─────────────────────────┤
│ ESTRUTURA DE CUSTOS                    │ FONTES DE RECEITA               │
│                                         │                                 │
│ • Firebase (R$ 500-1.000/mês)          │ • Assinatura B2B: R$ 5-15k/mês │
│   (Auth + Firestore + Storage)         │   (Supermercados, Indústria)   │
│ • OpenAI API (R$ 200-500/mês)          │ • Patrocínio ESG: R$ 2-5k/mês │
│   (OCR + Recipe generation)            │   (Samsung, LG smart fridge)  │
│ • Desenvolvimento (time voluntário)    │ • Freemium → Premium (10%)  │
│   (equipe DLJ4 + mentores)             │   R$ 2.000/mês (100 premium) │
│ • Marketing (orgânico/viral)           │ • Dados anonimizados (B2B)  │
│   (ODS + impacto ambiental)           │   R$ 1.500/mês               │
│                                         │                                 │
├────────────────────────────────────────┴─────────────────────────────────┤
│ 💰 PROJEÇÃO MENSAL (Ano 1): R$ 8.500 - 18.500                             │
│ 📊 MARGEM OPERACIONAL: 75-85%                                             │
│ 🎯 BREAK-EVEN: Mês 3 (após 50 famílias piloto)                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📐 Como Exportar do Figma

1. **Criar frame:** 1200×800px no Figma
2. **Grid:** 3 colunas × 5 linhas (usar plugin "Layout Grid" ou manual)
3. **Fundo:** Branco (#FFFFFF)
4. **Bordas:** 1px #E5E7EB em cada bloco
5. **Fontes:** Inter Bold (títulos bloco), Inter Regular (conteúdo)
6. **Tamanho mínimo de fonte:** 10px (mínimo legível)
7. **Exportar:** PNG compression 80% ou PDF vetorial

```
DICA: NÃO use cores pesadas de fundo. Blocos com borda fina + texto = mais legível na projeção.
```

---

## 💰 RECEITAS — Detalhamento

### B2B (Empresas)

| Tier | Preço/mês | Benefícios | Target |
|------|-----------|------------|--------|
| Bronze | R$ 2.000 | Logo pequeno + badge "Parceiro Sustentável" | Pequenas lojas |
| Prata | R$ 5.000 | Logo médio + banner no app + dados mensais | Supermercados |
| Ouro | R$ 15.000 | Logo grande + API de dados + relatório trimestral | Grandes redes |

**Targets B2B:**
```
• Supermercados: Pão de Açúcar, Extra, Carrefour, Mercadona
• Indústria: Nestlé, Danone, JBS, BRF
• Eletrodomésticos: Samsung, LG (geladeiras inteligentes)
• Redes de restaurante: Outback, Madero, Applebee's
```

### B2C (Famílias — Free tier)

```
GRÁTIS:
• Scanner básico (5 escaneamentos/dia)
• 3 receitas por semana
• Ranking community
• Mapa cooperativas

PREMIUM (R$ 40/mês):
• Scanner ilimitado
• Receitas ilimitadas
• Dashboard completo
• IA completa (análise avançada)
• Alertas personalizados
• Prioridade em donate

Penetração estimada: 10% free → premium
Ano 1: 500 famílias = 50 premium = R$ 2.000/mês
```

### Dados Anonimizados (B2B data)

```
Produto: Insights de consumo alimentar
Formato: Relatório mensal (agregado, anônimo)
Compradores: Indusria alimentícia, market research
Preço: R$ 1.500/mês
Volume: 3-5 contratos
```

---

## 📊 PROJEÇÃO FINANCEIRA — 3 ANOS

### Cenário Conservador (50 famílias Ano 1)

| Mês | Famílias | B2B (R$) | Premium (R$) | Dados (R$) | TOTAL |
|-----|----------|-----------|---------------|-------------|-------|
| 1-6 | 50 | 5.000 | 2.000 | 1.500 | 8.500 |
| 7-12 | 100 | 10.000 | 4.000 | 1.500 | 15.500 |
| Ano 2 | 500 | 25.000 | 20.000 | 3.000 | 48.000/mês |
| Ano 3 | 2.000 | 80.000 | 80.000 | 8.000 | 168.000/mês |

### Cenário Otimista (100 famílias Ano 1)

| Mês | Famílias | B2B (R$) | Premium (R$) | Dados (R$) | TOTAL |
|-----|----------|-----------|---------------|-------------|-------|
| 1-6 | 100 | 10.000 | 4.000 | 1.500 | 15.500 |
| 7-12 | 200 | 20.000 | 8.000 | 2.000 | 30.000 |
| Ano 2 | 1.000 | 50.000 | 40.000 | 5.000 | 95.000/mês |
| Ano 3 | 5.000 | 150.000 | 200.000 | 12.000 | 362.000/mês |

---

## ⚠️ ERRO CRÍTICO A EVITAR

> **NUNCA dizer "100% gratuito sem fins lucrativos"**

Isso é imediatamente penalizado pelos jurados do DLJ4 porque:
- Parece projeto de escola (não negócio real)
- Não há sustentabilidade financeira
- Desqualifica o modelo canvas

**Correto:** "Modelo B2B2C — gratuito para famílias, pago por empresas que buscam posicionamento ESG."

---

## ✅ CHECKLIST DE QUALIDADE

```
ANTES DE ENVIAR:
[ ] 9 blocos preenchidos (nenhum vazio)
[ ] Valores monetários realistas (R$ 8.500-18.500/mês)
[ ] Projeção de 3 anos preenchida
[ ] Margem operacional clara (75-85%)
[ ] Break-even identificado (Mês 3)
[ ] Benchmark: Spotify, Tinder, Notion mencionado
[ ] NÃO diz "100% gratuito sem fins lucrativos"
[ ] Exportado como PNG ou PDF (1 página)
```

---

## 📁 Output

```
📁 04_BI_Ofensivo/MODELO_FINANCEIRO_B2B2C.png
📁 04_BI_Ofensivo/CANVAS_WASTE_GUARDIAN.png
```

---

*Última atualização: 2026-06-03*