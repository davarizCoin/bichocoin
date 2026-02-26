import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const USSports = () => {
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
                    <span className="text-4xl mb-2 inline-block">🏈</span>
                    <h2 className="text-2xl font-display font-bold text-foreground">Esportes Americanos</h2>
                    <p className="text-sm text-muted-foreground">Ligas dos EUA</p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => alert("As apostas para a NFL estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏈</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">NFL</h3>
                            <p className="text-xs text-muted-foreground mt-1">Futebol Americano Profissional</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a MLB estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">⚾</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">MLB</h3>
                            <p className="text-xs text-muted-foreground mt-1">Major League Baseball</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para a NHL estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🏒</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">NHL</h3>
                            <p className="text-xs text-muted-foreground mt-1">Hóquei no Gelo Americana</p>
                        </div>
                    </button>

                    <button
                        onClick={() => alert("As apostas para o College Football (NCAA) estarão disponíveis em breve!")}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 opacity-80"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-3xl">🎓</span>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base font-bold">NCAA Football</h3>
                            <p className="text-xs text-muted-foreground mt-1">Futebol Americano Universitário</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default USSports;
