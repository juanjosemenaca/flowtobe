
import React, { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl sm:text-3xl font-serif font-bold ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Asia<span className="text-travel-terracotta">Viajes</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Inicio
          </Link>
          <Link to="/destinations" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Destinos
          </Link>
          <Link to="/experiences" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Experiencias
          </Link>
          <Link to="/about" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Sobre Nosotros
          </Link>
          <Link to="/contact" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            Contacto
          </Link>
        </nav>

        <Button
          className={`hidden md:flex bg-travel-terracotta hover:bg-travel-teal text-white items-center gap-2`}
        >
          <MapPin size={18} /> Reservar Ahora
        </Button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-travel-terracotta"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col space-y-3">
            <Link 
              to="/" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/destinations" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinos
            </Link>
            <Link 
              to="/experiences" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experiencias
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button 
              className="bg-travel-terracotta hover:bg-travel-teal text-white w-full mt-2 flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MapPin size={18} /> Reservar Ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
