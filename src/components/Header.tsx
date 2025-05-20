import React, { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.jfif" alt="Flow2Bali Logo" className="h-10 w-10 mr-3 rounded-full object-cover" />
          <h1 className={`text-2xl sm:text-3xl font-serif font-bold ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            FLOW2BALI
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.home')}
          </Link>
          <Link to="/destinations" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.destinations')}
          </Link>
          <Link to="/experiences" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.experiences')}
          </Link>
          <Link to="/servicios" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.services')}
          </Link>
          <Link to="/blog" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.blog')}
          </Link>
          <Link to="/about" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.about')}
          </Link>
          <Link to="/contact" className={`font-medium hover:text-travel-terracotta transition-colors ${isScrolled ? 'text-travel-dark' : 'text-white'}`}>
            {t('nav.contact')}
          </Link>
          <LanguageSelector isScrolled={isScrolled} />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/booking">
            <Button
              className={`bg-travel-terracotta hover:bg-travel-teal text-white items-center gap-2`}
            >
              <MapPin size={18} /> {t('nav.bookNow')}
            </Button>
          </Link>
        </div>

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
              {t('nav.home')}
            </Link>
            <Link 
              to="/destinations" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.destinations')}
            </Link>
            <Link 
              to="/experiences" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.experiences')}
            </Link>
            <Link 
              to="/servicios" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-travel-dark hover:text-travel-terracotta px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="px-2 py-2">
              <LanguageSelector isScrolled={true} />
            </div>
            <Link 
              to="/booking" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button 
                className="bg-travel-terracotta hover:bg-travel-teal text-white w-full mt-2 flex items-center justify-center gap-2"
              >
                <MapPin size={18} /> {t('nav.bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
