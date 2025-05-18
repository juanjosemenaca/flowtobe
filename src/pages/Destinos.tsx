import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const destinationCards = [
  {
    id: 1,
    name: "Japón",
    description: "Tierra de tecnología y tradición",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    link: "/destinations/japan"
  },
  {
    id: 2,
    name: "Tailandia",
    description: "Paraíso tropical y templos antiguos",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    link: "/destinations/thailand"
  },
  {
    id: 3,
    name: "Vietnam",
    description: "Rica cultura y paisajes impresionantes",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    link: "/destinations/vietnam"
  },
  {
    id: 4,
    name: "India",
    description: "Culturas vibrantes y viajes espirituales",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    link: "/destinations/india"
  },
  {
    id: 5,
    name: "Indonesia",
    description: "Islas impresionantes y fauna diversa",
    image: "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7",
    link: "/destinations/indonesia"
  },
  {
    id: 6,
    name: "China",
    description: "Historia antigua y maravillas modernas",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    link: "/destinations/china"
  },
  {
    id: 7,
    name: "Corea del Sur",
    description: "Modernidad y tradiciones ancestrales",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451",
    link: "/destinations/korea"
  },
  {
    id: 8,
    name: "Myanmar",
    description: "La tierra de pagodas doradas",
    image: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c",
    link: "/destinations/myanmar"
  },
  {
    id: 9,
    name: "Malasia",
    description: "Mezcla de culturas y selvas tropicales",
    image: "https://images.unsplash.com/photo-1518439179742-a38769570499",
    link: "/destinations/malaysia"
  }
];

const DestinationCard = ({ name, description, image, link }: { 
  name: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <h3 className="text-2xl font-serif mb-1">{name}</h3>
        <p className="text-sm opacity-90 mb-3">{description}</p>
        <Link to={link}>
          <Button variant="white" size="sm" className="">
            Explorar <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Destinos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464093515883-ec948246accb)` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Destinos Asiáticos</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl">
              Explora la diversidad de culturas, paisajes y experiencias que Asia tiene que ofrecer
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
              Descubre el encanto de Asia
            </h2>
            <p className="text-travel-sage text-lg">
              Desde las majestuosas montañas del Himalaya hasta las playas paradisíacas del sudeste 
              asiático, nuestros destinos ofrecen experiencias inolvidables para todo tipo de viajeros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {destinationCards.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                description={destination.description}
                image={destination.image}
                link={destination.link}
              />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-travel-sage text-lg mb-6 max-w-3xl mx-auto">
              ¿No encuentras lo que buscas? Contáctanos para diseñar un viaje personalizado a cualquier destino en Asia.
            </p>
            <Link to="/contact">
              <Button className="bg-travel-teal hover:bg-travel-terracotta text-white px-8">
                Consulta personalizada <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-6">
                Consejos para viajar por Asia
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">
                    <span className="font-medium text-travel-dark">Respeta las costumbres locales:</span> Investiga sobre las normas culturales de cada país antes de visitarlo.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">
                    <span className="font-medium text-travel-dark">Vacunas y salud:</span> Consulta con un médico sobre las vacunas recomendadas para cada destino.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">
                    <span className="font-medium text-travel-dark">Temporadas:</span> Infórmate sobre las temporadas de lluvia y festivales importantes que puedan afectar tu viaje.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">
                    <span className="font-medium text-travel-dark">Transporte local:</span> El transporte público varía significativamente entre países; planifica con antelación.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/faq">
                  <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white">
                    Más información para viajeros
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4" 
                alt="Viajero en Asia" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinos;
