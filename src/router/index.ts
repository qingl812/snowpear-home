import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/Main.vue'),
        children: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: "/index",
            name: "Home",
            component: () => import("@/views/Home.vue"),
            meta: {
                title: "雪梨 - home - index",
            },
        },
        {
            path: "/tools",
            name: "Tools",
            component: () => import("@/views/Tools.vue"),
            meta: {
                title: "雪梨 - home - tools",
            },
        },
        {
            path: "/admin",
            name: "Admin",
            component: () => import("@/views/Admin.vue"),
            meta: {
                title: "雪梨 - home - admin",
            },
        },
        ]
    },
    {
        path: "*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
        meta: {
            title: "雪梨 - Not Found",
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
