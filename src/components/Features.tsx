
import React from 'react';

const features = [
  {
    id: 1,
    title: "Guías Locales Expertos",
    description: "Nuestros conocedores guías proporcionan auténticas perspectivas culturales"
  },
  {
    id: 2,
    title: "Alojamientos Seleccionados",
    description: "Hospédese cómodamente en nuestros hoteles y resorts cuidadosamente seleccionados"
  },
  {
    id: 3,
    title: "Viajes Sostenibles",
    description: "Experiencias éticas que respetan las comunidades locales y el medio ambiente"
  },
  {
    id: 4,
    title: "Soporte 24/7",
    description: "Viaje con tranquilidad sabiendo que nuestro equipo está siempre disponible"
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container">
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
