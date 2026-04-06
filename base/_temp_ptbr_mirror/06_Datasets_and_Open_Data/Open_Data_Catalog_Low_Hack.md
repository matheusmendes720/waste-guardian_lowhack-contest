# 📊 Catálogo de Dados Abertos para Analytics do Waste Guardian

> **Datasets Curados para Analytics do Mundo Real e Desenvolvimento de Soluções**  
> **Data:** 03-04-2026  
> **Escopo:** Desperdício de alimentos, produção industrial, métricas de sustentabilidade

---

## 🎯 Estratégia de Datasets

### Principais Casos de Uso

| Caso de Uso | Tipo de Dataset | Aplicação |
|----------|--------------|-------------|
| **Treinamento de Modelos de ML** | Dados históricos de desperdício | Analytics preditivo |
| **Benchmarking** | Médias da indústria | Posicionamento competitivo |
| **Demo/Pitch** | Dados de amostra realistas | Visualização em dashboard |
| **Análise Econômica** | Dados de custo/perda | Cálculos de ROI |
| **Contexto Geográfico** | Dados regionais | Expansão de mercado |

---

## 📁 Nível 1: Datasets Essenciais (Obrigatórios)

### 1. Global Food Wastage Dataset (2018-2024)

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | Kaggle |
| **URL** | https://www.kaggle.com/datasets/atharvasoundankar/global-food-wastage-dataset-2018-2024 |
| **Tamanho** | Cobertura global, multi-ano |
| **Formato** | CSV |
| **Campos-Chave** | País, ano, toneladas de desperdício, categoria de alimento, perda econômica |
| **Caso de Uso** | Contexto global, análise de tendências, benchmarking |

**Valor para o Waste Guardian:**
- Estabelecer porcentagens de desperdício de linha de base por região
- Comparar Brasil vs. médias globais
- Validar o dimensionamento do mercado (TAM/SAM/SOM)

---

### 2. RealWaste Dataset (UCI Machine Learning)

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | UCI ML Repository |
| **URL** | https://archive.ics.uci.edu/dataset/908/realwaste |
| **Tamanho** | 9 tipos de materiais, ambiente de aterro autêntico |
| **Formato** | Dataset de classificação de imagens |
| **Principais Recursos** | Imagens de itens de desperdício, classificação de material |
| **Caso de Uso** | Treinamento de visão computacional para identificação de desperdício |

**Valor para o Waste Guardian:**
- Treinar modelos de CV para classificação de desperdício (recurso futuro)
- Demonstrar capacidades de IA além do analytics preditivo
- Suporte para categorização automatizada de desperdício

---

### 3. Fluxos de Desperdício de Alimentos nos EUA entre Setores

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | US EPA / Data.gov |
| **URL** | https://catalog.data.gov/dataset/u-s-food-waste-flows-between-sectors-2018-v1-3-2 |
| **Tamanho** | Dados de fluxo ao nível do setor |
| **Formato** | CSV/JSON |
| **Campos-Chave** | Setor de origem, destino, tipo de desperdício, volume |
| **Caso de Uso** | Mapeamento da cadeia de valor, análise de fluxo |

**Valor para o Waste Guardian:**
- Entender os fluxos de desperdício na cadeia de valor
- Identificar pontos de intervenção críticos
- Modelo para adaptação ao contexto brasileiro

---

### 4. FOWCUS Dataset (Composição de Desperdício de Alimentos)

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | Nature Scientific Data |
| **URL** | https://www.nature.com/articles/s41597-025-05629-x |
| **Tamanho** | Dados detalhados de composição |
| **Formato** | Dataset acadêmico |
| **Principais Recursos** | Composição da commodity, quantificação, valorização |
| **Caso de Uso** | Análise detalhada da composição do desperdício |

**Valor para o Waste Guardian:**
- Composição precisa do desperdício para avaliação acurada
- Identificação de oportunidades de valorização
- Base científica para modelos econômicos

---

## 📁 Nível 2: Datasets de Suporte (Alto Valor)

### 5. FIKWaste: Desperdício em Cozinhas de Restaurantes (Portugal)

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | MDPI Data Journal |
| **URL** | https://mdpi-res.com/d_attachment/data/data-06-00025/article_deploy/data-06-00025.pdf |
| **Tamanho** | 3 cozinhas de restaurantes, série temporal |
| **Formato** | PDF/Excel |
| **Campos-Chave** | Geração diária de desperdício, tipo, horário |
| **Caso de Uso** | Padrões operacionais de desperdício |

**Valor para o Waste Guardian:**
- Padrões operacionais diários para design de dashboard
- Insights temporais sobre geração de desperdício
- Comparável a ambientes de cozinhas industriais

---

### 6. Análise de Desperdício de Alimentos (Kaggle Notebook)

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | Kaggle |
| **URL** | https://www.kaggle.com/code/gianlab/analysis-of-food-waste-in-the-world |
| **Tipo** | Notebook de análise + dados |
| **Conteúdo** | Análise global de desperdício, visualizações |
| **Caso de Uso** | Metodologia de análise de referência |

**Valor para o Waste Guardian:**
- Abordagens analíticas estabelecidas
- Inspiração para visualização
- Métricas comparativas

---

### 7. Worldwide Food Waste Dataset

| Atributo | Detalhes |
|-----------|---------|
| **Fonte** | Kaggle |
| **URL** | https://www.kaggle.com/datasets/aritra100/worldwide-food-waste-dataset |
| **Tamanho** | Agregações ao nível do país |
| **Formato** | CSV |
| **Caso de Uso** | Benchmarking geográfico |

**Valor para o Waste Guardian:**
- Comparações entre países
- Dimensionamento do mercado regional
- Contexto global para o pitch

---

## 📁 Nível 3: Dados de Referência (Contexto)

### 8. Indicadores Econômicos do Brasil

| Fonte | Dado | Uso |
|--------|------|-----|
| IBGE | População, PIB, produção industrial | Contexto de mercado |
| Banco Central | Taxas de câmbio, inflação | Cálculos de custo |
| ABIA | Estatísticas específicas do setor | Validação da indústria |

### 9. Padrões de Relatórios ESG

| Padrão | Uso |
|----------|-----|
| Padrões GRI | Referência de framework de relatórios |
| SASB | Métricas específicas da indústria |
| CSRD | Conformidade da UE (para exportações) |
| Protocolo GEE | Cálculos de emissões |

### 10. Dados de Benchmark de Concorrentes

| Fonte | Dado |
|--------|------|
| SafetyChain | Estudos de caso, alegações de ROI |
| FoodLogiQ | Comparações de recursos |
| SAP MES | Padrões de integração |

---

## 🔧 Plano de Integração de Dados

### Para o MVP do Waste Guardian

**Abordagem recomendada:**
1. Usar dados do Global Food Wastage para o contexto do Brasil
2. Criar dados sintéticos realistas baseados nos padrões do FIKWaste
3. Escalar para proporções industriais (10x dados de restaurantes)
4. Adicionar recomendações de GenAI (simuladas)

**Tamanho do Dataset de Demonstração:**
- 3-5 linhas de produção
- 90 dias de dados
- 5-10 tipos de eventos de desperdício
- Faixa de valor de desperdício de R$ 500K-2M

---

## 📥 Instruções de Acesso aos Dados

### Datasets do Kaggle
```python
# Requer API do Kaggle
!kaggle datasets download -d atharvasoundankar/global-food-wastage-dataset-2018-2024
!kaggle datasets download -d joebeachcapital/food-waste
```

### Repositório UCI
```python
# Usando ucimlrepo
from ucimlrepo import fetch_ucirepo
realwaste = fetch_ucirepo(id=908)
```

---

## 🛡️ Qualidade dos Dados e Ética

### Checklist de Qualidade
- [ ] Recência dos dados (dentro de 2-3 anos)
- [ ] Confiabilidade da fonte (governo/acadêmica/indústria)
- [ ] Relevância geográfica (foco em Brasil/LATAM)
- [ ] Conformidade com licença (dados abertos)

### Considerações de Privacidade
- Nenhuma informação pessoal identificável (PII)
- Apenas dados agregados para a demonstração
- Dados sintéticos para cenários sensíveis
- Atribuição clara das fontes

---

## 🚀 Próximos Passos

### Imediato (Pré-Competição)
1. Baixar o dataset Global Food Wastage
2. Extrair dados específicos do Brasil
3. Criar dataset de demonstração (sintético baseado em padrões)
4. Pré-popular o dashboard com dados realistas

### Durante a Competição
1. Usar datasets para validação
2. Referenciar fontes para credibilidade
3. Gerar insights a partir de padrões
4. Criar visualizações convincentes

---

*Versão do Documento: Catálogo de Dados Abertos v1.0*  
*Última Atualização: 03-04-2026*  
*Fontes de Dados: Datasets abertos verificados*  
*Licença: Dados Abertos (varia conforme a fonte)*
