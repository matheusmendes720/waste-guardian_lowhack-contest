# 🧪 Waste Guardian - Projeto Experimental Mendix

> **Objetivo:** Criar um sandbox rápido para testar conceitos antes do hackathon  
> **Timeline:** 2-3 dias para MVP funcional  
> **Stack:** Mendix Studio Pro + OpenAI API

---

## 🎯 **Escopo Experimental**

### **Funcionalidades Mínimas**
1. **Registro de Evento de Desperdício** (CRUD básico)
2. **Dashboard Simplificado** com KPIs
3. **Simulação de IA** (mock da OpenAI)
4. **Navegação entre 3 páginas**

### **Entidades Principais**
```
EventoDesperdicio
├── ID (Auto)
├── LinhaProducao (String)
├── DataHora (DateTime)
├── QuantidadeProduzida (Decimal)
├── QuantidadeDescartada (Decimal)
├── Causa (String)
├── Turno (Enumeration)
└── Status (Enumeration)

LinhaProducao
├── ID (Auto)
├── Nome (String)
├── Capacidade (Decimal)
└── StatusAtual (Enumeration)
```

---

## 🛠️ **Setup Rápido (30 min)**

### **1. Criar Projeto com Maia AI**
1. Abra Mendix Studio Pro
2. Use o prompt no campo "Project Context":
   ```
   Develop a Waste Management System for Food & Beverage industry that enables production supervisors to efficiently track waste events, analyze patterns, and receive AI-powered recommendations to reduce operational losses.
   ```
3. Clique em "Generate Plan"
4. Selecione "Blank Project" se preferir controle total

### **2. Configurar Modelo de Domínio**
```xml
<!-- Entidades criadas manualmente no Studio Pro -->
<entity name="EventoDesperdicio" generalization="System.Entity">
  <attribute name="LinhaProducao" type="String"/>
  <attribute name="DataHora" type="DateTime"/>
  <attribute name="QuantidadeProduzida" type="Decimal"/>
  <attribute name="QuantidadeDescartada" type="Decimal"/>
  <attribute name="Causa" type="String"/>
  <attribute name="Turno" type="Enumeration"/>
  <attribute name="Status" type="Enumeration"/>
</entity>

<entity name="LinhaProducao" generalization="System.Entity">
  <attribute name="Nome" type="String"/>
  <attribute name="Capacidade" type="Decimal"/>
  <attribute name="StatusAtual" type="Enumeration"/>
</entity>
```

### **3. Enumerations**
```
Turno: [Manhã, Tarde, Noite]
Status: [Aberto, Em_Análise, Resolvido]
StatusLinha: [Ativa, Manutenção, Inativa]
```

---

## 📱 **Estrutura de Páginas**

### **Página 1: Dashboard**
- Cards com KPIs (Total Eventos, % Desperdício, Custo Estimado)
- Lista de eventos recentes
- Botão "Novo Evento"

### **Página 2: Registro de Evento**
- Formulário com campos do EventoDesperdicio
- Dropdown para LinhaProducao
- Validações básicas

### **Página 3: Detalhes/Análise**
- Detalhes do evento selecionado
- Botão "Gerar Recomendação IA" (mock)
- Histórico de ações

---

## 🤖 **Integração IA (Mock)**

### **Microflow: MF_GerarRecomendacao**
```javascript
// Lógica simplificada para teste
if (evento.QuantidadeDescartada > evento.QuantidadeProduzida * 0.05) {
    return "ALERTA: Desperdício acima de 5%. Verificar configuração da máquina.";
} else {
    return "Nível de desperdício dentro do esperado. Continuar monitoramento.";
}
```

### **Para Hackathon (Real)**
```javascript
// Configurar REST Call para OpenAI
URL: https://api.openai.com/v1/chat/completions
Headers: Authorization: Bearer ${OPENAI_API_KEY}
Body: {
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "system",
      "content": "Você é um especialista em redução de desperdício industrial..."
    }
  ]
}
```

---

## ⚡ **Comandos Rápidos**

### **Atalhos Studio Pro**
- `Ctrl+N`: Novo elemento
- `F6`: Run localmente
- `Ctrl+Shift+P`: Pesquisar comandos
- `Alt+Enter`: Propriedades do elemento

### **Debug e Teste**
1. Use "Mendix Modeler" → "Debug"
2. Teste microflows com "Test Microflow"
3. Verifique logs em "Console"

---

## 📋 **Checklist de Validação**

### **Mínimo Funcional**
- [ ] 3 entidades criadas
- [ ] 3 páginas navegáveis
- [ ] CRUD funcionando
- [ ] Dashboard com dados mock
- [ ] Botão IA simulado

### **Para Hackathon**
- [ ] OpenAI API configurada
- [ ] Deploy no Mendix Free Tier
- [ ] Teste de stress
- [ ] Documentação básica

---

## 🚨 **Troubleshooting Comum**

### **Erro: "Cannot find entity"**
→ Verifique se o módulo está correto nas referências

### **Erro: "Microflow timeout"**
→ Ajuste timeout para 60s nas configurações

### **Erro: "Page not found"**
→ Verifique a configuração de navegação

---

## 📚 **Recursos Úteis**

- [Mendix Academy](https://academy.mendix.com/)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Atlas UI Documentation](https://docs.mendix.com/refguide/atlas-ui/)

---

## 🎯 **Next Steps**

1. **Hoje:** Setup + Modelo de Domínio
2. **Amanhã:** Páginas + CRUD
3. **Dia Seguinte:** IA Integration + Deploy

---

*Criado em 04/04/2026 para Low Hack 2026*
