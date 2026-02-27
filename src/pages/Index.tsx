import { useState } from "react";
import { lotteryGames } from "@/data/games";
import Header from "@/components/Header";
import BichoGame from "@/components/BichoGame";
import DragaoSorteGame from "@/components/DragaoSorteGame";
import LotteryGame from "@/components/LotteryGame";
import EmailModal from "@/components/EmailModal";
import HowToPlayModal, { type GameRulesKey } from "@/components/HowToPlayModal";
import InstallAppModal from "@/components/InstallAppModal";
import { HelpCircle, Facebook, Instagram, Twitter, Send, Mail, Youtube, Apple, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import jogobichoImg from "@/assets/jogobicho.jpg";
import quinaImg from "@/assets/quina.jpg";
import megasenaImg from "@/assets/megasena.jpg";
import diadasorteImg from "@/assets/diadasorte.jpg";
import millionariaImg from "@/assets/millionaria.jpg";
import powerballImg from "@/assets/powerball.jpg";
import megamillionImg from "@/assets/megamillion.jpg";
import lottoamericaImg from "@/assets/lottoamerica.jpg";
import twoby2Img from "@/assets/2by2.jpg";
import dragaoImg from "@/assets/Dragao_da_Sorte.jpg";
import lotteryInternationalImg from "@/assets/lottery-international.jpg";

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
  const [email, setEmail] = useState<string | null>(() => localStorage.getItem("userEmail"));
  const [promoCode, setPromoCode] = useState<string>(() => localStorage.getItem("promoCode") || "");
  const [dark, setDark] = useState(false);
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [howToPlay, setHowToPlay] = useState<GameRulesKey | null>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { t } = useLanguage();

  useState(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  });

  const handleAndroidInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      alert("App já instalado ou indisponível no seu navegador (tente pelo Chrome).");
    }
  };

  const toggleDark = () => {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      return !d;
    });
  };

  const handleEmailSubmit = (e: string, code: string) => {
    setEmail(e);
    setPromoCode(code);
    localStorage.setItem("userEmail", e);
    if (code) localStorage.setItem("promoCode", code);
  };

  const handleChangeEmail = () => {
    setEmail(null);
    setPromoCode("");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("promoCode");
  };
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
                {t("animal_game")}
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
                  <HelpCircle className="h-3 w-3" /> {t("how_to_play")}
                </button>
              </div>
            </section>

            <div className="border-t border-border" />

            {/* Dragão da Sorte */}
            <section className="space-y-3">
              <h3 className="text-xs text-red-500 uppercase tracking-widest text-center font-bold">
                {t("lucky_dragon")}
              </h3>
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => setActiveGame("dragao-sorte")}
                  className="rounded-xl overflow-hidden w-full max-w-xs transition-all shadow-md hover:scale-105 hover:shadow-lg border border-red-500/30"
                >
                  <img src={dragaoImg} alt="Dragão da Sorte" className="w-full h-auto object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-red-900', 'min-h-[120px]', 'flex', 'items-center', 'justify-center'); e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold">Imagem Pendente (Dragao_da_Sorte.jpg)</span>'; }} />
                </button>

                <button
                  onClick={() => setHowToPlay("dragao-sorte")}
                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-red-500 transition-colors mt-1"
                >
                  <HelpCircle className="h-3 w-3" /> {t("how_to_play")}
                </button>
              </div>
            </section>

            <div className="border-t border-border" />

            {/* LOTTERY INTERNATIONAL BANNER */}
            <section className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
                {t("select_country")}
              </h3>
              <div className="flex flex-col items-center gap-1 w-full relative">
                <button
                  onClick={() => window.location.href = "/loterias-internacionais"}
                  className="rounded-xl overflow-hidden w-full max-w-sm transition-all shadow-[0_10px_40px_-10px_rgba(255,215,0,0.5)] hover:scale-[1.03] hover:shadow-[0_10px_50px_-5px_rgba(255,215,0,0.7)] group relative border-2 border-[#FFD700]/50"
                  style={{ minHeight: '140px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={lotteryInternationalImg}
                    alt="Lottery International"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-3 z-20 flex flex-col items-center animate-pulse">
                    <span className="text-[10px] uppercase font-bold text-[#FFD700] tracking-[0.2em] drop-shadow-lg bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-[#FFD700]/30">
                      CLIQUE PARA JOGAR!
                    </span>
                  </div>
                </button>
              </div>
            </section>

            <div className="border-t border-border" />

            {/* Outras Categorias */}
            <section className="space-y-3">
              <h3 className="text-xs text-muted-foreground uppercase tracking-widest text-center font-medium">
                {t("others_title")}
              </h3>
              <div className="flex flex-col items-center gap-1 w-full">
                <button
                  onClick={() => window.location.href = "/categorias"}
                  className="w-full relative overflow-hidden rounded-xl h-16 shadow-md hover:scale-105 hover:shadow-lg transition-transform"
                  style={{
                    background: "linear-gradient(180deg, #FFCc00 0%, #FF8C00 100%)",
                    border: "2px solid #FFA500"
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-white/30 rounded-t-lg"></div>
                  <span className="relative z-10 text-white font-black text-xl italic tracking-wide uppercase drop-shadow-md">
                    {t("other_bets")}
                  </span>
                </button>
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

        {activeGame === "dragao-sorte" && email && (
          <DragaoSorteGame
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
              {t("playing_as")} <span className="font-medium text-foreground">{email}</span>
              {promoCode && <span className="ml-1 text-gold font-bold">({promoCode})</span>}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
              {/* Redes Sociais */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-red-600 hover:text-white transition-all hover:scale-110">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all hover:scale-110">
                  <Send className="w-4 h-4" />
                </a>
                <a href="mailto:contato@bichocoin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all hover:scale-110">
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Divisor Visual */}
              <div className="hidden md:block w-px h-8 bg-border"></div>
              <div className="block md:hidden w-16 h-px bg-border my-2"></div>

              {/* Apps Download */}
              <div className="flex items-center gap-3">
                <button onClick={handleAndroidInstall} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-green-600 hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-xs font-bold">{t("android_app")}</span>
                </button>
                <button onClick={() => setShowInstallModal(true)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-zinc-800 hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                  <Apple className="w-4 h-4" />
                  <span className="text-xs font-bold">{t("apple_app")}</span>
                </button>
              </div>
            </div>
          </>
        )}

        {howToPlay && (
          <HowToPlayModal open={!!howToPlay} onClose={() => setHowToPlay(null)} gameKey={howToPlay} />
        )}

        <InstallAppModal open={showInstallModal} onClose={() => setShowInstallModal(false)} />
      </main>
    </div>
  );
};

export default Index;
