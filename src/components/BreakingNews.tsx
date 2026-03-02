import React, { useState, useEffect } from 'react';
import { Timer, AlertCircle, ChevronRight } from 'lucide-react';
import { lotteryGames } from '@/data/games';
import { gameSchedules } from '@/components/CountdownTimer';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreakingNewsItem {
    id: string;
    title: string;
    secondsLeft: number; // seconds
    type: 'bicho' | 'lottery' | 'market';
    onClick: () => void;
}

const getBrasiliaTime = (): Date => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc - 3 * 3600000);
};

const getBichoClosingSeconds = (drawTime: string): number => {
    const now = getBrasiliaTime();
    const [hour, minute] = drawTime.split(':').map(Number);
    const drawDate = new Date(now);
    drawDate.setHours(hour, minute, 0, 0);

    // If time has passed today, check tomorrow (though unlikely for < 30m logic)
    if (drawDate.getTime() < now.getTime() - 3600000) {
        drawDate.setDate(drawDate.getDate() + 1);
    }

    const closeTime = new Date(drawDate.getTime() - 10 * 60000); // 10 min before
    const diffMs = closeTime.getTime() - now.getTime();
    return Math.floor(diffMs / 1000);
};

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const BreakingNews: React.FC<{ onSelectGame: (id: string | 'bicho') => void }> = ({ onSelectGame }) => {
    const [closingGames, setClosingGames] = useState<BreakingNewsItem[]>([]);
    const [currentTime, setCurrentTime] = useState(getBrasiliaTime());
    const { t } = useLanguage();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(getBrasiliaTime()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const checkGames = () => {
            const now = currentTime;
            const currentClosing: BreakingNewsItem[] = [];

            // Check Lotteries
            lotteryGames.forEach((game) => {
                const schedule = gameSchedules[game.id];
                if (!schedule) return;
                if (schedule.drawDays.includes(now.getDay())) {
                    schedule.drawTimes.forEach((draw) => {
                        const drawDate = new Date(now);
                        drawDate.setHours(draw.hour, draw.minute, 0, 0);
                        const closeTime = new Date(drawDate.getTime() - 60 * 60000); // 60 min before
                        const diffSecs = Math.floor((closeTime.getTime() - now.getTime()) / 1000);

                        if (diffSecs > 0 && diffSecs <= 1800) { // 30 minutes
                            currentClosing.push({
                                id: game.id,
                                title: game.name,
                                secondsLeft: diffSecs,
                                type: 'lottery',
                                onClick: () => onSelectGame(game.id)
                            });
                        }
                    });
                }
            });

            // Check Jogo do Bicho
            const bichoTimes = ["11:00", "14:00", "16:00", "18:00", "21:00"];
            bichoTimes.forEach(time => {
                const diffSecs = getBichoClosingSeconds(time);
                if (diffSecs > 0 && diffSecs <= 1800) {
                    currentClosing.push({
                        id: 'bicho',
                        title: `Bicho ${time}`,
                        secondsLeft: diffSecs,
                        type: 'bicho',
                        onClick: () => onSelectGame('bicho')
                    });
                }
            });

            // TODO: Add Future Markets logic here

            // Take top 3
            setClosingGames(currentClosing.sort((a, b) => a.secondsLeft - b.secondsLeft).slice(0, 3));
        };

        checkGames();
    }, [currentTime, onSelectGame]);

    if (closingGames.length === 0) return null;

    const label = t("closing_soon" as any) || "Plantão de Apostas";

    return (
        <div className="w-full overflow-hidden bg-black/60 backdrop-blur-md border-y border-yellow-500/30 py-3 mb-2 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="container px-4">
                <div className="flex items-center justify-between mb-2 px-1">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <AlertCircle className="w-4 h-4 text-yellow-500 animate-pulse" />
                            <div className="absolute inset-0 bg-yellow-500/20 blur-sm rounded-full animate-ping" />
                        </div>
                        <span className="text-[11px] uppercase tracking-widest font-black text-yellow-500 italic">
                            {label}
                        </span>
                    </div>
                    <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-yellow-500/50 to-transparent opacity-30" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {closingGames.map((item) => (
                        <button
                            key={`${item.id}-${item.title}`}
                            onClick={item.onClick}
                            className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-br from-yellow-500/15 to-black border border-yellow-500/40 hover:border-yellow-500 hover:from-yellow-500/25 transition-all group relative overflow-hidden active:scale-95"
                        >
                            <div className="flex items-center gap-3">
                                <Timer className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform" />
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] text-yellow-500/70 uppercase font-bold tracking-tighter">Encerrando</span>
                                    <span className="text-sm font-black text-white leading-none -mt-0.5">{item.title}</span>
                                </div>
                            </div>

                            <div className="bg-yellow-500/20 px-2 py-1 rounded-md border border-yellow-500/20 font-mono text-xs font-bold text-yellow-400 group-hover:bg-yellow-500/40 transition-colors">
                                {formatTime(item.secondsLeft)}
                            </div>

                            {/* Subtle light effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
