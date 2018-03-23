import HomeComponent from '@/Components/User/admin/posts/home/home.component';
import PostsComponent from '@/Components/User/admin/posts/posts.component.vue';

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
        ],
    },
];
export default PostsRouter;


