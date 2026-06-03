# Interpretacao — Batch 06 Regulatory

> **Status:** Concluido
> **Last Updated:** 2026-06-03
> **Perguntas respondidas:** 7/7 (Q6.1 a Q6.7)
> **Linguagem:** Portugues (Brasil)

---

## Q6.1 — O que diz exatamente a Lei 14.016/2020 (doacao de alimentos)?

### Texto integral e estrutura

A **Lei 14.016/2020**, publicada no DOU em 24/06/2020, foi o principal diploma brasileiro sobre doacao de alimentos. Possui **6 artigos** e estabelece um regime de **imunidade civil e administrativa para o doador de alimentos**, condicionado a gratuidade e a requisitos sanitarios basicos.

### Provisionamentos-chave (com citacao literal)

| Artigo | Dispositivo | Citacao literal |
|--------|-------------|-----------------|
| Art. 1º, caput | Autorizacao para doar | "Os estabelecimentos dedicados a producao e ao fornecimento de alimentos, incluidos alimentos in natura, produtos industrializados e refeicoes prontas para o consumo, ficam autorizados a doar os excedentes nao comercializados e ainda proprios para o consumo humano" |
| Art. 1º, I | Validade | "estejam dentro do prazo de validade e nas condicoes de conservacao especificadas pelo fabricante" |
| Art. 1º, II | Integridade | "nao tenham comprometidas sua integridade e a seguranca sanitaria, mesmo que haja danos a sua embalagem" |
| Art. 1º, III | Nutricao | "tenham mantidas suas propriedades nutricionais e a seguranca sanitaria, ainda que tenham sofrido dano parcial ou apresentem aspecto comercialmente indesejavel" |
| Art. 1º, §1º | Estabelecimentos | "empresas, hospitais, supermercados, cooperativas, restaurantes, lanchonetes e todos os demais estabelecimentos que fornecam alimentos" |
| Art. 1º, §2º | Intermediarios | "bancos de alimentos, de outras entidades beneficentes de assistencia social certificadas na forma da lei ou de entidades religiosas" |
| Art. 1º, §3º | Gratuidade | "A doacao [...] sera realizada de modo gratuito, sem a incidencia de qualquer encargo que a torne onerosa" |
| Art. 2º, caput | Beneficiarios | "pessoas, familias ou grupos em situacao de vulnerabilidade ou de risco alimentar ou nutricional" |
| Art. 2º, par. unico | Nao relacao de consumo | "A doacao [...] em nenhuma hipotese configurara relacao de consumo" |
| Art. 3º, caput | Imunidade civil | "O doador e o intermediario somente respondem nas esferas civil e administrativa por danos causados pelos alimentos doados se agirem com dolo" |
| Art. 3º, §1º | Termo do doador | "A responsabilidade do doador encerra-se no momento da primeira entrega do alimento ao intermediario ou, no caso de doacao direta, ao beneficiario final" |
| Art. 3º, §2º | Termo do intermediario | "A responsabilidade do intermediario encerra-se no momento da primeira entrega do alimento ao beneficiario final" |
| Art. 4º | Imunidade penal | "Doadores e eventuais intermediarios serao responsabilizados na esfera penal somente se comprovado, no momento da primeira entrega, ainda que esta nao seja feita ao consumidor final, o dolo especifico de causar danos a saude de outrem" |

### **ALERTA CRITICO: REVOGACAO**

A pagina do Planalto traz a seguinte anotacao literal: **"Revogado pela Lei nº 15.224, de 2025"**.

> **ATENCAO:** A Lei 14.016/2020 foi REVOGADA. O regime atual de doacao de alimentos segue a **Lei 15.224/2025**, cujo texto nao foi consultado nesta sessao. **Recomendacao urgente:** ler o texto integral da Lei 15.224/2025 para confirmar (a) se a imunidade civil foi mantida, (b) se os requisitos sanitarios foram ampliados/reduzidos, e (c) se o regime de gratuidade mudou.

### Implicacoes para o Waste Guardian

1. **Risco juridico BAIXO (sob a 14.016):** se a plataforma intermediar doacoes de alimentos em conformidade com a lei (validade, integridade, gratuidade), e a doacao for documentada (recibo de primeira entrega), a responsabilidade civil/administrativa do intermediario e do doador depende apenas de **dolo**.
2. **Documentacao obrigatoria:** implementar recurso de "recibo digital" com timestamp, identificacao do receptor e fotos do alimento no momento da entrega. Isso descaracteriza dolo por negligencia.
3. **Enquadramento:** Waste Guardian deve se enquadrar como "intermediario" (art. 1º, §2º) — o que exige verificar a Lei 15.224/2025.
4. **Risco residual:** Se a plataforma for responsavel por aferir validade/integridade, pode haver questionamento sobre **culpa in eligendo** (escolha inadequada de receptor), embora a letra da lei faca referencia apenas a dolo.

### Compliance Requirements

- [ ] Bloqueio automatico de publicacao de doacoes com prazo de validade expirado
- [ ] Recibo digital em todas as transacoes (timestamp + identificacao + foto)
- [ ] Gratuidade explicita (sem comissao sobre o alimento; receitas devem ser de fontes proprias)
- [ ] Verificar nova legislacao (Lei 15.224/2025) em **PRIORIDADE MAXIMA**

---

## Q6.2 — Quais incentivos fiscais para empresas que investem em ESG/sustentabilidade?

### Inventario de incentivos

| Incentivo | Norma | Beneficio quantificado | Aplicabilidade ao WG |
|-----------|-------|------------------------|----------------------|
| **Lei do Bem** | Lei 11.196/2005, Cap. III (arts. 17-26) | Exclusao adicional de 60% a 100% das despesas com P&D no IRPJ; reducao de 50% IPI; depreciacao acelerada | BAIXA-MEDIA: se WG desenvolver algoritmo de matching com IA ou pesquisa em food waste |
| **Rota 2030** | Lei 13.755/2018 | Isonomia tributaria para veiculos hibridos/eletricos; creditos PIS/Cofins | MEDIA: se plataforma operar frota propria para coleta |
| **PAT (Programa Alimentacao do Trabalhador)** | Lei 6.321/1976 | Isencao encargos sociais (INSS) sobre beneficio; deducao IRPJ ate 4% | BAIXA (direta) — restaurantes doadores podem usar |
| **Lei do Incentivo ao Esporte + ISS municipal** | Lei 11.438/2006 | Isencao ou reducao de ISS em municipios com programas de impacto social | MEDIA: verificar legislacao municipal |
| **Incentivos Estaduais ICMS** | Decretos estaduais | SP: Decreto 64.912/2020 (ICMS sobre doacoes); variavel por UF | ALTA: pesquisar legislacao estadual |
| **Lei 14.119/2021 (Pagamentos por Servicos Ambientais — PSA)** | Lei 14.119/2021 | Inclui "PSA em area urbana" — possivelmente aplicavel a servicos de reducao de desperdicio | BAIXA-MEDIA: via credito de carbono evitado |
| **Lei 14.129/2021 (Governanca Digital)** | Lei 14.129/2021 | Incentivos a plataformas digitais de interesse publico | MEDIA: plataforma de impacto pode se enquadrar |

### Quantificacao dos principais (Lei do Bem)

**Exemplo numerico (ilustrativo):**
- Empresa investe R$ 1.000.000 em P&D em inovacao (ex: matching algoritmico para food waste)
- Com exclusao adicional de 100% (maximo permitido), ela deduz R$ 2.000.000 da base do IRPJ
- Economia estimada: R$ 2.000.000 × 15% (aliquota IRPJ adicional) = **R$ 300.000** de IRPJ economizado
- Adicionalmente: R$ 500.000 × 50% = R$ 250.000 de IPI economizado em equipamentos
- **Total: ate R$ 550.000 de economia fiscal** em P&D de R$ 1MM (55% de incentivo)

### Implicacoes para o Waste Guardian

1. **Pitch para restaurantes doadores:** "Ao integrar o Waste Guardian, sua empresa pode usar este software como P&D em inovacao sustentavel — a despesa com a plataforma pode ser elegivel para Lei do Bem" (verificar com contabilista do cliente).
2. **Pitch para si proprio:** "Waste Guardian pode ser enquadrada como empresa de P&D em food waste — captacao de investidores-anjo + Lei do Bem".
3. **Rota 2030:** Se operar Frota eletrica para coleta, ha isonomia tributaria + creditos PIS/Cofins.
4. **Estratégia de mercado:** Oferecer aos restaurantes um "relatorio de impacto fiscal" — quanto eles economizaram de ICMS/ISS ao doar via plataforma.

### Compliance Requirements

- [ ] Consultar contabilista sobre enquadramento Lei do Bem para clientes
- [ ] Mapear legislacao municipal/estadual para incentivos locais
- [ ] Avaliar elegibilidade do proprio WG aos incentivos
- [ ] Documentar despesas com P&D em food waste (algoritmo matching, IA)

---

## Q6.3 — Como funciona o Selo Verde, B Corp, e certificacoes ESG no Brasil?

### Panorama de certificacoes aplicaveis

| Certificacao | Criador | Aplicabilidade ao WG | Custo estimado | Tempo |
|--------------|---------|----------------------|----------------|-------|
| **B Corp Certification** | B Lab (global) / Sistema B (BR) | **ALTA** — selo de impacto reconhecido | ~R$ 25.000-50.000/ano | 12-18 meses ate certificacao |
| **ISE B3** | B3 | INDIRETA — WG pode ajudar empresas doadoras a melhorar score ESG | N/A (doador paga) | Anual (carteira) |
| **Carbon Neutral / GHG Protocol** | Diversos certificadores (BSI, TUV, FGV) | MEDIA — quantificar CO2 evitado | R$ 15.000-80.000/ano | 6-12 meses |
| **Empresa B / Movimento B** | Sistema B Brasil | **ALTA** — precede/apoia B Corp | Gratis (adesao) | Imediato |
| **Selo Verde (INMETRO)** | INMETRO | BAIXA — eficiencia energetica, nao food waste | N/A | N/A |
| **Selo Doacao (SESC/Mesa Brasil)** | SESC | N/A — aplicavel a instituicoes receptoras | Gratis | N/A |
| **GRI Standards (Relatorio de Sustentabilidade)** | GRI | MEDIA — padrao global de relato ESG | R$ 5.000-15.000/ano | 3-6 meses |
| **ISO 26000 (Responsabilidade Social)** | ISO/ABNT | MEDIA — diretriz, nao certificacao | ~R$ 10.000 | 6-12 meses |
| **ESG Rating (Sustainalytics, MSCI, Refinitiv)** | Agencias privadas | BAIXA — exige capital aberto | N/A | N/A |
| **SBTi (Science Based Targets initiative)** | SBTi | BAIXA — exige meta de reducao de emissoes | Gratis | 6-12 meses |

### B Corp Certification — Detalhes

**Base legal/normativa:** Privado (B Lab, entidade sem fins lucrativos), auditado por terceiros via ISO 17021-1.

**Processo (5 etapas):**
1. **B Impact Assessment** (gratuito) — auto-avaliacao contra 5 areas:
   - **Governance** (missao, etica, transparencia)
   - **Workers** (capital humano, diversidade, bem-estar)
   - **Human Rights** (cadeia de suprimentos, direitos humanos)
   - **Environment** (pegada ecologica, energia, agua, residuos)
   - **Customers/Community** (impacto nos clientes e comunidade)
2. **Score minimo:** 80 pontos (em 200 possiveis)
3. **Auditoria de terceira parte** (ISO 17021-1)
4. **Verificacao de requisitos legais** (tipo societario, transparencia, etc.)
5. **Recertificacao a cada 3 anos**

**Beneficios para o Waste Guardian:**
- Selo de credibilidade ESG (anti-greenwashing compliance)
- Marketing direto ao consumidor consciente (1 em 4 ja ouviu falar de B Corp no Global North)
- Networking com B Corps BR (Sistema B Brasil)
- Compliance com regulamentacoes EU/UK de "green claims" (relevante se escalar internacional)

**Movimento global (dados de 2024/2026):**
- 10.000+ empresas certificadas em 6 continentes
- 1 em 4 consumidores ja ouviu falar de B Corp
- A partir de 2026: novas empresas certificam contra **V2.1 dos Standards** (versao mais rigorosa lancada em abril/2025)

### ISE B3 — Detalhes

- **Criacao:** 2005 pela B3 (Brasil Bolsa Balcao)
- **Composicao:** 30-40 ativos listados na B3 com melhor desempenho ESG
- **Metodologia:** Questionario de 80+ criterios ESG + analise de risco setorial
- **Recertificacao:** Anual (carteira pode mudar)
- **Relevancia para WG:** INDIRETA — ao conectar restaurantes a plataforma, o WG fornece dados para eles reportarem KPIs ESG (reducao de desperdicio = KPI E "Environment" e KPI S "Impacto Social"). Isso melhora o score ISE de empresas listadas.

### Implicacoes para o Waste Guardian

1. **Priorizar B Corp Certification** como narrativa de pitch ("somos uma B Corp em formacao")
2. **Quantificar CO2 evitado** com metodologia GHG Protocol (1 ton de alimento = ~2-3 ton CO2 evitada)
3. **Aderir ao Movimento B Brasil** desde ja (gratuito, gera networking)
4. **Emitir relatorio GRI** anual para doadores B2B que precisam reportar ESG
5. **EVITAR greenwashing:** ter o B Corp ou auditoria externa valida todas as claims ESG

### Compliance Requirements

- [ ] Iniciar B Impact Assessment (gratuito) — `bcorporation.net`
- [ ] Cadastrar-se no Movimento B Brasil — `sistemabbrasil.com`
- [ ] Elaborar relatorio de impacto anual (padrao GRI ou B Impact Report)
- [ ] Buscar certificacao GHG Protocol para CO2 evitado
- [ ] Evitar claims ESG sem auditoria externa (risco reputacional + juridico)

---

## Q6.4 — Quais regulacoes da ANVISA se aplicam a alimentos doados?

### RDCs e normas aplicaveis

| Norma | Ementa | Aplicabilidade especifica ao WG |
|-------|--------|--------------------------------|
| **RDC 216/2004** | Boas Praticas para Servicos de Alimentacao | **PRINCIPAL** — restaurantes/lanchonetes que doam |
| **RDC 275/2002** | Procedimentos Operacionais Padronizados (POPs) | Complementar a 216; POPs de higienizacao |
| **RDC 26/2014** | Rotulagem de alimentos embalados | Se WG vender alimentos com embalagem propria |
| **Decreto-Lei 986/1969** | Normas basicas sobre alimentos | Norma geral (identidade, qualidade) |
| **Lei 6.437/1977** | Infracoes a legislacao sanitaria federal | Regime sancionatorio (multa, apreensao) |
| **Portaria SVS/MS 326/1997** | Boas Praticas de Fabricacao (industria) | N/A (WG nao e industria) |
| **Portaria MS 518/2004** | Padroes de potabilidade da agua | N/A direto |
| **RDC 12/2001** | Padroes microbiologicos para alimentos | Referencia para alimentos doados |

### RDC 216/2004 — Detalhes operacionais

**Escopo (item 1.2):** "servicos de alimentacao que realizam algumas das seguintes atividades: manipulacao, preparacao, fracionamento, armazenamento, distribuicao, transporte, exposicao a venda e entrega de alimentos preparados ao consumo, tais como cantinas, bufes, comissarias, confeitarias, cozinhas industriais, cozinhas institucionais, delicatessens, lanchonetes, padarias, pastelarias, restaurantes, rotisserias e congeneres."

**Excluidos do escopo (item 1.2):** lactarios, unidades de Terapia de Nutricao Enteral (TNE), bancos de leite humano, cozinhas de assistenciais de saude, industria (regidas por norma propria).

**Parametros criticos de tempo/temperatura (item 4.8):**
- Tratamento termico: **minimo 70ºC** (item 4.8.8)
- Conservacao a quente: **>60ºC por maximo 6 horas** (item 4.8.15)
- Resfriamento: **60ºC -> 10ºC em ate 2 horas** (item 4.8.16)
- Refrigeracao: **<5ºC** (item 4.8.16)
- Congelamento: **<=-18ºC** (item 4.8.16)
- Validade sob refrigeracao a 4ºC: **5 dias** (item 4.8.17)

**Obrigacoes documentais (item 4.11):**
- Manual de Boas Praticas (item 4.11.1)
- POPs minimos:
  - (a) Higienizacao de instalacoes/equipamentos/moveis
  - (b) Controle integrado de vetores e pragas urbanas
  - (c) Higienizacao do reservatorio de agua
  - (d) Higiene e saude dos manipuladores
- Registros mantidos por minimo **30 dias** (item 4.11.3)

**Capacitacao (item 4.6.7 e 4.12.2):**
- Obrigatoria e periodica
- Conteudo minimo: contaminantes alimentares, doencas transmitidas por alimentos (DTA), manipulacao higienica, boas praticas

### Implicacoes para o Waste Guardian

1. **Restaurantes doadores DEVEM estar em conformidade com a RDC 216/2004.** Plataforma deve exigir declaracao de conformidade no onboarding.
2. **Limite de tempo:** Se o tempo entre preparo e coleta for incerto, plataforma deve impor regra de seguranca (ex: max 4h apos saida de linha de producao, independente de manutencao em quente).
3. **Temperatura:** se o transporte for feito em veiculo refrigerado (recomendado), manter <5ºC.
4. **Documentacao:** integrar com registro dos restaurantes (POPs, treinamento) para evidenciar a cadeia.
5. **Receitas:** se app oferecer "Receitas de aproveitamento", devem ser avaliadas quanto a seguranca alimentar (combinar ingredientes requeridos, conservacao, etc.).
6. **Risco legal:** em caso de DTA (doenca transmitida por alimento) causado por doacao via plataforma, a Visa local pode investigar a cadeia. Documentacao robusta da plataforma = defesa.

### Compliance Requirements

- [ ] Onboarding exige declaracao de conformidade com RDC 216
- [ ] POPs + Manual de Boas Praticas exigidos como anexo no cadastro de restaurantes
- [ ] Comprovantes de treinamento de manipuladores exigidos
- [ ] Sistema bloqueia publicacao de doacoes com mais de 4h apos preparo
- [ ] Sistema exige foto do termometro do alimento (ou sensor IoT) na publicacao
- [ ] Se app oferecer RECEITAS: lista de ingredientes revisada por nutricionista

---

## Q6.5 — LGPD — implicacoes para dados de consumo coletados pelo app?

### Bases legais aplicaveis

| Fluxo de dados | Base legal LGPD | Artigo | Justificativa |
|----------------|-----------------|--------|---------------|
| Cadastro de usuario (nome, telefone, endereco) | Execucao de contrato | Art. 7º, V | Cadastro e necessario para o usuario acessar o servico |
| Geolocalizacao para matching | Execucao de contrato | Art. 7º, V | Essencial para conectar doador ao receptor mais proximo |
| Historico de doacoes/recebimentos | Execucao de contrato | Art. 7º, V | Historico e parte do servico |
| Comunicacao entre usuarios via chat | Execucao de contrato | Art. 7º, V | Funcionalidade central do app |
| Marketing direto (push, email) | Consentimento | Art. 7º, I | Revogavel a qualquer momento |
| Pesquisa de satisfacao (NPS) | Consentimento | Art. 7º, I | Revogavel; se for anonima, dispensa (art. 7º IV) |
| Prevencao a fraude | Protecao ao credito | Art. 7º, X | Justificavel se houver risco financeiro |
| Cumprimento de obrigacoes ANVISA/sanitarias | Obrigacao legal | Art. 7º, II | Necessario para relatorios de seguranca alimentar |
| Indicadores de impacto (anonimizados) | Estudos / Orgao de pesquisa | Art. 7º, IV | Anonimizacao resolve |
| Compartilhamento com restaurantes doadores | Consentimento | Art. 7º, I | Necessario aceite explicito |
| Transferencia para transportadora | Execucao de contrato | Art. 7º, V | Se for parte do servico contratado |

### Direitos do titular (art. 18) — Implementacao obrigatoria

1. **Confirmacao da existencia de tratamento** — exibir mensagem "seus dados sao tratados por nos" no app
2. **Acesso aos dados** — formulario de "Meus dados" + exportacao em JSON/CSV
3. **Correcao** — edicao de perfil padrao
4. **Anonimizacao, bloqueio, eliminacao** — opcao de "encerrar conta e anonimizar dados"
5. **Portabilidade** — exportacao completa dos dados em formato estruturado
6. **Eliminacao (consentimento)** — se revogar consentimento, opcao de deletar conta
7. **Informacao sobre uso compartilhado** — declarar com quem os dados sao compartilhados (restaurantes, transportadoras)
8. **Informacao sobre consequencias da negativa** — texto claro: "se nao fornecer endereco, nao conseguimos conectar voce a doacoes"
9. **Revogacao do consentimento** — opcao de revogar consentimentos especificos

**Prazo de atendimento:** ate 15 dias para pedidos de acesso (art. 19, II).

### Principios aplicaveis (art. 6º)

- **Finalidade:** "matching de doacoes de alimentos" + "relatorios de impacto social anonimos"
- **Necessidade:** coletar APENAS o minimo — nome, telefone, endereco de coleta/entrega, tipo de alimento
- **Transparencia:** politica de privacidade + termos de uso
- **Seguranca:** HTTPS obrigatorio, criptografia em banco, logs de acesso
- **Prevencao:** avaliacao de risco previa (RIPD) para fluxos novos
- **Nao discriminacao:** nao usar dados para negar acesso por perfil socioeconomico

### Encarregado (DPO) — Art. 41 + Resolucao CD/ANPD 4/2023

- **Obrigatoriedade geral:** sim, controladores devem indicar encarregado
- **Dispensa:** ME/EPP estao dispensadas pela **Resolucao CD/ANPD nº 4/2023**
- **Para o Waste Guardian (ME/EPP startup):** manter comprovante de enquadramento ME/EPP + dispensa de DPO. **Mas** designar informalmente alguem responsavel por questoes de privacidade (mesmo que nao tenha o titulo formal "DPO") para evitar negligencia.

### Dados sensiveis (art. 11) — Cuidado!

**Dados sensiveis (definidos no art. 5º, II):** origem racial ou etnica, conviccao religiosa, opiniao politica, filiacao a sindicato, dado referente a saude ou vida sexual, dado genetico ou biometrico.

**Risco para WG:** Se o app coletar "perfil socioeconomico do receptor" (vulnerabilidade) ou "tipo de religiao" para matching com bancos religiosos, pode configurar **dado sensivel** (origem social via vulnerabilidade, conviccao religiosa).

**Mitigacao:**
- NAO coletar perfil socioeconomico detalhado (apenas CEP para matching)
- NAO coletar religiao para matching (usar apenas localizacao)
- Usar dados **anonimizados** para indicadores de impacto (art. 12)

### Implicacoes para o Waste Guardian

1. **Politica de privacidade robusta** com 9 secoes (uma para cada direito do art. 18)
2. **Base legal explicita** por fluxo (consentimento para marketing, execucao de contrato para matching)
3. **Anonimizacao** para todos os indicadores de impacto publicados
4. **Encarregado designado** (mesmo informalmente) — se ME/EPP, formalizar a dispensa via Res. 4/2023
5. **Sanctions:** LGPD art. 52 — multa de ate 2% do faturamento, limitada a R$ 50.000.000 por infracao. **Risco real para o WG.**

### Compliance Requirements

- [ ] Politica de privacidade publicada
- [ ] Termo de uso com aceite explicito por fluxo
- [ ] Formulario de direitos do titular no app (e/ou email DPO)
- [ ] Logs de tratamento (auditoria de acessos)
- [ ] Criptografia HTTPS + banco criptografado
- [ ] Comprovante de enquadramento ME/EPP + dispensa formal de DPO
- [ ] RIPD elaborado para fluxos de geolocalizacao + matching
- [ ] Anonimizacao automatica para KPIs publicados

---

## Q6.6 — Qual a responsabilidade civil do doador (Lei 14.016)?

### Regime juridico (sob a 14.016, ainda em vigor ate ser totalmente substituida pela 15.224/2025)

**Regra:** Imunidade civil e administrativa para o doador de alimentos, CONDICIONADA a:
1. Gratuidade da doacao (art. 1º, §3º)
2. Atendimento dos requisitos sanitarios (art. 1º, I-III)
3. Que o dano nao decorra de **dolo** (art. 3º, caput)

**Momento do termino da responsabilidade (art. 3º, §1º):** "A responsabilidade do doador encerra-se no momento da **primeira entrega** do alimento ao intermediario ou, no caso de doacao direta, ao beneficiario final."

**Definicao de "primeira entrega" (art. 3º, §3º):** "o primeiro desfazimento do objeto doado pelo doador ao intermediario ou ao beneficiario final, ou pelo intermediario ao beneficiario final."

**Responsabilidade penal (art. 4º):** "Doadores e eventuais intermediarios serao responsabilizados na esfera penal **somente se comprovado, no momento da primeira entrega, ainda que esta nao seja feita ao consumidor final, o dolo especifico de causar danos a saude de outrem**."

### Matriz de responsabilidade

| Cenario | Doador (restaurante) | Intermediario (WG) | Receptor (beneficiario) |
|---------|----------------------|---------------------|--------------------------|
| Alimento conforme, doacao gratuita, sem dolo | SEM responsabilidade | SEM responsabilidade (apos 1ª entrega) | N/A |
| Alimento com validade expirada, doador sabia | RESPONDE (dolo) | RESPONDE se sabia | N/A |
| Alimento com validade expirada, doador NAO sabia | SEM responsabilidade civil (mas pode haver negligencia a apurar) | SEM responsabilidade se nao sabia | N/A |
| Intermediario armazenou mal, causou dano | SEM responsabilidade (responsabilidade ja transferida) | RESPONDE (dolo ou negligencia) | N/A |
| Receptor armazenou mal, causou dano proprio | N/A | N/A | Responde (autolesao) |
| Dano por produto contaminado de origem (ex: ingrediente adulterado pelo fabricante) | RESPONDE solidariamente com fabricante (CDC + CC) | Sem responsabilidade direta se nao modificou o produto | N/A |

### Onus da prova (LGPD art. 8º analogia + CDC)

- Em caso de dano, o **acusador** (vitima ou familiar) deve provar:
  - Nexo causal entre alimento doado e dano
  - Dolo ou culpa do doador/intermediario
- **Em defesa, o doador/intermediario** deve provar:
  - Que o alimento foi doado em condicoes adequadas (recibo, foto, timestamp)
  - Que nao houve dolo (inexistencia de manipulacao intencional para causar dano)

### Implicacoes para o Waste Guardian

1. **Documentacao robusta de "primeira entrega":**
   - Timestamp exato (UTC)
   - Identificacao unica do doador (CNPJ)
   - Identificacao unica do receptor (CPF, se aplicavel; ou codigo anonimo)
   - Foto do alimento no momento da entrega
   - Temperatura do alimento (sensor ou termometro fotografado)
   - Assinatura digital ou biometrica do receptor
2. **Bloqueio automatico de doacoes suspeitas:** se prazo de validade < 2h (regra de seguranca), bloquear publicacao
3. **Clausula contractual:** nos termos de uso, exigir que o doador declare estar em conformidade com a Lei 15.224/2025 (sucessora da 14.016)
4. **Seguro de responsabilidade civil:** considerar apolice de RC para plataforma (mesmo que nao legalmente obrigatoria, e boa pratica)

### Compliance Requirements

- [ ] Recibo digital obrigatorio em toda transacao
- [ ] Foto do alimento no momento da entrega
- [ ] Termometro (sensor ou app) obrigatorio
- [ ] Assinatura digital do receptor (ou geolocalizacao + timestamp)
- [ ] Termo de uso com declaracao de conformidade do doador
- [ ] Considerar seguro RC para plataforma (R$ 100k-500k)

---

## Q6.7 — Marco Legal das Startups — aplicabilidade?

### Enquadramento (art. 4º da LC 182/2021)

**Requisitos cumulativos para ser "startup":**
1. Organizacao empresarial ou societaria (incluindo EI, EIRELI, sociedades empresarias, cooperativas, simples)
2. **Receita bruta de ate R$ 16.000.000,00/ano** (ou R$ 1.333.334,00 × meses de atividade, se <12 meses) — art. 4º, §1º, I
3. **Ate 10 anos de inscricao no CNPJ** — art. 4º, §1º, II
4. **Pelo menos um dos seguintes (art. 4º, §1º, III):**
   - (a) Declaracao no ato constitutivo de **modelo de negocios inovador** (nos termos do art. 2º, IV da Lei 10.973/2004)
   - (b) Enquadramento no **regime especial Inova Simples** (art. 65-A da LC 123/2006)

### Beneficios do enquadramento

| Beneficio | Norma | Impacto para WG |
|-----------|-------|-----------------|
| **Investidor-anjo** sem direito a voto/gerencia, sem responsabilidade por dividas | Art. 5º-8º | Captacao de capital preservando controle |
| **CPSI** (Contrato Publico para Solucao Inovadora) ate R$ 1.600.000 | Art. 13-14 | Contratos com Uniao/Estados/Municipios ate R$ 1,6M |
| **Contrato de Fornecimento** ate 5x o valor do CPSI (ate R$ 8MM) | Art. 15 | Continuidade do contrato publico |
| **Sandbox Regulatório** (afastamento de normas) | Art. 11 | Possibilidade de testar IA com regras flexiveis (ANPD ja abriu consulta sobre IA em jun/2026) |
| Inova Simples (regime especial simplificado) | LC 123/2006 art. 65-A | Formalizacao simplificada; exame prioritario de patentes no INPI |
| Opcoes de subscricao/compra, debentures conversiveis, mútuo conversivel | Art. 5º, §1º | Instrumentos juridicos flexiveis para captacao |

### Detalhes do CPSI (art. 14)

- **Vigencia:** 12 meses, prorrogavel por mais 12 meses
- **Valor maximo:** R$ 1.600.000,00 por CPSI
- **Criterios de remuneracao (art. 14, §3º):**
  - I. Preco fixo
  - II. Preco fixo + remuneracao variavel de incentivo
  - III. Reembolso de custos sem remuneracao adicional
  - IV. Reembolso de custos + remuneracao variavel
  - V. Reembolso de custos + remuneracao fixa de incentivo
- **Pagamento antecipado:** permitido (art. 14, §7º) para garantir meios financeiros a contratada
- **Risco tecnologico:** pagamentos proporcionais ao executado (art. 14, §4º)

### Investidor-anjo (art. 8º)

- Nao e considerado socio/acionista
- Nao tem direito a voto/gerencia
- Nao responde por dividas da startup
- **Excecao:** dolo, fraude ou simulacao

### Implicacoes para o Waste Guardian

1. **Enquadramento como startup:** verificar se receita <= R$ 16MM (provavelmente sim no inicio) e CNPJ < 10 anos
2. **Modelo de negocios inovador:** declarar formalmente no contrato social (ex: "plataforma digital de match-making entre doadores e receptores de excedentes alimenticos, com base em algoritmo proprietario")
3. **Captacao via investidor-anjo:** estruturar contrato tipo mútuo conversivel (art. 5º, §1º, IV) — preserva controle, gera capital
4. **CPSI como narrativa de pitch:** "podemos firmar CPSI de ate R$ 1,6M com municipios para implementar o Waste Guardian" (valor alto para hackathon, mas relevante para futuro)
5. **Sandbox regulatorio:** se a ANPD/ANVISA criar sandbox para food waste + IA, candidatar-se
6. **Inova Simples:** avaliar adesao para simplificar formalizacao (exame prioritario de patentes, regime especial)

### Compliance Requirements

- [ ] Atualizar contrato social com clausula de "modelo de negocios inovador"
- [ ] Monitorar receita bruta (manter <= R$ 16MM para manter enquadramento)
- [ ] Se captar investimento: usar instrumentos do art. 5º (mútuo conversivel, opcoes, debentures)
- [ ] Se participar de licitacao publica: avaliar CPSI como modalidade
- [ ] Acompanhar consulta publica ANPD sobre sandbox de IA (inscricoes ate 15/06/2026)
- [ ] Avaliar adesao ao Inova Simples (LC 123/2006 art. 65-A)

---

## Resumo Executivo das Questoes

| Questao | Resposta-chave | Acao prioritaria para WG |
|---------|----------------|--------------------------|
| **Q6.1** Lei 14.016 | Imunidade civil por dolo + gratuidade + requisitos sanitarios. **REVOGADA pela Lei 15.224/2025** | **URGENTE:** ler Lei 15.224/2025 para confirmar regime |
| **Q6.2** Incentivos ESG | Lei do Bem (ate 100% exclusao IRPJ em P&D), Rota 2030 (frota eletrica), incentivos estaduais | Oferecer relatorio de impacto fiscal para clientes |
| **Q6.3** Certificacoes ESG | B Corp (selo de credibilidade, V2.1 a partir 2026), ISE B3, GHG Protocol | **Priorizar B Corp** como narrativa de pitch |
| **Q6.4** ANVISA | RDC 216/2004: Manual BP + POPs + capacitacao + controle tempo/temperatura | Onboarding exige declaracao de conformidade; bloquear publicacao com >4h |
| **Q6.5** LGPD | Base legal por fluxo (execucao de contrato para matching); 9 direitos do titular; dispensado DPO se ME/EPP (Res. 4/2023) | Politica de privacidade robusta + anonimizacao para KPIs |
| **Q6.6** Resp. civil doador | Imunidade por dolo; termino na 1ª entrega; onus da prova do acusador | Recibo digital obrigatorio (timestamp, foto, sensor) |
| **Q6.7** Marco Legal Startups | Receita <= R$ 16MM, <= 10 anos, modelo inovador; CPSI ate R$ 1,6M; investidor-anjo | Atualizar contrato social; usar mútuo conversivel para captacao |

---

> **Proxima pesquisa sugerida (Batch 07):** Validar Lei 15.224/2025 (revogadora de 14.016); pesquisar legislacao municipal de ICMS/ISS sobre doacao de alimentos nos municipios-alvo do WG.
