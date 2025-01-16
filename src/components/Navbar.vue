<template>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="m-auto">
        <div class="brand-title text-center">
          <h1>{{ $t('navbarTitle') }}</h1>
        </div>
        <div id="language-selection">
          <LanguageSelector />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto d-flex justify-content-between">
            <li class="nav-item">
              <a class="nav-link active" href="#">{{ $t('menu.home') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('menu.contact') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('menu.information') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('menu.gallery') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('menu.calendar') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ $t('menu.blog') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:didthatbraids@email.com">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import LanguageSelector from './LanguageSelector.vue';
  export default {
    components: {
      LanguageSelector,
    },
    data() {
      return {
        showSearch: false,
      };
    },
    methods: {
      toggleNavbar() {
        const navbar = document.getElementById('navbarNav');
        navbar.classList.toggle('show');
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import '../assets/styles/general.scss';
  @import url('https://fonts.googleapis.com/css2?family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Italiana&family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  
  #logo {
    height: 85px;
    width: 100px;
  }
  
  .brand-title {
    font-family: 'Knewave', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.5rem;
    color: $color-black;
    margin: 0 auto;
  }
  
  nav {
    background-color: $color-beige;
    font-family: 'Playfair Display', serif;
  }
  
  .navbar {
    width: 100%;
    background-color: $color-beige;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar li {
    margin: 0 15px;
  }
  
  .navbar a {
    color: $color-black;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
    color: whitesmoke;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .navbar ul {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar li {
      margin: 10px 0;
    }
  }
  </style>
  