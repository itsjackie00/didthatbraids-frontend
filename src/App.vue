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
    }
};
</script>

<style scoped>

</style>
