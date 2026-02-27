const fs = require('fs');
const https = require('https');

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }
        }, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        }).on('error', reject);
    });
};

// Found reliable high-res PNG logos that do not block bots heavily
const urls = [
    { url: 'https://upload.wikimedia.org/wikipedia/en/5/52/Thunderball_%28UK_National_Lottery%29_logo.svg', path: 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/public/game-logos/uk-thunderball.svg' },
    { url: 'https://upload.wikimedia.org/wikipedia/en/0/07/National_Lottery_%28United_Kingdom%29_logo.svg', path: 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/public/game-logos/uk-lotto.svg' }
];

async function run() {
    for (const item of urls) {
        try {
            console.log(`Downloading ${item.url}...`);
            await downloadImage(item.url, item.path);
            console.log(`Saved to ${item.path}`);
        } catch (e) {
            console.error(`Failed ${item.url}:`, e.message);
        }
    }
}

run();
