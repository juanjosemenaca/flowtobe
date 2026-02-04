import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, Compass, Globe, HeartHandshake, Shield, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-24 pb-20 bg-travel-teal">
      <div className="absolute inset-0 bg-travel-teal opacity-90"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="mb-6 bg-travel-cream w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-travel-terracotta" />
        </div>
        <h3 className="text-2xl font-serif text-travel-dark mb-4">{title}</h3>
        <p className="text-travel-sage">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServiceFeatures = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Compass,
      title: t('services.cards.customized.title'),
      description: t('services.cards.customized.description')
    },
    {
      icon: Users,
      title: t('services.cards.guides.title'),
      description: t('services.cards.guides.description')
    },
    {
      icon: Globe,
      title: t('services.cards.exclusive.title'),
      description: t('services.cards.exclusive.description')
    },
    {
      icon: HeartHandshake,
      title: t('services.cards.responsible.title'),
      description: t('services.cards.responsible.description')
    },
    {
      icon: Shield,
      title: t('services.cards.support.title'),
      description: t('services.cards.support.description')
    },
    {
      icon: Clock,
      title: t('services.cards.planning.title'),
      description: t('services.cards.planning.description')
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            {t('services.features.title')}
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            {t('services.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceProcess = () => {
  const { t } = useTranslation();
  const steps = [
    {
      number: 1,
      title: t('services.process.steps.consultation.title'),
      description: t('services.process.steps.consultation.description')
    },
    {
      number: 2,
      title: t('services.process.steps.proposal.title'),
      description: t('services.process.steps.proposal.description')
    },
    {
      number: 3,
      title: t('services.process.steps.adjustment.title'),
      description: t('services.process.steps.adjustment.description')
    },
    {
      number: 4,
      title: t('services.process.steps.support.title'),
      description: t('services.process.steps.support.description')
    }
  ];
  
  return (
    <section className="py-16 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            {t('services.process.title')}
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            {t('services.process.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-20 h-20 bg-travel-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif text-travel-dark mb-3">{step.title}</h3>
              <p className="text-travel-sage">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IncludedFeatures = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            {t('services.included.title')}
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            {t('services.included.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t('services.included.features', { returnObjects: true }).map((feature: string, index: number) => (
            <div key={index} className="flex items-start">
              <Check className="text-travel-terracotta mr-3 mt-1 flex-shrink-0" />
              <span className="text-travel-dark">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServiceFeatures />
      <ServiceProcess />
      <IncludedFeatures />
      <Footer />
    </div>
  );
};

export default Servicios;
