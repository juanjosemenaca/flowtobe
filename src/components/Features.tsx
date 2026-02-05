import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t('home.features.authentic.title'),
      description: t('home.features.authentic.description')
    },
    {
      id: 2,
      title: t('home.features.expert.title'),
      description: t('home.features.expert.description')
    },
    {
      id: 3,
      title: t('home.features.sustainable.title'),
      description: t('home.features.sustainable.description')
    },
    {
      id: 4,
      title: t('home.features.personalized.title'),
      description: t('home.features.personalized.description')
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-travel-dark">
          {t('home.features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 rounded-full bg-travel-teal flex items-center justify-center">
                <span className="text-white text-2xl font-serif">{feature.id}</span>
              </div>
              <h3 className="text-xl font-serif mb-2 text-travel-dark">{feature.title}</h3>
              <p className="text-travel-sage">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
