import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Importa i file CSS e JavaScript di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Importa i file CSS e JavaScript di Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faCoffee, faUser)

app.use(router);

app.mount('#app');
