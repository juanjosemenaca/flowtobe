
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-travel-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-serif font-bold">
                FLOW2BALI
              </h2>
            </Link>
            <p className="text-gray-300 mb-6">
              Descubre las maravillas de Asia con nuestras experiencias de viaje seleccionadas e itinerarios personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-travel-terracotta">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-travel-terracotta">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-travel-terracotta">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Destinos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Blog de Viajes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-lg font-serif mb-6">Destinos Principales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/japan" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Japón
                </Link>
              </li>
              <li>
                <Link to="/destinations/thailand" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Tailandia
                </Link>
              </li>
              <li>
                <Link to="/destinations/vietnam" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Vietnam
                </Link>
              </li>
              <li>
                <Link to="/destinations/india" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  India
                </Link>
              </li>
              <li>
                <Link to="/destinations/indonesia" className="text-gray-300 hover:text-travel-terracotta transition-colors">
                  Indonesia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-travel-terracotta mr-3 mt-1" />
                <p className="text-gray-300">123 Calle Viajera, Singapur 123456</p>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-travel-terracotta mr-3 mt-1" />
                <p className="text-gray-300">+65 1234 5678</p>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="text-travel-terracotta mr-3 mt-1" />
                <p className="text-gray-300">info@flow2bali.com</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FLOW2BALI. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-travel-terracotta text-sm">
              Política de Privacidad
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-travel-terracotta text-sm">
              Términos de Servicio
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-travel-terracotta text-sm">
              Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
