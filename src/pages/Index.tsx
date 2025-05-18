
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
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
