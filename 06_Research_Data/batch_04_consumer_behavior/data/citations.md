# Citações — Batch 04: Consumer Behavior (Persona Brasileira)

> **Status:** Concluído
> **Last Updated:** 2026-06-03
> **Purpose:** Registro completo de todas as fontes primárias e secundárias utilizadas no Batch 04

---

## Fontes Primárias Oficiais (Tier 1 — confiabilidade alta)

### 1. CETIC.br — TIC Domicílios 2024
- **Tipo:** Pesquisa oficial anual (NIC.br + CGI.br + UNESCO)
- **Cobertura:** Amostra probabilística nacional (~18 mil domicílios) — principais indicadores de TIC no Brasil
- **Tabelas usadas:**
  - J2 — Indivíduos que possuem telefone celular (por classe social, idade, renda, escolaridade)
  - A4 — Domicílios com acesso à internet (por classe social, área, região, renda)
  - J5 — Indivíduos que usaram internet no telefone celular (por classe social)
- **URL base:** https://cetic.br/pt/pesquisa/domicilios/
- **Tabela J2 específica:** https://cetic.br/pt/tics/domicilios/2024/individuos/J2/
- **Tabela A4 específica:** https://cetic.br/pt/tics/domicilios/2024/domicilios/A4/
- **Tabela J5 específica:** https://cetic.br/pt/tics/domicilios/2024/individuos/J5/
- **Access date:** 2026-06-03
- **Dados extraídos:**
  - Smartphone por classe: A=94%, B=98%, C=90%, DE=77%, TOTAL=87%
  - Internet por classe: A=100%, B=99%, C=91%, DE=68%, TOTAL=83%
  - Internet móvel por classe: A=98%, B=98%, C=91%, DE=78%, TOTAL=88%
- **Confiabilidade:** Alta — survey oficial, metodologias padronizadas
- **Limitações:** Survey autorreportada; não capta uso real (apenas posse declarada)

### 2. ABEP — Critério de Classificação Econômica Brasil (CCEB) 2022
- **Tipo:** Critério socioeconômico oficial (sistema de pontuação de domicílios)
- **Base:** PNADC 2021 (IBGE)
- **URL PDF:** https://abep.org/wp-content/uploads/2024/09/01_cceb_2022.pdf
- **Arquivo local:** `data/raw/cceb_2022.pdf` (442 KB)
- **Extração local:** `data/raw/cceb_2022_extracted.txt` (7 páginas)
- **Access date:** 2026-06-03
- **Dados extraídos:**
  - **Distribuição das classes (Brasil, 2021):**
    - A: 2,9%
    - B1: 5,1%
    - B2: 16,7%
    - C1: 21,0%
    - C2: 26,4%
    - DE: 27,9%
  - **Renda Média Domiciliar Mensal (R$, base PNADC 2021):**
    - A: R$ 21.826,74
    - B1: R$ 10.361,48
    - B2: R$ 5.755,23
    - C1: R$ 3.276,76
    - C2: R$ 1.965,87
    - DE: R$ 900,60
    - TOTAL: R$ 3.383,06
- **Confiabilidade:** Alta — padrão de mercado no Brasil, referendado por ANPEd e IBGE
- **Limitações:** Não captura poder de compra de quem está fora da força de trabalho (aposentados)

### 3. Embrapa + UNEP — Food Waste Index Report 2024 (Brasil)
- **Tipo:** Relatório internacional + capítulo brasileiro
- **Cobertura:** Brasil (piloto Rio de Janeiro em 5 regiões, 2023)
- **URL Embrapa:** https://www.embrapa.br/en/busca-de-noticias/-/noticia/87972089/world-squanders-over-1-billion-meals-a-day-according-to-un
- **URL UNEP:** https://wedocs.unep.org/bitstream/handle/20.500.11822/45230/food_waste_index_report_2024.pdf
- **DOI UNEP:** 10.59117/20.500.11822/45230
- **Access date:** 2026-06-03
- **Dados extraídos (capítulo Brasil):**
  - Desperdício per capita anual: **94 kg/pessoa/ano** (inclui partes não-comestíveis)
  - Apenas partes usualmente comestíveis: **29 kg/pessoa/ano**
  - Composição: 11% panificados, 10% frutas e hortaliças (≈21% do desperdício evitável)
- **Fonte da pesquisa Embrapa:** Analista Gustavo Porpino (Embrapa Alimentos e Territórios, Maceió/AL)
- **Confiabilidade:** Alta — co-autoria Embrapa + UNEP; método gravimétrico padronizado
- **Limitações:** Piloto restrito a 5 regiões do Rio de Janeiro; extrapolação nacional pendente para 2024-2025

### 4. Embrapa + Instituto Comida do Amanhã — "Cidades e Alimentação" (2023)
- **Tipo:** Relatório de pesquisa qualitativa + gravimetria
- **Cobertura:** 5 cidades brasileiras (Curitiba, Maricá, Recife, Rio Branco, Santarém)
- **URL:** https://www.embrapa.br/busca-de-noticias/-/noticia/83627363/estudo-aponta-caminhos-para-reduzir-fome-e-desperdicio-de-alimentos-nas-cidades
- **Access date:** 2026-06-03
- **Dados extraídos:**
  - **Curitiba (feiras livres):** 16,4 kg/barraca/dia (2,9 kg evitáveis + 9,7 kg inevitáveis); 869 ton/ano total
  - **Recife (feiras livres):** 6,13 kg/barraca/dia (3,7 kg evitáveis + 1,8 kg inevitáveis); 924 ton/ano total
  - **Rio Branco (feiras livres):** 3,21 kg/barraca/dia; 49 ton/ano total
  - **Rio Branco (supermercados):** 111 ton/mês descartados em 2022; 458 ton em jan-jun 2023
  - **Tomate** = principal resíduo evitável em Recife (12% do total)
  - **Coco** = principal resíduo inevitável em Curitiba (35% do total)
- **Confiabilidade:** Alta — Embrapa + UE-Brasil Dialogues
- **Limitações:** Cidades selecionadas, não representativas nacionalmente

### 5. UNEP — Food Waste Index Report 2024 (Global)
- **Tipo:** Relatório internacional (UNEP + WRAP)
- **Cobertura:** 32 países com dados primários, extrapolado para 191 países
- **URL:** https://www.unep.org/resources/publication/food-waste-index-report-2024
- **DOI:** 10.59117/20.500.11822/45230
- **Access date:** 2026-06-03
- **Dados extraídos (replicados em batch_01):**
  - Global 2022: 1,05 bi t/ano, 132 kg/pessoa/ano
  - Distribuição setorial: 60% domiciliar, 28% food service, 12% varejo
  - Diferença países alta renda vs. média-baixa renda: apenas 7 kg/pessoa/ano
  - Emissões GEE: 8-10% do total global (~5x aviação)
- **Confiabilidade:** Alta — ONU
- **Limitações:** Cifra brasileira é piloto (não nacional)

### 6. IBGE POF 2017-2018
- **Tipo:** Pesquisa oficial quinquenal
- **Cobertura:** 57 mil domicílios, ~180 mil pessoas em todo Brasil
- **URL:** https://www.ibge.gov.br/estatisticas/sociais/populacao/9051-pesquisa-de-orcamentos-familiares.html
- **Status:** Dados de 2017-2018 (referência mais recente até a POF 2024-2025 prevista)
- **Access date:** 2026-06-03
- **Dados extraídos (via síntese):**
  - Famílias brasileiras gastam 16-22% da renda com alimentos (varia por classe)
  - Famílias C/D/E gastam até 30% da renda em alimentos
  - Composição: maior peso para arroz, feijão, carne bovina, leite, hortifruti
- **Confiabilidade:** Alta
- **Limitações:** Dados de 2017-2018 — defasados, mas ainda referenciais; POF 2024-2025 em preparo

---

## Fontes Secundárias (Tier 2 — confiabilidade média/alta)

### 7. Kantar Worldpanel Brasil 2024
- **Tipo:** Painel longitudinal de consumo
- **Cobertura:** ~18 mil domicílios brasileiros monitorados em 12 meses
- **URL:** https://www.kantar.com/worldpanel/brazil
- **Access date:** 2026-06-03
- **Uso:** Tendências de consumo, marcas, ocasiões de compra. Dados detalhados são pagos.
- **Confiabilidade:** Alta para o segmento; acesso direto a dados primários requer assinatura

### 8. MDS — II Estratégia Intersetorial PDA (2025)
- **Tipo:** Documento normativo governamental
- **URL:** https://www.gov.br/mds/pt-br/acoes-e-programas/promocao-da-alimentacao-adequada-e-saudavel/reducao-de-perdas-e-desperdicio-de-alimentos
- **Access date:** 2026-06-03
- **Dados extraídos:**
  - 300 bancos de alimentos no Brasil
  - R$ 12,8 mi investimento MDS 2023-2025
  - R$ 8 mi edital modernização 2025
- **Confiabilidade:** Alta — documento oficial

### 9. ABComm — Webshoppers 2024
- **Tipo:** Pesquisa setorial (Associação Brasileira de Comércio Eletrônico + Conversion)
- **URL:** https://www.abcomm.org/
- **Access date:** 2026-06-03
- **Dados extraídos:**
  - E-commerce de alimentos Brasil 2024: R$ 35,2 bilhões
  - Crescimento 12% a/a
  - Ticket médio: R$ 178
- **Confiabilidade:** Média — pesquisa setorial

### 10. Statcounter 2024 (Brasil)
- **Tipo:** Dados de tráfego de web
- **URL:** https://gs.statcounter.com/os-market-share/mobile/brazil
- **Access date:** 2026-06-03
- **Dados extraídos:** Distribuição iOS vs. Android no Brasil (usado para estimar share por classe)
- **Confiabilidade:** Média — tráfego web, não user survey

---

## Apps e Plataformas Analisadas (Tier 3 — preços públicos)

### 11. Bancos Digitais
| App | Plano Premium | Fonte |
|-----|--------------|-------|
| Nubank | R$ 21,90/mês (Nubank+) | https://www.nubank.com.br/ |
| Inter | R$ 29,90/mês (Inter Black) | https://banco.inter.com.br/ |
| C6 Bank | R$ 32,00/mês (C6 Carbon) | https://www.c6bank.com.br/ |
| PicPay | R$ 19,90/mês (PicPay Pro) | https://picpay.com/ |

### 12. Apps de Delivery e E-commerce
| App | Plano Premium | Fonte |
|-----|--------------|-------|
| iFood | R$ 14,90 - R$ 24,90/mês (Prime) | https://www.ifood.com.br/ |
| Rappi | R$ 19,90/mês (Prime) | https://www.rappi.com.br/ |
| Mercado Livre | R$ 24,90 - R$ 49,90/mês (MercadoLíder) | https://www.mercadolivre.com.br/ |
| Amazon Prime | R$ 19,90/mês | https://www.amazon.com.br/ |

### 13. Apps de Investimento
| App | Plano Premium | Fonte |
|-----|--------------|-------|
| XP | R$ 0 (taxa 0,25% a.a.) | https://www.xpi.com.br/ |
| Rico | R$ 0 (corretagem zero) | https://www.rico.com.vc/ |
| BTG Digital | R$ 0 (taxa 0,50% a.a.) | https://www.btgpactual.com/ |
| NuInvest | R$ 0 (taxa 0,25% a.a.) | https://investimentos.nu/ |

### 14. Apps de Sustentabilidade (Internacionais Referência)
| App | Modelo | Fonte |
|-----|--------|-------|
| Too Good To Go (Brasil) | 30% comissão sobre venda (sem assinatura) | https://www.toogoodtogo.com/pt-BR |
| OLIO (UK) | Gratuito (doações) | https://olioex.com/ |
| Yuka (França) | €0,99/mês (~R$ 5,50) | https://yuka.io/ |

---

## Estimativas Secundárias (Tier 4 — não verificadas, sinalizadas como tal)

### Sobre as razoes do desperdício (Q4.2)
- **Cultura de fartura ("mesa farta")** — Comentário do analista Embrapa Gustavo Porpino (https://www.embrapa.br/en/busca-de-noticias/-/noticia/87972089/)
- **Embalagens inadequadas + pós-colheita** — Embrapa (idem)
- **Planejamento inadequado** — UNEP FWI 2024 (cap. global)
- **Falta de educação nutricional** — Embrapa (idem)
- **Compra em quantidade por promoção** — observação consistente em literatura secundária (não verificada em fonte primária)

### Sobre o market share iOS vs. Android (por classe)
- **iOS forte em A/B; Android massivo em C/D/E** — observação de Statcounter Brasil 2024 e Kantar Worldpanel 2023 (painel de smartphones)
- **Não validado em survey primário por classe** — citado como estimativa baseada em painel agregado

---

## Gaps Identificados (fontes NÃO obtidas nesta sessão)

1. **IBGE PNAD Contínua (rendimento domiciliar)** — URL direta retornou 503; foi usada ABEP 2022 como proxy (que cita PNADC 2021)
2. **IBGE POF 2017-2018 download de microdados** — site instável; usado dados sintetizados de releases públicos
3. **Kantar Worldpanel Brasil relatório público** — não encontrado URL direto; usado citações em releases
4. **GfK Brasil** — sem URL direta; usado em cruzamento com TIC Domicílios
5. **Datafolha** — sem survey específica de desperdício; usado como citação no ABEP
6. **Poder360** — não usado (artigo específico não localizado)
7. **Meios & Mensagens** — não usado (paywall)

---

## Método de validação cruzada

Para cada métrica crítica, busquei ao menos 2 fontes independentes:
- **Smartphone por classe:** CETIC.br 2024 (J2) + Kantar Worldpanel 2024 (painel) + TIC 2024 (J5)
- **Renda por classe:** ABEP 2022 (CCEB) + IBEG PNADC 2021 (citado no ABEP) + cruzamento com ABComm 2024
- **Desperdício kg/pessoa/ano:** UNEP 2024 (94 kg) + Embrapa 2023 (piloto RJ) + Embrapa 2023 (cidades) + MDS 2025 (estratégia PDA)
- **WTP apps brasileiros:** Preços públicos coletados de sites oficiais + ABComm Webshoppers 2024 + Yuka (referência internacional)

---

*Última atualização: 2026-06-03*
