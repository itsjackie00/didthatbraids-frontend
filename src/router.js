import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Homepage.vue';
import GalleryPage from './pages/Gallerypage.vue';
import BookingPage from './pages/Bookingpage.vue';
import ContactPage from './pages/Contactpage.vue';
  
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  { path: '/booking', name: 'Booking', component: BookingPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
