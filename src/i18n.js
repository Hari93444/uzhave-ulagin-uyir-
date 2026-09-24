import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationTA from './locales/ta.json';
import translationEN from './locales/en.json';
import translationHI from './locales/hi.json';

const resources = {
  ta: {
    translation: translationTA,
  },
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ta', // Default language is Tamil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from xss
    },
  });

export default i18n;
