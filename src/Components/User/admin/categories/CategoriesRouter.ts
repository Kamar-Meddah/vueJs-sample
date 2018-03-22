import HomeComponent from '@/Components/User/admin/categories/home/home.component';
import CategoriesComponent from '@/Components/User/admin/categories/categories.component.vue';

const CategoriesRouter = [
    {
        path: 'categories',
        component: CategoriesComponent,
        name: 'categories',
        children: [
            {
                path: 'home/:page(\\d+)?',
                component: HomeComponent,
                name: 'admin_categories_home',
            },
        ],
    },
];
export default CategoriesRouter;


