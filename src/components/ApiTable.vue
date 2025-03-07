<template>
    <b-container>
        <!-- Organização: Estilos, Binds, Id tabela-->
        <b-table 
            hover 
            responsive
            small
            caption-top

            :items="itemsTable"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            
            aria-controls="api-table"
        >
        <!-- Legenda de uma tabela, colocando a info 'caption-top' em 'b-table' a legenda fica no topo -->
        <template #table-caption>Esses dados são importados da aplicação <a href="https://cadastro-gestantes.vercel.app/cadastro" target="_blank">Cadastro de Gestantes</a></template>

        </b-table>

        <!-- Visivel apenas se a quantidade de itens for maior que a quantidade aceita por pagina-->
        <b-pagination
            v-if="rows > perPage"
            first-number
            last-number
            align="fill"
            
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            
            aria-controls="api-table"
        ></b-pagination>

    </b-container>

    
</template>

<script> 
import axios from 'axios';

export default {
    name: 'TableVue',

    data() {
        return {
            currentPage: 1, // variável que armazena a pagina atual

            perPage: 3, // variavel que indica quantos items vão aparecer por pagina
            
            fields: [ // Fields, são so 'dados'que serão renderizados na tela. Para colocar filtro, usar a propriedade 'sortable=true' 
                { key: 'nome', sortable: false , formatter: (value) => value.toUpperCase()}, // Formatter atribui 
                { key: 'equipe', sortable: true, formatter: (value) => value.toUpperCase() },
                { key: 'risco', sortable: true, formatter: (value) => value.toUpperCase() },
            ],
            
            itemsTable: [], // Array que armazena os dados da API
            
        };
    },

    // Propriedades computadas, serão renderizadsa novamente apenas se houverem mudanças
    computed: {
        // Se houver mudanças, retorna a lógica abaixo
        rows() {
            console.log(this.itemsTable.length)
            return this.itemsTable.length
        }
    }, 

    methods: {
        // Função que carrega os dados da API
        async getItems() {
            // console.log('Carregando dados...');
            try {
                // Requisição GET para a API
                const response = await axios.get(
                    // URL da API
                    'https://apicadastrogestantes.onrender.com', 
                    {
                        // Headers da requisição
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    }
                );

                //console.log('Aqui ', response.data);
                // Atribui os dados da API a variável itemsTable
                this.itemsTable = response.data;

            } catch (error) {
                // Caso ocorra um erro, exibe no console
                if (error.response) {
                    // A resposta foi recebida, mas o servidor respondeu com um status de erro
                    console.error('Erro na resposta da API: ', error.response.data);
                } else if (error.request) {
                    // A requisição foi feita, mas nenhuma resposta foi recebida
                    console.error('Nenhuma resposta recebida: ', error.request);
                } else {
                    // Algo aconteceu ao configurar a requisição que acionou um erro
                    console.error('Erro ao configurar a requisição: ', error.message);
                }
            }
        },
    
    },
    
    mounted() {
        // Função que carrega os dados da API
        this.getItems();
    }

};
</script>

<style scoped>
    
</style>
