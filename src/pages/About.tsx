import React, { useEffect } from 'react';
import { Briefcase, Users, Heart, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.jfif" alt="FlowToBali Logo" className="h-20 w-20 rounded-full object-cover mr-4" />
            <h1 className="text-4xl md:text-5xl font-serif">Sobre Nosotros</h1>
          </div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Somos expertos en viajes asiáticos comprometidos a crear experiencias auténticas y memorables.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-travel-dark mb-6">Nuestra Historia</h2>
              <p className="text-travel-sage mb-4">
                AsiaViajes comenzó con una simple pasión: compartir la belleza auténtica de Asia con el mundo.
                Fundada en 2010 por un grupo de entusiastas viajeros y expertos locales, nos hemos dedicado 
                a crear itinerarios que van más allá del turismo convencional.
              </p>
              <p className="text-travel-sage mb-4">
                Después de más de una década ofreciendo experiencias excepcionales, nos hemos convertido en 
                especialistas en destinos asiáticos, combinando el conocimiento profundo de la cultura local
                con un servicio personalizado de primera clase.
              </p>
              <p className="text-travel-sage">
                Nuestro equipo multinacional trabaja incansablemente para garantizar que cada viajero viva 
                Asia de manera auténtica, sostenible y transformadora.
              </p>
            </div>
            <div>
              <img 
                src="/rotating/mujer-asiatica-recortada-entrenando-en-guantes-de-boxeo-en-la-practica-de-muay-thai.jpg" 
                alt="El equipo de FlowToBali" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-travel-dark mb-4">Nuestros Valores</h2>
            <p className="text-travel-sage max-w-2xl mx-auto">
              Los principios fundamentales que guían cada aspecto de nuestro servicio y operaciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">Pasión</h3>
              <p className="text-travel-sage">
                Nuestra pasión por Asia impulsa todo lo que hacemos, desde la planificación meticulosa hasta el servicio excepcional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">Experiencia</h3>
              <p className="text-travel-sage">
                Décadas de experiencia combinada nos permiten ofrecer los mejores consejos y soluciones para cada viajero.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">Sostenibilidad</h3>
              <p className="text-travel-sage">
                Nos comprometemos a promover prácticas de viaje responsables que respeten las comunidades locales y el medio ambiente.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-travel-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-travel-dark">Comunidad</h3>
              <p className="text-travel-sage">
                Creemos en construir relaciones auténticas con las comunidades locales y ofrecer experiencias que beneficien a todos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-travel-dark mb-4">Nuestro Equipo</h2>
            <p className="text-travel-sage max-w-2xl mx-auto">
              Conozca a los apasionados expertos detrás de cada viaje inolvidable
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {name: "Elena Rodríguez", role: "Fundadora & CEO", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"},
              {name: "Carlos Chen", role: "Director de Operaciones Asia", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"},
              {name: "Sofía Kim", role: "Especialista en Japón", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"},
              {name: "Miguel Tanaka", role: "Guía Senior", image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349"}
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif text-travel-dark">{member.name}</h3>
                <p className="text-travel-sage">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
