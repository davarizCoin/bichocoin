const fs = require('fs');
const file = 'D:/HD 360GB/Jogue no Bicho/Dragao da Sorte/src/components/CountdownTimer.tsx';
let content = fs.readFileSync(file, 'utf-8');

const newSchedules = `export const gameSchedules: Record<string, DrawSchedule> = {
  // --- Nacionais / USA ---
  quina: { drawDays: [1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-sena": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "dia-de-sorte": { drawDays: [2, 4, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mais-milionaria": { drawDays: [3, 6], drawTimes: [{ hour: 21, minute: 0 }] },
  "mega-millions": { drawDays: [2, 5], drawTimes: [{ hour: 0, minute: 0 }] }, // 23:00 EST
  powerball: { drawDays: [1, 3, 6], drawTimes: [{ hour: 0, minute: 59 }] },
  "lotto-america": { drawDays: [1, 3, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "2by2": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 0, minute: 0 }] },
  "bicho-dc4": { drawDays: [0, 1, 2, 3, 4, 5, 6], drawTimes: [{ hour: 13, minute: 50 }, { hour: 19, minute: 50 }, { hour: 23, minute: 30 }] },

  // --- Europa ---
  "uk-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 17, minute: 0 }] }, // UK
  "uk-thunderball": { drawDays: [2, 3, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] },
  "superenalotto": { drawDays: [2, 4, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // IT
  "lotto-italy": { drawDays: [2, 4, 5, 6], drawTimes: [{ hour: 16, minute: 0 }] },
  "el-gordo": { drawDays: [0], drawTimes: [{ hour: 17, minute: 30 }] }, // ES
  "la-primitiva": { drawDays: [1, 4, 6], drawTimes: [{ hour: 17, minute: 30 }] },
  "france-loto": { drawDays: [1, 3, 6], drawTimes: [{ hour: 16, minute: 30 }] }, // FR
  "euromillions-fr": { drawDays: [2, 5], drawTimes: [{ hour: 16, minute: 0 }] },
  "lotto-6aus49": { drawDays: [3, 6], drawTimes: [{ hour: 14, minute: 0 }] }, // DE
  "eurojackpot-de": { drawDays: [2, 5], drawTimes: [{ hour: 15, minute: 0 }] },
  "lotto-pl": { drawDays: [2, 4, 6], drawTimes: [{ hour: 17, minute: 40 }] }, // PL
  "totoloto-pt": { drawDays: [3, 6], drawTimes: [{ hour: 18, minute: 0 }] }, // PT
  "swiss-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 15, minute: 0 }] }, // CH
  "sweden-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 15, minute: 0 }] }, // SE
  "irish-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // IE

  // --- Américas ---
  "lotto-649": { drawDays: [3, 6], drawTimes: [{ hour: 23, minute: 30 }] }, // CA
  "melate": { drawDays: [0, 3, 5], drawTimes: [{ hour: 23, minute: 15 }] }, // MX
  "baloto": { drawDays: [3, 6], drawTimes: [{ hour: 1, minute: 0 }] }, // CO
  "quini-6": { drawDays: [0, 3], drawTimes: [{ hour: 21, minute: 15 }] }, // AR
  "loto-chile": { drawDays: [0, 2, 4], drawTimes: [{ hour: 21, minute: 0 }] }, // CL
  "tinka": { drawDays: [0, 3], drawTimes: [{ hour: 22, minute: 50 }] }, // PE

  // --- Oceania, Ásia e África ---
  "oz-lotto": { drawDays: [2], drawTimes: [{ hour: 8, minute: 30 }] }, // AU
  "nz-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 5, minute: 0 }] }, // NZ
  "loto-7": { drawDays: [1, 4], drawTimes: [{ hour: 6, minute: 45 }] }, // JP
  "sa-lotto": { drawDays: [3, 6], drawTimes: [{ hour: 16, minute: 0 }] }, // ZA
};`;

const regex = /export const gameSchedules: Record<string, DrawSchedule> = \{[\s\S]*?\};\n/;
content = content.replace(regex, newSchedules + "\n");

fs.writeFileSync(file, content);
console.log("Schedules updated successfully");
