<template>
    <div class="braids container-fluid">
        <div class="braidstype-list pt-5 text-center">
            <h1>Tipi di treccine</h1>
        </div>
        <BraidsCard />
    </div>
    <div id="preparations">
        <PreparationsGuide />
    </div>
</template>

<script>
import BraidsCard from './cards/BraidsCard.vue';
import PreparationsGuide from './guides/PreparationsGuide.vue';

export default {
    components: {
        BraidsCard,
        PreparationsGuide
    }
};
</script>

<style scoped>
.braids {
    background-color: black;
    color: white;
}
#preparations{
    background-color: cadetblue;
}
</style>