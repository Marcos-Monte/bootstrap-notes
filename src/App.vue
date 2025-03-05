<template>
  <!-- 'b-container' ou div com a class '.container', define se estamos usando o bootstrap ou bootstrapvue -->
  <b-container fluid="md" class="d-flex flex-column justify-content-start p-0" id="app">
    <Header />
  <!-- <div class="container-md" id="app"> -->
    <!-- Elemento, boostrapvue, de tabela que recebe a props indicando se os elementos mostrados serão ativos ou os inativos -->
    <!-- <Table /> -->

    <component 
      :is="componente"
    />

  <!-- </div> -->
  </b-container>

</template>

<script>
// Import de componente
import Table from '@/components/Table.vue';

import Header from './components/Header.vue';

export default {
  // Registros de Componente
  components: {Table, Header},
  
  name: 'App',

  data(){
    return {
      // isActives: true,
      componente: Table
    }
  },

}
</script>

<style>
 #app{
  height: 100vh;
 }
</style>
