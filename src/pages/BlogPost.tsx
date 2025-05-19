
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample blog post data - in a real app, this would come from an API or CMS
const blogPostsData = {
  "las-10-playas-mas-impresionantes-de-bali": {
    id: 1,
    title: "Las 10 playas más impresionantes de Bali",
    content: `
      <p class="mb-4">El paraíso terrenal de Bali, conocido por sus arrozales en terrazas, templos majestuosos y vibrante vida nocturna, es también hogar de algunas de las playas más espectaculares del sudeste asiático. Desde calas secretas de arena blanca hasta famosos spots de surf con acantilados dramáticos, la isla ofrece una diversidad de costas que cautivan a todo tipo de viajeros.</p>
      
      <p class="mb-4">En este artículo, te llevamos a un recorrido por las 10 playas más impresionantes de Bali que deberías incluir en tu próximo itinerario.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">1. Playa de Kuta</h2>
      <p class="mb-4">La más famosa y accesible desde el aeropuerto, Kuta es el lugar donde comenzó el turismo en Bali. Con 5 km de arena dorada, es perfecta para principiantes en el surf gracias a sus olas suaves. Al atardecer, se convierte en el escenario de uno de los más bellos espectáculos cuando el sol se hunde en el horizonte.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">2. Playa de Nusa Dua</h2>
      <p class="mb-4">Para quienes buscan tranquilidad y lujo, Nusa Dua ofrece aguas cristalinas y arenas blancas impecables. Esta zona alberga los resorts más exclusivos de la isla, con playas privadas perfectamente mantenidas y servicios de primera clase.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">3. Playa de Balangan</h2>
      <p class="mb-4">Menos concurrida que sus vecinas, Balangan es un tesoro escondido en la península de Bukit. Sus aguas turquesa contrastan con los acantilados de piedra caliza, creando un paisaje de postal. Es el lugar ideal para los surfistas experimentados y para quienes buscan escapar de las multitudes.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">4. Playa de Dreamland</h2>
      <p class="mb-4">Descubierta en los años 70 por surfistas, Dreamland hace honor a su nombre con un entorno de ensueño. Está situada entre acantilados y ofrece vistas panorámicas del océano Índico. Aunque se ha desarrollado en los últimos años, conserva su encanto salvaje.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">5. Playa de Padang Padang</h2>
      <p class="mb-4">Famosa por aparecer en la película "Comer, Rezar, Amar", esta pequeña cala de arena dorada se accede a través de una grieta en la roca. Sus olas potentes atraen a surfistas profesionales de todo el mundo, mientras que sus aguas tranquilas cerca de la orilla son perfectas para nadar.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">6. Playa de Bingin</h2>
      <p class="mb-4">Para llegar a Bingin hay que descender por un empinado acantilado, pero el esfuerzo vale la pena. Esta playa bohemia alberga pequeños hostales y cafés rústicos directamente sobre la arena. Durante la marea baja, revela piscinas naturales perfectas para explorar.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">7. Playa de Sanur</h2>
      <p class="mb-4">Ideal para familias, Sanur combina un ambiente tranquilo con buenas instalaciones. Su arrecife protege la costa de las grandes olas, creando una laguna perfecta para nadar y practicar deportes acuáticos. El paseo marítimo pavimentado es perfecto para pasear o montar en bicicleta al amanecer.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">8. Playa de Amed</h2>
      <p class="mb-4">En el este de Bali, lejos del bullicio turístico, Amed sorprende con sus playas de arena negra volcánica. Es un paraíso para los buceadores gracias a sus aguas cristalinas y arrecifes vibrantes. Desde la orilla se pueden ver los barcos tradicionales de pesca balineses, creando una estampa auténtica de la vida isleña.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">9. Playa de Thomas</h2>
      <p class="mb-4">Esta playa secreta en la península de Uluwatu es un verdadero tesoro escondido. Rodeada de acantilados y solo accesible durante la marea baja, ofrece una experiencia exclusiva para los aventureros que logran llegar hasta ella.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">10. Playa de Diamond</h2>
      <p class="mb-4">Ubicada en la vecina isla de Nusa Penida, Diamond Beach debe su nombre a la forma de su acantilado puntiagudo. El descenso es desafiante, pero la recompensa es una de las playas más fotogénicas de Indonesia, con aguas de un azul intenso contrastando con la arena blanca y los acantilados verdes.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Conclusión</h2>
      <p class="mb-4">Bali ofrece una diversidad de playas que satisfacen todos los gustos: desde las más animadas con vida nocturna hasta calas secretas para disfrutar en soledad; desde playas perfectas para el surf hasta otras ideales para el buceo. Cada una tiene su propia personalidad y encanto, contribuyendo a hacer de Bali un destino incomparable para los amantes del mar.</p>
      
      <p>En tu próxima visita a la "Isla de los Dioses", asegúrate de explorar al menos algunas de estas joyas costeras y descubrir por qué Bali es considerado uno de los paraísos tropicales más hermosos del planeta.</p>
    `,
    author: "María González",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    date: "15 mayo 2025",
    comments: 24,
    category: "playas",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    relatedPosts: [2, 4, 6]
  },
  "guia-completa-templos-angkor-wat": {
    id: 2,
    title: "Guía completa para visitar los templos de Angkor Wat",
    content: `
      <p class="mb-4">El complejo de Angkor Wat, situado en las afueras de Siem Reap en Camboya, es el sitio arqueológico más grande del mundo y una de las maravillas arquitectónicas más impresionantes jamás construidas. Declarado Patrimonio de la Humanidad por la UNESCO, este vasto conjunto de templos khmer representa el apogeo de una civilización que dominó el sudeste asiático durante siglos.</p>
      
      <p class="mb-4">En esta guía completa, te proporcionamos toda la información necesaria para planificar tu visita y aprovechar al máximo tu tiempo en este extraordinario tesoro cultural.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Un poco de historia</h2>
      <p class="mb-4">Construido principalmente entre los siglos IX y XV, Angkor fue la capital del Imperio Jemer y un centro religioso dedicado inicialmente al hinduismo y posteriormente al budismo. El templo principal, Angkor Wat, fue erigido a principios del siglo XII por el rey Suryavarman II como un templo-montaña dedicado al dios Vishnu.</p>
      
      <p class="mb-4">Durante su apogeo, la ciudad de Angkor llegó a albergar a más de un millón de habitantes, convirtiéndose en la mayor ciudad preindustrial del mundo. Tras siglos de esplendor, el sitio fue gradualmente abandonado, quedando a merced de la selva que lo engulló hasta su "redescubrimiento" por exploradores occidentales en el siglo XIX.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Cuándo visitar</h2>
      <p class="mb-4">Camboya tiene un clima tropical con dos estaciones claramente definidas:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Temporada seca (noviembre a abril): Ideal para visitar los templos, con cielos despejados y temperaturas más frescas, especialmente de diciembre a febrero. Sin embargo, es también la temporada alta turística.</li>
        <li>Temporada de lluvias (mayo a octubre): Menos turistas y un paisaje más verde y fotogénico, con los fosos de los templos llenos de agua. Las lluvias suelen ser cortas pero intensas, generalmente por la tarde, por lo que las mañanas son buenas para explorar.</li>
      </ul>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Los pases de entrada</h2>
      <p class="mb-4">Para acceder al complejo arqueológico se requiere un pase que puede adquirirse en el Centro de Visitantes de Angkor Enterprise. Las opciones disponibles son:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Pase de 1 día: 37 USD</li>
        <li>Pase de 3 días: 62 USD (válido durante una semana)</li>
        <li>Pase de 7 días: 72 USD (válido durante un mes)</li>
      </ul>
      <p class="mb-4">Si planeas explorar a fondo el complejo, recomendamos al menos el pase de 3 días para evitar el "síndrome de fatiga de templos" y poder apreciar los lugares con calma.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Los imprescindibles de Angkor</h2>
      <p class="mb-4">Con más de 1.000 templos distribuidos en un área de 400 km², es imposible verlo todo. Estos son los templos que no te puedes perder:</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Angkor Wat</h3>
      <p class="mb-4">El templo más grande y mejor conservado, símbolo nacional de Camboya. Su silueta aparece en la bandera del país y es famoso por sus cinco torres en forma de capullos de loto y sus extensos bajorrelieves que narran historias mitológicas hindúes. El mejor momento para visitarlo es al amanecer, cuando sus torres se reflejan en los estanques frontales.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Bayon</h3>
      <p class="mb-4">En el centro de Angkor Thom, este templo es célebre por sus 54 torres decoradas con 216 rostros sonrientes gigantes del rey Jayavarman VII (o posiblemente del bodisatva Avalokiteshvara). Su atmósfera enigmática lo convierte en uno de los templos más memorables.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Ta Prohm</h3>
      <p class="mb-4">Famoso por aparecer en la película "Tomb Raider", este templo ha sido dejado parcialmente como fue encontrado, con enormes árboles de algodón-seda y raíces de higueras estrangulando las estructuras de piedra, creando una atmósfera única que evoca el momento de su descubrimiento.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Banteay Srei</h3>
      <p class="mb-4">Situado a unos 25 km del grupo principal de templos, este pequeño santuario de arenisca rosa destaca por sus exquisitas tallas, consideradas las más finas de todo Angkor. Su nombre significa "Ciudadela de las Mujeres" debido a la delicadeza de sus relieves.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Preah Khan</h3>
      <p class="mb-4">Un enorme complejo templario que funcionaba como ciudad, templo y universidad budista. Menos visitado que Ta Prohm pero igualmente atmosférico, con árboles creciendo entre sus ruinas.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Consejos prácticos para tu visita</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Código de vestimenta: Se requiere vestimenta que cubra hombros y rodillas para ingresar a los templos, especialmente Angkor Wat.</li>
        <li>Hidratación: El calor puede ser intenso. Lleva siempre agua suficiente.</li>
        <li>Protección solar: Sombrero, gafas de sol y protector solar son esenciales.</li>
        <li>Calzado cómodo: Prepárate para caminar mucho y subir escaleras empinadas.</li>
        <li>Guía o libro: La contratación de un guía local enriquece enormemente la experiencia, permitiéndote entender el significado de lo que ves.</li>
        <li>Madrugar: Para evitar las multitudes y el calor del mediodía, comienza tus visitas temprano.</li>
      </ul>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Cómo moverse por Angkor</h2>
      <p class="mb-4">Existen varias opciones para recorrer el complejo:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Tuk-tuk: La opción más popular, con tarifas diarias entre 15-25 USD.</li>
        <li>Bicicleta: Ideal para el circuito pequeño si estás en buena forma física.</li>
        <li>Coche con conductor: Más cómodo pero también más costoso (30-40 USD/día).</li>
        <li>Tour organizado: Conveniente pero menos flexible.</li>
      </ul>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Itinerarios recomendados</h2>
      <h3 class="text-xl font-serif mt-6 mb-3">Si tienes 1 día:</h3>
      <p class="mb-4">Concentra tu visita en el "Circuito Pequeño": Angkor Wat (amanecer), Angkor Thom (Bayon, Baphuon, Terraza del Rey Leproso), Ta Prohm y Banteay Kdei.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Si tienes 3 días:</h3>
      <p class="mb-4">Día 1: El Circuito Pequeño mencionado anteriormente.</p>
      <p class="mb-4">Día 2: El "Circuito Grande", incluyendo Preah Khan, Neak Pean, Ta Som, East Mebon y Pre Rup.</p>
      <p class="mb-4">Día 3: Una excursión a Banteay Srei por la mañana, seguida de templos menos visitados como Banteay Samré, y quizás un atardecer en Pre Rup o Phnom Bakheng.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Conclusión</h2>
      <p class="mb-4">Visitar Angkor es una experiencia transformadora que te transporta a través del tiempo a una de las civilizaciones más sofisticadas de Asia. Más allá de las fotos icónicas, estos templos revelan la profunda espiritualidad, creatividad artística y proeza tecnológica de la cultura jemer.</p>
      
      <p>Con una planificación adecuada y estos consejos, tu visita a este impresionante conjunto monumental será sin duda uno de los puntos destacados de tu viaje por el sudeste asiático, dejándote recuerdos imborrables y un profundo respeto por los logros de nuestros antepasados.</p>
    `,
    author: "Carlos Martínez",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    date: "3 mayo 2025",
    comments: 18,
    category: "cultura",
    image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f",
    relatedPosts: [3, 5, 1]
  },
  "comida-callejera-bangkok": {
    id: 3,
    title: "Comida callejera en Bangkok: sabores que no puedes perderte",
    content: `
      <p class="mb-4">Bangkok, la vibrante capital de Tailandia, es mundialmente reconocida como uno de los mejores destinos para los amantes de la gastronomía. Sus calles bulliciosas albergan una increíble variedad de puestos de comida que ofrecen platos auténticos, sabrosos y sorprendentemente económicos. Para muchos viajeros, explorar la comida callejera de Bangkok es una aventura tan emocionante como visitar sus templos dorados o sus animados mercados.</p>
      
      <p class="mb-4">En este artículo, te guiamos por un recorrido gastronómico a través de los imperdibles de la cocina callejera tailandesa, donde descubrirás sabores que desafiarán tus papilas gustativas y te harán enamorarte de la complejidad y equilibrio que caracterizan a esta cocina.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Los mejores lugares para comer en la calle</h2>
      <p class="mb-4">Antes de adentrarnos en los platos específicos, es importante conocer dónde encontrar la mejor comida callejera de Bangkok:</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Chinatown (Yaowarat)</h3>
      <p class="mb-4">El barrio chino de Bangkok se transforma al anochecer en un paraíso gastronómico, con cientos de vendedores alineados en sus calles principales. Aquí encontrarás desde mariscos frescos hasta postres tradicionales chino-tailandeses.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Victory Monument</h3>
      <p class="mb-4">Esta concurrida intersección alberga una notable concentración de puestos de boat noodles (fideos servidos en pequeños cuencos) y otros platos regionales tailandeses.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Sukhumvit Soi 38</h3>
      <p class="mb-4">Aunque más pequeño que antes debido al desarrollo urbano, este callejón sigue siendo un punto de referencia para la comida callejera de alta calidad, especialmente después del atardecer.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Or Tor Kor Market</h3>
      <p class="mb-4">Considerado uno de los mercados de alimentos frescos más limpios y de mayor calidad del mundo, su sección de comida preparada ofrece platos excepcionales.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">Wang Lang Market</h3>
      <p class="mb-4">Situado frente al Hospital Siriraj, este mercado es frecuentado principalmente por locales, lo que garantiza autenticidad y precios razonables.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Platos imprescindibles</h2>
      <p class="mb-4">La cocina tailandesa se caracteriza por su equilibrio de sabores: picante, ácido, dulce, salado y umami. Estos son los platos callejeros que debes probar en tu visita:</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">1. Pad Thai</h3>
      <p class="mb-4">El plato tailandés más reconocido internacionalmente consiste en fideos de arroz salteados con huevo, tofu, germenes de soja, cebolleta y cacahuetes triturados, generalmente acompañado de lima y chiles. Cada vendedor tiene su propia versión, pero uno de los mejores se encuentra en Thip Samai en el Old Town, donde a menudo hay largas filas para probarlo.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">2. Som Tam (Ensalada de papaya verde)</h3>
      <p class="mb-4">Originaria del noreste de Tailandia (Isaan), esta ensalada combina papaya verde rallada, tomates cherry, judías largas, cacahuetes, ajo, chiles y salsa de pescado, todo machacado en un mortero para liberar los sabores. El resultado es una explosión de picante, ácido, dulce y salado en cada bocado.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">3. Tom Yum Goong</h3>
      <p class="mb-4">Esta sopa picante y ácida con gambas es un emblema de la cocina tailandesa. Aromática gracias a la hierba de limón, las hojas de lima kaffir y la galanga, su complejo sabor deriva también del chile y el nam prik pao (pasta de chile frita).</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">4. Boat Noodles</h3>
      <p class="mb-4">Tradición nacida en los canales de Bangkok cuando se vendían desde pequeñas embarcaciones, estos fideos se sirven en un caldo intenso a base de sangre de cerdo o res, especias y hierbas. Se caracterizan por su profundo sabor y su pequeño tamaño, lo que permite probar varias variedades.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">5. Moo Ping y Gai Yang</h3>
      <p class="mb-4">Las brochetas de cerdo marinado (Moo Ping) y el pollo a la parrilla (Gai Yang) son populares desayunos y tentempiés, generalmente acompañados de arroz glutinoso y salsa de tamarindo o chile.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">6. Khao Man Gai</h3>
      <p class="mb-4">La versión tailandesa del pollo con arroz Hainanese consiste en pollo hervido servido sobre arroz cocido en caldo de pollo y grasa, acompañado de una salsa picante de jengibre, ajo y chile.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">7. Mango Sticky Rice</h3>
      <p class="mb-4">Este postre tradicional combina arroz glutinoso cocinado con leche de coco, servido con mangos maduros y cubierto con más leche de coco. Simple pero divino, es especialmente delicioso durante la temporada de mangos (abril a junio).</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">8. Roti Mataba</h3>
      <p class="mb-4">Influencia musulmana en la cocina tailandesa, este pan plano relleno de carne picada especiada, huevo o plátano (versión dulce) es cocinado a la plancha hasta quedar crujiente por fuera y tierno por dentro.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">9. Pad See Eiw</h3>
      <p class="mb-4">Fideos de arroz anchos salteados con salsa de soja oscura, huevo, carne y verduras de hoja verde. Menos conocido internacionalmente que el Pad Thai, pero igualmente popular entre los tailandeses.</p>
      
      <h3 class="text-xl font-serif mt-6 mb-3">10. Larb</h3>
      <p class="mb-4">Ensalada de carne picada (cerdo, pollo o pato) mezclada con hierbas frescas, arroz tostado molido, jugo de lima y salsa de pescado. Es el plato nacional de Laos pero muy popular también en Tailandia, especialmente en la región noreste.</p>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Consejos para disfrutar de la comida callejera</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Busca puestos concurridos por locales, lo que suele ser señal de frescura y calidad.</li>
        <li>Observa la limpieza general del puesto y cómo manipulan los alimentos.</li>
        <li>Lleva contigo pañuelos húmedos y desinfectante para manos.</li>
        <li>Si tu estómago es sensible, comienza con platos cocinados a alta temperatura.</li>
        <li>Aprende algunas frases básicas como "mai phet" (no picante) si no toleras bien el chile.</li>
      </ul>
      
      <h2 class="text-2xl font-serif mt-8 mb-4">Conclusión</h2>
      <p class="mb-4">Explorar la comida callejera de Bangkok es sumergirse en el corazón de la cultura tailandesa. Estos puestos no son solo lugares donde alimentarse económicamente, sino espacios sociales donde confluyen tradición, creatividad culinaria e interacción comunitaria.</p>
      
      <p>Durante tu próxima visita a Bangkok, atrévete a alejarte de los restaurantes turísticos y experimenta la auténtica cocina tailandesa como lo hacen los locales. Descubrirás que algunas de tus experiencias gastronómicas más memorables pueden provenir de los puestos más sencillos en las calles más bulliciosas de esta fascinante metrópolis.</p>
    `,
    author: "Laura Sánchez",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    date: "28 abril 2025",
    comments: 32,
    category: "gastronomía",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    relatedPosts: [2, 5, 6]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-16 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-serif mb-4">Artículo no encontrado</h1>
          <p className="mb-6">Lo sentimos, el artículo que estás buscando no está disponible.</p>
          <Button asChild className="bg-travel-terracotta hover:bg-travel-teal text-white">
            <Link to="/blog">Volver al Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related posts
  const relatedPosts = post.relatedPosts.map(id => 
    Object.values(blogPostsData).find(p => p.id === id)
  ).filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[300px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="mb-4 bg-black/50 text-white border-white/30 hover:bg-black/70"
              >
                <Link to="/blog">
                  <ArrowLeft size={16} />
                  Volver al Blog
                </Link>
              </Button>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs text-white bg-travel-terracotta rounded-full capitalize">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif mb-3 text-white">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <span className="flex items-center gap-1">
                  <User size={16} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={16} /> {post.comments} comentarios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Author info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <img 
                src={post.authorAvatar} 
                alt={post.author} 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-travel-dark">{post.author}</h3>
                <p className="text-travel-sage text-sm">Especialista en viajes por Asia</p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark size={18} />
                </Button>
              </div>
            </div>
            
            {/* Article body */}
            <div 
              className="prose prose-slate max-w-none prose-headings:font-serif prose-p:text-travel-dark/90 prose-a:text-travel-terracotta prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-travel-sage">Etiquetas:</span>
                <Button variant="outline" size="sm" className="text-sm">Asia</Button>
                <Button variant="outline" size="sm" className="text-sm">{post.category}</Button>
                <Button variant="outline" size="sm" className="text-sm">Consejos</Button>
                <Button variant="outline" size="sm" className="text-sm">Viajes</Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-travel-cream">
          <div className="container">
            <h2 className="text-3xl font-serif mb-10 text-center">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost) => (
                <Link to={`/blog/${Object.keys(blogPostsData).find(key => blogPostsData[key].id === rPost.id)}`} key={rPost.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={rPost.image} 
                        alt={rPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs text-white bg-travel-terracotta rounded-full capitalize">
                          {rPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif mb-2 text-travel-dark hover:text-travel-terracotta">
                        {rPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-travel-sage">
                        <span>{rPost.date}</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare size={12} /> {rPost.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogPost;
