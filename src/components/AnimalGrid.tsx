import { animals, type Animal } from "@/data/animals";

interface Props {
  line: number;
  onSelect: (animal: Animal) => void;
  showDezenas?: boolean;
  onSelectDezena?: (animal: Animal, dezena: string) => void;
}

const AnimalGrid = ({ line, onSelect, showDezenas, onSelectDezena }: Props) => {
  if (showDezenas) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground font-medium text-center">
          Linha {line} — Escolha a dezena:
        </p>
        <div className="space-y-2">
          {animals.map((animal) => (
            <div key={animal.group} className="flex items-center gap-3 p-2 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 min-w-[100px]">
                <span className="text-xl">{animal.emoji}</span>
                <span className="text-xs font-display font-bold text-foreground">{animal.name}</span>
              </div>
              <div className="flex gap-1 flex-1 justify-end">
                {animal.dezenas.map((dz) => (
                  <button
                    key={dz}
                    onClick={() => onSelectDezena?.(animal, dz)}
                    className="px-3 py-2 rounded-md bg-muted text-foreground text-sm font-mono font-bold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
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
      <p className="text-sm text-muted-foreground font-medium text-center">
        Linha {line} — Escolha o bicho:
      </p>
      <div className="grid grid-cols-5 gap-2">
        {animals.map((animal) => (
          <button
            key={animal.group}
            onClick={() => onSelect(animal)}
            className="flex flex-col items-center p-2 rounded-xl bg-card border border-border hover:border-gold hover:shadow-gold transition-all hover:scale-105"
          >
            <span className="text-2xl">{animal.emoji}</span>
            <span className="text-[10px] font-display font-bold text-foreground mt-1">{animal.name}</span>
            <span className="text-[9px] text-muted-foreground">G{animal.group}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimalGrid;
