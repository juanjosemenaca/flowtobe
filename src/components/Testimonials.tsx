import React from 'react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    quote: "testimonials.japan.quote",
    author: "testimonials.japan.author",
    location: "testimonials.japan.location",
    rating: 5
  },
  {
    id: 2,
    quote: "testimonials.thailand.quote",
    author: "testimonials.thailand.author",
    location: "testimonials.thailand.location",
    rating: 5
  },
  {
    id: 3,
    quote: "testimonials.vietnam.quote",
    author: "testimonials.vietnam.author",
    location: "testimonials.vietnam.location",
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
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <StarRating rating={rating} />
      <p className="text-travel-dark text-lg mt-4 italic">"{t(quote)}"</p>
      <div className="mt-6">
        <p className="font-semibold text-travel-teal">{t(author)}</p>
        <p className="text-travel-sage text-sm">{t(location)}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">{t('testimonials.title')}</h2>
          <p className="text-travel-sage text-xl max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
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
