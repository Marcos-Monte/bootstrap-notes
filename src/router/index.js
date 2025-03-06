import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "@/components/Home.vue";
import Table from "@/components/Table.vue";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/table', component: Table},
]

const router = new VueRouter({
    mode: 'history', // Usa o modo sem 'Hashtag' de navegação
    routes
})

export default router;