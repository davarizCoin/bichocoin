const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'stf');

const images = [
    { id: "01", name: "Luís Roberto Barroso" },
    { id: "02", name: "Edson Fachin" },
    { id: "03", name: "Gilmar Mendes" },
    { id: "04", name: "Cármen Lúcia" },
    { id: "05", name: "Dias Toffoli" },
    { id: "06", name: "Luiz Fux" },
    { id: "07", name: "Alexandre de Moraes" },
    { id: "08", name: "Nunes Marques" },
    { id: "09", name: "André Mendonça" },
    { id: "10", name: "Cristiano Zanin" },
    { id: "11", name: "Flávio Dino" }
];

const downloadImage = (name, filepath) => {
    return new Promise((resolve, reject) => {
        // Build an elegant avatar from ui-avatars that has 512px resolution and colored background
        const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=512&background=random&color=fff&bold=true`;
        const options = {
            rejectUnauthorized: false,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            }
        };

        https.get(url, options, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return https.get(response.headers.location, options, (res) => {
                    if (res.statusCode === 200) {
                        const stream = fs.createWriteStream(filepath);
                        res.pipe(stream);
                        stream.on('finish', () => resolve());
                        stream.on('error', reject);
                    }
                });
            }
            if (response.statusCode === 200) {
                const stream = fs.createWriteStream(filepath);
                response.pipe(stream);
                stream.on('finish', () => resolve());
                stream.on('error', reject);
            } else {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', reject);
    });
};

(async () => {
    for (const img of images) {
        try {
            const filepath = path.join(dir, `${img.id}.jpg`);
            await downloadImage(img.name, filepath);
            console.log(`Downloaded ${img.id}.jpg`);
        } catch (err) {
            console.error(`Error downloading ${img.id}:`, err.message);
        }
    }
})();
