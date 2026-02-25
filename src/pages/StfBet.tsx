import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Info } from "lucide-react";
import QRCodeModal from "@/components/QRCodeModal";
import EmailModal from "@/components/EmailModal";
import { stfMinisters } from "@/data/stf";

const StfBet = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(null);
    const [promoCode, setPromoCode] = useState<string>("");
    const [selected, setSelected] = useState<string | null>(null);
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("bichocoin_email");
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleEmailSubmit = (e: string, code: string) => {
        setEmail(e);
        setPromoCode(code);
        localStorage.setItem("bichocoin_email", e);
    };

    const buildMemo = () => {
        const core = `stf${selected}${email}`;
        return promoCode ? `${promoCode}${core}` : core;
    };

    const handleClose = () => {
        setShowQR(false);
        setSelected(null);
    };

    return (
        <div className="min-h-screen bg-background transition-colors p-4 pb-20">
            <EmailModal open={!email} onSubmit={handleEmailSubmit} />

            {email && (
                <div className="max-w-lg mx-auto relative mt-6">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/politica")}
                        className="absolute -top-10 left-0 text-muted-foreground z-10"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                    </Button>

                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-display font-bold text-foreground flex items-center justify-center gap-2">
                            <Scale className="w-6 h-6 text-primary" />
                            Apostas: STF
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">Quem será o primeiro a sair?</p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                            <Info className="w-4 h-4" />
                            Como Apostar no STF
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                            <strong>Regra de Vitória:</strong> Assim que o primeiro Ministro sair do cargo (independente do ocorrido),
                            todos os que apostaram nele levarão o prêmio. O valor a ser recebido será referente à arrecadação das apostas
                            de todos os jogadores, onde este valor será rateado entre os ganhadores e subtraído da taxa de administração.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {stfMinisters.map((minister) => (
                            <button
                                key={minister.id}
                                onClick={() => setSelected(selected === minister.id ? null : minister.id)}
                                className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border shadow-sm transition-all focus:outline-none ${selected === minister.id
                                    ? "bg-primary/5 border-primary scale-105 shadow-primary/20 ring-1 ring-primary"
                                    : "bg-card border-border hover:border-primary/50"
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 overflow-hidden ${selected === minister.id ? 'border-primary bg-primary/10 text-primary' : 'border-background bg-muted text-muted-foreground/50 shadow-inner'}`}>
                                    <Scale className="w-5 h-5" />
                                </div>
                                <div className="text-center">
                                    <div className={`text-xs font-black mb-0.5 ${selected === minister.id ? 'text-primary' : 'text-muted-foreground'}`}>
                                        #{minister.id}
                                    </div>
                                    <h3 className="text-[11px] font-bold leading-tight">{minister.name}</h3>
                                    {minister.role && (
                                        <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight opacity-80">{minister.role}</p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {selected && (
                        <div className="sticky bottom-4 z-20 mt-8 fade-in-up flex justify-center w-full">
                            <Button onClick={() => setShowQR(true)} className="w-[80%] text-xl font-bold shadow-xl py-6" size="lg">
                                Apostar R$10
                            </Button>
                        </div>
                    )}

                    {showQR && (
                        <QRCodeModal
                            open={showQR}
                            onClose={handleClose}
                            memoText={buildMemo()}
                            amount={10}
                            gameId={`stf${selected}`}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default StfBet;
