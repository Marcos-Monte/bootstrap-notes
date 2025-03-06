<template>
    <b-container>
        <!-- Organização: Estilos, Binds, Id tabela-->
        <b-table 
            hover 
            responsive
            small
            caption-top

            :items="activeItems"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            
            aria-controls="my-table"
        >
        <!-- Legenda de uma tabela, colocando a info 'caption-top' em 'b-table' a legenda fica no topo -->
        <template #table-caption>Isto é uma legenda de tabela.</template>

        </b-table>

        <!-- Organização: Estilos, Binds, Id tabela-->
        <b-pagination
            first-number
            last-number
            align="fill"
            
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            
            aria-controls="my-table"
        ></b-pagination>

        <!-- Alterna entre os registros ativos e inativos via click -->
        <b-button :variant="isActives?'primary':'warning'" @click="handleChangeActives()" >

            <!-- Valor alternado via click no botão -->
            Registros {{ isActives? 'Ativos': 'Inativos' }}

        </b-button>
    </b-container>

    
</template>

<script> 
import { items } from '@/data/registros';
export default {
    name: 'TableVue',

    data() {
        return {
            currentPage: 1, // variável que armazena a pagina atual

            perPage: 2, // variavel que indica quantos items vão aparecer por pagina

            isActives: true,
            
            fields: [ // Fields, são so 'dados'que serão renderizados na tela. Para colocar filtro, usar a propriedade 'sortable=true' 
                { key: 'first_name', sortable: true },
                { key: 'age', sortable: true },
                { key: 'cpf', sortable: true },
            ],

            itemsTable: items,
            
        };
    },

    // Propriedades computadas, serão renderizadsa novamente apenas se houverem mudanças
    computed: {
        // Se houver mudanças, retorna a lógica abaixo
        activeItems(){
            return  this.itemsTable.filter(item => item.isActive === this.isActives)
        },

        rows() {
            console.log(this.activeItems.length)
            return this.activeItems.length
        }
    }, 

    methods: {
    // Alterna entre 'true e false' o valor da variavel 'isActives'
    handleChangeActives(){
      // console.log(this.isActives)
        return this.isActives = !this.isActives
        }
    }


};
</script>

<style scoped>
    
</style>
