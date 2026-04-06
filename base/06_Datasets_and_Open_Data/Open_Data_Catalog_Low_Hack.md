# 📊 Open Data Catalog for Waste Guardian Analytics

> **Curated Datasets for Real-World Analytics & Solution Development**  
> **Date:** 2026-04-03  
> **Scope:** Food waste, industrial production, sustainability metrics

---

## 🎯 Dataset Strategy

### Primary Use Cases

| Use Case | Dataset Type | Application |
|----------|--------------|-------------|
| **Training ML Models** | Historical waste data | Predictive analytics |
| **Benchmarking** | Industry averages | Competitive positioning |
| **Demo/Pitch** | Realistic sample data | Dashboard visualization |
| **Economic Analysis** | Cost/loss data | ROI calculations |
| **Geographic Context** | Regional data | Market expansion |

---

## 📁 Tier 1: Essential Datasets (Must Have)

### 1. Global Food Wastage Dataset (2018-2024)

| Attribute | Details |
|-----------|---------|
| **Source** | Kaggle |
| **URL** | https://www.kaggle.com/datasets/atharvasoundankar/global-food-wastage-dataset-2018-2024 |
| **Size** | Global coverage, multi-year |
| **Format** | CSV |
| **Key Fields** | Country, year, waste tonnes, food category, economic loss |
| **Use Case** | Global context, trend analysis, benchmarking |

**Value for Waste Guardian:**
- Establish baseline waste percentages by region
- Compare Brazil vs global averages
- Validate market sizing (TAM/SAM/SOM)

---

### 2. RealWaste Dataset (UCI Machine Learning)

| Attribute | Details |
|-----------|---------|
| **Source** | UCI ML Repository |
| **URL** | https://archive.ics.uci.edu/dataset/908/realwaste |
| **Size** | 9 material types, authentic landfill environment |
| **Format** | Image classification dataset |
| **Key Features** | Waste item images, material classification |
| **Use Case** | Computer vision training for waste identification |

**Value for Waste Guardian:**
- Train CV models for waste classification (future feature)
- Demonstrate AI capabilities beyond predictive analytics
- Support for automated waste categorization

---

### 3. U.S. Food Waste Flows Between Sectors

| Attribute | Details |
|-----------|---------|
| **Source** | US EPA / Data.gov |
| **URL** | https://catalog.data.gov/dataset/u-s-food-waste-flows-between-sectors-2018-v1-3-2 |
| **Size** | Sector-level flow data |
| **Format** | CSV/JSON |
| **Key Fields** | Source sector, destination, waste type, volume |
| **Use Case** | Value chain mapping, flow analysis |

**Value for Waste Guardian:**
- Understand waste flows in value chain
- Identify critical intervention points
- Model for Brazilian context adaptation

---

### 4. FOWCUS Dataset (Food Waste Composition)

| Attribute | Details |
|-----------|---------|
| **Source** | Nature Scientific Data |
| **URL** | https://www.nature.com/articles/s41597-025-05629-x |
| **Size** | Detailed composition data |
| **Format** | Academic dataset |
| **Key Features** | Commodity composition, quantification, valorization |
| **Use Case** | Detailed waste composition analysis |

**Value for Waste Guardian:**
- Precise waste composition for accurate valuation
- Valorization opportunity identification
- Scientific backing for economic models

---

## 📁 Tier 2: Supporting Datasets (High Value)

### 5. FIKWaste: Restaurant Kitchen Waste (Portugal)

| Attribute | Details |
|-----------|---------|
| **Source** | MDPI Data Journal |
| **URL** | https://mdpi-res.com/d_attachment/data/data-06-00025/article_deploy/data-06-00025.pdf |
| **Size** | 3 restaurant kitchens, time-series |
| **Format** | PDF/Excel |
| **Key Fields** | Daily waste generation, type, timing |
| **Use Case** | Operational waste patterns |

**Value for Waste Guardian:**
- Daily operational patterns for dashboard design
- Temporal waste generation insights
- Comparable to industrial kitchen settings

---

### 6. Food Waste Analysis (Kaggle Notebook)

| Attribute | Details |
|-----------|---------|
| **Source** | Kaggle |
| **URL** | https://www.kaggle.com/code/gianlab/analysis-of-food-waste-in-the-world |
| **Type** | Analysis notebook + data |
| **Content** | Global waste analysis, visualizations |
| **Use Case** | Reference analysis methodology |

**Value for Waste Guardian:**
- Established analytical approaches
- Visualization inspiration
- Comparative metrics

---

### 7. Worldwide Food Waste Dataset

| Attribute | Details |
|-----------|---------|
| **Source** | Kaggle |
| **URL** | https://www.kaggle.com/datasets/aritra100/worldwide-food-waste-dataset |
| **Size** | Country-level aggregations |
| **Format** | CSV |
| **Use Case** | Geographic benchmarking |

**Value for Waste Guardian:**
- Country comparisons
- Regional market sizing
- Global context for pitch

---

## 📁 Tier 3: Reference Data (Context)

### 8. Brazil Economic Indicators

| Source | Data | Use |
|--------|------|-----|
| IBGE | Population, GDP, industrial production | Market context |
| Banco Central | Exchange rates, inflation | Cost calculations |
| ABIA | Sector-specific statistics | Industry validation |

### 9. ESG Reporting Standards

| Standard | Use |
|----------|-----|
| GRI Standards | Reporting framework reference |
| SASB | Industry-specific metrics |
| CSRD | EU compliance (for exports) |
| GHG Protocol | Emissions calculations |

### 10. Competitor Benchmark Data

| Source | Data |
|--------|------|
| SafetyChain | Case studies, ROI claims |
| FoodLogiQ | Feature comparisons |
| SAP MES | Integration patterns |

---

## 🔧 Data Integration Plan

### For Waste Guardian MVP

**Recommended approach:**
1. Use Global Food Wastage data for Brazil context
2. Create realistic synthetic data based on FIKWaste patterns
3. Scale to industrial proportions (10x restaurant data)
4. Add GenAI recommendations (simulated)

**Demo Dataset Size:**
- 3-5 production lines
- 90 days of data
- 5-10 waste event types
- R$ 500K-2M waste value range

---

## 📥 Data Access Instructions

### Kaggle Datasets
```python
# Requires Kaggle API
!kaggle datasets download -d atharvasoundankar/global-food-wastage-dataset-2018-2024
!kaggle datasets download -d joebeachcapital/food-waste
```

### UCI Repository
```python
# Using ucimlrepo
from ucimlrepo import fetch_ucirepo
realwaste = fetch_ucirepo(id=908)
```

---

## 🛡️ Data Quality & Ethics

### Quality Checklist
- [ ] Data recency (within 2-3 years)
- [ ] Source reliability (government/academic/industry)
- [ ] Geographic relevance (Brazil/LATAM focus)
- [ ] License compliance (open data)

### Privacy Considerations
- No personally identifiable information (PII)
- Aggregate data only for demo
- Synthetic data for sensitive scenarios
- Clear attribution of sources

---

## 🚀 Next Steps

### Immediate (Pre-Competition)
1. Download Global Food Wastage dataset
2. Extract Brazil-specific data
3. Create demo dataset (synthetic based on patterns)
4. Pre-populate dashboard with realistic data

### During Competition
1. Use datasets for validation
2. Reference sources for credibility
3. Generate insights from patterns
4. Create compelling visualizations

---

*Document Version: Open Data Catalog v1.0*  
*Last Updated: 2026-04-03*  
*Data Sources: Verified open datasets*  
*License: Open Data (varies by source)*
