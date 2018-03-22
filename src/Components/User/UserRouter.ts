import LoggedComponent from '@/Components/User/user.component.vue';
import HomeComponent from '@/Components/User/Home/home.component';
import SettingRouter from '@/Components/User/Setting/SettingRouter';

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


