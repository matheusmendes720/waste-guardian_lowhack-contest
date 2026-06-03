# Análise Interpretativa — Batch 07: Competitors

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Liga Jovem:** DLJ4 — Waste Guardian

---

## Q7.1: Quem são os principais apps globais anti-desperdício?

### Findings

**Tier 1 — Líderes globais (>10M usuários):**

1. **Too Good To Go (TGTG)** — Líder mundial absoluto
   - **120 milhões de usuários** (oficial toogoodtogo.com)
   - **180.000 lojas parceiras** em **21 países**
   - **500M+ refeições salvas** desde 2016
   - **Receita 2024:** DKK 725M (~USD 105M)
   - **Funcionários:** 262 (2024)
   - **Funding total estimado:** USD 700M+ (consolidado Wikipedia)
   - **Source:** toogoodtogo.com + Wikipedia (revenue DKK 2017→2024)
   - **Play Store BR:** 50M+ downloads, 4.9★, 1.93M reviews

2. **OLIO** — Líder de compartilhamento (modelo diferente)
   - **9 milhões de usuários** (9M oficial app; 7M em 2023 Wikipedia)
   - **49 países** (alcance global único)
   - **Funding:** USD 51.2M (Accel + Octopus + VNV Global)
   - **Diferencial:** modelo **gratuito** (não desconto), foco em desperdício **DOMÉSTICO**
   - **Source:** Wikipedia + Play Store

**Tier 2 — Players regionais fortes (1M-10M usuários):**

3. **Flashfood** (Canadá + EUA) — 500K+ famílias, B-Corp, parcerias com Kroger/Loblaws
4. **Phenix** (FR/BE/ES/PT) — 1M+ downloads, anti-waste groceries
5. **ResQ Club** (Finlândia/Nordic) — 1M+ downloads, único com FLORES
6. **Yindii** (Tailândia/Singapura) — 100K+ downloads, único com gamificação "Food Hero"

**Tier 3 — Players B2B puros:**

7. **Karma** (Suécia) — B2B SaaS puro (POS + AI KAIA + Surplus)
8. **Food To Save** (Brasil) — 6.5M usuários, líder BR, marketplace

**Tier 4 — Emergentes / Pequenos:**

9. **Nosh Technologies** (UK) — 13K usuários, único com AI/OCR
10. **Refood** (BR) — 50K downloads, 4.0★
11. **Desperdiça Não** (BR) — 10+ downloads, regional BH/MG
12. **Comida Invisível** (BR) — B2B puro, não atende consumidor

### Implicações para Waste Guardian

- **Mercado validado:** USD 700M+ foram investidos em TGTG; 120M+ pessoas usam apps anti-desperdício globalmente
- **Espaço para inovação:** mesmo o líder (TGTG) **NÃO tem** AI/OCR/recipes — gap tecnológico real
- **Concentração geográfica:** A maioria dos apps é欧美 (Europa/EUA). Brasil é fronteira ainda mal servida (apenas Food To Save com 1M+ downloads BR; restantes têm <100K)
- **Ameaça TGTG no Brasil:** TGTG NÃO opera oficialmente no Brasil (apenas EU+NA+Aus+NZ) → janela de oportunidade

---

## Q7.2: Quais apps brasileiros existem?

### Findings (Apps anti-desperdício confirmados no Brasil)

| App | Downloads | Rating | Modelo | B2C/B2B | Diferencial |
|-----|-----------|--------|--------|---------|-------------|
| **Food To Save** | 1M+ | 4.7★ | Marketplace fee | B2C (consumer) | Líder BR; aceita Pix+vale-refeição; B-Corp+Endeavor; 6.5M usuários; 10K+ lojas |
| **Comida Invisível** | N/A (B2B) | N/A | SaaS + rastreabilidade | **B2B PURO** | COP30 selection; McDonald's BR; 13M refeições; único rastreável p/ ESG |
| **Refood** | 50K+ | 4.0★ | Marketplace fee | B2C | "Triplo pelo preço de um"; origem portuguesa |
| **Desperdiça Não** | 10+ | N/A | Marketplace fee | B2C | Regional BH/MG; desenvolvedor solo; copia TGTG |
| **EatWell** | **NÃO CONFIRMADO** | N/A | N/A | N/A | Site oficial offline; não foi possível validar |

### Implicações para Waste Guardian

- **Espaço vazio confirmado:** **ZERO** dos apps BR documentados foca em desperdício **DOMÉSTICO** com tecnologia (AI/OCR/gamificação)
- **Todos os BR são B2B marketplace** (TGTG-like) — nenhum usa IA
- **Niche de household + AI = inexplorado no Brasil**
- **Nicho B2B ESG** já está sendo ocupado por Comida Invisível → Waste Guardian deve EVITAR competir diretamente, mas pode PARCERIA (dados de IA poderiam alimentar rastreabilidade)
- **Mercado potencial:** 27M ton/ano Brasil × USD 1.000/ton em externalidades = ~USD 27 bi em valor destruído anualmente

### Validação cruzada

- Food To Save: Site oficial (6.5M) + Play Store (1M downloads) + Forbes BR + Exame
- Comida Invisível: LinkedIn + BNDES Garagem + COP30 selection
- Refood/Desperdiça Não: Play Store apenas (apps com baixo tração)
- EatWell: **inconclusivo** (site offline, sem Play Store listing)

---

## Q7.3: Qual o modelo de receita de cada um?

### Tabela consolidada de modelos de receita

| App | Modelo | Detalhes | B2C/B2B |
|-----|--------|----------|---------|
| **Too Good To Go** | **Marketplace fee** | ~R$3,50 fee por Surprise Bag (1/3 do preço original); B2B platform fees (Platform + Look-Smell-Taste) | B2B2C + B2B |
| **OLIO** | **Freemium + B2B partnerships** | Gratis com ads; subscription premium (boost listings, no ads); parcerias com supermercados (Tesco, Sainsbury, Iceland) | B2C + B2B |
| **Karma** | **B2B SaaS** | Preço por módulo (POS, Loyalty, Surplus); baseado em número de restaurantes/transações | **B2B PURO** |
| **Flashfood** | **Marketplace fee + B2B** | Consumer paga 50% off; grocer paga fee para listar excedentes; contratos enterprise com Kroger | B2B2C + B2B |
| **Food To Save** | **Marketplace fee** | Comissão por Sacola Surpresa; aceita Pix+cartão+vale-refeição; **UNICO BR com vale-refeição** | B2B2C |
| **Comida Invisível** | **B2B SaaS + Rastreabilidade** | Fee corporativo por gestão de excedentes; dashboards ESG; MRV auditável | **B2B PURO** |
| **Phenix** | **Marketplace fee + B2B consultoria** | Fee por basket vendido + serviços de consultoria de gestão de resíduos para varejistas | B2B2C + B2B |
| **Yindii** | **Marketplace fee** | Fee por "Yindii Box" vendida | B2B2C |
| **ResQ Club** | **Marketplace fee** | Comissão por oferta resgatada | B2B2C |
| **Nosh Technologies** | **Freemium + 10% service charge** | Free basico (13K users); 10% no Nosh Shop (3% caridade) | B2C + B2B leve |

### Implicações para Waste Guardian

**Decisão estratégica crítica:**

1. **Modelo B2C (Household Focus)** é o gap inexplorado globalmente
   - OLIO: único com escala mas SEM tecnologia
   - Nosh: único com tecnologia mas SEM escala
   - **Waste Guardian pode ser o primeiro a ter ESCALA + TECNOLOGIA em household**

2. **Modelo de receita recomendado para WG:**
   - **Tier 1 (MVP):** Freemium (gratuito com features básicas)
   - **Tier 2 (3-6 meses):** Premium subscription (R$9,90/mês) com AI recipes avançadas
   - **Tier 3 (12+ meses):** B2B dashboard para supermercados que queiram doar (parceria com Comida Invisível)
   - **Tier 4 (futuro):** Marketplace fee se adicionar restaurantes
   
3. **Tamanho de mercado BR (B2C household):**
   - 60M famílias brasileiras × R$ 100/ano em externalidades desperdiçadas
   - 1% de penetração = R$ 60M ARR potencial

---

## Q7.4: Quais funcionalidades cada um tem (gamificação, IA, doação)?

### Matriz de features (resumo — ver feature_matrix.json)

**Features que EXISTEM no mercado:**

| Feature | Apps que têm |
|---------|--------------|
| Marketplace de excedentes (B2B2C) | TGTG, Food To Save, Flashfood, Phenix, Yindii, ResQ, Refood, Desperdiça Não |
| Compartilhamento gratuito (B2C household) | OLIO |
| B2B SaaS para restaurantes | Karma, Comida Invisível |
| Gamificação | **Yindii (Food Hero) — ÚNICO** |
| AI/OCR scanner | **Nosh — ÚNICO** |
| AI receitas personalizadas | **Nosh (planejado) — ÚNICO** |
| Donation marketplace (doação grátis) | OLIO, Comida Invisível |
| B2B analytics/ESG | TGTG, Karma, Comida Invisível, Flashfood, Food To Save |
| Rastreabilidade p/ ESG | **Comida Invisível — ÚNICO** |
| Multi-categoria (food + não-food) | OLIO (food, roupas, livros) |
| FLORES (não só comida) | **ResQ Club — ÚNICO** |
| Pix + vale-refeição | **Food To Save — ÚNICO BR** |
| Calculadora de CO2 | TGTG, Food To Save |

### Features que **NÃO EXISTEM** no mercado (= gap = oportunidade para WG)

1. **Combinação de household focus + AI/OCR + gamificação** → ZERO apps têm
2. **AI recipe generator em português brasileiro** → NENHUM
3. **Gamificação + Impact dashboard** → Yindii tem gamificação mas SEM dashboard; Nosh tem dashboard mas SEM gamificação
4. **Modo offline** → TGTG, Karma, Nosh: NÃO funcionam offline (oportunidade para comunidades de baixa conectividade no BR)

### Implicações para Waste Guardian

**Features MUST-HAVE (paridade competitiva):**
- ✅ Scan OCR de produtos (paridade com Nosh)
- ✅ Tracking de validade (paridade com Nosh)
- ✅ Pantry inventory (paridade com Nosh)
- ✅ Doação (paridade com OLIO/Comida Invisível)
- ✅ Calculadora de CO2 (paridade com TGTG/Food To Save)

**Features DIFERENCIAIS (gap de mercado):**
- 🌟 **AI recipe generator em PT-BR** (gap linguístico + tech)
- 🌟 **Gamificação robusta** (Food Hero + missões semanais + ranking)
- 🌟 **Modo offline** (acessibilidade para BR continental)
- 🌟 **Social feed de impacto** (compartilhar badges no Insta/WhatsApp)
- 🌟 **Aceitar Pix como doação para ONGs** (integração com 20K ONGs do Comida Invisível)

**Features NICE-TO-HAVE (roadmap 6-12 meses):**
- IoT (geladeiras smart) → paridade com Karma
- Recipe video generation (TikTok-style)
- Multi-idioma (espanhol para LATAM)

---

## Q7.5: Onde Waste Guardian se diferencia? (matriz de features)

### Posicionamento único de Waste Guardian

**Waste Guardian é o ÚNICO app no mundo que combina:**

```
(Household Focus) + (AI Recipes) + (Gamificação) + (Doação) + (BR Market)
       ↓                  ↓                ↓               ↓            ↓
       OLIO              Nosh            Yindii         OLIO       Food To Save
       (mas sem IA)     (mas UK-only)  (mas sem IA)   (mas sem IA) (mas sem IA/household)
```

### Análise SWOT resumida (versão completa em swot_waste_guardian.md)

**Strengths (Forças):**
- **Foco no maior gap do mercado:** 61% do desperdício global é DOMÉSTICO (UNEP) — mas só 2 apps têm household focus
- **Stack tecnológico moderno:** LLM + OCR + gamificação = impossível para incumbentes copiarem rapidamente
- **Primeira-mover no Brasil em household+AI** (janela de 12-18 meses)
- **Alinhamento com COP30** (Brasil sede 2025) + FAO/ONU Save Food (validado)

**Weaknesses (Fraquezas):**
- **Zero tração** (protótipo Figma apenas)
- **Time desconhecido** (precisa orientadora cadastrada — bloqueante)
- **Sem rede de parceiros** (vs TGTG com 180K lojas, FTS com 10K)
- **Risco de execução** (12 semanas para entregar)

**Opportunities (Oportunidades):**
- **Mercado inexplorado:** Household + AI = vazio global
- **Comida Invisível como parceiro B2B:** eles têm 20K ONGs + McDonald's BR
- **Pix como default:** único método de pagamento com 150M+ usuários BR
- **ODS 12.3 (50% redução até 2030):** alinha com regulação global

**Threats (Ameaças):**
- **TGTG entrar no Brasil** (não opera hoje, mas é global)
- **Food To Save adicionar AI** (têm tração + funding)
- **Nosh internacionalizar** (improvável, sem funding)
- **Grandes varejistas (Carrefour, Pão de Açúcar)** lançarem próprias soluções

### Top 3 Gaps para explorar

1. **AI Recipes em PT-BR** (gap linguístico-cultural) — NENHUM app tem
2. **Household + Gamificação** (combinacao ausente) — Yindii tem gamificação mas B2B; OLIO tem household mas sem game
3. **BR market + rastreabilidade ESG** (pode parceria com Comida Invisível) — ambos pequenos, podem co-criar padrão de mercado

---

## Q7.6: Quais apps B2B (food waste management) existem no Brasil?

### Findings — Apps B2B Food Waste BR

| App | Tipo | Modelo | Escala | Clientes notáveis |
|-----|------|--------|--------|-------------------|
| **Comida Invisível** | B2B SaaS (rastreabilidade + MRV ESG) | Fee corporativo | 11-50 funcionários; 13M refeições; 20K ONGs (2K ativas) | **McDonald's BR (Arcos Dorados)**, Lollapalooza, Flexform, Grupo Raízes, iFood (parceria IFB) |
| **Food To Save** | B2B2C marketplace | Marketplace fee | 10.285 estabelecimentos; 5.2M bags | Cacau Show, Pão de Açúcar, Hortifruti, Angeloni, Kopenhagen, Habib's |
| **Karma** (Suécia, não-BR mas relevante) | B2B SaaS (POS + AI KAIA + Surplus) | SaaS por módulo | Nordic (Stureplansgruppen, Liseberg) | Não opera no BR (referência de modelo) |
| **Phenix** (FR, presente em PT) | B2B2C + consultoria de residuos | Marketplace + fee | 1M+ downloads; 50 ton/dia salvas | Operacional em FR/BE/ES/PT (Portugal, não Brasil) |
| **WASTE GUARDIAN POSICIONAMENTO** | B2C + B2B leve | Freemium → Premium → B2B dashboard | Protótipo | Em construção |

### Implicações para Waste Guardian

**Não competir com B2B puros:**
- Comida Invisível domina rastreabilidade ESG → **parceria**, não competição
- Food To Save domina marketplace restaurantes → mercado adjacente
- Karma modelo de SaaS é muito complexo para MVP

**Onde WG pode ter B2B leve:**
- **B2B dashboard para supermercados doadores** (mostrar quanto doaram)
- **API para iFood/mercados** (integrar scan de produtos com delivery)
- **White-label para prefeituras** (ODS 12.3 — programas municipais)

**Top 3 parcerias estratégicas B2B sugeridas:**
1. **Comida Invisível** — rede de 2K ONGs ativas para receber doações via WG
2. **iFood** — integração com pedidos de mercado (Food To Save já fez isso)
3. **Prefeituras de SP/RJ/BH** — programas de educação ODS

---

## 🎯 Síntese Estratégica Final

**Waste Guardian ocupa um "oceano azul" (W. Chan Kim):**
- Foco em desperdício DOMÉSTICO (61% do problema)
- Com tecnologia de IA (gap global)
- Em mercado brasileiro (fronteira mal servida)
- Com gamificação (engajamento)
- Alinhado com COP30, FAO Save Food, ODS 12.3

**Mercado endereçável:**
- Brasil: 60M famílias × 1% penetração = 600K usuários
- ARPU realista: R$ 50/ano (freemium + premium)
- TAM: **R$ 30M ARR** em 5 anos (conservador)
- América Latina: 200M+ famílias com app em espanhol → expansão natural

**Posicionamento recomendado para pitch:**
> "Waste Guardian: o único app que transforma desperdício doméstico em jogo — escaneie, aprenda, doe, ganhe pontos e salve o planeta. Tecnologia de IA em português para 200M+ famílias brasileiras e latino-americanas."
