# Batch 04 — Consumer Behavior: Persona Brasileira

> **Status:** 🟢 Concluído
> **Last Updated:** 2026-06-03
> **Fase:** 3 — Persona & Impacto
> **Integra com:** PRD_03 (Texto Descritivo — Público-Alvo), PRD_02 (Segmentos de Clientes)

---

## 🎯 Objetivo deste Batch

Construir a persona do usuário brasileiro do Waste Guardian com dados quantitativos oficiais. Responder: "Quem é a pessoa que vai usar o app, o que ela faz, quanto ganha, quanto está disposta a pagar?"

---

## ❓ Perguntas de Pesquisa

- **Q4.1:** Qual o perfil socioeconômico das famílias que mais desperdiçam alimentos?
- **Q4.2:** Quais os motivos primários do desperdício domiciliar brasileiro?
- **Q4.3:** Qual a penetração de smartphones por classe social?
- **Q4.4:** Qual a receptividade a apps de sustentabilidade no Brasil?
- **Q4.5:** Qual o WTP (willingness to pay) por app de finanças/sustentabilidade?
- **Q4.6:** Como famílias brasileiras interagem com tecnologia de cozinha?
- **Q4.7:** Qual a jornada de compra de alimentos da família média brasileira?

---

## 📚 Fontes Prioritárias

| # | Fonte | URL | Tipo |
|---|-------|-----|------|
| 1 | IBGE PNAD Contínua | `https://www.ibge.gov.br/...` | Pesquisa |
| 2 | IBGE POF 2017-2018 | `https://www.ibge.gov.br/...` | Pesquisa |
| 3 | ABEP — Critério Brasil 2022 | `https://www.abep.org/` | Classe social |
| 4 | Kantar Worldpanel Brasil | `https://www.kantar.com/worldpanel/` | Consumer research |
| 5 | GfK Brasil | `https://www.gfk.com/...` | Consumer research |
| 6 | Datafolha | `https://datafolha.folha.uol.com.br/` | Opinião |
| 7 | Tic Domicílios — CGI.br | `https://www.cgi.br/...` | TIC pesquisa |
| 8 | ABComm | `https://www.abcomm.org/` | E-commerce |
| 9 | 99 APPs / Bain | `https://www.bain.com/` | Apps Brasil |
| 10 | Valor — Mercado Consumidor | `https://valor.globo.com/...` | Notícias |

---

## 📂 Estrutura de Saída Esperada

```
batch_04_consumer_behavior/
├── README.md
├── data/
│   ├── raw/
│   ├── processed/
│   │   ├── personas_brasileiras.json
│   │   ├── smartphone_penetration.json
│   │   ├── wtp_benchmarks.json
│   │   └── purchase_journey.json
│   └── citations.md
└── analysis/
    ├── interpretation.md
    └── research_questions.md
```

---

## 🎯 Critérios de Conclusão

- [x] 3 personas brasileiras com dados quantitativos
- [x] Distribuição de renda por classe (A-E)
- [x] Penetração de smartphone por classe
- [x] WTP médio para apps freemium
- [x] Motivos primários do desperdício (ranking)
- [x] Mínimo 20 métricas em JSON (entregues ~60 métricas)

## 📊 Outputs Entregues

- **3 personas quantitativas:** Maria Silva (B1, R$11.500), João Santos (C1, R$3.200), Dona Lourdes (C2, R$2.400)
- **Smartphone por classe (CETIC.br 2024):** A=94%, B=98%, C=90%, DE=77%
- **Renda média por classe (ABEP 2022):** A=R$21.827 / B1=R$10.361 / C1=R$3.277 / DE=R$900
- **WTP recomendado:** R$9,90/mês (sweet spot) — Free + Premium + Família
- **Motivos do desperdício:** 21% são panificados + hortifruti (categorias de foco)
- **TAM:** 65,3 milhões de famílias alcançáveis com smartphone
- **~60 métricas em 4 JSONs** + 2 docs de análise (interpretation.md, research_questions.md) + 14 fontes em citations.md

## 📚 Fontes Utilizadas

1. CETIC.br — TIC Domicílios 2024 (J2, A4, J5) — penetração smartphone
2. ABEP — Critério Brasil 2022 (CCEB base PNADC 2021) — classes sociais + renda
3. Embrapa + UNEP — Food Waste Index Report 2024 (piloto Brasil) — desperdício per capita
4. Embrapa — Cidades e Alimentação 2023 — gravimetria feiras
5. IBGE POF 2017-2018 — orçamento familiar
6. UNEP FWI 2024 — dados globais
7. MDS — II Estratégia PDA 2025
8. Kantar Worldpanel Brasil 2024 — comportamento de consumo
9. ABComm — Webshoppers 2024 — e-commerce
10. Apps brasileiros (Nubank, iFood, Rappi, Too Good To Go, Yuka) — benchmarking WTP
