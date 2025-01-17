<template>
  <div class="preparations-guide container pt-5 pb-5">
    <hr />
    <div class="text-center mb-4">
      <h2 class="font-primary">{{ $t('preparations.title') }}</h2>
      <p class="text-muted">{{ $t('preparations.description') }}</p>
    </div>
    <div class="row align-items-center">
      <!-- Animazione e immagine interattiva -->
      <div class="col-md-3 mb-4 text-center">
        <div class="image-container position-relative">
          <img
            src="https://media0.giphy.com/media/t0AJF1JhZdjji/giphy.gif?cid=6c09b952alce3vorxg4r8o4rt9bqcypol6nwk85mh6w0tno8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Hair Preparation"
            class="img-fluid rounded shadow animate-image gif"
          />
        </div>
      </div>
      <!-- Testo guida -->
      <div class="col-md-5 mb-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex align-items-start">
            <i class="fas fa-shower text-primary me-3"></i>
            <span>{{ $t('preparations.step1') }}</span>
          </li>
          <li class="list-group-item d-flex align-items-start">
            <i class="fas fa-hair-dryer text-primary me-3"></i>
            <span>{{ $t('preparations.step2') }}</span>
          </li>
          <li class="list-group-item d-flex align-items-start">
            <i class="fas fa-calendar-check text-primary me-3"></i>
            <span>{{ $t('preparations.step3') }}</span>
          </li>
        </ul>
      </div>
      <!-- Animazione e immagine interattiva -->
      <div class="col-md-4 mb-4 text-center">
        <div class="image-container position-relative">
          <img
            src="https://media0.giphy.com/media/1wXcVnkfnEYciO7KXP/giphy.gif?cid=6c09b952rh4kj4vlswwo9uatg5ne5edyrh3gd3m4h14d34jv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Hair Preparation"
            class="img-fluid rounded shadow animate-image gif"
          />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "preparations-guide",
  setup() {
    const { t } = useI18n(); // Accede alla funzione di traduzione
    return { t };
  },
};
</script>

<style scoped>
/* Lo stile rimane invariato */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.preparations-guide {
  font-family: "Poppins", sans-serif;
}

.font-primary {
  font-weight: 600;
}

h2 {
  color: white;
}

/* Lista stile */
.list-group-item {
  font-size: 1rem;
  background-color: #f9f9f9;
  border: none;
  border-left: 5px solid #6c63ff;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.list-group-item i {
  font-size: 1.5rem;
}

/* Immagine interattiva */
.image-container {
  position: relative;
}

.image-container img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
}

.image-container:hover img {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.gif {
  height: 50%;
  width: 50%;
}
</style>
