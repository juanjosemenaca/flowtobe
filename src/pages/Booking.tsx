import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, MapPin, Info, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  martialArtsExperience: string;
  duration: string;
  travelers: string;
  specialRequests: string;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  termsAccepted: boolean;
}

const Booking = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    martialArtsExperience: '',
    duration: t('booking.form.duration.default'),
    travelers: '2',
    specialRequests: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    termsAccepted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('booking.success.title'),
        description: t('booking.success.description'),
      });
      
      setIsSubmitting(false);
      setCurrentStep(3); // Success step
    }, 1500);
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
      
      {/* Booking Process */}
      <section className="py-16">
        <div className="container max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <div className={`flex items-center ${currentStep > 1 ? 'text-travel-terracotta' : 'text-travel-dark'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > 1 ? 'bg-travel-terracotta text-white' : 'bg-travel-cream text-travel-dark'
                }`}>
                  {currentStep > 1 ? <Check size={20} /> : "1"}
                </div>
                <span className="ml-2 font-medium">{t('booking.steps.details')}</span>
              </div>
              
              <div className={`w-16 h-1 mx-4 ${currentStep > 1 ? 'bg-travel-terracotta' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep > 2 ? 'text-travel-terracotta' : 'text-travel-dark'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > 2 ? 'bg-travel-terracotta text-white' : 'bg-travel-cream text-travel-dark'
                }`}>
                  {currentStep > 2 ? <Check size={20} /> : "2"}
                </div>
                <span className="ml-2 font-medium">{t('booking.steps.payment')}</span>
              </div>
              
              <div className={`w-16 h-1 mx-4 ${currentStep > 2 ? 'bg-travel-terracotta' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep === 3 ? 'text-travel-terracotta' : 'text-travel-dark'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 3 ? 'bg-travel-terracotta text-white' : 'bg-travel-cream text-travel-dark'
                }`}>
                  3
                </div>
                <span className="ml-2 font-medium">{t('booking.steps.confirmation')}</span>
              </div>
            </div>
          </div>
          
          {/* Step 1: Details */}
          {currentStep === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-travel-dark mb-6">{t('booking.form.details.title')}</h2>
              
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="destination">{t('booking.form.destination')}</Label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                  >
                    <option value="">{t('booking.form.destinationPlaceholder')}</option>
                    <option value="bali">{t('destinations.categories.bali.title')}</option>
                    <option value="thailand">{t('destinations.categories.thailand.title')}</option>
                    <option value="vietnam">{t('destinations.categories.vietnam.title')}</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="martialArtsExperience">{t('booking.form.martialArtsExperience.label')}</Label>
                  <select
                    id="martialArtsExperience"
                    name="martialArtsExperience"
                    value={formData.martialArtsExperience}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                  >
                    <option value="">{t('booking.form.martialArtsExperience.placeholder')}</option>
                    <option value="yes">{t('booking.form.martialArtsExperience.yes')}</option>
                    <option value="no">{t('booking.form.martialArtsExperience.no')}</option>
                  </select>
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
                  <Label htmlFor="travelers">{t('booking.form.guests.label')}</Label>
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
                <Label htmlFor="specialRequests">{t('booking.form.notes.label')}</Label>
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
                  onClick={nextStep} 
                  className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                >
                  {t('booking.form.continue')} <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-serif text-travel-dark mb-6">{t('booking.form.payment.title')}</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-serif text-travel-dark">{t('booking.form.payment.cardDetails')}</h3>
                      <div className="flex space-x-2">
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="cardName">{t('booking.form.payment.cardName')}</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder={t('booking.form.payment.cardNamePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">{t('booking.form.payment.cardNumber')}</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder={t('booking.form.payment.cardNumberPlaceholder')}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiryDate">{t('booking.form.payment.expiryDate')}</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder={t('booking.form.payment.expiryDatePlaceholder')}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">{t('booking.form.payment.cvv')}</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder={t('booking.form.payment.cvvPlaceholder')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        required
                        className="mr-3"
                      />
                      <Label htmlFor="termsAccepted" className="text-sm">
                        {t('booking.form.payment.terms')}
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      onClick={prevStep} 
                      variant="outline" 
                      className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white"
                    >
                      {t('booking.form.payment.back')}
                    </Button>
                    
                    <Button 
                      onClick={handleSubmit} 
                      className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                      disabled={isSubmitting || !formData.termsAccepted}
                    >
                      {isSubmitting ? t('booking.form.payment.processing') : t('booking.form.payment.complete')}
                      {isSubmitting && <span className="animate-spin ml-2">⏳</span>}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-serif text-travel-dark mb-6">{t('booking.form.summary.title')}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-travel-sage">{t('booking.form.summary.subtotal')}</span>
                      <span className="text-travel-dark">€2,640</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-travel-sage">{t('booking.form.summary.taxes')}</span>
                      <span className="text-travel-dark">€264</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-bold">
                        <span className="text-travel-dark">{t('booking.form.summary.total')}</span>
                        <span className="text-travel-terracotta">€2,904</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
                    <div className="flex">
                      <Info size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-blue-800">
                        {t('booking.form.summary.deposit')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              
              <h2 className="text-3xl font-serif text-travel-dark mb-4">{t('booking.confirmation.title')}</h2>
              
              <p className="text-travel-sage mb-8 max-w-2xl mx-auto">
                {t('booking.confirmation.description', { email: formData.email })}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg inline-block">
                <h3 className="text-xl font-serif text-travel-dark mb-4">{t('booking.confirmation.reference')}</h3>
                <p className="text-2xl text-travel-terracotta font-bold mb-4">AV-{Math.floor(100000 + Math.random() * 900000)}</p>
                
                <div className="text-left space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-travel-sage">{t('booking.confirmation.destination')}:</span>
                    <span className="text-travel-dark font-medium">
                      {formData.destination === 'bali' && t('destinations.categories.bali.title')}
                      {formData.destination === 'thailand' && t('destinations.categories.thailand.title')}
                      {formData.destination === 'vietnam' && t('destinations.categories.vietnam.title')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-travel-sage">{t('booking.confirmation.date')}:</span>
                    <span className="text-travel-dark font-medium">{formData.martialArtsExperience === 'yes' ? t('booking.form.martialArtsExperience.yes') : t('booking.form.martialArtsExperience.no')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-travel-sage">{t('booking.confirmation.travelers')}:</span>
                    <span className="text-travel-dark font-medium">{formData.travelers} {t('booking.confirmation.people')}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-travel-dark">{t('booking.confirmation.deposit')}:</span>
                    <span className="text-travel-terracotta">€528</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
