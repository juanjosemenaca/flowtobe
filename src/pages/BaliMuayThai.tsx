import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Clock, Star, MapPin, Dumbbell, Trophy, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const BaliMuayThai = () => {
  const { t } = useTranslation();

  const programFeatures = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Entrenamiento Profesional",
      description: "Sesiones diarias con instructores certificados de Muay Thai"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Técnicas Avanzadas",
      description: "Aprende técnicas de combate y defensa personal"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Condicionamiento Físico",
      description: "Mejora tu resistencia y fuerza con ejercicios específicos"
    }
  ];

  const dailySchedule = [
    {
      time: "06:00 - 07:00",
      activity: "Meditación y Yoga"
    },
    {
      time: "07:00 - 08:00",
      activity: "Desayuno Saludable"
    },
    {
      time: "09:00 - 11:00",
      activity: "Entrenamiento Muay Thai"
    },
    {
      time: "11:00 - 14:00",
      activity: "Tiempo Libre / Almuerzo"
    },
    {
      time: "14:00 - 16:00",
      activity: "Técnicas Específicas"
    },
    {
      time: "16:00 - 18:00",
      activity: "Sparring y Combate"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Bali - Yoga y Naturaleza"
        description="Vive una experiencia única de yoga y conexión con la naturaleza en Bali. Combina la práctica de yoga con la belleza natural de la isla."
        keywords="Yoga Bali, naturaleza Bali, retiros yoga, bienestar Bali, experiencias naturales Bali"
        canonical="/bali-muay-thai"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/general/people-exercising-practicing-sports-with-use-foam-roller.jpg)` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Bali - Yoga y Naturaleza</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Combina Yoga con naturaleza en un paraiso de paz y calma
            </p>
            <Link to="/booking">
              <Button className="bg-travel-terracotta hover:bg-travel-teal text-white text-lg px-8 py-6">
                Reserva tu Entrenamiento <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Programa de Entrenamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-travel-terracotta mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                <p className="text-travel-sage">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Horario Diario</h2>
          <div className="max-w-3xl mx-auto">
            {dailySchedule.map((item, index) => (
              <div key={index} className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-32 text-travel-terracotta font-medium">
                  {item.time}
                </div>
                <div className="flex-1 text-travel-sage">
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Incluye en el Paquete</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Alojamiento en resort de lujo</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">3 comidas saludables al día</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Equipamiento de entrenamiento</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Transporte desde/hacia el aeropuerto</p>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-terracotta font-bold text-lg mr-2">•</span>
                  <p className="text-travel-sage">Excursiones culturales los fines de semana</p>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/general/people-exercising-practicing-sports-with-use-foam-roller.jpg" 
                alt="Bali - Yoga y Naturaleza" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif text-travel-dark mb-4">¿Listo para tu Transformación?</h2>
          <p className="text-travel-sage max-w-2xl mx-auto mb-8">
            Únete a nuestro programa de entrenamiento y descubre tu potencial en el arte del Muay Thai
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-8">
                Reservar Ahora <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white px-8">
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BaliMuayThai; 