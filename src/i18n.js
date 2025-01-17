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
    braidstypestitle: 'Braids Types',
    priceLabel: 'Price',
    durationLabel: 'Duration',
    hours: 'hours',
    bookNow: 'Book Now',
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
    braidstypestitle: 'Tipi di trecce',
    priceLabel: 'Prezzo',
    durationLabel: 'Durata',
    hours: 'ore',
    bookNow: 'Prenota Ora',
  },
};


const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
