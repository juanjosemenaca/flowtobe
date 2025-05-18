import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        title: "Mensaje enviado correctamente",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.jfif" alt="FlowToBali Logo" className="h-20 w-20 rounded-full object-cover mr-4" />
            <h1 className="text-4xl md:text-5xl font-serif">Contacto</h1>
          </div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Estamos aquí para responder a todas tus preguntas y ayudarte a planificar tu próxima aventura en Asia.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-travel-dark mb-8">Información de Contacto</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-travel-terracotta rounded-full p-3 text-white mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-travel-dark mb-2">Dirección</h3>
                    <p className="text-travel-sage">123 Calle Viajera, Singapur 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-travel-teal rounded-full p-3 text-white mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-travel-dark mb-2">Teléfono</h3>
                    <p className="text-travel-sage">+65 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-travel-sage rounded-full p-3 text-white mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-travel-dark mb-2">Email</h3>
                    <p className="text-travel-sage">info@asiaviajes.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-serif text-travel-dark mb-4">Horario de Oficina</h3>
                <div className="space-y-2 text-travel-sage">
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-travel-dark mb-8">Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-travel-terracotta hover:bg-travel-teal text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  {isSubmitting && <span className="animate-spin ml-2">⏳</span>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container">
          <div className="h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce" 
              alt="Mapa de ubicación" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
