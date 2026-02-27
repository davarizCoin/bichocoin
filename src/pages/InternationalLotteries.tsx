import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { lotteryGames, LotteryGameConfig } from "@/data/games";
import Header from "@/components/Header";
import EmailModal from "@/components/EmailModal";
import HowToPlayModal, { type GameRulesKey } from "@/components/HowToPlayModal";
import LotteryGame from "@/components/LotteryGame";
import useEmblaCarousel from "embla-carousel-react";

import quinaImg from "@/assets/quina.jpg";
import megasenaImg from "@/assets/megasena.jpg";
import diadasorteImg from "@/assets/diadasorte.jpg";
import millionariaImg from "@/assets/millionaria.jpg";
import powerballImg from "@/assets/powerball.jpg";
import megamillionImg from "@/assets/megamillion.jpg";
import lottoamericaImg from "@/assets/lottoamerica.jpg";
import twoby2Img from "@/assets/2by2.jpg";
import uklottoImg from "@/assets/uk-lotto.png";
import ukthunderballImg from "@/assets/uk-thunderball.png";
import laprimitivaImg from "@/assets/la-primitiva.png";
import elgordoImg from "@/assets/el-gordo.jpg";
import superenalottoImg from "@/assets/superenalotto.png";
import tinkaImg from "@/assets/tinka.png";
import lotochileImg from "@/assets/loto-chile.jpg";
import quini6Img from "@/assets/quini-6.png";
import balotoImg from "@/assets/baloto.jpg";
import melateImg from "@/assets/melate.jpg";
import francelotoImg from "@/assets/france-loto.jpg";
import euromillionsImg from "@/assets/euromillions-fr.png";
import lotto649Img from "@/assets/lotto-649.jpg";
import salottoImg from "@/assets/sa-lotto.png";
import loto7Img from "@/assets/loto-7.png";
import ozlottoImg from "@/assets/oz-lotto.png";
import lotto6aus49Img from "@/assets/lotto-6aus49.png";
import eurojackpotImg from "@/assets/eurojackpot.jpg";
import polandlottoImg from "@/assets/poland-lotto.jpg";
import lottoitalyImg from "@/assets/lotto-italy.jpg";

const gameImages: Record<string, string> = {
    quina: quinaImg,
    "mega-sena": megasenaImg,
    "dia-de-sorte": diadasorteImg,
    "mais-milionaria": millionariaImg,
    powerball: powerballImg,
    "mega-millions": megamillionImg,
    "lotto-america": lottoamericaImg,
    "2by2": twoby2Img,
    "uk-lotto": uklottoImg,
    "uk-thunderball": ukthunderballImg,
    "la-primitiva": laprimitivaImg,
    "el-gordo": elgordoImg,
    "superenalotto": superenalottoImg,
    "tinka": tinkaImg,
    "loto-chile": lotochileImg,
    "quini-6": quini6Img,
    "baloto": balotoImg,
    "melate": melateImg,
    "france-loto": francelotoImg,
    "euromillions-fr": euromillionsImg,
    "lotto-649": lotto649Img,
    "sa-lotto": salottoImg,
    "loto-7": loto7Img,
    "oz-lotto": ozlottoImg,
    "lotto-6aus49": lotto6aus49Img,
    "eurojackpot-de": eurojackpotImg,
    "lotto-pl": polandlottoImg,
    "lotto-italy": lottoitalyImg,
};

const countries = [
    { id: "br", key: "country_br", emoji: "🇧🇷" },
    { id: "us", key: "country_us", emoji: "🇺🇸" },
    { id: "gb", key: "gb", emoji: "🇬🇧" },
    { id: "it", key: "it", emoji: "🇮🇹" },
    { id: "es", key: "es_country", emoji: "🇪🇸" },
    { id: "fr", key: "fr_country", emoji: "🇫🇷" },
    { id: "de", key: "de", emoji: "🇩🇪" },
    { id: "pt", key: "pt", emoji: "🇵🇹" },
    { id: "au", key: "au", emoji: "🇦🇺" },
    { id: "jp", key: "jp", emoji: "🇯🇵" },
    { id: "ca", key: "ca", emoji: "🇨🇦" },
    { id: "za", key: "za", emoji: "🇿🇦" },
    { id: "nz", key: "nz", emoji: "🇳🇿" },
    { id: "ch", key: "ch", emoji: "🇨🇭" },
    { id: "se", key: "se", emoji: "🇸🇪" },
    { id: "ie", key: "ie", emoji: "🇮🇪" },
    { id: "mx", key: "mx", emoji: "🇲🇽" },
    { id: "co", key: "co", emoji: "🇨🇴" },
    { id: "ar", key: "ar_country", emoji: "🇦🇷" },
    { id: "cl", key: "cl", emoji: "🇨🇱" },
    { id: "pe", key: "pe", emoji: "🇵🇪" },
    { id: "pl", key: "pl", emoji: "🇵🇱" }
];

const InternationalLotteries = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(() => localStorage.getItem("userEmail"));
    const [promoCode, setPromoCode] = useState<string>(() => localStorage.getItem("promoCode") || "");
    const [dark, setDark] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [activeGame, setActiveGame] = useState<LotteryGameConfig | null>(null);
    const [howToPlay, setHowToPlay] = useState<GameRulesKey | null>(null);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
        loop: true
    });

    // Auto-scroll logic
    useEffect(() => {
        if (!emblaApi) return;
        const intervalId = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [emblaApi]);

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

    if (activeGame && email) {
        return (
            <div className="min-h-screen bg-background transition-colors">
                <Header dark={dark} onToggleDark={toggleDark} email={email} onChangeEmail={handleChangeEmail} />
                <main className="container py-6 max-w-lg mx-auto">
                    <LotteryGame
                        game={activeGame}
                        image={gameImages[activeGame.id] || ""}
                        email={email}
                        onBack={() => setActiveGame(null)}
                        promoCode={promoCode}
                    />
                </main>
            </div>
        );
    }

    const filteredGames = selectedCountry
        ? lotteryGames.filter(g => g.region === selectedCountry)
        : [];

    return (
        <div className="min-h-screen bg-background transition-colors flex flex-col">
            <EmailModal open={!email} onSubmit={handleEmailSubmit} />
            <Header dark={dark} onToggleDark={toggleDark} email={email} onChangeEmail={handleChangeEmail} />

            <main className="flex-1 container py-6 space-y-4 max-w-lg mx-auto flex flex-col min-h-0">
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border shadow-sm shrink-0 sticky top-0 z-40">
                    <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="shrink-0 hover:bg-muted rounded-full">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <div className="flex-1 text-center pr-8">
                        <h1 className="text-xl font-display font-bold text-foreground tracking-wide" style={{ color: "#FFD700" }}>LOTTERY INTERNATIONAL</h1>
                        <p className="text-xs text-muted-foreground uppercase mt-0.5">Escolha o país para apostar</p>
                    </div>
                </div>

                {/* Vertical Scroll Area for Countries with hidden scrollbar */}
                <div className="flex-1 overflow-y-auto no-scrollbar pb-4 pr-1">
                    <div className="grid grid-cols-4 gap-3 py-2">
                        {countries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setSelectedCountry(country.id)}
                                className={`flex flex-col items-center p-2 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95
                                    ${selectedCountry === country.id
                                        ? 'bg-primary/10 ring-2 ring-primary/40 shadow-inner'
                                        : 'bg-card border border-border/50 hover:bg-muted/50 shadow-sm'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border/50 bg-muted flex items-center justify-center pointer-events-none">
                                    <img
                                        src={`https://flagcdn.com/${country.id === 'gb' ? 'gb' : country.id}.svg`}
                                        alt={country.key}
                                        className="w-full h-full object-cover scale-[1.1]"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.src = `/flags/${country.id}.svg`;
                                        }}
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-center mt-2 text-foreground line-clamp-1 w-full px-1">
                                    {t(country.key as any)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {!selectedCountry && (
                    <div className="flex-none py-6 text-center text-muted-foreground animate-pulse">
                        <span className="text-4xl mb-2 block">🌍</span>
                        <p className="text-sm font-medium">Role e escolha um país para ver os jogos</p>
                    </div>
                )}
            </main>

            {/* Fixed Games Section at Footer */}
            {selectedCountry && (
                <div className="bg-card border-t border-border shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] p-4 pt-4 pb-8 sticky bottom-0 z-50 animate-in slide-in-from-bottom-full duration-500">
                    <div className="max-w-lg mx-auto space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                            <h2 className="text-xs font-bold text-foreground flex items-center gap-2">
                                <span className="text-primary text-base">🎯</span>
                                {t(countries.find(c => c.id === selectedCountry)?.key as any)} — {t("available_games" as any) === "available_games" ? "Jogos Disponíveis" : t("available_games" as any)}
                            </h2>
                        </div>

                        {filteredGames.length > 0 ? (
                            <div className={`grid ${filteredGames.length > 2 ? 'grid-cols-4' : 'grid-cols-2'} gap-2`}>
                                {filteredGames.slice(0, 4).map((game) => (
                                    <div key={game.id} className="relative">
                                        <button
                                            onClick={() => setActiveGame(game)}
                                            className="w-full rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all p-2 flex flex-col items-center justify-center gap-1 h-24"
                                        >
                                            <div className="w-full h-10 flex items-center justify-center overflow-hidden">
                                                {gameImages[game.id] ? (
                                                    <img
                                                        src={gameImages[game.id]}
                                                        alt={game.name}
                                                        className="h-full w-auto object-contain"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            target.style.display = 'none';
                                                            target.nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                ) : (
                                                    <img
                                                        src={`/game-logos/${game.id}.svg`}
                                                        alt={game.name}
                                                        className="h-full w-auto object-contain"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            target.style.display = 'none';
                                                            target.nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                )}
                                                <div className="hidden text-2xl animate-in fade-in duration-500">{game.emoji}</div>
                                            </div>
                                            <span className="font-bold text-[9px] text-center line-clamp-2 leading-tight h-6 flex items-center">{game.name}</span>
                                            <span className="text-[8px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded-full mt-auto">
                                                {game.currencySymbol}{game.betAmount}
                                            </span>
                                        </button>
                                        <div className="absolute top-1 right-1">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setHowToPlay(game as any);
                                                }}
                                                className="p-1 text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <HelpCircle className="h-3 w-3" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-4">
                                <p className="text-[10px] text-muted-foreground italic">Em breve mais jogos para esta região...</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {howToPlay && (
                <HowToPlayModal
                    open={!!howToPlay}
                    onClose={() => setHowToPlay(null)}
                    gameKey={typeof howToPlay === 'string' ? howToPlay : 'internacional'}
                    gameConfig={typeof howToPlay !== 'string' ? howToPlay : undefined}
                />
            )}
        </div>
    );
};

export default InternationalLotteries;
