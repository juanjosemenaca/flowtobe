import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    '/rotating/dos-boxeadores-luchan-con-las-artes-marciales-del-muay-thai.jpg',
    '/rotating/man-jumping-into-natural-pond.jpg',
    '/rotating/templo-de-besakih-en-bali-indonesia.jpg',
    '/rotating/wellness-practices-self-care-world-health-day.jpg'
  ];

  useEffect(() => {
    // Precargar imágenes
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = () => {
              console.error(`Error loading image: ${src}`);
              reject(new Error(`Failed to load image: ${src}`));
            };
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continuar incluso si hay errores
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-200">
      {/* Logo de fondo durante transiciones */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.img
          src="/noBgBlack.png"
          alt="Flow2B Logo"
          className="h-64 md:h-80 lg:h-96 w-auto object-contain opacity-20"
          animate={{
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Error loading image: ${images[currentImageIndex]}`);
              e.currentTarget.src = '/placeholder.jpg'; // Fallback image
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {t('home.hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl"
        >
          {t('home.hero.subtitle')}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
