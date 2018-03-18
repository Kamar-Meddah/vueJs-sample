import Vue from 'vue';
import Component from 'vue-class-component';
import {AxiosResponse} from 'axios';

import PostInterface from '@/Models/PostInterface';
import PostsService from '@/Services/posts.service';
import PostModel from '@/Models/post.model';
import CommentsService from '@/Services/comments.service';
import CommentInterface from '@/Models/CommentInterface';
import ServicesFactory from '@/Services/services.factory';

@Component({})
export default class ShowPostComponent extends Vue {

    private post: PostInterface | null;
    private postsService: PostsService;
    private commentsService: CommentsService;
    private loading: boolean;
    private valid: boolean;
    private comment: string;
    private comments: CommentInterface[];

    constructor() {
        super();
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.commentsService = ServicesFactory.getInstance().getCommentsService();
        this.post = new PostModel();
        this.loading = false;
        this.valid = false;
        this.comment = '';
        this.comments = [];
    }

    public mounted() {
        this.loading = true;
        this.postsService.find(parseInt(this.$route.params.id, 10)).then((data: AxiosResponse<PostInterface>) => {
            if (data.data.id === undefined) {
                //  this.$router.push('/notfound');
            } else {
                this.post = data.data;
                this.commentsService.findAll(this.post.id as number)
                    .then((comments: AxiosResponse<CommentInterface[]>) => {
                        this.comments = comments.data;
                        this.loading = false;
                    });
            }
        });
    }

    public postComment(): void {
        if (this.comment.length !== 0) {
            this.commentsService.post(this.comment);
        }
    }

    public check(input: string) {
        if (input.trim().length !== 0) {
            return true;
        } else {
            return 'Field required';
        }

    }
}

