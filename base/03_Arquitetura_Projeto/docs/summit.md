# 🏭 Waste Guardian (Hackathon Low Hack 2026 Submission)

> Transformando Desperdício Industrial em Inteligência Operacional via Low-Code e OpenAI.

[![Mendix Tool](https://img.shields.io/badge/Made_With-Mendix_Low_Code-005D97?style=for-the-badge&logo=mendix&logoColor=white)](#)

[![OpenAI Power](https://img.shields.io/badge/GenAI-OpenAI_GPT_4o-000000?style=for-the-badge&logo=openai&logoColor=white)](#)

*Este software é a submissão final da Equipe [NOME DA EQUIPE] para o desafio Siemens/Comunidade Hackathon Brasil.*

## 🔗 Links Oficiais Obrigatórios

-**Link do Deploy (Mendix Cloud):**`[INSERIR URL CLOUD AQUI]`

-**Link do Pitch no YouTube (Não Listado):**`[INSERIR URL DO YOUTUBE AQUI]`

---

## 🌎 O Desafio e as ODS

O Waste Guardian atua diretamente nas propostas do **ODS 9 (Indústria, Inovação e Infraestrutura)** e **ODS 12 (Consumo e Produção Responsáveis)**. No Brasil, e no mundo todo, a ineficiência de processos de produção (ex: falta de calibração em válvulas ou atrasos logísticos na linha) gera toneladas de desperdício em fábricas F&B.

Não se trata APENAS de gerar gráficos de perdas, mas de agir.

## 🛠️ O Que o Waste Guardian Faz (A Solução)

Construído na nuvem Mendix, entregamos uma ferramenta PWA (responsiva) para o Supervisor de Chão de Fábrica. O fluxo funciona assim:

1.**Report Simplificado (Input):** O operador aponta que a *Linha Envasadora 2* vazou material e a causa provável.

2.**Processamento Assíncrono:** Os Microflows em Mendix enviam este log de evento via REST API para nossa Engine "WasteBrain" da OpenAI customizada no server-side.

3.**Delivery Cognitivo:** Num tempo de latência de 2 segundos, o supervisor recebe um "Action Plan" inteligente e estruturado, identificando se a anomalia tem correlação com outros turnos, categorizando o Score de Urgência e listando as três ações de contingência imediata antes que o setor de planejamento precise agir. Economia instantânea!

## 🏰 Arquitetura Técnica Mendix & AI

Nós exploramos o total do ecossistema oferecido pelas regras do Low Hack:

- 🧑‍💻 **Páginas Navegáveis**: A aplicação excede as requisições possuindo 3 fluxos claros (1. Dashboard Macro, 2. Formulário Operacional, 3. Detalhes do Plano de Ação AI View).
- 🧩 **Domain Model Persistente:** Foi desenvolvida a entidade de relacionamentos (Data Source de CRUD completo que atende persistência real sem mock após o primeiro envio).
- ⚙️ **Integrações Nativas de Fluxo (Microflows):** Nós criamos workflows de `REST Mendix Connectors` onde empacotamos `JSON Payloads` formatados usando String Builders Nativos, reduzindo o tráfego HTTP para a OpenAI. Retornamos o Mapeamento e vinculamos ao Objeto `PlanoAcao` perfeitamente em layout.

---

**Declaração de Conformidade e Autoria:** Atestamos nos conformes do Regulamento Vigente que a totalidade das lógicas deste projeto foram criadas exclusivamente pela nossa equipe entre os dias 18/04 e 19/04/2026. Obrigado Siemens, TrueChange e Comunidade!
