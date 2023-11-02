// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      UZ: {
        translation: {
          home: 'Hello, world! (Uzbek)',
        },
      },
      EN: {
        translation: {
          dsdas: 'Hello, world! (English)',
        },
      },
      RU: {
        translation: {
          kjghjg: 'Hello, world! (Russian)',
        },
      },
      // Add more languages and translations as needed
    },
    lng: 'UZ', // default language
    fallbackLng: 'UZ',
  });

export default i18n;
