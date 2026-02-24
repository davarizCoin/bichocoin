interface Props {
  onSelect: (amount: number) => void;
}

const amounts = [2, 5, 10, 20, 50];

const BetAmountSelector = ({ onSelect }: Props) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground font-medium text-center">
        Escolha o valor da aposta:
      </p>
      <div className="grid grid-cols-3 gap-2">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onSelect(amount)}
            className="py-3 rounded-lg bg-primary text-primary-foreground font-display text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-sm"
          >
            R${amount}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BetAmountSelector;
