import SigninComponent from '@/Components/Guest/Auth/signin/signin.component';
import SignupComponent from '@/Components/Guest/Auth/signup/signup.component';

const AuthRoute = [{
    path: '/auth',
    component: (resolve: any) => (require as any )(['@/Components/Guest/Auth/auth.component.vue'], resolve),
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


