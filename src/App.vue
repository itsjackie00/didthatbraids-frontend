<template>
    <Navbar />
    <Carosel />
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carosel from './components/Carosel.vue';

export default {
    components: {
        Navbar,
        Carosel
    }
};
</script>

<style scoped>

</style>
