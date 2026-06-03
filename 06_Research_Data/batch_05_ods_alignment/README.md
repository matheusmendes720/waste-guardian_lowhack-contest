# Batch 05 — ODS Alignment: Indicadores Brasil

> **Status:** 🟢 Concluido  
> **Last Updated:** 2026-06-03  
> **Fase:** 1 — Contexto & Problema  
> **Integra com:** PRD_03 (Alinhamento ODS), PRD_04 (Métricas ODS — metas oficiais)  
> **Outputs:** 30 metricas + 12 fontes documentadas + 7/7 perguntas respondidas

---

## 🎯 Objetivo deste Batch

Documentar o status oficial do Brasil nos 4 ODS do projeto (2, 11, 12, 13) e as metas nacionais vigentes. Responder: "Como o Brasil está performando nesses ODS e quais são as metas oficiais?"

---

## ❓ Perguntas de Pesquisa

- **Q5.1:** Qual o status atual do Brasil no indicador ODS 2.1 (fome)?
- **Q5.2:** Qual o status do Brasil no ODS 11.6 (qualidade do ar e gestão de resíduos)?
- **Q5.3:** Qual o status do Brasil no ODS 12.3 (desperdício alimentar)?
- **Q5.4:** Qual o status do Brasil no ODS 13.3 (educação climática)?
- **Q5.5:** Quais as metas nacionais do PlanClima, PNAS, Plano Nacional de Resíduos Sólidos?
- **Q5.6:** Como iniciativas similares (Mesa Brasil SESC, Banco de Alimentos) já operam?
- **Q5.7:** Qual o gap quantitativo entre meta 12.3 e a realidade brasileira?

---

## 📚 Fontes Prioritárias

| # | Fonte | URL | Tipo |
|---|-------|-----|------|
| 1 | IBGE — Indicadores ODS | `https://www.ibge.gov.br/...` | Indicadores oficiais |
| 2 | IPEA — Atlas ODS | `https://www.ipea.gov.br/...` | Atlas |
| 3 | ONU Brasil — SDGs | `https://brasil.un.org/pt-br/sdgs` | Status oficial |
| 4 | PNAS — Segurança Alimentar | `https://www.gov.br/mds/...` | Plano nacional |
| 5 | PlanClima — MMA | `https://www.gov.br/mma/...` | Plano clima |
| 6 | Plano Nacional Resíduos Sólidos | `https://www.gov.br/mma/...` | Lei 12.305/2010 |
| 7 | Mesa Brasil SESC | `https://www.sescsp.org.br/...` | Case reference |
| 8 | Banco de Alimentos | `https://www.bancodealimentos.org.br/` | Case reference |
| 9 | SDG Knowledge Hub | `https://sdgs.un.org/...` | Hub global |
| 10 | MMA — Indicadores Meio Ambiente | `https://www.gov.br/mma/...` | Indicadores |

---

## 📂 Estrutura de Saída Esperada

```
batch_05_ods_alignment/
├── README.md
├── data/
│   ├── raw/
│   ├── processed/
│   │   ├── ods_2_status.json
│   │   ├── ods_11_status.json
│   │   ├── ods_12_status.json
│   │   ├── ods_13_status.json
│   │   └── national_targets.json
│   └── citations.md
└── analysis/
    ├── interpretation.md
    └── research_questions.md
```

---

## 🎯 Critérios de Conclusão

- [x] Status oficial de cada um dos 4 ODS (com dados quantitativos) — 30 métricas no JSON
- [x] Metas nacionais (PNAS, PlanClima) documentadas — 16 documentos em national_targets.json
- [x] Cases brasileiros de referência (SESC, Banco Alimentos) — Mesa Brasil SESC SP + OBA
- [x] Gap quantitativo meta vs realidade — Q5.7 em interpretation.md
- [x] Mínimo 20 métricas em JSON — 30 métricas extraidas (superou o minimo)

## 📂 Estrutura Final

```
batch_05_ods_alignment/
├── README.md
├── data/
│   ├── raw/                          (vazio - sem downloads brutos)
│   ├── processed/
│   │   ├── ods_brasil.json           (30 metricas + 12 fontes)
│   │   ├── ods_2_status.json
│   │   ├── ods_11_status.json
│   │   ├── ods_12_status.json
│   │   ├── ods_13_status.json
│   │   └── national_targets.json     (16 documentos/planos)
│   └── citations.md                  (12 fontes documentadas)
└── analysis/
    ├── interpretation.md             (resposta das 7 perguntas + gap analysis)
    └── research_questions.md         (Q&A rapido)
