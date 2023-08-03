const settingRoutes = {
    path: '/setting',
    redirect: '/setting',
    component: () => import('@/layouts/full/FullLayout.vue'),
    meta: {
        requiresAuth: true
    },
    children: [
        {
            name: 'settingFee',
            path: '/setting/Fee',
            component: () => import('@/views/setting/Fee.vue')
        }
    ]
};

export default settingRoutes;
