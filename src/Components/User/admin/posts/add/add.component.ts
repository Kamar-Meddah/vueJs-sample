import Vue from 'vue';
import Component from 'vue-class-component';
import CategoryInterface from '@/Models/CategoryInterface';
import CategoriesService from '@/Services/categories.service';
import ServicesFactory from '@/Services/services.factory';
import {AxiosError, AxiosResponse} from 'axios';
import PostsService from '@/Services/posts.service';

@Component({})
export default class AddComponent extends Vue {

    private filesNumber: number;
    private title: string;
    private content: string;
    private selectedCategory: string;
    private categories: CategoryInterface[];
    private categoriesService: CategoriesService;
    private postsService: PostsService;
    private valid: boolean;
    private loading: boolean;

    public constructor() {
        super();
        this.loading = false;
        this.filesNumber = 0;
        this.title = '';
        this.content = '';
        this.selectedCategory = '';
        this.categories = [];
        this.valid = false;
        this.categoriesService = ServicesFactory.getInstance().getCategoriesService();
        this.postsService = ServicesFactory.getInstance().getPostsService();
    }

    public mounted() {
        this.loading = true;
        this.categoriesService.all()
            .then((res: AxiosResponse<CategoryInterface[]>) => {
                this.categories = res.data;
                this.loading = false;
            })
            .catch((err: AxiosError) => {
                alert('No Internet Connection');
            });
    }

    public clickFile() {
        (this.$refs as any).file.click();
    }

    public updateFile($event: Event) {
        this.filesNumber = ($event as any).srcElement.files.length;
    }

    private checkIsNotEmpty(input: string | number): string | boolean {
        if (typeof(input) === 'number') {
            if (input === 0) {
                return 'Required !!';
            } else {
                return true;
            }
        } else {
            if (input.trim().length === 0) {
                return 'Required !!';
            } else {
                return true;
            }
        }
    }

    private submit() {
        if (this.valid) {
            let valid = true;
            const formdata = new FormData((document as any).querySelector('form'));
            formdata.append('category', this.selectedCategory);
            formdata.append('title', this.title);
            formdata.append('content', this.content);

            for (const file of (this.$refs as any).file.files) {
                if (file.size > 2097152) {
                    alert('The file is bigger then 2MB');
                    valid = false;
                }
                if (file.type.split('/')[0] !== 'image') {
                    alert('Only Images Are accepted');
                    valid = false;
                }
            }
            if (valid) {
                this.loading = true;
                this.postsService.create(formdata).then((res: AxiosResponse) => {
                    this.loading = false;
                    if (typeof (res.data.id) === 'number') {
                        alert('Successfully created');
                        this.$router.push(`/user/admin/posts/edit/${res.data.id}`);
                    } else {
                        alert('Title already exist');
                    }
                }).catch((err: AxiosError) => {
                    alert('No Internet Connection');
                });
            }
        } else {
            alert('Form is not valid');
        }

    }
}

