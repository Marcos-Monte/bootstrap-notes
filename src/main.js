// Imports 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; // Necessários para o funcionamento do bootstrap-vue
import Vue from 'vue';
import App from './App.vue';

import router from './router';

// Import de Estilos do Bootstrap-vue
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

// Disponibilizando o uso do Bootstrap-vue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)


new Vue({
  router, // Registrando o router globalmente
  render: h => h(App),
}).$mount('#app')
