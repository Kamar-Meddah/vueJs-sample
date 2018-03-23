import HomeComponent from '@/Components/User/admin/posts/home/home.component';
import PostsComponent from '@/Components/User/admin/posts/posts.component.vue';
import EditComponent from '@/Components/User/admin/posts/edit/edit.component';
import AddComponent from '@/Components/User/admin/posts/add/add.component';

const PostsRouter = [
    {
        path: 'posts',
        component: PostsComponent,
        name: 'admin_posts',
        children: [
            {
                path: 'home/:page(\\d+)?',
                component: HomeComponent,
                name: 'admin_posts_home',
            },
            {
                path: 'edit/:id(\\d+)',
                component: EditComponent,
                name: 'admin_posts_edit',
            },
            {
                path: 'add',
                component: AddComponent,
                name: 'admin_posts_add',
            },
        ],
    },
];
export default PostsRouter;


