import Vue from 'vue';
import Router from 'vue-router';
import publicRouter from '@/Views/Public/PublicRouter';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        ...publicRouter,
    ],
});
