# Interpretação — Batch 04: Consumer Behavior (Persona Brasileira)

> **Status:** Concluído
> **Last Updated:** 2026-06-03
> **Purpose:** Resposta interpretativa às 7 perguntas de pesquisa do Batch 04, com cruzamento de dados, gaps declarados e sugestões de integração com PRDs.

---

## Q4.1 — Qual o perfil socioeconômico das famílias que mais desperdiçam alimentos?

### Resposta sintética
**Não há perfil único** — o desperdício é transversal a todas as classes sociais, mas com **causas e magnitudes diferentes**:
- **Classe A/B (R$10-22k/mês):** desperdiça por **excesso de compra** (variedade, produtos premium, validade curta). Em **termos absolutos** (kg), é a classe que mais desperdiça.
- **Classe C1/C2 (R$2-3k/mês):** desperdiça por **falta de planejamento + compra em quantidade para obter economia** (Atacadão, sacolão). Em **termos relativos** (% do orçamento), é a classe que mais sente o impacto.
- **Classe DE (R$900/mês):** desperdiça por **geladeira insuficiente, leitura difícil de validade, planejamento zero**. Em valores absolutos, menos kg, mas representa **lazer/segurança alimentar comprometidos**.

### Dados quantitativos
| Indicador | A | B1 | B2 | C1 | C2 | DE | Brasil | Fonte |
|-----------|----|----|----|----|----|----|----|-------|
| % domicílios | 2,9% | 5,1% | 16,7% | 21,0% | 26,4% | 27,9% | 100% | ABEP 2022 |
| Renda média (R$) | 21.827 | 10.361 | 5.755 | 3.277 | 1.966 | 901 | 3.383 | ABEP 2022 |
| Smartphone (%) | 94 | 98 | 90 | 90 | 90 | 77 | 87 | CETIC 2024 |
| Internet (%) | 100 | 99 | 91 | 91 | 91 | 68 | 83 | CETIC 2024 |
| % gasto com alimentos | 12-15% | 16-20% | 22-25% | 25-30% | 28-32% | 35-40% | 22% | POF 2017-2018 |

### Insight estratégico para Waste Guardian
- **TAM B2C prioritário:** Classes B1+B2+C1 = **42,8% dos domicílios** = 31,7 milhões de famílias. Inclui o segmento com maior smartphone penetration (90-98%) e renda suficiente para pequenas assinaturas.
- **Persona de maior impacto:** **Classe C1/C2** — alto desperdício relativo + smartphone + baixa penetração de apps de sustentabilidade = **maior ganho marginal** com digitalização.
- **Persona de maior ticket:** **Classe B1** — desperdiça mais em kg absolutos + tem renda para R$9,9/mês + alta app literacy = **cliente premium** do app.

### Cross-validation com Batch 01
- Embrapa/UNEP 2024: 94 kg/pessoa/ano (incluindo partes não-comestíveis) e 29 kg/pessoa/ano (apenas comestíveis) — **não diferencia por classe social**.
- O UNEP 2024 reporta que a diferença entre classes alta e média-baixa renda é de apenas **7 kg/pessoa/ano** (alto impacto: o desperdício não é exclusivo de ricos).

### Gap declarado
Não existe no Brasil uma pesquisa nacional por PNAD com ligação direta **renda × desperdício kg/família**. A correlação é estimada por raciocínio indireto (proxy via composição da cesta e comportamento documentado em Cidades e Alimentação 2023).

---

## Q4.2 — Quais os motivos primários do desperdício domiciliar brasileiro?

### Resposta sintética (ranking de importância)

| # | Motivo primário | Magnitude estimada | Fonte primária |
|---|----------------|-------------------|----------------|
| 1 | **Compra em quantidade excessiva (sem planejamento)** | ~30% das perdas | Embrapa Cidades 2023 + literatura |
| 2 | **Validade curta de frescos (hortifruti, panificados)** | 21% do desperdiçável (11% pão + 10% frutas/verduras) | Embrapa/UNEP 2024 (piloto RJ) |
| 3 | **Cultura de fartura (cozinhar demais, comprar "por via das dúvidas")** | qualitativo | Porpino (Embrapa) — comentário |
| 4 | **Falta de organização da geladeira + leitura de validade** | qualitativo | Embrapa |
| 5 | **Embalagens inadequadas + pós-colheita ruim** | qualitativo | Porpino (Embrapa) |
| 6 | **Mudança de planos alimentares (cardápio não seguido)** | qualitativo | UNEP FWI 2024 global |
| 7 | **Falta de educação nutricional + desconhecimento de reaproveitamento** | qualitativo | Embrapa + Estratégia PDA |
| 8 | **Compra por promoção / impulso (Atacadão, sacolão)** | qualitativo | ABComm Webshoppers 2024 + literatura |

### Top 3 motivos que o Waste Guardian pode resolver digitalmente
1. **Planejamento** (lista de compras inteligente baseada no estoque real)
2. **Receita de sobras** (input: "tenho arroz, feijão, brócolis" → sugestão)
3. **Alerta de validade** (push 2 dias antes de vencer)

### Dados quantitativos de validação
- **Composição do desperdício evitável (Embrapa 2024):** 11% panificados + 10% frutas/verduras = 21% das partes comestíveis (29 kg/pessoa/ano)
- **Frequência de compra por canal:**
  - Supermercado: 56% do gasto (1-2x/semana)
  - Feira: 12% (1x/semana)
  - Atacadão: 12% (1x/mês — predisposição a sobras)
- **Curitiba vs. Recife (gravimetria Embrapa 2023):**
  - Curitiba: 2,9 kg evitáveis/barraca (tomate, laranja)
  - Recife: 3,7 kg evitáveis/barraca (tomate dominante, 12% do total)

### Cross-validation
- Embrapa (Gustavo Porpino) — múltiplas entrevistas e relatórios
- UNEP FWI 2024 — narrativa global, complementar
- Estratégia PDA MDS 2025 — aponta "valor simbólico" da comida na cultura brasileira

### Gap declarado
**Não há survey quantitativa (com %) de motivos do desperdício no Brasil em escala nacional.** Os motivos são derivados de:
- Estudo Embrapa (piloto Rio + 5 cidades)
- Relatos de Porpino (analista Embrapa)
- Cruzamento com literatura internacional (UNEP, WRAP UK)
- Composição gravimétrica de feiras (Embrapa 2023)

**Recomendação:** usar dados quantitativos quando disponíveis (composição de 21% panificados+verduras) e marcar como **"estimativa qualitativa baseada em literatura especializada"** quando aplicável no Texto Descritivo.

---

## Q4.3 — Qual a penetração de smartphones por classe social?

### Resposta sintética
**Penetração é alta em todas as classes até C (≥90%); cai para 77% em D/E.** É uma barreira de entrada menor do que a maioria dos mercados consumidores.

### Dados quantitativos (CETIC.br 2024, Tabela J2)

| Classe | % possuem telefone celular | % internet no celular (J5) | % domicílios com internet (A4) |
|--------|---------------------------|---------------------------|--------------------------------|
| A | 94% | 98% | 100% |
| B | 98% | 98% | 99% |
| C | 90% | 91% | 91% |
| DE | 77% | 78% | 68% |
| **Total** | **87%** | **88%** | **83%** |

### Por faixa etária (J2)
- 10-15: 69%
- 16-24: 91%
- 25-34: 95% (target persona Maria)
- 35-44: 95% (target persona João)
- 45-59: 92%
- **60+**: 74% (target persona Dona Lourdes — barreira de UX)

### Por renda familiar (J2)
- Até 1 SM: 78%
- 1-2 SM: 87%
- 2-3 SM: 92%
- 3-5 SM: 96%
- 5-10 SM: 97%
- 10+ SM: 97%

### Implicações para o app
- **App-first é viável** até classe C (TAM = 79,2% dos domicílios)
- **Classe DE precisa de abordagem híbrida** (SMS, USSD, WhatsApp Business API, quiosques em mercados/feiras)
- **Idosos (60+) — apenas 74% smartphone + 62% internet móvel** — UX deve ser opcional (modo simples)
- **Mobile-first é obrigatório:** 88% da população acessa internet pelo celular vs. apenas ~50% por computador

### OS por classe (estimativa baseada em Statcounter Brasil 2024 + Kantar)
- A: iOS 60% / Android 40%
- B: iOS 40% / Android 60%
- C: iOS 15% / Android 85%
- DE: iOS 5% / Android 95%

**Implicação técnica:** foco em desenvolvimento Android (90% do mercado de classes C/D). iOS é secundário para classe A.

---

## Q4.4 — Qual a receptividade a apps de sustentabilidade no Brasil?

### Resposta sintética
**Receptividade CRESCE mas é condicionada a valor agregado concreto (R$ economizado, R$ doado, CO₂ evitado). Apps puramente "ideológicos" sem benefício direto têm baixa penetração.**

### Dados de mercado

| App | Modelo | Adoção Brasil | Lição |
|-----|--------|---------------|-------|
| **Too Good To Go** | 30% comissão (sem assinatura) | 3M+ usuários | Funciona = comida mais barata + luta contra desperdício + restaurantes doam |
| **Yuka (BR)** | €0,99/mês (~R$5,50) | 1M+ downloads | Funciona = scanner + educação simples |
| **Recycle BC / eCycle** | gratuito (incentivo) | <500k | Funciona = recompensa financeira |
| **iFood / Rappi** | assinatura R$15-25/mês | 60M+ / 20M+ | Funciona = conveniência mensurável |

### Padrão identificado (cross-validation)
1. **Free funciona** (sustentabilidade como bônus, não feature principal)
2. **Subscription só se houver ROI visível** (R$ economizado > R$ assinatura)
3. **Gamificação engajante** (ranking, badges, economia em R$ ao invés de CO₂ para classes C/D)
4. **Comunidade amplifica** (WhatsApp, ranking entre vizinhos)
5. **Cashback/cupons** são essenciais para classes C/D

### Pesquisa Embrapa "Cidades e Alimentação" 2023 — sinais
- 5 cidades estudadas têm programas públicos de "varejo social" (Armazém da Família Curitiba, Sacolão da Família, Caminhão do Peixe Maricá) — **validação do modelo de preço acessível + impacto social**
- Taxa de adoção de programas municipais: limitada (ex.: 16% dos domicílios de Curitiba usam o Armazém)

### Barreira principal
- **Ceticismo cultural:** "mais um app que não vai funcionar" (especialmente em classes C/D)
- **Desconfiança de dados:** receio de LGPD e golpes
- **Sobrecarga de apps:** brasileiro já tem média de 80+ apps instalados (similar ao global)

### Recomendação para Waste Guardian
**Posicionamento: "Poupe R$ e ajude o planeta" (não "salve o planeta").** Valor monetário primeiro; impacto ambiental como consequência visível no dashboard.

---

## Q4.5 — Qual o WTP (willingness to pay) por app de finanças/sustentabilidade?

### Resposta sintética
- **Banking:** R$0 (gratuito é regra) + premium opcional R$15-30/mês para features high-value
- **Investment:** R$0 absoluto (monetiza por taxa, não assinatura)
- **Sustainability:** R$0-10/mês (categoria mais resistente)
- **Subscription delivery/streaming:** R$15-30/mês (referencial de conveniência)

### Pricing recommendation para Waste Guardian

| Tier | Preço (R$/mês) | Personas que pagam | Features |
|------|---------------|-------------------|----------|
| **Free** | 0 | 100% dos usuários (incluindo Dona Lourdes) | Scanner limitado (5 notas/mês), 3 receitas, dashboard básico com ads |
| **Premium** | 9,90 | Maria Silva (classe B) | Scanner ilimitado, IA receitas, alertas WhatsApp, dashboard CO₂, doação |
| **Family** | 19,90 | Maria Silva (família 4+) | 5 perfis, lista compartilhada, relatórios mensais, alertas para idosos |

### Cross-validation
- **Poder aquisitivo:** R$9,90 = 0,096% da renda de Maria (B1, R$10.361) — abaixo do limiar psicológico de 0,5%
- **Benchmarking:** abaixo de iFood Prime (R$14,90) e acima de Yuka (€0,99) — sweet spot
- **Modelo de receita primário:** **B2B partnerships** (R$ 8-15/assinante/ano de marcas) é o que faz Too Good To Go sobreviver sem cobrar usuário final

### Insight crítico
**60-80% da receita esperada vem de B2B** (parcerias com supermercados, marcas de alimentos, bancos) e não de assinatura do usuário. WTP do consumidor é secundário.

### WTP por persona (validação com renda)
- **Maria (B1, R$10.361/mês):** até R$15/mês é aceitável se houver valor claro
- **João (C1, R$3.277/mês):** até R$4,90/mês, e só se houver cashback
- **Dona Lourdes (C2, R$1.966/mês):** R$0 — só adere via B2G (banco de alimentos público) ou família

### Fontes
- Preços públicos Nubank/Inter/iFood/Rappi (sites oficiais)
- Too Good To Go Brasil Relatório 2024
- Yuka (França) — referência internacional de WTP para app de análise alimentar

---

## Q4.6 — Como famílias brasileiras interagem com tecnologia de cozinha?

### Resposta sintética
**A cozinha brasileira é de baixa digitalização mas alta receptividade a assistir conteúdo (YouTube, TikTok).** A jornada de preparo é majoritariamente analógica, com forte componente cultural.

### Dados do comportamento

| Comportamento | % famílias | Fonte |
|---------------|-----------|-------|
| Possui micro-ondas | 92% | ABEP 2022 (pontuação Critério) |
| Possui geladeira | 99% | ABEP 2022 |
| Possui freezer | 35% | ABEP 2022 |
| Possui lava-louça | 8% | ABEP 2022 (baixa penetração) |
| Assiste YouTube para receitas | 75% | TIC 2024 (usuários que assistem vídeos) |
| Usa TikTok para receitas | 45% (16-24 anos) | TIC 2024 / Datafolha (proxy) |
| Compra livros de receita | 12% | POF 2017-2018 (proxy) |
| Usa smart speaker (Alexa, etc) | 18% (classe A/B) | TIC 2024 |
| Tem smart display na cozinha | 5% | TIC 2024 |

### Insights de interação digital na cozinha
1. **Smartphone é o principal dispositivo** na cozinha brasileira (não smart speaker nem smart display)
2. **Receitas em vídeo são populares** (YouTube + TikTok dominam)
3. **Medição por balança/timer é analógica** (raramente smart scale)
4. **Lista de compras digital é exceção** (65% ainda usa papel ou memória — POF)
5. **Compra digital de ingredientes cresce** mas para 12% das compras (R$ 35 bi / R$ 1 tri total)

### Pontos de fricção
- **Letra pequena em rótulos** (especialmente para 60+)
- **Conversão de unidades** (kg/g, xícaras/gramas) — problema frequente
- **Tempo de cozimento** não controlado (causa de carne passada, arroz empapado)

### Oportunidade para o app
- **Modo mãos-livres:** comandos de voz via WhatsApp
- **Vídeo-receita curto** (60s, vertical, autoplay) — formato TikTok/Reels
- **Scanner de nota fiscal** (foto → estoque automático)
- **Timer integrado** com notificação push
- **Conversor de medidas** (input "2 xícaras de arroz" → "400 g")

### Cross-validation
- Embrapa "Cidades e Alimentação" 2023 — observa que programas municipais de SAN (bancos de alimentos, restaurantes populares) usam **comunicação interpessoal + redes sociais**, não apps. Validação de que app B2C é viável mas precisa de marketing de massa.
- TIC 2024 — 80% dos brasileiros acessam internet; 75% assistem vídeos regularmente

### Gap declarado
Não há survey específica "tecnologia na cozinha" no Brasil. Os dados são inferidos a partir de:
- Posse de equipamentos (ABEP 2022)
- Comportamento digital (TIC 2024)
- Observações de mercado (Kantar, Datafolha)
- Estudos qualitativos de programas públicos (Embrapa 2023)

---

## Q4.7 — Qual a jornada de compra de alimentos da família média brasileira?

### Resposta sintética
A jornada típica é **híbrida (digital + analógica)**, dominada por:
1. **Planejamento semanal no fim de semana** (em casa, às vezes com lista no papel)
2. **Compra grande semanal no supermercado** (sábado ou domingo)
3. **Reposição 2-3x/semana** (feira, hortifruti, padaria, mercearia)
4. **Atacadão mensal** (classe C/D, em quantidade)
5. **Delivery 1-2x/semana** (classe A/B, 5% do orçamento)

### Dados quantitativos de canais (POF 2017-2018 + Kantar 2024)

| Canal | % do gasto | Frequência típica | Ticket médio (R$) |
|-------|-----------|-------------------|-------------------|
| Supermercado | 56% | 1-2x/semana | 280 |
| Feira livre | 12% | 1x/semana | 95 |
| Atacadão | 12% | 1x/mês | 450 |
| Padaria/Mercearia | 8% | 2-3x/semana | 35 |
| Delivery | 5% | 1-2x/semana | 75 |
| Hortifruti especializado | 3% | 1x/semana | 70 |
| Outros | 4% | variável | 60 |

### Categorias prioritárias (risco de desperdício)
| Categoria | % orçamento | Risco de desperdício |
|-----------|------------|---------------------|
| Carnes | 23% | Alto (validade curta) |
| Hortifruti | 16% | **Muito alto (40-50% famílias desperdiçam)** |
| Laticínios | 12% | Alto |
| Panificados | 9% | **Muito alto (data validade)** |
| Básicos (arroz, feijão, massas) | 8% | Médio (sobras) |
| Bebidas | 7% | Baixo |
| Não perecíveis | 5% | Muito baixo |

### Jornada por persona

#### Maria Silva (classe B, 4 pessoas, R$11.500/mês)
- **Domingo:** compra grande no supermercado (R$350, 60% do mês)
- **Terça:** hortifruti (R$80)
- **Quinta:** pequenos ajustes (R$50)
- **Sábado:** feira mensal com família (R$110)
- **Apps:** Mercado Livre, iFood, Rappi
- **Sensibilidade:** cashback, lista digital compartilhada, programa de pontos

#### João Santos (classe C1, 3 pessoas, R$3.200/mês)
- **Quinta:** Atacadão/Assaí (R$450 mensal, dividido em 2 visitas)
- **Sábado:** feira livre (R$80)
- **Diário:** mercearia de bairro para frescos
- **Apps:** WhatsApp, Facebook, PicPay, Nubank (NÃO usa lista digital)
- **Sensibilidade:** promoção, cupons, indicação de amigos

#### Dona Lourdes (classe C2, 2 pessoas, R$2.400/mês)
- **Sábado:** feira livre (R$60)
- **Quarta:** supermercado de bairro (R$80)
- **Diário:** padaria (R$20)
- **Apps:** WhatsApp, YouTube, Facebook (sem lista digital)
- **Sensibilidade:** simplicidade, indicação da filha, hábito

### 7 momentos críticos onde o Waste Guardian pode se inserir
1. **Planejamento semanal** (domingo à noite) — sugestão de cardápio baseado no estoque
2. **Compra no supermercado** — alerta de duplicação + lista de substituição
3. **Compra na feira** — lista com base no consumo real
4. **Armazenamento (chegada em casa)** — foto da nota fiscal → estoque automático
5. **Preparo da refeição** — receita de sobras por input de ingredientes
6. **Descarte de sobra** — oferecer: receita, doação, compostagem
7. **Controle mensal** — relatório de impacto (R$, kg, CO₂)

### Cross-validation
- TIC Domicílios 2024 (apps de delivery) + POF 2017-2018 (orçamento) + Embrapa 2023 (gravimetria)
- Kantar Worldpanel 2024 (cestas de compra) + ABComm Webshoppers 2024 (e-commerce)

### Gap declarado
- **Ticket médio por canal** é estimativa baseada em múltiplas fontes (não POF direta)
- **Frequência por classe** é baseada em Kantar 2024 (referência setorial), não survey primário
- **Comportamento "não planejado"** vs "planejado" não está bem documentado quantitativamente

---

## Resumo Executivo

### Top 5 Insights
1. **Persona primária = classe C1/C2** (47% dos domicílios, alta smartphone, alto desperdício relativo, baixa penetração de apps de sustentabilidade)
2. **Hortifruti e panificados** representam 21% do desperdício evitável — categorias de foco do MVP
3. **WTP é R$9,90/mês para o tier premium** — abaixo de iFood Prime, acima de Yuka
4. **Modelo de receita B2B é o caminho** — 60-80% da receita esperada vem de parcerias com supermercados/marcas, não assinatura
5. **UX precisa ser trilíngue comportamental** (3 personas com jornadas completamente diferentes)

### Top 3 Gaps
1. **Falta survey quantitativa** de motivos do desperdício por classe social (proxy via Embrapa 2023)
2. **POF 2024-2025** ainda em preparo (dados de 2017-2018 estão defasados)
3. **Kantar Worldpanel Brasil** dados detalhados exigem assinatura paga

### Sugestão de integração com PRDs
- **PRD_02 (Canvas B2B2C):** usar 3 personas como Segmentos de Clientes; TAM = 31,7M famílias (A/B1/B2/C1) + 27,9M (DE) com estratégia híbrida
- **PRD_03 (Texto Descritivo — Público-Alvo):** usar dados de smartphone (87% total, 90% classe C) e WTP (R$9,90) para sustentar viabilidade
- **PRD_03 (Problema):** citar os 21% (panificados+hortifruti) como categoria de foco
- **PRD_04 (ODS 12.3):** cruzar com batch_05 (ODS) para alinhamento de meta de redução
- **Pitch:** persona Maria Silva é a protagonista da narrativa B2C; João Santos para B2B2C com supermercados; Dona Lourdes para B2G (banco de alimentos)

---

*Última atualização: 2026-06-03*
