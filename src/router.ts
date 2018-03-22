import Vue from 'vue';
import Router from 'vue-router';
import './class-component-hooks';

import GuestRouter from '@/Components/Guest/GuestRouter';
import NotfoundComponent from '@/Components/notfound/notfound.component';
import LoggedRouter from '@/Components/User/UserRouter';

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
