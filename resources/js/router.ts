import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/Home.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import { useAuthStore } from './stores/auth';

const routes = [
    {
        path: '/',
        component: GuestLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomeView,
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('./views/Login.vue'),
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('./views/Register.vue'),
            }

        ],
    },
    {
        path: "/dashboard",
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/dashboard/Index.vue'),
                meta: { requiresAuth: true }
            },

        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    const isLoggedIn = authStore.isAuthenticated;

    if (to.meta.requiresAuth && !isLoggedIn) {
        next({ name: 'login' });
    }
    else {
        next();
    }
});
export default router;
