import Vue from 'vue';
import Component from 'vue-class-component';
import CategoryInterface from '@/Models/CategoryInterface';
import CategoriesService from '@/Services/categories.service';
import ServicesFactory from '@/Services/services.factory';
import {AxiosError, AxiosResponse} from 'axios';
import PostsService from '@/Services/posts.service';
import ImageInterface from '@/Models/ImageInterface';
import ImagesService from '@/Services/images.service';

@Component({
    metaInfo: {
        title: 'Edit Posts',
    },
})
export default class EditComponent extends Vue {
    private filesNumber: number;
    private id: number;
    private title: string;
    private content: string;
    private selectedCategory: string;
    private categories: CategoryInterface[];
    private imagesService: ImagesService;
    private categoriesService: CategoriesService;
    private images: ImageInterface[];
    private postsService: PostsService;
    private valid: boolean;
    private loading: boolean;

    public constructor() {
        super();
        this.loading = false;
        this.filesNumber = 0;
        this.id = 0;
        this.images = [];
        this.title = '';
        this.content = '';
        this.selectedCategory = '';
        this.categories = [];
        this.valid = false;
        this.categoriesService = ServicesFactory.getInstance().getCategoriesService();
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.imagesService = ServicesFactory.getInstance().getImagesService();
    }

    public mounted() {
        this.loading = true;
        this.categoriesService.all()
            .then((data: AxiosResponse<CategoryInterface[]>) => {
                this.categories = data.data;
                this.id = parseInt(this.$route.params.id, 10);
                this.postsService.find(this.id)
                    .then((res: AxiosResponse) => {
                        this.images = res.data.images;
                        this.selectedCategory = res.data.category_id;
                        this.content = res.data.content;
                        this.title = res.data.title;
                        this.loading = false;
                    })
                    .catch((err: AxiosError) => {
                        alert('No error connection');
                    });
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
            formdata.append('id', this.id.toString());

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
                this.postsService.update(formdata).then((res: AxiosResponse) => {
                    this.loading = false;
                    if (res.data.updated) {
                        alert('Successfully created');
                        this.$router.push(`/user/admin/posts/home`);
                    } else {
                        alert('An Error Occurred');
                    }
                }).catch((err: AxiosError) => {
                    alert('No Internet Connection');
                });
            }
        } else {
            alert('Form is not valid');
        }

    }

    private remove(image: ImageInterface): void {
        if (confirm('Etes Vous Sur!! ?')) {
            this.imagesService.delete((image.id)as number)
                .then((res: AxiosResponse) => {
                    if (res.data.deleted) {
                        this.images = this.images.filter((img) => img.id !== image.id);
                        alert('Successfully deleted');
                    } else {
                        alert('An Error Occurred');
                    }
                })
                .catch((err: AxiosError) => {
                    alert('No Internet Connection');
                });
        }
    }
}

