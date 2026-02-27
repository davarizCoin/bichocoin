import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

export type GameRulesKey = "bicho" | "dragao-sorte" | "quina" | "mega-sena" | "dia-de-sorte" | "mais-milionaria" | "powerball" | "mega-millions" | "lotto-america" | "2by2" | "worldcup" | "internacional";

interface GameRules {
  title: string;
  emoji: string;
  rules: string[];
  resultUrl: string;
  resultLabel: string;
}

import tabelaDragao from "@/assets/tabela_dragao.jpg";

const gameRules: Record<GameRulesKey, GameRules & { image?: string }> = {
  "internacional": {
    title: "Loteria Internacional",
    emoji: "🌍",
    rules: [
      "Cada loteria internacional possui regras locais de aposta (quantidade de dezenas e limites).",
      "As apostas são convertidas considerando a sua moeda local do jogo e pagas via Lightning Network.",
      "Após o sorteio oficial do país correspondente, o resultado é validado.",
      "O pagamento do prêmio, em caso de acerto, ficará disponível para saque imediato via Invoice."
    ],
    resultUrl: "",
    resultLabel: ""
  },
  "worldcup": {
    title: "Copa do Mundo 2026",
    emoji: "🏆",
    rules: [
      "Bancas Independentes: Cada valor de aposta (Ex: R$10, R$50) cria um pote de prêmios totalmente separado. Seus ganhos são baseados apenas na banca que você escolheu.",
      "Rateio do Prêmio: O valor total arrecadado é dividido igualmente entre todos os apostadores da mesma banca que acertaram a Seleção Vencedora ou o Empate.",
      "Encerramento Seguro: As apostas são encerradas exatamente 1 hora antes do início oficial da partida.",
      "Pagamento Automático: O prêmio é enviado via Lightning Network diretamente utilizando o e-mail cadastrado na aposta."
    ],
    resultUrl: "",
    resultLabel: ""
  },
  "bicho": {
    title: "Jogo do Bicho",
    emoji: "🎲",
    rules: [
      "Escolha entre Grupo, Dezena, Centena ou Milhar.",
      "Selecione a linha (1ª a 5ª) do sorteio.",
      "Para Grupo: selecione um dos 25 grupos de animais. Multiplicador: 18x.",
      "Para Dezena: selecione uma dezena específica (00 a 99). Multiplicador: 60x.",
      "Para Centena: digite 3 números. Multiplicador: 600x.",
      "Para Milhar: digite 4 números. Multiplicador: 6000x.",
      "Ao efetuar o pagamento via Lightning Network, você receberá um e-mail de confirmação.",
      "Acertando, você receberá um invoice Lightning para sacar seu prêmio.",
    ],
    resultUrl: "https://www.jfrj.jus.br",
    resultLabel: "Consultar resultado",
  },
  "dragao-sorte": {
    title: "Dragão da Sorte",
    emoji: "🐉",
    rules: [
      "Uma categoria de jogo exclusivo criado por nós que trará grandes emoções!",
      "Você pode jogar no Grupo ou na Dezena.",
      "No Grupo, temos 12 bichos do Horóscopo Chinês e está pagando 8x.",
      "Na Dezena, você aposta em números específicos e está pagando 60x.",
      "O sorteio rola 3 vezes ao dia."
    ],
    resultUrl: tabelaDragao,
    resultLabel: "Abrir Tabela do Horóscopo Chinês (Maior)",
    image: tabelaDragao,
  },
  quina: {
    title: "Quina",
    emoji: "🍀",
    rules: [
      "Escolha 5 números de 1 a 80.",
      "Os sorteios ocorrem de segunda a sábado às 21h.",
      "Acerte de 2 a 5 números para ganhar prêmios.",
      "Valor da aposta: R$1",
    ],
    resultUrl: "https://loterias.caixa.gov.br/Paginas/Quina.aspx",
    resultLabel: "Resultado Oficial",
  },
  "mega-sena": {
    title: "Mega Sena",
    emoji: "🎯",
    rules: [
      "Escolha 6 números de 1 a 60.",
      "Sorteios às terças, quintas e sábados às 21h.",
      "Acerte de 4 a 6 números para ganhar.",
      "Valor da aposta: R$2",
    ],
    resultUrl: "https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx",
    resultLabel: "Resultado Oficial",
  },
  "dia-de-sorte": {
    title: "Dia de Sorte",
    emoji: "☀️",
    rules: [
      "Escolha 7 números de 1 a 31.",
      "Escolha também o Mês da Sorte.",
      "Sorteios às terças, quintas e sábados às 21h.",
      "Valor da aposta: R$3",
    ],
    resultUrl: "https://loterias.caixa.gov.br/Paginas/Dia-de-Sorte.aspx",
    resultLabel: "Resultado Oficial",
  },
  "mais-milionaria": {
    title: "+Milionária",
    emoji: "🍀💰",
    rules: [
      "Escolha 6 números de 1 a 50.",
      "Escolha 2 Trevos da Sorte de 1 a 6.",
      "Sorteios às quartas e sábados às 21h.",
      "Valor da aposta: R$6",
    ],
    resultUrl: "https://loterias.caixa.gov.br/Paginas/Mais-Milionaria.aspx",
    resultLabel: "Resultado Oficial",
  },
  powerball: {
    title: "Powerball",
    emoji: "⚡",
    rules: [
      "Escolha 5 números de 1 a 69.",
      "Escolha 1 Powerball de 1 a 26.",
      "Sorteios às segundas, quartas e sábados.",
      "Valor da aposta: R$5",
    ],
    resultUrl: "https://www.powerball.com/",
    resultLabel: "Resultado Oficial",
  },
  "mega-millions": {
    title: "Mega Millions",
    emoji: "💰",
    rules: [
      "Escolha 5 números de 1 a 70.",
      "Escolha 1 Mega Ball de 1 a 25.",
      "Sorteios às terças e sextas.",
      "Valor da aposta: R$10",
    ],
    resultUrl: "https://www.megamillions.com/",
    resultLabel: "Resultado Oficial",
  },
  "lotto-america": {
    title: "Lotto America",
    emoji: "⭐",
    rules: [
      "Escolha 5 números de 1 a 52.",
      "Escolha 1 Star Ball de 1 a 10.",
      "Sorteios às segundas, quartas e sábados.",
      "Valor da aposta: R$2",
    ],
    resultUrl: "https://www.lottoamerica.com/",
    resultLabel: "Resultado Oficial",
  },
  "2by2": {
    title: "2by2",
    emoji: "🔴⚪",
    rules: [
      "Escolha 2 números vermelhos de 1 a 26.",
      "Escolha 2 números brancos de 1 a 26.",
      "Sorteios diários.",
      "Valor da aposta: R$1",
    ],
    resultUrl: "https://www.powerball.com/2by2",
    resultLabel: "Resultado Oficial",
  },
};

import { type LotteryGameConfig } from "@/data/games";

interface Props {
  open: boolean;
  onClose: () => void;
  gameKey: GameRulesKey;
  gameConfig?: LotteryGameConfig;
}

const HowToPlayModal = ({ open, onClose, gameKey, gameConfig }: Props) => {
  const rules = gameConfig ? null : gameRules[gameKey];
  if (!rules && !gameConfig) return null;

  const title = gameConfig ? gameConfig.name : rules?.title;
  const isSvgLogo = gameConfig && gameConfig.region !== 'br' && gameConfig.region !== 'us';

  const defaultRules = gameConfig ? [
    `Escolha ${gameConfig.numbersToSelect} números de 1 a ${gameConfig.maxNumber}.`,
    gameConfig.hasBonus ? `Escolha ${gameConfig.bonusCount || 1} ${gameConfig.bonusLabel} de 1 a ${gameConfig.bonusMax}.` : `Sem números bônus adicionais necessários.`,
    `O valor da aposta fixa é de ${gameConfig.currencySymbol || ""}${gameConfig.betAmount}.`,
    "Certifique-se de que seu e-mail está correto, pois assim que fizer a aposta você receberá um e-mail de confirmação.",
    "Em caso de acerto, o prêmio será enviado para o endereço original de e-mail que consta na aposta."
  ] : rules?.rules || [];

  const resultUrl = gameConfig ? (gameConfig.resultUrl || `https://www.google.com/search?q=resultado+oficial+${gameConfig.name.replace(/\s+/g, '+')}`) : rules?.resultUrl;
  const resultLabel = gameConfig ? "Resultado Oficial" : rules?.resultLabel;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-lg flex items-center justify-center gap-2">
            {isSvgLogo ? (
              <img key={`modal-img-${gameConfig.id}`} src={`/game-logos/${gameConfig.id}.svg`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} alt={title} className="w-6 h-6 rounded-full object-contain" />
            ) : null}
            <span className={isSvgLogo ? "hidden" : ""}>{gameConfig ? gameConfig.emoji : rules?.emoji}</span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-2">
          {rules?.image && (
            <div className="flex justify-center mb-2">
              <img src={rules.image} alt={`Tabela ${rules.title}`} className="rounded-xl border border-border/50 max-h-48 w-auto object-contain shadow-sm" />
            </div>
          )}
          <ul className="space-y-2">
            {defaultRules.map((rule, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground">
                <span className="text-primary font-bold">{i + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          {resultUrl && resultLabel && (
            <a
              href={resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs text-primary hover:underline mt-4 bg-primary/10 py-2 rounded-lg"
            >
              <ExternalLink className="h-4 w-4" />
              {resultLabel}
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowToPlayModal;
