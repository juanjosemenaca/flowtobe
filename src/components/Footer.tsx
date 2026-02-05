import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-travel-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6 flex items-baseline">
              <h2 className="text-2xl font-serif font-bold">
                FLOW2B
              </h2>
              <span className="ml-2 text-sm italic text-gray-300">let it flow</span>
            </Link>
            <p className="text-gray-300 mb-6">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={20} className="text-travel-terracotta mr-3 mt-1" />
                <p className="text-gray-300">admin@flow2b.org</p>
              </div>
              <div className="flex items-start">
                <Youtube size={20} className="text-travel-terracotta mr-3 mt-1" />
                <a 
                  href="https://www.youtube.com/channel/UCrcOd1oUB1xMNMBwDxNrmkQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-travel-terracotta transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FLOW2B. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-travel-terracotta text-sm">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-travel-terracotta text-sm">
              {t('footer.terms')}
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-travel-terracotta text-sm">
              {t('faq.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
