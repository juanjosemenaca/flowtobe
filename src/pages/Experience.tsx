import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Clock, MapPin, Heart, Share2, Check, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Datos simulados de experiencias
const experiences = {
  "cultural-immersion": {
    id: "cultural-immersion",
    title: "Inmersión Cultural en Kyoto",
    category: "Inmersión Cultural",
    location: "Kyoto, Japón",
    duration: "1 día",
    groupSize: "Máximo 8 personas",
    price: "120",
    rating: 4.9,
    reviewCount: 28,
    description: "Sumérgete en las tradiciones japonesas con esta experiencia cultural inmersiva en Kyoto. Aprenderás sobre la ceremonia del té, vestirás un kimono tradicional y participarás en una clase de caligrafía japonesa, todo guiado por maestros locales que compartirán su profundo conocimiento de estas antiguas artes.",
    longDescription: "Esta experiencia única te permite adentrarte en las tradiciones más emblemáticas de Japón en la histórica ciudad de Kyoto. Comenzarás el día en una auténtica casa de té, donde un maestro te guiará a través de los significados y rituales de la ceremonia del té japonesa, seguido de una degustación de matcha y dulces tradicionales. Después, visitarás un estudio de kimono donde expertos te ayudarán a vestir esta prenda tradicional japonesa, aprendiendo sobre sus patrones y significados. Finalmente, participarás en una clase de caligrafía japonesa, donde aprenderás a escribir caracteres kanji con pincel y tinta. Durante toda la experiencia, tu guía compartirá historias y contexto cultural que enriquecerán tu comprensión de las tradiciones japonesas.",
    highlights: [
      "Participa en una auténtica ceremonia del té japonesa",
      "Viste un kimono tradicional con ayuda de expertos",
      "Aprende el arte de la caligrafía japonesa",
      "Disfruta de dulces tradicionales y té matcha",
      "Llévate a casa tu obra de caligrafía como recuerdo"
    ],
    includes: [
      "Guía local experto en cultura japonesa",
      "Todos los materiales para la ceremonia del té y caligrafía",
      "Alquiler de kimono tradicional",
      "Té y dulces tradicionales",
      "Fotografías digitales de tu experiencia"
    ],
    images: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3",
      "https://images.unsplash.com/photo-1533050487297-09b450131914"
    ]
  },
  "spiritual-journey": {
    id: "spiritual-journey",
    title: "Viaje Espiritual en Bali",
    category: "Viajes Espirituales",
    location: "Ubud, Bali, Indonesia",
    duration: "2 días",
    groupSize: "Máximo 6 personas",
    price: "200",
    rating: 4.8,
    reviewCount: 35,
    description: "Conecta con tu ser interior en este viaje espiritual por Ubud, el corazón cultural y espiritual de Bali. Participarás en ceremonias tradicionales, meditaciones guiadas en antiguos templos y conocerás a curanderos locales, todo mientras te sumerges en la rica espiritualidad balinesa.",
    longDescription: "Este viaje de dos días te sumergirá en la profunda espiritualidad de la cultura balinesa. El primer día comenzará con una ceremonia de purificación en el Templo de Agua de Tirta Empul, donde participarás en un ritual de limpieza espiritual en sus sagradas aguas manantiales. Después, visitarás a un curandero local para una consulta personal y aprenderás sobre las prácticas curativas tradicionales. El segundo día incluye una sesión de meditación al amanecer en el antiguo templo de Gunung Kawi, seguida de una clase de yoga en medio de terrazas de arroz. La experiencia concluye con una ceremonia de bendición dirigida por un sacerdote local. A lo largo del viaje, tu guía espiritual te proporcionará contexto cultural y traducción, permitiéndote conectar profundamente con estas antiguas prácticas.",
    highlights: [
      "Ceremonia de purificación en el Templo de Agua de Tirta Empul",
      "Consulta personal con un curandero tradicional balinés",
      "Meditación al amanecer en un templo antiguo",
      "Clase de yoga en las terrazas de arroz de Tegallalang",
      "Ceremonia de bendición tradicional balinesa"
    ],
    includes: [
      "Guía espiritual bilingüe",
      "Transporte privado entre todas las ubicaciones",
      "Ofrendas para ceremonias y rituales",
      "Una comida tradicional balinesa vegetariana",
      "Agua y refrigerios durante todo el viaje"
    ],
    images: [
      "https://images.unsplash.com/photo-1604193919244-5d11aaff0dc5",
      "https://images.unsplash.com/photo-1518156677180-95a2893f3fdb",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
      "https://images.unsplash.com/photo-1511306404405-ad607bd7c601"
    ]
  },
  "culinary-adventure": {
    id: "culinary-adventure",
    title: "Aventura Culinaria en Bangkok",
    category: "Aventuras Culinarias",
    location: "Bangkok, Tailandia",
    duration: "4 horas",
    groupSize: "Máximo 10 personas",
    price: "85",
    rating: 4.9,
    reviewCount: 42,
    description: "Explora los vibrantes sabores de Tailandia en este tour gastronómico por los mercados y calles de Bangkok. Degustarás auténtica comida callejera, aprenderás sobre los ingredientes locales y descubrirás los secretos de la cocina tailandesa de la mano de un chef local.",
    longDescription: "Esta deliciosa aventura culinaria te llevará a través de los animados mercados y calles de Bangkok para descubrir los auténticos sabores de Tailandia. Comenzarás en un mercado local donde tu chef guía te enseñará sobre los ingredientes fundamentales de la cocina tailandesa, desde hierbas aromáticas hasta especias picantes. Luego, visitarás varios puestos de comida callejera cuidadosamente seleccionados, donde probarás platos emblemáticos como Pad Thai, Som Tum (ensalada de papaya verde), Moo Ping (cerdo a la parrilla) y deliciosos postres tailandeses. En cada parada, tu guía explicará la historia y técnicas detrás de cada plato. El tour incluye una visita a un puesto de té local para aprender sobre las tradiciones del té en Tailandia. Esta experiencia no solo es un festín para el paladar sino también una inmersión cultural que te dará una nueva apreciación de la cocina tailandesa.",
    highlights: [
      "Explora un auténtico mercado local con un chef tailandés",
      "Prueba más de 10 especialidades culinarias tailandesas",
      "Aprende sobre ingredientes y técnicas de cocina tradicionales",
      "Visita los mejores puestos de comida callejera de Bangkok",
      "Descubre la historia cultural detrás de los platos icónicos"
    ],
    includes: [
      "Guía chef local experto en gastronomía tailandesa",
      "Todas las degustaciones de comida (equivalente a una comida completa)",
      "Bebidas no alcohólicas",
      "Pequeño souvenir culinario para llevar a casa",
      "Recetas impresas de platos tradicionales tailandeses"
    ],
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
      "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    ]
  }
};

const ExperienceGallery = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <div className="col-span-2 row-span-2">
      <img 
        src={images[0]} 
        alt="Experiencia principal" 
        className="w-full h-full object-cover rounded-lg"
        style={{ height: "400px" }}
      />
    </div>
    {images.slice(1, 4).map((img, idx) => (
      <div key={idx}>
        <img 
          src={img} 
          alt={`Galería de experiencia ${idx + 1}`} 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
);

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  
  // Experiencia por defecto si no se encuentra
  const experience = experiences[id as keyof typeof experiences] || experiences["cultural-immersion"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <div className="text-travel-sage mb-8">
            <Link to="/" className="hover:text-travel-terracotta">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/experiences" className="hover:text-travel-terracotta">Experiencias</Link>
            <span className="mx-2">/</span>
            <span className="text-travel-dark">{experience.title}</span>
          </div>
          
          {/* Title Section */}
          <div className="mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-block bg-travel-terracotta/10 text-travel-terracotta px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {experience.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-travel-dark">{experience.title}</h1>
              </div>
              
              <div className="flex space-x-3">
                <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-100">
                  <Heart size={20} className="text-travel-terracotta" />
                </button>
                <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-100">
                  <Share2 size={20} className="text-travel-dark" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center text-travel-sage mb-2">
              <MapPin size={18} className="mr-2" />
              <span>{experience.location}</span>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center text-travel-sage">
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>Duración: {experience.duration}</span>
              </div>
              <div className="flex items-center">
                <Users size={18} className="mr-2" />
                <span>Grupo: {experience.groupSize}</span>
              </div>
              <div className="flex items-center">
                <Star size={18} className="mr-2 text-yellow-500" />
                <span>{experience.rating} ({experience.reviewCount} reseñas)</span>
              </div>
            </div>
          </div>
          
          {/* Gallery */}
          <ExperienceGallery images={experience.images} />
          
          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-serif text-travel-dark mb-4">Sobre esta experiencia</h2>
                <p className="text-travel-sage mb-6">
                  {experience.longDescription}
                </p>
              </section>
              
              {/* Highlights */}
              <section className="mb-12">
                <h2 className="text-2xl font-serif text-travel-dark mb-4">Destacados</h2>
                <ul className="space-y-3">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-travel-terracotta mt-1 mr-3 flex-shrink-0" />
                      <span className="text-travel-sage">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              {/* Includes */}
              <section className="mb-12">
                <h2 className="text-2xl font-serif text-travel-dark mb-4">Qué incluye</h2>
                <ul className="space-y-3">
                  {experience.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-travel-teal mt-1 mr-3 flex-shrink-0" />
                      <span className="text-travel-sage">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              {/* Important Info */}
              <section>
                <h2 className="text-2xl font-serif text-travel-dark mb-4">Información importante</h2>
                <div className="bg-travel-cream p-6 rounded-lg">
                  <ul className="space-y-4 text-travel-sage">
                    <li className="flex items-start">
                      <span className="text-travel-terracotta font-bold mr-2">•</span>
                      <span>Reserva con al menos 48 horas de antelación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-travel-terracotta font-bold mr-2">•</span>
                      <span>Se requiere un mínimo de 2 participantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-travel-terracotta font-bold mr-2">•</span>
                      <span>Los recorridos operan en todas las condiciones climáticas; vístete apropiadamente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-travel-terracotta font-bold mr-2">•</span>
                      <span>Avisa de cualquier restricción dietética o alergia al momento de la reserva</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            
            {/* Booking Card */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 sticky top-24">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-travel-dark">${experience.price}</span>
                  <span className="text-travel-sage"> / por persona</span>
                </div>
                
                <div className="mb-6">
                  <label className="block text-travel-dark mb-2">Fecha</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 rounded-md p-2 text-travel-dark"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-travel-dark mb-2">Número de personas</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 text-travel-dark">
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6+ personas</option>
                  </select>
                </div>
                
                <Link to="/booking" className="block w-full">
                  <Button className="w-full bg-travel-terracotta hover:bg-travel-teal text-white">
                    Reservar ahora
                  </Button>
                </Link>
                
                <Link to="/contact" className="block w-full mt-3">
                  <Button className="w-full" variant="outline">
                    Solicitar información
                  </Button>
                </Link>
                
                <p className="text-xs text-travel-sage text-center mt-4">
                  Sin compromiso - Cancelación gratuita hasta 7 días antes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Experience;
