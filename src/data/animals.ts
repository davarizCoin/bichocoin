export type CategoryType = "grupo" | "dezena" | "centena" | "milhar";

export interface Animal {
  group: number;
  name: string;
  emoji: string;
  dezenas: string[];
}

export interface Category {
  key: CategoryType;
  label: string;
  prefix: string;
}

// Prefixes: G=Grupo, D=Dezena, C=Centena, M=Milhar
export const categories: Category[] = [
  { key: "grupo", label: "Grupo", prefix: "G" },
  { key: "dezena", label: "Dezena", prefix: "D" },
  { key: "centena", label: "Centena", prefix: "C" },
  { key: "milhar", label: "Milhar", prefix: "M" },
];

export const animals: Animal[] = [
  { group: 1, name: "Avestruz", emoji: "🦩", dezenas: ["01", "02", "03", "04"] },
  { group: 2, name: "Águia", emoji: "🦅", dezenas: ["05", "06", "07", "08"] },
  { group: 3, name: "Burro", emoji: "🐎", dezenas: ["09", "10", "11", "12"] },
  { group: 4, name: "Borboleta", emoji: "🦋", dezenas: ["13", "14", "15", "16"] },
  { group: 5, name: "Cachorro", emoji: "🐕", dezenas: ["17", "18", "19", "20"] },
  { group: 6, name: "Cabra", emoji: "🐐", dezenas: ["21", "22", "23", "24"] },
  { group: 7, name: "Carneiro", emoji: "🐏", dezenas: ["25", "26", "27", "28"] },
  { group: 8, name: "Camelo", emoji: "🐪", dezenas: ["29", "30", "31", "32"] },
  { group: 9, name: "Cobra", emoji: "🐍", dezenas: ["33", "34", "35", "36"] },
  { group: 10, name: "Coelho", emoji: "🐇", dezenas: ["37", "38", "39", "40"] },
  { group: 11, name: "Cavalo", emoji: "🐴", dezenas: ["41", "42", "43", "44"] },
  { group: 12, name: "Elefante", emoji: "🐘", dezenas: ["45", "46", "47", "48"] },
  { group: 13, name: "Galo", emoji: "🐓", dezenas: ["49", "50", "51", "52"] },
  { group: 14, name: "Gato", emoji: "🐈", dezenas: ["53", "54", "55", "56"] },
  { group: 15, name: "Jacaré", emoji: "🐊", dezenas: ["57", "58", "59", "60"] },
  { group: 16, name: "Leão", emoji: "🦁", dezenas: ["61", "62", "63", "64"] },
  { group: 17, name: "Macaco", emoji: "🐒", dezenas: ["65", "66", "67", "68"] },
  { group: 18, name: "Porco", emoji: "🐷", dezenas: ["69", "70", "71", "72"] },
  { group: 19, name: "Pavão", emoji: "🦚", dezenas: ["73", "74", "75", "76"] },
  { group: 20, name: "Peru", emoji: "🦃", dezenas: ["77", "78", "79", "80"] },
  { group: 21, name: "Touro", emoji: "🐂", dezenas: ["81", "82", "83", "84"] },
  { group: 22, name: "Tigre", emoji: "🐅", dezenas: ["85", "86", "87", "88"] },
  { group: 23, name: "Urso", emoji: "🐻", dezenas: ["89", "90", "91", "92"] },
  { group: 24, name: "Veado", emoji: "🦌", dezenas: ["93", "94", "95", "96"] },
  { group: 25, name: "Vaca", emoji: "🐄", dezenas: ["97", "98", "99", "00"] },
];
