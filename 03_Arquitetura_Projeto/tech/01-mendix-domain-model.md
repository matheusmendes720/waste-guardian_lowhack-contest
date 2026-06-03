# Arquitetura Mendix: Data Model & Fluxos Core ("Waste Guardian")

O Domain Model é o coração anatômico da nossa solução antifrágil. Desenhado primariamente para Hackathons, ele isola **Lógica de Segurança (Role-Based)** da **Carga de RAG (GenAI)** através da dualidade Persistente vs. Não-Persistente (Memória Local do Browser do Juiz).

> [!IMPORTANT]
> A regra Mendix de Ouro para a banca técnica: Telas que fazem requisição massiva para Web Services (OpenAI via módulo GenAI ou API REST nativo) devem usar dados efêmeros (`Non-Persistent Entities`) para o payload não esmagar I/O de disco da Mendix Free Cloud e causar timeouts durante os **3 minutos do Pitch**. Apenas os resultados consolidados são "comittados" na base persistente.

---

## 1. Mendix Domain Model (UML Entidades Principais)

A arquitetura reflete o duplo-funil de Venda B2B Mendix/Siemens abordando duas personas distintas:
1. **O Chão de Fábrica:** Injeta falhas brutalmente em real-time.
2. **O Nível Diretório (C-Level):** Consome predições de ROI massivas baseadas na API OpenAI.

### 1.1 Entidades Base (Persistentes)

> [!NOTE]
> *Entidades azuis* no modelador Mendix. Ficam salvas fisicamente e compõem a métrica "CRUD com Persistência" exigida no edital.

**`Administration.Account` Especializações (O Módulo de Segurança Base App Store)**
- `Role_Operador` (Inherits `System.User`): Limitado a Inserção (`EventoDesperdicio`).
- `Role_GestorF&B` (Inherits `System.User`): Possui leitura do `PlanoAcaoMestre` inteiro e Dashboard.

**`Fabrica_LinhaProducao` (System Master Data)**
- `Header_Linha` (String): Ex: "Envasamento 2"
- `SensorIOT_Simples_Status` (Boolean)
- `CustoReferenciaHora` (Decimal): Para calcular OPEX ($) perdido.

**`EventoDesperdicio` (Data Ingestion)**
- `DataOcorrencia` (DateTime)
- `CausaNarrativa` (String Unlimited): Desabafo informal do operador. *É o ouro que vai para o Prompt AI*.
- `KilosRefugo` (Decimal): Insere os Kg ou Litros descartados.
- `OpexPerdido` (Decimal): *Calculado CustoReferenciaHora * Tempo Parada*. 

**`PlanoAcaoMestre` (A Visão C-Level - Consolidated GenAI output)**
- `TituloDaSolucao` (String): (Reflexo da Chave 1 do Json REST OpenAI).
- `NivelUrgencia` (Enum): `Crítico`, `Atenção`, `Normal`.
- `ScoreImpacto` (Integer): (Reflexo de 0 a 100).
- `Status` (Enum): `Revisando`, `Aprovado`, `Implantado_No_Chao`.

**`AcaoEstrategica` (1-to-N) (A granularidade visual)**
- `DescricaoPasso` (String Unlimited): Cada string dentro do nosso Array da OpenAI.
- Exibir essas ações separadas em múltiplos sub-cards no Mendix (Atlas Data List Widget) esmaga a UX concorrente de texto corrido aglutinado.

---

### 1.2 Entidades Antifrágeis (Non-Persistent)

> [!TIP]
> *Entidades laranjas* no modelador Mendix. Vivem na memória do browser. Permite que o C-Level clique em "Gerar Nova Estratégia de Mitigação", edite o Prompt cru na tela sem "comprometer o dado salvo" e, se aprovar a saída da GenAI, ele consolida gerando um `CommitObject`.

**`GenAI_Request_Context`**
- `TriggeredPromptPreview` (String Unlimited): O JSON cru e a string textual sendo enviada à REST API.
- `IsFetching` (Boolean): Usado como trigger de Progress Bar Visual `Nanoflow`.
- **The Kill Switch**: `MockFallbackMode_Ativado` (Boolean). Se marcado como **True**, o Microflow cruza as chamadas REST e enche a interface não-persistente puxando dados estáticos de tabelas mockadas em vez de arriscar Timeout na submissão. Cobre riscos se o Wi-Fi da sede cair aos 185 min da competição.

---

## 2. Diagrama Entidade-Relacionamento ERD (Robust Modeling)

```mermaid
erDiagram
    %% Core Entities
    Fabrica_LinhaProducao ||--o{ EventoDesperdicio : "Registra Perdas"
    EventoDesperdicio ||--o| PlanoAcaoMestre : "Inicia Análise de IA (1:1)"
    PlanoAcaoMestre ||--|{ AcaoEstrategica : "Contém N Ações JSON Array (1:N)"
    
    %% Non Persistent Memory (The Magic Layer)
    PlanoAcaoMestre ||--o| GenAI_Request_Context : "Efêmero UI State"
    
    %% Users Modules Roles
    SystemUser ||--o{ Role_GestorF_B : "Herança Mendix Security"
    SystemUser ||--o{ Role_Operador : "Herança Mendix Security"


    Fabrica_LinhaProducao {
        AutoNumber ID PK
        string NomeSetor
        decimal CustoOPEX_Sec
    }
    
    EventoDesperdicio {
        DateTime Cadastro
        string CausaDesabafo
        decimal OpexVazamento
    }
    
    PlanoAcaoMestre {
        string AI_TituloSolucao
        string UrgenciaKPI
        integer ImpactoScore (0-100)
    }
    
    AcaoEstrategica {
        string InsightConcreto
    }

    GenAI_Request_Context {
        string DraftRequestREST
        boolean MockFallback_KillSwitch
    }
```

---

## 3. Microflows e Nanoflows Revisados (Pipeline Execution)

**Nanoflow C-Level Viewer:** `NF_LoadGenAI`
(O Nanoflow vive no browser do Diretor)
1. Instancia uma nova página recebendo o objeto do `EventoDesperdicio` na tela.
2. Troca o `IsFetching` para Verdadeiro. (Widget de Esqueleto Carregando).
3. Invoca O *Microflow Pesado* no servidor.

**Microflow GenAI Backend:** `ACT_GenerateRestMitigationPlan`
(Onde a mágica bate no servidor)
1. Constrói a String JSON `Request`.
2. Checa o Booleano `MockFallbackMode`. Se falso: Bate na `REST Call` oficial.
3. Se verdadeiro (Sem Internet ou Timeout API): Dispara `Map` estático (CSV Mocado).
4. `Import Mapping` do Mendix: Engole a String JSON Restrita (Array).
5. Passa no laço Iterador (Loop) preenchendo o `1:N` para cada `AcaoEstrategica` e associando ao `PlanoMestre` pai.
6. Atualiza o Nível_de_Urgencia e retorna ao `Nanoflow`.

**Nanoflow CallBack:** 
- `IsFetching` = Falso. Interface exibe os Layouts "Cards" Atlas lindos baseados nos Insights de Redução ODS 9/12 recebidos.
