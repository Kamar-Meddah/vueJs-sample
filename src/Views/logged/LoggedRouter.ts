import LoggedComponent from '@/Views/logged/logged.component.vue';
import HomeComponent from '@/Views/logged/Home/home.component';

const LoggedRouter = [
    {
        path: '/user',
        component: LoggedComponent,
        children: [
            {
                path: '/user/home',
                name: 'user_home',
                component: HomeComponent,
            },
        ],
    },
];
export default LoggedRouter;


