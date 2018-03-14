import Vue from 'vue';
import Component from 'vue-class-component';

import PostsService from '@/Services/posts.service';
import PostInterface from '@/Models/PostInterface';
import CategoriesComponent from '@/Components/Guest/Categories/categories.component';
import {SetAbstract} from '@/Pipes/SetAbstract.pipe';

@Component({
    metaInfo: {
        title: 'Home',
    },
    filters: {
        SetAbstract,
    },
    components: {
        categories: CategoriesComponent,
    },
})
export default class HomeComponent extends Vue {

    protected posts?: PostInterface[];
    protected currentPage: number;
    protected totaPage: number;
    protected perPage: number;
    protected loading: boolean;

    private postsService: PostsService;

    constructor() {
        super();
        this.totaPage = 1;
        this.postsService = PostsService.getInstance();
        this.posts = [];
        this.currentPage = 1;
        this.perPage = 10;
        this.loading = true;
    }

    public mounted() {
        this.currentPage = this.$route.params.page ? parseInt(this.$route.params.page, 10) : 1;
        this.getPosts();
    }

    public paginate(page: number): void {
        this.$router.push(`/${page}`);
        this.getPosts();
    }

    private getPosts(): void {
        this.loading = true;
        this.postsService.all(this.currentPage).then((post: any) => {
            this.totaPage = post.data.last_page as number;
            this.perPage = post.data.per_page as number;
            this.posts = SetAbstract(post.data.data);
            this.loading = false;
        }).catch((e: Error) => {
            alert(e.message);
        });
    }


}

