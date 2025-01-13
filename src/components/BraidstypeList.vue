<template>
    <div class="braids container-fluid">
        <div class="braidstype-list mt-3">
            <h1>Tipi di treccine</h1>
            <p>Scopri i nostri tipi di treccine!</p>
        </div>
        <BraidsCard />
    </div>
</template>

<script>
import BraidsCard from './cards/BraidsCard.vue';

export default {
    components: {
        BraidsCard,
    }
};
</script>

<style scoped></style>