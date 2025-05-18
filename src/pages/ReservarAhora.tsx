
import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, MapPin, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: '7-10 días',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Solicitud recibida!",
        description: "Te contactaremos pronto para confirmar tu reserva.",
      });
      
      setIsSubmitting(false);
      // Reset form or redirect
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-terracotta text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Reservar Ahora</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Estás a pocos pasos de iniciar una aventura inolvidable por Asia
          </p>
        </div>
      </div>
      
      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-3xl font-serif text-travel-dark mb-6">Información de Reserva</h2>
                
                <form onSubmit={handleSubmit}>
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
                  
                  <h3 className="text-xl font-serif text-travel-dark mb-4">Detalles del Viaje</h3>
                  
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
                      <Label htmlFor="travelDate">Fecha Aproximada</Label>
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
                    <Label htmlFor="specialRequests">Requisitos Especiales</Label>
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
                      type="submit"
                      className="bg-travel-terracotta hover:bg-travel-teal text-white px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'} 
                      {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-travel-cream p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-serif text-travel-dark mb-4">¿Por Qué Reservar con Nosotros?</h3>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">Expertos locales en destinos asiáticos</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">Itinerarios personalizados a tu ritmo</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">Asistencia 24/7 durante todo el viaje</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-travel-terracotta mr-3 flex-shrink-0">✓</span>
                    <p className="text-travel-sage">Experiencias auténticas fuera del turismo masivo</p>
                  </li>
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm mb-6">
                  <div className="flex">
                    <Info size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-blue-800">
                      Al enviar tu solicitud, un asesor de viajes se pondrá en contacto contigo en un plazo de 24 horas.
                    </p>
                  </div>
                </div>
                
                <div className="bg-travel-terracotta/10 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={18} className="text-travel-terracotta mr-2" />
                    <h4 className="font-medium">Atención Personalizada</h4>
                  </div>
                  <p className="text-sm text-travel-sage">
                    No somos una agencia de viajes masiva. Creamos experiencias únicas adaptadas a tus intereses y necesidades.
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
          <h2 className="text-3xl font-serif text-travel-dark text-center mb-8">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">¿Cuánto tiempo tarda en confirmarse mi reserva?</h3>
              <p className="text-travel-sage">Normalmente nos ponemos en contacto contigo en un plazo de 24 horas para discutir los detalles de tu viaje y comenzar la planificación.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">¿Necesito pagar algo por adelantado?</h3>
              <p className="text-travel-sage">No, la consulta inicial es gratuita. Solo después de que hayas aprobado tu itinerario personalizado se requerirá un depósito para asegurar la reserva.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-travel-dark mb-2">¿Puedo modificar mi itinerario después?</h3>
              <p className="text-travel-sage">Sí, entendemos que los planes pueden cambiar. Trabajaremos contigo para adaptar el itinerario según tus necesidades, siempre que sea posible.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReservarAhora;
