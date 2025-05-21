import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ title, description, image, color, link }: {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}) => {
  return (
    <Link to={link} className="group">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={`absolute inset-0 ${color} opacity-80`} />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <h3 className="text-xl font-serif mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const Experiences = () => {
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
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">{t('experiences.title')}</h2>
          <p className="text-travel-sage text-xl max-w-2xl mx-auto">
            {t('experiences.subtitle')}
          </p>
        </div>

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
  );
};

export default Experiences;
