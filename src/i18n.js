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
    all: "All",
    braids: "Braids",
    locs: "Locs",
    twists: "Twists",
    crotchet: "Crotchet",
    preparations: {
      title: 'Preparations Guide',
      description: 'Follow these simple steps to prepare for your appointment.',
      step1: 'Wash your hair the day before using only shampoo, avoiding conditioner or extra treatments.',
      step2: 'Come with your hair natural. Avoid using a straightener or other styling tools.',
      step3: 'Make sure to arrive on time for your appointment to avoid delays.',
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
    braidstypestitle: 'Tipi di trecce',
    priceLabel: 'Prezzo',
    durationLabel: 'Durata',
    hours: 'ore',
    bookNow: 'Prenota Ora',
    all: "Tutti",
    braids: "Treccine",
    locs: "Dreadlocks",
    twists: "Twist",
    crotchet: "Crotchet",
    preparations: {
      title: 'Guida alle Preparazioni',
      description: 'Segui questi semplici passaggi per prepararti al tuo appuntamento.',
      step1: 'Lava i capelli il giorno prima utilizzando solo shampoo, evitando balsamo o trattamenti extra.',
      step2: 'Vieni con i capelli al naturale. Evita piastra o altri strumenti per lo styling.',
      step3: 'Assicurati di arrivare in orario per il tuo appuntamento per evitare ritardi.',
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
