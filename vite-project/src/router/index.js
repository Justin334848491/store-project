//import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";    
import MainMenu from "../views/MainMenu.vue";
import PlayerStats from "../views/PlayerStats.vue";

const routes = [
    {
        path: '/',
        name: 'MainMenu',
        component: MainMenu
    },
    {
        path: '/playerStats',
        name: 'PlayerStats',
        component: PlayerStats
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;