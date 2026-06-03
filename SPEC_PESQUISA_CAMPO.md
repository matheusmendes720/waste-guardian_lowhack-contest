# 🔬 SPEC — PESQUISA DE CAMPO

> **Entregável:** Impacto Social / Validação de Mercado  
> **Status:** ⏳ 0% (a fazer)  
> **Deadline:** 03/06/2026 21:00  
> **Responsável:** RESEARCH_AGENT  
> **Versão:** 1.0

---

## 🎯 OBJETIVO

Validar problema + solução com 10+ famílias reais. Pesquisa de campo é **crítica** para nota máxima — sem pesquisa = nota 2.

---

## 📏 FORMATO

```
ARQUIVO: 01_Intel_OSINT/RELATORIO_PESQUISA_10_FAMILIAS.md
FORMATO: Markdown + Tabelas
ENTREVISTAS: 10 famílias (mínimo)
DURAÇÃO: 10-15 minutos cada
IDIOMA: Português Brasil
```

---

## 👥 PERFIL DO ENTREVISTADO

### Critérios Obrigatórios
```
✅ Família com 3-5 pessoas
✅ Classe média (renda R$ 3.000-10.000)
✅ Cozinha em casa pelo menos 4x/semana
✅ Descarte alimentos pelo menos 1x/semana
✅ Smartphone com câmera
✅ Responsável pela compra/preparação de comida
✅ Idade: 25-55 anos
```

### Critérios Preferenciais
```
🎯 Acesso à internet WiFi
🎯 Experiência previa com apps de delivery/cozinha
🎯 Tempo disponível para entrevista (15 min)
```

### Canais de Recrutamento
```
📱 Contatos pessoais (família, amigos)
📱 Redes sociais (WhatsApp, Instagram)
📱 Vizinhança
🏫 Escola (pais de colegas)
```

---

## 📋 PROTOCOLO DE ENTREVISTA

### Tempo: 10-15 minutos

```
BLOCO 1: CONTEXT (2 min)
├── Apresentação da equipe (30s)
├── Explicação do projeto (resumo 30s)
└── Consentimento para registro (30s)

BLOCO 2: PROBLEMA (5 min)
├── Pergunta 1: "Com que frequência você descarta alimentos por vencimento?"
├── Pergunta 2: "Quanto você估算 que gasta por mês em alimentos descartados?"
├── Pergunta 3: "Pode me dar um exemplo recente? O que foi, quanto custou?"
└── Pergunta 4: "Por que acha que acontece?"

BLOCO 3: SOLUÇÃO (5 min)
├── Pergunta 5: "Você já jogou iogurte, pão ou frutas fora por esquecer a data?"
├── Pergunta 6: "Você usaria um app que escaneia alimentos e sugere receitas?"
├── Pergunta 7: "Quanto tempo você gasta por semana pensando no que tem na geladeira?"
└── Pergunta 8: "O que te impediria de usar esse app?"

BLOCO 4: MODELO (3 min)
├── Pergunta 9: "Você doaria alimentos próximos ao vencimento para uma cooperativa?"
├── Pergunta 10: "Quanto você pagaria por um app assim?"
└── Pergunta 11: "Quanto seria aceitável gastar por mês?"

BLOCO 5: FECHAMENTO (1 min)
├── Agradecimento
├── Permissão para follow-up
└── foto (opcional)
```

---

## 📝 FORMULÁRIO DE REGISTRO (1 por entrevista)

```markdown
## ENTREVISTA #[NÚMERO]
**Data:** DD/MM/AAAA
**Entrevistador:** [NOME]
**Duração:** X minutos

### Perfil do Entrevistado
| Campo | Valor |
|-------|-------|
| Nome | [ANÔNIMO / CÓDIGO] |
| Idade | XX |
| Pessoas em casa | X |
| Renda familiar | R$ X.XXX |
| Bairro | [opcional] |

### Respostas

**P1 - Frequência descarte:**
[ ] Diário  [ ] 3-5x/semana  [ ] 1-2x/semana  [ ] 1-2x/mês  [ ] Nunca

**P2 - Valor estimado mensal:**
R$ ______ (ou "não sei")

**P3 - Exemplo recente:**
[Descreva o exemplo com detalhes - produto, quantidade, valor estimado]

**P4 - Motivo do descarte:**
[ ] Esqueci a data  [ ] Não soube cozinhar  [ ] Comprei demais
[ ] Estragou rápido  [ ] Outro: ___

**P5 - Já descartou por esquecimento:**
[ ] Sim, frequentemente  [ ] Sim, às vezes  [ ] Não

**P6 - Usaria app de scan:**
[ ] Sim, com certeza  [ ] Talvez  [ ] Não

**P7 - Tempo pensando na geladeira:**
[ ] < 5min  [ ] 5-15min  [ ] 15-30min  [ ] > 30min

**P8 - O que impediria:**
[ ] Privacidade  [ ] Complexidade  [ ] Não confio IA
[ ] Não preciso   [ ] Outro: ___

**P9 - Doaria para cooperativa:**
[ ] Sim  [ ] Talvez  [ ] Não

**P10 - Quanto pagaria:**
[ ] R$ 0 (free)  [ ] R$ 10-20  [ ] R$ 20-40  [ ] > R$ 40

**P11 - Aceitável por mês:**
R$ ______

### Observações
[Notas adicionales do entrevistador]

### Validação
[ ] Problema validado (descarte frequente)
[ ] Solução validada (usariam app)
[ ] Modelo de doação validado
[ ] Preço validado (disposição para pagar)
```

---

## 📊 TABELA DE SÍNTESE (10 entrevistas)

```markdown
## RESULTADO DAS 10 ENTREVISTAS

### Perfil dos Entrevistados
| # | Idade | Pessoas | Renda | Descarte frequência |
|---|-------|---------|-------|---------------------|
| 1 | XX    | X       | R$ X  | Xx/semana          |
| 2 | XX    | X       | R$ X  | Xx/semana          |
| 3 | XX    | X       | R$ X  | Xx/semana          |
| 4 | XX    | X       | R$ X  | Xx/semana          |
| 5 | XX    | X       | R$ X  | Xx/semana          |
| 6 | XX    | X       | R$ X  | Xx/semana          |
| 7 | XX    | X       | R$ X  | Xx/semana          |
| 8 | XX    | X       | R$ X  | Xx/semana          |
| 9 | XX    | X       | R$ X  | Xx/semana          |
| 10| XX    | X       | R$ X  | Xx/semana          |

### Validação do Problema
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Descartam alimentos semanalmente | X/10 (XX%) | ✅/❌ |
| Desconhecem data de validade | X/10 (XX%) | ✅/❌ |
| Média desperdiçada/mês | R$ XXX | ✅ |
| Exemplo recente mencionado | X/10 (XX%) | ✅/❌ |

### Validação da Solução
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Usariam app de scan | X/10 (XX%) | ✅/❌ |
| Tempo pensando na geladeira | X min (média) | ✅ |
| Impedimentos (barreiras) | [lista] | ✅ |

### Validação do Modelo
| Métrica | Valor | Validação |
|---------|-------|-----------|
| Doariam para cooperativa | X/10 (XX%) | ✅/❌ |
| Disposição para pagar | R$ XX (média) | ✅/❌ |
| Free tier aceito | X/10 (XX%) | ✅/❌ |

### Métricas Validadas vs Projetadas
| Métrica | Projetada | Real (média) | Validação |
|---------|-----------|--------------|-----------|
| Impacto família/mês | R$ 180 | R$ XXX | ✅/❌ |
| Frequência descarte | 2x/semana | X.X | ✅/❌ |
| Disposição para uso | 80% | XX% | ✅/❌ |
| Doariam | 80% | XX% | ✅/❌ |
| Preço aceitável | R$ 40 | R$ XX | ✅/❌ |
```

---

## 📋 EXEMPLOS DE EXTRAS

### Exemplo de Depoimento (para usar no Texto Descritivo)
```markdown
### Depoimento #1
> "Eu sempre esqueço de olhar a data do iogurte. Da última vez, 
> joguei fora meio litro que ainda estava bom. Se tivesse um app 
> que me avisasse, teria feito um smoothie." 
> — [CÓDIGO E1], 34 anos, São Paulo

### Exemplo de Depoimento #2
> "A gente compra muita coisa e deixa estragar. Seria ótimo ter 
> uma ajuda para não desperdiçar tanto dinheiro."
> — [CÓDIGO E2], 42 anos, Campinas
```

### Exemplos de Descarte Reportados
```markdown
| # | Produto | Motivo | Valor Estimado |
|---|---------|--------|----------------|
| 1 | Iogurte natural (1L) | Esqueci data | R$ 8,90 |
| 2 | Pão de forma | Mofo rápido | R$ 6,50 |
| 3 | Bananas (6 unidades) | Amadureceu rápido | R$ 4,90 |
| 4 | Alface | Folhas murchas | R$ 3,50 |
| 5 | Leite (1L) | Venceu sem usar | R$ 5,90 |
```

---

## ✅ CHECKLIST DE QUALIDADE

### Pré-Entrevista
```
[ ] 10 famílias identificadas
[ ] Contato feito (WhatsApp/telefone)
[ ] Horário agendado
[ ] Formulário preparado
[ ] Consentimento verificado
```

### Entrevista
```
[ ] Consentimento registrado
[ ] Todas as 11 perguntas feitas
[ ] Notas completas
[ ] Exemplo recente capturado
[ ] Foto (se consentiu)
```

### Pós-Entrevista
```
[ ] Formulário preenchido
[ ] Síntese inserida na planilha
[ ] Validação calculada
```

### Relatório Final
```
[ ] 10 entrevistas completas
[ ] Tabela de síntese
[ ] Comparativo projetado vs real
[ ] Depoimentos citáveis
[ ] Conclusões fundamentadas
```

---

## 📦 OUTPUT ESPERADO

```
✅ Arquivos:
├── 01_Intel_OSINT/RELATORIO_PESQUISA_10_FAMILIAS.md
└── 01_Intel_OSINT/PESQUISA_FORMULARIOS.md (10 formulários)

✅ Métricas:
├── Entrevistas: 10
├── Validação problema: XX%
├── Validação solução: XX%
└── Validação modelo: XX%
```

---

## 🔗 ENTREGÁVEL NO PORTAL

**Tipo:** Parte do Texto Descritivo ou documento separado  
**Formato aceite:** PDF, DOCX, DOC  
**Observação:** Pode ser anexado como evidência de pesquisa de campo

---

## ⚠️ CRÍTICO

```
⚠️ SEM PESQUISA: Nota máxima = 2/10
⚠️ COM 2 ENTREVISTAS: Nota = 3/10
⚠️ COM 5 ENTREVISTAS: Nota = 5/10
⚠️ COM 10 ENTREVISTAS: Nota = 8-10/10
```

---

## 💡 DICAS PRÁTICAS

### Como encontrar 10 famílias rápido
```
1. WhatsApp: Mensagem no grupo da família, amigos, trabalho
2. Instagram: Stories pedindo ajuda + DM
3. Vizinhos: Bater na porta de 3-5 casas
4. Escola: Pedir para pais de colegas (reunião ou grupo)
5. Mercado: Abordar pessoas na fila (seja educado)
```

### Como fazer a entrevista (sem parecer estranho)
```
1. Apresente-se: "Oi, sou [nome], estou fazendo uma pesquisa..."
2. Explique: "É para um projeto do Desafio Liga Jovem"
3. Peça: "Posso te fazer 5 perguntas? Vai levar 10 minutos"
4. Interaja: "Isso é muito interessante!" (genuíno)
5. Agradeça: "Muito obrigado pela ajuda!"
```

### Como registrar sem ser invasivo
```
✅ Anote em celular/bloco (discretamente)
✅ Peça foto das notas (se a pessoa quiser)
✅ Use códigos em vez de nomes (E1, E2...)
❌ Não grave áudio sem permissão explícita
❌ Não filme sem autorização
```