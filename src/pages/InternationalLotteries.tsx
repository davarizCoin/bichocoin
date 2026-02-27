import { useState } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { lotteryGames, LotteryGameConfig } from "@/data/games";
import Header from "@/components/Header";
import EmailModal from "@/components/EmailModal";
import HowToPlayModal, { type GameRulesKey } from "@/components/HowToPlayModal";
import LotteryGame from "@/components/LotteryGame";

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

// Country constants matching games.ts region IDs
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

    // When inside a game
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

    // Filter games based on selected continent/country
    const filteredGames = selectedCountry
        ? lotteryGames.filter(g => g.region === selectedCountry)
        : [];

    return (
        <div className="min-h-screen bg-background transition-colors">
            <EmailModal open={!email} onSubmit={handleEmailSubmit} />
            <Header dark={dark} onToggleDark={toggleDark} email={email} onChangeEmail={handleChangeEmail} />

            <main className="container py-6 space-y-8 max-w-lg mx-auto">
                {/* Navigation Header */}
                <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                    <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="shrink-0 hover:bg-muted rounded-full">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <div className="flex-1 text-center pr-8">
                        <h1 className="text-xl font-display font-bold text-foreground tracking-wide" style={{ color: "#FFD700" }}>LOTTERY INTERNATIONAL</h1>
                        <p className="text-xs text-muted-foreground uppercase mt-0.5">{t("select_country")}</p>
                    </div>
                </div>

                {/* Global Country Grid */}
                <div className="grid grid-cols-4 gap-4 sm:gap-6">
                    {countries.map((country) => (
                        <button
                            key={country.id}
                            onClick={() => setSelectedCountry(country.id)}
                            className={`flex flex-col items-center justify-start p-2 rounded-2xl transition-all duration-200 hover:scale-105 shadow-sm
                ${selectedCountry === country.id
                                    ? 'bg-primary/10 ring-4 ring-primary/30 scale-105'
                                    : 'bg-transparent hover:bg-muted/50'
                                }`}
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md border-2 border-border/50 bg-muted shrink-0 flex items-center justify-center">
                                <img
                                    src={`/flags/${country.id}.svg`}
                                    alt={country.key}
                                    className="w-full h-full object-cover scale-[1.1]"
                                />
                            </div>
                            <span className="text-xs sm:text-[13px] font-bold text-center leading-tight line-clamp-2 text-foreground break-words w-full mt-3 drop-shadow-sm">
                                {t(country.key as any)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Selected Country Games */}
                {selectedCountry && (
                    <div className="space-y-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="flex items-center justify-between border-b border-border pb-2">
                            <h2 className="text-sm font-bold text-foreground">
                                <span className="text-primary mr-2">🎯</span>
                                Jogos Disponíveis ({t(countries.find(c => c.id === selectedCountry)?.key as any)})
                            </h2>
                        </div>

                        {filteredGames.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                                {filteredGames.map((game) => (
                                    <div key={game.id} className="flex flex-col items-center gap-1">
                                        <button
                                            onClick={() => setActiveGame(game)}
                                            className="rounded-xl overflow-hidden w-full h-32 bg-card border border-border transition-all shadow-md hover:scale-105 hover:shadow-lg p-2 flex flex-col items-center justify-center gap-2 group"
                                        >
                                            {gameImages[game.id] ? (
                                                <img src={gameImages[game.id]} alt={game.name} className="w-full h-16 object-contain" />
                                            ) : game.region !== 'br' && game.region !== 'us' ? (
                                                <img src={`/game-logos/${game.id}.svg`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} alt={game.name} className="w-14 h-14 rounded-xl object-contain drop-shadow-sm mb-1" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                    <span className="text-2xl">{game.emoji}</span>
                                                </div>
                                            )}
                                            <span className="font-bold text-[11px] text-center line-clamp-1">{game.name}</span>
                                            <p className="text-[10px] text-muted-foreground mt-auto bg-muted px-2 py-0.5 rounded-full">
                                                {game.currencySymbol}{game.betAmount}
                                            </p>
                                        </button>
                                        <button
                                            onClick={() => setHowToPlay(game as any)}
                                            className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors mt-1"
                                        >
                                            <HelpCircle className="h-3 w-3" /> {t("how_to_play")}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-muted/50 rounded-xl border border-dashed border-border">
                                <p className="text-sm text-muted-foreground">Opa! API conectando para os jogos da região...</p>
                                <p className="text-xs text-muted-foreground/70 mt-1">Logo você poderá apostar aqui!</p>
                            </div>
                        )}
                    </div>
                )}

            </main>

            {howToPlay && (
                <HowToPlayModal open={!!howToPlay} onClose={() => setHowToPlay(null)} gameKey={typeof howToPlay === 'string' ? howToPlay : 'internacional'} gameConfig={typeof howToPlay !== 'string' ? howToPlay : undefined} />
            )}
        </div>
    );
};

export default InternationalLotteries;
