import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Building2, Map, Users } from "lucide-react";

// Categorias voltadas para a Política
const politicaCategories = [
    { id: "stf", name: "STF", icon: Scale, desc: "Supremo Tribunal Federal" },
    { id: "federal", name: "FEDERAL", icon: Building2, desc: "Presidência, Senado..." },
    { id: "estadual", name: "ESTADUAL", icon: Map, desc: "Governo, Deputados..." },
    { id: "municipal", name: "MUNICIPAL", icon: Users, desc: "Prefeituras, Câmaras..." },
];

const Politica = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <div className="max-w-lg mx-auto relative mt-6">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/categorias")}
                    className="absolute -top-10 left-0 text-muted-foreground z-10"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                </Button>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-bold text-foreground">Apostas: Política</h2>
                    <p className="text-sm text-muted-foreground">Escolha o cenário político</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {politicaCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => cat.id === "stf" ? navigate("/politica/stf") : alert(`Apostas para cenário ${cat.name} em breve!`)}
                                className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border shadow-md hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 h-32"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold leading-tight">{cat.name}</h3>
                                    <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{cat.desc}</p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Politica;
