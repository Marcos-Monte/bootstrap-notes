<template>

    <b-container fluid="sm" class="px-2 h-100">
        <b-row style="border: solid red; height: 50%;">
            <b-col md style="border: solid blue">Coluna 100% abaixo de 720px</b-col>
            <b-col md style="border: solid blue">Coluna 100% abaixo de 720px</b-col>
        </b-row>
        <b-row style="border: solid green; height: 50%;">
            <b-col lg style="border: solid yellow">Coluna 100% abaixo de 991px</b-col>
            <b-col lg style="border: solid yellow">Coluna 100% abaixo de 991px</b-col>
        </b-row>
    </b-container>
    
</template>

<script> 
export default {
    name: 'HomeVue',


};
</script>

<style scoped>
    
</style>
