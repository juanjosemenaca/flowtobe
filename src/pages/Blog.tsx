
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Las 10 playas más impresionantes de Bali",
    excerpt: "Descubre los paraísos escondidos y las playas de arena blanca que hacen de Bali un destino incomparable para los amantes del mar.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    author: "María González",
    date: "15 mayo 2025",
    comments: 24,
    category: "playas"
  },
  {
    id: 2,
    title: "Guía completa para visitar los templos de Angkor Wat",
    excerpt: "Todo lo que necesitas saber para explorar el complejo arqueológico más grande del mundo en Camboya.",
    image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f",
    author: "Carlos Martínez",
    date: "3 mayo 2025",
    comments: 18,
    category: "cultura"
  },
  {
    id: 3,
    title: "Comida callejera en Bangkok: sabores que no puedes perderte",
    excerpt: "Un recorrido gastronómico por los mercados y puestos callejeros más auténticos de la capital tailandesa.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    author: "Laura Sánchez",
    date: "28 abril 2025",
    comments: 32,
    category: "gastronomía"
  },
  {
    id: 4,
    title: "Los mejores trekkings en el norte de Vietnam",
    excerpt: "Rutas imprescindibles para los amantes del senderismo que quieran explorar las montañas y los campos de arroz del norte vietnamita.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    author: "Javier López",
    date: "15 abril 2025",
    comments: 15,
    category: "aventura"
  },
  {
    id: 5,
    title: "Guía para viajar a Japón durante la floración de los cerezos",
    excerpt: "Consejos prácticos para planificar tu viaje durante el hanami y disfrutar de este espectáculo natural único.",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
    author: "Ana Rodríguez",
    date: "2 abril 2025",
    comments: 41,
    category: "consejos"
  },
  {
    id: 6,
    title: "Los mejores hoteles con piscina infinita en Asia",
    excerpt: "Selección de alojamientos con vistas panorámicas y piscinas espectaculares para unas vacaciones de lujo.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    author: "Elena Torres",
    date: "25 marzo 2025",
    comments: 29,
    category: "alojamiento"
  }
];

// Categories for filtering
const categories = [
  "Todos", "Playas", "Cultura", "Gastronomía", "Aventura", "Consejos", "Alojamiento"
];

const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-64 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs text-white bg-travel-terracotta rounded-full capitalize">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-serif mb-3 text-travel-dark hover:text-travel-terracotta transition-colors">
          {post.title}
        </h3>
        <p className="text-travel-sage mb-4">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0 text-sm text-travel-sage">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <User size={14} /> {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {post.date}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <MessageSquare size={14} /> {post.comments}
        </span>
      </CardFooter>
    </Card>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1468078809804-4c7ee4276fe4)` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-3">Blog de Viajes</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Historias, consejos y guías para inspirar tu próxima aventura por Asia
            </p>
          </div>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="bg-white py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "Todos" ? "default" : "outline"}
                className={category === "Todos" ? "bg-travel-terracotta hover:bg-travel-teal text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      <section className="py-16 bg-travel-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Anterior</Button>
              <Button className="bg-travel-terracotta hover:bg-travel-teal text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-travel-dark mb-4">
              Suscríbete a Nuestro Newsletter
            </h2>
            <p className="text-travel-sage text-lg">
              Recibe las últimas actualizaciones, consejos de viaje y ofertas especiales directamente en tu bandeja de entrada
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-travel-terracotta"
            />
            <Button className="bg-travel-terracotta hover:bg-travel-teal text-white px-6">
              Suscribirme
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
