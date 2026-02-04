import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";

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
    category: "beaches",
    slug: "las-10-playas-mas-impresionantes-de-bali"
  },
  {
    id: 2,
    title: "Guía completa para visitar los templos de Angkor Wat",
    excerpt: "Todo lo que necesitas saber para explorar el complejo arqueológico más grande del mundo en Camboya.",
    image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f",
    author: "Carlos Martínez",
    date: "3 mayo 2025",
    comments: 18,
    category: "culture",
    slug: "guia-completa-templos-angkor-wat"
  },
  {
    id: 3,
    title: "Comida callejera en Bangkok: sabores que no puedes perderte",
    excerpt: "Un recorrido gastronómico por los mercados y puestos callejeros más auténticos de la capital tailandesa.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    author: "Laura Sánchez",
    date: "28 abril 2025",
    comments: 32,
    category: "gastronomy",
    slug: "comida-callejera-bangkok"
  },
  {
    id: 4,
    title: "Los mejores trekkings en el norte de Vietnam",
    excerpt: "Rutas imprescindibles para los amantes del senderismo que quieran explorar las montañas y los campos de arroz del norte vietnamita.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    author: "Javier López",
    date: "15 abril 2025",
    comments: 15,
    category: "adventure",
    slug: "trekkings-norte-vietnam"
  },
  {
    id: 5,
    title: "Guía para viajar a Japón durante la floración de los cerezos",
    excerpt: "Consejos prácticos para planificar tu viaje durante el hanami y disfrutar de este espectáculo natural único.",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
    author: "Ana Rodríguez",
    date: "2 abril 2025",
    comments: 41,
    category: "tips",
    slug: "guia-viajar-japon-floracion-cerezos"
  },
  {
    id: 6,
    title: "Los mejores hoteles con piscina infinita en Asia",
    excerpt: "Selección de alojamientos con vistas panorámicas y piscinas espectaculares para unas vacaciones de lujo.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    author: "Elena Torres",
    date: "25 marzo 2025",
    comments: 29,
    category: "accommodation",
    slug: "hoteles-piscina-infinita-asia"
  }
];

// Categories for filtering
const categories = [
  "all", "beaches", "culture", "gastronomy", "adventure", "tips", "accommodation"
];

const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const { t } = useTranslation();
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/blog/${post.slug}`}>
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
              {t(`blog.categories.${post.category}`)}
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
              <User size={14} /> {t('blog.posts.author')}: {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {t('blog.posts.date')}: {post.date}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <MessageSquare size={14} /> {post.comments} {t('blog.posts.comments')}
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

const Blog = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page without manual scrolling (global scrolling will handle it)
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('blog.title')}
        description={t('blog.subtitle')}
        keywords="blog viajes Asia, consejos viajes, guías turísticas, experiencias Asia"
        canonical="/blog"
      />
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
            <h1 className="text-4xl md:text-6xl font-serif mb-3">{t('blog.title')}</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              {t('blog.subtitle')}
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
                variant={category === activeCategory ? "default" : "outline"}
                className={category === activeCategory ? "bg-travel-terracotta hover:bg-travel-teal text-white" : ""}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1); // Reset to first page when category changes
                }}
              >
                {t(`blog.categories.${category}`)}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`} 
                  >
                    {t('blog.pagination.previous')}
                  </PaginationPrevious>
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <PaginationItem key={number}>
                    <PaginationLink 
                      isActive={number === currentPage}
                      onClick={() => handlePageChange(number)}
                      className="cursor-pointer"
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`} 
                  >
                    {t('blog.pagination.next')}
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
