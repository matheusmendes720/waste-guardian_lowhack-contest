# 🏗️ DESIGN DE SISTEMA — Waste Guardian

> **Arquitetura Técnica Completa da Solução**  
> **Plataforma:** Mendix (Free Tier Cloud) + OpenAI API  
> **Versão:** 2.0 (Expandida)  
> **Data:** 31 de Março de 2026

---

## 1. VISÃO GERAL DA ARQUITETURA

### 1.1 Arquitetura de Alto Nível (C1 - Contexto)

```mermaid
flowchart TB
    subgraph EXTERNAL["Sistemas Externos"]
        OPENAI["API OpenAI<br/>GPT-4o"]
        YOUTUBE["YouTube<br/>(Vídeo de Pitch)"]
    end
    
    subgraph USER["Usuários"]
        OPS["Operador de<br/>Produção"]
        SUP["Supervisor de<br/>Produção"]
        GEST["Gestor<br/>Industrial"]
        BANCA["Banca<br/>Julgadora"]
    end
    
    subgraph WASTE["Sistema: Waste Guardian"]
        subgraph CLIENT["Camada do Cliente"]
            WEB["Cliente Web Mendix<br/>(Atlas UI)"]
        end
        
        subgraph SERVER["Camada do Servidor"]
            MF["Microflows<br/>Lógica de Negócio"]
            DB["Banco de Dados Mendix<br/>(PostgreSQL)"]
            SEC["Segurança<br/>(Papéis e Regras)"]
        end
        
        subgraph INTEGRATION["Integração"]
            REST["Chamada REST<br/>(OpenAI)"]
            PARSE["Analisador JSON (Parser)"]
        end
        
        subgraph FALLBACK["Resiliência"]
            MOCK["Dados Mockados<br/>(CSV)"]
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
| **Apresentação** | Plataforma Low-Code | Mendix Studio Pro | 10.x | Desenvolvimento visual |
| **Apresentação** | Design System | Atlas UI | 3.x | Componentes responsivos |
| **Apresentação** | Tema | Modo Escuro B2B | Personalizado | Visual consistente |
| **Aplicação** | Motor de Lógica | Microflows | Nativo | Lógica de negócio |
| **Aplicação** | Lógica do Cliente | Nanoflows | Nativo | Interatividade do lado do cliente |
| **Dados** | Banco de Dados | Banco de Dados Mendix | PostgreSQL | Persistência nativa |
| **Dados** | Modelagem | Modelo de Domínio | Visual | Estrutura de entidades |
| **Integração** | Cliente HTTP | Chamada REST | Nativo | Comunicação com API |
| **Integração** | Serviço de IA | API da OpenAI | GPT-4o | Geração de recomendações |
| **Infraestrutura** | Hospedagem | Mendix Cloud | Nível Gratuito | Deploy público |
| **Desenvolvimento** | IDE | Mendix Studio Pro | 10.x | Ambiente de desenvolvimento |
| **Testes** | Teste de API | Script Node.js | LTS | Validação de integração |

---

## 2. DECISÕES ARQUITETURAIS ESTRATÉGICAS

### 2.1 Por que Mendix?

```mermaid
flowchart LR
    subgraph TRADITIONAL["Desenvolvimento Tradicional"]
        T1["Código<br/>Manual"]
        T2["Deploy<br/>Complexo"]
        T3["Curva de Aprendizado<br/>Alta"]
    end
    
    subgraph LOWCODE["Mendix Low-Code"]
        M1["Visual<br/>No-Code"]
        M2["Deploy em<br/>Um Clique"]
        M3["Curva de Aprendizado<br/>Baixa"]
    end
    
    subgraph BENEFITS["Benefícios para o Hackathon"]
        B1["🚀 Velocidade"]
        B2["🔒 Nível Gratuito"]
        B3["🔗 OpenAI Nativa"]
    end
    
    TRADITIONAL -->|"vs"| LOWCODE
    LOWCODE --> BENEFITS
    
    style TRADITIONAL fill:#ffcdd2
    style LOWCODE fill:#c8e6c9
    style BENEFITS fill:#fff3e0
```

| Decisão | Justificativa | Compensação (Trade-off) |
|---------|---------------|-----------|
| **Mendix como plataforma** | Exigência do edital + Low-code acelera o desenvolvimento | Limitações de customização vs. código manual |
| **Nível Gratuito (Free Tier)** | Sem custo para hospedagem | Limite de 1 ambiente, recursos limitados |
| **Atlas UI** | Design system nativo + Modo Escuro | Necessidade de seguir os padrões Mendix |
| **Microflows** | Lógica visual sem código | Depuração (Debugging) mais difícil |
| **Entidades Não-Persistentes** | Desempenho em consultas pesadas | Dados não persistidos entre sessões |

### 2.2 Por que OpenAI?

```mermaid
flowchart TB
    subgraph AI_CHOICE["Escolha da IA"]
        A1["Exigência do Edital"]
        A2["API Completa"]
        A3["Saída JSON"]
    end
    
    A1 -->|"✓"| OPENAI["API da OpenAI"]
    A2 -->|"✓"| OPENAI
    A3 -->|"✓"| OPENAI
    
    subgraph ALTERNATIVES["Alternativas Consideradas"]
        ALT1["Claude (Anthropic)"]
        ALT2["Gemini (Google)"]
        ALT3["LLMs Locais"]
    end
    
    ALT1 -.->|"Custo"| OPENAI
    ALT2 -.->|"Configuração"| OPENAI
    ALT3 -.->|"Recursos"| OPENAI
```

### 2.3 Arquitetura de Dados vs. Não-Persistente

| Abordagem | Quando Usar | Exemplo no Projeto |
|-----------|--------------|-------------------|
| **Entidades Persistentes** | Dados que precisam sobreviver entre as sessões | LinhaProducao, EventoDesperdicio, AcaoRecomendada |
| **Entidades Não-Persistentes** | Dados efêmeros para a UI (estados de carregamento, pré-visualização) | GenAI_Request_Context |

> **💡 Decisão Estratégica:** Usamos Entidades Não-Persistentes para evitar que chamadas massivas à API da OpenAI sobrecarreguem o I/O do banco de dados do Nível Gratuito, garantindo desempenho durante o pitch.

---

## 3. CAMADA DE DADOS (DATA LAYER)

### 3.1 Modelo de Domínio — Visão Completa

```mermaid
erDiagram
    %% Entidades Principais com Atributos Detalhados
    LinhaProducao ||--o{ EventoDesperdicio : "Registra eventos de"
    EventoDesperdicio ||--o| IndicadorSustentabilidade : "Agrega métricas para"
    LinhaProducao ||--o| IndicadorSustentabilidade : "Possui"
    IndicadorSustentabilidade ||--o{ AcaoRecomendada : "Gera"
    
    %% Entidade de Contexto (Não-Persistente)
    AcaoRecomendada ||--o| GenAI_Request_Context : "Pré-visualização em tempo real"
    
    %% Herança de Usuários
    SystemUser ||--o{ UsuarioInterno : "Herda de"
    UsuarioInterno ||--o{ PapelOperador : "Possui"
    UsuarioInterno ||--o{ PapelGestor : "Possui"
    UsuarioInterno ||--o{ PapelAdmin : "Possui"

    %% Entidades Detalhadas com Cardinalidades
    LinhaProducao {
        int id PK "AutoNumber"
        string nome "Nome da linha"
        string tipoProduto "Categoria de A&B"
        decimal capacidade "Unidades/hora"
        boolean ativo "Status operacional"
        decimal custoReferenciaHora "R$/hora"
        datetime dataCriacao "Carimbo de data/hora"
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
        enum status "Pendente|Em Andamento|Implementada"
        datetime dataCriacao "Data de geração"
        string explicacaoAI "Justificativa da IA"
    }
    
    GenAI_Request_Context {
        int id PK "Não-Persistente"
        string promptPreview "Prompt enviado"
        boolean isFetching "Estado de carregamento"
        boolean mockFallbackMode "Modo de backup"
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

### 3.3 Estratégia de Índices e Desempenho

| Entidade | Índice | Justificativa |
|----------|--------|---------------|
| `LinhaProducao` | PRIMARY KEY (id) | Acesso por ID |
| `EventoDesperdicio` | INDEX (linhaProducao_id, dataOcorrencia) | Consultas por linha + período |
| `IndicadorSustentabilidade` | UNIQUE (linhaProducao_id, periodo) | Evitar duplicatas |
| `AcaoRecomendada` | INDEX (indicador_id, prioridade) | Ordenação por prioridade |

### 3.4 Dados Mockados (Estratégia de Fallback)

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
        JSON["Análise JSON"]
    end
    
    DB --> NORMAL
    CSV --> FALLBACK
    NORMAL --> JSON
    FALLBACK --> JSON
```

O arquivo `mock-dataset-industria-alimentos.csv` contém dados verossímeis para o cenário de fallback:
- Mais de 50 eventos de desperdício simulados
- 5 linhas de produção
- Período: últimos 30 dias
- Causas realistas (setup, qualidade, parada)

---

## 4. CAMADA DE APLICAÇÃO (APPLICATION LAYER)

### 4.1 Estrutura de Módulos Mendix

```mermaid
flowchart TB
    subgraph ADMIN["Módulo: Administration (Nativo)"]
        A1["System.User"]
        A2["System.Role"]
        A3["System.ModuleRole"]
    end
    
    subgraph CORE["Módulo: WasteGuardian_Core"]
        C1["Modelo de Domínio"]
        C2["Microflows"]
        C3["Páginas"]
        C4["Navegação"]
    end
    
    subgraph ATLAS["Módulo: Atlas_UI_Resources"]
        AT1["Layouts"]
        AT2["Widgets"]
        AT3["Building Blocks"]
    end
    
    subgraph CUSTOM["Módulo: Personalizado (Nosso)"]
        CP1["Integração GenAI"]
        CP2["Geração de Relatórios"]
        CP3["Exportação"]
    end
    
    ADMIN --> CORE
    ATLAS --> CORE
    CORE --> CUSTOM
```

### 4.2 Microflow: MF_RegistrarEventoDesperdicio (Detalhado)

```mermaid
flowchart TB
    START["INÍCIO"] --> INPUT["Parâmetros de Entrada"]
    INPUT --> VALIDATE["Validar Campos Obrigatórios"]
    
    VALIDATE -->|"Válido"| LOOKUP["Recuperar LinhaProducao"]
    LOOKUP -->|"Encontrada"| CREATE_E["Criar EventoDesperdicio"]
    LOOKUP -->|"Não Encontrada"| ERROR_L["Erro: Linha não existe"]
    
    CREATE_E --> BUILD["Calcular OPEX Perdido"]
    BUILD --> SAVE["Commit EventoDesperdicio"]
    
    SAVE --> TRIGGER["Chamar MF_CalcularIndicadores"]
    TRIGGER --> SUCCESS["Retornar Sucesso + Objeto"]
    SUCCESS --> END["FIM"]
    
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
        RETURN Error("A quantidade deve ser positiva")
    
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
    START["INÍCIO"] --> INPUT["linhaId, periodo"]
    INPUT --> QUERY["Recuperar Eventos do Período"]
    
    QUERY --> CHECK_EMPTY{"Tem eventos?"}
    CHECK_EMPTY -->|"Não"| ZERO["Retornar indicadores zerados"]
    CHECK_EMPTY -->|"Sim"| AGGREGATE["Agregar Métricas"]
    
    AGGREGATE --> SUM_PROD["soma(quantidadeProduzida)"]
    AGGREGATE --> SUM_DISC["soma(quantidadeDescartada)"]
    
    SUM_PROD --> CALC_PCT["(descartado/produzido) * 100"]
    SUM_DISC --> CALC_COST["descartado * custoHora"]
    
    CALC_PCT --> CHECK_IND{"Indicador existe?"}
    CALC_COST --> CHECK_IND
    
    CHECK_IND -->|"Não"| NEW_IND["Criar IndicadorSustentabilidade"]
    CHECK_IND -->|"Sim"| UPDATE_IND["Atualizar Indicador existente"]
    
    NEW_IND --> SAVE["Commit Object"]
    UPDATE_IND --> SAVE
    
    SAVE --> RETURN["Retornar Indicador"]
    ZERO --> RETURN
    
    RETURN --> END["FIM"]
    
    style AGGREGATE fill:#fff3e0
    style SAVE fill:#c8e6c9
```

### 4.4 Microflow: MF_GerarPlanoAcaoGenAI (O Núcleo do Sistema)

```mermaid
sequenceDiagram
    participant UI as Página Mendix
    participant NF as Nanoflow (Cliente)
    participant MF as Microflow (Servidor)
    participant DB as Banco de Dados
    participant API as API OpenAI
    participant FALLBACK as Dados Mockados

    UI->>NF: Clica em "Gerar Plano"
    NF->>NF: Define isFetching = true
    NF->>MF: Chama MF_GerarPlanoAcaoGenAI(indicadorId)
    
    MF->>DB: Busca indicador + eventos
    DB-->>MF: Dados retornados
    
    MF->>MF: Constrói Prompt (Sistema + Usuário)
    
    alt Modo Normal (API disponível)
        MF->>API: POST /v1/chat/completions
        API-->>MF: Resposta JSON
        MF->>MF: Analisa Resposta JSON
    else Modo de Fallback
        MF->>FALLBACK: Carrega mock-dataset.csv
        FALLBACK-->>MF: Dados mockados
    end
    
    loop Para cada ação na resposta
        MF->>DB: Criar AcaoRecomendada
        DB-->>MF: Confirmação
    end
    
    MF-->>NF: Lista de ações
    NF->>NF: Define isFetching = false
    NF->>UI: Exibe ações na página
    
    UI->>UI: Renderiza Data List com cards
```

### 4.5 Nanoflow: NF_LoadGenAI (Gestão de Estado do Lado do Cliente)

```mermaid
flowchart TB
    START["Clique do Usuário"] --> SET_TRUE["Define isFetching = true"]
    SET_TRUE --> SHOW["Mostrar Spinner de Carregamento"]
    SHOW --> CALL["Chamar MF_GerarPlanoAcaoGenAI"]
    
    CALL --> RESULT{"Sucesso?"}
    
    RESULT -->|"Sim"| SUCCESS["Mostrar Ações"]
    RESULT -->|"Não"| ERROR["Mostrar Mensagem de Erro"]
    
    SUCCESS --> SET_FALSE["Define isFetching = false"]
    ERROR --> SET_FALSE2["Define isFetching = false"]
    
    SET_FALSE --> HIDE["Ocultar Carregamento"]
    SET_FALSE2 --> HIDE
    
    HIDE --> DISPLAY["Exibir Data List"]
    HIDE --> END["FIM"]
```

---

## 5. CAMADA DE INTEGRAÇÃO (INTEGRATION LAYER)

### 5.1 Arquitetura de Integração OpenAI

```mermaid
flowchart TB
    subgraph REQUEST["Fluxo de Solicitação"]
        PROMPT["Construtor de Prompt"]
        HEADER["Configuração de Cabeçalhos"]
        BODY["Corpo da Solicitação JSON"]
    end
    
    subgraph TRANSPORT["Transporte"]
        HTTP["HTTPS POST"]
        AUTH["Autorização"]
    end
    
    subgraph PROCESSING["Processamento"]
        RATE["Verificação de Limite de Taxa"]
        TIMEOUT["Tratador de Tempo de Espera"]
        RETRY["Lógica de Retentativa"]
    end
    
    subgraph RESPONSE["Processamento de Resposta"]
        PARSE["Análise JSON"]
        VALIDATE["Validar Esquema"]
        ERROR["Tratador de Erros"]
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

### 5.2 Configuração Detalhada da Chamada REST

#### 5.2.1 Configuração da Solicitação

| Parâmetro | Valor | Descrição |
|-----------|-------|-----------|
| **URL** | `https://api.openai.com/v1/chat/completions` | Endpoint da API |
| **Método** | POST | Verbo HTTP |
| **Tempo de Espera (Timeout)** | 30 segundos | Tempo limite da chamada |
| **Codificação** | UTF-8 | Codificação |

#### 5.2.2 Cabeçalhos (Headers)

```http
Authorization: Bearer sk-xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
OpenAI-Beta: assistants=v2
```

#### 5.2.3 Corpo da Solicitação Estruturado

```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "Você é um consultor de eficiência operacional especializado na indústria de alimentos e bebidas..."
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
        SYSTEM["Mensagem do Sistema<br/>(Contexto)"]
        USER["Mensagem do Usuário<br/>(Dados)"]
        CONTEXT["Contexto<br/>(Histórico)"]
        FORMAT["Formato<br/>(Esquema JSON)"]
    end
    
    SYSTEM --> PROMPT
    USER --> PROMPT
    CONTEXT --> PROMPT
    FORMAT --> PROMPT
```

#### 5.3.2 Prompt Completo (Detalhado)

```
# PROMPT DO SISTEMA

Você é um consultor de eficiência operacional especializado na indústria de alimentos e bebidas.
Sua missão é analisar dados de desperdício de produção e sugerir ações práticas e priorizadas para a redução de perdas.

## Contexto do Problema
- Setor: Indústria de Alimentos e Bebidas (A&B)
- Tipo de desperdício: Matéria-prima perdida por falhas de setup e qualidade
- Objetivo: Reduzir o desperdício e otimizar os custos operacionais

## Suas Responsabilidades
1. Analisar os padrões de desperdício nos dados fornecidos
2. Identificar causas-raiz aparentes
3. Gerar de 3 a 5 ações práticas para redução
4. Priorizar considerando o impacto e a viabilidade
5. Para cada ação, fornecer: descrição, prioridade, impacto estimado

## Restrições
- Resposta em português brasileiro
- Formato JSON obrigatório
- Prioridade: Apenas Alta, Média ou Baixa

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

# PROMPT DO USUÁRIO (Modelo)

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
    
    TYPE --> AUTH{"401 Não Autorizado"}
    TYPE --> RATE{"429 Limite de Taxa Excedido"}
    TYPE --> TIMEOUT{"Tempo de Espera Esgotado"}
    TYPE --> PARSE{"Erro de Análise (Parse)"}
    TYPE --> SERVER{"500 Erro do Servidor"}
    TYPE --> NET{"Erro de Rede"}
    
    AUTH --> RENEW["Renovar Chave de API"]
    RATE --> WAIT["Aguardar 5s + Repetir"]
    TIMEOUT --> RETRY["Repetir com Novo Tempo Limite"]
    PARSE --> FALLBACK["Usar Dados de Fallback"]
    SERVER --> RETRY2["Repetir + Registrar Log"]
    NET --> FALLBACK2["Ativar Modo Mockado"]
    
    RENEW --> SUCCESS["Sucesso"]
    WAIT --> SUCCESS
    RETRY --> SUCCESS
    FALLBACK --> SUCCESS
    RETRY2 --> SUCCESS
    FALLBACK2 --> SUCCESS
    
    style AUTH fill:#ffcdd2
    style RATE fill:#fff3e0
    style FALLBACK fill:#c8e6c9
```

| Código de Erro | Significado | Ação Automática |
|-------------|-------------|-----------------|
| 401 | Chave de API inválida | Registrar erro + notificar |
| 429 | Limite de taxa excedido | Aguardar 5s + repetir |
| 500 | Erro no servidor da OpenAI | Repetir 3x com intervalo progressivo (backoff) |
| .timeout | Tempo limite de conexão esgotado | Ativar fallback |
| rede | Sem conexão | Usar dados mockados |

### 5.5 Modo Fallback (Kill Switch) Detalhado

```mermaid
flowchart TB
    START["Início da Chamada"] --> CHECK_MODE{"Modo Mockado<br/>Ativado?"}
    
    CHECK_MODE -->|"Sim (Forçar)"| FORCE["Usar CSV Forçado"]
    CHECK_MODE -->|"Não"| CHECK_NET{"Rede<br/>Disponível?"}
    
    CHECK_NET -->|"Não"| NETWORK["Ativar Mock"]
    CHECK_NET -->|"Sim"| TRY_API["Tentar API"]
    
    TRY_API --> RESULT{"Sucesso?"}
    
    RESULT -->|"Sim"| SUCCESS_API["Processar Resposta"]
    RESULT -->|"Não"| FALLBACK_AUTO["Ativar Mock Automático"]
    
    FORCE --> LOAD_CSV["Carregar CSV"]
    NETWORK --> LOAD_CSV
    FALLBACK_AUTO --> LOAD_CSV
    
    LOAD_CSV --> PARSE["Analisar CSV para JSON"]
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
        HOME["Início<br/>Visão Geral"]
        DETAIL["Detalhe da<br/>Linha"]
        ACTION["Plano de<br/>Ação"]
    end
    
    HOME -->|"Clique no Card"| DETAIL
    DETAIL -->|"Clique em Gerar IA"| ACTION
    DETAIL -->|"Clique em Voltar"| HOME
    ACTION -->|"Clique em Voltar"| DETAIL
    
    HOME -.-|"Mobile"| HOME_M["Visão Mobile"]
    DETAIL -.-|"Mobile"| DETAIL_M["Visão Mobile"]
    ACTION -.-|"Mobile"| ACTION_M["Visão Mobile"]
```

### 6.2 Páginas Detalhadas

#### 6.2.1 Página 1: Visão Geral (Dashboard)

```mermaid
flowchart TB
    subgraph PAGE1["Página: Visão Geral"]
        HEADER["Cabeçalho:<br/>Logo + Usuário"]
        FILTER["Filtros:<br/>Período + Linha"]
        GRID["Data Grid:<br/>Cards de Linha"]
        STATS["Barra de Estatísticas:<br/>KPIs Totais"]
    end
    
    subgraph GRID_ITEMS["Itens do Grid"]
        CARD["Card:<br/>Linha + KPI + Ações"]
        CARD ==> NAME["Nome"]
        CARD ==> PCT["% de Desperdício"]
        CARD ==> COST["Custo em R$"]
        CARD ==> BTN["Botão de Detalhe"]
    end
    
    subgraph STATUS["Indicadores visuais"]
        GREEN["🟢 < 3%"]
        YELLOW["🟡 3-5%"]
        RED["🔴 > 5%"]
    end
    
    GRID --> GRID_ITEMS
    GRID_ITEMS --> STATUS
```

| Componente | Widget do Mendix | Descrição |
|------------|---------------|-----------|
| **Cabeçalho** | Layout | Logo + Avatar do usuário + Sair |
| **Filtros** | Dropdown | Período (Semana/Mês), Linha (Todas/Específica) |
| **Cards Grid** | Data Grid | Lista de linhas com KPIs |
| **KPI Semáforo** | Barra de Progresso | Cor altera por limites (thresholds) |
| **Custo** | Texto | Valor formatado em R$ |
| **Botão de Detalhe** | Botão de Ação | Navegação para a página 2 |

#### 6.2.2 Página 2: Detalhe da Linha

```mermaid
flowchart TB
    subgraph PAGE2["Página: Detalhe da Linha"]
        HEADER["Cabeçalho:<br/>Linha + Voltar"]
        CHART["Gráfico:<br/>Evolução do Desperdício"]
        TABLE["Tabela:<br/>Eventos Recentes"]
        ACTIONS["Ações:<br/>Botão de IA + Carregamento"]
    end
    
    subgraph CHART_DATA["Dados do Gráfico"]
        X["Eixo X: Dias/Turnos"]
        Y["Eixo Y: % de Desperdício"]
        LINE["Linha de Tendência"]
    end
    
    TABLE --> EVENT["Evento:<br/>Data + Qtd + Causa"]
    ACTIONS --> BTN_IA["Botão: Gerar Plano com IA"]
    ACTIONS --> LOAD["Spinner de Carregamento"]
    ACTIONS --> ERROR["Mensagem de Erro"]
```

| Componente | Widget do Mendix | Descrição |
|------------|---------------|-----------|
| **Cabeçalho** | Layout | Nome da linha + botão voltar |
| **Gráfico** | Gráfico de Barras | Evolução por dia ou turno |
| **Tabela** | Data Grid | Lista de eventos com paginação |
| **Botão de IA** | Botão de Ação | Dispara o nanoflow |
| **Carregamento** | Spinner | Exibido durante a chamada da API |
| **Erro** | Snackbar | Exibido se a API falhar |

#### 6.2.3 Página 3: Plano de Ação

```mermaid
flowchart TB
    subgraph PAGE3["Página: Plano de Ação"]
        HEADER["Cabeçalho:<br/>Título + Data"]
        LIST["Data List:<br/>Cards de Ação"]
        DETAIL["Detalhe:<br/>Explicação da IA"]
    end
    
    subgraph CARD["Card de Ação"]
        TITLE["Título da Ação"]
        BADGE["Selo de Prioridade"]
        IMPACT["Impacto Estimado"]
        DESC["Descrição"]
        STATUS["Dropdown de Status"]
    end
    
    LIST --> CARD
    CARD --> BADGE
    CARD --> IMPACT
```

| Componente | Widget do Mendix | Descrição |
|------------|---------------|-----------|
| **Cabeçalho** | Layout | Título + data de geração |
| **Lista de Cards** | Data List | Cards com recomendações |
| **Selo de Prioridade** | Badge | Cor: Alta=🔴, Média=🟡, Baixa=🟢 |
| **Impacto** | Texto | Texto descritivo |
| **Status** | Dropdown | Alterar o status da ação |

### 6.3 Design System: Configuração da Atlas UI

```mermaid
flowchart TB
    subgraph CONFIG["Configuração do Tema"]
        COLOR["Cores"]
        TYPO["Tipografia"]
        SPACING["Espaçamento"]
        COMP["Componentes"]
    end
    
    COLOR --> PRIMARY["Primária: #1976D2"]
    COLOR --> SECONDARY["Secundária: #424242"]
    COLOR --> ACCENT["Destaque: #FF9800"]
    COLOR --> BG["Fundo: #121212"]
    COLOR --> CARD["Card: #1E1E1E"]
    
    TYPO --> FONT["Roboto"]
    TYPO --> SIZE["Base: 14px"]
    
    SPACING --> PADDING["Padding: 16px"]
    SPACING --> MARGIN["Margem: 8px"]
    
    COMP --> BUTTON["Botões"]
    COMP --> INPUT["Entradas"]
    COMP --> CARD_W["Cards"]
```

| Elemento | Valor | Uso |
|----------|-------|-------|
| **Cor Primária** | #1976D2 (Azul Siemens) | Botões principais, links |
| **Cor Secundária** | #424242 | Textos secundários |
| **Cor de Destaque** | #FF9800 | Alertas, avisos |
| **Fundo (Background)** | #121212 | Fundo do modo escuro |
| **Fundo do Card** | #1E1E1E | Cards, recipientes |
| **Sucesso** | #4CAF50 | Status de sucesso |
| **Erro** | #F44336 | Erros, prioridades altas |
| **Família da Fonte** | Roboto | Fonte principal |
| **Tamanho Base da Fonte** | 14px | Tamanho base |
| **Unidade de Espaçamento** | 8px | Módulo de espaçamento |

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
    AUTH --> PROVIDER["Provedor: Nativo"]
    
    PERM --> MODULE["Acesso ao Módulo"]
    PERM --> ENTITY["Acesso à Entidade"]
    PERM --> PAGE["Acesso à Página"]
    
    ROLES --> ADMIN["Administrador"]
    ROLES --> GESTOR["PapelGestor"]
    ROLES --> OPERADOR["PapelOperador"]
    
    AUDIT --> LOG["Logs de Acesso"]
```

### 7.2 Matriz de Permissões

| Papel | LinhaProducao | EventoDesperdicio | Indicador | AcaoRecomendada |
|-------|---------------|-------------------|-----------|-----------------|
| **Administrador** | CRUD | CRUD | CRUD | CRUD |
| **PapelGestor** | Leitura | Leitura/Escrita | Leitura/Escrita | Leitura/Escrita |
| **PapelOperador** | Leitura | Criar | - | - |

### 7.3 Configuração de Segurança no Mendix

```mermaid
flowchart LR
    subgraph SETUP["Configuração de Segurança"]
        MODULE["Configurações do Módulo"]
        ROLE["Criar Papéis"]
        USER["Atribuir Usuários"]
    end
    
    MODULE --> ROLE
    ROLE --> USER
    
    MODULE --> SEC_MODULE["Módulo de Segurança: Completo"]
    ROLE --> R_ADMIN["Admin: Acesso Total"]
    ROLE --> R_GESTOR["Gestor: Leitura/Escrita"]
    ROLE --> R_OPER["Operador: Somente Criar"]
```

---

## 8. DEPLOY E INFRAESTRUTURA

### 8.1 Pipeline de Deploy

```mermaid
flowchart TB
    subgraph DEV["Desenvolvimento"]
        IDE["Mendix Studio Pro"]
        LOCAL["Rodar Localmente"]
    end
    
    subgraph PACKAGE["Pacote"]
        CHECK["Verificação de Consistência"]
        EXPORT["Exportar .mda"]
    end
    
    subgraph CLOUD["Mendix Cloud"]
        UPLOAD["Upload do .mda"]
        BUILD["Construir Pacote (Build)"]
        START["Iniciar App"]
    end
    
    subgraph VERIFY["Verificação"]
        URL_TEST["Testar URL"]
        CRUD_TEST["Testar CRUD"]
        API_TEST["Testar API"]
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

### 8.2 Configuração do Nível Gratuito (Free Tier)

| Recurso | Limite do Nível Gratuito | Impacto no Projeto |
|---------|-----------------|-------------------|
| **Ambientes** | 1 | Sem ambiente de teste (staging) |
| **Usuários** | 10 | Suficiente para a equipe |
| **Arquivos** | 100MB | Suficiente para o app |
| **Horas/Mês** | Ilimitado (limite razoável) | Sem custos |
| **Banco de Dados** | 1GB | Suficiente para o MVP |

### 8.3 Checklist de Deploy

| # | Etapa | Verificação | Tempo Estimado |
|---|-------|-------------|------------|
| 1 | Verificação de Consistência | Nenhum erro no Modeler | 1 min |
| 2 | Exportar .mda | Arquivo gerado | 30 seg |
| 3 | Login no Mendix Cloud | Acesso OK | 30 seg |
| 4 | Criar/Atualizar App | App selecionado | 1 min |
| 5 | Upload do .mda | Barra de progresso completa | 2 min |
| 6 | Iniciar Runtime | Status "Rodando" (Running) | 3 min |
| 7 | Testar URL interna | O app carrega | 30 seg |
| 8 | Testar URL pública | Link acessível | 30 seg |
| 9 | Testar CRUD | Criação/Leitura OK | 1 min |
| 10 | Testar API | A chamada funciona | 1 min |

---

## 9. TESTES E VALIDAÇÃO

### 9.1 Estratégia de Testes

```mermaid
flowchart TB
    subgraph TYPES["Tipos de Teste"]
        UNIT["Testes Unitários<br/>(Microflows)"]
        INTEGRATION["Testes de Integração<br/>(API)"]
        E2E["Testes de Ponta a Ponta<br/>(Fluxo Completo)"]
    end
    
    subgraph AUTOMATION["Automação"]
        MANUAL["Manual"]
        AUTOMATED["Automatizado"]
    end
    
    UNIT --> MANUAL
    INTEGRATION --> AUTOMATED
    E2E --> MANUAL
```

### 9.2 Checklist de Testes Funcionais

| Teste | Cenário | Passos | Resultado Esperado |
|-------|---------|--------|-------------------|
| **T01** | Criar Linha | Enviar formulário de nova linha | A linha aparece no grid |
| **T02** | Criar Evento | Registrar desperdício | Evento salvo + indicadores atualizados |
| **T03** | Listar Eventos | Ver eventos de uma linha | Lista com paginação funciona |
| **T04** | Navegação P1→P2→P3 | Clicar nos botões | Navegação fluida |
| **T05** | Chamada de API Normal | Clicar em "Gerar Plano" | Ações retornadas |
| **T06** | Chamada de API Fallback | Desativar internet | Dados mockados exibidos |
| **T07** | Responsividade Mobile | Abrir no celular | O layout se adapta |
| **T08** | URL de Deploy | Acessar o link público | O app carrega |

### 9.3 Checklist de Testes Não-Funcionais

| Teste | Critério | Verificação |
|-------|----------|-------------|
| **Desempenho** | Tempo de resposta < 3s | Lighthouse / Chrome DevTools |
| **Acessibilidade** | Básico do WCAG | Teste com leitor de tela |
| **Compatibilidade** | Chrome, Firefox, Edge | Teste manual |
| **Segurança** | XSS, SQL Injection | Revisão de código (Code review) |

---

## 10. MONITORAMENTO E OBSERVABILIDADE

### 10.1 Métricas de Monitoramento

| Métrica | Como Coletar | Alerta |
|---------|--------------|--------|
| **Tempo de Atividade (Uptime)** | Status do Mendix Cloud | > 99% |
| **Tempo de Resposta** | Chrome DevTools | < 3s |
| **Taxa de Erro da API** | Logs do Mendix | > 5% |
| **Uso do Banco de Dados** | Console do Mendix Cloud | < 80% |

### 10.2 Estratégia de Log

```mermaid
flowchart TB
    subgraph LOGS["Registro de Logs (Logging)"]
        APP["Logs da Aplicação"]
        API["Logs da API"]
        ERROR["Logs de Erro"]
    end
    
    APP --> WHERE["Onde?"]
    API --> WHERE
    ERROR --> WHERE
    
    WHERE --> CONSOLE["Console do Mendix"]
    WHERE --> CLOUD["Logs da Nuvem"]
    WHERE --> FILE["Arquivos de Log"]
```

---

## 11. REFERÊNCIAS CRUZADAS

| Este Documento | Referências |
|---------------|-------------|
| **SYSTEM-DESIGN.md** | [Índice Técnico](../tech/INDEX.md) |
| **Modelo de Domínio Detalhado** | [01-mendix-domain-model.md](../scaffolding/tech/01-mendix-domain-model.md) |
| **Engenharia de Prompts** | [02-genai-prompts.md](../scaffolding/tech/02-genai-prompts.md) |
| **Wireframes de UI** | [03-mendix-ui-wireframes.md](../scaffolding/tech/03-mendix-ui-wireframes.md) |
| **Integração REST** | [04-rest-api-microflow-logic.md](../scaffolding/tech/04-rest-api-microflow-logic.md) |
| **Script de Teste** | [05-test-openai-script.js](../scaffolding/tech/05-test-openai-script.js) |
| **Dados Mockados** | [mock-dataset-industria-alimentos.csv](../scaffolding/tech/mock-dataset-industria-alimentos.csv) |
| **Roadmap** | [ROADMAP.md](./ROADMAP.md) |
| **Design de Produto** | [PRODUCT-DESIGN.md](./PRODUCT-DESIGN.md) |

---

## 12. APÊNDICE: GLOSSÁRIO TÉCNICO

| Termo | Definição |
|-------|-----------|
| **Mendix Studio Pro** | IDE visual para desenvolvimento low-code |
| **Microflow** | Processo de negócio visual executado no servidor |
| **Nanoflow** | Processo de negócio visual executado no cliente (navegador) |
| **Modelo de Domínio** | Modelo de dados visual no Mendix |
| **Atlas UI** | Design system oficial do Mendix |
| **Entidade Não-Persistente** | Entidade que existe apenas em memória |
| **Chamada REST** | Integração com APIs externas via HTTP |
| **Nível Gratuito (Free Tier)** | Camada gratuita do Mendix Cloud |
| **API da OpenAI** | API da OpenAI para modelos de linguagem |
| **GPT-4o** | Modelo de linguagem mais recente da OpenAI |

---

> **PRINCÍPIO ARQUITETURAL:** *"Dados efêmeros no cliente, dados persistidos no servidor, GenAI como cérebro, Mendix como corpo, resiliência como escudo."*

---

*Documento expandido em 31 de Março de 2026*  
*Versão: 2.0*
