<template>
    <Navbar />
    <Carosel />
    <BraidstypeList />
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carosel from './components/Carosel.vue';
import BraidstypeList from './components/BraidstypeList.vue';

export default {
    components: {
        Navbar,
        Carosel,
        BraidstypeList
    },
    data() {
        return {
            currentLocale: this.$i18n.locale, // Lingua corrente
        }
    },
    methods: {
        changeLanguage() {
            this.$i18n.locale = this.currentLocale; // Cambia la lingua
        },
    },
};
</script>

<style scoped>
#language-selector {
  padding: 10px;
  border: 1px solid #b4a79e;
  border-radius: 5px;
  background-color: #e6dcd3;
  color: #3f352c;
}
</style>
