<template>
  <div id="app">
    <!-- Elemento, boostrapvue, de tabela que recebe a props indicando se os elementos mostrados serão ativos ou os inativos -->
    <Table 
      :isActives="isActives"
    />
    <!-- Alterna entre os registros ativos e inativos via click -->
    <b-button :variant="isActives?'primary':'warning'" @click="handleChangeActives()">

      <!-- Valor alternado via click no botão -->
      Registros {{ isActives? 'Ativos': 'Inativos' }}

    </b-button>
  </div>
</template>

<script>
// Import de componente
import Table from '@/components/Table.vue';
export default {
  // Registros de Componente
  components: {Table},
  
  name: 'App',

  data(){
    return {
      isActives: true,
    }
  },

  methods: {
    // Alterna entre 'true e false' o valor da variavel 'isActives'
    handleChangeActives(){
      // console.log(this.isActives)
      return this.isActives = !this.isActives
    }
  }

}
</script>

<style>

</style>
