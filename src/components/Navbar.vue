<template>
  <nav>
    <div class="container">
      <div class="row">
        <!-- navigation title -->
        <div class="col-12 title">
          <h1>Did That Braids</h1>
        </div>
        <!-- navigation links -->
          <!-- Language Selection -->
        <div id="language-selection" class="col-12">
          <LanguageSelector />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';
export default {
  name: 'Navbar',
  components: {
    LanguageSelector
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Italiana&family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

nav {
  background-color: #b4a79e;
  padding: 10px 0;

  .title {
    text-align: center;
    font-family: 'Knewave', serif;
    font-size: 2.5rem;
    color: $color-black;
  }
}
</style>