<template>
  <!-- 'b-container' ou div com a class '.container', define se estamos usando o bootstrap ou bootstrapvue -->
  <b-container fluid="md" class="d-flex flex-column justify-content-start p-0" id="app">
    <!-- Import da NavBar|Header -->
    <Header />

    <!-- Conteudo renderizado via Routes -->
    <router-view></router-view>

  <!-- </div> -->
  </b-container>

</template>

<script>
// Import de componente
import Header from './components/Header.vue';

export default {
  // Registros de Componente
  components: { Header},
  
  name: 'App',

}
</script>

<style>
  #app{
    height: 100vh;
    width: 100vw;
  }
</style>
