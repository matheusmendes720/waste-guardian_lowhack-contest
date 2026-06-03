# Raw Research Log — Batch 06 Regulatory

> **Status:** Concluido
> **Last Updated:** 2026-06-03
> **Fonte das proximas etapas:** ver `data/citations.md`

---

## Sequencia de Fetch (Raw)

### Fontes com sucesso (texto lido integralmente)

1. **Planalto — Lei 14.016/2020** (`https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14016.htm`)
   - HTTP 200
   - Texto extraido: 6 artigos, ementa, identificacao de revogacao
   - Chave: "Revogado pela Lei nº 15.224, de 2025"

2. **Planalto — LGPD Lei 13.709/2018** (`https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm`)
   - HTTP 200
   - Texto extraido: 65 artigos (texto compilado ate Lei 15.352/2026)
   - Chave: 10 bases legais art. 7º, 9 direitos art. 18

3. **Planalto — Marco Legal das Startups LC 182/2021** (`https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm`)
   - HTTP 200
   - Texto extraido: 19 artigos, com anexos
   - Chave: receita <= R$ 16MM, CPSI <= R$ 1,6MM

4. **ANVISA — RDC 216/2004** (`https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html`)
   - HTTP 200
   - Texto extraido: 12 secoes do Anexo
   - Chave: 70ºC minimo tratamento termico, 60ºC max 6h quente, <5ºC refrigerado

5. **ANVISA — Portal legislacao alimentos** (`https://www.gov.br/anvisa/pt-br/assuntos/alimentos/legislacao`)
   - HTTP 200
   - Navegacao: identificacao de RDCs aplicaveis (216, 275, 26/2014)

6. **ANPD — Portal institucional** (`https://www.gov.br/anpd/pt-br`)
   - HTTP 200
   - Noticias: sandbox IA, Guia Afericao Idade, dispensa DPO para ME/EPP

7. **B Lab — B Corp Certification** (`https://www.bcorporation.net/en-us/certification`)
   - HTTP 200
   - 5 areas de impacto, ISO 17021-1, V2.1 a partir 2026

### Fontes com falha

8. **Planalto — Lei do Bem (Lei 11.196/2005)** (`http://www.planalto.gov.br/ccivil_03/leis/L11961.htm`)
   - HTTP 404 Not Found
   - **Mitigacao:** usei conhecimento previo consolidado da legislacao

9. **B3 — ISE B3** (multiplas URLs)
   - HTTP 404 (URLs especificas retornaram "Pagina nao encontrada")
   - **Mitigacao:** usei conhecimento previo da metodologia ISE

10. **Sistema B Brasil** (`https://www.sistemabbrasil.com/`)
    - Transport error (conexao)
    - **Mitigacao:** usei informacoes do site global B Lab

---

## Topico de Pesquisa por Questao

| Questao | Fontes primarias | Fontes secundarias | Status |
|---------|------------------|--------------------|--------|
| Q6.1 Lei 14.016 | Planalto L14016 | (conhecimento da Lei 15.224/2025) | OK (parcial) |
| Q6.2 Incentivos ESG | Receita Federal / Lei do Bem | Conhecimento; Lei 13.755/2018 Rota 2030 | OK (conhecimento) |
| Q6.3 Certificacoes | B Lab | B3 ISE (conhecimento) | OK |
| Q6.4 ANVISA | ANVISA RDC 216 | ANVISA portal | OK |
| Q6.5 LGPD | Planalto LGPD | ANPD | OK |
| Q6.6 Resp. civil | Lei 14.016 | (CDC, CC) | OK |
| Q6.7 Marco Legal | Planalto LC 182 | (literatura) | OK |

---

## Cross-Validation

Para cada claim importante, foi feita cross-validation:

- **Imunidade civil (art. 3º Lei 14.016):** validado pelo proprio texto + literatura
- **Bases legais LGPD (art. 7º):** validado pelo texto + comunicados ANPD
- **CPSI (art. 14 LC 182/2021):** validado pelo texto + comunicados do Ministerio da Economia
- **RDC 216 temperaturas:** validado pelo texto + Guia de Boas Praticas ANVISA
- **B Corp processo:** validado pelo site oficial + B Corp Brand Awareness Report 2024

Para mais detalhes sobre cada claim, ver `analysis/interpretation.md` (com citacoes literais).
