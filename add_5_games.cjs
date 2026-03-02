const fs = require('fs');

const file = 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/data/games.ts';
let content = fs.readFileSync(file, 'utf-8');

const newGames = `
  // --- NOVAS 5 LOTERIAS INTERNACIONAIS ---
  // 16. Portugal
  {
    id: "totoloto-pt",
    name: "Totoloto",
    emoji: "🇵🇹",
    color: "bg-red-700 hover:bg-red-800 text-white",
    prefix: "PT",
    betAmount: 1,
    currencySymbol: "€",
    numbersToSelect: 5,
    maxNumber: 49,
    hasBonus: true,
    bonusMax: 13,
    bonusLabel: "Número da Sorte",
    region: "pt",
    resultUrl: "https://jogossantacasa.pt/web/SCConsultarResultados/totoloto",
  },
  // 17. Suiça
  {
    id: "swiss-lotto",
    name: "Swiss Lotto",
    emoji: "🇨🇭",
    color: "bg-red-600 hover:bg-red-700 text-white",
    prefix: "SL",
    betAmount: 2.5,
    currencySymbol: "CHF",
    numbersToSelect: 6,
    maxNumber: 42,
    hasBonus: true,
    bonusMax: 6,
    bonusLabel: "Glückszahl",
    region: "ch",
    resultUrl: "https://www.swisslos.ch/en/swisslotto/information/winning-numbers/winning-numbers.html",
  },
  // 18. Suécia
  {
    id: "sweden-lotto",
    name: "Lotto",
    emoji: "🇸🇪",
    color: "bg-blue-600 hover:bg-blue-700 text-white",
    prefix: "SW",
    betAmount: 6,
    currencySymbol: "kr",
    numbersToSelect: 7,
    maxNumber: 35,
    region: "se",
    resultUrl: "https://www.svenskaspel.se/lotto/resultat",
  },
  // 19. Irlanda
  {
    id: "irish-lotto",
    name: "Irish Lotto",
    emoji: "🇮🇪",
    color: "bg-green-600 hover:bg-green-700 text-white",
    prefix: "IL",
    betAmount: 2,
    currencySymbol: "€",
    numbersToSelect: 6,
    maxNumber: 47,
    region: "ie",
    resultUrl: "https://www.lottery.ie/results/lotto",
  },
  // 20. Nova Zelândia
  {
    id: "nz-lotto",
    name: "Lotto NZ",
    emoji: "🇳🇿",
    color: "bg-gray-800 hover:bg-gray-900 text-white",
    prefix: "NZ",
    betAmount: 1.5,
    currencySymbol: "$",
    numbersToSelect: 6,
    maxNumber: 40,
    region: "nz",
    resultUrl: "https://mylotto.co.nz/results/lotto",
  }
`;

// Insert before the last bracket
content = content.replace(/(  \}\n)(\];\n)/, `$1,${newGames}$2`);

fs.writeFileSync(file, content);
console.log("Added 5 new games to games.ts");
