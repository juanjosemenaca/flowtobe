import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { t } = useTranslation();

  const getBreadcrumbName = (path: string) => {
    const pathMap: { [key: string]: string } = {
      destinations: t('nav.destinations'),
      experiences: t('nav.experiences'),
      blog: t('nav.blog'),
      about: t('nav.about'),
      contact: t('nav.contact'),
      privacy: t('footer.privacy'),
      terms: t('footer.terms'),
      faq: t('faq.title'),
      booking: t('nav.bookNow'),
      services: t('nav.services')
    };

    return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-travel-sage py-4">
      <Link to="/" className="flex items-center hover:text-travel-teal">
        <Home className="h-4 w-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            {isLast ? (
              <span className="text-travel-dark font-medium">
                {getBreadcrumbName(value)}
              </span>
            ) : (
              <Link to={to} className="hover:text-travel-teal">
                {getBreadcrumbName(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs; 