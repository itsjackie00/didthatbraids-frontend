<template>
  <div class="language-switcher">
    <img 
      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png" 
      alt="English" 
      class="flag" 
      @click="changeLanguage('en')" 
      :class="{ active: currentLocale === 'en' }"
    />
    <img 
      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png" 
      alt="Italiano" 
      class="flag" 
      @click="changeLanguage('it')" 
      :class="{ active: currentLocale === 'it' }"
    />
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      currentLocale: this.$i18n.locale, // Lingua corrente
    };
  },
  methods: {
    changeLanguage(locale) {
      this.currentLocale = locale; // Cambia lingua corrente
      this.$i18n.locale = locale; // Aggiorna la lingua nell'app
      localStorage.setItem('preferredLanguage', locale); // Salva la lingua
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
.language-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.flag {
  width: 40px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.flag:hover {
  transform: scale(1.1);
}

.flag.active {
  border: 2px solid #6c63ff; /* Bordo per indicare la lingua selezionata */
  border-radius: 5px;
  opacity: 1;
}

.flag:not(.active) {
  opacity: 0.7;
}
</style>
