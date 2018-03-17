import Vue from 'vue';
import Component from 'vue-class-component';
import CategoriesComponent from '@/Components/Guest/Posts/Categories/categories.component';

@Component({
    components: {
        categories: CategoriesComponent,
    },
})
export default class PostsComponent extends Vue {
}

