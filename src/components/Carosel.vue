<template>
    <div class="carousel">
      <div class="carousel-image">
        <img :src="currentImage" alt="Random Image" />
      </div>
      <div class="controls">
        <button @click="prevImage">❮</button>
        <button @click="nextImage">❯</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        discounts: [
            
        ], // Array di immagini casuali
        currentIndex: 0,
      };
    },
    computed: {
      currentImage() {
        return this.discounts[this.currentIndex];
      },
    },
    mounted() {
      this.generateRandomImages(); // Genera immagini casuali all'avvio
      this.startCarousel(); // Avvia il carosello
    },
    methods: {
      generateRandomImages() {
        const imageBaseURL = "https://picsum.photos/200/10"; // URL per immagini casuali
        for (let i = 0; i < 5; i++) {
          this.discounts.push(`${imageBaseURL}${i}`); // Aggiunge immagini casuali all'array
        }
      },
      startCarousel() {
        this.timer = setInterval(() => {
          this.nextImage();
        }, 5000); // Cambia immagine ogni 5 secondi
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.discounts.length;
      },
      prevImage() {
        this.currentIndex =
          (this.currentIndex - 1 + this.discounts.length) % this.discounts.length;
      },
    },
    beforeDestroy() {
      clearInterval(this.timer); // Ferma il timer quando il componente viene distrutto
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: fixed;
    top: 150px;
    left: 0;
    width: 100%;
    background-color: blue;
    text-align: center;
    overflow: hidden;
  }
  
  .carousel-image img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }
  
  .controls {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .controls button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    outline: none;
  }
  
  .controls button:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  </style>
  