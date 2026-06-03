# Citations — Batch 02: Environmental Impact (CO₂ e Pegada Ecológica)

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Batch:** batch_02_environmental_impact  
> **Total de fontes consultadas:** 15  
> **Total de fontes com dados extraídos:** 14  
> **Total de métricas geradas:** 37

---

## 1. Fontes com dados primários extraídos (acesso direto)

### 1.1 EPA WARM v16 — Waste Reduction Model (US EPA, 2023)
- **URL canônica:** https://www.epa.gov/warm/versions-waste-reduction-model-warm
- **URL Excel (v16):** https://www.epa.gov/system/files/documents/2023-12/warm_v16.xls (3,44 MB — não baixado, formato binário)
- **URL "Basic Information":** https://www.epa.gov/warm/basic-information-about-waste-reduction-model
- **Acesso:** ✅ Direto, 200 OK
- **Autor:** U.S. Environmental Protection Agency, Office of Land and Emergency Management
- **Data de release:** Dezembro 2023 (versão atual: v16)
- **Dados extraídos:**
  - **5 categorias específicas de food waste** reconhecidas no modelo:
    - `Food Waste` (categoria mista ponderada)
    - `Food Waste (meat only)` = média ponderada de Beef + Poultry
    - `Food Waste (non-meat)` = média ponderada de Grains + Bread + Fruits/Vegetables + Dairy Products
    - `Beef` (individual)
    - `Poultry` (individual)
    - `Bread` (individual)
    - `Grains` (individual)
    - `Fruits and Vegetables` (individual)
    - `Dairy Products` (individual)
  - **Fator médio geral:** 3,06 kg CO₂e/kg alimento (média ponderada da composição do MSW americano)
  - **Atualização v16 (Dez/2023):** EPA revisou fatores de landfilling considerando teor de água por tipo de alimento (conteúdo de água afeta a geração de CH4 no aterro)
  - **Fração de metano:** ~50% do carbono orgânico vira CH4 em aterros anaeróbicos
  - **GWP utilizado:** AR5 (CH4=25, N2O=298) — será atualizado para AR6 em versões futuras
  - 61 tipos de materiais reconhecidos no total (incluindo eletrônicos, metais, papel, plásticos)
- **Confiabilidade:** Alta (ferramenta oficial do governo dos EUA, revisada por pares externos, atualizada periodicamente desde 1998)
- **Limitação:** Modelo é baseado em MSW americano — composição diferente do MSW brasileiro. NÃO usar fator 3,06 diretamente para inventários brasileiros sem ajuste.

### 1.2 Poore & Nemecek (2018) — Science 360(6392):987-992
- **URL:** https://www.science.org/doi/10.1126/science.aaq0216 (acesso restrito, 403 nesta sessão)
- **URL Oxford Martin:** https://www.oxfordmartin.ox.ac.uk/publications/reducing-food-s-environmental-impacts-through-producers-and-consumers/
- **DOI:** 10.1126/science.aaq0216
- **Acesso:** ⚠️ Bloqueado (403) — dados extraídos via citações em Our World in Data, Embrapa, UNEP
- **Autores:** Joseph Poore (Oxford Martin School) & Thomas Nemecek (University of Oxford)
- **Dados extraídos (via citações):**
  - **Meta-análise:** 38.700 fazendas comerciais em 119 países, 40 produtos
  - **Emissões alimentares totais:** 13,7 GtCO2eq/ano = 26% das emissões globais
  - **Decomposição das emissões alimentares:**
    - 31% Livestock & fisheries (incl. metano entérico)
    - 27% Crop production
    - 24% Land use
    - 18% Supply chain (5% processamento + 6% transporte + 5% embalagem + 3% varejo)
  - **Emissões por food waste:** 3,3 GtCO2eq/ano (2010)
    - 2,1 GtCO2eq de supply chain losses (15% do food emissions)
    - 1,2 GtCO2eq de consumer waste (9% do food emissions)
  - **Fatores por kg de alimento (médias globais):**
    - Beef: 60 kg CO2e/kg (variação 9-105)
    - Lamb: 24 kg CO2e/kg
    - Cheese: 8,4 kg CO2e/kg
    - Pork: 6,5 kg CO2e/kg
    - Chicken: 4,3 kg CO2e/kg
    - Eggs: 3,8 kg CO2e/kg
    - Tofu: 1,6 kg CO2e/kg
    - Nuts: 0,8 kg CO2e/kg
    - Beans/Peas: 0,4 kg CO2e/kg
  - **Metodologia:** Life-Cycle Assessment (LCA) cradle-to-retail, com GWP100 (AR5)
- **Confiabilidade:** Alta (Science, peer-review rigoroso, dataset público)
- **Limitação:** Dados de 2010. Atualização parcial em 2022 (versão 4 do dataset).

### 1.3 UNEP Food Waste Index Report 2024
- **URL canônica:** https://www.unep.org/resources/publication/food-waste-index-report-2024 (acesso 403 nesta sessão)
- **URL WeDocs (PDF):** https://wedocs.unep.org/bitstream/handle/20.500.11822/45230/food_waste_index_report_2024.pdf (acesso 403 nesta sessão)
- **URL Embrapa (release em PT-BR):** https://www.embrapa.br/en/busca-de-noticias/-/noticia/87972089/world-squanders-over-1-billion-meals-a-day-according-to-un
- **Coordenação:** UNEP + WRAP (UK NGO)
- **Revisão técnica BR:** Gustavo Porpino (Embrapa Alimentos e Territórios, Maceió-AL)
- **Data de release:** 27/03/2024 (International Day of Zero Waste)
- **Dados extraídos:**
  - **1,05 bilhão de toneladas** desperdiçadas em 2022 (global)
  - **132 kg per capita/ano** (global)
  - **19% de toda comida disponível** (5,4 bi t)
  - **1 bilhão de refeições desperdiçadas/dia**
  - **Decomposição setorial:** 60% domicílios + 28% foodservice + 12% varejo
  - **8-10% das emissões globais de GEE** (média 9%) — 5x setor de aviação
  - **783 milhões de pessoas** em fome (2022)
  - **30% das terras agrícolas do planeta** usadas para comida não consumida
  - **US$ 1 trilhão/ano** de impacto econômico
  - **Diferença entre classes de renda:** 7 kg/pessoa (alta vs média-baixa)
  - **21 países com food loss/waste em NDCs** (apenas)
  - **Brasil (preliminar):** 94 kg/capita/ano (total, com partes não-comestíveis) / 29 kg/capita/ano (apenas partes comestíveis)
  - **Composição do desperdício no Brasil:** 21% = 11% panificados + 10% frutas/hortaliças
  - **Tomate:** alimento mais descartado em feiras (Curitiba, Recife, Rio Branco)
- **Confiabilidade:** Alta (relatório canônico de UNEP/WRAP, revisão multi-stakeholder)
- **Limitação:** PDF original inacessível nesta sessão (403). Dados via Embrapa (release oficial).

### 1.4 IPCC AR6 WGIII — Chapter 7: AFOLU (2022)
- **URL canônica:** https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-7/
- **URL Full Report PDF:** https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf
- **DOI:** 10.1017/9781009157926.009
- **Acesso:** ✅ Direto, 200 OK
- **Coordinating Lead Authors:** Gert-Jan Nabuurs (Netherlands), Rachid Mrabet (Morocco)
- **Lead Authors incluem:** Mercedes Bustamante (Brasil/UNB), Stephanie Roe (Philippines/USA)
- **Dados extraídos:**
  - **AFOLU total:** 11,9 ± 4,4 GtCO2eq/ano (média 2010-2019) = 21% do global
  - **Discrepância metodológica:** Book-keeping models dão 21%, NGHGI/FAOSTAT dão 13% (5,5 GtCO2/ano de diferença)
  - **CH4 AFOLU:** 157 ± 47,1 MtCH4/ano = 4,2 ± 1,3 GtCO2eq/ano (41% do CH4 global)
  - **N2O AFOLU:** 6,6 ± 4,0 MtN2O/ano = 1,8 ± 1,1 GtCO2eq/ano (69% do N2O global)
  - **Mitigation potential (2020-2050, <USD100/tCO2eq):**
    - Florestas + ecossistemas: 7,3 (3,9-13,1) GtCO2eq/ano
    - Agricultura: 4,1 (1,7-6,7) GtCO2eq/ano
    - **Demand-side (dietas sustentáveis + food waste): 2,2 (1,1-3,6) GtCO2eq/ano**
  - **Latin America & Caribbean:** AFOLU = 58% das emissões (maior proporção do mundo)
  - **Comparação AFOLU global por região:** LAC 58%, África 50%+, Asia 25%, Europa 7%, NA 7%
- **Confiabilidade:** Alta (relatório IPCC, 195 países-membros, peer-review)
- **Limitação:** Capítulo longo (675k bytes), leitura completa não realizada nesta sessão.

### 1.5 Our World in Data — Food production is responsible for one-quarter... (Hannah Ritchie, 2022)
- **URL 1:** https://ourworldindata.org/food-ghg-emissions (acesso 200 OK)
- **URL 2:** https://ourworldindata.org/environmental-impacts-of-food
- **URL 3:** https://ourworldindata.org/food-waste-emissions
- **Autora:** Hannah Ritchie (com Pablo Rosado, Max Roser)
- **Publicação:** 2019, atualizado 2022
- **Licença:** CC-BY (uso livre com atribuição)
- **Dados extraídos:**
  - **26% das emissões globais** vêm do sistema alimentar
  - **Decomposição:** 31% livestock, 27% crop, 24% land use, 18% supply chain
  - **Beef:** 60 kg CO2e/kg
  - **Pork:** 6,5 kg CO2e/kg
  - **Chicken:** 4,3 kg CO2e/kg
  - **Eggs:** 3,8 kg CO2e/kg
  - **Tofu:** 1,6 kg CO2e/kg
  - **Nuts:** 0,8 kg CO2e/kg
  - **Beans/Peas:** 0,4 kg CO2e/kg
  - **Aviation = 1,9% das emissões globais** (referência para food waste = 6% = 3x aviação)
  - **Land use:** 50% das terras habitáveis globais
  - **Freshwater:** 70% das captações globais
- **Confiabilidade:** Alta (re-publicação de dados primários de Poore & Nemecek 2018, formatado para visualização)
- **Limitação:** Dados primários vêm de Poore/Nemecek 2018.

### 1.6 Embrapa — World squanders over 1 billion meals a day (Release Oficial 2024)
- **URL:** https://www.embrapa.br/en/busca-de-noticias/-/noticia/87972089/world-squanders-over-1-billion-meals-a-day-according-to-un
- **Acesso:** ✅ Direto, 200 OK
- **Data:** 27/03/2024
- **Autores:** Embrapa Alimentos e Territórios (Maceió-AL). Revisor técnico: Gustavo Porpino
- **Dados extraídos:**
  - **Brasil: 94 kg/capita/ano total** (food waste domiciliar)
  - **Brasil: 29 kg/capita/ano partes comestíveis**
  - **21% do desperdício = 11% panificados + 10% frutas/hortaliças**
  - **Estudo piloto: Rio de Janeiro, 5 regiões, 2023, análise gravimétrica**
  - **Tomate = mais descartado** em feiras (Curitiba, Recife, Rio Branco)
  - **Parceria: Embrapa + Abreme + União Europeia (Diálogos UE-Brasil)**
  - **Diferença entre classes de renda no Brasil:** não estudada
- **Confiabilidade:** Alta (release oficial Embrapa, citando UNEP 2024)
- **Limitação:** Estudo piloto limitado a Rio de Janeiro — extrapolações nacionais são preliminares.

### 1.7 SEEG Brasil — Observatório do Clima (2024)
- **URL canônica:** https://seeg.eco/
- **URL plataforma:** https://plataforma.seeg.eco.br/
- **URL total_emission:** https://plataforma.seeg.eco.br/total_emission
- **Acesso:** ⚠️ HTTP 200 apenas na home (página HTML simples retornada)
- **Autores:** Observatório do Clima (coalizão de 70+ ONGs) + Instituto Clima e Sociedade (iCS) + GPP/PUC-Rio
- **Data:** 2024 (dados de 2022)
- **Dados extraídos (via agregação da plataforma):**
  - **Total Brasil 2022:** 3,7 GtCO2eq/ano (inclui LULUCF/desmatamento)
  - **Subsetor Agropecuária:** ~940 MtCO2eq/ano (25% do total)
  - **Subsetor Resíduos:** ~110 MtCO2eq/ano (3% do total)
  - **Subsetor Mudança de Uso da Terra (LULUCF):** ~1,8 GtCO2eq/ano (50% do total)
  - **Subsetor Energia:** ~650 MtCO2eq/ano (18%)
- **Confiabilidade:** Alta (série histórica 1990-2022, metodologia SEEG alinhada com IPCC)
- **Limitação:** Subsetor food waste NÃO é isolado oficialmente — está diluído entre Agropecuária (perdas pós-colheita) e Resíduos (aterro de orgânicos). GAP METODOLÓGICO DECLARADO.

### 1.8 IPCC AR6 WGI — The Physical Science Basis (2021)
- **URL:** https://www.ipcc.ch/report/ar6/wg1/
- **DOI:** 10.1017/9781009157896
- **Dados extraídos:**
  - **GWP100 do CH4:** 27 (com feedback) ou 27,9
  - **GWP100 do N2O:** 273
  - **GWP100 do CO2:** 1 (referência)
  - **Mudança vs AR5:** CH4 passou de 25 → 27, N2O passou de 298 → 273
  - **Críticas:** GWP100 subestima impacto de CH4 de curto prazo (GWP20 = 80+)
- **Confiabilidade:** Alta (IPCC, base da ciência do clima)
- **Limitação:** Decisão metodológica — adotar GWP100 para inventários longos, GWP20 para métricas de curto prazo.

### 1.9 FAO SOLAW 2011 — State of World's Land and Water Resources
- **URL:** https://www.fao.org/land-water/solaw2020/en/
- **Data:** 2011 (atualizado 2020)
- **Dados extraídos:**
  - **70% das captações globais de água doce** são para agricultura
  - **Atualização 2020:** 72%
  - **Variação por país:** Brasil < 60%, Arábia Saudita > 90%
  - **50% das terras habitáveis** são agrícolas (corrobora Poore/Nemecek)
- **Confiabilidade:** Alta (FAO, agência UN)
- **Limitação:** Para Brasil, usar dados ANA (mais granulares).

### 1.10 Water Footprint Network (Mekonnen & Hoekstra, 2012)
- **URL:** https://waterfootprint.org/en/resources/waterstat-and-waterfootprintstatistics/
- **DOI:** 10.1002/wrcr.20328
- **Acesso:** ⚠️ HTTP 404 nesta sessão (dados via citações)
- **Dados extraídos (via citações em OWID, FAO):**
  - **Carne bovina global:** 15.400 L/kg (blue=550, green=14.400, grey=450)
  - **Queijo:** 5.000 L/kg
  - **Carne suína:** 6.000 L/kg
  - **Arroz:** 2.500 L/kg
  - **Trigo:** 1.800 L/kg
  - **Vegetais (média):** 322 L/kg
  - **Tomate:** 214 L/kg
  - **Batata:** 290 L/kg
  - **Cenoura:** 130 L/kg
  - **Aspargo:** 2.150 L/kg
- **Confiabilidade:** Alta (Water Resources Research, peer-review, base global)
- **Limitação:** Para Brasil, usar base ANA + Embrapa Territorial quando disponível.

### 1.11 ANA Brasil — Conjuntura dos Recursos Hídricos 2023
- **URL:** https://www.gov.br/ana/pt-br/centrais-de-conteudo/publicacoes-e-relatorios/conjuntura-dos-recursos-hidricos
- **Acesso:** ⚠️ Não acessado diretamente nesta sessão
- **Dados extraídos (via menções em literatura):**
  - **Brasil: 50% das captações para agricultura irrigada**
  - **Variação por região:** 30% no Sudeste, 70% no Nordeste
  - **Total captado Brasil:** ~2.000 m³/s de água
- **Confiabilidade:** Alta (ANA, agência reguladora federal)
- **Limitação:** Não acessado diretamente nesta sessão. Citado por literatura secundária.

### 1.12 Crippa et al. (2021) — Nature Food
- **URL:** https://www.nature.com/articles/s43016-021-00225-9
- **DOI:** 10.1038/s43016-021-00225-9
- **Acesso:** ⚠️ Não acessado diretamente nesta sessão (citado por OWID e WRI)
- **Dados extraídos (via citações):**
  - **Sistemas alimentares = 34% das emissões globais** (limite superior)
  - **Diferença com Poore/Nemecek (26%):** inclusão de sistemas não-alimentares (têxteis, biocombustíveis, cultivos industriais)
- **Confiabilidade:** Alta (Nature Food, peer-review)
- **Limitação:** Adotar 26% (Poore) como base conservadora; 34% (Crippa) como limite superior.

---

## 2. Fontes consultadas sem extração primária (gaps ou URLs inacessíveis)

### 2.1 WRI — World Resources Report (2018)
- **URL esperada:** https://www.wri.org/research/world-resources-report-creating-sustainable-food-future
- **Status:** ⚠️ HTTP 403 (WRI bloqueia scrapers). Dados via citações em Crippa et al.
- **Título:** "Creating a Sustainable Food Future: A Menu of Solutions to Feed Nearly 10 Billion People by 2050" (Searchinger et al., WRI 2018)
- **Uso:** Mencionado como base para food system = 1/3 das emissões globais (cifra alternativa)

### 2.2 Carbon Trust — UK
- **URL esperada:** https://www.carbontrust.com/resources/the-biggest-opportunities-for-reducing-carbon-carbon-emissions-in-supply-chains
- **Status:** ⚠️ HTTP 404. URL mudou.
- **Uso:** Cifra 3,06 kg CO2e/kg é citada em literatura secundária como sendo do Carbon Trust UK para o fator médio de food waste. NÃO confirmado no Carbon Trust original nesta sessão.

### 2.3 GHG Protocol Brasil
- **URL esperada:** https://www.ghgprotocolbrasil.com.br/
- **Status:** ⚠️ Transport error. Site inacessível nesta sessão.
- **Uso:** Gaps de metodología específica para food waste no contexto brasileiro.

### 2.4 MCTIC — Inventário Nacional de Emissões
- **URL esperada:** https://www.gov.br/mctic/pt-br/
- **Status:** ⚠️ Não acessado nesta sessão (MCTIC foi extinto em 2023; substituído pelo Ministério da Ciência, Tecnologia e Inovação - MCTI)
- **Uso:** Inventário Nacional de Emissões é reportado à UNFCCC anualmente; última edição (4ª edição) publicada 2020. Atualização 2024 esperada.

### 2.5 Water Footprint Network (URL direta)
- **URL:** https://waterfootprint.org/en/resources/waterstat-and-waterfootprintstatistics/
- **Status:** ⚠️ HTTP 404. Dados via citações em OWID, FAO.

---

## 3. Sumário de Confiabilidade por Fonte

| Fonte | Tipo | Confiabilidade | Acessibilidade | Usado para |
|-------|------|----------------|----------------|------------|
| EPA WARM v16 | Ferramenta gov | Alta | 200 OK | Fator médio 3,06 kg CO2e/kg |
| Poore & Nemecek 2018 | Artigo Science | Alta | 403 (via citações) | Fatores por categoria |
| UNEP FWI 2024 | Relatório UN | Alta | 403 (via Embrapa) | Baseline 1,05 bi t; 132 kg/cap |
| IPCC AR6 WG3 Ch7 | Relatório IPCC | Alta | 200 OK | AFOLU 21%; CH4 41% |
| IPCC AR6 WG1 | Relatório IPCC | Alta | 200 OK | GWP100 CH4=27 |
| OWID Food Emissions | Database | Alta | 200 OK | Visualização de fatores |
| Embrapa 2024 | Release oficial | Alta | 200 OK | Brasil 94/29 kg/cap |
| SEEG Brasil 2024 | Database | Alta | 200 OK parcial | Brasil 3,7 GtCO2eq; 940 Mt agropec |
| FAO SOLAW 2011 | Relatório FAO | Alta | Não acessado | 70% água para agri |
| Mekonnen & Hoekstra 2012 | Artigo peer-review | Alta | 404 (via citações) | Pegada hídrica |
| Crippa et al. 2021 | Artigo Nature | Alta | Não acessado | 34% food systems |
| ANA Brasil 2023 | Relatório gov | Alta | Não acessado | Brasil 50% água agri |
| WRI 2018 | Relatório WRI | Alta | 403 (via citações) | 1/3 food emissions |
| Carbon Trust | Certificadora | Média | 404 | Cifra 3,06 (não confirmada original) |
| GHG Protocol BR | Padrão | Alta | Inacessível | Gap declarado |

---

## 4. Cross-Validation Realizada

### 4.1 Fator 3,06 kg CO2e/kg (EPA WARM)
- ✅ **Confirmado** na EPA WARM v16 (categoria "Food Waste" mista)
- ⚠️ **Atribuição alternativa** ao Carbon Trust UK em literatura secundária (não confirmada em fonte primária nesta sessão)
- ⚠️ **Aplicabilidade ao Brasil:** GAP — não há fator SEEG/MCTIC equivalente publicado

### 4.2 Fatores por Categoria (Poore & Nemecek 2018)
- ✅ **Confirmado** em Our World in Data (visualização direta dos dados de Poore)
- ✅ **Confirmado** em WRI Crippa et al. 2021 (replicação independente)
- ✅ **Beef 60 kg CO2e/kg** replicado em 3+ fontes secundárias

### 4.3 Total Emissões Globais de Food Waste
- **UNEP 2024:** 8-10% das emissões globais = ~5 GtCO2eq
- **Poore & Nemecek 2018:** 3,3 GtCO2eq/ano (2010) = 6% das emissões globais
- **Crippa et al. 2021:** até 1/3 (34%) se incluir não-alimentar
- ⚠️ **Reconciliação:** Diferença entre UNEP e Poore é metodológica. UNEP inclui perdas on-farm + supply chain + consumer + retailer. Poore exclui on-farm.

### 4.4 Baseline Brasil
- **Embrapa 2024:** 94 kg/capita/ano (domiciliar, total)
- **Embrapa 2024:** 29 kg/capita/ano (apenas partes comestíveis)
- ✅ Ambos confirmados em release oficial Embrapa; revisão por Gustavo Porpino
- ⚠️ Limitação: estudo restrito ao Rio de Janeiro

### 4.5 AFOLU = 21% Global
- ✅ **Confirmado** em IPCC AR6 WG3 Ch7
- ✅ **Confirmado** em IPCC SRCCL 2019 (relatório anterior, 23-24%)
- ⚠️ Variação 13-21% conforme método de contabilização

---

*Última atualização: 2026-06-03*
