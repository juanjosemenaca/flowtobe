import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ title, description, image, color, link }: {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`rounded-lg overflow-hidden group ${color} text-white`}>
      <div className="relative h-[280px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="mb-4 opacity-90">{description}</p>
        <Link to={link}>
          <Button variant="white">
            {t('common.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Experiencias = () => {
  const { t } = useTranslation();

  const experienceCategories = [
    {
      id: 1,
      title: t('experiences.categories.cultural.title'),
      description: t('experiences.categories.cultural.description'),
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      color: "bg-travel-teal",
      link: "/experiences/cultural-immersion"
    },
    {
      id: 2,
      title: t('experiences.categories.spiritual.title'),
      description: t('experiences.categories.spiritual.description'),
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      color: "bg-travel-terracotta",
      link: "/experiences/spiritual-journey"
    },
    {
      id: 3,
      title: t('experiences.categories.culinary.title'),
      description: t('experiences.categories.culinary.description'),
      image: "https://images.unsplash.com/photo-1464093515883-ec948246accb",
      color: "bg-travel-sage",
      link: "/experiences/culinary-adventure"
    },
    {
      id: 4,
      title: t('experiences.categories.wildlife.title'),
      description: t('experiences.categories.wildlife.description'),
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      color: "bg-travel-gold",
      link: "/experiences/wildlife"
    },
    {
      id: 5,
      title: t('experiences.categories.nature.title'),
      description: t('experiences.categories.nature.description'),
      image: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084",
      color: "bg-travel-teal",
      link: "/experiences/nature-adventure"
    },
    {
      id: 6,
      title: t('experiences.categories.arts.title'),
      description: t('experiences.categories.arts.description'),
      image: "https://images.unsplash.com/photo-1529631324647-ef64ae1e75f4",
      color: "bg-travel-terracotta",
      link: "/experiences/arts-crafts"
    },
    {
      id: 7,
      title: t('experiences.categories.wellness.title'),
      description: t('experiences.categories.wellness.description'),
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      color: "bg-travel-sage",
      link: "/experiences/wellness"
    },
    {
      id: 8,
      title: t('experiences.categories.photography.title'),
      description: t('experiences.categories.photography.description'),
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      color: "bg-travel-gold",
      link: "/experiences/photography"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('experiences.title')}
        description={t('experiences.subtitle')}
        keywords="experiencias Asia, inmersión cultural Asia, viajes espirituales Asia, aventuras culinarias Asia, vida silvestre Asia, artesanías Asia, retiros bienestar Asia, fotografía Asia"
        canonical="/experiences"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1604193919244-5d11aaff0dc5)` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">{t('experiences.title')}</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl">
              {t('experiences.subtitle')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
              {t('experiences.liveAsia.title')}
            </h2>
            <p className="text-travel-sage text-lg">
              {t('experiences.liveAsia.description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Experiences Grid */}
      <section className="py-12 bg-travel-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceCategories.map((exp) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                description={exp.description}
                image={exp.image}
                color={exp.color}
                link={exp.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Experience */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-6">
                {t('experiences.featured.title')}
              </h2>
              <p className="text-travel-sage mb-6">
                {t('experiences.featured.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">{t('experiences.featured.duration')}</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">{t('experiences.featured.includes')}</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">{t('experiences.featured.location')}</p>
                </li>
              </ul>
              <Link to="/experiences/cultural-immersion">
                <Button className="bg-travel-terracotta hover:bg-travel-teal text-white">
                  {t('experiences.featured.bookButton')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186" 
                alt={t('experiences.featured.title')} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Experiences */}
      <section className="py-16 bg-travel-teal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('experiences.custom.title')}</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            {t('experiences.custom.description')}
          </p>
          <Link to="/contact">
            <Button variant="white">
              {t('experiences.custom.cta')}
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Experiencias;
