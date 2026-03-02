import { useState } from "react";
import { type ChineseAnimal } from "@/data/chineseZodiac";
import CountdownTimer, { useBettingStatus } from "@/components/CountdownTimer";
import DragaoAnimalGrid from "@/components/DragaoAnimalGrid";
import { DragaoLastResult } from "@/components/LastResults";
import BetAmountSelector from "@/components/BetAmountSelector";
import QRCodeModal from "@/components/QRCodeModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export type DragaoCategoryType = "grupo" | "dezena";

interface Props {
    email: string;
    onBack: () => void;
    initialCategory?: DragaoCategoryType;
    promoCode?: string;
}

const dragaoCategories: { key: DragaoCategoryType; label: string; prefix: string }[] = [
    { key: "grupo", label: "Grupo", prefix: "DG" },
    { key: "dezena", label: "Dezena", prefix: "DD" },
];

const DragaoSorteGame = ({ email, onBack, initialCategory = "grupo", promoCode = "" }: Props) => {
    const [category, setCategory] = useState<DragaoCategoryType>(initialCategory);
    const [line] = useState<number>(1);
    const [selectedAnimal, setSelectedAnimal] = useState<ChineseAnimal | null>(null);
    const [selectedDezena, setSelectedDezena] = useState<string | null>(null);
    const [betAmount, setBetAmount] = useState<number | null>(null);
    const [showQR, setShowQR] = useState(false);

    const { bettingOpen } = useBettingStatus({
        drawDays: [0, 1, 2, 3, 4, 5, 6],
        drawTimes: [
            { hour: 13, minute: 50 },
            { hour: 19, minute: 50 }
        ]
    });

    const categoryPrefix = dragaoCategories.find((c) => c.key === category)!.prefix;

    const buildMemo = () => {
        let core = "";
        if (category === "grupo") {
            if (!selectedAnimal || !line) return "";
            const animalNum = selectedAnimal.group.toString().padStart(2, "0");
            core = `${categoryPrefix}-${animalNum}-${email}`;
        } else if (category === "dezena") {
            if (!selectedDezena || !line) return "";
            core = `${categoryPrefix}-${selectedDezena}-${email}`;
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
    };

    const isDezenaSelected = category === "dezena" && selectedDezena !== null;

    const reset = () => {
        setSelectedAnimal(null);
        setSelectedDezena(null);
    };

    const handleSelectDezena = (animal: ChineseAnimal, dezena: string) => {
        setSelectedAnimal(animal);
        setSelectedDezena(dezena);
    };

    const showBetSelector =
        line &&
        ((category === "grupo" && selectedAnimal) ||
            (category === "dezena" && isDezenaSelected));

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-start">
                <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground -ml-2">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                </Button>
                <div className="text-center absolute left-1/2 -translate-x-1/2 -mt-1">
                    <span className="text-3xl">🐉</span>
                    <h2 className="text-xl font-display font-bold text-red-500 mt-1 mb-2">Dragão da Sorte</h2>
                </div>
            </div>
            <div className="pt-8 pb-2 flex justify-center">
                <DragaoLastResult />
            </div>
            <CountdownTimer
                schedule={{
                    drawDays: [0, 1, 2, 3, 4, 5, 6],
                    drawTimes: [
                        { hour: 13, minute: 50 },
                        { hour: 19, minute: 50 }
                    ]
                }}
            />

            <div className="grid grid-cols-2 gap-1 bg-muted rounded-lg p-1">
                {dragaoCategories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => { setCategory(cat.key); reset(); }}
                        className={`py-2 rounded-md text-sm font-display font-semibold tracking-wide transition-all ${category === cat.key
                            ? "bg-red-600 text-white shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                            } ${!bettingOpen ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!bettingOpen}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {category === "grupo" && !selectedAnimal && (
                <DragaoAnimalGrid line={line} onSelect={setSelectedAnimal} disabled={!bettingOpen} />
            )}

            {category === "dezena" && !isDezenaSelected && (
                <DragaoAnimalGrid line={line} onSelect={() => { }} showDezenas onSelectDezena={handleSelectDezena} disabled={!bettingOpen} />
            )}

            {showBetSelector && !showQR && (
                <div className="space-y-4">
                    <div className="bg-card border border-red-500/30 rounded-xl p-4 text-center space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">Sua aposta</p>
                        {selectedAnimal && <p className="text-3xl">{selectedAnimal.emoji}</p>}
                        <p className="font-display text-lg font-bold text-foreground">{buildMemo() || "..."}</p>
                        <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground text-xs mt-1 hover:text-red-400">
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
                    gameId="dragaodasorte"
                    bichoCategory={category}
                />
            )}
        </div>
    );
};

export default DragaoSorteGame;
