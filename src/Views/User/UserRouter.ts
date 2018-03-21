import LoggedComponent from '@/Views/User/user.component.vue';
import HomeComponent from '@/Views/User/Home/home.component';
import SettingRouter from '@/Views/User/Setting/SettingRouter';

const UserRouter = [
    {
        path: '/user',
        component: LoggedComponent,
        children: [
            {
                path: 'home',
                name: 'user_home',
                component: HomeComponent,
            },
            ...SettingRouter,
        ],
    },
];
export default UserRouter;


