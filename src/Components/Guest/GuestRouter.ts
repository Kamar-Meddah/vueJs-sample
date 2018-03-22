import PostsRouter from './Posts/PostsRouter';
import AuthRouter from './Auth/AuthRouter';
import GuestComponent from '@/Components/Guest/guest.component.vue';

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


