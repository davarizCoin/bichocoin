import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Football = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-lg mx-auto relative mt-6">
                <div className="flex justify-between items-center absolute -top-10 left-0 right-0 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/esportes")}
                        className="text-muted-foreground"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                    <ThemeToggle />
                </div>

                <div className="text-center mb-8">
                    <span className="text-4xl mb-2 inline-block">⚽️</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">Futebol</h2>
                    <p className="text-sm text-muted-foreground">Escolha a competição</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate("/esportes/futebol/copa-do-mundo")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-600/20 to-green-600/20 border border-yellow-500/50 shadow-md hover:border-yellow-400 hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 rounded-full bg-card border border-yellow-500/30 flex items-center justify-center shadow-inner">
                            <span className="text-4xl">🌍</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-bold text-yellow-500">Copa do Mundo 2026</h3>
                            <p className="text-xs text-muted-foreground mt-1">EUA, México e Canadá</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("Em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🇧🇷</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Brasileirão Série A</h3>
                            <p className="text-xs text-muted-foreground mt-1">Campeonato Brasileiro</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a Champions League estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🇪🇺</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Champions League</h3>
                            <p className="text-xs text-muted-foreground mt-1">Futebol Europeu</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a Copa Libertadores estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏆</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Copa Libertadores</h3>
                            <p className="text-xs text-muted-foreground mt-1">Futebol Sul-Americano</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a Premier League estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Premier League</h3>
                            <p className="text-xs text-muted-foreground mt-1">Campeonato Inglês</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para os Campeonatos Estaduais estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏟️</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Regionais & Estaduais</h3>
                            <p className="text-xs text-muted-foreground mt-1">Paulistão, Carioca e mais</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Football;
