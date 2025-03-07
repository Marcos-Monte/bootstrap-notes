// Imports de Libs
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; // Necessários para o funcionamento do bootstrap-vue
// Imports de Componentes
import Vue from 'vue';
import App from './App.vue';

// Import de Plugins
import router from './router';

// Import de Estilos do Bootstrap-vue
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

// Configuração do Vue
Vue.config.productionTip = false

// Disponibilizando o uso do Bootstrap-vue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

// Instanciando o Vue
new Vue({
  // Registrando o router globalmente
  router, 
  // Render
  render: h => h(App), 
  // Montando o Vue
}).$mount('#app')
