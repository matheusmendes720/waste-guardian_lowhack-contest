# Research Questions — Batch 07: Competitors

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Documento auxiliar** — respostas detalhadas em `analysis/interpretation.md`

---

## Resumo Executivo das 6 Perguntas

| # | Pergunta | Resposta curta | Fonte primária |
|---|----------|----------------|----------------|
| Q7.1 | Quem são os principais apps globais? | TGTG (120M), OLIO (9M), Flashfood (500K), Phenix (1M+), Yindii (100K) | toogoodtogo.com + wikipedia |
| Q7.2 | Quais apps brasileiros existem? | Food To Save (1M+), Comida Invisível (B2B), Refood (50K), Desperdiça Não (10+); EatWell NÃO CONFIRMADO | playstore + linkedin |
| Q7.3 | Qual o modelo de receita? | Marketplace fee (maioria), B2B SaaS (Karma, CI), Freemium (OLIO, Nosh) | sites oficiais |
| Q7.4 | Quais funcionalidades? | Ver feature_matrix.json — 20 features analisadas | dados primários |
| Q7.5 | Onde Waste Guardian se diferencia? | ÚNICO com household + AI + gamificação + BR market | matriz SWOT |
| Q7.6 | Apps B2B no Brasil? | Comida Invisível (único pure-B2B com rastreabilidade ESG), Food To Save (B2B2C) | linkedin + playstore |

---

## Q7.1 — Quem são os principais apps globais anti-desperdício?

### Ranking por usuários (Tier 1)

| Rank | App | Usuários | País | Modelo |
|------|-----|----------|------|--------|
| 1 | **Too Good To Go** | 120M | Dinamarca/Global | Marketplace fee |
| 2 | **OLIO** | 9M | UK/Global | Freemium |
| 3 | **Food To Save** | 6.5M | Brasil | Marketplace fee |
| 4 | **Flashfood** | 500K+ famílias | Canadá/EUA | Marketplace + B2B |
| 5 | **Phenix** | 1M+ downloads | FR/BE/ES/PT | Marketplace + B2B |
| 6 | **Yindii** | 100K+ | Tailândia/SG | Marketplace + gamificação |
| 7 | **ResQ Club** | 1M+ downloads | Finlândia | Marketplace |
| 8 | **Nosh Technologies** | 13K | UK | Freemium + 10% service |
| 9 | **Refood BR** | 50K+ | Brasil/PT | Marketplace |
| 10 | **Desperdiça Não** | 10+ | Brasil (BH) | Marketplace |

### Insights chave
- **TGTG domina globalmente** com 120M usuários (10x o segundo colocado)
- **OLIO é único** com modelo de compartilhamento gratuito
- **Mercado B2B2C é mais validado** que B2C household
- **Brasil tem 1 player com tração (Food To Save)** + 3 pequenos

---

## Q7.2 — Quais apps brasileiros existem?

### Apps confirmados (anti-desperdício alimentar)

| App | Site / Play Store | Categoria | Validação |
|-----|------------------|-----------|-----------|
| **Food To Save** | foodtosave.com.br / Play Store (1M+) | Marketplace B2B2C | ✅ Validado (site oficial + Forbes + Exame) |
| **Comida Invisível** | comidainvisivel.com.br | B2B SaaS | ✅ Validado (LinkedIn 2.9K followers + BNDES + COP30) |
| **Refood** | stores.refood.app.br | Marketplace B2B2C | ✅ Validado (Play Store 50K+) |
| **Desperdiça Não** | desperdicanao.com.br | Marketplace B2B2C | ✅ Validado (Play Store 10+) |
| **EatWell** | eatwell.com.br | **NÃO CONFIRMADO** | ❌ Site offline; pode ser confusão com "EatWell" Leal Apps (rotulagem) |

### Subcategorias brasileiras
- **B2B2C marketplace (TGTG-like):** 3 (Food To Save, Refood, Desperdiça Não)
- **B2B SaaS (rastreabilidade):** 1 (Comida Invisível)
- **B2C household focus:** **ZERO**

### Gap crítico identificado
**Nenhum app brasileiro foca em desperdício DOMÉSTICO com tecnologia.**

---

## Q7.3 — Qual o modelo de receita de cada um?

### Tipologia de modelos

| Modelo | Apps | % do mercado |
|--------|------|--------------|
| **Marketplace fee (B2B2C)** | TGTG, Food To Save, Refood, Desperdiça Não, Phenix, Flashfood, Yindii, ResQ | 70% dos apps |
| **B2B SaaS (POS, AI, rastreabilidade)** | Karma, Comida Invisível | 15% |
| **Freemium (consumer app)** | OLIO, Nosh Technologies | 15% |

### Especificidades

- **TGTG:** ~R$3,50 por Surprise Bag (1/3 do preço original)
- **Food To Save:** marketplace fee; aceita Pix+cartão+vale-refeição
- **Karma:** SaaS por módulo (POS R$ + Loyalty + Surplus)
- **Comida Invisível:** fee corporativo por gestão de excedentes + dashboards ESG
- **Nosh:** 10% service charge no B2B (3% para caridade)
- **Flashfood:** grocer paga fee + consumer paga 50% off

### Recomendação para Waste Guardian

**Modelo sugerido (3 tiers):**
1. **Freemium (MVP):** OCR + pantry + receitas básicas (grátis)
2. **Premium R$ 9,90/mês:** AI recipes avançadas + gamificação
3. **B2B dashboard R$ 500/mês:** para supermercados que rastreiam doações

---

## Q7.4 — Quais funcionalidades cada um tem?

### Feature Matrix (resumo — 20 features analisadas)

**Features universalmente presentes:**
- ✅ Geolocalização
- ✅ Push notifications
- ✅ Pagamento in-app
- ✅ Sistema de ratings

**Features raras (1-2 apps):**
- 🟡 **AI/OCR:** Nosh (único)
- 🟡 **Gamificação robusta:** Yindii (único)
- 🟡 **Rastreabilidade ESG:** Comida Invisível (único)
- 🟡 **Modo offline:** OLIO, Flashfood (parcial)
- 🟡 **IoT:** Karma (POS integration)
- 🟡 **Pix + vale-refeição BR:** Food To Save (único)
- 🟡 **FLORES (não só comida):** ResQ Club (único)
- 🟡 **Multi-categoria (food + não-food):** OLIO (único)

### Features INEXISTENTES (gap = oportunidade para WG)

1. **Combinação household + AI + gamificação** → ZERO apps
2. **AI recipe generator em PT-BR** → NENHUM
3. **Modo offline robusto** → todos requerem conexão

**Conclusão:** Waste Guardian pode ter um stack tecnológico **único** combinando essas features ausentes.

---

## Q7.5 — Onde Waste Guardian se diferencia?

### Análise combinatória

| Combinação | Apps no mundo |
|------------|---------------|
| Household focus + AI | Apenas Nosh (UK, 13K users) |
| Household + Gamificação | ZERO |
| Household + AI + Gamificação | **ZERO (oportunidade de WG)** |
| Household + AI + Gamificação + BR market | **ZERO (oportunidade única de WG)** |
| BR market + AI | **ZERO (oportunidade única de WG)** |

### 5 Diferenciais competitivos únicos de WG

1. 🇧🇷 **Único no Brasil** com foco household + AI
2. 🤖 **IA em PT-BR** (sem equivalente global — Nosh é só EN)
3. 🎮 **Gamificação robusta** (Yindii é o único com gamificação, mas é B2B)
4. 🏠 **Foco no gap de 61%** (household é maior parte do desperdício global)
5. 🤝 **Parceria com Comida Invisível** (20K ONGs + McDonald's BR)

### Mensagem competitiva sugerida
> "Waste Guardian é o primeiro app do mundo que combina **foco no desperdício em casa + IA em português + gamificação** para atacar o segmento mais negligenciado (61%) do maior problema ambiental do século."

---

## Q7.6 — Quais apps B2B (food waste management) existem no Brasil?

### Apps B2B confirmados

| App | Tipo | Escala | Clientes notáveis |
|-----|------|--------|-------------------|
| **Comida Invisível** | B2B SaaS puro (rastreabilidade + MRV ESG) | 13M refeições recuperadas; 20K ONGs (2K ativas); 11-50 funcionários | **McDonald's BR** (Arcos Dorados), Lollapalooza BR, Flexform, Grupo Raízes, iFood (parceria IFB) |
| **Food To Save (B2B side)** | B2B2C marketplace (restaurantes são B2B) | 10.285 estabelecimentos | Cacau Show, Pão de Açúcar, Hortifruti, Angeloni, Kopenhagen, Habib's |
| **Karma (Suécia)** | B2B SaaS (POS + AI KAIA + Surplus) | Nordic | Não opera no BR (referência de modelo) |

### Waste Guardian posicionamento B2B recomendado

**NÃO competir com B2B puros no MVP.** Em vez disso:
- **B2B leve (12+ meses):** Dashboard opcional para supermercados doadores
- **Parceria estratégica:** Comida Invisível como canal para ONGs receptoras
- **White-label potencial:** para prefeituras (programas ODS municipais)

### Top 3 parcerias B2B sugeridas
1. **Comida Invisível** — rede de 2K ONGs ativas (ganho mútuo)
2. **iFood** — integração com pedidos de mercado
3. **Prefeituras SP/RJ/BH** — programas de educação ODS

---

## 📊 Síntese Final — Posicionamento Competitivo

### Onde WG compete:
| Frente | Competição | Nível |
|--------|-----------|-------|
| AI/OCR | Nosh | Leve (Nosh é UK, sem scale) |
| Gamificação | Yindii | Leve (Yindii é B2B Tailândia) |
| Mercado BR | Food To Save, Refood | Médio (são marketplace, não household) |
| B2B ESG | Comida Invisível | Forte (sinergia > competição) |
| Rastreabilidade | Comida Invisível | Forte (parceria) |

### Onde WG NÃO compete (e isso é bom):
- Marketplace global de restaurantes (saturado por TGTG)
- Compartilhamento gratuito UK (OLIO é dominante lá)
- B2B SaaS puro (Karma e CI dominam)

### Conclusão estratégica
Waste Guardian está em um **oceano azul** legítimo. O sucesso depende de:
1. **Execução rápida** (12-18 meses de janela)
2. **Foco em PT-BR** (barreira linguística protege de TGTG)
3. **Parceria com Comida Invisível** (acesso a 2K ONGs)
4. **Validação com métricas** (downloads + retention + CO2 evitado)
