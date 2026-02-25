const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'stf');

const images = [
    { id: "01", url: "https://s3.telegra.ph/file/a8faacc47f15458ce3eeb.jpg" },
    { id: "02", url: "https://s3.telegra.ph/file/0cfa5c2c7b5a1b32d56a7.jpg" },
    { id: "03", url: "https://s3.telegra.ph/file/a3fa0b32e65c928220556.jpg" },
    { id: "04", url: "https://s3.telegra.ph/file/d2b0e6adbe6e033de14f5.jpg" },
    { id: "05", url: "https://s3.telegra.ph/file/bbccb6549a3bfaf968478.jpg" },
    { id: "06", url: "https://s3.telegra.ph/file/8bcf891cf1c1abeb92a23.jpg" },
    { id: "07", url: "https://s3.telegra.ph/file/0c8d57d54483a906231b4.jpg" },
    { id: "08", url: "https://s3.telegra.ph/file/a50dfcb7ea4c0be27e9f3.jpg" },
    { id: "09", url: "https://s3.telegra.ph/file/5a5fb12b591b94b0d00b9.jpg" },
    { id: "10", url: "https://s3.telegra.ph/file/c584ed4e1cffdb8afcba1.jpg" },
    { id: "11", url: "https://s3.telegra.ph/file/857e2c9f564dcfeab13ea.jpg" }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const options = {
            rejectUnauthorized: false,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            }
        };

        https.get(url, options, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
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
            await downloadImage(img.url, filepath);
            console.log(`Downloaded ${img.id}.jpg`);
        } catch (err) {
            console.error(`Error downloading ${img.id}:`, err.message);
        }
    }
})();
