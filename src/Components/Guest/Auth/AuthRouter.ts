import AuthComponent from '@/Components/Guest/Auth/auth.component.vue';
import SigninComponent from '@/Components/Guest/Auth/signin/signin.component';
import SignupComponent from '@/Components/Guest/Auth/signup/signup.component';
import PasswordResetComponent from '@/Components/Guest/Auth/passwordReset/passwordReset.component';

const AuthRoute = [{
    path: '/auth',
    component: AuthComponent,
    children: [
        {
            path: 'signin',
            name: 'signin',
            component: SigninComponent,
        },
        {
            path: 'signup',
            name: 'signup',
            component: SignupComponent,
        },
        {
            path: 'reset',
            name: 'password_reset',
            component: PasswordResetComponent,
        },

    ],
}];
export default AuthRoute;


