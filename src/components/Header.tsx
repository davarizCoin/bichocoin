import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageCode } from "@/locales/translations";

interface Props {
  dark: boolean;
  onToggleDark: () => void;
  email?: string | null;
  onChangeEmail?: () => void;
}

const Header = ({ dark, onToggleDark, email, onChangeEmail }: Props) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-lg mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-1">
          {email && onChangeEmail && (
            <Button variant="ghost" size="sm" onClick={onChangeEmail} className="text-xs text-muted-foreground">
              {t("user")}
            </Button>
          )}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-display font-bold tracking-wide text-foreground cursor-default select-none">
            <span className="text-base mr-0.5">🎲</span>
            BichoCoin<span className="text-[8px] align-top">.com</span>
          </h1>
          <p className="text-[15px] italic text-muted-foreground -mt-1">{t("slogan")}</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="relative group">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Globe className="h-5 w-5" />
            </Button>
            <div className="absolute top-full right-0 mt-1 w-36 bg-card border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              {(['pt', 'en', 'es', 'fr', 'ru', 'zh', 'ja', 'ar', 'hi'] as LanguageCode[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${language === lang ? 'font-bold text-primary bg-muted/50' : 'text-foreground'}`}
                >
                  {t(`lang_${lang}` as any)}
                </button>
              ))}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onToggleDark}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
