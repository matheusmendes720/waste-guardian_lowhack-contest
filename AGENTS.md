# AGENTS.md — Liga Jovem 4ª Edição (DLJ4) / Waste Guardian

> **Leia-me primeiro.** Este diretório é a preparação tática para o Desafio Liga Jovem 2026. O produto final é documentação + protótipo Figma (não código compilável). O projeto Waste Guardian foi originalmente desenvolvido para o Low Hack 2026 (Mendix); aqui é adaptado para o DLJ4.

---

## ⚠️ PRIORIDADE CRÍTICA (2026-06-03)

**Progresso: 35% | Mínimo para classificação: 70%**

Deadline: **03/06/2026 23:59** | Vídeo até 07/06

### Ações bloqueantes (agora):

1. **Cadastrar orientadora no portal DLJ4** — sem orientadora = reprovação automática
2. **Finalizar 6 telas Figma** (70% completo)
3. **Completar Canvas B2B2C** (60%)
4. **Quantificar métricas ODS** (40%)
5. **Escrever Texto Descritivo 800-1500 palavras** (0%)

---

## 📦 Estrutura Obrigatória (00-05 + scripts)

```
local/liga_jovem/
├── 00_Regulamento/
├── 01_Intel_OSINT/
├── 02_Estrategia_Vencedora/
├── 03_Arquitetura_Projeto/       ← Docs técnicos + spa-workspace (web preview)
├── 04_BI_Ofensivo/
├── 05_Market_Intelligence/
├── scripts/                       ← Python/Node.js (stdlib only, sem deps)
├── INDEX.md                       ← Hub principal (leia sempre primeiro)
├── PROGRESSO_ENTREGA_01.md
├── FRAMEWORKS_ENTREGA_01.md
├── PITCH_Waste_Guardian_Liga_Jovem.md
├── DELIVERABLES_CHECKLIST_Liga_Jovem.md
└── AGENTS.md                     ← Você está aqui
```

**Anti-padrões proibidos:** `.gitkeep`, `00_INDEX.md` (use `INDEX.md`), estrutura mista.

---

## 🎯 Entregáveis DLJ4 (Checklist)

| Entregável | Status |Deadline |
|------------|--------|---------|
| Protótipo Figma (6 telas) | 🔄 70% | 03/06 |
| Vídeo Pitch (5 min) | ⏳ 0% | 07/06 |
| Modelo Canvas (9 blocos) | 🔄 60% | 03/06 |
| Sustentabilidade Financeira | 🔄 40% | 03/06 |
| Impacto Social (ODS quantificado) | 🔄 40% | 03/06 |
| Texto Descritivo (800-1500 palavras) | ⏳ 0% | 03/06 |

As 6 telas Figma: Splash → Home/Dashboard → Scanner → Receitas → Impacto → Doação/Mapa.

---

## 🔑 Convenções deste diretório

- **Idioma:** Tudo em Português brasileiro (docs, variáveis, commits).
- **Docs:** Header block obrigatório `> **Status:** / > **Last Updated:** / > **Priority:**`.
- **Mermaid + tabelas:** Mínimo 3 diagramas, 5 tabelas por competição.
- **Encoding:** Sempre `encoding='utf-8'` em qualquer I/O.
- **Links internos:** Use `file:///c:/Users/...` para cross-references.
- **Scripts:** Apenas stdlib (`json`, `csv`, `os`, `datetime`). Sem `requirements.txt` ou `node_modules`.

---

## 📂 Referências-chave (leia antes de editar)

| Arquivo | Propósito |
|---------|-----------|
| `INDEX.md` | Hub principal — prioritize tasks aqui |
| `PROGRESSO_ENTREGA_01.md` | Status geral do projeto |
| `FRAMEWORKS_ENTREGA_01.md` | Especificações técnicas de cada entregável |
| `DELIVERABLES_CHECKLIST_Liga_Jovem.md` | Checklist completo |
| `PITCH_Waste_Guardian_Liga_Jovem.md` | Narrativa completa do pitch |
| `02_Estrategia_Vencedora/00_INDEX.md` | Estratégia e cronograma |
| `04_BI_Ofensivo/` | Econometria e métricas financeiras |

---

## 🧠 Ligação com o repositório pai

Este diretório vive em `competitive_programing/local/liga_jovem/`. O repositório pai (`competitive_programing/`) contém:

- `manage.py sync` — pipeline de dados (CSV → JSON → MD/ICS)
- `src/core/config.py` — caminhos centralizados
- `global/02_Calendar/` — calendários gerados automaticamente

**Não hardcode caminhos_absolutos** (exceto em `config.py` do pai). Use `os.path.join` para paths.

---

## ⚡ Regras de ouro

1. **Sem orientadora = 0** — resolva isso primeiro
2. **Deadline 03/06 23:59** — submit 6h antes (regra do padre)
3. **Não crie deps** — sem `npm install`, `pip install`, `requirements.txt`
4. **MVP funcional > perfeito** — "protótipo feio funciona, pitch perfeito comunica"
5. **Mantenha INDEX.md sincronizado** ao alterar estrutura

---

*Última atualização: 2026-06-03*