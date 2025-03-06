<template>

    <b-navbar class="d-flex justify-content-between" toggleable="md" type="dark" variant="danger">

        <b-navbar-brand href="#">Navegação</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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