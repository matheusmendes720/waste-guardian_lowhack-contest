# 📚 DOCUMENTAÇÃO MESTRA — Índice

> **Documentos Maestro: Roadmap, System Design e Product Design**  
> **Low Hack 2026 — Waste Guardian**

---

## 📖 Visão Geral

Esta seção contém os **documentos maestro** que fornecem a visão completa do projeto, **integrados com a Camada de Inteligência (Intelligence Layer)**:

| Documento | Foco | Páginas | Integração de Inteligência |
|----------|-------|---------|-------------------------|
| **[ROADMAP.md](ROADMAP.md)** | Cronograma, fases, dependências, prazos | ~10 | Estendido por [04_Real_Execution_Roadmap](../intelligence/04_Real_Execution_Roadmap.md) |
| **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** | Arquitetura técnica Mendix + GenAI | ~12 | Alinhado com [03_Knowledge_Synthesis](../intelligence/03_Knowledge_Synthesis_OSINT.md) |
| **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** | Pesquisa da indústria, personas, produto | ~10 | Enriquecido por [02_Aggressive_BI](../intelligence/02_Aggressive_BI_Intelligence.md) |

### 🧠 Camada de Inteligência (Novo!)

A pasta `intelligence/` contém a **War Room Central** com documentos de inteligência competitiva:

| Documento | Propósito | Criticidade |
|----------|---------|-------------|
| [01_Edital_Deep_Analysis](../intelligence/01_Edital_Deep_Analysis.md) | Brechas, critérios de desempate, engenharia de pontuação | 🔴 Obrigatório pré-código |
| [02_Aggressive_BI_Intelligence](../intelligence/02_Aggressive_BI_Intelligence.md) | Fluxo de capital, TAM/SAM/SOM, perfil do patrocinador | 🔴 Pitch C-Level |
| [03_Knowledge_Synthesis_OSINT](../intelligence/03_Knowledge_Synthesis_OSINT.md) | Macro-Meso-Micro, frameworks de decisão | 🟡 Contínuo |
| [04_Real_Execution_Roadmap](../intelligence/04_Real_Execution_Roadmap.md) | Árvores de decisão, gatilhos, checkpoints | 🔴 Durante a competição |

[→ Acessar Camada de Inteligência](../intelligence/INDEX.md)

---

## 🚀 Leitura Recomendada por Fase

### 📋 Pré-Competição (Antes de 18/04)

#### 🔴 Fase 0: War Room de Inteligência (T-14 a T-7 dias)
**CRÍTICO: Executar antes de qualquer código**

1. **[intelligence/01_Edital_Deep_Analysis.md](../intelligence/01_Edital_Deep_Analysis.md)**
   - Brechas e pontos de alavancagem identificados
   - Estratégia de desempate
   - Engenharia de pontuação

2. **[intelligence/02_Aggressive_BI_Intelligence.md](../intelligence/02_Aggressive_BI_Intelligence.md)**
   - Perfil do patrocinador (Siemens/TrueChange)
   - TAM/SAM/SOM calculado
   - Estatísticas devastadoras pré-mineradas

3. **[intelligence/03_Knowledge_Synthesis_OSINT.md](../intelligence/03_Knowledge_Synthesis_OSINT.md)**
   - Arquitetura Macro-Meso-Micro
   - Psicologia C-Level
   - Frameworks de decisão

#### 🟡 Fase 1: Preparação Estratégica (T-7 a T-1 dias)

4. **[ROADMAP.md](ROADMAP.md)** — Seções 1-3
   - Cronograma oficial
   - Decomposição de requisitos
   
5. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seções 1-4
   - Pesquisa de mercado
   - Personas
   - Jornadas

6. **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** — Seções 1-5
   - Arquitetura geral
   - Modelo de Domínio (Domain Model)
   - Fluxo de integração

### ⚔️ Durante a Competição (18-19/04)

**Documento Primário:** [intelligence/04_Real_Execution_Roadmap.md](../intelligence/04_Real_Execution_Roadmap.md)
- Hora a hora com árvores de decisão
- Checkpoints de inteligência (IC-1, IC-2, IC-3)
- Gatilhos de contingência

**Documentos de Apoio:**

1. **[ROADMAP.md](ROADMAP.md)** — Seções 4-5
   - Cronograma hora a hora
   - Checklist de entregas
   
2. **[SYSTEM-DESIGN.md](SYSTEM-DESIGN.md)** — Seções 3-7
   - Microflows específicos
   - Configuração da API
   - Deploy

3. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seções 5-7
   - Lista de funcionalidades (Feature list)
   - Métricas de sucesso

4. **[intelligence/03_Knowledge_Synthesis_OSINT.md](../intelligence/03_Knowledge_Synthesis_OSINT.md)** — Cartão de Referência Rápida
   - Decisões de priorização
   - Estatísticas para o pitch

### 📊 Pós-Competição (Após 24/04)

1. **[PRODUCT-DESIGN.md](PRODUCT-DESIGN.md)** — Seção 9
   - Roadmap de produto V2.0
   - Evolução pós-hackathon

---

## 📊 Diagrama de Relação entre Documentos

```mermaid
flowchart TB
    subgraph INTEL["🧠 CAMADA DE INTELIGÊNCIA"]
        I1["01_Edital_Analysis"]
        I2["02_Aggressive_BI"]
        I3["03_Knowledge_Synthesis"]
        I4["04_Execution_Roadmap"]
    end
    
    subgraph MASTER["📚 DOCUMENTOS MESTRE"]
        R["ROADMAP"]
        SY["SYSTEM-DESIGN"]
        PD["PRODUCT-DESIGN"]
    end
    
    subgraph STRAT["📊 ESTRATÉGIA"]
        STR["strategy/INDEX.md"]
    end
    
    subgraph TECH["💻 TECNOLOGIA"]
        TECH["tech/INDEX.md"]
    end
    
    subgraph PITCH["🎬 APRESENTAÇÃO"]
        PCH["pitch/INDEX.md"]
    end
    
    subgraph BIZ["💼 NEGÓCIOS"]
        BIZ["business/INDEX.md"]
    end
    
    I1 --> I2 --> I3 --> I4
    I4 --> R
    I2 --> BIZ
    I3 --> PD
    I1 --> STR
    R --> SY
    R --> PD
    SY --> TECH
    PD --> BIZ
    STR --> R
    
    style INTEL fill:#ffcdd2
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
| 5 | Fluxo de Dependências (Caminho Crítico) |
| 6 | Checklist de Conformidade |
| 7 | Referências Cruzadas |
| 8 | Resumo Visual (Gantt) |

### SYSTEM-DESIGN.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Visão Geral da Arquitetura (diagrama de alto nível) |
| 2 | Camada de Dados: Modelo de Domínio + ERD |
| 3 | Camada de Aplicação: Microflows + Nanoflows |
| 4 | Camada de Integração: API OpenAI + Fallback |
| 5 | Camada de Apresentação: Páginas + Atlas UI |
| 6 | Camada de Segurança: Papéis + Permissões |
| 7 | Deploy e Infraestrutura |
| 8 | Testes e Validação |
| 9 | Referências Cruzadas |

### PRODUCT-DESIGN.md

| Seção | Conteúdo |
|-------|----------|
| 1 | Resumo Executivo |
| 2 | Pesquisa de Mercado: Indústria de A&B |
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
| 4 | Arquitetura Técnica + Conformidade com o Edital |
| 5 | Econometria: ROI + Impacto Financeiro |
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
| [README-final-submission.md](README-final-submission.md) | Submissão final + econometria |

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
| **Técnico** | [../scaffolding/tech/01-mendix-domain-model.md](../scaffolding/tech/01-mendix-domain-model.md) |
| **Técnico** | [../scaffolding/tech/02-genai-prompts.md](../scaffolding/tech/02-genai-prompts.md) |
| **Técnico** | [../scaffolding/tech/03-mendix-ui-wireframes.md](../scaffolding/tech/03-mendix-ui-wireframes.md) |
| **Técnico** | [../scaffolding/tech/04-rest-api-microflow-logic.md](../scaffolding/tech/04-rest-api-microflow-logic.md) |
| **Pitch** | [../scaffolding/pitch/roteiro-video-3min.md](../scaffolding/pitch/roteiro-video-3min.md) |
| **Negócio** | [../scaffolding/business/01-business-model-canvas.md](../scaffolding/business/01-business-model-canvas.md) |
| **Negócio** | [../scaffolding/business/02-industrial-intelligence.md](../scaffolding/business/02-industrial-intelligence.md) |

---

## 🔙 Voltar

[← INDEX Principal](../INDEX.md)

---

*Última atualização: 31/03/2026*
