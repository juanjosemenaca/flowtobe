
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, Compass, Globe, HeartHandshake, Shield, Clock } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

const ServicesHero = () => {
  return (
    <section className="relative pt-24 pb-20 bg-travel-teal">
      <div className="absolute inset-0 bg-travel-teal opacity-90"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Diseñamos experiencias de viaje personalizadas que combinan aventura, cultura y relax para crear momentos inolvidables en Asia.
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

const services = [
  {
    icon: Compass,
    title: "Itinerarios Personalizados",
    description: "Creamos viajes a medida según tus intereses, tiempo disponible y presupuesto. Cada detalle está pensado para ti."
  },
  {
    icon: Users,
    title: "Guías Locales Expertos",
    description: "Nuestros guías son nativos con amplio conocimiento de la cultura, historia y secretos locales de cada destino."
  },
  {
    icon: Globe,
    title: "Destinos Exclusivos",
    description: "Te llevamos a lugares auténticos fuera del circuito turístico tradicional para vivir experiencias únicas."
  },
  {
    icon: HeartHandshake,
    title: "Turismo Responsable",
    description: "Promovemos prácticas sostenibles que respetan las comunidades locales y el medio ambiente."
  },
  {
    icon: Shield,
    title: "Asistencia 24/7",
    description: "Contamos con un equipo disponible las 24 horas para asistirte en cualquier momento de tu viaje."
  },
  {
    icon: Clock,
    title: "Planificación Sin Estrés",
    description: "Nos encargamos de todos los detalles logísticos para que solo te preocupes por disfrutar."
  }
];

const ServiceFeatures = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            Todo lo que Ofrecemos
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            Nuestros servicios están diseñados para brindarte una experiencia completa y sin preocupaciones
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
  const steps = [
    {
      number: 1,
      title: "Consulta Inicial",
      description: "Conversamos sobre tus preferencias, intereses y expectativas para tu viaje a Asia."
    },
    {
      number: 2,
      title: "Propuesta Personalizada",
      description: "Diseñamos un itinerario a medida con opciones que se ajusten a tus deseos."
    },
    {
      number: 3,
      title: "Ajustes y Confirmación",
      description: "Refinamos los detalles hasta obtener el viaje perfecto y procedemos con la reserva."
    },
    {
      number: 4,
      title: "Soporte Durante el Viaje",
      description: "Te acompañamos durante toda la experiencia con asistencia permanente."
    }
  ];
  
  return (
    <section className="py-16 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            Hacemos que planificar tu viaje sea tan placentero como el viaje mismo
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
  const features = [
    "Alojamiento en hoteles seleccionados",
    "Transporte privado durante todo el recorrido",
    "Guías locales de habla hispana",
    "Entradas a todas las atracciones incluidas",
    "Desayunos y comidas seleccionadas",
    "Experiencias exclusivas con comunidades locales",
    "Asistencia de viaje 24/7",
    "Seguro de viaje básico",
    "Material informativo personalizado",
    "Consulta pre-viaje para preparativos",
    "Soporte para gestión de visados",
    "Recomendaciones personalizadas"
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
            Lo Que Incluye Cada Viaje
          </h2>
          <p className="text-travel-sage text-lg max-w-2xl mx-auto">
            Todos nuestros paquetes incluyen estos servicios básicos para garantizar una experiencia completa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Servicios;
