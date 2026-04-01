# 🏗️ DESIGN DE SISTEMA — Waste Guardian

> **Arquitetura Técnica Completa da Solução**  
> **Plataforma:** Mendix (Free Tier Cloud) + OpenAI API  
> **Versão:** 2.0 (Expandida)  
> **Data:** 31 de Março de 2026

---

## 1. VISÃO GERAL DA ARQUITETURA

### 1.1 Arquitetura de Alto Nível (C1 - Context)

```mermaid
flowchart TB
    subgraph EXTERNAL["Sistemas Externos"]
        OPENAI["OpenAI API<br/>GPT-4o"]
        YOUTUBE["YouTube<br/>(Video Pitch)"]
    end
    
    subgraph USER["Usuários"]
        OPS["Operador<br/>Produção"]
        SUP["Supervisor<br/>Produção"]
        GEST["Gestor<br/>Industrial"]
        BANCA["Banca<br/>Julgadora"]
    end
    
    subgraph WASTE["Sistema: Waste Guardian"]
        subgraph CLIENT["Camada Cliente"]
            WEB["Mendix Web Client<br/>(Atlas UI)"]
        end
        
        subgraph SERVER["Camada Servidor"]
            MF["Microflows<br/>Lógica de Negócio"]
            DB["Mendix Database<br/>(PostgreSQL)"]
            SEC["Security<br/>(Roles & Rules)"]
        end
        
        subgraph INTEGRATION["Integração"]
            REST["REST Call<br/>(OpenAI)"]
            PARSE["JSON Parser"]
        end
        
        subgraph FALLBACK["Resiliência"]
            MOCK["Mock Data<br/>(CSV)"]
            CACHE["Cache Local"]
        end
    end
    
    USER --> WEB
    WEB --> MF
    MF --> DB
    MF --> REST
    REST --> OPENAI
    REST -.-> MOCK
    MF -.-> CACHE
    
    style WASTE fill:#e3f2fd
    style EXTERNAL fill:#e8f5e9
    style USER fill:#fff3e0
```

### 1.2 Stack Tecnológico Completo

| Camada | Componente | Tecnologia | Versão | Finalidade |
|--------|------------|------------|--------|------------|
| **Presentation** | Low-Code Platform | Mendix Studio Pro | 10.x | Desenvolvimento visual |
| **Presentation** | Design System | Atlas UI | 3.x | Componentes responsivos |
| **Presentation** | Theme | Dark Mode B2B | Custom | Visual consistente |
| **Application** | Logic Engine | Microflows | Native | Lógica de negócio |
| **Application** | Client Logic | Nanoflows | Native | Interatividade client-side |
| **Data** | Database | Mendix Database | PostgreSQL | Persistência nativa |
| **Data** | Modeling | Domain Model | Visual | Estrutura de entidades |
| **Integration** | HTTP Client | REST Call | Native | Comunicação API |
| **Integration** | AI Service | OpenAI API | GPT-4o | Geração de recomendações |
| **Infrastructure** | Hosting | Mendix Cloud | Free Tier | Deploy público |
| **Development** | IDE | Mendix Studio Pro | 10.x | Ambiente desenvolvimento |
| **Testing** | API Testing | Node.js Script | LTS | Validação de integração |

---

## 2. DECISÕES ARQUITECTURAIS ESTRATÉGICAS

### 2.1 Por Que Mendix?

```mermaid
flowchart LR
    subgraph TRADITIONAL["Desenvolvimento Tradicional"]
        T1["Código<br/>Manual"]
        T2["Deploy<br/>Complexo"]
        T3["Curva<br/>Alta"]
    end
    
    subgraph LOWCODE["Mendix Low-Code"]
        M1["Visual<br/>No-Code"]
        M2["One-Click<br/>Deploy"]
        M3["Curva<br/>Baixa"]
    end
    
    subgraph BENEFITS["Benefícios para o Hackathon"]
        B1["🚀 Velocidade"]
        B2["🔒 Free Tier"]
        B3["🔗 OpenAI Native"]
    end
    
    TRADITIONAL -->|"vs"| LOWCODE
    LOWCODE --> BENEFITS
    
    style TRADITIONAL fill:#ffcdd2
    style LOWCODE fill:#c8e6c9
    style BENEFITS fill:#fff3e0
```

| Decisão | Justificativa | trade-off |
|---------|---------------|-----------|
| **Mendix como plataforma** | Exigência do edital + Low-code acelera desenvolvimento | Limitações de customização vs. código manual |
| **Free Tier** | Sem custo para hospedagem | Limite de 1 ambiente, recursos limitados |
| **Atlas UI** | Design system nativo + Dark Mode |須 seguir padrões Mendix |
| **Microflows** | Lógica visual sem código | Debugging mais difícil |
| **Non-Persistent Entities** | performance em consultas-heavy | Dados não persistidos entre sessões |

### 2.2 Por Que OpenAI?

```mermaid
flowchart TB
    subgraph AI_CHOICE["Escolha da IA"]
        A1["Exigência Edital"]
        A2["API Completa"]
        A3["JSON Output"]
    end
    
    A1 -->|"✓"| OPENAI["OpenAI API"]
    A2 -->|"✓"| OPENAI
    A3 -->|"✓"| OPENAI
    
    subgraph ALTERNATIVES["Alternativas Consideradas"]
        ALT1["Claude (Anthropic)"]
        ALT2["Gemini (Google)"]
        ALT3["Local LLMs"]
    end
    
    ALT1 -.->|"Custo"| OPENAI
    ALT2 -.->|"Setup"| OPENAI
    ALT3 -.->|"Recursos"| OPENAI
```

### 2.3 Arquitetura de Dados vs. Não-Persistente

| Abordagem | Quando Usar | Exemplo no Projeto |
|-----------|--------------|-------------------|
| **Entidades Persistentes** | Dados que precisam sobreviver entre sessões | LinhaProducao, EventoDesperdicio, AcaoRecomendada |
| **Entidades Non-Persistent** | Dados efêmeros para UI (loading states, preview) | GenAI_Request_Context |

> **💡 Decisão Estratégica:** Usamos Non-Persistent Entities para evitar que chamadas massivas à API OpenAI sobrecarreguem o I/O do banco de dados da Free Tier, garantindo performance durante o pitch.

---

## 3. CAMADA DE DADOS (DATA LAYER)

### 3.1 Domain Model — Visão Completa

```mermaid
erDiagram
    %% Entidades Principais com Atributos Detalhados
    LinhaProducao ||--o{ EventoDesperdicio : "Registra eventos de"
    EventoDesperdicio ||--o| IndicadorSustentabilidade : "Agrega métricas para"
    LinhaProducao ||--o| IndicadorSustentabilidade : "Possui"
    IndicadorSustentabilidade ||--o{ AcaoRecomendada : "Gera"
    
    %% Entidade de Contexto (Non-Persistent)
    AcaoRecomendada ||--o| GenAI_Request_Context : "Preview em tempo real"
    
    %% Herança de Usuários
    SystemUser ||--o{ UsuarioInterno : "Herda de"
    UsuarioInterno ||--o{ PapelOperador : "Possui"
    UsuarioInterno ||--o{ PapelGestor : "Possui"
    UsuarioInterno ||--o{ PapelAdmin : "Possui"

    %% Entidades Detalhadas com Cardinalidades
    LinhaProducao {
        int id PK "AutoNumber"
        string nome "Nome da linha"
        string tipoProduto "Categoria F&B"
        decimal capacidade "Unidades/hora"
        boolean ativo "Status operacional"
        decimal custoReferenciaHora "R$/hora"
        datetime dataCriacao "Timestamp"
    }
    
    EventoDesperdicio {
        int id PK "AutoNumber"
        datetime dataOcorrencia "Data/Hora"
        int linhaProducao_id FK "Associação"
        decimal quantidadeProduzida "Total produzido"
        decimal quantidadeDescartada "Total perdido"
        string causaNarrativa "Causa descritiva"
        string turno "Manhã|Tarde|Noite"
        enum gravidade "Baixa|Média|Alta"
        decimal opexPerdido "R$ estimado"
    }
    
    IndicadorSustentabilidade {
        int id PK "AutoNumber"
        int linhaProducao_id FK "Associação"
        string periodo "Mês/Semana"
        decimal desperdicioPercentual "% perdido"
        decimal energiaPorUnidade "kWh/unidade"
        decimal custoEstimadoPerda "R$ total"
        datetime dataAtualizacao "Última atualização"
    }
    
    AcaoRecomendada {
        int id PK "AutoNumber"
        int indicador_id FK "Associação"
        string textoAcao "Descrição da ação"
        enum prioridade "Alta|Média|Baixa"
        string impactoEstimado "Impacto projetado"
        enum status "Pendente|EmAndamento|Implementada"
        datetime dataCriacao "Data geração"
        string explicacaoAI "Rationale da IA"
    }
    
    GenAI_Request_Context {
        int id PK "Non-Persistent"
        string promptPreview "Prompt sendo enviado"
        boolean isFetching "Loading state"
        boolean mockFallbackMode "Modo backup"
    }
```

### 3.2 Diagrama de Relacionamento (ERD)

```mermaid
erDiagram
    LinhaProducao {
        int id PK
        string nome
        string tipoProduto
        decimal capacidade
        boolean ativo
        decimal custoReferenciaHora
    }
    
    EventoDesperdicio {
        int id PK
        datetime dataOcorrencia
        int linhaProducao_id FK
        decimal quantidadeProduzida
        decimal quantidadeDescartada
        string causaNarrativa
        string turno
        enum gravidade
    }
    
    IndicadorSustentabilidade {
        int id PK
        int linhaProducao_id FK
        string periodo
        decimal desperdicioPercentual
        decimal energiaPorUnidade
        decimal custoEstimadoPerda
        datetime dataAtualizacao
    }
    
    AcaoRecomendada {
        int id PK
        int indicador_id FK
        string textoAcao
        enum prioridade
        string impactoEstimado
        enum status
        datetime dataCriacao
    }

    LinhaProducao ||--o{ EventoDesperdicio : "1:N"
    EventoDesperdicio }|..|{ IndicadorSustentabilidade : "1:1"
    LinhaProducao ||--o| IndicadorSustentabilidade : "1:N"
    IndicadorSustentabilidade ||--o{ AcaoRecomendada : "1:N"
```

### 3.3 Estratégia de Índices e Performance

| Entidade | Índice |justificativa |
|----------|--------|---------------|
| `LinhaProducao` | PRIMARY KEY (id) | Acesso por ID |
| `EventoDesperdicio` | INDEX (linhaProducao_id, dataOcorrencia) | Queries por linha + período |
| `IndicadorSustentabilidade` | UNIQUE (linhaProducao_id, periodo) | Evitar duplicatas |
| `AcaoRecomendada` | INDEX (indicador_id, prioridade) | Ordenação por prioridade |

### 3.4 Dados Mock (Fallback Strategy)

```mermaid
flowchart TB
    subgraph SOURCE["Fontes de Dados"]
        DB["Banco de Dados<br/>Mendix"]
        CSV["mock-dataset.csv<br/>(Backup)"]
    end
    
    subgraph MODE["Modo de Operação"]
        NORMAL["Normal"]
        FALLBACK["Fallback"]
    end
    
    subgraph PARSE["Processamento"]
        JSON["Parse JSON"]
    end
    
    DB --> NORMAL
    CSV --> FALLBACK
    NORMAL --> JSON
    FALLBACK --> JSON
```

O arquivo `mock-dataset-industria-alimentos.csv` contém dados verossímeis para cenário de fallback:
- 50+ eventos de desperdício simulados
- 5 linhas de produção
- Período: últimos 30 dias
- Causas realistas (setup, qualidade, parada)

---

## 4. CAMADA DE APLICAÇÃO (APPLICATION LAYER)

### 4.1 Estrutura de Módulos Mendix

```mermaid
flowchart TB
    subgraph ADMIN["Módulo: Administration (Native)"]
        A1["System.User"]
        A2["System.Role"]
        A3["System.ModuleRole"]
    end
    
    subgraph CORE["Módulo: WasteGuardian_Core"]
        C1["Domain Model"]
        C2["Microflows"]
        C3["Pages"]
        C4["Navigation"]
    end
    
    subgraph ATLAS["Módulo: Atlas_UI_Resources"]
        AT1["Layouts"]
        AT2["Widgets"]
        AT3["Building Blocks"]
    end
    
    subgraph CUSTOM["Módulo: Custom (Ours)"]
        CP1["GenAI Integration"]
        CP2["Reporting"]
        CP3["Export"]
    end
    
    ADMIN --> CORE
    ATLAS --> CORE
    CORE --> CUSTOM
```

### 4.2 Microflow: MF_RegistrarEventoDesperdicio (Detalhado)

```mermaid
flowchart TB
    START["START"] --> INPUT["Parâmetros de Entrada"]
    INPUT --> VALIDATE["Validar Campos Obrigatórios"]
    
    VALIDATE -->|"Válido"| LOOKUP["Retrieve LinhaProducao"]
    LOOKUP -->|"Encontrada"| CREATE_E["Create EventoDesperdicio"]
    LOOKUP -->|"Não Encontrada"| ERROR_L["Erro: Linha não existe"]
    
    CREATE_E --> BUILD["Calcular OPEX Perdido"]
    BUILD --> SAVE["Commit EventoDesperdicio"]
    
    SAVE --> TRIGGER["Chamar MF_CalcularIndicadores"]
    TRIGGER --> SUCCESS["Retornar Sucesso + Objeto"]
    SUCCESS --> END["END"]
    
    VALIDATE -->|"Inválido"| ERROR_V["Retornar Erro de Validação"]
    ERROR_V --> END
    
    ERROR_L --> END
    
    style VALIDATE fill:#fff3e0
    style CREATE_E fill:#c8e6c9
    style SUCCESS fill:#e8f5e9
    style ERROR_V fill:#ffcdd2
```

**Pseudocódigo:**
```
PROCEDURE MF_RegistrarEventoDesperdicio(linhaId, qtdDescartada, causa, turno):
    
    // 1. Validação
    IF qtdDescartada <= 0 THEN
        RETURN Error("Quantidade deve ser positiva")
    
    // 2. Buscar linha
    linha = RETRIEVE LinhaProducao WHERE id = linhaId
    IF linha IS NULL THEN
        RETURN Error("Linha não encontrada")
    
    // 3. Calcular OPEX
    opex = qtdDescartada * linha.custoReferenciaHora
    
    // 4. Criar evento
    evento = NEW EventoDesperdicio
    evento.linhaProducao = linha
    evento.quantidadeDescartada = qtdDescartada
    evento.causaNarrativa = causa
    evento.turno = turno
    evento.opexPerdido = opex
    evento.dataOcorrencia = NOW()
    evento.gravidade = CALC_GRAVIDADE(qtdDescartada, linha.capacidade)
    
    // 5. Salvar
    COMMIT evento
    
    // 6. Recalcular indicadores
    MF_CalcularIndicadores(linhaId)
    
    RETURN Success(evento)
```

### 4.3 Microflow: MF_CalcularIndicadores (Detalhado)

```mermaid
flowchart TB
    START["START"] --> INPUT["linhaId, periodo"]
    INPUT --> QUERY["Retrieve Eventos do Período"]
    
    QUERY --> CHECK_EMPTY{"Tem eventos?"}
    CHECK_EMPTY -->|"Não"| ZERO["Retornar indicadores zero"]
    CHECK_EMPTY -->|"Sim"| AGGREGATE["Agregar Métricas"]
    
    AGGREGATE --> SUM_PROD["soma(quantidadeProduzida)"]
    AGGREGATE --> SUM_DISC["soma(quantidadeDescartada)"]
    
    SUM_PROD --> CALC_PCT["(descartado/produzido) * 100"]
    SUM_DISC --> CALC_COST["descartado * custoHora"]
    
    CALC_PCT --> CHECK_IND{"Indicador existe?"}
    CALC_COST --> CHECK_IND
    
    CHECK_IND -->|"Não"| NEW_IND["Create IndicadorSustentabilidade"]
    CHECK_IND -->|"Sim"| UPDATE_IND["Update Indicador existente"]
    
    NEW_IND --> SAVE["Commit Object"]
    UPDATE_IND --> SAVE
    
    SAVE --> RETURN["Retornar Indicador"]
    ZERO --> RETURN
    
    RETURN --> END["END"]
    
    style AGGREGATE fill:#fff3e0
    style SAVE fill:#c8e6c9
```

### 4.4 Microflow: MF_GerarPlanoAcaoGenAI (O Core do Sistema)

```mermaid
sequenceDiagram
    participant UI as Página Mendix
    participant NF as Nanoflow (Client)
    participant MF as Microflow (Server)
    participant DB as Database
    participant API as OpenAI API
    participant FALLBACK as Mock Data

    UI->>NF: Clica "Gerar Plano"
    NF->>NF: Set isFetching = true
    NF->>MF: Call MF_GerarPlanoAcaoGenAI(indicadorId)
    
    MF->>DB: Fetch indicador + eventos
    DB-->>MF: Dados retornados
    
    MF->>MF: Build Prompt (System + User)
    
    alt Modo Normal (API disponível)
        MF->>API: POST /v1/chat/completions
        API-->>MF: Response JSON
        MF->>MF: Parse JSON Response
    else Modo Fallback
        MF->>FALLBACK: Load mock-dataset.csv
        FALLBACK-->>MF: Dados mock
    end
    
    loop Para cada ação na resposta
        MF->>DB: Create AcaoRecomendada
        DB-->>MF: Confirmação
    end
    
    MF-->>NF: Lista de ações
    NF->>NF: Set isFetching = false
    NF->>UI: Exibir ações na página
    
    UI->>UI: Render Data List com cards
```

### 4.5 Nanoflow: NF_LoadGenAI (Client-Side State Management)

```mermaid
flowchart TB
    START["User Click"] --> SET_TRUE["Set isFetching = true"]
    SET_TRUE --> SHOW["Show Loading Spinner"]
    SHOW --> CALL["Call MF_GerarPlanoAcaoGenAI"]
    
    CALL --> RESULT{"Success?"}
    
    RESULT -->|"Sim"| SUCCESS["Show Actions"]
    RESULT -->|"Não"| ERROR["Show Error Message"]
    
    SUCCESS --> SET_FALSE["Set isFetching = false"]
    ERROR --> SET_FALSE2["Set isFetching = false"]
    
    SET_FALSE --> HIDE["Hide Loading"]
    SET_FALSE2 --> HIDE
    
    HIDE --> DISPLAY["Display Data List"]
    HIDE --> END["END"]
```

---

## 5. CAMADA DE INTEGRAÇÃO (INTEGRATION LAYER)

### 5.1 Arquitetura de Integração OpenAI

```mermaid
flowchart TB
    subgraph REQUEST["Request Flow"]
        PROMPT["Prompt Builder"]
        HEADER["Headers Config"]
        BODY["Request Body JSON"]
    end
    
    subgraph TRANSPORT["Transport"]
        HTTP["HTTPS POST"]
        AUTH["Authorization"]
    end
    
    subgraph PROCESSING["Processing"]
        RATE["Rate Limit Check"]
        TIMEOUT["Timeout Handler"]
        RETRY["Retry Logic"]
    end
    
    subgraph RESPONSE["Response Processing"]
        PARSE["JSON Parse"]
        VALIDATE["Validate Schema"]
        ERROR["Error Handler"]
    end
    
    PROMPT --> HEADER
    HEADER --> BODY
    BODY --> HTTP
    HTTP --> RATE
    RATE --> TIMEOUT
    TIMEOUT --> RETRY
    RETRY --> PARSE
    PARSE --> VALIDATE
    VALIDATE --> ERROR
```

### 5.2 Configuração Detalhada da REST Call

#### 5.2.1 Request Configuration

| Parâmetro | Valor | Descrição |
|-----------|-------|-----------|
| **URL** | `https://api.openai.com/v1/chat/completions` | Endpoint da API |
| **Method** | POST | Verbo HTTP |
| **Timeout** | 30 segundos | Timeout da chamada |
| **Encoding** | UTF-8 | Codificação |

#### 5.2.2 Headers

```http
Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
OpenAI-Beta: assistants=v2
```

#### 5.2.3 Request Body Estruturado

```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "Você é um consultor de eficiência operacional especializado em indústria de alimentos e bebidas..."
    },
    {
      "role": "user",
      "content": "Analise os dados de desperdício e sugira ações práticas..."
    }
  ],
  "temperature": 0.7,
  "max_tokens": 1000,
  "response_format": {
    "type": "json_object"
  },
  "frequency_penalty": 0,
  "presence_penalty": 0
}
```

### 5.3 Engenharia de Prompt Avançada

#### 5.3.1 Estrutura do Prompt

```mermaid
flowchart TB
    subgraph PROMPT["Estrutura do Prompt"]
        SYSTEM["System Message<br/>(Contexto)"]
        USER["User Message<br/>(Dados)"]
        CONTEXT["Context<br/>(Histórico)"]
        FORMAT["Format<br/>(JSON Schema)"]
    end
    
    SYSTEM --> PROMPT
    USER --> PROMPT
    CONTEXT --> PROMPT
    FORMAT --> PROMPT
```

#### 5.3.2 Prompt Completo (Detalhado)

```
# SYSTEM PROMPT

Você é um consultor de eficiência operacional especializado em indústria de alimentos e bebidas.
Sua missão é analisar dados de desperdício de produção e sugerir ações práticas e priorizadas para redução de perdas.

## Contexto do Problema
- Setor: Indústria de Alimentos e Bebidas (F&B)
- Tipo de desperdício: Matéria-prima perdida por falhas de setup e qualidade
- Objetivo: Reduzir desperdício e otimizar custos operacionais

## Suas Responsabilidades
1. Analisar os padrões de desperdício nos dados fornecidos
2. Identificar causas-raiz aparentes
3. Gerar 3 a 5 ações práticas para redução
4. Priorizar considerando impacto e viabilidade
5. Para cada ação, fornecer: descrição, prioridade, impacto estimado

## Restrições
- Resposta em português brasileiro
- Formato JSON obrigatório
- Prioridade: Alta, Média ou Baixa apenas

## Formato de Resposta
{
  "acoes": [
    {
      "descricao": "string",
      "prioridade": "Alta|Média|Baixa",
      "impactoEstimado": "string",
      "explicacao": "string"
    }
  ]
}

# USER PROMPT (Template)

Analise os seguintes dados de desperdício para a linha de produção {nome_linha}:

Dados do Período:
- Período: {periodo}
- Desperdício Percentual: {desperdicio}%
- Custo Estimado de Perda: R$ {custo}
- Energia por Unidade: {energia} kWh

Eventos Recentes:
{eventos_json}

Baseado nestes dados, qual é a melhor ação estratégica para reduzir o desperdício?
```

### 5.4 Tratamento de Erros Avançado

```mermaid
flowchart TB
    subgraph ERROR["Erro"]
        TYPE["Tipo de Erro"]
    end
    
    TYPE --> AUTH{"401 Unauthorized"}
    TYPE --> RATE{"429 Rate Limit"}
    TYPE --> TIMEOUT{"Timeout"}
    TYPE --> PARSE{"Parse Error"}
    TYPE --> SERVER{"500 Server Error"}
    TYPE --> NET{"Network Error"}
    
    AUTH --> RENEW["Renew API Key"]
    RATE --> WAIT["Wait 5s + Retry"]
    TIMEOUT --> RETRY["Retry with Timeout"]
    PARSE --> FALLBACK["Use Fallback Data"]
    SERVER --> RETRY2["Retry + Log"]
    NET --> FALLBACK2["Activate Mock Mode"]
    
    RENEW --> SUCCESS["Success"]
    WAIT --> SUCCESS
    RETRY --> SUCCESS
    FALLBACK --> SUCCESS
    RETRY2 --> SUCCESS
    FALLBACK2 --> SUCCESS
    
    style AUTH fill:#ffcdd2
    style RATE fill:#fff3e0
    style FALLBACK fill:#c8e6c9
```

| Código Erro | Significado | Ação Automática |
|-------------|-------------|-----------------|
| 401 | API Key inválida | Log erro + notificar |
| 429 | Rate limit excedido | Aguardar 5s + retry |
| 500 | Erro servidor OpenAI | Retry 3x com backoff |
|.timeout | Timeout de conexão | Ativar fallback |
| rede | Sem conexão | Usar dados mock |

### 5.5 Modo Fallback (Kill Switch) Detalhado

```mermaid
flowchart TB
    START["Início da Chamada"] --> CHECK_MODE{"Mock Mode<br/>Ativado?"}
    
    CHECK_MODE -->|"Sim (Force)"| FORCE["Usar CSV Forçado"]
    CHECK_MODE -->|"Não"| CHECK_NET{"Rede<br/>Disponível?"}
    
    CHECK_NET -->|"Não"| NETWORK["Ativar Mock"]
    CHECK_NET -->|"Sim"| TRY_API["Tentar API"]
    
    TRY_API --> RESULT{"Sucesso?"}
    
    RESULT -->|"Sim"| SUCCESS_API["Processar Resposta"]
    RESULT -->|"Não"| FALLBACK_AUTO["Ativar Mock Automático"]
    
    FORCE --> LOAD_CSV["Load CSV"]
    NETWORK --> LOAD_CSV
    FALLBACK_AUTO --> LOAD_CSV
    
    LOAD_CSV --> PARSE["Parse CSV to JSON"]
    PARSE --> USE_DATA["Processar Dados"]
    USE_DATA --> SUCCESS["Retornar Ações"]
    SUCCESS_API --> SUCCESS
    
    style FORCE fill:#ffcdd2
    style NETWORK fill:#fff3e0
    style SUCCESS fill:#c8e6c9
```

---

## 6. CAMADA DE APRESENTAÇÃO (PRESENTATION LAYER)

### 6.1 Arquitetura de Navegação

```mermaid
flowchart LR
    subgraph NAV["Navegação"]
        HOME["Home<br/>Visão Geral"]
        DETAIL["Detalhe<br/>Linha"]
        ACTION["Plano<br/>Ação"]
    end
    
    HOME -->|"Click Card"| DETAIL
    DETAIL -->|"Click Gerar IA"| ACTION
    DETAIL -->|"Click Voltar"| HOME
    ACTION -->|"Click Voltar"| DETAIL
    
    HOME -.-|"Mobile"| HOME_M["Mobile View"]
    DETAIL -.-|"Mobile"| DETAIL_M["Mobile View"]
    ACTION -.-|"Mobile"| ACTION_M["Mobile View"]
```

### 6.2 Páginas Detalhadas

#### 6.2.1 Página 1: Visão Geral (Dashboard)

```mermaid
flowchart TB
    subgraph PAGE1["Página: Visão Geral"]
        HEADER["Header:<br/>Logo + User"]
        FILTER["Filtros:<br/>Período + Linha"]
        GRID["Data Grid:<br/>Cards de Linha"]
        STATS["Stats Bar:<br/>Total Kpis"]
    end
    
    subgraph GRID_ITEMS["Itens do Grid"]
        CARD["Card:<br/>Linha + KPI + Actions"]
        CARD ==> NAME["Nome"]
        CARD ==> PCT["% Desperdício"]
        CARD ==> COST["Custo R$"]
        CARD ==> BTN["Detalhe Button"]
    end
    
    subgraph STATUS["Indicadores visuais"]
        GREEN["🟢 < 3%"]
        YELLOW["🟡 3-5%"]
        RED["🔴 > 5%"]
    end
    
    GRID --> GRID_ITEMS
    GRID_ITEMS --> STATUS
```

| Componente | Widget Mendix | Descrição |
|------------|---------------|-----------|
| **Header** | Layout | Logo + User avatar + Logout |
| **Filtros** | Dropdown | Período (Semana/Mês), Linha (Todas/Especifica) |
| **Cards Grid** | Data Grid | Lista de linhas com KPIs |
| **KPI Semáforo** | Progress Bar | Cor alterne por thresholds |
| **Custo** | Text | Valor formatado em R$ |
| **Botão Detalhe** | Action Button | Navigação para página 2 |

#### 6.2.2 Página 2: Detalhe da Linha

```mermaid
flowchart TB
    subgraph PAGE2["Página: Detalhe da Linha"]
        HEADER["Header:<br/>Linha + Voltar"]
        CHART["Gráfico:<br/>Evolução Desperdício"]
        TABLE["Tabela:<br/>Eventos Recentes"]
        ACTIONS["Ações:<br/>Botão IA + Loading"]
    end
    
    subgraph CHART_DATA["Dados do Gráfico"]
        X["Eixo X: Dias/Turnos"]
        Y["Eixo Y: % Desperdício"]
        LINE["Linha de Tendência"]
    end
    
    TABLE --> EVENT["Evento:<br/>Data + Qtd + Causa"]
    ACTIONS --> BTN_IA["Botão: Gerar Plano IA"]
    ACTIONS --> LOAD["Spinner de Loading"]
    ACTIONS --> ERROR["Mensagem de Erro"]
```

| Componente | Widget Mendix | Descrição |
|------------|---------------|-----------|
| **Header** | Layout | Nome da linha + botão voltar |
| **Gráfico** | Bar Chart | Evolução por dia ou turno |
| **Tabela** | Data Grid | Lista de eventos com paginação |
| **Botão IA** | Action Button | Dispara nanoflow |
| **Loading** | Spinner | Exibido durante chamada API |
| **Erro** | Snackbar | Exibido se API falhar |

#### 6.2.3 Página 3: Plano de Ação

```mermaid
flowchart TB
    subgraph PAGE3["Página: Plano de Ação"]
        HEADER["Header:<br/>Título + Data"]
        LIST["Data List:<br/>Cards de Ação"]
        DETAIL["Detail:<br/>Explicação IA"]
    end
    
    subgraph CARD["Card de Ação"]
        TITLE["Título da Ação"]
        BADGE["Badge Prioridade"]
        IMPACT["Impacto Estimado"]
        DESC["Descrição"]
        STATUS["Dropdown Status"]
    end
    
    LIST --> CARD
    CARD --> BADGE
    CARD --> IMPACT
```

| Componente | Widget Mendix | Descrição |
|------------|---------------|-----------|
| **Header** | Layout | Título + data de geração |
| **Lista Cards** | Data List | Cards com recomendações |
| **Badge Prioridade** | Badge | Cor: Alta=🔴, Média=🟡, Baixa=🟢 |
| **Impacto** | Text | Texto descritivo |
| **Status** | Dropdown | Alterar status da ação |

### 6.3 Design System: Atlas UI Configuration

```mermaid
flowchart TB
    subgraph CONFIG["Configuração do Theme"]
        COLOR["Cores"]
        TYPO["Tipografia"]
        SPACING["Espaçamento"]
        COMP["Componentes"]
    end
    
    COLOR --> PRIMARY["Primary: #1976D2"]
    COLOR --> SECONDARY["Secondary: #424242"]
    COLOR --> ACCENT["Accent: #FF9800"]
    COLOR --> BG["Background: #121212"]
    COLOR --> CARD["Card: #1E1E1E"]
    
    TYPO --> FONT["Roboto"]
    TYPO --> SIZE["Base: 14px"]
    
    SPACING --> PADDING["Padding: 16px"]
    SPACING --> MARGIN["Margin: 8px"]
    
    COMP --> BUTTON["Buttons"]
    COMP --> INPUT["Inputs"]
    COMP --> CARD_W["Cards"]
```

| Elemento | Valor | Usage |
|----------|-------|-------|
| **Primary Color** | #1976D2 (Siemens Blue) | Botões principais, links |
| **Secondary Color** | #424242 | Textos secundários |
| **Accent Color** | #FF9800 | Alertas, warnings |
| **Background** | #121212 | Fundo dark mode |
| **Card Background** | #1E1E1E | Cards, containers |
| **Success** | #4CAF50 | Status de sucesso |
| **Error** | #F44336 | Erros, prioridades altas |
| **Font Family** | Roboto | Fonte principal |
| **Font Size Base** | 14px | Tamanho base |
| **Spacing Unit** | 8px | Módulo de spacing |

---

## 7. CAMADA DE SEGURANÇA (SECURITY LAYER)

### 7.1 Arquitetura de Segurança

```mermaid
flowchart TB
    subgraph SECURITY["Camada de Segurança"]
        AUTH["Autenticação"]
        PERM["Permissões"]
        ROLES["Papéis"]
        AUDIT["Auditoria"]
    end
    
    AUTH --> LOGIN["Login via Mendix"]
    AUTH --> PROVIDER["Provider: Native"
    
    PERM --> MODULE["Module Access"]
    PERM --> ENTITY["Entity Access"]
    PERM --> PAGE["Page Access"]
    
    ROLES --> ADMIN["Administrator"]
    ROLES --> GESTOR["PapelGestor"]
    ROLES --> OPERADOR["PapelOperador"]
    
    AUDIT --> LOG["Access Logs"]
```

### 7.2 Matriz de Permissões

| Papel | LinhaProducao | EventoDesperdicio | Indicador | AcaoRecomendada |
|-------|---------------|-------------------|-----------|-----------------|
| **Administrator** | CRUD | CRUD | CRUD | CRUD |
| **PapelGestor** | Read | Read/Write | Read/Write | Read/Write |
| **PapelOperador** | Read | Create | - | - |

### 7.3 Configuração de Segurança no Mendix

```mermaid
flowchart LR
    subgraph SETUP["Security Setup"]
        MODULE["Module Settings"]
        ROLE["Create Roles"]
        USER["Assign Users"]
    end
    
    MODULE --> ROLE
    ROLE --> USER
    
    MODULE --> SEC_MODULE["Security: Full"]
    ROLE --> R_ADMIN["Admin: All Access"]
    ROLE --> R_GESTOR["Gestor: Read/Write"]
    ROLE --> R_OPER["Operador: Create Only"]
```

---

## 8. DEPLOY E INFRAESTRUTURA

### 8.1 Pipeline de Deploy

```mermaid
flowchart TB
    subgraph DEV["Desenvolvimento"]
        IDE["Mendix Studio Pro"]
        LOCAL["Run Locally"]
    end
    
    subgraph PACKAGE["Package"]
        CHECK["Consistency Check"]
        EXPORT["Export .mda"]
    end
    
    subgraph CLOUD["Mendix Cloud"]
        UPLOAD["Upload .mda"]
        BUILD["Build Package"]
        START["Start App"]
    end
    
    subgraph VERIFY["Verificação"]
        URL_TEST["Test URL"]
        CRUD_TEST["Test CRUD"]
        API_TEST["Test API"]
    end
    
    IDE --> LOCAL
    LOCAL --> CHECK
    CHECK --> EXPORT
    EXPORT --> UPLOAD
    UPLOAD --> BUILD
    BUILD --> START
    START --> URL_TEST
    URL_TEST --> CRUD_TEST
    CRUD_TEST --> API_TEST
```

### 8.2 Configuração Free Tier

| Recurso | Limite Free Tier | Impacto no Projeto |
|---------|-----------------|-------------------|
| **Ambientes** | 1 | Sem ambiente de staging |
| **Usuários** | 10 | Suficiente para time |
| **Arquivos** | 100MB | Suficiente para app |
| **Horas/Mês** | Unlimited (limite razoável) | Sem custos |
| **Database** | 1GB | Suficiente para MVP |

### 8.3 Checklist de Deploy

| # | Etapa | Verificação | Tempo Est. |
|---|-------|-------------|------------|
| 1 | Consistency Check | Nenhum erro no Modeler | 1 min |
| 2 | Export .mda | Arquivo gerado | 30 seg |
| 3 | Login Mendix Cloud | Acesso OK | 30 seg |
| 4 | Create/Update App | App selecionada | 1 min |
| 5 | Upload .mda | Progress bar completa | 2 min |
| 6 | Start Runtime | Status "Running" | 3 min |
| 7 | Test URL interna | App carrega | 30 seg |
| 8 | Test URL pública | Link acessível | 30 seg |
| 9 | Test CRUD | Create/Read OK | 1 min |
| 10 | Test API | Chamada funciona | 1 min |

---

## 9. TESTES E VALIDAÇÃO

### 9.1 Estratégia de Testes

```mermaid
flowchart TB
    subgraph TYPES["Tipos de Teste"]
        UNIT["Unit Tests<br/>(Microflows)"]
        INTEGRATION["Integration Tests<br/>(API)"]
        E2E["E2E Tests<br/>(Full Flow)"]
    end
    
    subgraph AUTOMATION["Automação"]
        MANUAL["Manual"]
        AUTOMATED["Automated"]
    end
    
    UNIT --> MANUAL
    INTEGRATION --> AUTOMATED
    E2E --> MANUAL
```

### 9.2 Checklist de Testes Funcionais

| Teste | Cenário | Passos | Resultado Esperado |
|-------|---------|--------|-------------------|
| **T01** | Criar Linha | Submit form nova linha | Linha aparece no grid |
| **T02** | Criar Evento | Registrar desperdício | Evento salvo + indicadores atualizados |
| **T03** | Listar Eventos | Ver eventos de uma linha | Lista com paginação funciona |
| **T04** | Navegação P1→P2→P3 | Clicar nos botões | Navegação fluida |
| **T05** | API Call Normal | Clicar "Gerar Plano" | Ações retornadas |
| **T06** | API Call Fallback | Desativar internet | Dados mock exibidos |
| **T07** | Responsividade Mobile | Abrir no celular | Layout adapta |
| **T08** | Deploy URL | Acessar link público | App carrega |

### 9.3 Checklist de Testes Não-Funcionais

| Teste | Critério | Verificação |
|-------|----------|-------------|
| **Performance** | Tempo de resposta < 3s | Lighthouse/Chrome DevTools |
| **Acessibilidade** | WCAG Basic | screen reader test |
| **Compatibilidade** | Chrome, Firefox, Edge | Teste manual |
| **Segurança** | XSS, SQL Injection | Code review |

---

## 10. MONITORAMENTO E OBSERVABILIDADE

### 10.1 Métricas de Monitoramento

| Métrica | Como Coletar | Alerta |
|---------|--------------|--------|
| **Uptime** | Mendix Cloud Status | > 99% |
| **Tempo de Resposta** | Chrome DevTools | < 3s |
| **Taxa de Erro API** | Mendix Logs | > 5% |
| **Uso de Database** | Mendix Cloud Console | < 80% |

### 10.2 Log Strategy

```mermaid
flowchart TB
    subgraph LOGS["Logging"]
        APP["Application Logs"]
        API["API Logs"]
        ERROR["Error Logs"]
    end
    
    APP --> WHERE["Where?"]
    API --> WHERE
    ERROR --> WHERE
    
    WHERE --> CONSOLE["Mendix Console"]
    WHERE --> CLOUD["Cloud Logs"]
    WHERE --> FILE["Log Files"]
```

---

## 11. REFERÊNCIAS CRUZADAS

| Este Documento | Referências |
|---------------|-------------|
| **SYSTEM-DESIGN.md** | [Tech Index](../tech/INDEX.md) |
| **Domain Model Detalhado** | [01-mendix-domain-model.md](../scaffolding/tech/01-mendix-domain-model.md) |
| **Engenharia de Prompts** | [02-genai-prompts.md](../scaffolding/tech/02-genai-prompts.md) |
| **Wireframes UI** | [03-mendix-ui-wireframes.md](../scaffolding/tech/03-mendix-ui-wireframes.md) |
| **REST Integration** | [04-rest-api-microflow-logic.md](../scaffolding/tech/04-rest-api-microflow-logic.md) |
| **Script de Teste** | [05-test-openai-script.js](../scaffolding/tech/05-test-openai-script.js) |
| **Mock Data** | [mock-dataset-industria-alimentos.csv](../scaffolding/tech/mock-dataset-industria-alimentos.csv) |
| **Roadmap** | [ROADMAP.md](./ROADMAP.md) |
| **Product Design** | [PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) |

---

## 12. APÊNDICE: GLOSSÁRIO TÉCNICO

| Termo | Definição |
|-------|-----------|
| **Mendix Studio Pro** | IDE visual para desenvolvimento low-code |
| **Microflow** | Processo de negócio visual executado no servidor |
| **Nanoflow** | Processo de negócio visual executado no cliente (browser) |
| **Domain Model** | Modelo de dados visual no Mendix |
| **Atlas UI** | Design system oficial do Mendix |
| **Non-Persistent Entity** | Entidade que existe apenas em memória |
| **REST Call** | Integração com APIs externas via HTTP |
| **Free Tier** | Camada gratuita do Mendix Cloud |
| **OpenAI API** | API da OpenAI para modelos de linguagem |
| **GPT-4o** | Modelo de linguagem mais recente da OpenAI |

---

> **PRINCÍPIO ARQUITETURAL:** *"Dados efêmeros no cliente, dados persistidos no servidor, GenAI como cérebro, Mendix como corpo, resiliência como escudo."*

---

*Documento expandido em 31 de Março de 2026*  
*Versão: 2.0*
