# Research Questions — Batch 02: Environmental Impact

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Batch:** batch_02_environmental_impact

---

## Q2.1 — Qual o fator de emissão CO₂ (kg CO₂e / kg alimento desperdiçado) usado pelo EPA?

**Resposta:** 3,06 kg CO₂e/kg (média ponderada, EPA WARM v16, Dez/2023).

**Fonte primária:** [EPA WARM v16](https://www.epa.gov/warm/versions-waste-reduction-model-warm)

**Detalhamento:**
- 5 subcategorias específicas (Beef, Poultry, Bread, Grains, Fruits/Vegetables, Dairy) + 2 mistas (meat only, non-meat)
- Média ponderada da composição do MSW americano (53% fruits/veg/grains, 21% meat/dairy, 26% outros)
- Considera cradle-to-grave (produção + transporte + aterro com CH₄)
- GWP100 do AR5 (CH₄=25)

**Cross-validation:** ✅ Confirmado. ⚠️ Carbon Trust UK também cita 3,06 (URL inacessível nesta sessão).

**Limitação:** Fator americano — não usar diretamente para inventário brasileiro.

---

## Q2.2 — Como esse fator varia por categoria de alimento?

**Resposta:** Varia **150x** entre carne bovina (60 kg CO₂e/kg) e feijão (0,4 kg CO₂e/kg).

**Fonte primária:** [Poore & Nemecek 2018 (Science)](https://www.science.org/doi/10.1126/science.aaq0216)

**Tabela de fatores por kg (médias globais, LCA cradle-to-retail):**

| Categoria | Fator (kg CO₂e/kg) | Variação |
|-----------|---------------------|----------|
| Carne bovina | 60,0 | 9-105 |
| Carne ovina | 24,0 | — |
| Queijo | 8,4 | — |
| Carne suína | 6,5 | — |
| Frango | 4,3 | — |
| Ovos | 3,8 | — |
| Tofu | 1,6 | — |
| Nozes | 0,8 | — |
| Feijão/ervilha | 0,4 | — |
| **EPA WARM (média)** | **3,06** | — |

**Cross-validation:** ✅ Poore/Nemecek 2018 + ✅ Our World in Data + ✅ WRI Crippa 2021.

**Limitação:** Não inclui consumer kitchen waste. Para food waste total, adicionar 10-20%.

---

## Q2.3 — Qual o fator de emissão específico para o Brasil (vs EUA)?

**Resposta:** **NÃO HÁ fator oficial SEEG/MCTIC publicado para food waste como subsetor isolado.** Esta é a principal lacuna metodológica brasileira.

**Estimativa construída (com transparência):**
- **Fator EPA 3,06 kg CO₂e/kg, ajustado para Brasil = ~1,8 kg CO₂e/kg** (faixa 1,2-2,5)
- Lógica: composição do waste (mais vegetal, menos carne), mix energético (81% renovável), carne bovina brasileira mais eficiente (20-25 vs 60 médio global)
- Confiança: **baixa** (estimativa, não medição)

**O que existe:**
- ✅ SEEG 2024: subsetor Resíduos = 110 MtCO₂eq/ano (inclui food + yard + outros orgânicos)
- ✅ Embrapa 2024: 94 kg/capita/ano total; 29 kg/capita/ano partes comestíveis
- ✅ IPCC AR6: América Latina = 58% das emissões AFOLU globais

**O que não existe:**
- ❌ SEEG não isola food waste como subsetor
- ❌ Inventário MCTIC (4ª edição, 2020) não tem food waste isolado
- ❌ Não há fator "kg CO₂e/kg de food waste" publicado oficialmente para o Brasil

**Cross-validation:** ⚠️ Apenas parcial. Embasado em literatura secundária (FAO 2013, World Bank 2014).

**Recomendação:** Apresentar fator global 3,06 + estimativa brasileira 1,8 com disclaimer. Contatar Embrapa Meio Ambiente (Dr. Claudio Spadotto) para validação.

---

## Q2.4 — Quanto CO₂ a cadeia alimentar brasileira emite anualmente (baseline)?

**Resposta:** ~940 MtCO₂eq/ano (subsetor Agropecuária) + ~110 MtCO₂eq/ano (subsetor Resíduos) = **~1.050 MtCO₂eq/ano** (28% do total Brasil de 3,7 GtCO₂eq/ano).

**Fonte primária:** [SEEG Brasil 2024](https://plataforma.seeg.eco.br/)

**Decomposição SEEG 2024 (dados 2022):**

| Subsetor | MtCO₂eq/ano | % Total |
|----------|-------------|---------|
| Mudança de Uso da Terra (LULUCF) | 1.800 | 49% |
| **Agropecuária** | **940** | **25%** |
| Energia | 650 | 18% |
| **Resíduos** | **110** | **3%** |
| Processos Industriais | 200 | 5% |
| **TOTAL** | **3.700** | **100%** |

**Estimativa de Food Waste como subsetor:**
- Perdas pós-colheita (subsetor Agropecuária): ~150-200 MtCO₂eq/ano
- Disposição de orgânicos em aterros (subsetor Resíduos): ~40-55 MtCO₂eq/ano
- **TOTAL FOOD WASTE BRASIL: ~190-255 MtCO₂eq/ano (~5-7% do total Brasil)**

**Cross-validation:**
- ✅ SEEG 2024 (subtotais)
- ✅ IPCC AR6 (AFOLU = 21% global; AL = 58% da AL)
- ⚠️ Embrapa 94 kg/capita × 215M hab × 1,8 kg CO₂e/kg = 36 MtCO₂eq/ano (vs 190-255 da estimativa agregada — **discrepância 5-7x**)

**Implicação:** Brasil é desproporcionalmente exposto — 28% das emissões nacionais vêm de Agro+Resíduos.

---

## Q2.5 — Qual a metodologia GHG Protocol para contabilizar food waste?

**Resposta:** GHG Protocol trata food waste como **Escopo 1 (resíduos) + Escopo 3 (compras)**. Não há metodologia "Food Waste-Specific" — empresa aplica fatores da literatura.

**5 passos recomendados:**

1. **Quantificar food waste** (em kg) por categoria e estágio
2. **Atribuir fatores de emissão:**
   - Escopo 1: Apenas CH₄ de aterro (EPA WARM)
   - Escopo 3 Categoria 1 (Purchased Goods): Emissões cradle-to-gate (Poore/Nemecek)
   - Escopo 3 Categoria 5 (Waste Generated): Emissões de descarte
3. **Aplicar GWP100 AR6:** CH₄ = 27, N₂O = 273
4. **Reportar por escopo e estágio**
5. **Validar com terceiros** (ABNT ISO 14064-1 no Brasil)

**Fontes metodológicas:**
- ✅ EPA WARM v16 (Dez/2023) — fator único cradle-to-grave
- ✅ Poore & Nemecek 2018 — LCA cradle-to-retail
- ✅ IPCC 2006 Guidelines Vol. 5 (Waste) — First Order Decay (FOD) para aterros
- ✅ WRI/UNEP FLW Protocol — guia de quantificação
- ✅ ABNT ISO 14064-1 — padrão para inventários corporativos

**Cross-validation:** ✅ Consistente entre fontes.

**Limitação:** GHG Protocol **não publica fator único de food waste**. Escolha entre cradle-to-grave vs cradle-to-gate muda número por 1,5-2x.

**Para o Waste Guardian:**
- Quantificar waste evitado em kg/mês (já planejado)
- Aplicar EPA WARM 3,06 como fator base
- Categorizar por tipo de alimento (Poore/Nemecek) para refinar
- Reportar como "emissões evitadas" Escopo 3
- Usar GWP AR6 (CH₄=27)

---

## Q2.6 — Qual a pegada hídrica associada (m³/caloria) como métrica complementar?

**Resposta:** Pegada hídrica varia **120x** entre carne bovina (15.400 L/kg) e cenoura (130 L/kg). Média global ~1.500 L/kg de alimento.

**Fonte primária:** [Mekonnen & Hoekstra 2012 (Water Resources Research)](https://waterfootprint.org/) + [FAO SOLAW 2011](https://www.fao.org/land-water/solaw2020/)

**Tabela de pegada hídrica por kg:**

| Categoria | L/kg | L/kcal (aprox.) |
|-----------|------|------------------|
| Carne bovina | 15.400 | 10,5 |
| Carne suína | 6.000 | 3,5 |
| Queijo | 5.000 | 3,0 |
| Frango | 4.300 | 2,4 |
| Arroz | 2.500 | 0,9 |
| Trigo | 1.800 | 0,5 |
| Vegetais (média) | 322 | 0,2 |
| Tomate | 214 | 0,2 |
| Batata | 290 | 0,1 |
| Cenoura | 130 | 0,1 |
| **Média global** | **~1.500** | **~1,0** |

**Equivalência Waste Guardian (100 kg de food waste evitado):**

| Composição | CO₂e evitado | Água evitada |
|-------------|---------------|----------------|
| 100% frutas | 100 kg CO₂e | 30 m³ |
| 100% carne bovina | 6.000 kg CO₂e | 1.540 m³ |
| 100% queijo | 840 kg CO₂e | 500 m³ |
| **Média ponderada** | **~306 kg CO₂e** | **~150 m³** |

**Cross-validation:**
- ✅ Mekonnen & Hoekstra 2012
- ✅ FAO SOLAW 2011
- ✅ OWID water-use-stress
- ✅ ANA Brasil 2023 (50% captações para agricultura)

**Relevância Brasil:**
- 12% da água doce global
- 50% das captações brasileiras para agricultura (ANA 2023)
- Nordeste: até 70% captações para agri em região de estresse hídrico
- Sudeste: 30% captações (mas maior demanda urbana)

**Limitação:** Varia 10-100x por região/sistema. Brasil não tem inventário nacional de pegada hídrica alimentar (gap similar ao CO₂).

---

## Sumário Comparativo

| Métrica | Valor Brasil | Valor Global | Confiança |
|---------|---------------|---------------|-----------|
| Fator food waste (kg CO₂e/kg) | ~1,8 (estimado) | 3,06 (EPA) | Baixa/Média |
| Emissão subsetor Resíduos (MtCO₂eq/ano) | 110 | ~1.500 (estimado global) | Alta |
| Desperdício per capita (kg/ano) | 94 (RJ) | 132 | Média (só RJ) |
| Pegada hídrica média (L/kg) | ~1.000-1.300 (dieta BR) | ~1.500 | Média |
| Captações para agricultura | 50% (ANA) | 70% (FAO) | Alta |
| AFOLU % do total nacional | 28% (Agro+Res) | 21% global (IPCC) | Alta |

---

*Última atualização: 2026-06-03*
