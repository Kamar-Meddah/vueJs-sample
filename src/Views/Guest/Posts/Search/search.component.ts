import Vue from 'vue';
import Component from 'vue-class-component';
import {SetAbstract} from '@/Pipes/SetAbstract.pipe';
import CategoriesComponent from '@/Components/Guest/Categories/categories.component';
import PostInterface from '@/Models/PostInterface';
import PostsService from '@/Services/posts.service';

@Component({
    metaInfo: {
        title: 'Search',
    },
    filters: {
        SetAbstract,
    },
    components: {
        categories: CategoriesComponent,
    },
})
export default class SearchComponent extends Vue {
    protected posts?: PostInterface[];
    protected currentPage: number;
    protected totaPage: number;
    protected perPage: number;
    protected id: number;
    protected loading: boolean;
    protected title: string;

    private postsService: PostsService;

    constructor() {
        super();
        this.totaPage = 1;
        this.postsService = PostsService.getInstance();
        this.posts = [];
        this.currentPage = 1;
        this.perPage = 10;
        this.loading = true;
        this.title = '';
        this.id = 1;
    }

    public mounted() {
        this.init();
    }

    public beforeRouteUpdate(to: any, from: any, next: any) {
        next();
        this.init();
    }

    public paginate(page: number): void {
        this.$router.push(`/search/${this.title}/${page}`);
    }

    private getPosts(): void {
        this.loading = true;
        this.postsService.search(this.title, this.currentPage).then((post: any) => {
            if (post.data.data.length === 0) {
               //   this.$router.push('/notfound');
            } else {
                this.totaPage = post.data.last_page as number;
                this.perPage = post.data.per_page as number;
                this.posts = SetAbstract(post.data.data);
                this.loading = false;
            }
        }).catch((e: Error) => {
            alert(e.message);
        });
    }

    private init(): void {
        this.currentPage = this.$route.params.page ? parseInt(this.$route.params.page, 10) : 1;
        this.title = this.$route.params.query;
        this.id = parseInt(this.$route.params.id, 10);
        this.getPosts();
    }
}

