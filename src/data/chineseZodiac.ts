export interface ChineseAnimal {
    group: number;
    name: string;
    emoji: string;
    dezenas: string[];
}

export const chineseAnimals: ChineseAnimal[] = [
    {
        group: 1,
        name: "Rato",
        emoji: "🐭",
        dezenas: ["08", "20", "32", "44", "56", "68", "80", "92"],
    },
    {
        group: 2,
        name: "Boi",
        emoji: "🐂",
        dezenas: ["09", "21", "33", "45", "57", "69", "81", "93"],
    },
    {
        group: 3,
        name: "Tigre",
        emoji: "🐅",
        dezenas: ["10", "22", "34", "46", "58", "70", "82", "94"],
    },
    {
        group: 4,
        name: "Coelho",
        emoji: "🐇",
        dezenas: ["11", "23", "35", "47", "59", "71", "83", "95"],
    },
    {
        group: 5,
        name: "Dragão",
        emoji: "🐉",
        dezenas: ["00", "12", "24", "36", "48", "60", "72", "84", "96"],
    },
    {
        group: 6,
        name: "Cobra",
        emoji: "🐍",
        dezenas: ["01", "13", "25", "37", "49", "61", "73", "85", "97"],
    },
    {
        group: 7,
        name: "Cavalo",
        emoji: "🐎",
        dezenas: ["02", "14", "26", "38", "50", "62", "74", "86", "98"],
    },
    {
        group: 8,
        name: "Carneiro",
        emoji: "🐏",
        dezenas: ["03", "15", "27", "39", "51", "63", "75", "87", "99"],
    },
    {
        group: 9,
        name: "Macaco",
        emoji: "🐒",
        dezenas: ["04", "16", "28", "40", "52", "64", "76", "88"],
    },
    {
        group: 10,
        name: "Galo",
        emoji: "🐓",
        dezenas: ["05", "17", "29", "41", "53", "65", "77", "89"],
    },
    {
        group: 11,
        name: "Cão",
        emoji: "🐕",
        dezenas: ["06", "18", "30", "42", "54", "66", "78", "90"],
    },
    {
        group: 12,
        name: "Porco",
        emoji: "🐖",
        dezenas: ["07", "19", "31", "43", "55", "67", "79", "91"],
    }
];
