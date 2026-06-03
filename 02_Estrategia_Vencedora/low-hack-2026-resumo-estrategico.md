# LOW HACK 2026 — RESUMO ESTRATÉGICO EXECUTIVO

> **Status:** PRONTO PARA COMBATE  
> **Evento:** 18-19 Abril 2026 | Online  
> **Plataforma:** Mendix (Free Tier) + OpenAI API  
> **Premiação:** 1º R$8.000 | 2º R$5.000 | 3º R$3.000

---

## 1. CHECKLIST DE CONFORMIDADE (NEGOCIÁVEL)

| Requisito | Status | Prioridade |
|-----------|--------|------------|
| ✅ Desenvolvimento 100% em Mendix | ⏳ | CRÍTICA |
| ✅ GenAI via OpenAI API (uso efetivo) | ⏳ | CRÍTICA |
| ✅ Mínimo 3 páginas navegáveis | ⏳ | CRÍTICA |
| ✅ Persistência de dados (CRUD) | ⏳ | CRÍTICA |
| ✅ Microflow/Nanoflow funcional | ⏳ | CRÍTICA |
| ✅ Interface responsiva | ⏳ | ALTA |
| ✅ Video-pitch até 3 min (YouTube não listado) | ⏳ | CRÍTICA |
| ✅ Pasta de entrega até 19/04 21:59 | ⏳ | CRÍTICA |
| ✅ Participação nas lives obrigatórias | ⏳ | MÉDIA |
| ✅ Código de conduta | ⏳ | CRÍTICA |

---

## 2. CRITÉRIOS DE AVALIAÇÃO (PESO)

| Dimensão | Peso | Foco Estratégico |
|----------|------|------------------|
| **Potencial de Impacto** | Alto | Métricas de sustentabilidade, redução de desperdício |
| **Modelo de Negócio** | Alto | Viabilidade B2B, precificação, público-alvo |
| **Aderência ao Desafio** | Alto | Alinhamento ODS 9/12, tema consumo consciente |
| **Inovação** | Médio | Originalidade, diferenciação |
| **Apresentação (Pitch)** | Alto | Clareza, demo funcional, 3 min |
| **Critério Técnico** | Alto | Funcionamento, GenAI, UX/UI |

**Desempate:** 1º) Documentação + Entregáveis | 2º) Inovação

---

## 3. TESE CENTRAL DA SOLUÇÃO

> **Waste Guardian** — Copiloto operacional para redução de desperdício em linhas de produção industriais, usando Mendix + GenAI para sugerir planos de ação priorizados em tempo real.

### Persona
Supervisor de produção / Gestor de sustentabilidade industrial

### Recorte
Indústria de alimentos e bebidas — perdas de matéria-prima por falhas de setup e qualidade

### Métricas de Impacto
- % de desperdício reduzido por linha
- Economia de matéria-prima (R$/tonelada)
- Redução de emissões associadas (CO₂)

---

## 4. ARQUITETURA MENDIX + GenAI

### Domain Model (Entidades)
```
LinhaProducao
├── id
├── nome
├── tipoProduto
└── capacidade

EventoDesperdicio
├── id
├── dataHora
├── linhaProducao (association)
├── quantidadeProduzida
├── quantidadeDescartada
├── causaProvavel
└── turno

IndicadorSustentabilidade
├── id
├── periodo
├── linhaProducao (association)
├── desperdicioPercentual
├── energiaPorUnidade
└── custoEstimadoPerda

AcaoRecomendada
├── id
├── textoAcao
├── prioridade (Alta/Média/Baixa)
├── impactoEstimado
└── status (Pendente/Implementada)
```

### Fluxos (Microflows)
1. **MF_RegistrarEventoDesperdicio** — Grava evento + recalcula indicadores
2. **MF_CalcularIndicadores** — Agrega dados por linha/período
3. **MF_GerarPlanoAcaoGenAI** — Chama OpenAI API → gera ações priorizadas

### Telas (3+)
1. **Visão Geral** — Dashboard com linhas + indicadores (semáforo)
2. **Detalhe da Linha** — Eventos de desperdício + gráfico + botão "Gerar Ação IA"
3. **Plano de Ação** — Lista de ações recomendadas + explicação da IA

### GenAI (não como chat, mas como motor de valor)
- **Input:** Indicadores recentes + exemplos de eventos
- **Prompt:** "Você é consultor de eficiência operacional..."
- **Output:** 3-5 ações priorizadas com impacto estimado

---

## 5. CRONOGRAMA TÁTICO

### Sábado (18/04)
| Horário | Atividade | Entregável |
|---------|-----------|------------|
| 09:00-10:00 | Live Lançamento + Setup | Confirmação presença |
| 10:00-12:00 | Definição de escopo + Domain Model | Sketch aprovado |
| 12:00-18:00 | Infraestrutura Mendix (páginas + entidades) | 3 páginas navegáveis |
| 18:00-22:00 | Lógica + Integração GenAI | MF funcional |

### Domingo (19/04)
| Horário | Atividade | Entregável |
|---------|-----------|------------|
| 09:00-14:00 | Refinamento UX/UI + Funcionalidades | App polido |
| 14:00-19:00 | Documentação + Preparação entregáveis | Pasta organizada |
| 19:00-21:00 | Deploy + Pitch gravado | Link Mendix Cloud |
| 21:00-21:59 | **SUBMISSÃO** | Pasta finalizada |

---

## 6. ESTRUTURA DO PITCH (3 MIN)

```
0:00-0:30  │ PROBLEMA
           │ "Indústrias de alimentos perdem X% de matéria-prima..."

0:30-1:30  │ SOLUÇÃO + DEMO
           │ "Waste Guardian em ação..."
           │ Navegar: Visão Geral → Detalhe → Gerar Ação IA → Ações

1:30-2:10  │ COMO FUNCIONA (Mendix + GenAI)
           │ "Um microflow chama a API OpenAI que gera..."

2:10-2:45  │ IMPACTO + MODELO DE NEGÓCIO
           │ "Cada 1% reduzido = R$X mil экономия..."
           │ "Modelo B2B SaaS por linha monitorada"

2:45-3:00  │ PRÓXIMOS PASSOS
           │ "Conectar em dados reais MES/ERP... piloto em planta"
```

---

## 7. MATRIZ DE RISCO/OPORTUNIDADE

### Riscos Prioritários
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Não usar Mendix | Baixa | CRÍTICO | Checklist pré-entrega |
| GenAI cosmético | Média | ALTO | Uso em ponto de alto valor |
| Deploy falha | Média | ALTO | Testar cedo, ter fallback |
| Pitch > 3 min | Média | ALTO | Cronometrar ensaio |
| Prazo perdido | Baixa | CRÍTICO | Alarme 21:30 |

### Oportunidades
- ✅ Visibilidade Siemens/TrueChange
- ✅ Portfólio Mendix + GenAI
- ✅ Networking com mentores
- ✅ Evolução pós-hackathon (IP é seu)

---

## 8. ALAVANCAGENS PRINCIPAIS

1. **Alinhamento Institucional** — Fala a língua Siemens (eficiência operacional, transformação digital, ODS)
2. **Recorte Nichado** — Escolher UM tipo de desperdício em UMA indústria
3. **GenAI como Motor** — Não decorativo, mas recomendação/insights
4. **Documentação Sólida** — Primeiro critério de desempate
5. **Pitch Afiado** — 3 min de narrativa impossível falhar

---

## 9. PRÓXIMOS PASSOS IMEDIATOS

- [ ] Validar equipe (3-5 pessoas, disponibilidade 18-19/04)
- [ ] Familiarizar com Mendix Studio Pro (tutoriais até 10/04)
- [ ] Testar integração OpenAI API (script simples até 12/04)
- [ ] Definir ESCOLHA FINAL de recorte de problema (14/04)
- [ ] Criar skeleton de domain model e telas (17/04)

---

> **MANTRA:** *"MVP feio funciona. Pitch perfeito comunica. GenAI real impressiona."*
