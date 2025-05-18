
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-travel-cream">
        <div className="container py-20 text-center">
          <h1 className="text-7xl md:text-9xl font-serif text-travel-teal mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-travel-dark mb-8">¡Ups! Este destino no existe</p>
          <p className="text-travel-sage text-lg mb-10 max-w-md mx-auto">
            La página que estás buscando puede haber sido movida o no existe.
          </p>
          <Link to="/">
            <Button className="bg-travel-terracotta hover:bg-travel-teal text-white text-lg px-8 py-6">
              Regresar a la Página de Inicio
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
