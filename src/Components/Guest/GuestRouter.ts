import PostsRouter from './Posts/PostsRouter';
import AuthRouter from './Auth/AuthRouter';


const GuestRouter = [
    {
        path: '',
        component: (resolve: any) => (require as any )(['@/Components/Guest/guest.component.vue'], resolve),
        children: [
            ...AuthRouter,
            ...PostsRouter,
        ],
    },
];
export default GuestRouter;
