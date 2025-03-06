import Vue from 'vue';
import VueRouter from 'vue-router';

import ApiTable from '@/components/ApiTable.vue';
import Home from "@/components/Home.vue";
import Table from "@/components/Table.vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/table', component: Table},
    {path: '/apitable', component: ApiTable},
]

const router = new VueRouter({
    mode: 'history', // Usa o modo sem 'Hashtag' de navegação
    routes
})

export default router;