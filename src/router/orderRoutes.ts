const orderRoutes = {
    path: '/order',
    redirect: '/order',
    component: () => import('@/layouts/full/FullLayout.vue'),
    meta: {
        requiresAuth: true
    },
    children: [
        {
            name: 'orderBuySelling',
            path: '/order/buy-selling',
            component: () => import('@/views/order/BuySelling.vue')
        }
    ]
};

export default orderRoutes;
