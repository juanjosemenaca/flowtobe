import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface LanguageSelectorProps {
  isScrolled: boolean;
  onLanguageChange?: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled, onLanguageChange }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ca', name: 'Català' },
    { code: 'it', name: 'Italiano' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    if (onLanguageChange) {
      onLanguageChange();
    }
    navigate('/');
  };

  const textColor = isScrolled ? 'text-travel-dark' : 'text-white';
  const borderColor = isScrolled ? 'border-travel-dark' : 'border-white';
  const arrowColor = isScrolled ? 'black' : 'white';

  return (
    <div className="relative">
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className={`bg-transparent border rounded px-2 py-1 focus:outline-none focus:ring-2 ${textColor} ${borderColor} cursor-pointer appearance-none pr-8`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${arrowColor}' viewBox='0 0 24 24' stroke='${arrowColor}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1.5em 1.5em'
        }}
      >
        {languages.map((lang) => (
          <option 
            key={lang.code} 
            value={lang.code}
            className="bg-white text-travel-dark"
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 