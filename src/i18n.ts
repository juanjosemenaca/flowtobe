import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import caTranslations from './locales/ca.json';
import itTranslations from './locales/it.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      ca: { translation: caTranslations },
      it: { translation: itTranslations }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 