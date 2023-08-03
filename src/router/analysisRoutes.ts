const analysisRoutes = {
    path: '/analysis',
    redirect: '/analysis',
    component: () => import('@/layouts/full/FullLayout.vue'),
    meta: {
        requiresAuth: true
    },
    children: [
        {
            name: 'analysisStock',
            path: '/analysis/Stock',
            component: () => import('@/views/analysis/Stock.vue')
        },
        {
            name: 'analysisOrder',
            path: '/analysis/order',
            component: () => import('@/views/analysis/Order.vue')
        }
    ]
};

export default analysisRoutes;
