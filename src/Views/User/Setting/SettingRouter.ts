import SettingComponent from '@/Views/User/Setting/setting.component.vue';
import PasswordEditComponent from '@/Views/User/Setting/passwordEdit/passwordEdit.component';

const SettingRouter = [
    {
        path: 'setting',
        component: SettingComponent,
        children: [
            {
                 path: 'password',
                 name: 'user_setting_password',
                 component: PasswordEditComponent,
             },
        ],
    },
];
export default SettingRouter;


