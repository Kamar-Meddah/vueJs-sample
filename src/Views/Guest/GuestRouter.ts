import Guest from '@/Views/Guest/Guest.vue';
import HomeComponent from '@/Views/Guest/Home/home.component';
import PostsByCategoryComponent from '@/Views/Guest/postsByCategory/postsByCategory.component';
import SearchComponent from '@/Views/Guest/Search/search.component';

const GuestRouter = [{
    path: '',
    component: Guest,
    children: [
        {
            path: '/:page(\\d+)?',
            name: 'home',
            component: HomeComponent,
        },
        {
            path: '/search/:title([A-z0-9]+)/:page(\\d+)?',
            name: 'SearchComponent',
            component: SearchComponent,
        },
        {
            path: '/:title([A-z]+)/:id(\\d+)/:page(\\d+)?',
            name: 'postsByCategory',
            component: PostsByCategoryComponent,
        },
    ],
}];
export default GuestRouter;


