import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navbarTitle: 'Did That Braids',
    menu: {
      home: 'Home',
      contact: 'Contact',
      information: 'Information',
      gallery: 'Gallery',
      calendar: 'Calendar',
      blog: 'Blog',
    },
    search: {
      placeholder: 'Search...',
    },
  },
  it: {
    navbarTitle: 'Did That Braids',
    menu: {
      home: 'Home',
      contact: 'Contatti',
      information: 'Informazioni',
      gallery: 'Galleria',
      calendar: 'Calendario',
      blog: 'Blog',
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
