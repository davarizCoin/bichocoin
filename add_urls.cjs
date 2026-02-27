const fs = require('fs');

let content = fs.readFileSync('D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/data/games.ts', 'utf-8');

// 1. Add URL property to interface
content = content.replace('region: string;', 'region: string;\n  resultUrl?: string;');

// URLs to inject based on region
const urls = {
    "uk-lotto": 'https://www.national-lottery.co.uk/results/lotto/draw-history',
    "uk-thunderball": 'https://www.national-lottery.co.uk/results/thunderball/draw-history',
    "lotto-italy": 'https://www.lottomatica.it/lotterie/gioco-del-lotto/estrazioni',
    "la-primitiva": 'https://www.loteriasyapuestas.es/es/la-primitiva/resultados',
    "el-gordo": 'https://www.loteriasyapuestas.es/es/el-gordo-de-la-primitiva/resultados',
    "superenalotto": 'https://www.superenalotto.it/estrazioni',
    "tinka": 'https://latinka.pe/',
    "loto-chile": 'https://www.polla.cl/es/resultados/loto',
    "quini-6": 'https://www.loteriasantafe.gov.ar/index.php/resultados/quini-6',
    "baloto": 'https://baloto.com/resultados',
    "melate": 'https://www.pronosticos.gob.mx/Melate/Resultados',
    "france-loto": 'https://www.fdj.fr/jeux-de-tirage/loto/resultats',
    "euromillions-fr": 'https://www.fdj.fr/jeux-de-tirage/euromillions-my-million/resultats',
    "lotto-649": 'https://www.playnow.com/lottery/lotto-649-winning-numbers/',
    "sa-lotto": 'https://www.nationallottery.co.za/results/lotto',
    "loto-7": 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/loto7/index.html',
    "oz-lotto": 'https://www.thelott.com/oz-lotto/results',
    "lotto-6aus49": 'https://www.lotto.de/lotto-6aus49/lottozahlen',
    "eurojackpot-de": 'https://www.lotto.de/eurojackpot/eurojackpot-zahlen',
    "lotto-pl": 'https://www.lotto.pl/lotto/wyniki-i-wygrane'
};

for (const [id, url] of Object.entries(urls)) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?region:\\s*"[^"]*",\\n)(\\s*})`, 'g');
    content = content.replace(regex, `$1    resultUrl: "${url}",\n$2`);
}

fs.writeFileSync('D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/data/games.ts', content);
console.log("Updated games.ts with result URLs");
