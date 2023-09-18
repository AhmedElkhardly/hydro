import i18n from "i18next"; // Import the i18next library
import { initReactI18next } from "react-i18next"; // Import the React bindings
import translationEn from './Locale/en.json'
import translationAr from './Locale/ar.json'
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  }
};

console.log(LanguageDetector);
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage?.getItem('i18nextLng') || 'en',
    fallbackLng: ["ar", "en"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;