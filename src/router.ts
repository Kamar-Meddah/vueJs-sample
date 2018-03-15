import Vue from 'vue';
import Router from 'vue-router';
import GuestRouter from '@/Views/Guest/GuestRouter';
import NotfoundComponent from '@/Views/notfound/notfound.component';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        ...GuestRouter,
        {
            path: '**',
            component: NotfoundComponent,
        },
    ],
});
