import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Memories = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes de recuerdos de nuestros viajeros
  const memories = [
    '/memories/candid-shot-handsome-young-man-with-stubble-fighting-unrecognizable-opponent-two-male-boxers-training-together-having-fight-indoors-wearing-black-elastic-bandages-wrists-selective-focus.jpg',
    '/memories/diverse-group-friends-playing-beach-water.jpg',
    '/memories/enjoying-street-food-fest.jpg',
    '/memories/three-woman-tourists-friends-travel-around-khao-sok-national-park-vacation-thailand-sailing-asian-boat-lake-sunny-day-with-amazing-view.jpg',
    '/memories/young-women-doing-fitness-outdoors-together.jpg'
  ];

  const photosPerPage = 4;
  const totalPages = Math.ceil(memories.length / photosPerPage);
  const currentPhotos = memories.slice(currentIndex, currentIndex + photosPerPage);

  const nextPhotos = () => {
    setCurrentIndex((prev) => {
      const next = prev + photosPerPage;
      return next >= memories.length ? 0 : next;
    });
  };

  const prevPhotos = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - photosPerPage;
      return prevIndex < 0 ? (totalPages - 1) * photosPerPage : prevIndex;
    });
  };

  return (
    <section className="py-20 bg-travel-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-travel-dark mb-4">
            {t('memories.title')}
          </h2>
          {t('memories.subtitle') && (
            <p className="text-travel-sage text-xl max-w-2xl mx-auto">
              {t('memories.subtitle')}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Botón anterior */}
          {memories.length > photosPerPage && (
            <button
              onClick={prevPhotos}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-travel-teal hover:text-white transition-colors"
              aria-label="Fotos anteriores"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Grid de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentPhotos.map((image, index) => (
              <div
                key={currentIndex + index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${t('memories.title')} ${currentIndex + index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Botón siguiente */}
          {memories.length > photosPerPage && (
            <button
              onClick={nextPhotos}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-travel-teal hover:text-white transition-colors"
              aria-label="Más fotos"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Indicadores de página */}
          {memories.length > photosPerPage && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * photosPerPage)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / photosPerPage) === index
                      ? 'bg-travel-teal'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Memories;
