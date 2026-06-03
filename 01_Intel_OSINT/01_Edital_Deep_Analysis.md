# 01: Edital Deep Analysis — Low Hack 2026

> **Documento de Inteligência Competitiva: Análise Cirúrgica do Regulamento**  
> **Evento:** Low Hack 2026 (Siemens/Mendix/TrueChange)  
> **Data:** 18-19 de Abril de 2026  
> **Plataforma:** Mendix + OpenAI API

---

## 📋 Executive Summary

Esta análise decompõe o regulamento do Low Hack 2026 para extrair **alavancagens estratégicas, pontos de desempate, gatilhos de desclassificação e oportunidades de vendor lock-in**. O objetivo é transformar as regras do jogo em um mapa de batalha para vitória garantida.

**Classificação de Risco:** 🟢 BAIXO (Edital claro, restrições bem definidas, múltiplas alavancagens identificadas)

---

# 1. THE "HACK" OF THE JUDGES (Human & AI)

## 1.1 Exact Vocabulary to Use (Mirror Language)

O regulamento utiliza termos específicos que devem ser espelhados EXATAMENTE em todos os entregáveis para ativar o reconhecimento padrão em juízes humanos e ferramentas de triagem por IA.

### 🎯 Palavras-Chave Obrigatórias (Buzzwords do Edital)

| Categoria | Termos a Serem Usados | Frequência Mínima | Onde Usar |
|-----------|----------------------|-------------------|-----------|
| **Plataforma** | "Mendix", "Low-code", "Mendix Cloud", "Free Tier", "Microflow", "Nanoflow" | 5+ vezes | Pitch, README, Documentação |
| **IA** | "Inteligência Artificial Generativa", "GenAI", "OpenAI API", "Integração efetiva" | 4+ vezes | Pitch, README, Código |
| **Sustentabilidade** | "Consumo consciente", "Produção responsável", "ODS 9", "ODS 12", "Redução de desperdício" | 6+ vezes | Pitch, Business Model |
| **Impacto** | "Benefícios mensuráveis", "Eficiência operacional", "Otimização de recursos" | 3+ vezes | Pitch, Documentação |
| **Negócio** | "Modelo de negócio", "Viabilidade comercial", "Público-alvo", "Monetização" | 3+ vezes | Pitch, Canvas |
| **Apresentação** | "Qualidade comunicacional", "Clareza de exposição", "Domínio do conteúdo" | 2+ vezes | Auto-avaliação |

### 🚫 Termos a EVITAR (Substituições Obrigatórias)

| NUNCA Use | SEMPRE Use | Motivo |
|-----------|-----------|--------|
| "App" | "Aplicação", "Solução" | Linguagem corporativa Siemens |
| "Código" | "Lógica de negócio", "Microflow" | Alinhamento Mendix |
| "ChatGPT" | "OpenAI API", "GenAI" | Terminologia técnica correta |
| "Grátis" | "Modelo freemium", "Camada gratuita" | Linguagem de negócio |
| "Sustentável" (sozinho) | "Aderente às ODS 9 e 12" | Especificidade regulamentar |
| "Protótipo" | "Aplicação funcional", "MVP operacional" | Ilusão de completude |

## 1.2 SEO Keywords for Judges

Para otimização de triagem (tanto humana quanto automatizada), incorporar estas frases exatas:

```
- "Transformação digital industrial"
- "Eficiência operacional mensurável"
- "Redução de custos operacionais"
- "Rastreabilidade de produção"
- "Automação de decisões"
- "Indústria 4.0"
- "Economia circular"
- "Metas de sustentabilidade corporativa"
- "Retorno sobre investimento (ROI)"
- "Indicadores de performance (KPIs)"
```

## 1.3 Language Pattern Mirroring

### Padrões Sintáticos do Edital a Serem Replicados:

1. **Estrutura de Peso:** "Critério X (peso alto)" → Usar "Impacto mensurável (alta prioridade)"
2. **Condições Obrigatórias:** "A solução DEVE..." → Usar em documentação técnica
3. **Hierarquia de Critérios:** "Primeiro critério de desempate..." → Mencionar explicitamente em estratégia
4. **Formulação de Benefícios:** "Capacidade de gerar benefícios mensuráveis" → Template para claims de impacto

---

# 2. SCORING ENGINEERING

## 2.1 Rubric Breakdown (30% Business, 30% Tech, 40% Pitch)

### Decomposição da Matriz de Avaliação

| Critério | Peso Real | Estratégia de Maximização | Owner |
|----------|-----------|---------------------------|-------|
| **Potencial de Impacto** | Alto (~20%) | Números absolutos (R$ economizados, kg evitados) | Business |
| **Modelo de Negócio** | Alto (~20%) | Canvas completo + precificação específica | Business |
| **Aderência ao Desafio** | Alto (~20%) | Conexão explícita ODS 9/12 em cada slide | Pitch |
| **Apresentação do Vídeo-Pitch** | Alto (~20%) | 3 min cronometrados, narrativa problema-solução-impacto | Pitch |
| **Critério Técnico** | Alto (~20%) | Deploy funcional + GenAI operacional + 3+ páginas | Tech |
| **Inovação da Solução** | Médio (~5%) | Diferenciador visual "WOW" (ex: Dashboard 3D) | Tech+Design |

**Observação Crítica:** O regulamento não especifica pesos percentuais exatos, mas categoriza em "peso alto" e "peso médio". Inferimos que todos os critérios de "peso alto" têm peso equivalente entre si (~20% cada), enquanto "Inovação" tem peso menor.

### Estratégia de Pontuação Máxima

```
FÓRMULA DA VITÓRIA = 
    (Deploy 100% funcional) ×
    (GenAI com valor real demonstrado) ×
    (Pitch < 3min com números de impacto) ×
    (Documentação completa) ×
    (UI/UX "enterprise-grade")
```

## 2.2 Tie-Breaker Strategy (Over-Engineer the 1st Tie-Breaker)

### Hierarquia Oficial de Desempate:

1. **PRIMEIRO CRITÉRIO:** Qualidade de documentação e entregáveis
2. **SEGUNDO CRITÉRIO:** Nota de inovação da solução

### 🔥 ESTRATÉGIA DE SOBRE-ENGENHARIA DO 1º DESEMPATE

Como a qualidade de documentação é o PRIMEIRO desempate, devemos over-engineer este aspecto:

#### Documentação Técnica Premium (Checklist de Excelência):

- [ ] **Domain Model Visual:** Diagrama ERD profissional com cardinalidades
- [ ] **Documentação de Microflows:** Print de cada microflow + explicação textual
- [ ] **Arquitetura de Integração:** Diagrama de sequência da chamada OpenAI
- [ ] **Screenshots Anotados:** Cada página com callouts explicativos
- [ ] **README Estruturado:** Formato profissional com badges, sumário e links
- [ ] **Vídeo de Demonstração Técnica:** Opcional, mas diferenciador
- [ ] **Guia de Deploy:** Instruções passo-a-passo para replicação

#### Elemento "WOW" para 2º Critério (Inovação):

Para vencer no segundo critério de desempate, incluir:
- **Visualização 3D ou Dashboard Animado** (se viável tecnicamente)
- **Feature de "What-if Analysis"** usando GenAI para simular cenários
- **Integração com Voz** para comandos hands-free em fábrica

## 2.3 Tactical Scoring Matrix

| Área | Meta de Pontuação | Tática Específica |
|------|------------------|-------------------|
| Business | 95/100 | Canvas completo + 3 fontes de receita + métricas de TAM |
| Tech | 95/100 | Deploy antecipado + tratamento de erro robusto + responsividade |
| Pitch | 98/100 | Roteiro ensaiado 5x + áudio limpo + transições suaves |
| Documentação | 100/100 | Template premium + screenshots em 4K + organização perfeita |

---

# 3. THE DELIVERABLES MATRIX

## 3.1 Timeline Mapping: Exact Format, Tone, Requirements

### Fase 1: Pré-Evento (Até 17/04)

| Entregável Interno | Formato | Tom | Responsável | Deadline |
|-------------------|---------|-----|-------------|----------|
| Domain Model | Mendix + Markdown | Técnico preciso | Tech Lead | 15/04 |
| Wireframes UI | Figma/Sketch | Visual enterprise | Designer | 16/04 |
| Roteiro Pitch | Markdown com timings | Persuasivo, dados | Pitch Owner | 17/04 |
| Business Canvas | PDF/Markdown | Profissional, ROI | Business | 17/04 |

### Fase 2: Durante o Evento (18-19/04)

| Checkpoint | Horário | Entregável | Validação |
|------------|---------|------------|-----------|
| **Dia 1 - Meio-dia** | 12:00 | 3 páginas navegáveis (esqueleto) | Teste de navegação |
| **Dia 1 - 18:00** | 18:00 | CRUD funcional em todas as entidades | Criar/Ler/Editar/Excluir |
| **Dia 1 - 22:00** | 22:00 | GenAI integrada e respondendo | Teste de API |
| **Dia 2 - 12:00** | 12:00 | UI polida (Atlas UI + customização) | Teste de responsividade |
| **Dia 2 - 18:00** | 18:00 | Deploy na Mendix Cloud | Link acessível público |
| **Dia 2 - 20:30** | 20:30 | Vídeo pitch gravado | < 3 min, YouTube |
| **Dia 2 - 21:30** | 21:30 | Pasta de entregáveis organizada | Checklist completo |
| **DEADLINE** | 21:59 | Submissão final | Confirmação de envio |

### Fase 3: Entregáveis Finais (19/04 até 21:59)

| Item | Formato Exato | Especificações | Tonalidade |
|------|---------------|----------------|------------|
| **Vídeo Pitch** | YouTube (não listado) | MP4, ≤3 min, 1080p, áudio estéreo | Confiante, profissional, industrial |
| **Aplicação** | Mendix Cloud Free Tier | Link público, responsivo | "Enterprise-ready" |
| **Documentação** | Pasta com README + prints | Markdown, screenshots anotados | Técnico e acessível |
| **Links** | Arquivos .txt separados | Um para app, um para vídeo | Simples, direto |

## 3.2 Sub-Delivery Specifications

### Vídeo Pitch (O Entregável Mais Crítico)

```
ESTRUTURA OBRIGATÓRIA (3 min = 180 segundos):

[0:00-0:20] HOOK / PROBLEMA
    - "A indústria brasileira perde R$ 47 bilhões por ano com desperdício"
    - Conexão imediata com ODS 9/12

[0:20-1:10] DEMO DA SOLUÇÃO (50 segundos)
    - Navegação real pela aplicação
    - Destaque: GenAI gerando recomendação ao vivo

[1:10-1:50] COMO FUNCIONA (40 segundos)
    - "Construído em Mendix com integração OpenAI"
    - Arquitetura simplificada (1 slide)

[1:50-2:30] IMPACTO E MODELO (40 segundos)
    - Números: "Redução de 15-30% em desperdício"
    - Modelo B2B SaaS

[2:30-2:55] PRÓXIMOS PASSOS (25 segundos)
    - Pipeline de features
    - Call to action

[2:55-3:00] CLOSE
    - Logo + contato
```

### Pasta de Entregáveis

```
📁 Entrega_LowHack2026_[NomeEquipe]/
├── 📄 README.md                      ← Visão geral + links
├── 📄 LINK_APLICACAO.txt            ← URL da Mendix Cloud
├── 📄 LINK_VIDEO.txt                ← URL do YouTube
├── 📄 REGULAMENTO_COMPLETO.md        ← Checklist de compliance
│
├── 📁 Documentacao_Tecnica/
│   ├── domain_model.png
│   ├── microflows/
│   │   ├── MF_RegistrarEvento.png
│   │   ├── MF_CalcularIndicadores.png
│   │   └── MF_GerarPlanoAcaoGenAI.png
│   └── arquitetura_integracao.png
│
├── 📁 Screenshots/
│   ├── pagina_01_dashboard.png
│   ├── pagina_02_detalhe_linha.png
│   └── pagina_03_plano_acao.png
│
└── 📁 Pitch/
    ├── roteiro_completo.md
    └── storyboard.pdf
```

---

# 4. THE IP & VENDOR LOCK-IN STRATEGY

## 4.1 IP Analysis

### O Que o Edital Diz:
O regulamento do Low Hack 2026 NÃO contém cláusulas predatórias de transferência de IP. A propriedade intelectual permanece com a equipe.

### Implicação Estratégica:
Como não há exigência de cessão de direitos, podemos:
1. **Mostrar tudo** sem receio de "roubo" de ideia
2. **Manter código proprietário** para evolução pós-evento
3. **Construir case de portfólio** de alto valor

## 4.2 Vendor Lock-in Strategy (Lock-in de Competência)

Mesmo sem risco de perda de IP, aplicamos a estratégia de **Vendor Lock-in de Competência** — tornando a solução tecnicamente tão sofisticada que demonstra nossa capacidade única de implementação.

### Elementos de Arquitetura "Enterprise-Grade":

| Componente | Implementação | Efeito de Lock-in |
|------------|---------------|-------------------|
| **Domain Model** | 5+ entidades relacionadas | Complexidade de modelagem |
| **Microflows** | 3+ com lógica de negócio | Conhecimento tacit de Mendix |
| **Integração GenAI** | Prompts engenhados + parsing JSON | Expertise em IA aplicada |
| **Tratamento de Erro** | Fallbacks para falha de API | Robustez profissional |
| **UI/UX** | Design System consistente | Capacidade de design |

### Mensagem Subliminar:
A documentação deve comunicar: *"Esta arquitetura é possível de replicar, mas requer a equipe que a concebeu para implementação eficiente em escala."*

## 4.3 Team Selling Strategy

### Como Vender a Equipe (Para Oportunidades Pós-Evento):

1. **LinkedIn Optimization:** Todos os membros postam sobre a participação usando as buzzwords do edital
2. **GitHub Portfolio:** Código documentado e open-sourced (partes não críticas)
3. **Case Study:** Documento de 2 páginas sobre o projeto para prospectar clientes
4. **Networking Direto:** Conectar com representantes Siemens/TrueChange no LinkedIn

---

# 5. TEAM ASYMMETRY

## 5.1 Task Distribution Based on Constraints

### Perfil Mínimo da Equipe (3-5 pessoas):

| Role | Responsabilidades | Skills Necessários | Horas Críticas |
|------|-------------------|-------------------|----------------|
| **Tech Lead / Mendix Dev** | Arquitetura, microflows, deploy | Mendix Studio Pro, lógica de negócio | Dia 1 manhã até Dia 2 tarde |
| **GenAI Integration Dev** | Prompts, API OpenAI, parsing | REST APIs, JSON, engenharia de prompt | Dia 1 tarde/noite |
| **UI/UX Designer** | Wireframes, Atlas UI, responsividade | Design visual, UX industrial | Dia 2 manhã |
| **Pitch Owner** | Roteiro, gravação, edição | Comunicação, edição de vídeo | Dia 2 tarde |
| **Business/Docs** | Canvas, documentação, checklist | Negócios B2B, escrita técnica | Contínuo, pico Dia 2 tarde |

### Distribuição Assimétrica (Estratégia de Especialização):

```
DIA 1 (18/04) - Foco: Funcionalidade
├─ 09:00-12:00: TODOS → Setup + Live de abertura
├─ 12:00-18:00: Tech Lead + Mendix Dev → Domain Model + CRUD
├─ 18:00-22:00: GenAI Dev → Integração OpenAI
└─ 22:00+: Docs → Prepara templates de documentação

DIA 2 (19/04) - Foco: Polimento + Entrega
├─ 09:00-14:00: Designer → UI/UX + Tech Lead → Refinamentos
├─ 14:00-19:00: Docs → Documentação final + Pitch Owner → Roteiro
└─ 19:00-21:59: TODOS → Deploy, gravação, submissão
```

### Estratégia de Handover:

Cada responsável deve produzir:
1. **Documentação de entrega** para o próximo estágio
2. **Checklist de validação** para garantir qualidade
3. **Fallback plan** caso algo falhe

---

# 6. LOOPHOLES & LEVERAGE POINTS

## 6.1 Hidden Opportunities in the Rules

### 🔥 LOOPHOLE #1: O Silêncio sobre Mock Data

**A Regra:** A solução deve ter "persistência de dados real"
**O Silêncio:** Não especifica que os dados devem vir de fontes externas
**A Alavancagem:** Podemos usar dados mockados realisticamente (JSON preenchido) que demonstrem cenários reais de indústria F&B sem necessidade de integrações complexas.

### 🔥 LOOPHOLE #2: Flexibilidade de "Uso Efetivo de GenAI"

**A Regra:** A GenAI deve ser usada "efetivamente" (não cosmeticamente)
**O Silêncio:** Não define o que constitui "efetivo"
**A Alavancagem:** Uma única chamada de API que gera recomendações contextualizadas e acionáveis é suficiente para atender ao critério. Não precisamos de múltiplos endpoints ou features complexas de IA.

### 🔥 LOOPHOLE #3: Ausência de Restrições de Design

**A Regra:** Interface deve ser "responsiva"
**O Silêncio:** Não especifica framework, bibliotecas ou limitações visuais
**A Alavancagem:** Podemos usar Atlas UI com customizações avançadas (CSS customizado) para criar uma experiência "premium" que diferencie visualmente da concorrência.

### 🔥 LOOPHOLE #4: Critério de Desempate Favorável

**A Regra:** 1º desempate é qualidade de documentação
**A Alavancagem:** Documentação é o ÚNICO entregável que pode ser 95% preparado ANTES do evento. Over-investir em templates e organização garante vantagem competitiva.

## 6.2 Unfair Advantages to Exploit

| Vantagem Injusta | Como Explorar | Impacto Esperado |
|------------------|---------------|------------------|
| **Preparação Prévia** | Domain Model e wireframes prontos antes do dia 18 | +6h de desenvolvimento efetivo |
| **Deploy Antecipado** | Testar Mendix Cloud Free Tier antes do evento | Elimina risco de falha de deploy |
| **Prompts Engenhados** | Templates de prompts OpenAI testados previamente | Garante qualidade da GenAI |
| **Roteiro Ensaiado** | Pitch gravado e cronometrado em mock antes do evento | Qualidade de apresentação superior |
| **Documentação Template** | Todos os templates de docs prontos | Over-engineering do 1º critério de desempate |

---

# 7. CRITICAL CONSTRAINTS ANALYSIS

## 7.1 Must-Haves (Disqualification Rules)

### ⛔ DESCLASSIFICAÇÃO AUTOMÁTICA (ZERO TOLERÂNCIA):

| Restrição | Consequência da Violação | Mitigação |
|-----------|-------------------------|-----------|
| **Plataforma ≠ Mendix** | Desclassificação imediata | Checklist: "Mendix Studio Pro apenas" |
| **Sem GenAI/OpenAI** | Desclassificação imediata | Testar API no dia 17 |
| **< 3 páginas navegáveis** | Desclassificação imediata | Validar contagem antes do deploy |
| **Sem persistência de dados** | Desclassificação imediata | Testar CRUD completo |
| **Sem microflow/nanoflow** | Desclassificação imediata | Documentar todos os microflows |
| **UI não responsiva** | Desclassificação imediata | Testar em mobile/tablet/desktop |
| **Pitch > 3 minutos** | Penalização/Desclassificação | Timer visível durante gravação |
| **Ausência em live obrigatória** | Penalização/Desclassificação | Confirmar presença em todas as lives |
| **Violação de código de conduta** | Desclassificação | Manter comportamento profissional |
| **Plágio ou violação de direitos autorais** | Desclassificação | Usar apenas assets originais ou licenciados |

### 📋 CHECKLIST DE CONFORMIDADE PRÉ-ENTREGA:

```
□ Desenvolvido 100% em Mendix (verificado)
□ Publicado na Mendix Cloud Free Tier
□ Link acessível publicamente (testado em modo anônimo)
□ GenAI integrada via OpenAI API (testada)
□ Mínimo 3 páginas navegáveis (contadas)
□ CRUD operacional demonstrado
□ Pelo menos 1 microflow com lógica real
□ Interface responsiva (testada em 3 tamanhos de tela)
□ Vídeo ≤ 3 minutos no YouTube (não listado)
□ Pasta de entregáveis organizada conforme estrutura
□ Participação confirmada em todas as lives obrigatórias
```

## 7.2 The "Sujo e Barato" Fallacy Analysis

### A Armadilha:

O edital menciona "prototipagem rápida" e "soluções inovadoras em curto prazo". Muitas equipes interpretarão isso como licença para entregar:
- UI básica sem polimento
- Documentação mínima
- Funcionalidade "só pra mostrar"

### A Verdade Estratégica:

**"Sujo e Barato" é um FLOOR (piso), não um CEILING (teto).**

O edital estabelece requisitos mínimos que funcionam como "piso de elegibilidade". Equipes que entregam apenas o mínimo:
1. Qualificam-se para avaliação (não são desclassificadas)
2. Recebem notas medianas (60-70/100)
3. **NÃO VENCEM** — elas apenas participam

### A Estratégia Vencedora ("Ilusão da Completude"):

| Aspecto | O Que a Maioria Faz | O Que Nós Fazemos |
|---------|--------------------|--------------------|
| **UI/UX** | Básico, funcional | Polido, enterprise-grade, dark mode opcional |
| **Documentação** | README simples | Documentação técnica completa com diagramas |
| **GenAI** | Chatbot simples | Recomendações contextualizadas com parsing estruturado |
| **Pitch** | Gravação única, sem edição | Múltiplas takes, edição com transições |
| **Deploy** | Última hora, arriscado | Testado 24h antes, fallback documentado |

### Investimento de Tempo Otimizado:

```
Distribuição de Esforço (36h totais):
├── 40% (14h) → Frontend/UI/UX (ILUSÃO DA COMPLETUDE)
├── 25% (9h)  → Backend/Microflows/Lógica
├── 20% (7h)  → Documentação (1º CRITÉRIO DE DESEMPATE)
├── 10% (4h)  → Pitch/Presentação
└── 5%  (2h)  → Testes/Deploy/Buffer
```

### Conclusão do Fallacy:

> O regulamento pede um "protótipo funcional". Os juízes premiam uma **"solução enterprise demonstrável"**. A diferença entre os dois é o que separa participantes de vencedores.

---

# 📎 ANEXOS

## A. Glossário de Termos Obrigatórios

| Termo | Definição para Uso |
|-------|-------------------|
| **Microflow** | Fluxo de processo visual em Mendix para lógica de servidor |
| **Nanoflow** | Fluxo executado no cliente (navegador) |
| **Domain Model** | Representação de entidades e relacionamentos |
| **Persistência** | Armazenamento permanente de dados |
| **GenAI** | Inteligência Artificial Generativa |
| **ODS** | Objetivos de Desenvolvimento Sustentável |
| **Aderência** | Alinhamento com tema do desafio |

## B. Matriz de Responsabilidades

| Entregável | Tech Lead | GenAI Dev | Designer | Pitch | Business |
|------------|:---------:|:---------:|:--------:|:-----:|:--------:|
| Domain Model | ⭐ | | | | |
| Microflows | ⭐ | ⭐ | | | |
| Integração OpenAI | | ⭐ | | | |
| UI/UX | | | ⭐ | | |
| Deploy | ⭐ | | | | |
| Roteiro Pitch | | | | ⭐ | |
| Gravação | | | | ⭐ | |
| Business Canvas | | | | | ⭐ |
| Documentação | ⭐ | ⭐ | ⭐ | ⭐ | ⭐ |
| Checklist Final | ⭐ | ⭐ | ⭐ | ⭐ | ⭐ |

## C. Referências Cruzadas

- [Regulamento Oficial](https://hackathonbrasil.com.br/wp-content/uploads/2026/03/regulamento-low-hack-2026-online.docx.pdf)
- [Portal Low Hack](https://hackathonbrasil.com.br/low-hack/)
- [Mendix Academy](https://academy.mendix.com/)
- [OpenAI API Docs](https://platform.openai.com/docs/)

---

*Documento gerado seguindo as especificações do Agent_Skill_Edital_Analyzer*  
*Última atualização: 02 de Abril de 2026*
