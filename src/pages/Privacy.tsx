import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-travel-teal text-white pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Política de Privacidad</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Tu privacidad es importante para nosotros. Lee cómo manejamos y protegemos tus datos.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>Introducción</h2>
            <p>
              FLOWTOBALY S.L. (en adelante, "AsiaViajes") se compromete a proteger y respetar tu privacidad. Esta política de privacidad establece la base sobre la cual cualquier dato personal que recopilemos de ti, o que tú nos proporciones, será procesado por nosotros.
            </p>

            <h2>Información que recopilamos</h2>
            <p>Podemos recopilar y procesar los siguientes datos sobre ti:</p>
            <ul>
              <li>Información que nos proporciones al completar formularios en nuestro sitio web, como tu nombre, dirección, correo electrónico y número de teléfono.</li>
              <li>Información proporcionada al comunicarte con nosotros, por cualquier motivo.</li>
              <li>Detalles de tus visitas a nuestro sitio web y los recursos a los que accedes.</li>
              <li>Información que nos proporciones al realizar una reserva, como los detalles del viaje, las preferencias y requisitos especiales.</li>
            </ul>

            <h2>Uso de tu información</h2>
            <p>Utilizamos la información que tenemos sobre ti de las siguientes maneras:</p>
            <ul>
              <li>Para proporcionarte información, productos o servicios que solicites o que consideremos que podrían interesarte.</li>
              <li>Para cumplir con nuestras obligaciones derivadas de los contratos celebrados entre tú y nosotros.</li>
              <li>Para permitirte participar en funciones interactivas de nuestro servicio, cuando elijas hacerlo.</li>
              <li>Para notificarte sobre cambios en nuestro servicio.</li>
            </ul>

            <h2>Divulgación de tu información</h2>
            <p>
              Podemos divulgar tu información personal a terceros solo en las siguientes circunstancias:
            </p>
            <ul>
              <li>A nuestros proveedores de servicios para la prestación de servicios en nuestro nombre.</li>
              <li>En caso de que vendamos o compremos cualquier negocio o activo, en cuyo caso podemos divulgar tus datos personales al vendedor o comprador potencial.</li>
              <li>Si estamos obligados a divulgar o compartir tus datos personales para cumplir con cualquier obligación legal.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Nuestro sitio web utiliza cookies para distinguirte de otros usuarios de nuestro sitio. Esto nos ayuda a proporcionarte una buena experiencia cuando navegas por nuestro sitio y también nos permite mejorarlo.
            </p>

            <h2>Tus derechos</h2>
            <p>
              Tienes el derecho de solicitar acceso a la información personal que tenemos sobre ti. También puedes solicitar correcciones, actualizaciones o la eliminación de tu información personal.
            </p>

            <h2>Cambios en nuestra política de privacidad</h2>
            <p>
              Cualquier cambio que podamos hacer en nuestra política de privacidad en el futuro se publicará en esta página y, cuando corresponda, se te notificará por correo electrónico.
            </p>

            <h2>Contacto</h2>
            <p>
              Las preguntas, comentarios y solicitudes relacionadas con esta política de privacidad son bienvenidas y deben dirigirse a info@asiaviajes.com o a nuestra dirección postal.
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

export default Privacy;
