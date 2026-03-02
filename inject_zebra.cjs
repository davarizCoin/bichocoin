const fs = require('fs');
const htmlPath = 'd:\\HD 360GB\\Jogue no Bicho\\Dragao da Sorte\\loteria-esportiva-proto.html';
const b64 = fs.readFileSync('C:\\Temp\\zebra_logo_b64.txt', 'ascii').trim();
const dataUri = 'data:image/png;base64,' + b64;

let html = fs.readFileSync(htmlPath, 'utf8');

// Remove textos do header e legenda, substitui pela imagem logo
const oldHeader = `  <!-- Header -->
  <header>
    <div class="logo-badge">
      <span>🦓</span>
      <span>Loteria Esportiva</span>
    </div>
    <h1>LOTERIA <span>ESPORTIVA</span></h1>
    <p class="subtitle">Acerte os 13 resultados e leve o prêmio!</p>
  </header>

  <!-- Legend -->
  <div class="legend" style="margin-bottom:16px;">
    <span><div class="dot dot-1"></div> 1 = Mandante ganha</span>
    <span><div class="dot dot-x"></div> X = Empate</span>
    <span><div class="dot dot-2"></div> 2 = Visitante ganha</span>
  </div>`;

const newHeader = `  <!-- Logo Zebrinha -->
  <div style="text-align:center; margin-bottom:20px;">
    <img src="${dataUri}" alt="Loteria Esportiva" style="max-width:220px; width:100%; height:auto; filter:drop-shadow(0 8px 24px rgba(0,0,0,.5)); border-radius:16px;" />
  </div>`;

if (!html.includes('<!-- Header -->')) {
    console.log('Header marker not found!');
    process.exit(1);
}

html = html.replace(oldHeader, newHeader);
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Done! HTML size:', Buffer.byteLength(html), 'bytes');
