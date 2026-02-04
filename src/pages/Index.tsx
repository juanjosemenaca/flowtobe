import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="FLOW2B - Tu Puerta a Experiencias Únicas en Asia"
        description="Descubre los destinos más fascinantes de Asia con FLOW2B. Ofrecemos experiencias auténticas, tours personalizados y aventuras inolvidables en los lugares más increíbles del continente asiático."
        keywords="viajes Asia, turismo Asia, destinos asiáticos, experiencias culturales Asia, paquetes de viaje Asia, tours personalizados Asia, aventuras Asia"
        canonical="/"
      />
      <Header />
      <Hero />
      <Destinations />
      <Experiences />
      <Testimonials />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
