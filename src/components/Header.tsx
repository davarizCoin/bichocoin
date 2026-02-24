import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  dark: boolean;
  onToggleDark: () => void;
  email?: string | null;
  onChangeEmail?: () => void;
}

const Header = ({ dark, onToggleDark, email, onChangeEmail }: Props) => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-lg mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-1">
          {email && onChangeEmail && (
            <Button variant="ghost" size="sm" onClick={onChangeEmail} className="text-xs text-muted-foreground">
              Usuário
            </Button>
          )}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-display font-bold tracking-wide text-foreground cursor-default select-none">
            <span className="text-base mr-0.5">🎲</span>
            BichoCoin<span className="text-[8px] align-top">.com</span>
          </h1>
          <p className="text-[15px] italic text-muted-foreground -mt-1">O Bicho sempre paga!</p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onToggleDark}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
