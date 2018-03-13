import Vue from 'vue';
import Component from 'vue-class-component';
import PostsService from '@/Services/posts.service';
import PostInterface from '@/Models/PostInterface';

@Component({
    metaInfo: {
        title: 'Home',
    },
})
export default class HomeComponent extends Vue {

    private postsService: PostsService;
    private posts: PostInterface|null;
    private page: number;

    constructor() {
        super();
        this.postsService = PostsService.getInstance();
        this.posts = null;
        this.page = 1;
    }

    public mounted() {
        this.postsService.all().then((post) => {
            this.posts = post.data;
        });
    }

}

