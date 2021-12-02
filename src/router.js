import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("./views/Home.vue"),
		meta: {
			title: "雪梨 - Home",
		},
	},
	{
		path: "/admin",
		name: "Admin",
		component: () => import("./views/Admin.vue"),
		meta: {
			title: "雪梨 - Admin",
		},
	},
	{
		path: "/*",
		name: "NotFound",
		component: () => import("./views/NotFound.vue"),
		meta: {
			title: "Not Found",
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
