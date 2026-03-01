import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, Wallet } from "lucide-react";
import { bichoQRCodes, lotteryQRCodes } from "@/data/qrCodes";

interface Props {
  open: boolean;
  onClose: () => void;
  memoText: string;
  amount: number;
  gameId?: string;
  bichoCategory?: string;
  customTitle?: string;
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

const QRCodeModal = ({ open, onClose, memoText, amount, gameId = "bicho", bichoCategory, customTitle }: Props) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedBet, setCopiedBet] = useState(false);

  const qrConfig = (gameId === "bicho" || gameId === "dragaodasorte" || gameId === "worldcup")
    ? (bichoQRCodes as any)[amount]
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

  const handleOpenWallet = (e: React.MouseEvent) => {
    if (!qrConfig) return;

    const lnUrl = `lightning:${qrConfig.copyCode}`;

    // IMPORTANTE: Em alguns navegadores mobile, o window.location.href direto
    // pode causar erro de "Página não encontrada" se o app não responder rápido.
    // Usar um link invisível ou window.open pode ser mais seguro.

    // Tenta abrir em uma nova aba/janela para evitar que a página atual caia em erro
    window.open(lnUrl, '_self');

    // Se ainda der erro de página, o problema pode ser o navegador tentando carregar o protocolo.
    // O fallback é sempre o Copiar QR que já está na tela.
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-lg flex items-center justify-center gap-2">
            <Wallet className="w-5 h-5 text-yellow-500" />
            Pagamento Privado
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

          {customTitle && (
            <p className="text-center text-sm font-bold text-primary">
              {customTitle} — R${amount}
            </p>
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

          <div className="grid grid-cols-1 gap-2">
            <a
              href={`lightning:${qrConfig?.copyCode || ""}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-black border-none shadow-lg animate-pulse hover:animate-none group rounded-md flex items-center justify-center no-underline transition-all active:scale-95"
            >
              <Wallet className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              ABRIR NA CARTEIRA
            </a>

            <div className="flex gap-2">
              <Button
                className="flex-1 text-[10px] bg-blue-600 hover:bg-blue-700 text-white border-none h-9"
                onClick={handleCopyCode}
              >
                {copiedCode ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
                {copiedCode ? "Copiado!" : "Copiar QR"}
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-[10px] h-9"
                onClick={handleCopyBet}
              >
                {copiedBet ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
                {copiedBet ? "Copiado!" : "Copiar Memo"}
              </Button>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-2 rounded text-[9px] text-center text-yellow-600 dark:text-yellow-400">
            Dica: Se o seu navegador der erro ao abrir o app, use o botão **"Copiar QR"** e cole manualmente na sua carteira. Isso acontece em conexões locais sem SSL.
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
