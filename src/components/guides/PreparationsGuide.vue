<template>
  <section>
    <div class="preparations-guide container pb-5">
      <div class="text-center mb-4">
        <h2 class="font-primary mb-3">{{ $t('preparations.title') }}</h2>
        <p class="text-muted mb-5">{{ $t('preparations.description') }}</p>
      </div>
      <div class=" align-items-center">
        <!-- Testo guida -->
        <div class="w-75 m-auto">
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
      </div>
    </div>
  </section>
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
