export interface LotteryGameConfig {
  id: string;
  name: string;
  emoji: string;
  color: string;
  prefix: string;
  betAmount: number;
  numbersToSelect: number;
  maxNumber: number;
  hasBonus?: boolean;
  bonusMax?: number;
  bonusLabel?: string;
  bonusCount?: number;
  bonusIsMonth?: boolean;
  region: "br" | "us";
}

export const lotteryGames: LotteryGameConfig[] = [
  {
    id: "quina",
    name: "Quina",
    emoji: "🍀",
    color: "bg-purple-600 hover:bg-purple-700 text-white",
    prefix: "Q",
    betAmount: 1,
    numbersToSelect: 5,
    maxNumber: 80,
    region: "br",
  },
  {
    id: "mega-sena",
    name: "Mega Sena",
    emoji: "🎯",
    color: "bg-green-700 hover:bg-green-800 text-white",
    prefix: "MS",
    betAmount: 2,
    numbersToSelect: 6,
    maxNumber: 60,
    region: "br",
  },
  {
    id: "dia-de-sorte",
    name: "Dia de Sorte",
    emoji: "☀️",
    color: "bg-amber-600 hover:bg-amber-700 text-white",
    prefix: "DS",
    betAmount: 3,
    numbersToSelect: 7,
    maxNumber: 31,
    hasBonus: true,
    bonusMax: 12,
    bonusLabel: "Mês da Sorte",
    bonusIsMonth: true,
    region: "br",
  },
  {
    id: "mais-milionaria",
    name: "+Milionária",
    emoji: "🍀💰",
    color: "bg-teal-700 hover:bg-teal-800 text-white",
    prefix: "+M",
    betAmount: 6,
    numbersToSelect: 6,
    maxNumber: 50,
    hasBonus: true,
    bonusMax: 6,
    bonusLabel: "Trevo da Sorte",
    bonusCount: 2,
    region: "br",
  },
  {
    id: "powerball",
    name: "Powerball",
    emoji: "⚡",
    color: "bg-red-600 hover:bg-red-700 text-white",
    prefix: "PB",
    betAmount: 5,
    numbersToSelect: 5,
    maxNumber: 69,
    hasBonus: true,
    bonusMax: 26,
    bonusLabel: "Powerball",
    region: "us",
  },
  {
    id: "mega-millions",
    name: "Mega Millions",
    emoji: "💰",
    color: "bg-blue-700 hover:bg-blue-800 text-white",
    prefix: "MM",
    betAmount: 10,
    numbersToSelect: 5,
    maxNumber: 70,
    hasBonus: true,
    bonusMax: 25,
    bonusLabel: "Mega Ball",
    region: "us",
  },
  {
    id: "lotto-america",
    name: "Lotto America",
    emoji: "⭐",
    color: "bg-blue-600 hover:bg-blue-700 text-white",
    prefix: "LA",
    betAmount: 2,
    numbersToSelect: 5,
    maxNumber: 52,
    hasBonus: true,
    bonusMax: 10,
    bonusLabel: "Star Ball",
    region: "us",
  },
  {
    id: "2by2",
    name: "2by2",
    emoji: "🔴⚪",
    color: "bg-red-700 hover:bg-red-800 text-white",
    prefix: "TT",
    betAmount: 1,
    numbersToSelect: 2,
    maxNumber: 26,
    hasBonus: true,
    bonusMax: 26,
    bonusLabel: "White Ball",
    bonusCount: 2,
    region: "us",
  },
];
