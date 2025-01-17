<template>
  <div class="container mt-5">
    <!-- Filter Dropdown -->
    <div class="row mb-4">
      <div class="col-12">
        <select class="form-select" v-model="selectedFilter">
          <option value="all">{{ t('all') }}</option>
          <option value="braids">{{ t('braids') }}</option>
          <option value="locs">{{ t('locs') }}</option>
          <option value="twists">{{ t('twists') }}</option>
          <option value="twists">{{ t('crotchet') }}</option>
        </select>
      </div>
    </div>

    <!-- Filtered Cards -->
    <div class="row g-4">
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="(braid, index) in filteredBraids" :key="index">
        <div class="card h-100 shadow-sm rounded-circle-card">
          <div class="image-container">
            <img :src="braid.image" class="card-img-top" :alt="braid.type" />
          </div>
          <div class="card-body text-center">
            <h5 class="card-title font-primary">{{ braid.type }}</h5>
            <a href="#" class="btn btn-primary btn-sm mt-2">{{ t('bookNow') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { braidsData } from "../../data";
import { useI18n } from "vue-i18n";

export default {
  name: "BraidsCard",
  data() {
    return {
      braids: braidsData,
      selectedFilter: "all", // Default filter
    };
  },
  computed: {
    filteredBraids() {
      if (this.selectedFilter === "all") {
        return this.braids; // Show all items if no filter is applied
      }
      return this.braids.filter((braid) => braid.category === this.selectedFilter);
    },
  },
  setup() {
    const { t } = useI18n(); // Access the translation function
    return { t };
  },
};
</script>

<style scoped>
/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.container {
  font-family: "Poppins", sans-serif;
}

/* Card styling */
.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Image container with overlay */
.image-container {
  position: relative;
  height: 200px;
  /* Fixed height for the images */
  width: 200px;
  padding-top: 5px;
  overflow: hidden;
  margin: 0 auto;
}

.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.btn-primary {
  background-color: #6c63ff;
  border-color: #6c63ff;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #5a54e3;
  transform: translateY(-3px);
}

.form-select {
  width: 10%;
  padding: 10px;
  border: 1px solid #b4a79e;
  border-radius: 5px;
  background-color: #e6dcd3;
  color: #3f352c;
}
</style>