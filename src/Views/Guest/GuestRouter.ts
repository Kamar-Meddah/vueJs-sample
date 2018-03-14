import Guest from '@/Views/Guest/Guest.vue';
import HomeComponent from '@/Views/Guest/Home/home.component';

const GuestRouter = [{
    path: '',
    component: Guest,
    children: [
        {
            path: '/:page(\\d+)?',
            name: 'home',
            component: HomeComponent,
        },

    ],
}];
export default GuestRouter;


