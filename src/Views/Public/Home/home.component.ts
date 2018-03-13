import Vue from 'vue';
import Component from 'vue-class-component';
import PostsService from '@/Services/posts.service';

@Component({
    metaInfo: {
        title: 'Home',
    },
})
export default class HomeComponent extends Vue {

    private postsService: PostsService;

    constructor() {
        super();
        this.postsService = PostsService.getInstance();
    }

    public mounted() {
        this.postsService.all();
    }

}

