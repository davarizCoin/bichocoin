import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Politica from "./pages/Politica";
import StfBet from "./pages/StfBet";
import Sports from "./pages/Sports";
import Football from "./pages/Football";
import WorldCup from "./pages/WorldCup";
import GroupMatches from "./pages/GroupMatches";
import Basketball from "./pages/Basketball";
import Tennis from "./pages/Tennis";
import Fight from "./pages/Fight";
import Motorsport from "./pages/Motorsport";
import Volleyball from "./pages/Volleyball";
import Esports from "./pages/Esports";
import USSports from "./pages/USSports";
import OtherSports from "./pages/OtherSports";
import NotFound from "./pages/NotFound";
import InternationalLotteries from "./pages/InternationalLotteries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/politica/stf" element={<StfBet />} />
            <Route path="/esportes" element={<Sports />} />
            <Route path="/esportes/futebol" element={<Football />} />
            <Route path="/esportes/futebol/copa-do-mundo" element={<WorldCup />} />
            <Route path="/esportes/futebol/copa-do-mundo/:groupSlug" element={<GroupMatches />} />
            <Route path="/esportes/basquete" element={<Basketball />} />
            <Route path="/esportes/tenis" element={<Tennis />} />
            <Route path="/esportes/lutas" element={<Fight />} />
            <Route path="/esportes/motor" element={<Motorsport />} />
            <Route path="/esportes/volei" element={<Volleyball />} />
            <Route path="/esportes/esports" element={<Esports />} />
            <Route path="/esportes/americanos" element={<USSports />} />
            <Route path="/esportes/outros" element={<OtherSports />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/loterias-internacionais" element={<InternationalLotteries />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
