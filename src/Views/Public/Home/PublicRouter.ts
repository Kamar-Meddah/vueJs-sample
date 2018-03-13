import Public from '@/Views/Public/Public.vue';
import HomeComponent from '@/Views/Public/Home/home.component';

const publicRouter = [{
    path: '',
    component: Public,
    children: [
        {
            path: '/:page',
            name: 'home',
            component: HomeComponent,
        },
    ],
}];
export default publicRouter;


