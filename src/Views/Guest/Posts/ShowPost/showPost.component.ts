import Vue from 'vue';
import Component from 'vue-class-component';
import PostInterface from '@/Models/PostInterface';
import PostsService from '@/Services/posts.service';
import {AxiosResponse} from 'axios';
import PostModel from '@/Models/post.model';

@Component({})
export default class ShowPostComponent extends Vue {

    private post: PostInterface | null;
    private postsService: PostsService;
    private loading: boolean;

    constructor() {
        super();
        this.postsService = PostsService.getInstance();
        this.post = new PostModel();
        this.loading = false;
    }

    public mounted() {
        this.loading = true;
        this.postsService.find(parseInt(this.$route.params.id, 10)).then((data: AxiosResponse<PostInterface>) => {
            if (data.data.id === undefined) {
                this.$router.push('/notfound');
            } else {
                this.post = data.data;
                this.loading = false;
            }
        });
    }
}

