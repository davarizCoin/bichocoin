import React, { useState, useEffect, useRef } from 'react';
import { Timer, AlertCircle } from 'lucide-react';
import { lotteryGames } from '@/data/games';
import { gameSchedules } from '@/components/CountdownTimer';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreakingNewsItem {
    id: string;
    title: string;
    secondsLeft: number;
    type: 'bicho' | 'lottery' | 'market';
    addedAt: number; // timestamp to track which is oldest
    onClick: () => void;
}

const getBrasiliaTime = (): Date => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc - 3 * 3600000);
};

const getSecondsToDraw = (drawTime: string): number => {
    const now = getBrasiliaTime();
    const [hour, minute] = drawTime.split(':').map(Number);
    const drawDate = new Date(now);
    drawDate.setHours(hour, minute, 0, 0);

    // If more than 1 hour past, assume it's for tomorrow
    if (drawDate.getTime() < now.getTime() - 3600000) {
        drawDate.setDate(drawDate.getDate() + 1);
    }

    const diffMs = drawDate.getTime() - now.getTime();
    return Math.floor(diffMs / 1000);
};

const formatTime = (seconds: number) => {
    const s = Math.max(0, seconds);
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const BreakingNews: React.FC<{ onSelectGame: (id: string | 'bicho') => void }> = ({ onSelectGame }) => {
    const [activeItems, setActiveItems] = useState<BreakingNewsItem[]>([]);
    const [currentTime, setCurrentTime] = useState(getBrasiliaTime());
    const { t } = useLanguage();
    const lastCheckRef = useRef<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = getBrasiliaTime();
            setCurrentTime(now);

            // Update secondsLeft for all active items
            setActiveItems(prev => prev.map(item => ({
                ...item,
                secondsLeft: item.secondsLeft > -9999 ? item.secondsLeft - 1 : item.secondsLeft
            })));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const checkNewGames = () => {
            const now = currentTime;
            const allCandidates: Omit<BreakingNewsItem, 'addedAt'>[] = [];

            // Lotteries
            lotteryGames.forEach((game) => {
                const schedule = gameSchedules[game.id];
                if (!schedule) return;
                if (schedule.drawDays.includes(now.getDay())) {
                    schedule.drawTimes.forEach((draw) => {
                        const drawDate = new Date(now);
                        drawDate.setHours(draw.hour, draw.minute, 0, 0);
                        const closeTime = new Date(drawDate.getTime() - 60 * 60000);
                        const diffSecs = Math.floor((closeTime.getTime() - now.getTime()) / 1000);

                        if (diffSecs > 0 && diffSecs <= 1800) {
                            allCandidates.push({
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

            // Bicho
            const bichoTimes = ["11:00", "14:00", "16:00", "18:00", "21:00"];
            bichoTimes.forEach(time => {
                const diffSecs = getSecondsToDraw(time);
                // Enter 30 mins before drawTime
                if (diffSecs > 0 && diffSecs <= 1800) {
                    allCandidates.push({
                        id: `bicho-${time}`,
                        title: `Jogo do Bicho ${time}`,
                        secondsLeft: diffSecs,
                        type: 'bicho',
                        onClick: () => onSelectGame('bicho')
                    });
                }
            });

            // Dragão da Sorte
            const dragaoTimes = ["13:50", "19:50"];
            dragaoTimes.forEach(time => {
                const diffSecs = getSecondsToDraw(time);
                // Enter 30 mins before drawTime
                if (diffSecs > 0 && diffSecs <= 1800) {
                    allCandidates.push({
                        id: `dragao-${time}`,
                        title: `Dragão da Sorte ${time}`,
                        secondsLeft: diffSecs,
                        type: 'bicho', // Reuse bicho style
                        onClick: () => onSelectGame('bicho')
                    });
                }
            });


            // Temporary Mock for Verification
            allCandidates.push({
                id: 'mock-closed',
                title: 'MELATE',
                secondsLeft: -3600,
                type: 'lottery',
                onClick: () => { }
            });

            setActiveItems(prev => {
                let updated = [...prev];

                // Only look for new games that are NOT already in activeItems
                const freshCandidates = allCandidates.filter(c => !updated.some(u => u.id === c.id));

                // 1. Fill up to 3 if we have space
                while (updated.length < 3 && freshCandidates.length > 0) {
                    const next = freshCandidates.shift()!;
                    updated.push({ ...next, addedAt: Date.now() });
                }

                // 2. Replace expired items if we have fresh candidates
                // Item expires 30 minutes AFTER draw time (secondsLeft < -1800)
                updated = updated.map(item => {
                    const isFullyExpired = item.secondsLeft < -1800;
                    if (isFullyExpired && freshCandidates.length > 0) {
                        return {
                            ...freshCandidates.shift()!,
                            addedAt: Date.now()
                        };
                    }
                    return item;
                });

                // Also remove items that are fully expired if no fresh candidates
                updated = updated.filter(item => item.secondsLeft >= -1800);

                return updated.sort((a, b) => {
                    // Sort primarily by active vs expired, then by time
                    if (a.secondsLeft > 0 && b.secondsLeft <= 0) return -1;
                    if (a.secondsLeft <= 0 && b.secondsLeft > 0) return 1;
                    return a.secondsLeft - b.secondsLeft;
                });
            });
        };

        // Check for new games every 10 seconds to avoid heavy logic every second
        const timeMs = currentTime.getTime();
        if (timeMs - lastCheckRef.current > 10000) {
            checkNewGames();
            lastCheckRef.current = timeMs;
        }
    }, [currentTime, onSelectGame]);

    if (activeItems.length === 0) return null;

    return (
        <div className="w-full py-4 mb-2 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="container px-4 flex flex-col items-center">
                {/* Header Bar - 90% Opacity Black Glass */}
                <div className="bg-black/90 backdrop-blur-md px-10 py-1.5 rounded-full mb-6 border border-white/20 shadow-2xl">
                    <span className="text-[12px] font-black text-[#d4af37] italic uppercase tracking-[0.25em]">
                        {t('breaking_news_title' as any)}
                    </span>
                </div>

                {/* Cards Grid - 90% Opacity Black Glass */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl px-2 md:px-0">
                    {activeItems.map((item) => {
                        const isClosed = item.secondsLeft <= 0;
                        const isUrgent = item.secondsLeft > 0 && item.secondsLeft <= 300; // 5 minutes

                        return (
                            <div
                                key={item.id}
                                className={`
                                    relative flex flex-col items-center justify-center p-3 md:p-5 rounded-2xl md:rounded-[2.5rem] h-36 md:h-44
                                    bg-black/90 backdrop-blur-md border border-white/20 transition-all duration-300
                                    ${!isClosed ? 'hover:border-[#d4af37]/60 hover:scale-[1.02] shadow-[0_12px_48px_rgba(0,0,0,0.5)]' : ''}
                                `}
                            >
                                <div className={`flex flex-col items-center justify-center w-full h-full ${isClosed ? 'opacity-40 grayscale-[0.6]' : ''}`}>
                                    <div className="absolute top-2 md:top-4 w-full text-center">
                                        {!isClosed && (
                                            <span className="text-[8px] md:text-[10px] text-[#d4af37] italic font-black uppercase tracking-widest opacity-90">
                                                Encerrando
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-center justify-center flex-grow w-full pt-3 md:pt-4">
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-[12px] md:text-[14px] font-black text-white text-center leading-tight px-1 md:px-3 w-full break-words drop-shadow-sm uppercase opacity-90">
                                                {item.title.split(' ').slice(0, -1).join(' ') || item.title}
                                            </h3>
                                            {item.title.includes(' ') && (
                                                <span className="text-xl md:text-2xl font-black text-[#d4af37] mt-0.5 tracking-tighter">
                                                    {item.title.split(' ').pop()}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1.5 md:gap-2.5 mt-1.5 md:mt-2.5">
                                        <div className="bg-white/5 p-1 md:p-1.5 rounded-full border border-white/10">
                                            <Timer className={`w-3 h-3 md:w-4 md:h-4 ${isClosed ? 'text-gray-500' : 'text-[#d4af37]'} ${isUrgent ? 'animate-pulse' : ''}`} />
                                        </div>
                                        <div className={`
                                            bg-white/5 px-3 md:px-5 py-1 md:py-1.5 rounded-full border border-white/10 
                                            font-mono text-[10px] md:text-sm font-black min-w-[60px] md:min-w-[80px] text-center
                                            ${isUrgent ? 'text-red-500 animate-pulse' : 'text-[#d4af37]'}
                                            ${isClosed ? 'text-gray-400' : ''}
                                        `}>
                                            {formatTime(item.secondsLeft)}
                                        </div>
                                    </div>
                                </div>

                                {/* Interactive Click Overlay or Closed Badge */}
                                {!isClosed ? (
                                    <button
                                        onClick={item.onClick}
                                        className="absolute inset-0 rounded-2xl md:rounded-[2.5rem] cursor-pointer"
                                        aria-label={`Apostar em ${item.title}`}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl md:rounded-[2.5rem] pointer-events-none z-20">
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                                        <div className="relative bg-[#FF0000] border-t border-b border-yellow-400 px-12 py-1 rotate-[-45deg] shadow-[0_0_30px_rgba(255,0,0,0.8)] scale-125 md:scale-150 flex items-center justify-center">
                                            <span className="text-[12px] md:text-[14px] font-black text-yellow-400 uppercase tracking-tighter italic leading-none whitespace-nowrap">
                                                {t('closed' as any)}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
