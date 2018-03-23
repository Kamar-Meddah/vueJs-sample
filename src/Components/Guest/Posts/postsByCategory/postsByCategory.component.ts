import Vue from 'vue';
import Component from 'vue-class-component';

import PostsService from '@/Services/posts.service';
import PostInterface from '@/Models/PostInterface';
import CategoriesComponent from '@/Components/Guest/Posts/Categories/categories.component';
import {SetAbstract} from '@/Pipes/SetAbstract.pipe';
import ServicesFactory from '@/Services/services.factory';

@Component({
    metaInfo: {
        title: 'Categorie',
    },
    filters: {
        SetAbstract,
    },
    components: {
        categories: CategoriesComponent,
    },
})
export default class PostsByCategoryComponent extends Vue {

    private posts?: PostInterface[];
    private currentPage: number;
    private totaPage: number;
    private perPage: number;
    private id: number;
    private loading: boolean;
    private title: string;
    private slug: string;
    private postsService: PostsService;

    constructor() {
        super();
        this.totaPage = 1;
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.posts = [];
        this.currentPage = 1;
        this.perPage = 10;
        this.loading = true;
        this.title = '';
        this.slug = '';
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
        this.$router.push(`/${this.slug}/${this.id}/${page}`);
    }

    private getPosts(): void {
        this.loading = true;
        this.postsService.findByCategory(this.id, this.currentPage).then((post: any) => {
            if (post.data.data.length === 0) {
                //  this.$router.push('/notfound');
            } else {
                this.title = post.data.data[0].category.title;
                this.slug = post.data.data[0].category.slug;
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
        this.id = parseInt(this.$route.params.id, 10);
        this.getPosts();
    }
}

