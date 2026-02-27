const fs = require('fs');
const file = 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/locales/translations.ts';
let content = fs.readFileSync(file, 'utf-8');

const translations = {
    pt: { pt: "Portugal", ch: "Suíça", se: "Suécia", ie: "Irlanda", nz: "Nova Zelândia" },
    en: { pt: "Portugal", ch: "Switzerland", se: "Sweden", ie: "Ireland", nz: "New Zealand" },
    es: { pt: "Portugal", ch: "Suiza", se: "Suecia", ie: "Irlanda", nz: "Nueva Zelanda" },
    fr: { pt: "Portugal", ch: "Suisse", se: "Suède", ie: "Irlande", nz: "Nouvelle-Zélande" },
    ru: { pt: "Португалия", ch: "Швейцария", se: "Швеция", ie: "Ирландия", nz: "Новая Зеландия" },
    zh: { pt: "葡萄牙", ch: "瑞士", se: "瑞典", ie: "爱尔兰", nz: "新西兰" },
    ja: { pt: "ポルトガル", ch: "スイス", se: "スウェーデン", ie: "アイルランド", nz: "ニュージーランド" },
    ar: { pt: "البرتغال", ch: "سويسرا", se: "السويد", ie: "أيرلندا", nz: "نيوزيلندا" },
    hi: { pt: "पुर्तगाल", ch: "स्विट्जरलैंड", se: "स्वीडन", ie: "आयरलैंड", nz: "न्यूज़ीलैंड" }
};

for (const lang of Object.keys(translations)) {
    const trans = translations[lang];
    const stringToAdd = `\n        pt: "${trans.pt}",\n        ch: "${trans.ch}",\n        se: "${trans.se}",\n        ie: "${trans.ie}",\n        nz: "${trans.nz}",`;

    // Find the exact line for "pl: <polish_trans>" for this language block
    const blockRegex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?pl:\\s*"[^"]*")`, 'g');
    content = content.replace(blockRegex, `$1,${stringToAdd}`);
}

fs.writeFileSync(file, content);
console.log("Translations added successfully");
