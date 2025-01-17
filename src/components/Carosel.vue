<template>
  <div class="carousel">
    <div class="carousel-image">
      <img :src="currentImage" alt="Random Image" />
    </div>
    <div class="carousel-controls container-fluid">
      <!-- Controls with d-flex -->
      <div class="controls mt-2 mb-2">
        <!-- Progress Bar -->
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <button @click="prevImage">❮</button>
        <button @click="nextImage">❯</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      discounts: [
        "https://i.etsystatic.com/40688064/r/il/aac3c9/6008354205/il_fullxfull.6008354205_tjol.jpg",
        "https://www.topknot.co.uk/wp-content/uploads/2017/10/Student-Discount-Topknot-Salon-Hair-and-Beauty-Nottingham.jpg",
        "https://bombayhair.com/cdn/shop/files/banner.webp?v=1735045578",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.discounts[this.currentIndex];
    },
    progressPercentage() {
      return ((this.currentIndex + 1) / this.discounts.length) * 100;
    },
  },
  mounted() {
    this.generateRandomImages();
    this.startCarousel();
  },
  methods: {
    generateRandomImages() {
      const imageBaseURL = "https://heygoldie.com/blog/wp-content/uploads/2020/11/hair-salon-gift.jpg";
      for (let i = 0; i < 5; i++) {
        this.discounts.push(`${imageBaseURL}?random=${i}`);
      }
    },
    startCarousel() {
      this.timer = setInterval(() => {
        this.nextImage();
      }, 5000);
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.discounts.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.discounts.length) % this.discounts.length;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/general.scss";

.debug {
  border: 1px solid red;
}

.carousel {
  margin-top: 70px;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.carousel-image img {
  width: 100%;
  max-height: 800px;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

/* Progress Bar Styles */
.progress-bar {
  height: 5px;
  background-color: $color-brown-dark;
  width: 300px;
  margin: 0 auto;
  border-radius: 50px;
}

.progress {
  height: 100%;
  background-color: $color-brown-light ;
  width: 0%;
  transition: width 0.5s ease-in-out;
}

/* Updated Controls */
.controls {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
}

.controls button {
  background-color: white;
  color: black;
  border: 1px solid $color-brown-light;
  padding: 5px 15px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.controls button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>