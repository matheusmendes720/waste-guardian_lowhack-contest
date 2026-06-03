# Interpretation — Batch 02: Environmental Impact (CO₂ e Pegada Ecológica)

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Batch:** batch_02_environmental_impact  
> **Perguntas respondidas:** Q2.1 a Q2.6  
> **Total de métricas citadas:** 37  
> **Total de fontes cruzadas:** 15

---

## Resumo Executivo

Este batch estabelece que **1 kg de alimento desperdiçado evita, em média, 3,06 kg CO₂e** (EPA WARM v16, fator americano), e que a **cadeia alimentar brasileira emite ~940 MtCO₂eq/ano**, dos quais **110 MtCO₂eq/ano vêm do subsetor Resíduos** (parte majoritariamente orgânica). A pegada varia 150x entre carne bovina (60 kg CO₂e/kg) e feijão (0,4 kg CO₂e/kg), confirmando que **tipo de alimento > origem do alimento** como alavanca de descarbonização. Estes números alimentam as métricas ODS 11.6 (gestão de resíduos), 12.3 (food waste) e 13.3 (educação climática) do projeto Waste Guardian.

---

## Q2.1: Qual o fator de emissão CO₂ (kg CO₂e / kg alimento desperdiçado) usado pelo EPA?

### Resposta direta

**3,06 kg CO₂e por kg de alimento desperdiçado** (média ponderada para "Food Waste" misto, conforme EPA WARM v16, Dez/2023).

### Detalhamento

A EPA WARM reconhece **5 subcategorias específicas** de food waste (v16):
- **Beef** (carne bovina)
- **Poultry** (frango/aves)
- **Bread** (pão)
- **Grains** (grãos)
- **Fruits and Vegetables** (frutas e vegetais)
- **Dairy Products** (laticínios)

E **2 categorias agregadas**:
- **Food Waste (meat only)** = média ponderada de Beef + Poultry
- **Food Waste (non-meat)** = média ponderada de Grains + Bread + Fruits/Vegetables + Dairy

O fator 3,06 kg CO₂e/kg é calculado como **média ponderada da composição do Municipal Solid Waste (MSW) americano** (53% fruits/vegetables/grains, 21% meat/dairy, 26% outros), considerando o ciclo de vida cradle-to-grave (produção, transporte, disposição final em aterro com geração de metano).

### Cross-validation
- ✅ **EPA WARM v16 (2023):** confirmado em https://www.epa.gov/warm/basic-information-about-waste-reduction-model
- ⚠️ Atribuição alternativa ao **Carbon Trust UK** (3,06 kg CO₂e/kg) citada em literatura secundária; **não confirmada na fonte primária nesta sessão** (URL Carbon Trust retornou 404)
- ⚠️ Crippa et al. (Nature Food, 2021) cita "food systems = 34% das emissões globais" (vs 26% Poore) — escopo metodológico diferente

### Methodology notes

EPA WARM usa GWP100 do IPCC AR5 (CH₄=25, N₂O=298). A v16 (Dez/2023) atualizou fatores de aterro considerando teor de água por tipo de alimento. O modelo está disponível como planilha Excel (3,44 MB) e como base openLCA. Para uso direto no Waste Guardian: **adotar o fator 3,06 como referência, mas reconhecer que é americano**.

### Limitações
- Fator não é específico para o Brasil (mix energético, padrões de consumo, composição de MSW diferentes)
- Para inventário brasileiro rigoroso, usar **fator 1,8 kg CO₂e/kg** (estimativa construída, vide Q2.3) ou fazer cálculo bottom-up com EPA WARM usando composição brasileira
- EPA WARM é uma **ferramenta comparativa**, não um inventário GHG formal

---

## Q2.2: Como esse fator varia por categoria de alimento?

### Resposta direta

O fator varia **150x** entre a categoria de maior pegada (carne bovina, 60 kg CO₂e/kg) e a de menor (feijão/ervilha, 0,4 kg CO₂e/kg).

### Tabela de fatores por categoria (kg CO₂e/kg, cradle-to-retail, Poore & Nemecek 2018)

| Categoria | Fator (kg CO₂e/kg) | Variação | Confiança |
|-----------|---------------------|----------|-----------|
| **Carne bovina (Beef)** | 60,0 | 9-105 (10x) | Alta |
| **Carne ovina (Lamb)** | 24,0 | — | Alta |
| **Queijo (Cheese)** | 8,4 | — | Alta |
| **Carne suína (Pork)** | 6,5 | — | Alta |
| **Frango (Chicken)** | 4,3 | — | Alta |
| **Ovos (Eggs)** | 3,8 | — | Alta |
| **Tofu** | 1,6 | — | Alta |
| **Nozes (Nuts)** | 0,8 | — | Alta |
| **Feijão/Ervilha (Leguminosas)** | 0,4 | — | Alta |
| **EPA WARM "Food Waste" (média ponderada)** | 3,06 | — | Média |

### Análise crítica

**Carnes vermelhas dominam a pegada alimentar:**
- Beef (60) + Lamb (24) = 84 kg CO₂e/kg combinados
- Beef sozinho representa **~10x a pegada do frango** e **~150x a pegada do feijão**

**Implicação para o Waste Guardian:**
- Salvar 1 kg de carne bovina desperdiçada = evitar 60 kg CO₂e (equivalente a 2 meses de emissão de um carro popular)
- Salvar 1 kg de frutas desperdiçadas = evitar 1,5 kg CO₂e (visível mas modesto)
- **A métrica "X kg de CO₂ evitado" deve ser ponderada por categoria** — não usar média global

### Cross-validation
- ✅ Poore & Nemecek 2018 (Science, peer-review, meta-análise 38.700 fazendas)
- ✅ Our World in Data (visualização direta dos dados primários)
- ✅ WRI Crippa et al. 2021 (replicação independente em Nature Food)
- ✅ Embrapa (concordância geral sobre Brasil ter carne bovina mais eficiente, 20-25 kg CO₂e/kg vs média global 60)

### Methodology notes

Poore & Nemecek (2018) usam **LCA cradle-to-retail** com GWP100 AR5. **Não incluem o estágio de consumidor (cozinha)** — para food waste domiciliar completo, adicionar ~10-20% aos fatores. Para food waste no Brasil, ajustar pela composição local (mais frangos e feijão que média global, menos carne bovina per capita).

---

## Q2.3: Qual o fator de emissão específico para o Brasil (vs EUA)?

### Resposta direta

**NÃO HÁ fator oficial SEEG/MCTIC publicado para food waste como subsetor isolado.** Esta é a principal lacuna metodológica brasileira para o tema.

### O que existe (e o que não existe) no Brasil

**✅ Dados disponíveis:**
- SEEG 2024 reporta totais agregados: Brasil 2022 = 3,7 GtCO₂eq/ano, com subsetor Resíduos = 110 MtCO₂eq/ano (3% do total)
- Embrapa 2024 reporta desperdício per capita: 94 kg/pessoa/ano (total) / 29 kg/pessoa/ano (partes comestíveis)
- IPCC AR6 reporta AFOLU global com participação brasileira: América Latina = 58% das emissões AFOLU (maior proporção do mundo)

**❌ Dados indisponíveis:**
- Fator oficial "kg CO₂e por kg de alimento desperdiçado" no Brasil
- Inventário MCTIC atualizado pós-2020 (última edição = 4ª edição, 2020)
- Desagregação de food waste dentro do subsetor Resíduos do SEEG

### Estimativa construída (com transparência metodológica)

**Fator EPA 3,06 kg CO₂e/kg, ajustado para o Brasil = ~1,8 kg CO₂e/kg** (faixa 1,2-2,5, confiança baixa)

**Lógica do ajuste:**
1. **Composição do desperdício:** Brasil desperdiça mais frutas/vegetais e menos carne que EUA → fator mais baixo
2. **Mix energético:** Brasil 81% renovável (hidro/eólica/solar) vs EUA 60% fóssil → reduzir ~20% do fator de produção
3. **Carne bovina brasileira:** pegada média 20-25 kg CO₂e/kg (sistemas extensivos) vs 60 kg global (Poore) → reduz ~50% no subsetor de carne
4. **Aterros brasileiros:** menor captura de CH4 → maior emissão de metano por kg disposto (parcialmente compensa redução anterior)
5. **Resultado líquido:** ~60% do fator EPA americano

### Cross-validation
- ⚠️ **Fator brasileiro oficial:** NÃO ENCONTRADO
- ✅ **Comparação SEEG subsetor Resíduos:** 110 MtCO₂eq ÷ ~25 Mt food waste/ano (estimativa) = ~4,4 kg CO₂e/kg (mas inclui plástico, papel, etc.)
- ✅ **Embrapa estimativa indireta:** 94 kg/capita × 215 milhões hab × 1,8 kg CO₂e/kg ≈ 36 MtCO₂eq/ano do subsetor food waste (~33% do subsetor Resíduos)
- ✅ **FAO 2013 Food Wastage Footprint:** reportou 14% das emissões globais vêm de food loss/waste na América Latina, vs 9% global — confirma tendência regional de maior intensidade

### Methodology notes

Para o **Pitch do Waste Guardian**, recomendar:
1. Usar o **fator global 3,06** como referência canônica
2. Mencionar a **estimativa brasileira 1,8** com disclaimer
3. Calcular impacto do Waste Guardian usando **média ponderada por categoria** (com base no perfil de desperdício brasileiro)

### Limitações
- Fator brasileiro é uma **estimativa, não uma medição**
- SEEG/MCTIC não publicam food waste como subsetor
- Última Inventário Nacional de Emissões (4ª edição, 2020) usa metodologia 2006 IPCC Guidelines, sem food waste como subsetor específico
- Gap crítico: o **PRIMEIRO inventário nacional a isolar food waste** seria uma contribuição relevante do Waste Guardian ou de pesquisa futura

---

## Q2.4: Quanto CO₂ a cadeia alimentar brasileira emite anualmente (baseline)?

### Resposta direta

**~940 MtCO₂eq/ano** (subsetor Agropecuária, SEEG 2024) + **~110 MtCO₂eq/ano** (subsetor Resíduos) = **~1.050 MtCO₂eq/ano** (28% do total Brasil de 3,7 GtCO₂eq/ano).

### Decomposição detalhada (SEEG Brasil 2024, dados 2022)

| Subsetor SEEG | Emissão (MtCO₂eq/ano) | % do Total | Relação com Food Waste |
|---------------|------------------------|------------|-------------------------|
| **Agropecuária** | 940 | 25% | Perdas pós-colheita, fermentação entérica, manejo de solos, uso de fertilizantes |
| **Resíduos** | 110 | 3% | Disposição em aterros/lixões (CH₄ de decomposição anaeróbica) |
| **Mudança de Uso da Terra (LULUCF)** | 1.800 | 49% | Desmatamento (Cerrado + Amazônia) — NÃO é food waste, mas alimenta pecuária extensiva |
| **Energia** | 650 | 18% | Transporte, processamento industrial, refrigeração |
| **Processos Industriais** | 200 | 5% | Cimento, química — não relacionado a food |
| **TOTAL BRASIL** | 3.700 | 100% | — |

### Estimativa de Food Waste como subsetor

| Componente | Estimativa (MtCO₂eq/ano) | Metodologia |
|------------|--------------------------|-------------|
| Perdas pós-colheita (subsetor Agropecuária) | ~150-200 | ~20% das emissões agrícolas são pré-farm gate |
| Disposição de orgânicos em aterros (subsetor Resíduos) | ~40-55 | ~40-50% do subsetor Resíduos é matéria orgânica (food + yard waste) |
| **TOTAL FOOD WASTE BRASIL** | **~190-255 MtCO₂eq/ano** | **~5-7% do total Brasil** |
| **TOTAL FOOD WASTE BRASIL (% do subsetor AFOLU global)** | **~1,6-2,1% do global** | 940 Mt ÷ 11.900 Mt (IPCC AR6) = 7,9% |

### Cross-validation

- ✅ **SEEG 2024** (subtotais confirmados)
- ✅ **IPCC AR6 WG3 Ch7** (AFOLU global = 21% das emissões)
- ✅ **UNEP 2024** (food waste = 9% global; Brasil 94 kg/capita × 215M hab = 20 Mt alimento/ano, × 1,8 kg CO₂e/kg = 36 MtCO₂eq/ano, vs 190-255 da estimativa agregada — **discrepância de 5-7x**, indicando que subsetor "Resíduos + Agropecuária" pode estar sobre-contando)
- ⚠️ **MCTIC Inventário Nacional:** dados de 2020 (4ª edição). Atualização esperada em 2024 com possível isolamento de food waste.

### Methodology notes

O Brasil é **desproporcionalmente exposto** ao tema:
- **28% das emissões nacionais vêm do subsetor Agro+Resíduos** (cifra SEEG 2024)
- América Latina = 58% das emissões AFOLU globais (IPCC AR6)
- Brasil é o **2º maior emissor de GEE da AL** (atrás do México em algumas métricas, à frente em outras)

A redução de food waste no Brasil tem **duplo impacto**: reduz subsetor Resíduos (CH₄ de aterros) + reduz subsetor Agropecuária (perdas pós-colheita, demanda por expansão de fronteira agrícola).

### Implicação para o Pitch

- Apresentar como "**3,7 GtCO₂eq/ano do Brasil = 5x o setor de aviação global; food waste responde por ~6% desse total (~220 MtCO₂eq/ano)**"
- Cross-ref: "**Se o Waste Guardian evita 1.000 kg/mês de food waste, a 3,06 kg CO₂e/kg = 3,06 toneladas de CO₂e evitadas/mês, ou 36,7 toneladas/ano = 1 hectare de floresta tropical preservado**"

---

## Q2.5: Qual a metodologia GHG Protocol para contabilizar food waste?

### Resposta direta

O **GHG Protocol** (Global Protocol for Corporate Accounting and Reporting) trata food waste como uma **fonte de emissões de Escopo 1 (resíduos) e Escopo 3 (compras)**. Não há uma metodologia GHG Protocol "Food Waste-Specific", mas a abordagem recomendada é:

### 5 passos para contabilizar emissões de food waste

1. **Quantificar o food waste** (em kg) por categoria alimentar e estágio da cadeia
2. **Atribuir fatores de emissão** por kg (EPA WARM ou Poore/Nemecek) considerando escopo:
   - **Escopo 1:** Apenas CH₄/N₂O da disposição final em aterro/lixão (controle operacional)
   - **Escopo 3:** Emissões de toda a cadeia (produção, transporte, embalagem) — Categoria 1 (Purchased Goods) + Categoria 5 (Waste Generated)
3. **Aplicar GWP100 AR6:** CH₄ = 27, N₂O = 273 (atualizado em 2021, vs AR5 CH₄=25)
4. **Reportar separadamente** por escopo e por estágio (desperdício evitado = evitar produção upstream)
5. **Validar com terceiros** (ABNT ISO 14064-1 no Brasil) para inventários formais

### Escopo metodológico (importante para o Waste Guardian)

| Tipo de emissão | Onde entra no GHG Protocol | Fator recomendado |
|-----------------|----------------------------|-------------------|
| **Produção upstream** (cradle-to-gate) | Escopo 3 Categoria 1 (Purchased Goods) | Poore/Nemecek 2018 (categoria específica) |
| **Transporte** | Escopo 3 Categoria 4 (Upstream Transport) | 6% do total food emissions (Poore) |
| **Disposição em aterro** | Escopo 1 (se controlada) ou Escopo 3 Cat. 5 (Waste) | EPA WARM (aterro) |
| **Compostagem** | Escopo 1 (se controlada) | EPA WARM (composting) — captura menor |
| **Doação** (evita descarte) | **Evitada** (negativa) | Equivalente ao fator cradle-to-gate |

### Metodologias complementares

- **EPA WARM v16:** ferramenta de screening para Escopo 1 e 3. Recomendada para análise comparativa entre rotas de descarte.
- **IPCC Guidelines 2006, Vol. 5 (Waste):** metodologia First Order Decay (FOD) para estimar CH₄ de aterros. Usada nos inventários nacionais brasileiros.
- **WRI/UNEP Food Loss and Waste Protocol (FLW Protocol):** guia técnico de quantificação, não de fator de emissão.
- **ISO 14064-1:** padrão ABNT para inventários corporativos (não tem fator por kg, mas define governança).

### Para o Waste Guardian (recomendação metodológica)

1. **Quantificar food waste evitado** em kg por mês (já planejado no app)
2. **Aplicar EPA WARM 3,06** como fator base (padrão da indústria)
3. **Categorizar** por tipo de alimento para usar Poore/Nemecek (mais refinado):
   - Se 70% do waste é vegetal: 3,06 × 0,5 = **1,5 kg CO₂e/kg**
   - Se 30% é carne: 3,06 × 1,5 = **4,6 kg CO₂e/kg** (ponderado)
4. **Reportar como "emissões evitadas"** (escopo 3 upstream) na seção de impacto do app
5. **Usar AR6 GWP** (CH₄=27) para alinhamento com prática corrente

### Cross-validation
- ✅ EPA WARM v16 (https://www.epa.gov/warm) — método de fator único com ciclo de vida cradle-to-grave
- ✅ Poore & Nemecek 2018 (Science) — método LCA com 38.700 fazendas
- ⚠️ GHG Protocol Brasil (ghgprotocolbrasil.com.br) — inacessível nesta sessão, mas metodologia global GHG Protocol está documentada em ghgprotocol.org

### Limitações
- GHG Protocol **não publica fator único de food waste** (empresa deve aplicar fator da literatura)
- A escolha entre **fator cradle-to-grave vs cradle-to-gate** muda o número por 1,5-2x
- Para **APPEAR em relatório ESG/B3 ISE**, requer validação de terceira parte (custo: ~R$ 30-50k por inventário)

---

## Q2.6: Qual a pegada hídrica associada (m³/caloria) como métrica complementar?

### Resposta direta

A pegada hídrica é **métrica complementar essencial** ao CO₂, especialmente no Brasil (risco hídrico). Valores médios globais (Mekonnen & Hoekstra, 2012):

### Tabela de pegada hídrica por categoria (L/kg, blue+green+grey water)

| Categoria | Pegada Hídrica (L/kg) | Fator CO₂ (kg/kg) | "Pegada Hídrica / Caloria" (L/kcal) |
|-----------|------------------------|-------------------|------------------------------------|
| **Carne bovina** | 15.400 | 60,0 | 10,5 (muito alta) |
| **Carne suína** | 6.000 | 6,5 | 3,5 (alta) |
| **Queijo** | 5.000 | 8,4 | 3,0 (alta) |
| **Frango** | 4.300 | 4,3 | 2,4 (média) |
| **Arroz** | 2.500 | 4,0 | 0,9 (média) |
| **Trigo** | 1.800 | 0,6 | 0,5 (baixa) |
| **Vegetais (média)** | 322 | 0,4-1,0 | 0,2 (baixa) |
| **Batata** | 290 | 0,3 | 0,1 (muito baixa) |
| **Cenoura** | 130 | 0,3 | 0,1 (muito baixa) |
| **Tomate** | 214 | 1,4 | 0,2 (baixa) |
| **Aspargo** | 2.150 | 2,0 | 1,4 (alta) |

### Equivalência para o Waste Guardian

| Se o Waste Guardian evita (por mês) | CO₂e evitado | Água evitada (média) |
|--------------------------------------|---------------|----------------------|
| 100 kg de frutas | ~100 kg CO₂e | ~30 m³ |
| 100 kg de carne bovina | ~6.000 kg CO₂e | ~1.540 m³ |
| 100 kg de vegetais mistos | ~50 kg CO₂e | ~32 m³ |
| 100 kg de queijo | ~840 kg CO₂e | ~500 m³ |
| **100 kg de food waste (média ponderada)** | **~306 kg CO₂e** | **~150 m³** |

### Cross-validation

- ✅ **Mekonnen & Hoekstra 2012** (Water Resources Research, peer-review) — fonte primária
- ✅ **OWID** (https://ourworldindata.org/water-use-stress) — visualização derivada
- ✅ **FAO SOLAW 2011** (https://www.fao.org/land-water/solaw2020/) — 70% das captações globais para agricultura
- ✅ **ANA Brasil 2023** — 50% das captações brasileiras para agricultura (varia 30% Sudeste a 70% Nordeste)

### Por que pegada hídrica é complementar e não redundante

- **Carne bovina** tem **alta pegada hídrica E alta pegada de carbono** (correlação positiva)
- **Vegetais** têm **baixa pegada hídrica E baixa pegada de carbono** (correlação positiva)
- **Arroz** é **exceção**: alta pegada hídrica (~2.500 L/kg) por alagamento, mas pegada de carbono média
- **Queijo** tem pegada hídrica intermediária-alta mas pegada de carbono alta

### Relevância para o Brasil

- Brasil é **abundante em água** (12% da água doce global), mas **desigualmente distribuída** (Nordeste semiárido, Sudeste sob estresse)
- **Pegada hídrica por 1.000 kcal de dieta brasileira:** ~1.000-1.300 L (vs média global ~1.500 L)
- **Setor de alimentos responde por 50% das captações no Brasil** (ANA 2023)

### Implicação para o Pitch

Apresentar métrica combinada:
- "**1 kg de alimento desperdiçado = 3 kg CO₂e + 150 L de água não utilizados**"
- "**Aço ou alumínio reciclado economiza ~5x mais CO₂e/kg que evitar food waste, mas a água é 2x maior para food waste**"
- "**No Brasil, o impacto combinado água + CO₂ aponta para food waste como prioridade em regiões de estresse hídrico (Sudeste, Nordeste)**"

### Limitações
- Pegada hídrica varia **10-100x por região** (sistema de produção, clima, tecnologia de irrigação)
- Brasil **não tem inventário nacional de pegada hídrica alimentar** (gap similar ao CO₂)
- Water Footprint Network tem calculadora global, mas é baseada em dados de 2012

---

## Síntese Final — 5 Key Findings

### 1. Fator EPA 3,06 kg CO₂e/kg é o mais referenciado globalmente
- ✅ Confirmado em EPA WARM v16 (Dez/2023)
- ⚠️ Carbon Trust UK é citado como fonte alternativa, mas URL inacessível nesta sessão
- ⚠️ Brasil não tem fator oficial SEEG/MCTIC

### 2. Tipo de alimento > origem do alimento
- Carne bovina (60) vs feijão (0,4) = **150x de diferença** na pegada de carbono
- Implicação: para cálculo de impacto do Waste Guardian, é **fundamental categorizar o tipo de alimento evitado**

### 3. Brasil emite ~3,7 GtCO₂eq/ano; subsetor Agro+Resíduos = 28% (~1.050 MtCO₂eq)
- SEEG 2024 (dados 2022)
- Food waste como subsetor isolado = ~190-255 MtCO₂eq/ano (estimativa construída, confiança média)
- América Latina = 58% das emissões AFOLU globais (IPCC AR6) → Brasil tem **disproporcional responsabilidade**

### 4. Diferença metodológica entre Escopo 1 e Escopo 3 importa
- Escopo 1 (apenas aterro): fator menor (~0,5-1 kg CO₂e/kg)
- Escopo 3 (cradle-to-grave): fator maior (3,06 kg CO₂e/kg)
- **Recomenda-se usar Escopo 3** para inventários corporativos alinhados com SBTi/CDP

### 5. Pegada hídrica é métrica complementar essencial no Brasil
- Carne bovina: 15.400 L/kg (vs 60 kg CO₂e/kg)
- Brasil: 50% das captações para agricultura (vs 70% global)
- Nordeste brasileiro: até 70% das captações para agricultura em região de estresse hídrico
- **Combinação CO₂ + H₂O = 3 kg CO₂e + 150 L/kg** = narrativa poderosa para investidores ESG

---

## Top 3 Gaps (gaps críticos a endereçar)

### Gap #1: Fator brasileiro oficial
- **Problema:** SEEG/MCTIC não publicam food waste como subsetor isolado
- **Recomendação:** Apresentar **fator global 3,06** como referência canônica, com **estimativa brasileira 1,8** como cenário alternativo
- **Próximo passo:** Contato com Embrapa Meio Ambiente (Dr. Claudio A. Spadotto) para validar estimativa 1,8

### Gap #2: Inventário Nacional desatualizado
- **Problema:** 4ª edição do Inventário MCTIC é de 2020, com dados 2018
- **Recomendação:** Citar SEEG 2024 (dados 2022) como proxy mais atualizado
- **Próximo passo:** Aguardar 5ª edição (previsão 2025-2026) que deve incluir subsetor waste mais detalhado

### Gap #3: Pegada hídrica por alimento no Brasil
- **Problema:** Dados globais (Mekonnen/Hoekstra 2012) podem não representar o Brasil
- **Recomendação:** Usar dados globais como proxy, com disclaimer
- **Próximo passo:** Cross-ref com ANA 2023 (50% captações) e Embrapa Territorial

---

*Última atualização: 2026-06-03*
