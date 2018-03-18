import AuthComponent from '@/Views/Guest/Auth/auth.component.vue';
import SigninComponent from '@/Views/Guest/Auth/signin/signin.component';
import SignupComponent from '@/Views/Guest/Auth/signup/signup.component';

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
    ],
}];
export default AuthRoute;


