import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { bichoQRCodes, lotteryQRCodes } from "@/data/qrCodes";

interface Props {
  open: boolean;
  onClose: () => void;
  memoText: string;
  amount: number;
  gameId?: string;
  bichoCategory?: string;
}

const bichoMultipliers: Record<string, { label: string; multiplier: number }> = {
  grupo: { label: "Grupo", multiplier: 18 },
  dezena: { label: "Dezena", multiplier: 60 },
  centena: { label: "Centena", multiplier: 600 },
  milhar: { label: "Milhar", multiplier: 6000 },
};

const dragaoMultipliers: Record<string, { label: string; multiplier: number }> = {
  grupo: { label: "Grupo (Dragão)", multiplier: 8 },
  dezena: { label: "Dezena (Dragão)", multiplier: 60 },
};

const QRCodeModal = ({ open, onClose, memoText, amount, gameId = "bicho", bichoCategory }: Props) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedBet, setCopiedBet] = useState(false);

  const qrConfig = (gameId === "bicho" || gameId === "dragaodasorte")
    ? bichoQRCodes[amount]
    : lotteryQRCodes[gameId];

  let betInfo = null;
  if (gameId === "bicho" && bichoCategory) {
    betInfo = bichoMultipliers[bichoCategory];
  } else if (gameId === "dragaodasorte" && bichoCategory) {
    betInfo = dragaoMultipliers[bichoCategory];
  }

  const potentialWin = betInfo ? amount * betInfo.multiplier : 0;

  const handleCopyCode = async () => {
    if (qrConfig) {
      await navigator.clipboard.writeText(qrConfig.copyCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleCopyBet = async () => {
    await navigator.clipboard.writeText(memoText);
    setCopiedBet(true);
    setTimeout(() => setCopiedBet(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-lg">
            ⚡ Bitcoin Lightning Network
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {qrConfig && (
            <div className="flex justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrConfig.copyCode)}`}
                alt="QR Code"
                className="w-48 h-48 rounded-lg border border-border"
              />
            </div>
          )}

          {betInfo && (
            <p className="text-center text-xs text-muted-foreground">
              {betInfo.label} — Se acertar: <span className="font-bold text-gold">R${potentialWin}</span> ({betInfo.multiplier}x)
            </p>
          )}

          <div className="bg-muted rounded-lg p-3 space-y-2">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Memo</p>
            <p className="text-xs font-mono font-bold text-foreground break-all">{memoText}</p>
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1 text-xs bg-blue-600 hover:bg-blue-700 text-white border-none"
              onClick={handleCopyCode}
            >
              {copiedCode ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
              {copiedCode ? "Copiado!" : "Copiar QR Code"}
            </Button>
            <Button
              variant="outline"
              className="flex-1 text-xs"
              onClick={handleCopyBet}
            >
              {copiedBet ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
              {copiedBet ? "Copiado!" : "Copiar Aposta"}
            </Button>
          </div>

          <Button variant="ghost" className="w-full text-xs" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
