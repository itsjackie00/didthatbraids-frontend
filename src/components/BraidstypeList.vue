<template>
    <div class="braids container-fluid">
      <div class="braidstype-list pt-5 text-center">
        <h1>Tipi di treccine</h1>
      </div>
      <BraidsCard />
    </div>
    <div id="preparations" class="d-flex align-items-center justify-content-between">
      <!-- Contenitore Sinistro -->
      <div class="left-container d-flex flex-column align-items-center justify-content-center">
        <video src="/Users/Ama/Downloads/Download.mp4" autoplay muted loop class="video"></video>
        <img
          src="https://media0.giphy.com/media/Wp1SpsnWTPWwwXaoSV/giphy.gif?cid=6c09b952ha4j7g5xb4ybfwle7fbbgdim0755lw4azlt593c5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt="i don't know what I'm doing gif"
          class="gif"
        />
        <img
          src="https://media0.giphy.com/media/Wp1SpsnWTPWwwXaoSV/giphy.gif?cid=6c09b952ha4j7g5xb4ybfwle7fbbgdim0755lw4azlt593c5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt="i don't know what I'm doing gif"
          class="gif"
        />
      </div>
      <!-- Contenitore Centrale -->
      <div class="center-container">
        <PreparationsGuide />
      </div>
  
      <!-- Contenitore Destro -->
      <div class="right-container d-flex flex-column align-items-center justify-content-center">
        <video src="/Users/Ama/Downloads/Download (1).mp4" autoplay muted loop class="video"></video>
        <img
          src="https://media3.giphy.com/media/l2QZVplwKVp9Amhaw/200.gif?cid=6c09b952xjkdf382yuhm5m0c4c3rimgpbroq621v8zqzp4cm&ep=v1_gifs_search&rid=200.gif&ct=g"
          alt="make myself clear animated gif"
          class="gif"
        />
        <img
          src="https://media3.giphy.com/media/l2QZVplwKVp9Amhaw/200.gif?cid=6c09b952xjkdf382yuhm5m0c4c3rimgpbroq621v8zqzp4cm&ep=v1_gifs_search&rid=200.gif&ct=g"
          alt="make myself clear animated gif"
          class="gif"
        />
      </div>
    </div>
  </template>
  
  <script>
  import BraidsCard from './cards/BraidsCard.vue';
  import PreparationsGuide from './guides/PreparationsGuide.vue';
  
  export default {
    components: {
      BraidsCard,
      PreparationsGuide,
    },
  };
  </script>
  
  <style scoped>
  .braids {
    background-color: #3f352c;
    color: white;
  }
  
  #preparations {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b4a79e;
    padding: 20px;
    height: 59vh; /* Altezza fissa per evitare scrolling */
  }
  
  /* Contenitori Laterali */
  .left-container,
  .right-container {
    width: 15%; /* Larghezza laterali */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    background-color: #3f352c;
  }
  
  .left-container {
    margin-right: 10px;
  }
  
  .right-container {
    margin-left: 10px;
  }
  
  /* Contenitore Centrale */
  .center-container {
    width: 70%; /* Larghezza centrale */
    padding: 20px;
    text-align: center;

  }
  
  /* Video */
  .video {
    width: 50%;
    height: 50%;
    border-radius: 10px;
  }
  
  /* GIF */
  .gif {
    width: 80%;
    height: auto;
    margin-top: 10px;
    border-radius: 10px;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    #preparations {
      flex-direction: column;
      height: auto; /* Altezza dinamica per schermi più piccoli */
    }
  
    .left-container,
    .right-container,
    .center-container {
      width: 90%; /* Adattamento dinamico */
      margin-bottom: 20px;
    }
  
    .center-container {
      width: 100%;
    }
  }
  </style>
  