<template>

    <b-container fluid="md" class="px-2 h-100">

        <b-row style="border: solid red; height: 33%;">

            <b-col md class="center" style="border: solid blue">Coluna 100% abaixo de 720px</b-col>
            <b-col md class="center" style="border: solid blue">Coluna 100% abaixo de 720px</b-col>

        </b-row>

        <b-row style="border: solid green; height: 33%;">

            <b-col lg class="center" style="border: solid yellow">Coluna 100% abaixo de 991px</b-col>
            <b-col lg class="center" style="border: solid yellow">Coluna 100% abaixo de 991px</b-col>

        </b-row>

        <b-row style="border: solid red; height: 33%;">

            <b-col xl class="center" style="border: solid purple">Coluna 100% abaixo de 1200px</b-col>
            <b-col xl class="center" style="border: solid purple">Coluna 100% abaixo de 1200px</b-col>

        </b-row>

    </b-container>
    
</template>

<script> 
export default {
    name: 'HomeVue',


};
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
