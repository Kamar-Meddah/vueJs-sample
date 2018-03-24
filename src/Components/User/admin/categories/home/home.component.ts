import Vue from 'vue';
import Component from 'vue-class-component';
import CategoriesService from '@/Services/categories.service';
import ServicesFactory from '@/Services/services.factory';
import CategoryInterface from '@/Models/CategoryInterface';
import {AxiosError, AxiosResponse} from 'axios';

@Component({
    metaInfo: {
        title: 'Edit Categories',
    },
})
export default class HomeComponent extends Vue {

    private categoriesService: CategoriesService;
    private categories: CategoryInterface[];
    private headers: any[];
    private currentPage: number;
    private totaPage: number;
    private perPage: number;
    private id: number;
    private loading: boolean;
    private dialog: boolean;
    private formTitle: string;
    private title: string;


    public constructor() {
        super();
        this.id = 0;
        this.title = '';
        this.categoriesService = ServicesFactory.getInstance().getCategoriesService();
        this.categories = [];
        this.dialog = false;
        this.formTitle = '';
        this.headers = [
            {text: 'id', align: 'left', sortable: false, value: 'name'},
            {text: 'Title', align: 'center', sortable: false, value: false},
            {text: 'Actions', align: 'center', sortable: false, value: false},
        ];
        this.currentPage = 1;
        this.totaPage = 1;
        this.perPage = 10;
        this.loading = false;
    }

    public mounted() {
        this.init();
    }

    public updateData(input: number): void {
        if (parseInt(this.$route.params.page, 10) !== input) {
            this.$router.push(`/user/admin/categories/home/${input}`);
            this.init();
        }
    }

    public edit(item: CategoryInterface): void {
        this.formTitle = 'Edit Category';
        this.title = item.title;
        this.id = item.id as number;
        this.dialog = true;
    }

    public save(): void {
        if (this.formTitle === `Edit Category`) {
            this.categoriesService.update(this.id, this.title)
                .then((res: AxiosResponse) => {
                    if (res.data.updated) {
                        this.categories.map((item: CategoryInterface) => {
                            if (item.id === this.id) {
                                item.title = this.title;
                            }
                        });
                        alert('Successfully Updated');
                    } else {
                        alert('An Error Occurred');
                    }
                    this.dialog = false;
                    this.title = '';
                    this.id = 0;
                })
                .catch((err: AxiosError) => {
                    alert('No Internet Connection');
                });
        } else {
            this.categoriesService.create(this.title)
                .then((res: AxiosResponse) => {
                    if (res.data.created) {
                        alert('Successfully Created');
                    } else {
                        alert('An Error Occurred');
                    }
                    this.dialog = false;
                    this.title = '';
                    this.id = 0;
                    this.init();
                })
                .catch((err: AxiosError) => {
                    alert('No Internet Connection');
                });
        }
    }

    public cancel(): void {
        this.title = '';
        this.dialog = false;
    }

    public remove(item: CategoryInterface): void {
        if (confirm('Are you sure you want to delete this item?')) {
            this.categoriesService.remove(item.id as number)
                .then((res: AxiosResponse) => {
                    if (res.data.deleted) {
                        alert('Successfully Removed');
                        this.categories = this.categories.filter((value) => value !== item);
                    } else {
                        alert('Category is not Empty');
                    }
                })
                .catch((err: Error) => {
                    alert('no internet connection');
                });
        }
    }

    private init(): void {
        this.loading = true;
        this.currentPage = !!this.$route.params.page ? parseInt(this.$route.params.page, 10) : 1;
        this.categoriesService.allPaginated(this.currentPage)
            .then((res: AxiosResponse) => {
                this.totaPage = res.data.last_page;
                this.perPage = res.data.per_page;
                this.categories = res.data.data;
                this.loading = false;
            });
    }

    private checkTitle(value: string): string | boolean {
        if (value.trim().length === 0) {
            return 'Required !!.';
        } else {
            return true;
        }
    }

}

