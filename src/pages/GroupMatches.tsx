import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { getMatchesByGroup, worldCupGroups } from "@/data/worldCup";
import { useState } from "react";
import QRCodeModal from "@/components/QRCodeModal";
import HowToPlayModal from "@/components/HowToPlayModal";

const BET_AMOUNTS = [10, 50, 100, 200, 500];

const GroupMatches = () => {
    const { groupSlug } = useParams();
    const navigate = useNavigate();

    // Reverse the slug to original name (e.g. "grupo-a" -> "Grupo A")
    const groupData = worldCupGroups.find(
        (g) => g.name.toLowerCase().replace(" ", "-") === groupSlug
    );

    if (!groupData) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <h2 className="text-xl font-bold mb-4">Grupo não encontrado</h2>
                <Button onClick={() => navigate("/esportes/futebol/copa-do-mundo")}>Voltar para Copa</Button>
            </div>
        );
    }

    const matches = getMatchesByGroup(groupData.name);

    // State for betting
    const [selectedMatch, setSelectedMatch] = useState<{ matchId: number; selection: string; title: string } | null>(null);
    const [selectedAmount, setSelectedAmount] = useState<number>(BET_AMOUNTS[0]);
    const [showQR, setShowQR] = useState(false);
    const [showHowToPlay, setShowHowToPlay] = useState(false);

    const isBettingClosed = (dateStr: string, timeStr: string) => {
        const [day, month, year] = dateStr.split('/');
        const [hour, min] = timeStr.split(':');
        const matchTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(min));
        const oneHourBefore = new Date(matchTime.getTime() - 60 * 60 * 1000);
        return new Date() >= oneHourBefore;
    };

    const handleBet = (matchId: number, selection: string, title: string) => {
        setSelectedMatch({ matchId, selection, title });
        setShowQR(true);
    };

    const buildMemo = () => {
        if (!selectedMatch) return "";

        // Fetch freshly right before opening the modal
        const currentEmail = localStorage.getItem("bichocoin_email") || "";
        const currentPromo = localStorage.getItem("bichocoin_promo") || "";

        // ID com 2 dígitos ex: 01, 15
        const matchIdStr = selectedMatch.matchId.toString().padStart(2, '0');
        const core = `WM${matchIdStr}-${selectedMatch.selection}${currentEmail ? '-' + currentEmail : ''}`;
        return currentPromo ? `${currentPromo}-${core}` : core;
    };

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-2xl mx-auto relative mt-6">
                <div className="flex justify-between items-center absolute -top-10 left-0 right-0 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/esportes/futebol/copa-do-mundo")}
                        className="text-muted-foreground"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                    <ThemeToggle />
                </div>

                <div className="text-center mb-8">
                    <span className="text-5xl mb-3 inline-block drop-shadow-lg">🌍</span>
                    <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        {groupData.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">Partidas da Fase de Grupos</p>
                </div>

                <div className="bg-card p-4 rounded-xl border border-border shadow-md mb-6 flex flex-col items-center">
                    <label className="text-sm font-bold mb-3 block text-center">Valor da Aposta</label>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                        {BET_AMOUNTS.map((amt) => (
                            <button
                                key={amt}
                                onClick={() => setSelectedAmount(amt)}
                                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${selectedAmount === amt
                                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                R$ {amt}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowHowToPlay(true)}
                        className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mt-2 uppercase tracking-wide"
                    >
                        <HelpCircle className="h-4 w-4" /> Saiba mais
                    </button>
                </div>

                <div className="space-y-4">
                    {matches.map((match) => {
                        const closed = isBettingClosed(match.date, match.time);
                        return (
                            <div key={match.id} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col relative">
                                {/* Header: Date, Time, Location */}
                                <div className="bg-muted/50 p-2 border-b border-border text-center flex flex-col items-center justify-center text-xs text-muted-foreground">
                                    <span className="font-bold text-foreground mb-1">Jogo {match.id.toString().padStart(2, '0')}</span>
                                    <span>{match.date} • {match.time} (Horário de Brasília)</span>
                                    <span>{match.location}</span>
                                </div>

                                {/* Teams & Bet Buttons */}
                                <div className="p-4 flex items-center justify-between gap-2 relative">
                                    {closed && (
                                        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-b-xl">
                                            <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md font-bold text-sm shadow-lg whitespace-nowrap">
                                                Aposta Encerrada
                                            </span>
                                        </div>
                                    )}

                                    {/* Team 1 */}
                                    <div className="flex-1 flex flex-col items-center gap-2">
                                        <div className="relative">
                                            {match.team1.code === "un" ? (
                                                <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full shadow-sm border border-border text-2xl">🌍</div>
                                            ) : (
                                                <img src={`https://flagcdn.com/${match.team1.code}.svg`} alt={match.team1.name} className="w-12 h-12 object-cover rounded-full shadow-sm border border-border/50" />
                                            )}
                                        </div>
                                        <span className="font-bold text-xs sm:text-sm text-center line-clamp-2 min-h-[40px] flex items-center">{match.team1.name}</span>
                                        <Button
                                            size="sm"
                                            disabled={closed}
                                            onClick={() => handleBet(match.id, match.team1.iso, `Vitória: ${match.team1.name}`)}
                                            className="w-full text-xs"
                                        >
                                            Vencer
                                        </Button>
                                    </div>

                                    {/* Empate */}
                                    <div className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px]">
                                        <div className="text-sm sm:text-lg font-bold text-muted-foreground mb-4">VS</div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={closed}
                                            onClick={() => handleBet(match.id, "E", "Empate")}
                                            className="w-full text-xs font-bold border-muted-foreground/30 hover:bg-muted"
                                        >
                                            Empate
                                        </Button>
                                    </div>

                                    {/* Team 2 */}
                                    <div className="flex-1 flex flex-col items-center gap-2">
                                        <div className="relative">
                                            {match.team2.code === "un" ? (
                                                <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-full shadow-sm border border-border text-2xl">🌍</div>
                                            ) : (
                                                <img src={`https://flagcdn.com/${match.team2.code}.svg`} alt={match.team2.name} className="w-12 h-12 object-cover rounded-full shadow-sm border border-border/50" />
                                            )}
                                        </div>
                                        <span className="font-bold text-xs sm:text-sm text-center line-clamp-2 min-h-[40px] flex items-center">{match.team2.name}</span>
                                        <Button
                                            size="sm"
                                            disabled={closed}
                                            onClick={() => handleBet(match.id, match.team2.iso, `Vitória: ${match.team2.name}`)}
                                            className="w-full text-xs"
                                        >
                                            Vencer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {showQR && selectedMatch && (
                    <QRCodeModal
                        open={showQR}
                        onClose={() => setShowQR(false)}
                        memoText={buildMemo()}
                        amount={selectedAmount}
                        // passing a dummy gameId or modifying QRCodeModal to accept custom title
                        // For now we trick the modal or let it display the code
                        gameId="worldcup"
                        customTitle={selectedMatch.title}
                    />
                )}

                {showHowToPlay && (
                    <HowToPlayModal open={showHowToPlay} onClose={() => setShowHowToPlay(false)} gameKey="worldcup" />
                )}
            </div>
        </div>
    );
};

export default GroupMatches;
