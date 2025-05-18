import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Clock, Star, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Datos simulados de destinos
const destinations = {
  japan: {
    name: "Japón",
    title: "Tierra del Sol Naciente",
    intro: "Descubre la fascinante mezcla de tradición y vanguardia en Japón",
    description: "Japón es un país de contrastes, donde los rascacielos ultramodernos conviven con antiguos templos y jardines zen. Desde la vibrante metrópolis de Tokio hasta la serena belleza de Kioto, cada rincón de Japón ofrece una experiencia única y memorable. Experimenta la legendaria hospitalidad japonesa, la exquisita gastronomía y las tradiciones centenarias que hacen de este destino un lugar verdaderamente especial.",
    image: "https://images.unsplash.com/photo-1492107376256-4026437926cd",
    highlights: [
      "Explorar los templos históricos de Kioto",
      "Admirar el Monte Fuji desde el Lago Kawaguchi",
      "Pasear por los bulliciosos distritos de Tokio",
      "Experimentar la serenidad de los jardines zen",
      "Degustar auténtica cocina kaiseki"
    ],
    tours: [
      {
        id: 1,
        title: "Esencias de Japón",
        days: 10,
        image: "https://images.unsplash.com/photo-1580639613257-5b1a20415f67",
        price: "2,950",
        rating: 4.9
      },
      {
        id: 2,
        title: "Japón Imperial",
        days: 14,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        price: "3,800",
        rating: 4.8
      },
      {
        id: 3,
        title: "Cerezos en Flor",
        days: 12,
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
        price: "3,200",
        rating: 5.0
      }
    ],
    bestTime: "Primavera (marzo-mayo) para los cerezos en flor y otoño (octubre-noviembre) para el colorido follaje.",
    currency: "Yen japonés (JPY)",
    language: "Japonés (servicios disponibles en español)"
  },
  thailand: {
    name: "Tailandia",
    title: "El País de la Sonrisa",
    intro: "Sumérgete en la riqueza cultural y natural de Tailandia",
    description: "Tailandia cautiva a los viajeros con sus templos ornamentados, playas paradisíacas y una de las cocinas más celebradas del mundo. Desde los santuarios budistas hasta las bulliciosas calles de Bangkok y las islas tropicales de aguas cristalinas, Tailandia ofrece experiencias para todos los gustos. El cálido carácter de su gente, conocida como 'la tierra de la sonrisa', hará que te sientas bienvenido en cada momento de tu viaje.",
    image: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3",
    highlights: [
      "Visitar los magníficos templos de Bangkok",
      "Explorar las ruinas antiguas de Ayutthaya",
      "Relajarse en las paradisíacas playas de las islas",
      "Interactuar con elefantes en santuarios éticos",
      "Probar la auténtica comida callejera tailandesa"
    ],
    tours: [
      {
        id: 1,
        title: "Tailandia Esencial",
        days: 10,
        image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
        price: "1,950",
        rating: 4.7
      },
      {
        id: 2,
        title: "Islas y Templos",
        days: 14,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
        price: "2,450",
        rating: 4.9
      },
      {
        id: 3,
        title: "Aventura en el Norte",
        days: 8,
        image: "https://images.unsplash.com/photo-1552550018-5253c1b171e1",
        price: "1,600",
        rating: 4.8
      }
    ],
    bestTime: "Noviembre a febrero, cuando el clima es más fresco y menos húmedo.",
    currency: "Baht tailandés (THB)",
    language: "Tailandés (servicios disponibles en español)"
  },
  vietnam: {
    name: "Vietnam",
    title: "La Joya de Indochina",
    intro: "Descubre paisajes impresionantes y un rico patrimonio cultural",
    description: "Vietnam es un país fascinante con una historia milenaria, impresionantes paisajes naturales y una gastronomía única. Desde las montañosas regiones del norte hasta el delta del Mekong en el sur, cada región ofrece sus propias maravillas y tradiciones. La amabilidad de su gente y la belleza de lugares como la Bahía de Halong o las antiguas calles de Hoi An harán que tu viaje a Vietnam sea inolvidable.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    highlights: [
      "Navegar por las aguas esmeralda de la Bahía de Halong",
      "Pasear por el casco antiguo de Hoi An",
      "Explorar los túneles de Cu Chi",
      "Descubrir la vida local en el Delta del Mekong",
      "Disfrutar de la auténtica gastronomía vietnamita"
    ],
    tours: [
      {
        id: 1,
        title: "Vietnam de Norte a Sur",
        days: 12,
        image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1",
        price: "1,850",
        rating: 4.8
      },
      {
        id: 2,
        title: "Maravillas de Vietnam",
        days: 10,
        image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
        price: "1,600",
        rating: 4.7
      },
      {
        id: 3,
        title: "Cultura y Playa",
        days: 14,
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
        price: "2,200",
        rating: 4.9
      }
    ],
    bestTime: "Octubre a abril, evitando la temporada de monzones.",
    currency: "Dong vietnamita (VND)",
    language: "Vietnamita (servicios disponibles en español)"
  }
};

const Destination = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { country } = useParams();
  
  // Destino por defecto si no se encuentra en la lista
  const destination = destinations[country as keyof typeof destinations] || {
    name: "Destino Asiatico",
    title: "Explora Asia",
    intro: "Descubre los tesoros de Asia con nosotros",
    description: "Este destino ofrece experiencias únicas para todos los viajeros. Contáctanos para más información sobre este y otros destinos en Asia.",
    image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
    highlights: [
      "Explorar la cultura local",
      "Disfrutar de la gastronomía",
      "Visitar sitios históricos",
      "Experimentar tradiciones únicas",
      "Conectar con la naturaleza"
    ],
    tours: [],
    bestTime: "Consulta con nuestros especialistas",
    currency: "Consulta con nuestros especialistas",
    language: "Consulta con nuestros especialistas"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">{destination.name}</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl">{destination.title}</p>
            <p className="text-lg max-w-3xl opacity-90">
              {destination.intro}
            </p>
          </div>
        </div>
      </div>
      
      {/* Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-travel-dark mb-6">Descubre {destination.name}</h2>
              <p className="text-travel-sage mb-8 text-lg">
                {destination.description}
              </p>
              
              <h3 className="text-2xl font-serif text-travel-dark mb-4">Destacados</h3>
              <ul className="space-y-3 mb-8">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-travel-terracotta mr-2">•</span>
                    <span className="text-travel-sage">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/booking">
                <Button variant="white" className="border border-gray-300">
                  Planifica tu viaje <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            
            <div className="bg-travel-cream p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-travel-dark mb-4">Información práctica</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-travel-dark mb-2">Mejor época para visitar</h4>
                  <p className="text-travel-sage">{destination.bestTime}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-travel-dark mb-2">Moneda</h4>
                  <p className="text-travel-sage">{destination.currency}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-travel-dark mb-2">Idioma</h4>
                  <p className="text-travel-sage">{destination.language}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tours Section */}
      {destination.tours.length > 0 && (
        <section className="py-16 bg-travel-cream">
          <div className="container">
            <h2 className="text-3xl font-serif text-travel-dark mb-10 text-center">Tours populares en {destination.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.tours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif text-travel-dark">{tour.title}</h3>
                      <div className="flex items-center bg-travel-teal text-white px-2 py-1 rounded text-sm">
                        <Star size={14} className="mr-1" />
                        {tour.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-travel-sage mb-4">
                      <Clock size={16} className="mr-2" />
                      <span>{tour.days} días</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-travel-dark">
                        <span className="text-lg font-bold">${tour.price}</span>
                        <span className="text-travel-sage text-sm ml-1">por persona</span>
                      </div>
                      
                      <Link to="/booking">
                        <Button size="sm" variant="outline" className="border-travel-terracotta text-travel-terracotta hover:bg-travel-terracotta hover:text-white">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif text-travel-dark mb-4">¿Listo para explorar {destination.name}?</h2>
          <p className="text-travel-sage max-w-2xl mx-auto mb-8">
            Nuestros especialistas están disponibles para ayudarte a crear el viaje perfecto a medida para ti
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-8">
                Reservar Ahora <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white px-8">
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destination;
