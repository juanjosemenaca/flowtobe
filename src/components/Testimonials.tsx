
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Nuestro viaje por Japón con Flow2bali fue absolutamente increíble. Cada detalle fue perfectamente organizado y los guías locales realmente hicieron que la experiencia fuera especial.",
    author: "Sara J.",
    location: "Kioto, Japón",
    rating: 5
  },
  {
    id: 2,
    quote: "El tour por las playas de Tailandia superó todas nuestras expectativas. Desde las playas vírgenes hasta la vibrante vida nocturna, ¡todo fue tal como lo prometieron y más!",
    author: "Miguel T.",
    location: "Phuket, Tailandia",
    rating: 5
  },
  {
    id: 3,
    quote: "La cultura y los paisajes de Vietnam son impresionantes, y Flow2bali nos ayudó a explorarlo todo. Los tours gastronómicos fueron algo que nunca olvidaremos.",
    author: "Elena y David",
    location: "Hanoi, Vietnam",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-travel-gold" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, author, location, rating }: {
  quote: string;
  author: string;
  location: string;
  rating: number;
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <StarRating rating={rating} />
      <p className="text-travel-dark text-lg mt-4 italic">"{quote}"</p>
      <div className="mt-6">
        <p className="font-semibold text-travel-teal">{author}</p>
        <p className="text-travel-sage text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">Lo Que Dicen Los Viajeros</h2>
          <p className="text-travel-sage text-xl max-w-2xl mx-auto">
            Historias reales de viajeros que experimentaron la magia de Asia con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
