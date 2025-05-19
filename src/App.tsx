
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Destination from "./pages/Destination";
import Experience from "./pages/Experience";
import Booking from "./pages/Booking";
import Destinos from "./pages/Destinos";
import Experiencias from "./pages/Experiencias";
import ReservarAhora from "./pages/ReservarAhora";
import Servicios from "./pages/Servicios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinos />} />
          <Route path="/destinations/:country" element={<Destination />} />
          <Route path="/experiences" element={<Experiencias />} />
          <Route path="/experiences/:id" element={<Experience />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservar" element={<ReservarAhora />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
