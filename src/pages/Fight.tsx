import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Fight = () => {
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
                    <span className="text-4xl mb-2 inline-block">🥊</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">UFC & Boxe</h2>
                    <p className="text-sm text-muted-foreground">Escolha o evento</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => alert("As apostas para o UFC estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🥋</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">UFC (MMA)</h3>
                            <p className="text-xs text-muted-foreground mt-1">O Maior Octógono do Mundo</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para o Boxe Mundial estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🥊</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Boxe Mundial</h3>
                            <p className="text-xs text-muted-foreground mt-1">Lutas por Cinturão (WBC, WBA)</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a PFL estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🔥</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">PFL & Bellator</h3>
                            <p className="text-xs text-muted-foreground mt-1">A Nova Força do MMA</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para Boxe de Influenciadores estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">⭐</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Lutas de Influenciadores</h3>
                            <p className="text-xs text-muted-foreground mt-1">Jake Paul, Whindersson, Popó</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a KSW estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">⚡</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">KSW & Eventos Europeus</h3>
                            <p className="text-xs text-muted-foreground mt-1">O MMA Que Domina a Europa</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Fight;
