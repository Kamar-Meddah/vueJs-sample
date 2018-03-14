import Vue from 'vue';
import Router from 'vue-router';
import publicRouter from '@/Views/Guest/GuestRouter';
import NotfoundComponent from '@/Components/notfound/notfound.component';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        ...publicRouter,
        {
            path: '**',
            component: NotfoundComponent,
        },
    ],
});
