import PostsRouter from './Posts/PostsRouter';
import AuthRouter from './Auth/AuthRouter';
import GuestComponent from '@/Views/Guest/guest.component.vue';

const GuestRouter = [
    {
        path: '',
        component: GuestComponent,
        children: [
            ...AuthRouter,
            ...PostsRouter,
        ],
    },
];
export default GuestRouter;


