import Vue from 'vue';
import Component from 'vue-class-component';

import PostsService from '@/Services/posts.service';
import PostInterface from '@/Models/PostInterface';
import {SetAbstract} from '@/Pipes/SetAbstract.pipe';
import ServicesFactory from '@/Services/services.factory';

@Component({
    metaInfo: {
        title: 'Home',
    },
    filters: {
        SetAbstract,
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
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.posts = [];
        this.currentPage = 1;
        this.perPage = 10;
        this.loading = true;
    }

    public mounted() {
        this.init();
    }

    public beforeRouteUpdate(to: any, from: any, next: any) {
        next();
        this.init();
    }

    public paginate(page: number): void {
        this.$router.push(`/${page}`);
    }

    private getPosts(): void {
        this.loading = true;
        this.postsService.last(this.currentPage).then((post: any) => {
            if (post.data.data.length === 0) {
                //  this.$router.push('/notfound');
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
        this.getPosts();
    }


}

