# 🎤 PITCH: WASTE GUARDIAN — Para Liga Jovem 4ª Edição

> **Status:** ✅ PRONTO PARA APRESENTAÇÃO À PROFESSORA ORIENTADORA  
> **Data:** 2026-06-02  
> **Versão:** 2.0 (Fase 1 - Entrega Junho)  
> **ODS:** 11 (Cidades Sustentáveis), 12 (Consumo Responsável), 13 (Ação Climática)  
> **Formato:** Vídeo 5 minutos | Texto 800-1500 palavras | Protótipo Figma  
> **Modelo:** B2B2C (Patrocínio ESG)

---

## 📊 RESUMO EXECUTIVO DO PROJETO

| Item | Definição |
|------|-----------|
| **Nome** | Waste Guardian |
| **Tagline** | "Cada grama economizada. Cada família impactada. Cada planeta preservado." |
| **Problema** | Desperdício alimentar doméstico (30% do purchased, R$ 180-350/família/mês) |
| **Solução** | App mobile com IA para gerenciamento de alimentos próximos ao vencimento |
| **Modelo** | B2B2C: Empresas pagan assinatura; famílias usam de graça |
| **ReceitaProj.** | R$ 8.500-18.500/mês |
| **ODS** | 11.6, 12.3, 13.3 |
| **Fase Atual** | Entrega 01 (03/06) - Protótipo + Vídeo + Texto |

---

## 🎯 ESTRUTURA DO PITCH (5 MINUTOS)

### MINUTO 0:00 - 0:30 | 🪝 GANCHO (O Hook)

> *"A cada dia, o Brasil descarta 1.500 toneladas de alimentos antes mesmo de chegarem às prateleiras. O equivalente a 375 caminhões de lixo. Por dia. R$ 61,3 bilhões perdidos por ano."*

**Dados de Impacto (Alinhamento DLJ4):**
| Métrica | Valor | Fonte |
|---------|-------|-------|
| Desperdício doméstico | 30% do purchased | UNEP Food Waste Index 2024 |
| Custo/família | R$ 180-350/mês | IBGE 2024 |
| Emissões CO₂ | 10kg CO₂/família/mês | EPA Carbon Calculator |
| Ranking global | 10º maior desperdiçador | UNEP Global Index |

---

### MINUTO 0:30 - 1:30 | 💔 O PROBLEMA (Deep Pain)

**Problema Central:** Desperdício alimentar em casas e escolas técnicas.

**Dor Profunda:**
> *"Ninguém quer jogar comida fora. Mas sem dados, sem método, sem hábito — isso acontece todos os dias. E o planeta paga a conta."*

**Alinhamento ODS (Critério DLJ4):**
```
• ODS 12.3 — Reduzir desperdício alimentar pela metade
• ODS 11.6 — Cidades sustentáveis (gestão de resíduos)
• ODS 13.3 — Educação climática para ação local
```

**Diferencial:** Enquanto outras equipes farão "app de doação genérico", nós quantificamos o impacto com números exatos.

---

### MINUTO 1:30 - 2:30 | 💡 A SOLUÇÃO (Our Solution)

## 🌿 WASTE GUARDIAN — Seu Copiloto de Sustentabilidade Doméstica

### O que é?
Um **aplicativo de gestão inteligente de desperdício alimentar** que:
1. **Escaneia** alimentos próximos ao vencimento (câmera do celular + IA)
2. **Sugere receitas** baseadas nos ingredientes prestes a vencer
3. **Calcula impacto ambiental** em tempo real (kg CO₂ evitados)
4. **Gamifica** a redução de desperdício (desafios, ranking, medalhas)
5. **Conecta cooperativas** para doação de alimentos ainda frescos

### Stack Tecnológica (Protótipo Fase 1):
```
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND (Protótipo)                                        │
│ ├── Figma (Alta Fidelidade)                               │
│ ├── Link navegável (View only)                            │
│ └── 6 telas obrigatórias                                  │
├─────────────────────────────────────────────────────────────┤
│ BACKEND (MVP Fase 2+)                                      │
│ ├── Firebase (Auth + Database)                            │
│ ├── OpenAI API (OCR + Receita)                           │
│ └── Flutter/React Native (Mobile)                        │
└─────────────────────────────────────────────────────────────┘
```

**Nota:** Fase 1 não exige código funcional. Protótipo Figma com IA mockada é suficiente.

---

### MINUTO 2:30 - 3:30 | 🏗️ A DEMONSTRAÇÃO (How it Works)

**Protótipo Navegável (6 Telas):**

```
📱 TELA 1: SPLASH SCREEN
├── Logo Waste Guardian
├── Tagline: "Cada grama conta"
└── [Começar]

📱 TELA 2: HOME / DASHBOARD
├── "Você evitou 2.3kg de desperdício esta semana"
├── 🌱 Redução de 1.8kg CO₂
├── 🔥 Streak: 7 dias consecutivos
├── [ESCANEAR ALIMENTO] ← Botão principal
└── Menu: Home | Impacto | Doar | Perfil

📱 TELA 3: SCANNER / CÂMERA
├── Interface de câmera mockada
├── "Escaneando... Iogurte Natural Integral"
├── Alerta: "Vence em 2 dias (05/06)"
├── "Valor estimado: R$ 8,90"
├── [Ver Receitas] [Agendar Doação]
└── Sugestão IA: "Receitas para este ingrediente"

📱 TELA 4: RECEITAS INTELIGENTES
├── "Receitas para hoje" (baseado no scanner)
├── 🎯 Torta de Iogurte (30 min, fácil, R$ 12)
│   └── "Economia: R$ 12,00 | CO₂ evitado: 400g"
├── 🎯 Smoothie Proteico (5 min, fácil, R$ 8)
│   └── "Economia: R$ 8,00 | CO₂ evitado: 250g"
├── 🎯 Bolo de Iogurte (45 min, médio, R$ 15)
│   └── "Economia: R$ 15,00 | CO₂ evitado: 500g"
└── [Ver Ingredientes] [Modo de Preparo] [Assistir Vídeo]

📱 TELA 5: IMPACTO PESSOAL
├── Gráfico de barras: Evolução semanal
├── "Você está no TOP 15% dos usuários"
├── 🏆 Medalhas: Iniciante Verde | Economizador | Herói Climático
├── Ranking da comunidade (top 10)
└── "Impacto total: 24.5kg salvos | 18.2kg CO₂ evitados"

📱 TELA 6: DOAÇÃO / MAPA
├── Mapa com 3 cooperativas próximas
├── 📍 Banco de Alimentos Municipal (2.3km)
├── 📍 Coletivo Sesc Mesa Brasil (4.1km)
├── 📍 Associação de Catadores (1.8km)
├── "Alimentos aceitos: Frutas, legumes, laticínios"
├── "Sua doação gerou R$ 50 de impacto social"
└── [Agendar Retirada] [Ver Necessidades]
```

**Mocks de Dados (IA Fake):**
```
┌────────────────────────────────────────────────────────────┐
│ RESULTADO DO SCANNER (Mock)                                │
├────────────────────────────────────────────────────────────┤
│ 🍶 Iogurte Natural Integral                  │
│ ├─ Validade: 05/06/2026 (2 dias)            │
│ ├─ Valor: R$ 8,90                           │
│ ├─ Status: ⚠️ PRÓXIMO DO VENCIMENTO          │
│ ├─ CO₂ equivalente: 250g                     │
│ └─ Ações: [Receitas] [Doar] [Descartar]     │
└────────────────────────────────────────────────────────────┘
```

---

### MINUTO 3:30 - 4:15 | 💰 MODELO DE NEGÓCIOS (Sustainability)

### Modelo B2B2C (Patrocínio ESG) — Critério 20% da Nota

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ESTRUTURA DE RECEITA                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  B2B: EMPRESAS (Patrocinadores)                                    │
│  ├── Supermercados (Pão de Açúcar, Extra, Carrefour)              │
│  ├── Indústria alimentícia (Nestlé, Danone, JBS)                   │
│  ├── Redes de restaurante (Outback, Madero, McDonald's)          │
│  └── Fabricantes de eletrodomésticos (Samsung, LG)                │
│       ↓ Pagam assinatura anual                                     │
│       ↓ Exibem marca como patrocinador ESG                         │
│                                                                     │
│  WASTE GUARDIAN (Plataforma)                                      │
│  ├── App gratuito para usuário final                               │
│  ├── Dashboard B2B com métricas de impacto                        │
│  ├── Dados anonimizados de consumo (preço por kg evitado)         │
│  └── Ofertas personalizadas de parceiros (sem spam)                │
│       ↓ Engaja usuários                                            │
│       ↓ Gera dados de impacto                                      │
│                                                                     │
│  B2C: FAMÍLIAS (Consumidores)                                     │
│  ├── App gratuito com gamificação                                  │
│  ├── Notificações de validade                                     │
│  └── Impacto ambiental mensurado                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Projeção Financeira (Ano 1):
| Fonte de Receita | Valor Mensal |
|------------------|--------------|
| Assinatura Patrocinadores B2B | R$ 5.000-15.000 |
| Freemium → Premium (10%) | R$ 2.000 |
| Dados anonimizados (B2B) | R$ 1.500 |
| **TOTAL** | **R$ 8.500-18.500** |

### Custo Operacional:
| Item | Valor Mensal |
|------|--------------|
| Servidores (Firebase) | R$ 500-1.000 |
| API IA (OpenAI) | R$ 200-500 |
| Desenvolvimento | Time voluntário |
| Marketing | Orgânico ( Viral + ODS) |
| **TOTAL** | **R$ 700-1.500** |

**Margem:** 75-85% (Startup-friendly)

---

### MINUTO 4:15 - 4:45 | 📈 IMPACTO SOCIAL (Measurable Impact)

### Métricas ODS Quantificadas (Critério 20% da Nota):

| ODS | Meta | Quantidade | Cálculo |
|-----|------|------------|---------|
| **ODS 12.3** | Reduzir desperdício | **120kg/mês** | 50 fam. × 2.4kg/week × 4 semanas |
| **ODS 11.6** | Cidades sustentáveis | **0.8 ton CO₂** | 3.06kg CO₂ × 120kg food |
| **ODS 13.3** | Educação climática | **50 famílias** | Piloto com 50 fam. × 6 meses |
| **ODS 2.1** | Fome zero | **80kg doados** | 40% items × 120kg eligible |

### Quantificação Matemática (Sem Subjetividade):

```
┌─────────────────────────────────────────────────────────────────┐
│ CÁLCULO DE IMPACTO (50 famílias × 6 meses)                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ DESPERDÍCIO EVITADO:                                            │
│ ├── Base: 30% do purchased wasted (fonte: UNEP)               │
│ ├── Família média: 4 pessoas, R$ 600/food/month              │
│ ├── Desperdício: R$ 180/família/mês                           │
│ ├── Redução alvo: 50% (via app)                              │
│ └── Economia: R$ 90/família/mês                               │
│                                                                 │
│ EMISSÕES DE CO₂:                                                │
│ ├── CO₂ por kg food wasted: 3.06kg (EPA)                      │
│ ├── kg evitados/mês: 120kg                                    │
│ └── CO₂ evitado: 0.37 ton/mês                                 │
│                                                                 │
│ IMPACTO FINANCEIRO:                                             │
│ ├── Economia família: R$ 90/mês                               │
│ ├── 50 famílias × R$ 90 = R$ 4.500/mês                      │
│ └── 6 meses = R$ 27.000 economizados                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### MINUTO 4:45 - 5:00 | 🚀 VISÃO DE FUTURO (Call to Action)

### Roadmap de Escalabilidade:

```
FASE 1 (Jun 2026)     │ Protótipo + Vídeo + Validação conceito
FASE 2 (Jul-Set 2026) │ MVP funcional + Piloto em 50 famílias
FASE 3 (Out-Dez 2026) │ Integração B2B + Expansão para escolas técnicas
FASE 4 (2027)         │ API aberta + Parceria com prefeituras
```

### Chiusura Emocional:
> *"Com Waste Guardian, cada família se torna um agente de mudança. Cada refeição economizada é um voto pelo planeta. Cada grama conta."*

---

## 🎯 ARGUMENTO PARA A PROFESSORA ORIENTADORA

### Por que ela deve aceitar?

1. **Alinhamento com missão da escola:** ODS + Sustentabilidade + Tecnologia + Inovação
2. **Sem custo adicional:** O projeto usa ferramentas gratuitas (Figma, Firebase, OpenAI API trial)
3. **Visibilidade nacional:** Se classificar = vitrine oficial (Sebra + Diário Oficial + Certificação)
4. **Mentoria acessível:** A equipe já tem o conceito maduro; ela só precisa validar
5. **Alinhamento pedagógico:** ODS, economia circular, ESG — temas transversais do currículo

### O que ela precisa fazer?
> *"Professora, sua atuação como orientadora é simples: 1) Validar nosso projeto no portal DLJ4; 2) Dar feedback quinzenal (30min por videoconferência). Em troca, seu nome aparece na documentação oficial com certificação Sebra."*

### Formato de Acompanhamento:
- Reunião quinzenal (30 minutos)
- Feedback sobre viabilidade técnica e mercadológica
- Assinatura de documento de acompanhamento (1 página)

---

## 📋 FRAMEWORK TÉCNICO (DLJ4 Fase 1)

### Critérios de Avaliação (20% cada):

| Critério | O que avaliam | Como demonstrar |
|----------|---------------|-----------------|
| **Protótipo Navegável** | Materialidade da solução | Link Figma (6 telas) |
| **Vídeo Pitch 5min** | Comunicação e storytelling | MP4 com demo |
| **Modelo de Negócios** | Viabilidade e sustentabilidade | Canvas B2B2C |
| **Sustentabilidade Financeira** | Escalabilidade e receita | Projeções R$ |
| **Impacto Social (ODS)** | Métricas mensuráveis | Tabela + Fontes |

### O que NÃO é exigido:
- ❌ Código em produção
- ❌ Contratos assinados
- ❌ Usuários reais
- ❌ Faturamento real
- ❌ Servidor próprio

### O que É exigido:
- ✅ Protótipo navegável (Figma)
- ✅ Vídeo de 5 minutos (MP4)
- ✅ Modelo de negócio (Canvas)
- ✅ Métricas quantificadas (kg, R$, %)
- ✅ Equipe completa (2-5 alunos + 1 orientador)

---

## 🎬 ROTEIRO DO VÍDEO (5 MINUTOS)

```
⏱️ 0:00-0:30 │ HOOK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Você sabia que o Brasil descarta 1.500 toneladas de comida por dia?"

⏱️ 0:30-1:30 │ PROBLEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ODS 11, 12, 13 — R$ 61,3 bilhões/ano — 30% wasted

⏱️ 1:30-2:30 │ SOLUÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Waste Guardian — App demo (screen recording Figma)

⏱️ 2:30-3:30 │ MODELO DE NEGÓCIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
B2B2C — Empresas pagan, famílias usam de graça

⏱️ 3:30-4:30 │ IMPACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
120kg/mês | 0.8 ton CO₂ | R$ 90/família economia

⏱️ 4:30-5:00 │ FECHAMENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Cada grama conta. Cada família impacta. Cada planeta preservado."
```

---

## 📁 DOCUMENTOS DO PROJETO

| Arquivo | Localização | Status |
|---------|-------------|--------|
| PITCH_Waste_Guardian_Liga_Jovem.md | 02_Estrategia_Vencedora/ | ✅ ATUALIZADO |
| FRAMEWORKS_ENTREGA_01.md | ./ | ✅ PRONTO |
| DELIVERABLES_CHECKLIST_Liga_Jovem.md | 04_BI_Ofensivo/ | ✅ ATUALIZADO |
| PROGRESSO_ENTREGA_01.md | ./ | ✅ ATUALIZADO |
| EMAIL_PROFESSORA.md | ./ | ✅ PRONTO |

---

> **Mantra:** *"Waste Guardian: cada grama conta. Cada família impacta. Cada escola transforma."*