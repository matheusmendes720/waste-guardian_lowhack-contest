/**
 * WASTE GUARDIAN: Script Auxiliar de Teste Rigoroso do Prompt GenAI.
 * 
 * USO (Owner Tech/Data): 
 * 1. Rode `npm init -y` e `npm install node-fetch` (ou use node v18+ nativo)
 * 2. Configure sua chave (export OPENAI_API_KEY="sk-proj...")
 * 3. Rode `node 05-test-openai-script.js` para garantir o retorno do JSON perfeito
 * 
 * POR QUE ISSO EXISTE? 
 * Antes do 'Owner do Mendix' gastar 2 horas debulhando um Import Mapping JSON e
 * recebendo erro "Invalid JSON", testamos isoladamente a saída do modelo.
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'SUA_CHAVE_AQUI_PARA_TESTE';
const ENDPOINT = 'https://api.openai.com/v1/chat/completions';

// Simulação agressiva do que virá do Mendix Front-End:
const inputOperadorMendix = `
[TURNO DA NOITE / MÁQUINA CALDEIRA 04]
"A esteira parou porque começou a suar muito e cheirar a borracha queimada no rolo B. 
Tivemos que refugar 150 kg de queijo ralado pois caiu no chão contaminado. 
Motor parece estar vibrando fora de prumo."
`;

const systemPrompt = `Você é o 'Waste Guardian', motor lógico e inteligência operacional B2B para indústrias F&B (Siemens/Mendix). 
Você recebe relatos informais de operadores sobre falhas operacionais/desperdícios e deve devolver OBRIGATORIAMENTE um objeto JSON rigoroso.
O seu objetivo é reduzir perdas na produção e otimizar maquinário alinhado às ODS 9 e 12 da ONU.

Regras absolutas de resposta (Response Format):
- NUNCA retorne blocos de texto ou markdown (ex: \`\`\`json) fora das chaves do JSON.
- Retorne apenas o objeto puro válido.

Formato JSON exigido:
{
  "nivel_urgencia": "string (Critico ou Alerta)",
  "score_impacto": number (0-100 refletindo impacto $$ ou sustentável),
  "plano_imediato": "string (Contenção tática máxima de 2 parágrafos diretos à manutenção)",
  "plano_estrutural": "string (Ideia estratégica Mendix/Siemens de longo prazo para ODS 9/12)"
}`;

async function testarPrompt() {
  console.log("🏭 Iniciando Teste do Motor GenAI (Waste Guardian)...");
  console.log("-> Disparando payload contra a OpenAI...\n");

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Modelo recomendado vs Custo (Excelente RAG Textual)
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: inputOperadorMendix }
        ],
        response_format: { type: 'json_object' }, // GARANTIA DE JSON PURO PARA O MENDIX
        temperature: 0.2 // Cérebro Frio e Analítico. Sem alucinações criativas.
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ ERRO DA OPENAI:", data.error.message);
      return;
    }

    const jsonString = data.choices[0].message.content.trim();
    
    console.log("✅ RAW OUTPUT (Valide se não há lixo de markdown em volta):");
    console.log("-------------------------------------------------");
    console.log(jsonString);
    console.log("-------------------------------------------------\n");

    // Validação brutal se o JSON quebra o Import Mapping do Mendix
    try {
      const parsed = JSON.parse(jsonString);
      console.log("🚀 PARSE COM SUCESSO! O Mendix vai engolir isso perfeitamente.");
      console.table(parsed);
    } catch (e) {
      console.error("☠️ ERRO FATAL: A OpenAI quebrou o JSON. O Import Mapping do Mendix vai crashar.");
      console.error("Sintaxe inválida detectada no retorno do modelo.");
    }

  } catch (error) {
    console.error("Erro requisição:", error);
  }
}

testarPrompt();
