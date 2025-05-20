import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useScrollToTop } from "./hooks/useScrollToTop";
import { initGA, pageview } from './lib/analytics';
import { measurePerformance } from './lib/performance';
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

// Initialize Google Analytics
initGA();

// Initialize performance monitoring
measurePerformance();

// ScrollToTop component that uses the hook
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
