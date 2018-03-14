import Vue from 'vue';
import Component from 'vue-class-component';
import CatgeoriesService from '@/Services/categories.service';
import CategoryInterface from '@/Models/CategoryInterface';

@Component({})
export default class CategoriesComponent extends Vue {

  private categoriesService: CatgeoriesService;
  private categories?: CategoryInterface [];

  constructor() {
    super();
    this.categoriesService = CatgeoriesService.getInstance();
    this.categories = [];
  }

  public mounted() {
    //  console.log('hello from app');
      this.categoriesService.all().then((data) => {
          this.categories = data.data;
      });
  }

}

