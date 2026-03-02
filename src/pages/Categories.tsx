import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Film, Trophy, Vote, Gamepad2, CloudSnow, TrendingUp, Cpu, Award, Tv, Rocket } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const categories = [
    { id: "esportes", name: "ESPORTES", icon: Trophy, desc: "Futebol, Basquete..." },
    { id: "cinema", name: "CINEMA", icon: Film, desc: "Oscar, Bilheterias..." },
    { id: "politica", name: "POLÍTICA", icon: Vote, desc: "Eleições, Leis..." },
    { id: "esports", name: "E-SPORTS", icon: Gamepad2, desc: "LoL, CS:GO..." },
    { id: "clima", name: "CLIMA", icon: CloudSnow, desc: "Recordes, Temperaturas..." },
    { id: "economia", name: "ECONOMIA", icon: TrendingUp, desc: "Criptos, Cotações..." },
    { id: "tecnologia", name: "TECNOLOGIA", icon: Cpu, desc: "Lançamentos IA..." },
    { id: "premios", name: "PREMIAÇÕES", icon: Award, desc: "Nobel, Pulitzer..." },
    { id: "reality", name: "REALITY SHOW", icon: Tv, desc: "BBB, A Fazenda..." },
    { id: "espaco", name: "ESPAÇO", icon: Rocket, desc: "Lançamentos, Marte..." },
];

const Categories = () => {
    const navigate = useNavigate();

    const handleNavigate = (id: string, name: string) => {
        if (id === "politica") {
            navigate("/politica");
        } else if (id === "esportes") {
            navigate("/esportes");
        } else {
            alert(`Apostas para ${name} em breve!`);
        }
    };

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-lg mx-auto relative mt-6">
                <div className="flex justify-between items-center absolute -top-10 left-0 right-0 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/")}
                        className="text-muted-foreground"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>
                    <ThemeToggle />
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-bold text-foreground">Outras Categorias</h2>
                    <p className="text-sm text-muted-foreground">Escolha a categoria para apostar</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleNavigate(cat.id, cat.name)}
                                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-28"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xs font-bold leading-tight">{cat.name}</h3>
                                    <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{cat.desc}</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
