# Bootcamp de Mendix "Laser Focused" para o Hackathon (35 Horas)

A chave para vencer um hackathon de 35 horas em Mendix não é saber de tudo; é saber usar a plataforma para construir **rápido** e **sem quebrar a Arquitetura Antifrágil** (kill-switches de fallback e mocks). 

A partir de agora, o time não pode se perder em tutoriais irrelevantes. Eis a trilha exata de estudos e a tese de implementação.

---

## 🎯 1. Foco Principal: Atlas UI e Prototipagem Visual

O jurado é visual. Vocês têm que impressionar nos primeiros 15 segundos.

### O Que Estudar Urgente:
- **Building Blocks Mendix:** O framework visual (Atlas UI) possui pequenos pedaços modulares chamados *Building Blocks*. Eles já vêm com estilos profissionais de dashboards e formulários. Não desenhe listas brutas; use as *List Views* e *Data Grids* do Atlas.
- **Role-based Security (Acessos):** O diferencial competitivo é o login. Mostrem dois painéis distintos:
  - Painel do Operador (Coletando dados via Mobile).
  - Painel do Gestor C-Level (Vendo o ROI e dashboard da Inteligência Artificial em Desktop).
- **Layouts Padrão (Navbars & Menus):** Aprendam a configurar o navigation profile do Mendix para que a UI Desktop não pareça com a Mobile.

> [!TIP]
> **HACK:** Usem as bibliotecas do *Mendix Marketplace* (Charts, Maps, etc.) em vez de construir interfaces do zero. As UIs devem parecer caras. Foco exclusivo em montar as telas **antes** da lógica complexa.

---

## 🔌 2. A "Cola Mágica": Integrando Open AI (O Cérebro)

A Siemens vende Mendix porque ele se conecta com o mundo de dados legados por APIs. Vocês vão construir a "camada GenAI". Para um hackathon, usar o *REST API client nativo* do Mendix é infinitamente mais forte do que programar em Node por fora.

### O Que Estudar Urgente:
1. **Call REST Service:** Como enviar as requisições POST dentro de um Microflow apontando direto para `api.openai.com`. Entender autenticação `Header` com `Bearer Token`.
2. **JSON Structures & Mappings:**
   - **Import Mapping:** Como transformar a resposta *JSON textual* da OpenAI nativamente em **Entities** do Mendix, e depois atualizar a tela.
   - **Export Mapping:** Como juntar três campos que o Operador preencheu e montar uma string gigante de Prompt pra mandar na sua Request JSON.
3. **Non-Persistent Entities (Entidades na Memória Básica):** Toda interface de chat, input de IA, ou busca deve usar *Non-Persistent Entities* para que o app fique veloz.

> [!WARNING]
> Mendix possui módulos GenAI Commons prontos (Mendix 10), porém, **não dependam** deles 100%. Treinem criar a chamada `Call REST` crua. Isso garante que, se atualizar o módulo ou der pau na compilação na hora da demo física, vocês tenham a alternativa no-code na ponta da língua.

---

## ⚙️ 3. Lógica de Negócios: Microflows vs. Nanoflows

Saber escolher o fluxo reduz o delay de UI. 

### O Que Estudar Urgente:
- **Microflows (Roda do lado do Servidor):** Essencial para as chamadas da API do OpenAI, integrações e segurança (verificar acessos). Onde mora "a mágica".
- **Nanoflows (Roda no Browser/Device):** Se for checar se o formulário está vazio ou dar feedback visual (Progress Bar), use *Nanoflows*. Eles são off-line e ultrarrápidos, evitando sobrecarregar o painel.
- **Client Side Fetch (A Morte do Loading):** Carreguem seus dados na tela com Nanoflows simulando o preenchimento, mostrando loaders para a banca enquanto a IA decide qual é a predição. 

---

## 🗃️ 4. Modelagem de Dados Minimalista (Domain Model) 

Hackathon não é ERP. Não criem tabelas relacionais complexas em terceira forma normal.

### O Que Estudar Urgente:
- A regra do 3: Tente resolver todo o escopo de entidades com o mínimo possível de associações reais. Exemplo: `User` -> `<1-1>` -> `DashboardState` -> `<1-N>` -> `AIPredictions`.
- **Validação de Associações (1-para-N):** Como linkar o funcionário real com a lista de previsões sobre a máquina X.
- **"The Kill-Switch":** Estudem como trocar a "Data Source" de uma Tabela Mendix de *Microflow (Chamando IA)* para *Database (Mostrando Tabela Mocada Manual)*. Se a internet do evento ou a API da OpenAI cair... **O Kill-Switch** salva pitches.

---

### 🔥 Próximos Passos (Ação do Time):
1. **Separar Especializações:** 
   - 1 Membro mergulha em *Import/Export JSON Mapping + REST*.
   - 1 Membro mergulha em *Atlas UI (Building Blocks & Role-based).*
   - 1 Membro mergulha em *Non-Persistent Entities e Nanoflows (Tirar Tensão Visual)*.
2. **Setup do App Blank:** Façam um Mendix Blank App HOJE. Puxem os pacotes Atlas UI.
3. **Test Sandbox:** Tentem fazer uma chamada simples "POST Open AI" usando Mappings e retornando o resultado num Label de tela usando The Kill-Switch methodology.
