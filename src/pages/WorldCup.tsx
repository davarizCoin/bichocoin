import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { worldCupGroups } from "@/data/worldCup";

const WorldCup = () => {
    const navigate = useNavigate();

    const handleGroupClick = (groupName: string) => {
        const slug = groupName.toLowerCase().replace(" ", "-");
        navigate(`/esportes/futebol/copa-do-mundo/${slug}`);
    };

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-4xl mx-auto relative mt-6">
                <div className="flex justify-between items-center absolute -top-10 left-0 right-0 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/esportes/futebol")}
                        className="text-muted-foreground"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                    <ThemeToggle />
                </div>

                <div className="text-center mb-8">
                    <span className="text-5xl mb-3 inline-block drop-shadow-lg">🏆</span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        Copa do Mundo 2026
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">Grupos Oficiais - Canadá, México e EUA</p>
                </div>

                {/* Altered grid to 2 columns on mobile (50% width) and tighter gaps */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                    {worldCupGroups.map((group) => (
                        <div
                            key={group.name}
                            onClick={() => handleGroupClick(group.name)}
                            className="bg-card rounded-xl border border-border shadow-md overflow-hidden flex flex-col cursor-pointer hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 relative group"
                        >
                            <div className="bg-gradient-to-r from-muted to-muted/50 p-2 sm:p-3 border-b border-border text-center flex justify-between items-center px-2 sm:px-4">
                                <h3 className="font-display font-bold text-foreground text-sm sm:text-base">{group.name}</h3>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div className="p-2 sm:p-3">
                                <ul className="space-y-2 sm:space-y-3">
                                    {group.teams.map((team, idx) => (
                                        <li key={idx} className="flex items-center gap-2 p-1 rounded-md">
                                            {team.code === "un" ? (
                                                <div className="w-6 h-4 sm:w-8 sm:h-6 flex items-center justify-center bg-muted rounded shadow-sm border border-border">
                                                    <span className="text-xs sm:text-lg">🌍</span>
                                                </div>
                                            ) : (
                                                <img
                                                    src={`https://flagcdn.com/${team.code}.svg`}
                                                    alt={`Bandeira de ${team.name}`}
                                                    className="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-sm border border-border/50"
                                                />
                                            )}
                                            {/* Tighten text leading to fit small borders */}
                                            <span className="font-medium text-[10px] sm:text-sm text-foreground leading-tight truncate">{team.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center bg-muted/30 p-4 rounded-xl border border-dashed border-border">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                        * As seleções das repescagens serão definidas em Março de 2026. <br />
                        Clique em um grupo para visualizar e apostar nas partidas!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorldCup;
