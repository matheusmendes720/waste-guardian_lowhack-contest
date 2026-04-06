const fs = require('fs');
const path = require('path');

/**
 * MEGA BUILDER V3 - GOLD STANDARD EDITION
 * Compiles the entire Low Hack 2026 Strategy into a single Master Compendium.
 */

const baseDir = path.join(__dirname, '../base');

const filesToAppend = [
  { path: 'note-index.md', title: '0. DASHBOARD DE CONTROLE (Timeline & Entregáveis)' },
  { path: '02_Estrategia_Vencedora/Waste_Guardian_Master_Compendium.md', title: '1. O DOSSIÊ MESTRE (Single Source of Truth)' },
  { path: '02_Estrategia_Vencedora/pitch/roteiro-video-3min.md', title: '2. Roteiro do Pitch Comercial (3 Minutos)' },
  { path: '02_Estrategia_Vencedora/pitch/02-qna-defense-playbook.md', title: '3. Playbook de Defesa (Q&A Jurados)' },
  { path: '04_BI_Ofensivo/LEAN_Canvas_Waste_Guardian.md', title: '4. Business & LEAN Canvas (Waste Guardian)' },
  { path: '04_BI_Ofensivo/Aggressive_Econometrics_Pipeline.md', title: '5. Econometria B2B & "True Sponsor Intent"' },
  { path: '03_Arquitetura_Projeto/tech/00-mendix-bootcamp-fast-track.md', title: '6. Mendix Bootcamp Fast-Track' },
  { path: '03_Arquitetura_Projeto/tech/01-mendix-domain-model.md', title: '7. Mendix - Domain Model e Entidades' },
  { path: '03_Arquitetura_Projeto/tech/02-genai-prompts.md', title: '8. OpenAI - Prompts e Estrutura JSON' },
  { path: '03_Arquitetura_Projeto/tech/03-mendix-ui-wireframes.md', title: '9. Mendix - Wireframes e UI (Atlas UI)' },
  { path: '03_Arquitetura_Projeto/tech/04-rest-api-microflow-logic.md', title: '10. Mendix - Microflow e REST API' },
  { path: '03_Arquitetura_Projeto/tech/05-test-openai-script.js', title: '11. Script: Testador Local de API (Node.js)' },
  { path: '03_Arquitetura_Projeto/tech/mock-dataset-industria-alimentos.csv', title: '12. Dataset Simulado (Setor F&B)' }
];

let finalOutput = '# Low Hack 2026 - Estratégia Completa V3 (Gold Standard)\n\n';
finalOutput += '> **Documento Gerado via scripts/mega_builder.js**: Compilação estratégica sincronizada com a arquitetura 00-06.\n\n';
finalOutput += '---\n\n';

for (const file of filesToAppend) {
  const fullPath = path.join(baseDir, file.path);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    finalOutput += `## ${file.title}\n\n`;
    finalOutput += `*Arquivo de origem: \`base/${file.path}\`*\n\n`;

    if (file.path.endsWith('.csv')) {
      finalOutput += '```csv\n' + content + '\n```\n\n';
    } else if (file.path.endsWith('.js')) {
      finalOutput += '```javascript\n' + content + '\n```\n\n';
    } else {
      finalOutput += content + '\n\n';
    }
    finalOutput += '\\pagebreak\n\n---\n\n';
  } else {
    console.warn(`Aviso: Arquivo não encontrado: base/${file.path}`);
  }
}

const outputPath = path.join(__dirname, '../LowHack_2026_Full_Strategy.md');
fs.writeFileSync(outputPath, finalOutput, 'utf8');
console.log(`Mega Dossiê V3 gerado com sucesso em: ${outputPath}`);
