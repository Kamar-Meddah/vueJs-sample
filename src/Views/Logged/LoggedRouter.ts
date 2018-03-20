import LoggedComponent from '@/Views/Logged/logged.component.vue';
import HomeComponent from '@/Views/Logged/Home/home.component';

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


