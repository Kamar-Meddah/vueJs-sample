import Vue from 'vue';
import Router from 'vue-router';
import './class-component-hooks';

import GuestRouter from '@/Views/Guest/GuestRouter';
import NotfoundComponent from '@/Views/notfound/notfound.component';
import LoggedRouter from '@/Views/Logged/LoggedRouter';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        ...GuestRouter,
        ...LoggedRouter,
        {
            path: '**',
            component: NotfoundComponent,
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});
