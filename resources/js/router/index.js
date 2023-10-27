import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    // {
    //     path: '/',
    //     name: 'App',
    //     component: () => import('@/App.vue'),
    // },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// Set middlewares.

export default router;
