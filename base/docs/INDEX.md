# 📚 MASTER DOCUMENTATION — Index

> **Documentos Maestro: Roadmap, System Design e Product Design**  
> **Low Hack 2026 — Waste Guardian**

---

## 📖 Visão Geral

Este seção contém os três documentos principais que fornecem a visão completa do projeto:

| Document | Focus | Páginas |
|----------|-------|---------|
| **[ROADMAP.md](ROADMAP.md)** | Timeline, fases, dependências, deadlines | ~10 |
| **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** | Arquitetura técnica Mendix + GenAI | ~12 |
| **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** | Pesquisa indústria, personas, produto | ~10 |

---

## 🚀 Leitura Recomendada por Fase

### 📋 Pré-Competição (Antes de 18/04)

1. **[ROADMAP.md](ROADMAP.md)** — Seção 1-3
   - Cronograma oficial
   - Decomposição de requisitos
   
2. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seção 1-4
   - Pesquisa de mercado
   - Personas
   - Jornadas

3. **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** — Seção 1-5
   - Arquitetura geral
   - Domain Model
   - Fluxo de integração

### ⚔️ Durante Competição (18-19/04)

1. **[ROADMAP.md](ROADMAP.md)** — Seção 4-5
   - Cronograma hora a hora
   - Checklist de entregas
   
2. **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** — Seção 3-7
   - Microflows específicos
   - Configuração API
   - Deploy

3. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seção 5-7
   - Feature list
   - Métricas de sucesso

### 📊 Pós-Competição (Após 24/04)

1. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seção 9
   - Roadmap de produto V2.0
   - Evolução pós-hackathon

---

## 📊 Diagrama de Relação entre Documentos

```mermaid
flowchart TB
    subgraph MASTER["MASTER DOCS"]
        R["ROADMAP"]
        SY["SYSTEM-DESIGN"]
        PD["PRODUCT-DESIGN"]
    end
    
    subgraph STRAT["ESTRATÉGIA"]
        STR["strategy/INDEX.md"]
    end
    
    subgraph TECH["TECNOLOGIA"]
        TECH["tech/INDEX.md"]
    end
    
    subgraph PITCH["APRESENTAÇÃO"]
        PCH["pitch/INDEX.md"]
    end
    
    subgraph BIZ["NEGÓCIOS"]
        BIZ["business/INDEX.md"]
    end
    
    R --> SY
    R --> PD
    SY --> TECH
    PD --> BIZ
    STR --> R
    
    style MASTER fill:#e3f2fd
    style STRAT fill:#fff3e0
    style TECH fill:#e8f5e9
    style PITCH fill:#f3e5f7
    style BIZ fill:#ffecce
```

---

## 📑 Estrutura Detalhada

### ROADMAP.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Visão Geral do Roadmap (diagrama) |
| 2 | Cronograma Oficial (Edital) |
| 3 | Decomposição: Edital → Negócio → Tática → Software |
| 4 | Matriz de Entregas por Prioridade |
| 5 | Fluxo de Dependências (Critical Path) |
| 6 | Checklist de Conformidade |
| 7 | Referências Cruzadas |
| 8 | Resumo Visual (Gantt) |

### SYSTEM-DESIGN.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Visão Geral da Arquitetura (diagrama alto nível) |
| 2 | Camada de Dados: Domain Model + ERD |
| 3 | Camada de Aplicação: Microflows + Nanoflows |
| 4 | Camada de Integração: OpenAI API + Fallback |
| 5 | Camada de Apresentação: Páginas + Atlas UI |
| 6 | Camada de Segurança: Roles + Permissões |
| 7 | Deploy e Infraestrutura |
| 8 | Testes e Validação |
| 9 | Referências Cruzadas |

### PRODUCT-DESIGN.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Resumo Executivo |
| 2 | Pesquisa de Mercado: Indústria F&B |
| 3 | Personas (Operador, Supervisor, Gestor) |
| 4 | Jornadas do Usuário |
| 5 | Especificação de Funcionalidades |
| 6 | Métricas de Sucesso (KPIs) |
| 7 | Modelo de Negócio (Canvas) |
| 8 | Competição e Diferenciação |
| 9 | Roadmap de Produto |
| 10 | Referências Cruzadas |

### README-FINAL-SUBMISSION.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Visão Geral + Links Obrigatórios |
| 2 | Desafio ODS 9/12 + Contexto Industrial |
| 3 | Solução: O Que o Waste Guardian Faz |
| 4 | Arquitetura Técnica + Compliance Edital |
| 5 | Econometrics: ROI + Impacto Financeiro |
| 6 | Estratégia de Vitória: Diferenciais Competitivos |
| 7 | Checklist de Submissão |
| 8 | Declaração de Conformidade |

---

## 🔗 Links Rápidos

### 📄 Documentos Maestro

| Arquivo | Descrição |
|---------|-----------|
| [ROADMAP.md](ROADMAP.md) | Cronograma + fases + dependências |
| [SYSTEM-DESIGN.md](SYSTEM-DESIGN.md) | Arquitetura técnica completa |
| [PRODUCT-DESIGN.md](PRODUCT-DESIGN.md) | Design de produto + pesquisa |
| [README-final-submission.md](README-final-submission.md) | Submissão final + econometrics |

### Documentos de Referência

| Categoria | Arquivo |
|-----------|---------|
| **Estratégia** | [../strategy/INDEX.md](../strategy/INDEX.md) |
| **Técnico** | [../tech/INDEX.md](../tech/INDEX.md) |
| **Pitch** | [../pitch/INDEX.md](../pitch/INDEX.md) |
| **Negócio** | [../business/INDEX.md](../business/INDEX.md) |

### Documentos de Scaffolding

| Categoria | Arquivo |
|-----------|---------|
| **Tech** | [../scaffolding/tech/01-mendix-domain-model.md](../scaffolding/tech/01-mendix-domain-model.md) |
| **Tech** | [../scaffolding/tech/02-genai-prompts.md](../scaffolding/tech/02-genai-prompts.md) |
| **Tech** | [../scaffolding/tech/03-mendix-ui-wireframes.md](../scaffolding/tech/03-mendix-ui-wireframes.md) |
| **Tech** | [../scaffolding/tech/04-rest-api-microflow-logic.md](../scaffolding/tech/04-rest-api-microflow-logic.md) |
| **Pitch** | [../scaffolding/pitch/roteiro-video-3min.md](../scaffolding/pitch/roteiro-video-3min.md) |
| **Business** | [../scaffolding/business/01-business-model-canvas.md](../scaffolding/business/01-business-model-canvas.md) |
| **Business** | [../scaffolding/business/02-industrial-intelligence.md](../scaffolding/business/02-industrial-intelligence.md) |

---

## 🔙 Voltar

[← INDEX Principal](../INDEX.md)

---

*Última atualização: 31/03/2026*
