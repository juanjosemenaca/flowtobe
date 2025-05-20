import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DestinationCard = ({ title, description, image, link }: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg group">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{description}</p>
        <Link to={link}>
          <Button variant="white">
            {t('destinations.exploreButton')} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Destinations = () => {
  const { t } = useTranslation();

  const destinationCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      link: "/destinations/bali"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      link: "/destinations/thailand"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      link: "/destinations/vietnam"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      link: "/destinations/japan"
    }
  ];

  const getDestinationTitle = (id: number) => {
    switch (id) {
      case 1:
        return t('destinations.categories.bali.title');
      case 2:
        return t('destinations.categories.thailand.title');
      case 3:
        return t('destinations.categories.vietnam.title');
      case 4:
        return t('destinations.categories.japan.title');
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
      case 4:
        return t('destinations.categories.japan.description');
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-travel-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">{t('destinations.title')}</h2>
          <p className="text-travel-sage text-xl max-w-2xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationCards.map((dest) => (
            <DestinationCard
              key={dest.id}
              title={getDestinationTitle(dest.id)}
              description={getDestinationDescription(dest.id)}
              image={dest.image}
              link={dest.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-8">
              {t('destinations.viewAllButton')} <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
