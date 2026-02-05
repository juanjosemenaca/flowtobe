import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const Destinos = () => {
  const { t } = useTranslation();

  const destinationCards = [
    {
      id: 1,
      image: "/general/people-exercising-practicing-sports-with-use-foam-roller.jpg",
      link: "/destinations/bali"
    },
    {
      id: 2,
      image: "/general/kickboxers-sparring-thailand.png",
      link: "/destinations/thailand"
    }
    // Vietnam oculto temporalmente
    // {
    //   id: 3,
    //   image: "/rotating/templo-de-besakih-en-bali-indonesia.jpg",
    //   link: "/destinations/vietnam"
    // }
  ];

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

  const DestinationCard = ({ id, image, link }: { 
    id: number;
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
          <h3 className="text-2xl font-serif mb-1">{getDestinationTitle(id)}</h3>
          <p className="text-sm opacity-90 mb-3">{getDestinationDescription(id)}</p>
          <Link to={link}>
            <Button variant="white" size="sm" className="">
              {t('destinations.exploreButton')} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('destinations.title')}
        description={t('destinations.subtitle')}
        keywords="destinos Asia, viajes Japón, turismo Tailandia, Vietnam viajes, India turismo, Indonesia viajes, China turismo, Corea del Sur viajes, Myanmar turismo, Malasia viajes"
        canonical="/destinations"
      />
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
            <h1 className="text-5xl md:text-7xl font-serif mb-4">{t('destinations.title')}</h1>
            {t('destinations.subtitle') && (
              <p className="text-xl md:text-2xl mb-6 max-w-3xl">
                {t('destinations.subtitle')}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
              {t('destinations.discover.title')}
            </h2>
            <p className="text-travel-sage text-lg">
              {t('destinations.discover.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {destinationCards.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                image={destination.image}
                link={destination.link}
              />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-travel-sage text-lg mb-6 max-w-3xl mx-auto">
              {t('destinations.custom.description')}
            </p>
            <Link to="/contact">
              <Button className="bg-travel-teal hover:bg-travel-terracotta text-white px-8">
                {t('destinations.custom.cta')} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-6">
                {t('destinations.travelTips.title')}
              </h2>
              <ul className="space-y-4">
                {(t('destinations.travelTips.tips', { returnObjects: true }) as string[]).map((tip: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                    <p className="text-travel-sage">{tip}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/blog" className="text-travel-teal hover:text-travel-terracotta font-medium">
                  {t('destinations.travelTips.moreInfo')} <ArrowRight className="inline ml-2" size={16} />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/general/travel-tips.jpg" 
                alt="Travel Tips" 
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
