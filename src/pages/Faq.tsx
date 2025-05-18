
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqItems = [
  {
    question: "¿Cómo puedo hacer una reserva?",
    answer: "Puedes hacer una reserva directamente en nuestra página web utilizando nuestro formulario de reserva, o contactándonos por teléfono o correo electrónico. Nuestro equipo estará encantado de ayudarte a planificar tu viaje perfecto."
  },
  {
    question: "¿Qué documentos necesito para viajar a Asia?",
    answer: "Los requisitos de documentación varían según el país que visites. Generalmente, necesitarás un pasaporte válido por al menos 6 meses después de tu fecha de regreso y posiblemente una visa para algunos países. Te proporcionaremos información específica según tu destino al momento de la reserva."
  },
  {
    question: "¿Cuáles son las políticas de cancelación?",
    answer: "Nuestras políticas de cancelación dependen del tipo de viaje y los servicios reservados. Por lo general, ofrecemos reembolsos completos para cancelaciones realizadas con 30 días o más de antelación. Las cancelaciones entre 15-29 días pueden recibir un reembolso parcial, mientras que las cancelaciones con menos de 15 días de anticipación podrían no ser reembolsables. Cada reserva incluirá los términos específicos de cancelación."
  },
  {
    question: "¿Ofrecen seguro de viaje?",
    answer: "Aunque no ofrecemos seguros de viaje directamente, recomendamos encarecidamente que todos nuestros clientes adquieran un seguro de viaje completo que cubra cancelaciones, atención médica, equipaje y otras contingencias. Podemos sugerirte algunas compañías de seguros confiables que se adapten a tus necesidades."
  },
  {
    question: "¿Cómo son los guías locales?",
    answer: "Nuestros guías son profesionales locales con amplio conocimiento de la cultura, historia y costumbres de su país. Todos hablan español fluidamente además del idioma local, y están certificados según las regulaciones turísticas de cada país. Los seleccionamos cuidadosamente por su experiencia, conocimiento y habilidades interpersonales."
  },
  {
    question: "¿Qué tipo de alojamiento ofrecen?",
    answer: "Trabajamos con una variedad de alojamientos, desde hoteles boutique hasta resorts de lujo, dependiendo de tus preferencias y presupuesto. Todos nuestros alojamientos son cuidadosamente seleccionados por su calidad, ubicación, servicio y autenticidad local."
  },
  {
    question: "¿Son sus viajes adecuados para familias con niños?",
    answer: "Muchos de nuestros itinerarios son perfectos para familias, con actividades adecuadas para diferentes edades. Podemos personalizar tu viaje para que sea apto para niños, con tiempos de viaje más cortos, alojamientos familiares y experiencias interesantes para los pequeños."
  },
  {
    question: "¿Qué pasa si tengo requisitos dietéticos especiales?",
    answer: "Podemos adaptar las comidas incluidas en tu viaje según tus necesidades dietéticas específicas, ya sean alergias, restricciones religiosas o preferencias personales. Solo necesitamos conocer estos requisitos con antelación para informar a nuestros proveedores locales."
  },
  {
    question: "¿Cuál es la mejor época para visitar diferentes partes de Asia?",
    answer: "La mejor época varía según el destino. Por ejemplo, para el sudeste asiático (Tailandia, Vietnam), el periodo de noviembre a febrero suele ser ideal. Para Japón, la primavera (marzo-abril) y el otoño (octubre-noviembre) son espectaculares. Podemos aconsejarte sobre la mejor temporada según tus preferencias y destinos específicos."
  },
  {
    question: "¿Cómo puedo pagar mi reserva?",
    answer: "Aceptamos diversos métodos de pago, incluyendo tarjetas de crédito/débito, transferencias bancarias y PayPal. Generalmente solicitamos un depósito del 30% para confirmar tu reserva, con el saldo restante pagadero 30 días antes de la fecha de inicio del viaje."
  }
];

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Preguntas Frecuentes</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y viajes por Asia
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-travel-dark font-medium text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-travel-sage">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-serif text-travel-dark mb-4">¿No encuentras la respuesta que buscas?</h2>
            <p className="text-travel-sage mb-6">
              Contáctanos directamente y nuestro equipo te responderá a la brevedad posible
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="bg-travel-terracotta hover:bg-travel-teal text-white px-6 py-3 rounded-md transition-colors">
                Contactar
              </a>
              <a href="mailto:info@asiaviajes.com" className="bg-travel-sage hover:bg-travel-teal text-white px-6 py-3 rounded-md transition-colors">
                info@asiaviajes.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Faq;
