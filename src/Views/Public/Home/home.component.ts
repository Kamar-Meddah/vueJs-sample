import Vue from 'vue';
import Component from 'vue-class-component';
import PostsService from '@/Services/posts.service';
import PostInterface from '@/Models/PostInterface';
import {Extract} from '@/Pipes/Extract.Pipe';

@Component({
    metaInfo: {
        title: 'Home',
    },
    filters: {
        Extract,
    },
})
export default class HomeComponent extends Vue {
    protected posts: PostInterface | null;
    protected currentPage: number;
    protected totaPage: number;
    protected perPage: number;
    protected loading: boolean;

    private postsService: PostsService;

    constructor() {
        super();
        this.totaPage = 1;
        this.postsService = PostsService.getInstance();
        this.posts = null;
        this.currentPage = 1;
        this.perPage = 10;
        this.loading = true;
    }

    public mounted() {
        this.currentPage = parseInt(this.$route.params.page, 10);
        this.postsService.all(this.currentPage).then((post: any) => {
            this.totaPage = post.data.last_page as number;
            this.perPage = post.data.per_page as number;
            this.posts = post.data.data;
            this.loading = false;
        }).catch((e: Error) => {
            alert(e.message);
        });
    }

    public test(page: number) {
        this.loading = true;
        this.$router.push(`/${page}`);

        this.postsService.all(this.currentPage).then((post: any) => {
            this.totaPage = post.data.last_page as number;
            this.perPage = post.data.per_page as number;
            this.posts = post.data.data;
            this.loading = false;
        }).catch((e: Error) => {
            alert(e.message);
        });
    }

}

