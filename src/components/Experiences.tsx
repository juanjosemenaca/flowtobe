
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const experienceCategories = [
  {
    id: 1,
    title: "Inmersión Cultural",
    description: "Descubre tradiciones locales auténticas",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    color: "bg-travel-teal",
    link: "/experiences/cultural-immersion"
  },
  {
    id: 2,
    title: "Viajes Espirituales",
    description: "Encuentra paz en templos antiguos",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    color: "bg-travel-terracotta",
    link: "/experiences/spiritual-journey"
  },
  {
    id: 3,
    title: "Aventuras Culinarias",
    description: "Saborea auténticos sabores asiáticos",
    image: "https://images.unsplash.com/photo-1464093515883-ec948246accb",
    color: "bg-travel-sage",
    link: "/experiences/culinary-adventure"
  },
  {
    id: 4,
    title: "Encuentros con la Vida Silvestre",
    description: "Conecta con las maravillas naturales",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    color: "bg-travel-gold",
    link: "/experiences/wildlife"
  }
];

const ExperienceCard = ({ title, description, image, color, link }: {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}) => {
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
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-travel-dark">
            Saber Más <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">Experiencias Inolvidables</h2>
            <p className="text-travel-sage text-xl max-w-2xl">
              Crea recuerdos que duran toda la vida con nuestras experiencias de viaje seleccionadas
            </p>
          </div>
          <Link to="/experiences" className="mt-6 md:mt-0">
            <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-8">
              Todas las Experiencias <ArrowRight className="ml-2" />
            </Button>
          </Link>
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
