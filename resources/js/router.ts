import { createRouter, createWebHistory } from "vue-router";
import LoginView from './views/Login.vue';
import RegisterView from './views/Register.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
