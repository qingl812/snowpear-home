import Vue from 'vue'
import App from "@/App.vue";
import router from "@/router";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import { NavigationGuardNext, Route } from 'vue-router';

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
    /* 路由发生变化修改页面title */
    if (to.meta?.title) {
        document.title = to.meta.title;
    }
    next();
});

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')