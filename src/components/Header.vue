<template>
    <!-- Container Principal do NavBar -->
    <b-navbar class="d-flex justify-content-between" toggleable="sm" type="dark" variant="danger">
        <!-- Titulo ou Logo da Aplicação -->
        <b-navbar-brand href="#">Bootstrap + Vue</b-navbar-brand>

        <!-- Menu hamburguer da versão mobile -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- Links -->
        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" tag="router-link">Grid</b-nav-item>
                <b-nav-item to="/table" tag="router-link">B-Table</b-nav-item>
                
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>

</template>

<script>

    export default {
        name: 'HeaderVue'
    }


</script>