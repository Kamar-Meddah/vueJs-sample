import Vue from 'vue';
import Component from 'vue-class-component';
import CatgeoriesService from '@/Services/categories.service';
import CategoryInterface from '@/Models/CategoryInterface';
import ServicesFactory from '@/Services/services.factory';

@Component({})
export default class CategoriesComponent extends Vue {

    private categoriesService: CatgeoriesService;
    private categories: CategoryInterface [];

    constructor() {
        super();
        this.categoriesService = ServicesFactory.getInstance().getCategoriesService();
        this.categories = [];
    }

    public mounted() {
        this.categoriesService.all().then((data) => {
            this.categories = data.data;
        });
    }

}

