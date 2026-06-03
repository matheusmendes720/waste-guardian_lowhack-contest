# Batch 02 — Environmental Impact: CO₂ e Pegada Ecológica

> **Status:** 🟢 Concluído  
> **Last Updated:** 2026-06-03  
> **Fase:** 1 — Contexto & Problema  
> **Integra com:** PRD_03 (Texto Descritivo — Inovação), PRD_04 (Métricas ODS — 11.6, 13.3)  
> **Métricas extraídas:** 37 (mínimo: 15) ✅  
> **Fontes documentadas:** 15 (mínimo: 5) ✅  
> **Cross-validation:** 5/6 perguntas ✅

---

## 🎯 Objetivo deste Batch

Estabelecer o fator de emissão de CO₂ por kg de alimento desperdiçado no contexto brasileiro, e projetar o impacto ambiental evitado pelo Waste Guardian. Responder: "Quanto CO₂ estamos evitando quando salvamos 1kg de alimento?"

---

## ❓ Perguntas de Pesquisa

- **Q2.1:** Qual o fator de emissão CO₂ (kg CO₂e / kg alimento desperdiçado) usado pelo EPA?
- **Q2.2:** Como esse fator varia por categoria de alimento (carnes, laticínios, frutas, legumes, grãos)?
- **Q2.3:** Qual o fator de emissão específico para o Brasil (vs EUA)?
- **Q2.4:** Quanto CO₂ a cadeia alimentar brasileira emite anualmente (baseline)?
- **Q2.5:** Qual a metodologia GHG Protocol para contabilizar food waste?
- **Q2.6:** Qual a pegada hídrica associada (m³/caloria) como métrica complementar?

---

## 📚 Fontes Prioritárias

| # | Fonte | URL Provável | Tipo |
|---|-------|--------------|------|
| 1 | EPA Waste Reduction Model (WARM) | `https://www.epa.gov/warm` | Ferramenta |
| 2 | SEEG Brasil — Observatório do Clima | `https://seeg.eco/` | Base de dados |
| 3 | MCTIC — Inventário Nacional Emissões | `https://www.gov.br/mctic/...` | Relatório |
| 4 | IPCC AR6 Working Group III | `https://www.ipcc.ch/report/ar6/wg3/` | Relatório |
| 5 | Embrapa Meio Ambiente | `https://www.embrapa.br/meio-ambiente` | Pesquisa |
| 6 | GHG Protocol Brasil | `https://www.ghgprotocolbrasil.com.br/` | Padrão |
| 7 | FAO — Food Wastage Footprint | `https://www.fao.org/...` | Relatório |
| 8 | Carbon Trust — UK | `https://www.carbontrust.com/` | Certificadora |
| 9 | Our World in Data — Food emissions | `https://ourworldindata.org/...` | Visualização |
| 10 | WRI — World Resources Institute | `https://www.wri.org/` | Pesquisa |

---

## 📂 Estrutura de Saída Esperada

```
batch_02_environmental_impact/
├── README.md
├── data/
│   ├── raw/                          ← PDFs baixados
│   ├── processed/
│   │   ├── co2_emission_factors.json ← Fatores por categoria
│   │   ├── brazil_food_emissions.json ← Baseline Brasil
│   │   └── ghg_methodology.json       ← Metodologia
│   └── citations.md
└── analysis/
    ├── interpretation.md             ← Respostas Q2.1-Q2.6
    └── research_questions.md
```

---

## 🎯 Critérios de Conclusão

- [x] Fator EPA documentado com link (3,06 kg CO₂e/kg — WARM v16)
- [x] Fatores por categoria de alimento (9 categorias: beef, lamb, cheese, pork, chicken, eggs, tofu, nuts, beans)
- [x] Fator Brasil específico (estimativa 1,8 kg CO₂e/kg com disclaimer — EPA WARM não tem versão BR)
- [x] Baseline de emissões alimentares do Brasil (3,7 GtCO₂eq total; Agro 940 MtCO₂eq + Resíduos 110 MtCO₂eq)
- [x] Metodologia GHG Protocol explicada (Escopo 1+3, 5 passos, EPA WARM + Poore/Nemecek)
- [x] Mínimo 15 métricas em JSON (37 extraídas — 2,5x acima do mínimo)

## 📊 Resumo de Outputs

| Arquivo | Conteúdo | Status |
|---------|----------|--------|
| `data/processed/co2_emission_factors.json` | 37 métricas + 15 fontes estruturadas | ✅ |
| `data/citations.md` | 15 fontes com URL, data, autor, reliability | ✅ |
| `analysis/interpretation.md` | Respostas Q2.1-Q2.6 em PT-BR (5+ páginas) | ✅ |
| `analysis/research_questions.md` | Q&A estruturado com cross-validation | ✅ |
