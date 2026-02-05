import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DestinationCard = ({ id, image, link }: { 
  id: number;
  image: string;
  link: string;
}) => {
  const { t } = useTranslation();

  const getDestinationTitle = (id: number) => {
    switch (id) {
      case 1:
        return t('destinations.categories.bali.title');
      case 2:
        return t('destinations.categories.thailand.title');
      case 3:
        return t('destinations.categories.vietnam.title');
      default:
        return '';
    }
  };

  const getDestinationDescription = (id: number) => {
    switch (id) {
      case 1:
        return t('destinations.categories.bali.description');
      case 2:
        return t('destinations.categories.thailand.description');
      case 3:
        return t('destinations.categories.vietnam.description');
      default:
        return '';
    }
  };

  return (
    <Link to={link} className="block">
      <div className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-serif mb-1">{getDestinationTitle(id)}</h3>
          <p className="text-sm opacity-90 mb-3">{getDestinationDescription(id)}</p>
        </div>
      </div>
    </Link>
  );
};

const Destinations = () => {
  const { t } = useTranslation();

  const destinationCards = [
    {
      id: 1,
      image: "/general/people-exercising-practicing-sports-with-use-foam-roller.jpg",
      link: "/contact?experience=bali"
    },
    {
      id: 2,
      image: "/general/kickboxers-sparring-thailand.png",
      link: "/contact?experience=thailand"
    }
    // Vietnam oculto temporalmente
    // {
    //   id: 3,
    //   image: "/rotating/templo-de-besakih-en-bali-indonesia.jpg",
    //   link: "/destinations/vietnam"
    // }
  ];

  return (
    <section className="py-16 bg-travel-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            {t('home.destinations.title')}
          </h2>
          {t('home.destinations.subtitle') && (
            <p className="text-travel-sage text-lg">
              {t('home.destinations.subtitle')}
            </p>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {destinationCards.map((destination) => (
            <div key={destination.id} className="w-full md:w-[calc(50%-1rem)] max-w-md">
              <DestinationCard
                id={destination.id}
                image={destination.image}
                link={destination.link}
              />
            </div>
          ))}
        </div>
        
        {/* Botón "Ver todos los destinos" oculto temporalmente */}
        {/* <div className="text-center mt-12">
          <Link to="/destinations">
            <Button className="bg-travel-teal hover:bg-travel-terracotta text-white px-8">
              {t('home.destinations.viewAll')} <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Destinations;
