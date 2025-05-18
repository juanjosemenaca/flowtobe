import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <Button variant="white" size="sm">
            Explorar <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="py-20 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">Destinos Populares</h2>
          <p className="text-travel-sage text-xl max-w-2xl mx-auto">
            Explora los lugares más buscados de Asia, desde templos antiguos hasta playas vírgenes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button className="bg-travel-teal hover:bg-travel-terracotta text-white px-8">
              Ver Todos los Destinos <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
