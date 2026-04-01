const fs = require('fs');
const path = require('path');

const filesToAppend = [
  { path: '../note-index.md', title: '0. DASHBOARD DE CONTROLE (Timeline & Entregáveis)' },
  { path: 'Waste_Guardian_Master_Compendium.md', title: '1. O DOSSIÊ MESTRE (Single Source of Truth)' },
  { path: '01-playbook-tatica.md', title: '2. Playbook Tático e Governança' },
  { path: '02-cronograma-de-ataque.md', title: '3. Cronograma de Ataque (35 Horas)' },
  { path: 'business/01-business-model-canvas.md', title: '4. Business Model Canvas (B2B SaaS)' },
  { path: 'business/02-industrial-intelligence.md', title: '5. Inteligência Industrial (Setor F&B)' },
  { path: 'business/03-sponsor-econometrics.md', title: '6. Econometria B2B & O "True Sponsor Intent"' },
  { path: 'tech/00-mendix-bootcamp-fast-track.md', title: '7. Mendix Bootcamp Fast-Track (Hackathon Edition)' },
  { path: 'tech/01-mendix-domain-model.md', title: '8. Mendix - Domain Model e Entidades' },
  { path: 'tech/02-genai-prompts.md', title: '9. OpenAI - Prompts e Estrutura JSON' },
  { path: 'tech/03-mendix-ui-wireframes.md', title: '10. Mendix - Wireframes e UI (Atlas UI)' },
  { path: 'tech/04-rest-api-microflow-logic.md', title: '10. Mendix - Microflow e REST API' },
  { path: 'tech/05-test-openai-script.js', title: '11. Script Bônus: Testador Local de API (Node.js)' },
  { path: 'tech/mock-dataset-industria-alimentos.csv', title: '12. Dataset Simulado (Indústria de Alimentos)' },
  { path: 'pitch/roteiro-video-3min.md', title: '13. Roteiro do Pitch Comercial (3 Minutos)' },
  { path: 'pitch/02-qna-defense-playbook.md', title: '14. Playbook de Defesa (Q&A Jurados)' },
  { path: 'docs/README-final-submission.md', title: '15. README da Submissão Final (Corporate)' }
];

let finalOutput = '# Low Hack 2026 - Estratégia Completa V2 (Overdrive Edition)\n\n';
finalOutput += '> **Documento Gerado Automaticamente**: Compilação massiva de toda a engenharia, negócios, scripts executáveis e o Dossiê Estratégico revisado para a Siemens/Mendix 2026.\n\n';
finalOutput += '---\n\n';

for (const file of filesToAppend) {
  const fullPath = path.join(__dirname, file.path);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    finalOutput += `## ${file.title}\n\n`;
    finalOutput += `*Arquivo de origem: \`${file.path}\`*\n\n`;

    if (file.path.endsWith('.csv')) {
      finalOutput += '```csv\n' + content + '\n```\n\n';
    } else if (file.path.endsWith('.js')) {
      finalOutput += '```javascript\n' + content + '\n```\n\n';
    } else {
      finalOutput += content + '\n\n';
    }
    finalOutput += '\\pagebreak\n\n---\n\n';
  } else {
    console.warn(`Aviso: Arquivo não encontrado: ${file.path}`);
  }
}

const outputPath = path.join(__dirname, 'LowHack_2026_Full_Strategy.md');
fs.writeFileSync(outputPath, finalOutput, 'utf8');
console.log(`Mega Dossiê V2 gerado com sucesso em: ${outputPath}`);
