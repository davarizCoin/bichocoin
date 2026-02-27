const fs = require('fs');
const file = 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/locales/translations.ts';
let content = fs.readFileSync(file, 'utf8');

// A robust regex for capturing flags and standard emojis commonly used.
const emojiRegex = /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25B6}\u{23F8}-\u{23FA}]/gu;

// For translation strings specifically (only affecting country keys)
const countryKeys = [
    'country_br', 'country_us', 'gb', 'it', 'es_country', 'fr_country', 'de',
    'au', 'jp', 'ca', 'za', 'mx', 'co', 'ar_country', 'cl', 'pe', 'pl'
];

countryKeys.forEach(key => {
    // Regex to find: key: "Value 🇧🇷" or key: 'Value 🇧🇷'
    const keyRegex = new RegExp(`(${key}\\s*:\\s*["'])([^"']*)(["'])`, 'g');
    content = content.replace(keyRegex, (match, prefix, value, suffix) => {
        const stripped = value.replace(emojiRegex, '').trim();
        return `${prefix}${stripped}${suffix}`;
    });
});

fs.writeFileSync(file, content);
console.log("Stripped emojis successfully");
