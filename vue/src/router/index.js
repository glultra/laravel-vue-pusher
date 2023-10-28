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
// authMiddleware.js
function authMiddleware(to, from, next) {
    const isAuthenticated = localStorage.getItem('token'); // Replace with your authentication check logic
    if (to.meta.requireAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
}

router.beforeEach(authMiddleware);

export default router;
