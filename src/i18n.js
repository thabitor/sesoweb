import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['fr', 'en', 'nl', 'es', 'fr-BE', 'en-US', 'fr-FR', 'en-GB'],
    returnEmptyString: false,
    nonExplicitWhitelist: true,
  load: 'languageOnly',
    debug: true,
    fallbackLng: ['fr', 'en', 'fr-BE', 'en-US']
  });

  export default i18n;