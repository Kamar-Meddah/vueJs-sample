import SettingComponent from '@/Components/User/Setting/setting.component.vue';
import PasswordEditComponent from '@/Components/User/Setting/passwordEdit/passwordEdit.component';

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


