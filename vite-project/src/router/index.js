import { createRouter, createWebHistory } from "vue-router";    
import MainMenu from "../views/MainMenu.vue";
import PlayerStats from "../views/PlayerStats.vue";
import Popup from "../views/Popup.vue";

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
    },
    {
        path: '/Popup',
        name: 'Popup',
        component: Popup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;