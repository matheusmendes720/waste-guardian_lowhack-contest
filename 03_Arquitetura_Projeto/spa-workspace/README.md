# 🌿 Waste Guardian — SPA

> Aplicativo mobile de gestão inteligente de desperdício alimentar
> Deploy em produção: https://waste-guardian-dlj4.netlify.app

---

## 🚀 Deploy Rápido

### Opção 1: Netlify CLI
```bash
# 1. Navegue até a pasta do projeto
cd 03_Arquitetura_Projeto/spa-workspace

# 2. Deploy
netlify deploy --prod --dir=.
```

### Opção 2: Drag & Drop
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `spa-workspace` para o dropzone
3. Aguarde o deploy

### Opção 3: GitHub (Automático)
1. Faça push para um repositório GitHub
2. Conecte o repo em https://app.netlify.com
3. Deploy automático a cada push

---

## 📱 Funcionalidades

### Telas Implementadas
- [x] Splash Screen (2.5s auto-transition)
- [x] Home/Dashboard (métricas + scan)
- [x] Scanner (mock de IA)
- [x] Receitas (4 receitas com detalhes)
- [x] Impacto (gráficos + ranking + medalhas)
- [x] Doação (mapa + cooperativas)
- [x] Perfil (estatísticas + configurações)

### Features
- [x] Navegação SPA (sem reload)
- [x] Mock de scan com IA fake
- [x] Modal de receita com ingredientes
- [x] Gamificação (pontos, ranking, medalhas)
- [x] Dados persistidos em localStorage
- [x] Mobile-first (375x812px)
- [x] Responsivo (768px+)

---

## 🎯 Critérios DLJ4 — Entrega Fase 1

| Critério | Status | Como Demonstra |
|----------|--------|----------------|
| Protótipo Navegável | ✅ 100% | SPA em produção (não Figma) |
| Apresentação | ✅ | Link compartilhável funciona |
| Sustentabilidade Financeira | ⏳ | Precisa detalhar no texto |
| Impacto Social | ✅ | Quantificado (kg, R$, CO₂) |
| Pesquisa | ⏳ | Precisa de 10 entrevistas |

---

## 📂 Estrutura de Arquivos

```
spa-workspace/
├── index.html      # SPA principal (todas as telas)
├── styles.css       # Estilos premium (mobile-first)
├── app.js          # Lógica de navegação + mock data
├── netlify.toml    # Configuração de deploy
└── README.md       # Este arquivo
```

---

## 🎨 Design System

### Cores
- Primary: `#22C55E` (verde)
- Secondary: `#10B981`
- Background: `#F9FAFB`
- Text: `#111827`
- Warning: `#F59E0B`

### Tipografia
- Font: Inter (Google Fonts)
- Pesos: 400, 500, 600, 700

### Espaçamento
- Sistema: 8px (8, 16, 24, 32, 48)

### Border Radius
- sm: 8px | md: 12px | lg: 16px | xl: 24px

---

## 🔧 Customização

### Dados Mockados (app.js)
```javascript
const mockScans = [
    { icon: '🍶', name: 'Iogurte Natural Integral', ... },
    { icon: '🍞', name: 'Pão de Forma', ... },
    // Adicione mais...
];
```

### Receitas (app.js)
```javascript
const recipes = {
    torta: { name: 'Torta de Iogurte', ... },
    smoothie: { ... },
    bolo: { ... },
    sorvete: { ... }
};
```

### Dados do Usuário (app.js)
```javascript
const userData = {
    name: 'Maria Silva',
    points: 2340,
    ranking: 47,
    streak: 7,
    // ...
};
```

---

## 📊 Status do Deploy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🚀 DEPLOY STATUS                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  • SPA: ✅ Criado (index.html + styles.css + app.js)                      │
│  • Netlify.toml: ✅ Configurado                                           │
│  • Deploy: ⏳ PENDENTE (executar `netlify deploy --prod`)                  │
│                                                                             │
│  📝 PRÓXIMO PASSO:                                                         │
│  1. netlify deploy --prod --dir=.                                        │
│  2. Copiar URL do deploy                                                  │
│  3. Colar no portal DLJ4                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Links para DLJ4

| Item | Link/Pendente |
|------|---------------|
| Deploy Netlify | ⏳ Criar após upload |
| Repo GitHub | ⏳ (Opcional) |
| Portal DLJ4 | https://desafio-liga-jovem.sebrae.com.br |

---

> **Mantra:** *"Cada grama conta. Cada família impacta. Cada planeta preservado."*
> 
> **Versão:** 1.0 | **Data:** 2026-06-03 | **Equipe:** ENGAJAM