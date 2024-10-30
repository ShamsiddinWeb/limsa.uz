import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import engTranslation from "../public/locales/eng.json";

// Get the saved language or default to "uz"
const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language,
    debug: process.env.NODE_ENV === "development", // Enable debug only in development
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      eng: { translation: engTranslation },
    },
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
