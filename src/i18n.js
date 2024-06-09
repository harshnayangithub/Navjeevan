// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json'; // English translation file
import translationHI from './locales/hi/translation.json'; // Hindi translation file

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detects user language
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      hi: {
        translation: translationHI,
      },
    },
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;
