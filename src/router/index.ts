import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import orderRoutes from './orderRoutes';
import analysisRoutes from './analysisRoutes';
import settingRoutes from './settingRoutes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error404.vue')
        },
        MainRoutes,
        AuthRoutes,
        orderRoutes,
        analysisRoutes,
        settingRoutes
    ]
});
