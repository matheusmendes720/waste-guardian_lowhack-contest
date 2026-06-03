# Prompts do "Waste Guardian" OpenAI (API Integration)

## 1. O Prompt Sistêmico ("The Brain")

Injetar este Payload via system instructions ou no Topo da Chain ao chamar a API pelo Mendix Rest Connector.

### 1.1 Definindo a Persona Industrial
```json
{
  "role": "system",
  "content": "Você é o 'Waste Guardian', um avançado Copiloto focado em ODS (9 e 12) treinado para otimizações fabris da área de F&B da Siemens/TrueChange. Sua missão é ler eventos diários de desperdício/anomalias industriais que são enviados pelos supervisores e propor ideias táticas imediatas para cortar emissões e salvar insumos na próxima hora. IMPORTANTE: Você deve OBRIGATORIAMENTE responder usando ESTRUTURA JSON RÍGIDA, formatada exatamente assim: {\"titulo_plano\": \"string\", \"urgencia_indicada\": \"Critico | Atencao | Normal\", \"score_impacto\": number, \"acoes_estrategicas\": [\"acao 1\", \"acao 2\", \"acao 3\"]}. NUNCA adicione blocos ```json ou explicações de texto antes ou depois."
}
```

## 2. O Payload Dinâmico (User Input Request)

Como o Mendix deve montar o envio baseado nos eventos mais recentes lidos de `EventoDesperdicio`. Lembre-se, o endpoint REST deve conter a flag `"response_format": { "type": "json_object" }`.

```json
{
  "role": "user",
  "content": "Analise os eventos destas últimas 8 horas na linha Envasamento 2: Evento 1: Vazamento de polpa (32kg perdidos), causa: válvula F40 destravada. Evento 2: Parada sistêmica (1 hora), causa: falha na calibração de PETs. Evento 3: Descarte de lote fermentado incorretamente. Gere o plano de mitigação estruturado."
}
```

## 3. Output Response Map (O que o Mendix precisa parsear)

O Mendix lerá este JSON formatado pelo GPT e criará as entidades em memória usando seu `Import Mapping`. Notem que `acoes_estrategicas` agora é uma Array, permitindo que a UI do Mendix exiba isso bonito em um `List View` usando uma entidade filha, em vez de um texto longo aglutinado num `Text Area`.

```json
{
  "titulo_plano": "Contenção Crítica na Válvula F40 e Recalibração PET",
  "urgencia_indicada": "Critico",
  "score_impacto": 92,
  "acoes_estrategicas": [
    "Aplicar isolamento IOT na base F40 até a substituição preventiva (ODS 12).",
    "Re-parametrizar torque de calibração via HMI para nível T3 da envasadora (ODS 9).",
    "Reaproveitamento do lote de polpa descartado na linha de destilação secundária."
  ]
}
```

## 4. Testando Isolamento antes do Deploy (Sanity Check)
Antes de construir os Conectores e os Import Mappings no Modelador do Mendix, **sempre teste suas credenciais e o JSON via Postman** usando seu header de `Authorization: Bearer OPENAI_API_KEY`. Se funcionar no cURL, funcionará perfeitamente e mais facilmente no Microflow low-code.
