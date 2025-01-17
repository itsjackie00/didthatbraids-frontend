<template>
  <div class="braids container-fluid mt-5 mb-5">
    <div class="braidstype-list pt-5 text-center ">
      <h1>{{ $t('braidstypestitle') }}</h1>
    </div>
    <BraidsCard />
  </div>

  <!-- Contenitore Principale di Preparazioni -->
  <div id="preparations" class="d-flex align-items-center justify-content-between mb-5 mt-5">
    <!-- Contenitore Sinistro -->
    <div class="left-container d-flex flex-column align-items-center justify-content-center h-100">
      <img
        src="https://media0.giphy.com/media/t0AJF1JhZdjji/giphy.gif?cid=6c09b952alce3vorxg4r8o4rt9bqcypol6nwk85mh6w0tno8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Hair Preparation" class="img-fluid rounded shadow animate-image gif" />
      <video src="/Users/Ama/Downloads/Download.mp4" autoplay muted loop class="video"></video>
      <img src="https://media0.giphy.com/media/Wp1SpsnWTPWwwXaoSV/giphy.gif" alt="i don't know what I'm doing gif"
        class="gif" />
    </div>

    <!-- Contenitore Centrale -->
    <div class="center-container">
      <PreparationsGuide />
    </div>

    <!-- Contenitore Destro -->
    <div class="right-container d-flex flex-column align-items-center justify-content-center h-100">
      <video src="/Users/Ama/Downloads/Download (1).mp4" autoplay muted loop class="video"></video>
      <img src="https://media3.giphy.com/media/l2QZVplwKVp9Amhaw/200.gif" alt="make myself clear animated gif"
        class="gif" />
      <img
        src="https://media0.giphy.com/media/1wXcVnkfnEYciO7KXP/giphy.gif?cid=6c09b952rh4kj4vlswwo9uatg5ne5edyrh3gd3m4h14d34jv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Hair Preparation" class="img-fluid rounded shadow animate-image gif" />
    </div>
  </div>

  <!-- Contenitore di Informazioni per il Giorno dell'Appuntamento -->
  <!-- <div id="appointment-prep">
    <h2 class="text-center mb-4">Informazioni Importanti per il Giorno dell'Appuntamento</h2>
    <div>
      <AppointmentPrep />
    </div>
  </div> -->
</template>

<script>
import BraidsCard from './cards/BraidsCard.vue';
import PreparationsGuide from './guides/PreparationsGuide.vue';
import AppointmentPrep from './guides/AppointmentPrep.vue';

export default {
  components: {
    BraidsCard,
    PreparationsGuide,
    AppointmentPrep,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Italiana&family=Knewave&family=Nunito+Sans:ital,opsz,wdth,wght@1,6..12,125,300&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.braids {
  font-family: 'Playfair Display', serif;
}

#preparations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: auto; /* Altezza dinamica */
  background-color: $color-beige-light;
}

/* Contenitori Laterali */
.left-container,
.right-container {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}

.left-container {
  margin-right: 10px;
}

.right-container {
  margin-left: 10px;
}

/* Contenitore Centrale */
.center-container {
  width: 70%;
  padding: 20px;
  text-align: center;
}

/* Video Reattivi */
.video {
  max-width: 100%; /* Adatta alla larghezza del contenitore */
  height: auto; /* Mantiene le proporzioni */
  border-radius: 10px;
  transition: transform 0.3s ease; /* Aggiunge un effetto hover */
}

.video:hover {
  transform: scale(1.05); /* Zoom leggero al passaggio del mouse */
}

/* GIF Reattivi */
.gif {
  max-width: 100%; /* Adatta alla larghezza del contenitore */
  height: auto; /* Mantiene le proporzioni */
  margin-top: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gif:hover {
  transform: scale(1.05); /* Zoom leggero al passaggio del mouse */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Media Queries per Schermi Piccoli */
@media (max-width: 768px) {
  #preparations {
    flex-direction: column;
    height: auto; /* Altezza dinamica per schermi piccoli */
    padding: 10px;
  }

  .left-container,
  .right-container,
  .center-container {
    width: 90%; /* Adattamento per schermi piccoli */
    margin-bottom: 20px;
  }

  .center-container {
    width: 100%;
  }
}

</style>