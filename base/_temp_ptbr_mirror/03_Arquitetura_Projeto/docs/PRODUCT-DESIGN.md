# 📦 DESIGN DE PRODUTO — Waste Guardian

> **Documento de Design de Produto e Pesquisa de Mercado**  
> **Solução:** Copiloto de Redução de Desperdício Industrial  
> **Versão:** 1.0  
> **Data:** 31 de Março de 2026

---

## 1. RESUMO EXECUTIVO

### 1.1 Visão do Produto

**Waste Guardian** é uma aplicação web desenvolvida em Mendix que utiliza inteligência artificial generativa (OpenAI) para analisar dados de desperdício em linhas de produção da indústria de alimentos e bebidas, gerando recomendações priorizadas de ações para redução de perdas operacionais.

### 1.2 Proposta de Valor

| Para | Problema | Solução | Benefício |
|------|----------|---------|-----------|
| **Indústria de A&B** | Desperdício de matéria-prima por falhas de setup e qualidade | Copiloto de IA que analisa eventos e sugere ações corretivas | Redução de custos operacionais |
| **Supervisores** | Dificuldade em identificar causas raiz de perdas | Dashboard com indicadores + recomendações da IA | Tomada de decisão baseada em dados |
| **Gestores** | Falta de visibilidade sobre impacto financeiro | Métricas de sustentabilidade + projeção de economia | Conformidade com ESG + redução de custos |

---

## 2. PESQUISA DE MERCADO E ANÁLISE DA INDÚSTRIA

### 2.1 Panorama da Indústria de Alimentos e Bebidas (A&B)

```mermaid
flowchart TB
    subgraph FNB["Indústria de A&B no Brasil"]
        IND1["Setor em Crescimento"]
        IND2["Alta Competitividade"]
        IND3["Pressão ESG"]
    end
    
    subgraph PAIN["Principais Dores"]
        P1["Desperdício de Matéria-Prima"]
        P2["Perdas por Setup Incorreto"]
        P3["Falhas de Qualidade"]
        P4["Paradas Não Planejadas"]
    end
    
    subgraph IMPACTO["Impacto"]
        I1["3-7% média de desperdício"]
        I2["R$500K-2M/ano por planta"]
        I3["Impacto Ambiental"]
    end
    
    FNB --> PAIN
    PAIN --> IMPACTO
    
    style FNB fill:#e3f2fd
    style PAIN fill:#fff3e0
    style IMPACTO fill:#ffcdd2
```

### 2.2 Dados de Pesquisa

| Métrica | Valor | Fonte |
|---------|-------|-------|
| **Desperdício médio de A&B no Brasil** | 3-7% da matéria-prima | ABIAS/SEBRAE |
| **Custo anual por planta** | R$ 500K - R$ 2M | Estimativa setorial |
| **Plantas alimentícias no Brasil** | ~15.000 | RAIS/MTE |
| **% de representação do setor no PIB** | ~10% | IBGE |
| **Crescimento da demanda sustentável** | +45% nos últimos 3 anos | Nielsen |

### 2.3 Análise de Dores (Pain Points)

```mermaid
quadrantChart
    title Matriz de Dores: Importância vs. Frequência
    x-axis Baixa Frequência --> Alta Frequência
    y-axis Baixo Impacto --> Alto Impacto
    
    dot-1[Setup Incorreto]: (0.85, 0.9)
    dot-2[Falhas de Qualidade]: (0.75, 0.85)
    dot-3[Paradas Não Planejadas]: (0.7, 0.7)
    dot-4[Desperdício de Energia]: (0.6, 0.5)
    dot-5[Obsolescência de Estoque]: (0.4, 0.6)
    dot-6[Retrabalho]: (0.5, 0.75)
```

#### 2.3.1 Dores Prioritárias

| # | Dor | Descrição | Frequência | Impacto |
|---|-----|-----------|------------|----------|
| 1 | **Setup Incorreto** | Parâmetros de máquina mal configurados causando refugo | Alta | Crítico |
| 2 | **Falhas de Qualidade** | Produtos que não passam no controle de qualidade (QC) | Alta | Alto |
| 3 | **Paradas Não Planejadas** | Quebras ou problemas inesperados | Média | Alto |
| 4 | **Desperdício Energético** | Consumo acima do esperado | Alta | Médio |
| 5 | **Retrabalho** | Produtos que precisam de reprocessamento | Média | Médio |

---

## 3. PERSONAS

### 3.1 Persona Primária: Operador de Produção

```mermaid
graph TD
    subgraph OP["OPERADOR DE PRODUÇÃO"]
        DEMO["João, 32 anos"]
        ROLE["Cargo: Operador de Máquina"]
        EXP["Experiência: 8 anos"]
    end
    
    subgraph NEEDS["Necessidades"]
        N1["Saber quando algo está errado"]
        N2["Registrar problemas rapidamente"]
        N3["Receber instruções claras"]
    end
    
    subgraph PAINS["Dores"]
        P1["Falta de visibilidade"]
        P2["Processo manual de registro"]
        P3["Não sabe o impacto do problema"]
    end
    
    subgraph GOALS["Objetivos"]
        G1["Manter a linha rodando"]
        G2["Evitar retrabalho"]
        G3["Cumprir a meta de produção"]
    end
    
    DEMO --> NEEDS
    NEEDS --> PAINS
    PAINS --> GOALS
```

**Perfil:**
- **Nome:** João Silva
- **Idade:** 32 anos
- **Cargo:** Operador de Produção
- **Experiência:** 8 anos na indústria
- **Formação:** Técnico em mecânica industrial

**Necessidades:**
- Interface simples e intuitiva
- Registro rápido de eventos de desperdício
- Feedback visual imediato

**Dores:**
- Não tem visibilidade do impacto de suas ações
- O processo de registro é manual e demorado
- Não consegue visualizar tendências de problemas

---

### 3.2 Persona Secundária: Supervisor de Produção

```mermaid
graph TD
    subgraph SUP["SUPERVISOR DE PRODUÇÃO"]
        DEMO["Maria, 38 anos"]
        ROLE["Cargo: Supervisora de Produção"]
        EXP["Experiência: 12 anos"]
    end
    
    subgraph NEEDS["Necessidades"]
        N1["Visão geral das linhas"]
        N2["Identificar causas-raiz"]
        N3["Relatórios para a gestão"]
    end
    
    subgraph PAINS["Dores"]
        P1["Dados fragmentados"]
        P2["Falta de ação prioritária"]
        P3["Dificuldade em justificar investimentos"]
    end
    
    subgraph GOALS["Objetivos"]
        G1["Reduzir o desperdício"]
        G2["Melhorar o OEE"]
        G3["Cumprir metas ESG"]
    end
    
    DEMO --> NEEDS
    NEEDS --> PAINS
    PAINS --> GOALS
```

**Perfil:**
- **Nome:** Maria Santos
- **Idade:** 38 anos
- **Cargo:** Supervisora de Produção
- **Experiência:** 12 anos na indústria
- **Formação:** Engenharia de Produção

---

### 3.3 Persona Terciária: Gestor C-Level

```mermaid
graph TD
    subgraph CEO["GESTOR C-LEVEL"]
        DEMO["Carlos, 45 anos"]
        ROLE["Cargo: Diretor Industrial"]
        EXP["Experiência: 20 anos"]
    end
    
    subgraph NEEDS["Necessidades"]
        N1["Visão estratégica"]
        N2["Métricas de sustentabilidade"]
        N3["ROI de iniciativas"]
    end
    
    subgraph PAINS["Dores"]
        P1["Falta de dados para decisão"]
        P2["Pressão de investidores por ESG"]
        P3["Dificuldade em priorizar"]
    end
    
    subgraph GOALS["Objetivos"]
        G1["Reduzir custos operacionais"]
        G2["Melhorar a imagem de sustentabilidade"]
        G3["Preparar para IPO/expansão"]
    end
    
    DEMO --> NEEDS
    NEEDS --> PAINS
    PAINS --> GOALS
```

**Perfil:**
- **Nome:** Carlos Mendes
- **Idade:** 45 anos
- **Cargo:** Diretor Industrial
- **Experiência:** 20 anos no setor
- **Formação:** Administração de Empresas + MBA em Gestão Industrial

---

## 4. JORNADAS DO USUÁRIO

### 4.1 Jornada: Registro de Evento de Desperdício

```mermaid
flowchart LR
    subgraph STEPS["Jornada do Operador"]
        A["Início do Turno"] --> B["Identifica Desperdício"]
        B --> C["Abre o App no Tablet"]
        C --> D["Seleciona a Linha"]
        D --> E["Preenche o Formulário"]
        E --> F["Submete o Evento"]
        F --> G["Recebe Confirmação"]
    end
    
    subgraph TOUCH["Pontos de Contato"]
        T1["Tablet / Desktop"]
        T2["Interface Simples"]
        T3["Feedback Visual"]
    end
    
    subgraph EMOTION["Jornada de Emoções"]
        E1["😐 Início"] --> E2["😟 Problema"]
        E2 --> E3["🤔 Usando o App"]
        E3 --> E4["😊 Sucesso"]
    end
    
    A --> T1
    B --> T2
    F --> T3
    
    style STEPS fill:#e3f2fd
    style TOUCH fill:#fff3e0
    style EMOTION fill:#e8f5e9
```

### 4.2 Jornada: Análise e Recomendação

```mermaid
flowchart LR
    subgraph STEPS["Jornada do Supervisor"]
        A["Abre o Dashboard"] --> B["Vê os Indicadores"]
        B --> C["Seleciona a Linha com Problemas"]
        C --> D["Vê a Lista de Eventos"]
        D --> E["Clica em 'Gerar Plano com IA'"]
        E --> F["Aguarda o Processamento"]
        F --> G["Vê as Recomendações"]
        G --> H["Prioriza as Ações"]
    end
    
    subgraph PAINPoints["Pontos de Atenção"]
        P1["Dados Claros"]
        P2["Tempo de Resposta"]
        P3["Ações Executáveis"]
    end
    
    A --> P1
    E --> P2
    G --> P3
    
    style STEPS fill:#e3f2fd
    style PAINPoints fill:#fff3e0
```

### 4.3 Jornada: Revisão Estratégica

```mermaid
flowchart LR
    subgraph STEPS["Jornada do Gestor"]
        A["Acessa o Relatório"] --> B["Vê os KPIs"]
        B --> C["Analisa Tendências"]
        C --> D["Filtra por Período"]
        D --> E["Vê as Ações Implementadas"]
        E --> F["Calcula a Economia"]
        F --> G["Prepara a Apresentação"]
    end
    
    subgraph VALUE["Valor Extraído"]
        V1["Dados em Tempo Real"]
        V2["Prova de ROI"]
        V3["Conformidade com ESG"]
    end
    
    A --> T1
    F --> V2
    G --> V3
    
    style STEPS fill:#e3f2fd
    style VALUE fill:#c8e6c9
```

---

## 5. ESPECIFICAÇÃO DE FUNCIONALIDADES

### 5.1 Matriz de Funcionalidades vs. Personas

| Funcionalidade | Operador | Supervisor | Gestor | Prioridade |
|---------|----------|------------|--------|-------------|
| **Registro de Desperdício** | ✅ | - | - | Crítica |
| **Dashboard de KPIs** | - | ✅ | ✅ | Crítica |
| **Lista de Eventos** | - | ✅ | - | Alta |
| **Geração de Plano com IA** | - | ✅ | - | Crítica |
| **Recomendações Priorizadas** | - | ✅ | ✅ | Crítica |
| **Histórico de Ações** | - | ✅ | ✅ | Alta |
| **Relatórios Exportáveis** | - | - | ✅ | Média |
| **Alertas por E-mail** | - | ✅ | ✅ | Média |

### 5.2 Funcionalidade: Registro de Desperdício

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Registro de Evento de Desperdício |
| **Descrição** | Formulário para o operador registrar evento de desperdício |
| **Fluxo** | 1. Selecionar linha 2. Informar quantidade 3. Descrever causa 4. Enviar |
| **Campos** | Linha (dropdown), Qtd Produzida, Qtd Descartada, Causa (texto), Turno |
| **Validações** | Campos obrigatórios, números positivos |
| **Feedback** | Mensagem de sucesso, atualização de KPIs |

### 5.3 Funcionalidade: Dashboard de KPIs

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Dashboard de Indicadores |
| **Descrição** | Visão geral dos KPIs de sustentabilidade por linha |
| **Componentes** | Cards com linha + % de desperdício + custo estimado |
| **Indicadores** | % de Desperdício, Custo em R$, Energia por Unidade |
| **Visualização** | Semáforo (verde <3%, amarelo 3-5%, vermelho >5%) |
| **Interatividade** | Clique para detalhar |

### 5.4 Funcionalidade: Geração de Plano com IA

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Copiloto de Redução via GenAI |
| **Descrição** | Análise inteligente que gera ações priorizadas |
| **Entrada** | Indicadores recentes + eventos do período |
| **Processamento** | API da OpenAI com prompt estruturado |
| **Saída** | 3 a 5 ações com prioridade e impacto |
| **Tratamento** | Estado de carregamento, erro, fallback |

---

## 6. MÉTRICAS DE SUCESSO

### 6.1 KPIs Técnicos

| Métrica | Meta | Como Medir |
|---------|------|-------------|
| **Tempo de carregamento** | < 3s | Lighthouse/Mendix Profiler |
| **Taxa de sucesso da API** | > 95% | Log de erros |
| **Uptime** | > 99% | Mendix Cloud |
| **CRUD operante** | 100% | Testes funcionais |
| **Responsividade** | Mobile/Tablet/Desktop | Teste multiplataforma |

### 6.2 KPIs de Negócio

| Métrica | Meta | Como Medir |
|---------|------|-------------|
| **Redução de desperdício** | > 1% ao mês | Indicador antes/depois |
| **Tempo de ação corretiva** | < 50% | Tempo entre o evento e a ação |
| **Adoção pelos operadores** | > 80% | Uso rastreado |
| **Economia estimada** | > R$ 50K/ano | Projeção de custos |

### 6.3 KPIs de Sustentabilidade (ODS)

```mermaid
flowchart LR
    subgraph ODS9["ODS 9: Indústria, Inovação e Infraestrutura"]
        O9A["Eficiência Operacional"]
        O9B["Digitalização"]
        O9C["Infraestrutura Sustentável"]
    end
    
    subgraph ODS12["ODS 12: Consumo e Produção Responsáveis"]
        O12A["Redução de Desperdício"]
        O12B["Economia Circular"]
        O12C["Produção Consciente"]
    end
    
    O9A --> O12A
    O9B --> O12B
    O9C --> O12C
    
    style ODS9 fill:#e3f2fd
    style ODS12 fill:#c8e6c9
```

| ODS | Meta | Indicador |
|-----|------|-----------|
| **ODS 9** | Eficiência industrial | OEE > 85% |
| **ODS 9** | Digitalização | Sistema implementado |
| **ODS 12** | Redução de desperdício | < 3% |
| **ODS 12** | Gestão de recursos | Energia por Unidade reduzida |

---

## 7. MODELO DE NEGÓCIO

### 7.1 Canvas de Negócio

```mermaid
flowchart TB
    subgraph PROBLEM["PROBLEMA"]
        P1["Desperdício de 3-7% em A&B"]
        P2["Custo de R$ 500K-2M por planta"]
        P3["Pressão ESG"]
    end
    
    subgraph SOLUTION["SOLUÇÃO"]
        S1["Copiloto de IA"]
        S2["Dashboard em tempo real"]
        S3["Recomendações acionáveis"]
    end
    
    subgraph UVP["PROPOSTA DE VALOR ÚNICA"]
        U1["Primeiro app com GenAI para desperdício de A&B"]
        U2["ROI rápido em 3 meses"]
        U3["Fácil implementação"]
    end
    
    subgraph UNFAIR["VANTAGEM INJUSTA"]
        U["Domínio de Mendix + OpenAI"]
    end
    
    subgraph CUSTOMERS["SEGMENTOS DE CLIENTES"]
        C1["A&B com receita > R$ 50M"]
        C2["Plantas de médio/grande porte"]
        C3["Indústrias com pressão ESG"]
    end
    
    subgraph REVENUE["FLUXOS DE RECEITA"]
        R1["SaaS mensal por linha"]
        R2["Taxa de configuração (Setup fee)"]
        R3["Serviços de implementação"]
    end
    
    PROBLEM --> SOLUTION
    SOLUTION --> UVP
    UVP --> UNFAIR
    UNFAIR --> CUSTOMERS
    CUSTOMERS --> REVENUE
```

### 7.2 Estrutura de Preços

| Nível | Preço | Funcionalidades |
|------|-------|----------|
| **Iniciante** | R$ 500/linha/mês | Dashboard + Registro |
| **Pro** | R$ 800/linha/mês | + GenAI + Relatórios |
| **Enterprise** | Sob consulta | + Integrações + Suporte |

### 7.3 Projeção de ROI

| Cenário | Linhas | Economia Anual | ROI |
|---------|-------|---------------|-----|
| **Conservador** | 1 | R$ 60K | 3x |
| **Moderado** | 3 | R$ 200K | 5x |
| **Otimista** | 5 | R$ 400K | 8x |

---

## 8. COMPETIÇÃO E DIFERENCIAÇÃO

### 8.1 Análise Competitiva

| Concorrente | Tipo | Pontos Fortes | Pontos Fracos |
|-------------|------|------------|-----------|
| **Sistemas MES** | Corporativo (Enterprise) | Dados reais | Complexos, caros |
| **Planilhas** | Manual | Simples | Sem automação |
| **BI Tradicional** | Analytics | Relatórios | Sem ação |
| **Waste Guardian** | **IA + Low-code** | **GenAI integrada** | **Novo no mercado** |

### 8.2 Vantagens Competitivas

1. **GenAI como Diferencial** — Recomendações inteligentes vs. dashboards estáticos
2. **Low-code Mendix** — Implantação rápida vs. desenvolvimento tradicional
3. **Foco em A&B** — Especialização vs. soluções genéricas
4. **Alinhamento com ODS** — Conformidade com ESG integrada

---

## 9. ROADMAP DO PRODUTO

### 9.1 Fase 1: MVP (Hackathon)

| Funcionalidade | Status |
|---------|--------|
| Registro de desperdício | ✅ |
| Dashboard básico | ✅ |
| Geração de plano com IA | ✅ |
| 3 páginas navegáveis | ✅ |
| Persistência CRUD | ✅ |

### 9.2 Fase 2: Pós-Hackathon

| Funcionalidade | Prioridade |
|---------|------------|
| Relatórios exportáveis (PDF) | Alta |
| Alertas por e-mail | Alta |
| Integração com MES | Média |
| App mobile nativo | Média |
| Suporte a múltiplas plantas | Baixa |

### 9.3 Fase 3: V2.0

| Funcionalidade | Prioridade |
|---------|------------|
| Machine Learning preditivo | Alta |
| Integração com sensores IoT | Alta |
| API pública | Média |
| Marketplace de ações | Baixa |

---

## 10. REFERÊNCIAS CRUZADAS

| Este Documento | Referências |
|---------------|-------------|
| **PRODUCT-DESIGN.md** | [Índice de Negócios](../business/INDEX.md) |
| **Dores de A&B** | [02-industrial-intelligence.md](../scaffolding/business/02-industrial-intelligence.md) |
| **Modelo de Negócio** | [01-business-model-canvas.md](../scaffolding/business/01-business-model-canvas.md) |
| **Econometria do Patrocinador** | [03-sponsor-econometrics.md](../scaffolding/business/03-sponsor-econometrics.md) |
| **Roadmap** | [ROADMAP.md](./ROADMAP.md) |
| **Design de Sistema** | [SYSTEM-DESIGN.md](./SYSTEM-DESIGN.md) |

---

> **VISÃO DO PRODUTO:** *"Waste Guardian: Onde a inteligência artificial encontra a sustentabilidade industrial."*

---

*Documento gerado em 31 de Março de 2026*  
*Versão: 1.0*
