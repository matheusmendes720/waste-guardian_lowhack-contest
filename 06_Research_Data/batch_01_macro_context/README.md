# Batch 01 — Macro Context: Desperdício Alimentar no Brasil

> **Status:** ⏳ Pendente  
> **Last Updated:** 2026-06-03  
> **Fase:** 1 — Contexto & Problema  
> **Integra com:** PRD_03 (Texto Descritivo — Problema), PRD_04 (Métricas ODS)

---

## 🎯 Objetivo deste Batch

Quantificar o desperdício alimentar no Brasil com dados primários oficiais para fundamentar as métricas de impacto do Waste Guardian. O objetivo é responder: "Qual o tamanho do problema que estamos atacando?"

---

## ❓ Perguntas de Pesquisa

- **Q1.1:** Qual o total de toneladas de alimentos desperdiçados por ano no Brasil?
- **Q1.2:** Qual o valor econômico anual perdido (em R$)?
- **Q1.3:** Como o desperdício se distribui por segmento (domiciliar, varejo, indústria, restaurantes)?
- **Q1.4:** Como o Brasil se compara globalmente (ranking UNEP)?
- **Q1.5:** Qual a tendência temporal (aumentando, diminuindo, estagnado)?
- **Q1.6:** Qual o desperdício médio por família brasileira (kg/semana)?
- **Q1.7:** Qual a perda econômica média por família/mês?

---

## 📚 Fontes Prioritárias

| # | Fonte | URL Provável | Tipo | O que Extrair |
|---|-------|--------------|------|---------------|
| 1 | Senado Federal — Relatório Desperdício 2024 | `https://www12.senado.leg.br/...` | Relatório | R$ 61,3 bi/ano |
| 2 | IBGE POF 2017-2018 | `https://www.ibge.gov.br/estatisticas/sociais/pof.html` | Pesquisa | Aquisição familiar |
| 3 | IBGE Pesquisa Desperdício | `https://www.ibge.gov.br/...` | Pesquisa | Dados específicos |
| 4 | Embrapa — Desperdício na Cadeia | `https://www.embrapa.br/...` | Relatório técnico | Dados setoriais |
| 5 | FAO Brasil | `https://www.fao.org/brazil/pt/` | Relatório | Comparativo global |
| 6 | ABIA — Assoc. Bras. Ind. Alimentação | `https://www.abia.org.br/...` | Relatório setorial | Dados F&B |
| 7 | UNEP Food Waste Index 2024 | `https://www.unep.org/...` | Relatório global | Ranking mundial |
| 8 | Valor Econômico — Artigo R$ 61,3 bi | `https://valor.globo.com/...` | Notícia | Cifra consolidada |
| 9 | Ministério do Desenvolvimento Social | `https://www.gov.br/mds/...` | Política pública | Programas fome zero |
| 10 | CONAB — Companhia Nacional Abastecimento | `https://www.conab.gov.br/...` | Relatório | Perdas pós-colheita |

---

## 📂 Estrutura de Saída Esperada

```
batch_01_macro_context/
├── README.md                        ← Este arquivo
├── data/
│   ├── raw/                         ← PDFs baixados (se acessível)
│   │   └── *.pdf
│   ├── processed/
│   │   └── desperdicio_brasil.json  ← Schema padrão
│   └── citations.md                 ← Todas as fontes
└── analysis/
    ├── interpretation.md            ← Respostas às Q1.1-Q1.7
    └── research_questions.md        ← Q&A com evidências
```

---

## 📊 Schema JSON Esperado

Mínimo 20 métricas. Exemplo:

```json
{
  "batch_id": "batch_01_macro_context",
  "last_updated": "2026-06-03",
  "version": "1.0",
  "metrics": [
    {
      "id": "macro_001",
      "name": "Desperdício total Brasil",
      "value": 46000000,
      "unit": "toneladas/ano",
      "year": 2024,
      "source_id": "senado_2024",
      "confidence": "high",
      "methodology": "Estimativa baseada em...",
      "limitations": "Faixa varia entre 20-82M dependendo da metodologia"
    }
  ]
}
```

---

## 🎯 Critérios de Conclusão

- [ ] Mínimo 5 fontes primárias baixadas ou documentadas
- [ ] Mínimo 20 métricas extraídas em JSON
- [ ] `citations.md` com URL + data de acesso + autor
- [ ] `interpretation.md` responde TODAS as 7 perguntas
- [ ] Validação cruzada com 2+ fontes para cifras-chave
- [ ] Gaps explicitamente declarados
