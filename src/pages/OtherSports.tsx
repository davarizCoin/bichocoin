import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const OtherSports = () => {
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
                    <span className="text-4xl mb-2 inline-block">🏅</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">Mais Esportes</h2>
                    <p className="text-sm text-muted-foreground">Eventos Globais e Alternativos</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => alert("As apostas para os Jogos Olímpicos estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🥇</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Jogos Olímpicos</h3>
                            <p className="text-xs text-muted-foreground mt-1">Atletismo, Natação, Ginástica</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para as Ligas de Ping Pong estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏓</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Tênis de Mesa</h3>
                            <p className="text-xs text-muted-foreground mt-1">Ligas da Europa e Ásia</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para Snooker estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🎱</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Snooker / Sinuca</h3>
                            <p className="text-xs text-muted-foreground mt-1">Campeonatos Mundiais</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para Dardos estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🎯</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Dardos (PDC)</h3>
                            <p className="text-xs text-muted-foreground mt-1">Campeonato Europeu de Dardos</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtherSports;
