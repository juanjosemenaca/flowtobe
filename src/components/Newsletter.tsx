
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor ingrese una dirección de correo electrónico válida.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "¡Éxito!",
        description: "Te has suscrito correctamente a nuestro boletín.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-travel-teal py-16 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Inspírate Para Tu Próximo Viaje</h2>
          <p className="text-lg opacity-90 mb-8">
            Suscríbete a nuestro boletín para recibir consejos de viaje, ofertas exclusivas e inspiración de destinos
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Tu dirección de correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-travel-dark placeholder:text-travel-sage"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-travel-terracotta hover:bg-travel-gold text-white"
            >
              {isSubmitting ? "Suscribiendo..." : "Suscribirse"}
            </Button>
          </form>
          
          <p className="text-sm opacity-80 mt-6">
            Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir correos relacionados con viajes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
