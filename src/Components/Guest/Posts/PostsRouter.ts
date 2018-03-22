import PostsComponent from '@/Components/Guest/Posts/posts.component.vue';
import HomeComponent from '@/Components/Guest/Posts/Home/home.component';
import PostsByCategoryComponent from '@/Components/Guest/Posts/postsByCategory/postsByCategory.component';
import SearchComponent from '@/Components/Guest/Posts/Search/search.component';
import ShowPostComponent from '@/Components/Guest/Posts/ShowPost/showPost.component';

const PostsRoute = [{
    path: '',
    component: PostsComponent,
    children: [
        {
            path: '/:page(\\d+)?',
            name: 'home',
            component: HomeComponent,
        },
        {
            path: '/search/:query([A-z0-9]+)/:page(\\d+)?',
            name: 'SearchComponent',
            component: SearchComponent,
        },
        {
            path: '/:title([A-z]+)/:id(\\d+)/:page(\\d+)?',
            name: 'postsByCategory',
            component: PostsByCategoryComponent,
        },
        {
            path: '/:category([A-z]+)/:title([\-A-z0-9]+)/:id(\\d+)',
            name: 'showPost',
            component: ShowPostComponent,
        },

    ],
}];
export default PostsRoute;


