import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Términos de Servicio</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Condiciones que rigen el uso de nuestros servicios y plataforma
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar los servicios de Flow2b (en adelante, "el Servicio"), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al Servicio.
            </p>

            <h2>Cambios en los términos</h2>
            <p>
              Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra discreción. Es tu responsabilidad revisar estos Términos periódicamente para detectar cambios. Tu uso continuo del Servicio después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.
            </p>

            <h2>Cuentas</h2>
            <p>
              Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actualizada en todo momento. El no hacerlo constituye un incumplimiento de los Términos, que puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.
            </p>
            <p>
              Eres responsable de salvaguardar la contraseña que utilizas para acceder al Servicio y de cualquier actividad o acción bajo tu contraseña. Te comprometes a no revelar tu contraseña a ningún tercero.
            </p>

            <h2>Reservas y pagos</h2>
            <p>
              Todas las reservas están sujetas a disponibilidad y confirmación. El pago se realizará de acuerdo con los términos específicos de cada paquete o servicio. Pueden aplicarse cargos por cancelación según nuestra política de cancelación.
            </p>

            <h2>Política de cancelación</h2>
            <p>
              Las políticas de cancelación varían según el tipo de servicio o paquete. Los detalles específicos se proporcionarán en el momento de la reserva. En general, las cancelaciones realizadas con menos de 30 días de antelación pueden estar sujetas a cargos.
            </p>

            <h2>Uso del servicio</h2>
            <p>
              Nuestro Servicio solo puede utilizarse de acuerdo con las leyes aplicables y estos Términos. Está estrictamente prohibido utilizar nuestro Servicio para cualquier fin ilegal o no autorizado.
            </p>

            <h2>Propiedad intelectual</h2>
            <p>
              El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Flow2b y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes de España y otros países.
            </p>

            <h2>Limitación de responsabilidad</h2>
            <p>
              En ningún caso Flow2b, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluida, sin limitación, la pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de tu acceso o uso o incapacidad para acceder o utilizar el Servicio.
            </p>

            <h2>Indemnización</h2>
            <p>
              Aceptas defender, indemnizar y mantener indemne a Flow2b de y contra cualquier reclamación, responsabilidad, daño, pérdida y gasto, incluyendo honorarios legales razonables, que surjan de o estén relacionados de alguna manera con tu uso del Servicio o cualquier violación de estos Términos.
            </p>

            <h2>Ley aplicable</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflicto de leyes.
            </p>

            <h2>Contacto</h2>
            <p>
              Las preguntas sobre los Términos deben enviarse a nosotros a info@flow2b.com.
            </p>

            <p className="text-sm text-travel-sage mt-8">
              Última actualización: Mayo 2025
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
