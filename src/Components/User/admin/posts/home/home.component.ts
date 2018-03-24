import Vue from 'vue';
import Component from 'vue-class-component';
import PostInterface from '@/Models/PostInterface';
import PostsService from '@/Services/posts.service';
import {AxiosError, AxiosResponse} from 'axios';
import ServicesFactory from '@/Services/services.factory';

@Component({
    metaInfo: {
        title: 'Edit Posts',
    },
})
export default class HomeComponent extends Vue {
    private postsService: PostsService;
    private posts: PostInterface[];
    private headers: any[];
    private currentPage: number;
    private totaPage: number;
    private perPage: number;
    private loading: boolean;


    public constructor() {
        super();
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.posts = [];
        this.headers = [
            {text: 'id', align: 'left', sortable: false, value: 'name'},
            {text: 'Category', align: 'center', sortable: false, value: false},
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
            this.$router.push(`/user/admin/posts/home/${input}`);
            this.init();
        }
    }

    public edit(id: number): void {
        this.$router.push(`/user/admin/posts/edit/${id}`);
    }

    public add(): void {
        this.$router.push('/user/admin/posts/add');
    }

    public remove(item: PostInterface): void {
        if (confirm('Are you sure you want to delete this item?')) {
            this.postsService.remove(item.id as number)
                .then((res: AxiosResponse) => {
                    if (res.data.deleted) {
                        alert('Successfully Removed');
                        this.posts = this.posts.filter((value) => value !== item);
                    } else {
                        alert('An Error occured');
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
        this.postsService.all(this.currentPage)
            .then((res: AxiosResponse) => {
                this.totaPage = res.data.last_page;
                this.perPage = res.data.per_page;
                this.posts = res.data.data;
                this.loading = false;
            })
            .catch((err: AxiosError) => {
                alert('No Internet Connection');
            });
    }

}
