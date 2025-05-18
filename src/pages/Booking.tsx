import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Clock, MapPin, Info, CreditCard, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
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
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: '7-10 días',
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
        title: "¡Reserva enviada con éxito!",
        description: "Recibirás una confirmación por email en breve.",
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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Reserva tu Aventura</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            A pocos pasos de vivir una experiencia inolvidable en Asia
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
                <span className="ml-2 font-medium">Detalles</span>
              </div>
              
              <div className={`w-16 h-1 mx-4 ${currentStep > 1 ? 'bg-travel-terracotta' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep > 2 ? 'text-travel-terracotta' : currentStep === 2 ? 'text-travel-dark' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > 2 ? 'bg-travel-terracotta text-white' : currentStep === 2 ? 'bg-travel-cream text-travel-dark' : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > 2 ? <Check size={20} /> : "2"}
                </div>
                <span className="ml-2 font-medium">Pago</span>
              </div>
              
              <div className={`w-16 h-1 mx-4 ${currentStep > 2 ? 'bg-travel-terracotta' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep === 3 ? 'text-travel-terracotta' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 3 ? 'bg-travel-terracotta text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep === 3 ? <Check size={20} /> : "3"}
                </div>
                <span className="ml-2 font-medium">Confirmación</span>
              </div>
            </div>
          </div>
          
          {/* Step 1: Travel Details */}
          {currentStep === 1 && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-travel-dark mb-6">Detalles de Viaje</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="firstName">Nombre</Label>
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
                  <Label htmlFor="lastName">Apellidos</Label>
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
                  <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="phone">Teléfono</Label>
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
              
              <h3 className="text-xl font-serif text-travel-dark mb-4">Información del Viaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="destination">Destino</Label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                  >
                    <option value="">Selecciona un destino</option>
                    <option value="japan">Japón</option>
                    <option value="thailand">Tailandia</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="indonesia">Indonesia</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="travelDate">Fecha de Viaje</Label>
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
                  <Label htmlFor="duration">Duración</Label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                  >
                    <option value="3-6 días">3-6 días</option>
                    <option value="7-10 días">7-10 días</option>
                    <option value="11-14 días">11-14 días</option>
                    <option value="15+ días">15+ días</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="travelers">Número de Viajeros</Label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-input rounded-md h-10 px-3 py-2"
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6+">6 o más personas</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <Label htmlFor="specialRequests">Requisitos Especiales o Preferencias</Label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full mt-1 border border-input rounded-md px-3 py-2"
                  placeholder="Por favor, compártenos cualquier requisito dietético, necesidad de accesibilidad o preferencia especial"
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={nextStep} 
                  className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                >
                  Continuar al Pago <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-serif text-travel-dark mb-6">Información de Pago</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-serif text-travel-dark">Detalles de la Tarjeta</h3>
                      <div className="flex space-x-2">
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                        <span className="block w-10 h-6 bg-gray-200 rounded"></span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Como aparece en la tarjeta"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Fecha de Expiración</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder="MM/AA"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">Código de Seguridad (CVV)</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            type="password"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder="XXX"
                            maxLength={4}
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
                        He leído y acepto los <a href="/terms" className="text-travel-terracotta hover:underline">Términos y Condiciones</a> y la <a href="/privacy" className="text-travel-terracotta hover:underline">Política de Privacidad</a>
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      onClick={prevStep} 
                      variant="outline" 
                      className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white"
                    >
                      Volver
                    </Button>
                    
                    <Button 
                      onClick={handleSubmit} 
                      className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                      disabled={isSubmitting || !formData.termsAccepted}
                    >
                      {isSubmitting ? 'Procesando...' : 'Completar Reserva'}
                      {isSubmitting && <span className="animate-spin ml-2">⏳</span>}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-travel-cream p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-serif text-travel-dark mb-4">Resumen de Reserva</h3>
                  
                  <div className="space-y-4 mb-6">
                    {formData.destination && (
                      <div className="flex items-start">
                        <MapPin size={18} className="text-travel-terracotta mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-travel-dark font-medium">Destino</p>
                          <p className="text-travel-sage">
                            {formData.destination === 'japan' && 'Japón'}
                            {formData.destination === 'thailand' && 'Tailandia'}
                            {formData.destination === 'vietnam' && 'Vietnam'}
                            {formData.destination === 'china' && 'China'}
                            {formData.destination === 'india' && 'India'}
                            {formData.destination === 'indonesia' && 'Indonesia'}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {formData.travelDate && (
                      <div className="flex items-start">
                        <Calendar size={18} className="text-travel-terracotta mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-travel-dark font-medium">Fecha</p>
                          <p className="text-travel-sage">{formData.travelDate}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <Users size={18} className="text-travel-terracotta mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-travel-dark font-medium">Viajeros</p>
                        <p className="text-travel-sage">{formData.travelers} personas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock size={18} className="text-travel-terracotta mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-travel-dark font-medium">Duración</p>
                        <p className="text-travel-sage">{formData.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-300 pt-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-travel-sage">Subtotal:</span>
                      <span className="text-travel-dark">€2,400</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-travel-sage">Impuestos:</span>
                      <span className="text-travel-dark">€240</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-travel-dark">Total:</span>
                      <span className="text-travel-terracotta">€2,640</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
                    <div className="flex">
                      <Info size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-blue-800">
                        Solo se te cobrará un depósito del 20% (€528) ahora. El resto se pagará 30 días antes del viaje.
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
              
              <h2 className="text-3xl font-serif text-travel-dark mb-4">¡Reserva Confirmada!</h2>
              
              <p className="text-travel-sage mb-8 max-w-2xl mx-auto">
                Gracias por reservar con AsiaViajes. Hemos enviado un correo electrónico a <span className="font-medium">{formData.email}</span> con los detalles de tu reserva. Uno de nuestros asesores de viaje se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              
              <div className="bg-travel-cream p-6 rounded-lg mb-8 max-w-md mx-auto">
                <h3 className="text-xl font-serif text-travel-dark mb-4">Referencia de Reserva</h3>
                <p className="text-2xl text-travel-terracotta font-bold mb-4">AV-{Math.floor(100000 + Math.random() * 900000)}</p>
                
                <div className="text-left space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-travel-sage">Destino:</span>
                    <span className="text-travel-dark font-medium">
                      {formData.destination === 'japan' && 'Japón'}
                      {formData.destination === 'thailand' && 'Tailandia'}
                      {formData.destination === 'vietnam' && 'Vietnam'}
                      {formData.destination === 'china' && 'China'}
                      {formData.destination === 'india' && 'India'}
                      {formData.destination === 'indonesia' && 'Indonesia'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-travel-sage">Fecha:</span>
                    <span className="text-travel-dark font-medium">{formData.travelDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-travel-sage">Viajeros:</span>
                    <span className="text-travel-dark font-medium">{formData.travelers} personas</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-travel-dark">Depósito pagado:</span>
                    <span className="text-travel-terracotta">€528</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/">
                  <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-8">
                    Volver a Inicio
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white px-8">
                    <Phone size={18} className="mr-2" /> Contactar
                  </Button>
                </Link>
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
