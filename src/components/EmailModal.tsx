import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onSubmit: (email: string, promoCode: string) => void;
}

const EmailModal = ({ open, onSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("bichocoin_email");
    const savedPromo = localStorage.getItem("bichocoin_promo");
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedPromo) {
      setPromoCode(savedPromo);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidEmail = email.includes("@") && email.includes(".");
    const isValidPromo = promoCode === "" || /^[A-Za-z]{3}$/.test(promoCode);

    if (isValidEmail && isValidPromo) {
      localStorage.setItem("bichocoin_email", email);
      localStorage.setItem("bichocoin_promo", promoCode.toUpperCase());
      onSubmit(email, promoCode.toUpperCase());
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-sm [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl">🎲 BichoCoin<span className="text-xs">.com</span></DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 flex flex-col items-center">
            <label className="text-xs text-muted-foreground font-medium w-full text-center">Código Promocional</label>
            <Input
              type="text"
              placeholder=""
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 3))}
              maxLength={3}
              className="text-center text-lg font-mono font-bold tracking-widest uppercase w-24"
            />
            {promoCode.length > 0 && promoCode.length < 3 && (
              <p className="text-xs text-destructive text-center w-full">Digite exatamente 3 letras</p>
            )}
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <label className="text-sm text-foreground text-center font-medium">Informe seus dados para receber o seu prêmio</label>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full font-display text-lg"
            size="lg"
            disabled={!email.includes("@") || !email.includes(".") || (promoCode.length > 0 && promoCode.length < 3)}
          >
            Entrar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
