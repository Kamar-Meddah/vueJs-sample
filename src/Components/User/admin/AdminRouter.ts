import HomeComponent from '@/Components/User/admin/home/home.component';
import CategoriesRouter from '@/Components/User/admin/categories/CategoriesRouter';
import PostsRouter from '@/Components/User/admin/posts/PostsRouter';

const AdminRouter = [
    {
        path: 'admin',
        component: (resolve: any) => (require as any )(['@/Components/User/admin/admin.component.vue'], resolve),
        name: 'admin',
        children: [
            {
                path: 'home',
                component: HomeComponent,
                name: 'admin_home',
            },
            ...CategoriesRouter,
            ...PostsRouter,
        ],
    },
];
export default AdminRouter;


