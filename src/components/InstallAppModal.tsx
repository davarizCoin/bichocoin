import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CopyPlus, Compass, Smartphone } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
}

const InstallAppModal = ({ open, onClose }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-sm rounded-[24px]">
                <DialogHeader>
                    <DialogTitle className="text-center font-display text-xl mb-2 flex items-center justify-center gap-2">
                        <Smartphone className="w-6 h-6" /> Instalar Bicho Coin
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-2">
                    <div className="bg-muted p-4 rounded-xl text-sm text-foreground/90 font-medium text-center">
                        A Apple não permite o download direto de aplicativos de apostas na App Store. Mas instale nosso App nativo gratuitamente em 2 passos:
                    </div>

                    <ul className="space-y-5">
                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                                <Compass className="w-4 h-4" />
                            </div>
                            <p className="text-sm leading-tight mt-1">
                                <strong>1.</strong> Toque no ícone azul de <strong>Compartilhar</strong> na barra inferior do seu Safari.
                            </p>
                        </li>

                        <li className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                                <CopyPlus className="w-4 h-4" />
                            </div>
                            <p className="text-sm leading-tight mt-1">
                                <strong>2.</strong> Role o menu e escolha <strong>"Adicionar à Tela de Início"</strong> (Add to Home Screen). Pronto!
                            </p>
                        </li>
                    </ul>

                    <div className="pt-2 text-center text-xs text-muted-foreground italic">
                        O Aplicativo Bicho Coin aparecerá junto com seus outros apps!
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InstallAppModal;
