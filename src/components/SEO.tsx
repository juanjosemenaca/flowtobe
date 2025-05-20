import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO = ({
  title = 'FLOW2BALY - Explora Increíbles Destinos Asiáticos',
  description = 'Descubre experiencias únicas de viaje por Asia con nuestra selección de destinos, experiencias culturales y paquetes de aventura.',
  keywords = 'viajes Asia, turismo Asia, destinos asiáticos, experiencias culturales Asia, paquetes de viaje Asia',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogType = 'website',
  canonical,
}: SEOProps) => {
  const siteUrl = 'https://flow2baly.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FLOW2BALY" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO; 