import UserComponent from '@/Components/User/user.component.vue';
import HomeComponent from '@/Components/User/Home/home.component';
import SettingRouter from '@/Components/User/Setting/SettingRouter';
import AdminRouter from '@/Components/User/admin/AdminRouter';

const UserRouter = [
    {
        path: '/user',
        component: UserComponent,
        name: 'user',
        children: [
            {
                path: 'home',
                name: 'user_home',
                component: HomeComponent,
            },
            ...SettingRouter,
            ...AdminRouter,
        ],
    },
];
export default UserRouter;


