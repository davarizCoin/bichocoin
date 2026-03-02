import fs from 'fs';
import https from 'https';
import path from 'path';

const dir = 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/public/game-logos';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const games = [
    { id: "uk-lotto", domain: "national-lottery.co.uk", title: "UK Lotto" },
    { id: "superenalotto", domain: "superenalotto.it", title: "SuperEnalotto" },
    { id: "el-gordo", domain: "loteriasyapuestas.es", title: "El Gordo" },
    { id: "france-loto", domain: "fdj.fr", title: "Loto" },
    { id: "lotto-6aus49", domain: "lotto.de", title: "Lotto 6aus49" },
    { id: "oz-lotto", domain: "thelott.com", title: "Oz Lotto" },
    { id: "loto-7", domain: "takarakuji-official.jp", title: "Loto 7" },
    { id: "lotto-649", domain: "bclc.com", title: "Lotto 649" },
    { id: "sa-lotto", domain: "nationallottery.co.za", title: "SA Lotto" },
    { id: "melate", domain: "pronosticos.gob.mx", title: "Melate" },
    { id: "baloto", domain: "baloto.com", title: "Baloto" },
    { id: "quini-6", domain: "loteriasantafe.gov.ar", title: "Quini 6" },
    { id: "loto-chile", domain: "polla.cl", title: "Loto" },
    { id: "tinka", domain: "latinka.com.pe", title: "Tinka" },
    { id: "lotto-pl", domain: "lotto.pl", title: "Lotto" },
    { id: "uk-thunderball", domain: "national-lottery.co.uk", title: "Thunderball" },
    { id: "lotto-italy", domain: "lottomatica.it", title: "Lotto" },
    { id: "la-primitiva", domain: "loteriasyapuestas.es", title: "La Primitiva" },
    { id: "euromillions-fr", domain: "fdj.fr", title: "EuroMillions" },
    { id: "eurojackpot-de", domain: "lotto.de", title: "Eurojackpot" }
];

function fetchUrl(url, callback) {
    https.get(url, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            fetchUrl(res.headers.location, callback);
        } else {
            callback(res);
        }
    }).on('error', () => {
        callback({ statusCode: 500 });
    });
}

async function downloadLogo(game) {
    const url = `https://logo.clearbit.com/${game.domain}?size=128`;
    const filepath = path.join(dir, `${game.id}.png`);
    const fallbackPath = path.join(dir, `${game.id}.svg`);

    return new Promise((resolve) => {
        fetchUrl(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    console.log(`Success: ${game.id}`);
                    resolve(true);
                });
            } else {
                console.log(`Fallback for: ${game.id} (Status ${res.statusCode})`);
                const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#ff9800', '#ff5722', '#795548', '#607d8b'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                let initials = game.title.substring(0, 2).toUpperCase();
                if (game.title.includes(' ')) {
                    const parts = game.title.split(' ');
                    initials = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
                }
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
                    <rect width="128" height="128" fill="${color}" rx="24"/>
                    <text x="64" y="80" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="white" text-anchor="middle">${initials}</text>
                </svg>`;
                fs.writeFileSync(fallbackPath, svg);
                resolve(false);
            }
        });
    });
}

async function run() {
    for (const game of games) {
        await downloadLogo(game);
    }
    console.log("Done downloading logos!");
}

run();
