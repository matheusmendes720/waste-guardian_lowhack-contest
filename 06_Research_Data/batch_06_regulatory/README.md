# Batch 06 — Regulatory: Leis, Compliance, Incentivos

> **Status:** ⏳ Pendente  
> **Last Updated:** 2026-06-03  
> **Fase:** 2 — Mercado & Negócio  
> **Integra com:** PRD_02 (Compliance), PRD_04 (Lei 14.016)

---

## 🎯 Objetivo deste Batch

Mapear o arcabouço legal que afeta o Waste Guardian: lei de doação de alimentos, LGPD, regulação ANVISA, incentivos fiscais ESG. Responder: "Quais leis regem nosso negócio e como estamos em compliance?"

---

## ❓ Perguntas de Pesquisa

- **Q6.1:** O que diz exatamente a Lei 14.016/2020 (doação de alimentos)?
- **Q6.2:** Quais incentivos fiscais para empresas que investem em ESG/sustentabilidade?
- **Q6.3:** Como funciona o Selo Verde, B Corp, e certificações ESG no Brasil?
- **Q6.4:** Quais regulações da ANVISA se aplicam a alimentos doados?
- **Q6.5:** LGPD — implicações para dados de consumo coletados pelo app?
- **Q6.6:** Qual a responsabilidade civil do doador (Lei 14.016)?
- **Q6.7:** Marco Legal das Startups — aplicabilidade?

---

## 📚 Fontes Prioritárias

| # | Fonte | URL | Tipo |
|---|-------|-----|------|
| 1 | Planalto — Lei 14.016/2020 | `https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14016.htm` | Lei |
| 2 | Planalto — LGPD Lei 13.709/2018 | `https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm` | Lei |
| 3 | ANVISA — RDC sobre alimentos | `https://www.gov.br/anvisa/pt-br` | Regulação |
| 4 | Receita Federal — Lei do Bem | `http://www.planalto.gov.br/ccivil_03/leis/L11961.htm` | Incentivo |
| 5 | ANBIMA — ESG em Renda Variável | `https://www.anbima.com.br/` | Padrão |
| 6 | B3 — ISE B3 | `https://www.b3.com.br/` | Índice ESG |
| 7 | B Corp Brasil | `https://www.bcorporation.net/...` | Certificação |
| 8 | Fundação Grupo Boticário | `https://www.grupoboticario.com.br/...` | Case ESG |
| 9 | Sistema B Brasil | `https://www.sistemabbrasil.com/...` | Movimento B |
| 10 | ANPD — Autoridade Nacional de Proteção de Dados | `https://www.gov.br/anpd/` | LGPD regulator |

---

## 📂 Estrutura de Saída Esperada

```
batch_06_regulatory/
├── README.md
├── data/
│   ├── raw/
│   ├── processed/
│   │   ├── lei_14016_summary.json
│   │   ├── lgpd_requirements.json
│   │   ├── anvisa_rdc_summary.json
│   │   ├── fiscal_incentives.json
│   │   └── compliance_checklist.json
│   └── citations.md
└── analysis/
    ├── interpretation.md
    └── research_questions.md
```

---

## 🎯 Critérios de Conclusão

- [ ] Lei 14.016/2020 resumida com implicações
- [ ] LGPD checklist para o app
- [ ] Incentivos fiscais aplicáveis (mínimo 3)
- [ ] Certificações ESG disponíveis
- [ ] Compliance checklist para Waste Guardian
- [ ] Mínimo 20 métricas em JSON
