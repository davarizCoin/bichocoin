import { chineseAnimals, type ChineseAnimal } from "@/data/chineseZodiac";

interface Props {
    line: number;
    onSelect: (animal: ChineseAnimal) => void;
    showDezenas?: boolean;
    onSelectDezena?: (animal: ChineseAnimal, dezena: string) => void;
    disabled?: boolean;
}

const DragaoAnimalGrid = ({ line, onSelect, showDezenas, onSelectDezena, disabled }: Props) => {
    if (showDezenas) {
        return (
            <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium text-center">
                    Escolha a dezena do Dragão da Sorte:
                </p>
                <div className="space-y-2">
                    {chineseAnimals.map((animal) => (
                        <div key={animal.group} className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-lg bg-card border border-border">
                            <div className="flex items-center gap-2 min-w-[100px] justify-center sm:justify-start">
                                <span className="text-2xl">{animal.emoji}</span>
                                <span className="text-sm font-display font-bold text-foreground">{animal.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 flex-1 justify-center sm:justify-end">
                                {animal.dezenas.map((dz) => (
                                    <button
                                        key={dz}
                                        onClick={() => onSelectDezena?.(animal, dz)}
                                        disabled={disabled}
                                        className={`px-3 py-2 rounded-md bg-muted text-foreground text-sm font-mono font-bold transition-all ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600 hover:text-white hover:scale-105"}`}
                                    >
                                        {dz}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <p className="text-sm text-foreground font-medium text-center">
                Escolha o signo:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {chineseAnimals.map((animal) => (
                    <button
                        key={animal.group}
                        onClick={() => onSelect(animal)}
                        disabled={disabled}
                        className={`flex flex-col items-center p-3 rounded-xl bg-card border border-border transition-all ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:scale-105"}`}
                    >
                        <span className="text-3xl">{animal.emoji}</span>
                        <span className="text-xs font-display font-bold text-foreground mt-2">{animal.name}</span>
                        <span className="text-[10px] text-muted-foreground">{animal.group.toString().padStart(2, "0")}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DragaoAnimalGrid;
