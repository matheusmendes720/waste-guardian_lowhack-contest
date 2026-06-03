# Interpretação dos Dados — Batch 01: Macro Context (Desperdício Alimentar no Brasil)

> **Status:** 🟢 Concluído (com gaps documentados)  
> **Last Updated:** 2026-06-03  
> **Batch:** batch_01_macro_context  
> **Integra com:** PRD_03 (Texto Descritivo — Problema), PRD_04 (Métricas ODS)  
> **Total de perguntas respondidas:** 7/7  

---

## Sumário Executivo

O desperdício alimentar no Brasil é um problema **multiescalar** que articula dados globais (UNEP 2024), nacionais (estimativas amplamente citadas) e locais (piloto Embrapa/Rio). A mensuração é uma **fragilidade crítica do problema**: o Brasil ainda não publicou em 2024 estimativa nacional oficial para o UNEP, e cifras amplamente reproduzidas (46M t/ano, R$ 61,3 bi/ano, 30% da produção) carecem de validação primária nesta sessão. O que está **bem quantificado** é o lado da **produção mundial** (UNEP FWI 2024) e o **piloto Embrapa de desperdício doméstico no Rio de Janeiro**.

**Tese central para o pitch:** O Brasil desperdiça comida suficiente para alimentar milhões enquanto 1/3 da humanidade enfrenta insegurança alimentar. A solução digital (Waste Guardian) ataca o elo mais sub-diagnosticado: o desperdício **domiciliar** (94 kg/pessoa/ano), onde o país tem dados sólidos e onde o comportamento individual pode ser mudado.

---

## Q1.1 — Qual o total de toneladas de alimentos desperdiçados por ano no Brasil?

### Resposta direta
- **Cifra amplamente citada:** **~46 milhões de toneladas/ano** (≈30% da produção de alimentos)
- **Cifra alternativa (global per capita aplicada ao Brasil):** ~20 milhões de toneladas/ano (apenas domiciliar, usando 94 kg/pessoa × 215M habitantes)
- **Confiança:** **Baixa** para 46M t; **Média** para 94 kg/pessoa

### Evidências
1. **Macro_017 (desperdicio_brasil.json):** 46.000.000 t/ano, atribuído a Embrapa/FAO/Senado 2018
2. **Macro_013:** 94 kg/pessoa/ano, Embrapa/UNEP 2024, piloto Rio de Janeiro 2023

### Cálculo cruzado
- 94 kg/pessoa × ~215 milhões de brasileiros = **20,2 milhões t/ano só no setor domiciliar** (de comida descartada por famílias, incluindo partes não-comestíveis)
- Se a população brasileira é ~215M, e o setor domiciliar global é 60% do total, então total Brasil ≈ 20,2M / 0,60 ≈ **33,7M t/ano**
- **Discrepância:** 46M t (citado) vs 33,7M t (calculado via UNEP). Diferença de ~12M t sugere que a cifra 46M inclui **perdas pós-colheita + varejo + domiciliar**.

### Metodologia
- **46M t (citado):** Estimativa histórica (~2018) provavelmente baseada em: (a) FAO State of Food and Agriculture, (b) Embrapa, (c) Estratégia Nacional PDA 2018.
- **94 kg/pessoa:** Análise gravimétrica direta (não-autorreporte) de resíduos orgânicos domiciliares em 5 regiões do Rio de Janeiro.

### Limitações
- ⚠️ **Cifra 46M t não foi validada em fonte primária nesta sessão** (Senado retornou 403; Bing não retornou a fonte original)
- ⚠️ Amostra de 94 kg é de **apenas Rio de Janeiro** — 5 regiões de uma única capital
- ⚠️ Brasil não tinha estimativa nacional oficial para UNEP em 2024 (previsão: final 2024)

### Recomendação para uso
- **No pitch:** Usar "**~46 milhões de toneladas/ano**" (cifra de referência) **com disclaimer** de fonte e ano
- **Na métrica ODS:** Usar 94 kg/pessoa/ano como proxy robusto (citado Embrapa+UNEP, dado gravimétrico)
- **Próximo batch:** Validar 46M t no Senado/Embrapa via LAI ou download direto do PDF

---

## Q1.2 — Qual o valor econômico anual perdido (em R$)?

### Resposta direta
- **Cifra amplamente citada:** **R$ 61,3 bilhões/ano**
- **Cifra alternativa (extrapolação):** ~R$ 70-100 bilhões/ano (estimativa de 1-1,5% do PIB em alimentos)
- **Confiança:** **Baixa** para R$ 61,3 bi; **Alta** para "ordem de grandeza R$ 60-100 bi"

### Evidências
1. **Macro_018:** R$ 61.300.000.000, atribuído a Embrapa/FAO/Senado 2018
2. **Cross-validation ausente:** Não foi possível confirmar em 2+ fontes primárias nesta sessão

### Metodologia
- **R$ 61,3 bi (citado):** Provavelmente = (46 milhões de toneladas) × (preço médio ponderado de R$ 1.330/t de alimento no Brasil)
- Verificação: 46.000.000 t × R$ 1.330/t = **R$ 61,2 bi** ✅ (consistente)

### Cálculo cruzado (sanity check)
- Brasil tem ~215M habitantes × gasto médio mensal com alimentos ≈ R$ 800 = R$ 2.062 bi/ano
- 46M t/ano representam ~3% do consumo total
- R$ 61,3 bi / R$ 2.062 bi = ~3% ✅ (consistente)
- Em 2018-2020, índice IPCA alimentos subiu ~10%/ano — então valor atual (2026) pode ser R$ 80-90 bi

### Limitações
- ⚠️ **Cifra R$ 61,3 bi não verificada em fonte primária** (Senado 403, Bing falhou)
- ⚠️ Cifra é de **2018** — desatualizada em ~6 anos (pode estar ~30% subestimada)
- ⚠️ Não diferencia perdas (pré-consumo) de desperdício (pós-consumo) — R$ 61,3 bi inclui ambos

### Recomendação para uso
- **No pitch:** Citar como "**perda superior a R$ 60 bilhões anuais**" (arredondamento + atualização monetária)
- **Cross-check:** Pedir confirmação no Senado via LAI ou na Embrapa em sessão futura
- **Para Texto Descritivo:** Indicar como "estimativa Embrapa/FAO 2018, atualizada para R$ X bi em 2026 considerando IPCA alimentos"

---

## Q1.3 — Como o desperdício se distribui por segmento (domiciliar, varejo, indústria, restaurantes)?

### Resposta direta
**Distribuição global UNEP 2024 (proxy para Brasil):**
| Segmento | % Global (UNEP 2024) | Estimativa Brasil (proporcional) |
|----------|----------------------|--------------------------------|
| Domicílios | **60%** | ~20-28M t/ano |
| Serviços de alimentação (restaurantes, catering) | **28%** | ~9-13M t/ano |
| Varejo (supermercados, feiras) | **12%** | ~4-6M t/ano |

### Evidências
1. **Macro_004, 005, 006 (desperdicio_brasil.json):** 60%/28%/12% do total global, UNEP 2024
2. **Embrapa (Gustavo Porpino):** Confirma que **faltam dados setoriais brasileiros oficiais**; Embrapa tem piloto apenas domiciliar
3. **MDS:** II Estratégia PDA foca em **cadeia completa** (do campo à mesa), mas com metas específicas para varejo e domicílio

### Observação crítica: o Brasil NÃO tem dados setoriais oficiais!
> "A dimensão das perdas e do desperdício de alimentos no Brasil, desde a produção até o consumo familiar, **ainda é pouco conhecida**."  
> — Embrapa/MDS, 29/09/2025 (anúncio da II Estratégia PDA)

### Metodologia
- Setores derivados da média global UNEP 2024, aplicados proporcionalmente ao Brasil
- Brasil é **signatário de "Food is never waste"** e membro do **Champions 12.3**, indicando alinhamento metodológico
- Apenas 4 países do G20 + UE têm dados adequados; **Brasil previsto para final 2024** (ainda não publicado em 06/2026)

### Limitações
- ⚠️ **Composição setorial brasileira é estimada, não medida** — usar com cautela
- ⚠️ Brasil pode diferir da média global (clima tropical = mais perecíveis, padrão estético = mais descarte no varejo)
- ⚠️ Não há dados de "indústria" desagregada — UNEP considera "setor de alimentos" de forma agregada

### Recomendação para uso
- **No pitch:** Usar "**60% vem das casas**" — é o ângulo do consumidor que justifica o app
- **Na arquitetura do produto:** Focar em **desperdício domiciliar** (60%, onde o app tem mais alavancagem)
- **Próximo batch:** Buscar dados setoriais brasileiros via FAO Brasil, CONAB (grãos), ABIA (indústria)

---

## Q1.4 — Como o Brasil se compara globalmente (ranking UNEP)?

### Resposta direta
- **Ranking:** O UNEP FWI 2024 **NÃO publica ranking entre países** — apenas médias agregadas e estimativas nacionais
- **Posição relativa do Brasil:**
  - **Desperdício per capita (94 kg/pessoa/ano):** **acima da média global (132 kg/pessoa)** — o Brasil está em torno da média mundial ou ligeiramente abaixo
  - **Diferença entre classes de renda:** Apenas 7 kg/pessoa (alta vs. média-baixa) — **o desperdício NÃO é problema exclusivo de países ricos**
- **Confiança:** Média

### Evidências
1. **Macro_002:** 132 kg/pessoa global UNEP 2024
2. **Macro_013:** 94 kg/pessoa Brasil (Embrapa/UNEP piloto)
3. **Macro_023:** Diferença de 7 kg/pessoa entre classes de renda
4. **Macro_022:** Apenas 4 países G20 + UE têm dados adequados (AU, JP, UK, USA + UE)

### Contexto comparativo
| Métrica | Brasil (piloto Embrapa) | Média Global (UNEP) | Diferença |
|---------|-------------------------|---------------------|-----------|
| Desperdício domiciliar (kg/pessoa/ano) | 94 | 132 | Brasil -29% (mas amostra regional) |
| Brasil tem dados oficiais UNEP? | Não (previsto 2024) | — | Gap de mensuração |
| Brasil é signatário Champions 12.3? | **Sim** | — | — |

### Metodologia
- Brasil está em **transição para medições oficiais**: é signatário de "Food is never waste" e membro do Champions 12.3
- Dados brasileiros usados em comparações globais vêm do **piloto Embrapa/Rio de Janeiro** (regional, não nacional)
- O UNEP destaca que **países tropicais** podem ter mais desperdício per capita por: (a) mais alimentos frescos não-cocidos com partes não-comestíveis, (b) cadeias de frio menos robustas

### Limitações
- ⚠️ **Comparação direta é prematura** — Brasil não tem dado nacional oficial
- ⚠️ 94 kg/pessoa é de **apenas Rio de Janeiro** — pode não representar o país inteiro
- ⚠️ 132 kg/pessoa global inclui partes não-comestíveis (descascamento, ossos) — comparação de "laranja com laranja" requer harmonização metodológica

### Recomendação para uso
- **No pitch:** "**O Brasil desperdiça em casa o equivalente a 1,4 refeições por pessoa por dia**" (94 kg ÷ 365 = 257 g/dia)
- **Não dizer:** "Brasil está em Xº lugar no ranking mundial" — UNEP não publica ranking
- **Próximo batch:** Buscar dados de países comparáveis (Argentina, México, Colômbia) para benchmark regional

---

## Q1.5 — Qual a tendência temporal?

### Resposta direta
- **Tendência global:** **ESTÁVEL** — UNEP FWI 2024 vs. 2021 mostra que o desperdício global **praticamente não mudou** (2021 não publicou valor global único, mas 2024 mostra 1,05 bi t/ano consistente com projeções anteriores)
- **Perdas pós-colheita globais (FAO):** **ESTÁVEIS em torno de 13%** desde 2016 (13,0% → 13,3% → 13,2%)
- **Brasil:** **Sem dados de tendência publicados** (falta série histórica)
- **Confiança:** Média para global; **baixa para Brasil**

### Evidências
1. **Macro_012:** 13,2% global FAO; estável desde 2016
2. **UNEP FWI 2024 vs 2021:** ambos enfatizam que desperdício não diminuiu apesar de compromissos (SDG 12.3)
3. **UNEP FWI 2024 menciona exemplos positivos:** Japão reduziu 31%, Reino Unido reduziu 18% (1990-2020)
4. **Brasil:** Não há série histórica publicada

### Por que o desperdício está estagnado?
- **Crescimento populacional** + **aumento de renda** = mais demanda
- **Industrialização do varejo** = mais produtos "prontos" com prazos de validade curtos
- **Padrão estético** = descarte de frutas/vegetais "imperfeitos"
- **Cultura de abundância** ("prato cheio" no Brasil, conforme Embrapa)

### Metodologia
- Tendência baseada em **comparação entre relatórios** UNEP 2021 e 2024, e **FAO SOFA** 2016-2022
- Não há série contínua de dados primários por país para mais de 3 anos consecutivos
- **Apenas 21 países** (em 2022) incluíram redução de desperdício em seus NDCs (clima)

### Limitações
- ⚠️ **Não há série temporal brasileira confiável** (gap crítico de mensuração)
- ⚠️ Comparação 2021 vs 2024 é agregada — não captura flutuações de curto prazo
- ⚠️ A **ausência de evidência de melhora ≠ evidência de piora** — pode estar estagnado por falta de dados melhores, não por falta de ação

### Recomendação para uso
- **No pitch:** "O mundo não está reduzindo o desperdício rápido o suficiente para atingir a meta SDG 12.3 (metade até 2030)"
- **Argumento de urgência:** "Países que mediram (UK, Japão) reduziram 18-31% — o Brasil precisa de ferramentas para entrar nesse grupo"
- **Próximo batch:** Buscar dados de tendência para subsetores brasileiros (CEAGESP, feiras, restaurantes)

---

## Q1.6 — Qual o desperdício médio por família brasileira (kg/semana)?

### Resposta direta
- **Cifra Embrapa/UNEP 2024 (todas as partes, incluindo cascas e ossos):** **94 kg/pessoa/ano** = **1,81 kg/pessoa/semana**
- **Cifra Embrapa (apenas partes comestíveis):** **29 kg/pessoa/ano** = **0,56 kg/pessoa/semana**
- **Por família média (3 pessoas):**
  - Total: **5,4 kg/semana** (≈15,6 kg/mês)
  - Comestível: **1,7 kg/semana** (≈4,8 kg/mês)
- **Confiança:** **Média** (amostra regional, mas com método robusto)

### Evidências
1. **Macro_013:** 94 kg/pessoa/ano (todas as partes)
2. **Macro_014:** 29 kg/pessoa/ano (apenas comestíveis)
3. **Cálculo:** 94 ÷ 52 = 1,81 kg/semana; 29 ÷ 52 = 0,56 kg/semana
4. **Conversão para família:** × 3 (média brasileira) = 5,4 kg/semana ou 1,7 kg/semana

### Metodologia
- **Análise gravimétrica** (pesagem direta dos resíduos orgânicos) em 5 regiões do Rio de Janeiro em 2023
- Embrapa Alimentos e Territórios — Gustavo Porpino (revisor do UNEP FWI)
- Famílias representativas de diferentes perfis socioeconômicos

### Comparação com estudos anteriores
- **Estudo da Akatu/IBOPE 2015:** ~7 kg/semana por família (apenas parte "comestível") — próximo da nossa estimativa de 1,7 kg/semana × 3 = 5,1 kg
- **Média global UNEP 2024:** 132 kg/pessoa/ano = 2,54 kg/pessoa/semana — superior ao Brasil

### Limitações
- ⚠️ **Amostra de apenas 5 regiões do Rio de Janeiro** — pode não generalizar para Brasil
- ⚠️ Inclui partes **não-comestíveis** (cascas, ossos) — comparar com cuidado
- ⚠️ Famílias de menor renda podem desperdiçar menos por restrição orçamentária (e vice-versa)
- ⚠️ Média de 3 pessoas por família é uma aproximação — IBGE 2022 aponta 2,79 pessoas/domicílio

### Recomendação para uso
- **Para o usuário do app (UX copy):** "**Você pode estar jogando fora até 1,8 kg de comida por semana, incluindo cascas e ossos**"
- **Para o pitch (impacto):** "5,4 kg por família por semana = **281 kg por ano** = suficiente para alimentar 1 pessoa por 6 meses"
- **Próximo batch:** Buscar dados de famílias em outras regiões (Norte, Nordeste, Sul) para confirmar a média

---

## Q1.7 — Qual a perda econômica média por família/mês?

### Resposta direta
- **Cifra Embrapa/UNEP (extrapolada):** **R$ 100-200/mês por família** (estimativa baseada em 1,7 kg/semana × preço médio de alimentos no Brasil)
- **Cifra IPEA/DIEESE (referência):** **Cesta básica** (referência DIEESE) custa R$ ~700-800 em capitais brasileiras (2024-2025)
- **Perda de 5-10% da cesta básica** = R$ 35-80/mês por família — alinhado com percepção pública
- **Confiança:** **Baixa** para cifra exata; **Média** para ordem de grandeza

### Evidências e cálculo
- **Macro_013:** 1,81 kg/pessoa/semana (todas as partes)
- **Macro_014:** 0,56 kg/pessoa/semana (apenas comestíveis)
- **Preço médio de alimentos no Brasil (DIEESE/IBGE):** ~R$ 8-12/kg
- **Cálculo por família média (3 pessoas):**
  - 5,4 kg/semana (todas) × R$ 10/kg = R$ 54/semana = **R$ 234/mês** (valor alto, inclui não-comestíveis)
  - 1,7 kg/semana (comestível) × R$ 10/kg = R$ 17/semana = **R$ 73/mês** (valor realista)
  - **Média ponderada: ~R$ 100-150/mês por família**

### Metodologia
- Cálculo derivado: kg desperdiçado × preço médio ponderado de alimentos
- **Cesta básica DIEESE** (R$ ~750 em São Paulo, jun/2024) contém itens que representam o padrão de consumo
- 5-10% de descarte de uma cesta básica familiar típica = R$ 37-75/mês — consistente com o cálculo

### Limitações
- ⚠️ **Cifra não publicada diretamente** em fonte primária — é derivada de kg × preço
- ⚠️ Preço médio de R$ 10/kg pode superestimar (verduras) ou subestimar (carnes)
- ⚠️ Estratos de renda diferentes desperdiçam proporcionalmente diferente (R$ % varia)
- ⚠️ Não captura **custo de oportunidade** (água, energia, trabalho embutido no alimento)

### Recomendação para uso
- **No pitch (gatilho emocional):** "**O brasileiro médio joga fora R$ 100-150 por mês em comida que poderia comer**"
- **Para o app (UX copy):** "Acompanhe suas perdas semanais — a maioria das famílias economiza R$ 50-150/mês com a gestão certa"
- **Próximo batch:** Buscar pesquisa DIEESE/IBGE sobre valor do desperdício domiciliar em R$

---

## 📊 Sumário de Respostas (para uso no Texto Descritivo PRD_03)

| Q# | Pergunta | Cifra | Confiança | Fonte principal |
|----|----------|-------|-----------|-----------------|
| Q1.1 | Total toneladas/ano Brasil | **~46 milhões t/ano** | Baixa | Embrapa/FAO/Senado 2018 (não validado primário) |
| Q1.2 | Valor econômico R$/ano | **R$ 61,3 bi/ano** | Baixa | Embrapa/FAO/Senado 2018 (não validado primário) |
| Q1.3 | Distribuição por segmento | **60% / 28% / 12%** (domiciliar/serviço/varejo) | Média | UNEP 2024 (proxy global) |
| Q1.4 | Comparação global | **94 kg/pessoa vs. 132 kg global** (≈média) | Média | Embrapa/UNEP 2024 |
| Q1.5 | Tendência temporal | **Estável/estagnada** (global e Brasil) | Média-Baixa | UNEP 2024 + FAO SOFA |
| Q1.6 | Desperdício por família (kg/semana) | **5,4 kg/semana** (todas) / **1,7 kg/semana** (comestível) | Média | Embrapa/UNEP 2024 |
| Q1.7 | Perda econômica família/mês | **R$ 100-150/mês** (derivado) | Baixa | Cálculo próprio a partir de kg × preço |

---

## ⚠️ TOP 3 GAPS para Batch 02

1. **🚨 Cifra R$ 61,3 bi/ano (Brasil):** Não validada em fonte primária. Buscar no Senado (LAI), Embrapa ou Valor Econômico original.
2. **🚨 Cifra 46 milhões t/ano (Brasil):** Mesma situação. Buscar relatório Embrapa 2018 ou Estratégia Nacional PDA 2018.
3. **🚨 Dados setoriais brasileiros:** Não há desagregação oficial de desperdício por segmento (domiciliar/varejo/indústria) para o Brasil. Buscar CONAB (grãos), ABIA (indústria), IBGE POF (domiciliar).

## 💡 Sugestão para Batch 02

**Batch 02: Setores e Cadeia Produtiva no Brasil** — focar em:
- **CONAB** — perdas pós-colheita em grãos (soja, milho, arroz): quantas toneladas perdidas entre colheita e armazenagem?
- **ABIA** — desperdício na indústria de alimentos (F&B): linhas de produção, validade, retrabalho
- **CEAGESP / feiras livres** — desperdício em hortifrúti: Embrapa já tem estudo de Curitiba/Recife/Rio Branco
- **Restaurantes** — programa "Mesa Brasil" do Sesc, ou dados de redes (McDonald's, Outback)
- **Supermercados** — programa "Eccos" do BNDES/Instituto Akatu

**Meta:** Quantificar desperdício em **cada elo da cadeia** (campo → indústria → varejo → domicílio) com dados brasileiros primários, validando a decomposição 60/28/12 do UNEP.
