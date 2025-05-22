import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookingForm } from '@/components/booking/BookingForm';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('booking.title')}</h1>
        </div>
      </div>
      
      {/* Booking Form */}
      <section className="py-16">
        <div className="container">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
