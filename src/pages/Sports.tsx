import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Sports = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-lg mx-auto relative mt-6">
                <div className="flex justify-between items-center absolute -top-10 left-0 right-0 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/categorias")}
                        className="text-muted-foreground"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                    <ThemeToggle />
                </div>

                <div className="text-center mb-8">
                    <span className="text-4xl mb-2 inline-block">🏆</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">Esportes</h2>
                    <p className="text-sm text-muted-foreground">Escolha a modalidade</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => navigate("/esportes/futebol")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">⚽️</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Futebol</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/basquete")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🏀</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Basquete</h3>
                        </div>
                    </button>
                    <button
                        onClick={() => navigate("/esportes/tenis")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🎾</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Tênis</h3>
                        </div>
                    </button>
                    <button
                        onClick={() => navigate("/esportes/lutas")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🥊</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">UFC / Boxe</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/motor")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🏎️</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Motor</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/esports")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🎮</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">eSports</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/americanos")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🏈</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Americanos</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/volei")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🏐</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Vôlei</h3>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate("/esportes/outros")}
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                    >
                        <span className="text-4xl">🏅</span>
                        <div className="text-center">
                            <h3 className="text-sm font-bold leading-tight">Outros</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sports;
