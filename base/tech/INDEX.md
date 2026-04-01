# 💻 TECH — Document Index

> Technical implementation guides: Mendix, GenAI, REST API, UI/UX for Low Hack 2026.

---

## 📚 Documents Overview

| Document | Description | When to Read |
|----------|-------------|--------------|
| **Mendix Bootcamp** | Fast-track learning for Mendix | Before event |
| **Domain Model** | Entity design for Waste Guardian | Before coding |
| **GenAI Prompts** | Prompt engineering guide | Before integration |
| **UI Wireframes** | Page layouts (Atlas UI) | During UI phase |
| **REST API + Microflows** | Integration logic guide | During API phase |
| **Test Script** | Node.js CLI to test OpenAI | Before event |

---

## 🚀 Quick Navigation

### Start Here (Technical Foundation)

1. **[Mendix Bootcamp Fast-Track](../scaffolding/tech/00-mendix-bootcamp-fast-track.md)** — START for technical prep
   - Quick tutorials
   - Key concepts
   - Studio Pro setup

2. **[Domain Model Design](../scaffolding/tech/01-mendix-domain-model.md)** — DATA ARCHITECTURE
   - Entities: LinhaProducao, EventoDesperdicio, IndicadorSustentabilidade, AcaoRecomendada
   - Attributes and associations
   - Persistence design

3. **[GenAI Prompt Engineering](../scaffolding/tech/02-genai-prompts.md)** — AI IMPLEMENTATION
   - System prompts
   - JSON output parsing
   - Error handling

### During Build

4. **[UI Wireframes (Atlas)](../scaffolding/tech/03-mendix-ui-wireframes.md)** — PAGE LAYOUTS
   - Dashboard (Visão Geral)
   - Detail page (Detalhe da Linha)
   - Action page (Plano de Ação)
   - Dark mode B2B styling

5. **[REST API + Microflow Logic](../scaffolding/tech/04-rest-api-microflow-logic.md)** — INTEGRATION
   - OpenAI API call
   - Microflow design patterns
   - Response parsing

6. **[Test Script (Node.js)](../scaffolding/tech/05-test-openai-script.js)** — TESTING
   - CLI tool to test API calls
   - Prompt validation
   - Response format checking

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Mendix Studio Pro** | Low-code development environment |
| **Mendix Cloud (Free Tier)** | Deployment target |
| **OpenAI API (GPT)** | GenAI integration |
| **REST API** | Communication between Mendix and OpenAI |
| **Atlas UI** | Design system for Mendix pages |

---

## 📋 Implementation Checklist

```
□ Install Mendix Studio Pro
□ Create Free Tier account in Mendix Cloud
□ Set up OpenAI API key (provided by event)
□ Test API connectivity with script
□ Design domain model in Mendix
□ Create 3 navigable pages
□ Implement CRUD for all entities
□ Build microflow for event registration
□ Build microflow for GenAI integration
□ Test end-to-end flow
□ Deploy to Mendix Cloud
□ Verify public link accessibility
```

---

## 🔧 Key Technical Details

### Entities (Domain Model)
```
LinhaProducao
├── id
├── nome
├── tipoProduto
├── capacidade
└── status

EventoDesperdicio
├── id
├── dataHora
├── linhaProducao (Association)
├── quantidadeProduzida
├── quantidadeDescartada
├── causaProvavel
└── turno

IndicadorSustentabilidade
├── id
├── periodo
├── linhaProducao (Association)
├── desperdicioPercentual
├── energiaPorUnidade
└── custoEstimadoPerda

AcaoRecomendada
├── id
├── textoAcao
├── prioridade (Alta/Média/Baixa)
├── impactoEstimado
└── status
```

### Microflows Required
1. **MF_RegistrarEventoDesperdicio** — Create event + recalculate
2. **MF_CalcularIndicadores** — Aggregate metrics
3. **MF_GerarPlanoAcaoGenAI** — Call OpenAI → create recommendations

### Pages Required (Minimum 3)
1. **Dashboard / Visão Geral** — Lines with KPI indicators
2. **Detalhe da Linha** — Events list + "Generate IA Action" button
3. **Plano de Ação** — AI recommendations + explanations

---

## 🧪 Testing Resources

- **Mock Dataset:** [../scaffolding/tech/mock-dataset-industria-alimentos.csv](../scaffolding/tech/mock-dataset-industria-alimentos.csv)
- **Test Script:** [../scaffolding/tech/05-test-openai-script.js](../scaffolding/tech/05-test-openai-script.js)

---

## 📖 Related Sections

| Section | Focus Area |
|---------|------------|
| **[Strategy](../strategy/INDEX.md)** | Analysis and planning |
| **[Pitch](../pitch/INDEX.md)** | Presentation scripts |
| **[Business](../business/INDEX.md)** | Business model & metrics |

---

## 🔙 Back to Main Index

[← Return to INDEX.md](../INDEX.md)
