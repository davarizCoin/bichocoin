import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Motorsport = () => {
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
                    <span className="text-4xl mb-2 inline-block">🏎️</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">Esportes a Motor</h2>
                    <p className="text-sm text-muted-foreground">Escolha a categoria</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => alert("As apostas para a Fórmula 1 estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏁</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Fórmula 1</h3>
                            <p className="text-xs text-muted-foreground mt-1">A Elite do Automobilismo</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a NASCAR estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🇺🇸</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">NASCAR</h3>
                            <p className="text-xs text-muted-foreground mt-1">Alta Velocidade na América</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a MotoGP estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏍️</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">MotoGP</h3>
                            <p className="text-xs text-muted-foreground mt-1">Motovelocidade Mundial</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a Fórmula E estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">⚡</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Fórmula E</h3>
                            <p className="text-xs text-muted-foreground mt-1">O Futuro das Corridas</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para o Rally Dakar estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏜️</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">Rally Dakar</h3>
                            <p className="text-xs text-muted-foreground mt-1">O Desafio Extremo</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Motorsport;
