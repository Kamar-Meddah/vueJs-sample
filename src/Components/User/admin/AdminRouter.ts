import AdminComponent from '@/Components/User/admin/admin.component.vue';
import HomeComponent from '@/Components/User/admin/home/home.component';
import CategoriesRouter from '@/Components/User/admin/categories/CategoriesRouter';

const AdminRouter = [
    {
        path: 'admin',
        component: AdminComponent,
        name: 'admin',
        children: [
            {
                path: 'home',
                component: HomeComponent,
                name: 'admin_home',
            },
            ...CategoriesRouter,
        ],
    },
];
export default AdminRouter;


