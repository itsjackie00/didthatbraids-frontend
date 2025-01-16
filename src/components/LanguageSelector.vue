<template>
    <select v-model="currentLocale" @change="changeLanguage">
      <option value="en">English</option>
      <option value="it">Italiano</option>
    </select>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLocale: this.$i18n.locale, // Lingua corrente
      };
    },
    methods: {
      changeLanguage() {
        this.$i18n.locale = this.currentLocale; // Cambia la lingua
        localStorage.setItem('preferredLanguage', this.currentLocale); // Salva la lingua
      },
    },
    created() {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage) {
        this.currentLocale = savedLanguage;
        this.$i18n.locale = savedLanguage;
      }
    },
  };
  </script>
  
  <style scoped>
  select {
    padding: 10px;
    border: 1px solid #b4a79e;
    border-radius: 5px;
    background-color: #e6dcd3;
    color: #3f352c;
  }
  </style>
  