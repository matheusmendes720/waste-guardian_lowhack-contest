# 💰 SPEC — MODELO FINANCEIRO B2B2C

> **Entregável:** Sustentabilidade Financeira (20% da nota)  
> **Status:** ⏳ 0% (a fazer)  
> **Deadline:** 03/06/2026 19:00  
> **Responsável:** FINANCE_AGENT  
> **Versão:** 1.0

---

## 🎯 OBJETIVO

Documento detalhado do modelo financeiro B2B2C. Deve demonstrar sustentabilidade real, não caridade. Jurados penalizam "100% gratuito sem fins lucrativos".

---

## 📏 FORMATO

```
ARQUIVO: 04_BI_Ofensivo/MODELO_FINANCEIRO_B2B2C.md
FORMATO: Markdown + Tabelas
IDIOMA: Português Brasil
POV: Apresentação profissional para jurados
```

---

## 📋 ESTRUTURA (6 BLOCOS)

### BLOCO 1: PRODUTO

```markdown
## 1. Produto

**Nome:** Waste Guardian  
**Tipo:** Aplicativo mobile SaaS (Software as a Service)  
**Segmento:** Gestão de desperdício alimentar doméstico  
**Fase:** Protótipo (DLJ4 Fase 1)

**Descrição:**
Gerenciamento inteligente de alimentos domésticos via IA, gamificação 
de impacto ambiental e conexão com cooperativas para doação.

**Diferencial:**
- App gratuito para usuário final
- Empresas pagam por posicionamento ESG
- Dados anonimizados como valor adicional
```

---

### BLOCO 2: PREÇO

```markdown
## 2. Estrutura de Preços

### Modelo Freemium

**FREE TIER (100% dos usuários):**
| Feature | Acesso |
|---------|--------|
| Scanner de alimentos (IA mock) | ✅ Grátis |
| Receitas personalizadas | ✅ Grátis |
| Gamificação básica (ranking, medalhas) | ✅ Grátis |
| Dashboard de impacto | ✅ Grátis |
| Mapa de cooperativas | ✅ Grátis |

**PREMIUM TIER (10% conversão):**
| Feature | Acesso |
|---------|--------|
| Preço | R$ 40/mês |
| Dashboard avançado | ✅ |
| IA completa (sugestões proativas) | ✅ |
| Notificações inteligentes | ✅ |
| Histórico ilimitado | ✅ |

**Justificativa:**
- Benchmark: Netflix R$ 55, Spotify R$ 22, Notion R$ 80
- ROI: Economia de R$ 90/mês em alimentos = 2.25x por mês
- "Paga pra si mesmo"

### Modelo B2B

| Tier | Preço/mês | Benefícios | Target |
|------|-----------|------------|--------|
| Bronze | R$ 2.000 | Logo pequeno (footer) + Badge "Patrocinador ESG" | Pequenos mercados |
| Prata | R$ 5.000 | Logo médio (header) + Banner em receitas | Supermercados |
| Ouro | R$ 15.000 | Logo grande (splash) + API dados + Relatórios ilimitados | Indústria |

**Justificativa:**
- Benchmark: Patrocínio esportivo R$ 50k-500k/ano
- ESG Mandate: Empresas precisam de projetos sustentáveis
- ROI: Marketing tradicional 10x mais caro
```

---

### BLOCO 3: QUEM PAGA

```markdown
## 3. Segmentos de Clientes (B2B)

### B2B — Empresas (Pagadores Primários)

**SEGMENTO A: SUPERMERCADOS**
| Item | Valor |
|------|-------|
| Exemplos | Pão de Açúcar, Extra, Carrefour, Dia |
| Motivação | Marketing ESG + dados de compra |
| Ticket | R$ 5.000-15.000/mês |
| Volume Ano 1 | 3-5 clientes |

**SEGMENTO B: INDÚSTRIA ALIMENTÍCIA**
| Item | Valor |
|------|-------|
| Exemplos | Nestlé, Danone, JBS, Pepsico |
| Motivação | Dados de descarte + brand safety |
| Ticket | R$ 10.000-15.000/mês |
| Volume Ano 1 | 2-3 clientes |

**SEGMENTO C: ELETRODOMÉSTICOS**
| Item | Valor |
|------|-------|
| Exemplos | Samsung, LG, Electrolux |
| Motivação | Integração app (geladeiras smart) |
| Ticket | R$ 15.000-20.000/mês |
| Volume Ano 1 | 1-2 clientes |

**SEGMENTO D: REDES DE RESTAURANTE**
| Item | Valor |
|------|-------|
| Exemplos | Outback, Madero, McDonald's |
| Motivação | Sustentabilidade + relatórios ESG |
| Ticket | R$ 3.000-8.000/mês |
| Volume Ano 1 | 2-3 clientes |

### B2C — Usuários (Geração de Valor)

| Item | Valor |
|------|-------|
| Perfil | Famílias de classe média (4 pessoas, renda R$ 3.000-8.000) |
| Uso | Free tier (100%) |
| Geração de valor | Dados anonimizados |
| Conversão | 10% → Premium (R$ 40/mês) |

**Justificativa:**
> "Usuário não paga, empresa paga pelo acesso aos dados."
> "Modelo comprovado: Google, Facebook, Instagram."
> "Não é caridade, é economia de plataforma."
```

---

### BLOCO 4: CUSTOS OPERACIONAIS

```markdown
## 4. Estrutura de Custos

### Custos Fixos (Mensal)

**FIREBASE:**
| Item | Valor |
|------|-------|
| Auth | R$ 0 (free tier até 10k users) |
| Firestore | R$ 0.18/1000 writes, R$ 0.06/1000 reads |
| Storage | R$ 0.026/GB |
| Hospedagem | R$ 0 (Netlify) |
| **Estimativa (500 famílias)** | **R$ 500-1.000/mês** |

*Cálculo: 500 fam × 10 scans × 30 dias = 150k ops/mês*

**OPENAI API:**
| Item | Valor |
|------|-------|
| GPT-4o Mini | R$ 0.165/1M tokens input |
| OCR (food recognition) | R$ 0.003/imagem |
| **Estimativa (500 famílias)** | **R$ 200-500/mês** |

*Cálculo: 500 fam × 10 scans × R$ 0.01 = R$ 150/mês base*

### Custos Variáveis

| Item | Valor | Observação |
|------|-------|------------|
| Desenvolvimento | R$ 0 | Time voluntário (equipe DLJ4) |
| Marketing | R$ 0 | Orgânico (ODS viral) |
| Infraestrutura | R$ 30/mês | Domínio R$ 30/ano |

### Tabela Consolidada

| Categoria | Mês 1-6 | Mês 7-12 | Ano 2 | Ano 3 |
|-----------|---------|----------|-------|-------|
| Firebase | R$ 3.000 | R$ 6.000 | R$ 15.000 | R$ 80.000 |
| OpenAI | R$ 1.500 | R$ 3.000 | R$ 8.000 | R$ 40.000 |
| Desenvolvimento | R$ 0 | R$ 0 | R$ 180.000 | R$ 480.000 |
| Marketing | R$ 0 | R$ 0 | R$ 30.000 | R$ 120.000 |
| **TOTAL** | **R$ 4.500** | **R$ 9.000** | **R$ 233.000** | **R$ 720.000** |
```

---

### BLOCO 5: PROJEÇÃO FINANCEIRA (3 ANOS)

```markdown
## 5. Projeção Financeira (3 Anos)

### Premissas

| Variável | Ano 1 | Ano 2 | Ano 3 |
|----------|-------|-------|-------|
| Famílias | 50 | 500 | 5.000 |
| Clientes B2B | 5 | 20 | 50 |
| B2B ticket médio | R$ 5.000 | R$ 7.500 | R$ 10.000 |
| Conversão Premium | 10% | 15% | 20% |

### Projeção de Receita

| Fonte | Ano 1 | Ano 2 | Ano 3 |
|-------|-------|-------|-------|
| B2B Assinatura | R$ 300.000 | R$ 1.800.000 | R$ 6.000.000 |
| Freemium → Premium | R$ 24.000 | R$ 360.000 | R$ 4.800.000 |
| Dados anonimizados | R$ 18.000 | R$ 180.000 | R$ 1.200.000 |
| **TOTAL** | **R$ 342.000** | **R$ 2.340.000** | **R$ 12.000.000** |

### Projeção de Lucro

| Item | Ano 1 | Ano 2 | Ano 3 |
|------|-------|-------|-------|
| Receita | R$ 342.000 | R$ 2.340.000 | R$ 12.000.000 |
| Custos | R$ 13.500 | R$ 233.000 | R$ 720.000 |
| **LUCRO** | **R$ 328.500** | **R$ 2.107.000** | **R$ 11.280.000** |
| **MARGEM** | **96%** | **90%** | **94%** |

⚠️ **NOTA:** Margem alta porque desenvolvimento é voluntário na Fase 1.  
⚠️ **REALISTA:** Após DLJ4, incluir custo de desenvolvimento (R$ 15-30k/mês).

### Break-even Analysis

| Período | Acumulado |
|---------|-----------|
| Mês 1-6 | -R$ 13.500 (investimento) |
| Mês 7-12 | +R$ 171.000 (lucro acumulado) |
| **Break-even** | **Mês 9** (conservador) |
| **Break-even** | **Mês 4** (otimista) |
```

---

### BLOCO 6: BENCHMARKS E JUSTIFICATIVAS

```markdown
## 6. Benchmarks e Justificativas

### Benchmarks de Mercado

| App | Modelo | Preço Premium | B2B | Resultado |
|-----|--------|---------------|-----|-----------|
| Tinder (Match) | Freemium + B2B | R$ 30-50/mês | Facebook/Google Ads | R$ 2.7B/ano |
| Spotify | Freemium + Premium | R$ 21.90/mês | Brand partnerships | R$ 13B/ano |
| Notion | Freemium + Teams | R$ 80/user/mês | Enterprise sales | R$ 200M ARR |

### Justificativa de Preços

**PREMIUM R$ 40/mês:**
- Comparável: Netflix R$ 55, Spotify R$ 22
- Valor: Economia de R$ 90/mês em alimentos
- ROI: 2.25x por mês
- "Paga pra si mesmo"

**B2B R$ 2.000-15.000/mês:**
- Comparável: Marketing tradicional R$ 50k-500k/ano
- ESG budget: Empresas têm 1-5% budget para ESG
- ROI: Brand awareness + dados + compliance
- "10x mais barato que mídia tradicional"

### Riscos e Mitigações

| Risco | Probabilidade | Mitigação | Impacto |
|-------|---------------|-----------|---------|
| Não consegue clientes B2B | Alta | MVP com 1-2 pilotos gratuitos | Baixo |
| Custo Firebase explodes | Baixa | Arquitetura serverless | R$ 500-2k/mês |
| Concorrência copy | Média | Dados + relationships | Médio |
```

---

## 📋 CANVAS RESUMIDO (9 BLOCOS)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         WASTE GUARDIAN                                   │
│                    BUSINESS MODEL CANVAS                                 │
├─────────────────────┬─────────────────────────┬─────────────────────────┤
│ PARCERIAS           │ ATIVIDADES              │ PROPOSTA DE VALOR       │
│ CHAVE               │ PRINCIPAIS              │                         │
│                     │                         │ "Cada grama economizada,│
│ • Cooperativas      │ • Desenv. IA            │  cada família impactada" │
│ • Supermercados     │ • Gamificação           │                         │
│ • Redes ESG         │ • Match doa-ação        │ • IA para não desperdiçar│
│ • Fabricantes       │ • Dashboard B2B        │ • Gamificação social     │
│                     │                         │ • Conexão social        │
├─────────────────────┼─────────────────────────┼─────────────────────────┤
│ RECURSOS            │ RELACIONAMENTO          │ SEGMENTOS               │
│ PRINCIPAIS          │ COM CLIENTES            │ DE CLIENTES             │
│                     │                         │                         │
│ • App mobile        │ • Gamificação social    │ • Famílias classe média │
│ • Algoritmo IA      │ • Ranking community     │ • Cooperativas (B2B)    │
│ • Dashboard B2B     │ • Notificações push     │ • Supermercados ESG     │
│                     │                         │                         │
├─────────────────────┴─────────────────────────┴─────────────────────────┤
│ ESTRUTURA DE CUSTOS                    │ FONTES DE RECEITA               │
│                                         │                                 │
│ • Firebase: R$ 500-1.000/mês          │ • B2B: R$ 5.000-15.000/mês    │
│ • OpenAI: R$ 200-500/mês              │ • Premium: R$ 2.000/mês        │
│ • Dev: Time voluntário                │ • Dados: R$ 1.500/mês         │
│                                         │                                 │
├────────────────────────────────────────┴─────────────────────────────────┤
│ 💰 PROJEÇÃO: R$ 8.500-18.500/mês | MARGEM: 75-85% | BREAK-EVEN: Mês 4-9  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## ⚠️ CRÍTICO

```
❌ ERRADO: "100% gratuito sem fins lucrativos"
✅ CERTO: "Modelo B2B2C — Empresas pagan, famílias usam de graça"

Os juradores do Sebra penalizam modelos "românticos" sem sustentabilidade real.
```

---

## ✅ CHECKLIST FINAL

```
CONTEÚDO:
[ ] Bloco 1: Produto (identidade + descrição)
[ ] Bloco 2: Preço (Freemium + B2B tiers)
[ ] Bloco 3: Quem paga (B2B + B2C)
[ ] Bloco 4: Custos (Firebase + OpenAI + Dev)
[ ] Bloco 5: Projeção 3 anos (receita + lucro)
[ ] Bloco 6: Benchmarks + justificativas
[ ] Canvas resumido (9 blocos)

MÉTRICAS:
[ ] Receita Ano 1: R$ 342.000
[ ] Margem: 90%+
[ ] Break-even: Mês 4-9
[ ] Custos: R$ 700-1.500/mês

FORMATO:
[ ] Tabelas formatadas
[ ] Números com formatação (R$ X.XXX)
[ ] Sem erros ortográficos
```

---

## 📦 OUTPUT ESPERADO

```
✅ Arquivo:
└── 04_BI_Ofensivo/MODELO_FINANCEIRO_B2B2C.md

✅ Métricas:
├── Receita Ano 1: R$ 342.000
├── Margem: 90%+
├── Break-even: Mês 4-9
└── Status: Completo
```

---

## 🔗 ENTREGÁVEL NO PORTAL

**Tipo:** Arquivo PDF ou parte do Texto Descritivo  
**Formato aceite:** PDF, DOCX, DOC  
**Observação:** Pode ser incluso no Texto Descritivo (Seção 5) ou separado