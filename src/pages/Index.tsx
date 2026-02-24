import { useState } from "react";
import { lotteryGames } from "@/data/games";
import Header from "@/components/Header";
import BichoGame from "@/components/BichoGame";
import LotteryGame from "@/components/LotteryGame";
import EmailModal from "@/components/EmailModal";
import HowToPlayModal, { type GameRulesKey } from "@/components/HowToPlayModal";
import { HelpCircle, Facebook, Instagram, Twitter, Send, Mail } from "lucide-react";

import jogobichoImg from "@/assets/jogobicho.jpg";
import quinaImg from "@/assets/quina.jpg";
import megasenaImg from "@/assets/megasena.jpg";
import diadasorteImg from "@/assets/diadasorte.jpg";
import millionariaImg from "@/assets/millionaria.jpg";
import powerballImg from "@/assets/powerball.jpg";
import megamillionImg from "@/assets/megamillion.jpg";
import lottoamericaImg from "@/assets/lottoamerica.jpg";
import twoby2Img from "@/assets/2by2.jpg";

type ActiveGame = null | "bicho" | string;

const gameImages: Record<string, string> = {
  quina: quinaImg,
  "mega-sena": megasenaImg,
  "dia-de-sorte": diadasorteImg,
  "mais-milionaria": millionariaImg,
  powerball: powerballImg,
  "mega-millions": megamillionImg,
  "lotto-america": lottoamericaImg,
  "2by2": twoby2Img,
};

const Index = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState<string>("");
  const [dark, setDark] = useState(false);
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [howToPlay, setHowToPlay] = useState<GameRulesKey | null>(null);

  const toggleDark = () => {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      return !d;
    });
  };

  const handleEmailSubmit = (e: string, code: string) => {
    setEmail(e);
    setPromoCode(code);
  };

  const handleChangeEmail = () => { setEmail(null); setPromoCode(""); };
  const activeLottery = lotteryGames.find((g) => g.id === activeGame);

  return (
    <div className="min-h-screen bg-background transition-colors">
      <EmailModal open={!email} onSubmit={handleEmailSubmit} />
      <Header dark={dark} onToggleDark={toggleDark} email={email} onChangeEmail={handleChangeEmail} />

      <main className="container py-6 space-y-6 max-w-lg mx-auto">
        {activeGame === null && (
          <>
            {/* Jogo do Bicho - Single image button */}
            <section className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
                🎲 Jogo do Bicho
              </h3>
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => setActiveGame("bicho-grupo")}
                  className="rounded-xl overflow-hidden w-full max-w-xs transition-all shadow-md hover:scale-105 hover:shadow-lg"
                >
                  <img src={jogobichoImg} alt="Jogo do Bicho" className="w-full h-auto object-cover" />
                </button>
                <button
                  onClick={() => setHowToPlay("bicho")}
                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors"
                >
                  <HelpCircle className="h-3 w-3" /> Como Jogar
                </button>
              </div>
            </section>

            <div className="border-t border-border" />

            {/* Loterias Brasileiras */}
            <section className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
                🍀 Loterias Brasileiras
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {lotteryGames.filter((g) => g.region === "br").map((game) => (
                  <div key={game.id} className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => setActiveGame(game.id)}
                      className="rounded-xl overflow-hidden w-full bg-card border border-border transition-all shadow-md hover:scale-105 hover:shadow-lg p-2"
                    >
                      <img src={gameImages[game.id]} alt={game.name} className="w-full h-28 object-contain" />
                      <p className="text-xs text-muted-foreground mt-1">R${game.betAmount}</p>
                    </button>
                    <button
                      onClick={() => setHowToPlay(game.id as GameRulesKey)}
                      className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors mt-0.5"
                    >
                      <HelpCircle className="h-3 w-3" /> Como Jogar
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-border" />

            {/* Loterias Americanas */}
            <section className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
                🇺🇸 Loterias Americanas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {lotteryGames.filter((g) => g.region === "us").map((game) => (
                  <div key={game.id} className="flex flex-col items-center gap-1">
                    <button
                      onClick={() => setActiveGame(game.id)}
                      className="rounded-xl overflow-hidden w-full bg-card border border-border transition-all shadow-md hover:scale-105 hover:shadow-lg p-2"
                    >
                      <img src={gameImages[game.id]} alt={game.name} className="w-full h-28 object-contain" />
                      <p className="text-xs text-muted-foreground mt-1">R${game.betAmount}</p>
                    </button>
                    <button
                      onClick={() => setHowToPlay(game.id as GameRulesKey)}
                      className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors mt-0.5"
                    >
                      <HelpCircle className="h-3 w-3" /> Como Jogar
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeGame?.startsWith("bicho") && email && (
          <BichoGame
            email={email}
            onBack={() => setActiveGame(null)}
            initialCategory="grupo"
            promoCode={promoCode}
          />
        )}

        {activeLottery && email && (
          <LotteryGame
            game={activeLottery}
            image={gameImages[activeLottery.id]}
            email={email}
            onBack={() => setActiveGame(null)}
            promoCode={promoCode}
          />
        )}

        {email && (
          <>
            <p className="text-center text-xs text-muted-foreground">
              Apostando como: <span className="font-medium text-foreground">{email}</span>
              {promoCode && <span className="ml-1 text-gold font-bold">({promoCode})</span>}
            </p>
            <div className="flex items-center justify-center gap-4 py-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all hover:scale-110">
                <Send className="w-5 h-5" />
              </a>
              <a href="mailto:contato@bichocoin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </>
        )}

        {howToPlay && (
          <HowToPlayModal open={!!howToPlay} onClose={() => setHowToPlay(null)} gameKey={howToPlay} />
        )}
      </main>
    </div>
  );
};

export default Index;
