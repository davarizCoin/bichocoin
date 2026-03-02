import { useState } from "react";
import { categories, type CategoryType, type Animal } from "@/data/animals";
import CountdownTimer, { useBettingStatus } from "@/components/CountdownTimer";
import AnimalGrid from "@/components/AnimalGrid";
import BetAmountSelector from "@/components/BetAmountSelector";
import QRCodeModal from "@/components/QRCodeModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { DC4LastResult } from "@/components/LastResults";
import jbImg from "@/assets/jb.png";

interface Props {
  email: string;
  onBack: () => void;
  initialCategory?: CategoryType;
  promoCode?: string;
}

const BichoGame = ({ email, onBack, initialCategory = "grupo", promoCode = "" }: Props) => {
  const [category, setCategory] = useState<CategoryType>(initialCategory);
  const [line, setLine] = useState<number>(1);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [selectedDezena, setSelectedDezena] = useState<string | null>(null);
  const [numberInput, setNumberInput] = useState("");
  const [betAmount, setBetAmount] = useState<number | null>(null);
  const [showQR, setShowQR] = useState(false);

  const { bettingOpen } = useBettingStatus({
    drawDays: [0, 1, 2, 3, 4, 5, 6],
    drawTimes: [
      { hour: 13, minute: 50 },
      { hour: 19, minute: 50 },
      { hour: 23, minute: 30 }
    ]
  });
  const categoryPrefix = categories.find((c) => c.key === category)!.prefix;

  const buildMemo = () => {
    let core = "";
    if (category === "grupo") {
      if (!selectedAnimal || !line) return "";
      const animalNum = selectedAnimal.group.toString().padStart(2, "0");
      core = `${categoryPrefix}-${animalNum}-${email}`;
    } else if (category === "dezena") {
      if (!selectedDezena || !line) return "";
      core = `${categoryPrefix}-${selectedDezena}-${email}`;
    } else {
      if (!numberInput || !line) return "";
      core = `${categoryPrefix}-${numberInput}-${email}`;
    }
    return promoCode ? `${promoCode}-${core}` : core;
  };

  const handleBetAmount = (amount: number) => {
    setBetAmount(amount);
    setShowQR(true);
  };

  const handleCloseQR = () => {
    setShowQR(false);
    setBetAmount(null);
    setSelectedAnimal(null);
    setSelectedDezena(null);
    setNumberInput("");
  };

  const isNumberValid =
    category === "centena" ? numberInput.length === 3 : numberInput.length === 4;
  const isDezenaSelected = category === "dezena" && selectedDezena !== null;

  const reset = () => {
    setSelectedAnimal(null);
    setSelectedDezena(null);
    setNumberInput("");
  };

  const handleSelectDezena = (animal: Animal, dezena: string) => {
    setSelectedAnimal(animal);
    setSelectedDezena(dezena);
  };

  const showBetSelector =
    line &&
    ((category === "grupo" && selectedAnimal) ||
      (category === "dezena" && isDezenaSelected) ||
      ((category === "centena" || category === "milhar") && isNumberValid));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground -ml-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
        </Button>
        <div className="absolute left-1/2 -translate-x-1/2 -mt-4">
          <img src={jbImg} alt="Jogo do Bicho" className="h-48 w-auto object-contain" />
        </div>
      </div>
      <div className="pt-36"> {/* Espaçamento reduzido em mais 1% */}
        <DC4LastResult />
      </div>
      <CountdownTimer
        schedule={{
          drawDays: [0, 1, 2, 3, 4, 5, 6],
          drawTimes: [
            { hour: 13, minute: 50 },
            { hour: 19, minute: 50 },
            { hour: 23, minute: 30 }
          ]
        }}
      />

      <div className="grid grid-cols-4 gap-1 bg-muted rounded-lg p-1">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => { setCategory(cat.key); reset(); }}
            className={`py-2 rounded-md text-sm font-display font-semibold tracking-wide transition-all ${category === cat.key
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
              } ${!bettingOpen ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!bettingOpen}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {line && category === "grupo" && !selectedAnimal && (
        <AnimalGrid line={line} onSelect={setSelectedAnimal} disabled={!bettingOpen} />
      )}

      {line && category === "dezena" && !isDezenaSelected && (
        <AnimalGrid line={line} onSelect={() => { }} showDezenas onSelectDezena={handleSelectDezena} disabled={!bettingOpen} />
      )}

      {line && (category === "centena" || category === "milhar") && !isNumberValid && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium text-center">
            Digite {category === "centena" ? "3" : "4"} números para apostar:
          </p>
          <div className="flex gap-2 max-w-xs mx-auto">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={category === "centena" ? 3 : 4}
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value.replace(/\D/g, ""))}
              placeholder={category === "centena" ? "000" : "0000"}
              disabled={!bettingOpen}
              className={`text-center text-2xl font-mono font-bold tracking-widest ${!bettingOpen ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </div>
        </div>
      )}

      {showBetSelector && !showQR && (
        <div className="space-y-4">
          <div className="bg-card border border-gold/30 rounded-xl p-4 text-center space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Sua aposta</p>
            {selectedAnimal && <p className="text-3xl">{selectedAnimal.emoji}</p>}
            <p className="font-display text-lg font-bold text-foreground">{buildMemo() || "..."}</p>
            <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground text-xs mt-1">
              <ArrowLeft className="mr-1 h-3 w-3" /> Alterar
            </Button>
          </div>
          <BetAmountSelector onSelect={handleBetAmount} />
        </div>
      )}

      {showQR && betAmount && (
        <QRCodeModal
          open={showQR}
          onClose={handleCloseQR}
          memoText={buildMemo()}
          amount={betAmount}
          gameId="bicho"
          bichoCategory={category}
        />
      )}
    </div>
  );
};

export default BichoGame;
