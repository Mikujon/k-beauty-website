import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'it',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    resources: {
      it: {
        translation: {}
      },
      en: {
        translation: {}
      },
      sq: {
        translation: {}
      }
    }
  });

// Load translations dynamically
const loadTranslations = async (language) => {
  try {
    const response = await fetch(`/locales/${language}/common.json`);
    const translations = await response.json();
    i18n.addResourceBundle(language, 'translation', translations, true, true);
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
  }
};

// Load all translations
['it', 'en', 'sq'].forEach(lang => {
  loadTranslations(lang);
});

export default i18n;

