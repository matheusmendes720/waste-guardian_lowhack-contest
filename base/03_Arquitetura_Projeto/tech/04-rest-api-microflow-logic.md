# Mendix REST API Microflow (A Integração 1:N & Kill Switch)

O coração técnico do Hackathon Low Hack onde muitos travam (desistindo e falhando na regra) é consumir a API do ChatGPT via Mendix nativamente. 
Não invente roda com Java actions, use o Core Mendix, os Iterators nativos e o JSON Parse. 

Nesta versão **Enterprise B2B Antifrágil**, ensinamos o Mendix a quebrar o gigantesco texto analítico da IA num poderoso *Array [1:N]* Renderizável, e adicionamos uma Rota Secundária (*Kill Switch*) caso não haja Wi-Fi na sede ou limite de cota da OpenAI extourar.

## 0. Pipeline Visual (Microflow Master Architect)

A chamada é disparada do C-Level Dashboard (`ACT_IntegrarWasteGuardian_OpenAI`).

```mermaid
graph TD
    A["Cockpit Gestor (Atlas UI)"] -->|Click 'Acionar Assistente ODS'| B("Microflow: ACT_GerarMasterPlan")
    
    %% The Entry Context
    B --> C{Decision: Kill Switch Ativado?}
    
    %% Path A: The Kill Switch (Offline/Timeout/Failsafe)
    C -->|Sim (Fallback Mode)| D["Load JSON Mock String (Local Variable)"]
    D --> L["Import Mapping (JSON -> NPE_Entities)"]
    
    %% Path B: The Official Web Service
    C -->|Não| E["Create NPE: RequestOpenAI"]
    E --> F["Set Content: Concatena Texto Dores (Fábrica)"]
    F --> G["JSON Template Builder (String Format)"]
    G --> H["Call REST: POST api.openai.com/v1/chat/completions"]
    H -->|Erro Timeout/500| I["Error Catch: Seta KillSwitch=True e Retry (Subflow)"]
    H -->|200 OK| J["Extrai Resposta HTTP Body (NPE Result)"]
    J --> L
    
    %% The Beautiful 1:N Loop (Mendix Native)
    L --> M["Iterate: Loop over NPE_AcoesEstrategicas"]
    M --> N{"Create Object: AcaoEstrategica (Azul DB)"}
    N --> O["Set Reference: Acao_PlanoMestre"]
    O --> P["Fim do Loop"]
    
    P --> Q[Commit Object: PlanoAcaoMestre (DB Salvo)]
    Q --> R["Fecha Modal & Atualiza Painel 1:N List View"]
    
    style C fill:#fff3b0,stroke:#333,stroke-width:2px
    style D fill:#f99,stroke:#333
    style H fill:#f96,stroke:#333
    style L fill:#9f9,stroke:#333
    style M fill:#c2f0c2,stroke:#333,stroke-width:2px
```

---

## 1. Tratamento Tático da Integração OpenAI

### Step 1: O Kill Switch (Bypass Seguro)
Como primeira ação do Microflow **Exclusive Split** checkando uma constante ou atributo `AppConfig.FallbackMode`. 
Se Verdadeiro, pule toda a lógica de montar HTPP Headers HTTP e faça um `Create Variable (String)` colando um JSON mocado perfeito e direcione para a caixinha do *Import Mapping*. Se a API cair ou bater limite da conta grátis na frente dos jurados, você vira a chave (The Kill Switch) comanda no backend, e a demo **rola lisa** num mock JSON de super luxo no telão. 

### Step 2: Body String Template Builder
A OpenAI exigirá formatação perfeita caso o Kill Switch não esteja acionado.
- `Create Variable` (Saída: `$JSON_Payload_String`):
```json
{
  "model": "gpt-4o-mini",
  "response_format": { "type": "json_object" },
  "messages": [
    { "role": "system", "content": "You are WasteGuardian B2B. Respond strictly with the exact JSON Schema containing 'titulo_estrategia' and an array 'acoes_estrategicas' containing 'insight'." },
    { "role": "user", "content": "{1}" }
  ]
}
```
*(Onde `{1}` é o Desabafo cru do Chão de Fábrica inserido pelo Operador)*.

### Step 3: Call REST Mendix
- **URL**: `https://api.openai.com/v1/chat/completions` (HTTP/POST).
- **HTTP Headers (Obrigatórios)**:
    - `Content-Type`: `'application/json'`.
    - `Authorization`: `'Bearer ' + @Constants.OpenAIToken`. *(Nunca codar a Key dura no texto do Microflow, a Banca olhará as Configurations do projeto!)*.
- **Payload**: Habilite *Custom Request Template* na tab do REST e cole a variável `$JSON_Payload_String`.
- **Response**: Mapie a resposta HTTP String bruta localmente no Microflow para pegar os nós do LLM (`Choices/Message/Content`). A OpenAI retorna JSON dentro da string "Content", o que significa que rola um Duplo-Unwraping.

---

## 2. A Camada Brilhante: Import Mapping e o Loop (1:N)

Esse passo é onde a magia de Backend Mendix grita nível sênior.
Dentro do "Content" da Resposta 200 OK recebemos nosso Schema JSON Customizado com Array!

1. Na activity **`Apply Import Mapping`** no Mendix, jogue o texto do JSON recebido.
2. O Mapping do Mendix vai "Guspir" (Returns) um objeto Raiz NPE (`ROOT_JSON`) com uma lista associada de Entidades Laranjas Não-Persistentes (`List of NPE_InsightAcao`).
3. Adicione um **`List Operation` -> Mendix Loop** que recebe essa Lista e itera sobre ela `$IteratorAcao`.
4. Dentro do Loop (A caixinha pontilhada laranja do Studio):
   - Adicione `Create Object` -> Escolha a **Entidade Azul do Banco de Dados (Persistente)** `AcaoEstrategica`.
   - Adicione um `Change Object`. Sete o nome da Ação para o Iterator cru (`$NovoAcaoDB/InsightRaw = $IteratorAcao/insight`).
   - Adicione a Associação Relacional: `$NovoAcaoDB/FK_PlanoAcaoMestre = $PlanoAcaoAtualRecebidoPelaTela`.
5. Fora do Loop, crie um Commit Object na Lista Mestre Fechando a transação. O BD do free tier só toma Hit no I/O 1 vez no final em commit escalonado.

## O Troféu: A Reação da UI
Quando o Commit fechar e o Mendix fechar/refresh a Modal, a List View da App automaticamente puxará o banco de dados e explodirá na tela em UI Mendix Múltiplas Caixas lindas individualizadas ao invés de forçar o gestor B2B a ler um tijolo de texto gerado por IA. Elegância visual gerada por engenharia lógica.
