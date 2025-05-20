import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, MapPin, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  duration: string;
  travelers: string;
  specialRequests: string;
}

const ReservarAhora = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: t('booking.form.duration.default'),
    travelers: '2',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        travel_date: formData.travelDate,
        duration: formData.duration,
        travelers: formData.travelers,
        special_requests: formData.specialRequests
      };

      await emailjs.send(
        'service_8wui46p',
        'template_unv20j4',
        templateParams,
        'zpJqcZ9zcplXgZ_tI'
      );

      toast({
        title: t('booking.success.title'),
        description: t('booking.success.description'),
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        duration: t('booking.form.duration.default'),
        travelers: '2',
        specialRequests: ''
      });
    } catch (error) {
      toast({
        title: "Error al enviar la solicitud",
        description: "Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('booking.title')}</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            {t('booking.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-3xl font-serif text-travel-dark mb-6">{t('booking.form.details.title')}</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="firstName">{t('booking.form.firstName')}</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">{t('booking.form.lastName')}</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">{t('booking.form.email')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">{t('booking.form.phone')}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-travel-dark mb-4">{t('booking.form.details.subTitle')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="destination">{t('booking.form.destination')}</Label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                      >
                        <option value="">{t('booking.form.destination.placeholder')}</option>
                        <option value="japan">{t('destinations.categories.japan.title')}</option>
                        <option value="thailand">{t('destinations.categories.thailand.title')}</option>
                        <option value="vietnam">{t('destinations.categories.vietnam.title')}</option>
                        <option value="china">{t('destinations.categories.china.title')}</option>
                        <option value="india">{t('destinations.categories.india.title')}</option>
                        <option value="indonesia">{t('destinations.categories.indonesia.title')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="travelDate">{t('booking.form.dates')}</Label>
                      <Input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="duration">{t('booking.form.duration.label')}</Label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                      >
                        <option value="3-6">{t('booking.form.duration.short')}</option>
                        <option value="7-10">{t('booking.form.duration.medium')}</option>
                        <option value="11-14">{t('booking.form.duration.long')}</option>
                        <option value="15+">{t('booking.form.duration.veryLong')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="travelers">{t('booking.form.guests')}</Label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                      >
                        <option value="1">{t('booking.form.guests.single')}</option>
                        <option value="2">{t('booking.form.guests.couple')}</option>
                        <option value="3">{t('booking.form.guests.three')}</option>
                        <option value="4">{t('booking.form.guests.four')}</option>
                        <option value="5">{t('booking.form.guests.five')}</option>
                        <option value="6+">{t('booking.form.guests.more')}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <Label htmlFor="specialRequests">{t('booking.form.notes')}</Label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full mt-1 border border-input rounded-md px-3 py-2"
                      placeholder={t('booking.form.notes.placeholder')}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit"
                      className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('booking.form.payment.processing') : t('booking.form.continue')}
                      {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-travel-cream p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-serif text-travel-dark mb-4">{t('booking.form.whyChooseUs.title')}</h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">{t('booking.form.whyChooseUs.item1')}</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">{t('booking.form.whyChooseUs.item2')}</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">{t('booking.form.whyChooseUs.item3')}</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">{t('booking.form.whyChooseUs.item4')}</p>
                  </li>
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm mb-6">
                  <div className="flex">
                    <Info size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-blue-800">
                      {t('booking.form.whyChooseUs.note')}
                    </p>
                  </div>
                </div>
                
                <div className="bg-travel-terracotta/10 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={18} className="text-travel-terracotta mr-2" />
                    <h4 className="font-medium">{t('booking.form.whyChooseUs.customizedAttention')}</h4>
                  </div>
                  <p className="text-sm text-travel-sage">
                    {t('booking.form.whyChooseUs.customizedAttentionDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-travel-cream/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif text-travel-dark text-center mb-8">{t('booking.form.faq.title')}</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">{t('booking.form.faq.item1.question')}</h3>
              <p className="text-travel-sage">{t('booking.form.faq.item1.answer')}</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">{t('booking.form.faq.item2.question')}</h3>
              <p className="text-travel-sage">{t('booking.form.faq.item2.answer')}</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">{t('booking.form.faq.item3.question')}</h3>
              <p className="text-travel-sage">{t('booking.form.faq.item3.answer')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReservarAhora;
