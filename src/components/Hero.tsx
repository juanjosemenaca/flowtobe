import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "Experimenta China",
    subtitle: "Descubre maravillas antiguas y obras modernas"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Explora Tailandia",
    subtitle: "Playas paradisíacas y tesoros culturales"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    title: "Viaja a Japón",
    subtitle: "Donde la tradición se encuentra con la innovación"
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Rotating background images */}
      <div className="absolute inset-0">
        {heroImages.map((image) => (
          <div
            key={image.id}
            className="hero-slide absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
              Descubre las Maravillas de Asia
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 opacity-90 animate-fade-up" style={{animationDelay: '0.4s'}}>
              Explora templos antiguos, ciudades bulliciosas y playas vírgenes en los diversos paisajes de Asia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start animate-fade-up" style={{animationDelay: '0.6s'}}>
              <Link to="/destinations">
                <Button className="bg-travel-terracotta hover:bg-travel-teal text-white text-lg px-8 py-6">
                  Explorar Destinos
                </Button>
              </Link>
              <Link to="/experiences">
                <Button variant="white" className="w-56 text-lg px-6 py-6 mx-auto sm:mx-0">
                  Planifica Tu Viaje <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
