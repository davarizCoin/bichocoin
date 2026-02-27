import { useState, useEffect } from "react";
import { type LotteryGameConfig } from "@/data/games";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import QRCodeModal from "@/components/QRCodeModal";
import CountdownTimer, { gameSchedules, useBettingStatus } from "@/components/CountdownTimer";
import { LotteryLastResult, USLotteryLastResult, InternationalLotteryLastResult } from "@/components/LastResults";

const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const lotteryApiMap: Record<string, { apiId: "quina" | "megasena" | "diadesorte" | "maismilionaria"; showTrevos?: boolean; showMesSorte?: boolean }> = {
  "quina": { apiId: "quina" },
  "mega-sena": { apiId: "megasena" },
  "dia-de-sorte": { apiId: "diadesorte", showMesSorte: true },
  "mais-milionaria": { apiId: "maismilionaria", showTrevos: true },
};

const usLotteryApiMap: Record<string, { apiId: "powerball" | "mega-millions" | "lotto-america" | "2by2" }> = {
  "powerball": { apiId: "powerball" },
  "mega-millions": { apiId: "mega-millions" },
  "lotto-america": { apiId: "lotto-america" },
  "2by2": { apiId: "2by2" },
};

interface Props {
  game: LotteryGameConfig;
  email: string;
  onBack: () => void;
  promoCode?: string;
  image?: string;
}

const LotteryGame = ({ game, email, onBack, promoCode = "", image }: Props) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [bonus, setBonus] = useState<number | null>(null);
  const [bonusMulti, setBonusMulti] = useState<number[]>([]);
  const [showQR, setShowQR] = useState(false);
  const schedule = gameSchedules[game.id];
  const { bettingOpen } = useBettingStatus(schedule || { drawDays: [], drawTimes: [{ hour: 0, minute: 0 }] });

  const bonusCount = game.bonusCount || 1;
  const useMultiBonus = bonusCount > 1;

  const toggleNumber = (n: number) => {
    if (!bettingOpen) return;
    setSelected((prev) =>
      prev.includes(n)
        ? prev.filter((x) => x !== n)
        : prev.length < game.numbersToSelect
          ? [...prev, n]
          : prev
    );
  };

  const toggleBonusMulti = (n: number) => {
    setBonusMulti((prev) =>
      prev.includes(n)
        ? prev.filter((x) => x !== n)
        : prev.length < bonusCount
          ? [...prev, n]
          : prev
    );
  };

  const isBonusReady = !game.hasBonus || (useMultiBonus ? bonusMulti.length === bonusCount : bonus !== null);
  const isReady = selected.length === game.numbersToSelect && isBonusReady;

  useEffect(() => {
    if (isReady && !showQR && bettingOpen) {
      setShowQR(true);
    }
  }, [isReady]);

  // Build memo: numbers WITHOUT separators for lottery games (requirement #7)
  const buildMemo = () => {
    const nums = [...selected].sort((a, b) => a - b).map(n => n.toString().padStart(2, "0")).join("");
    let core: string;
    if (useMultiBonus) {
      const bonusPart = bonusMulti.length > 0 ? `T${[...bonusMulti].sort((a, b) => a - b).map(n => n.toString().padStart(2, "0")).join("")}` : "";
      core = `${game.prefix}${nums}${bonusPart}${email}`;
    } else {
      const bonusPart = bonus ? `E${bonus.toString().padStart(2, "0")}` : "";
      core = `${game.prefix}${nums}${bonusPart}${email}`;
    }
    return promoCode ? `${promoCode}${core}` : core;
  };

  const handleClose = () => {
    setShowQR(false);
    setSelected([]);
    setBonus(null);
    setBonusMulti([]);
  };

  const numbers = Array.from({ length: game.maxNumber }, (_, i) => i + 1);
  const bonusNumbers = game.bonusMax
    ? Array.from({ length: game.bonusMax }, (_, i) => i + 1)
    : [];

  const apiInfo = lotteryApiMap[game.id];
  const usApiInfo = usLotteryApiMap[game.id];

  return (
    <div className="relative -mt-6 mb-6">
      <Button variant="ghost" size="sm" onClick={onBack} className="absolute top-0 left-0 text-muted-foreground z-10 -ml-2">
        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
      </Button>

      <div className="text-center w-full relative">
        {image ? (
          <img key={`main-img-${game.id}`} src={image} alt={game.name} className="h-40 w-full max-w-[85%] mx-auto object-contain mb-2" />
        ) : game.region !== 'br' && game.region !== 'us' ? (
          <img key={`fallback-img-${game.id}`} src={`/game-logos/${game.id}.svg`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} alt={game.name} className="h-28 w-28 mx-auto object-contain mb-2 drop-shadow-md rounded-2xl" />
        ) : (
          <span className="text-7xl inline-block mb-2">{game.emoji}</span>
        )}
        <h2 className="text-xl font-display font-bold text-foreground mt-1">{game.name}</h2>
        <p className="text-xs text-muted-foreground pb-2">
          Escolha {game.numbersToSelect} números (1-{game.maxNumber})
        </p>
        <a
          href={game.resultUrl || `https://www.google.com/search?q=resultado+oficial+${game.name.replace(/\s+/g, '+')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline font-medium mb-4 bg-primary/10 px-3 py-1 rounded-full"
        >
          <ExternalLink className="h-3 w-3" /> Ver Números Sorteados
        </a>
      </div>

      {schedule && <CountdownTimer schedule={schedule} />}

      {apiInfo && (
        <LotteryLastResult
          apiId={apiInfo.apiId}
          title={game.name}
          emoji={game.emoji}
          showTrevos={apiInfo.showTrevos}
          showMesSorte={apiInfo.showMesSorte}
        />
      )}

      {usApiInfo && (
        <USLotteryLastResult
          apiId={usApiInfo.apiId}
          title={game.name}
          emoji={game.emoji}
        />
      )}

      {!apiInfo && !usApiInfo && <InternationalLotteryLastResult game={game} />}

      <div className="grid grid-cols-10 gap-1.5">
        {numbers.map((n) => (
          <button
            key={n}
            onClick={() => toggleNumber(n)}
            disabled={!bettingOpen}
            className={`aspect-square rounded-md text-sm font-bold transition-all ${selected.includes(n)
              ? "bg-primary text-primary-foreground scale-110 shadow-sm"
              : "bg-card border border-border text-foreground hover:border-gold"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {n.toString().padStart(2, "0")}
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {selected.length}/{game.numbersToSelect} selecionados
      </p>

      {/* Single bonus */}
      {game.hasBonus && !useMultiBonus && selected.length === game.numbersToSelect && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium text-center">
            Escolha o {game.bonusLabel} (1-{game.bonusMax}):
          </p>
          {game.bonusIsMonth ? (
            <div className="grid grid-cols-3 gap-2">
              {bonusNumbers.map((n) => (
                <button
                  key={n}
                  onClick={() => setBonus(n)}
                  className={`py-3 rounded-lg text-sm font-bold transition-all ${bonus === n
                    ? "bg-gold text-gold-foreground scale-105 shadow-gold"
                    : "bg-card border border-border text-foreground hover:border-gold"
                    }`}
                >
                  {MONTH_NAMES[n - 1]}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-10 gap-1.5">
              {bonusNumbers.map((n) => (
                <button
                  key={n}
                  onClick={() => setBonus(n)}
                  className={`aspect-square rounded-md text-sm font-bold transition-all ${bonus === n
                    ? "bg-gold text-gold-foreground scale-110 shadow-gold"
                    : "bg-card border border-border text-foreground hover:border-gold"
                    }`}
                >
                  {n.toString().padStart(2, "0")}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Multi bonus */}
      {game.hasBonus && useMultiBonus && selected.length === game.numbersToSelect && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium text-center">
            Escolha {bonusCount} {game.bonusLabel}s (1-{game.bonusMax}):
          </p>
          <div className={`grid ${game.bonusMax <= 6 ? "grid-cols-6" : "grid-cols-10"} gap-2`}>
            {bonusNumbers.map((n) => (
              <button
                key={n}
                onClick={() => toggleBonusMulti(n)}
                className={`aspect-square rounded-lg text-sm font-bold transition-all ${bonusMulti.includes(n)
                  ? "bg-gold text-gold-foreground scale-110 shadow-gold"
                  : "bg-card border border-border text-foreground hover:border-gold"
                  }`}
              >
                {n.toString().padStart(2, "0")}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {bonusMulti.length}/{bonusCount} selecionados
          </p>
        </div>
      )}

      {showQR && (
        <QRCodeModal
          open={showQR}
          onClose={handleClose}
          memoText={buildMemo()}
          amount={game.betAmount}
          gameId={game.id}
        />
      )}
    </div>
  );
};

export default LotteryGame;
