import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

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
  },
  {
    id: 5,
    title: "Aventuras en la Naturaleza",
    description: "Explora montañas, selvas y ríos",
    image: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084",
    color: "bg-travel-teal",
    link: "/experiences/nature-adventure"
  },
  {
    id: 6,
    title: "Artes y Artesanías",
    description: "Aprende de maestros artesanos locales",
    image: "https://images.unsplash.com/photo-1529631324647-ef64ae1e75f4",
    color: "bg-travel-terracotta",
    link: "/experiences/arts-crafts"
  },
  {
    id: 7,
    title: "Retiros de Bienestar",
    description: "Reconecta con tu cuerpo y mente",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    color: "bg-travel-sage",
    link: "/experiences/wellness"
  },
  {
    id: 8,
    title: "Fotografía y Paisajes",
    description: "Captura la belleza escénica de Asia",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    color: "bg-travel-gold",
    link: "/experiences/photography"
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
          <Button variant="white">
            Saber Más <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Experiencias = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Experiencias Únicas en Asia | FLOW2BALY"
        description="Descubre experiencias auténticas en Asia: inmersión cultural, viajes espirituales, aventuras culinarias, encuentros con la vida silvestre y más. Vive Asia de una manera única con FLOW2BALY."
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
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Experiencias Inolvidables</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl">
              Descubre Asia a través de experiencias auténticas que crean recuerdos para toda la vida
            </p>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
              Vive Asia, no solo la visites
            </h2>
            <p className="text-travel-sage text-lg">
              Nuestras experiencias están diseñadas para sumergirte profundamente en las culturas, 
              tradiciones y paisajes de Asia. Conecta con las comunidades locales, aprende nuevas 
              habilidades y crea memorias que perdurarán más allá de las fotografías.
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
                Experiencia Destacada: Ceremonia del Té Japonesa
              </h2>
              <p className="text-travel-sage mb-6">
                Sumérgete en esta tradición centenaria de la mano de maestros del té en Kyoto. 
                Aprenderás los rituales, simbolismos y la filosofía detrás de esta práctica cultural 
                que encapsula la esencia de la estética japonesa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Duración: 3 horas</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Incluye: Ceremonia completa y degustación de dulces tradicionales</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Ubicación: Templo histórico en Kyoto</p>
                </li>
              </ul>
              <Link to="/experiences/cultural-immersion">
                <Button className="bg-travel-terracotta hover:bg-travel-teal text-white">
                  Reservar esta experiencia <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186" 
                alt="Ceremonia del Té Japonesa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Experiences */}
      <section className="py-16 bg-travel-teal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experiencias a Medida</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            No encuentras exactamente lo que buscas? Nuestros especialistas pueden diseñar 
            experiencias personalizadas según tus intereses, tiempo y presupuesto.
          </p>
          <Link to="/contact">
            <Button variant="white">
              Solicitar experiencia personalizada
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Experiencias;
