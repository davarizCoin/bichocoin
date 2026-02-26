import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
