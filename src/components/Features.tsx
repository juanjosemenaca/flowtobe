
import React from 'react';

const features = [
  {
    id: 1,
    title: "Expert Local Guides",
    description: "Our knowledgeable guides provide authentic cultural insights"
  },
  {
    id: 2,
    title: "Handpicked Accommodations",
    description: "Stay in comfort at our carefully selected hotels and resorts"
  },
  {
    id: 3,
    title: "Sustainable Travel",
    description: "Ethical experiences that respect local communities and environments"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Travel with peace of mind knowing our team is always available"
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
