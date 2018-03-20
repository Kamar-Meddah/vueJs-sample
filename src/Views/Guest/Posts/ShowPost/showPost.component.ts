import Vue from 'vue';
import Component from 'vue-class-component';
import {AxiosError, AxiosResponse} from 'axios';

import PostInterface from '@/Models/PostInterface';
import PostsService from '@/Services/posts.service';
import PostModel from '@/Models/post.model';
import CommentsService from '@/Services/comments.service';
import CommentInterface from '@/Models/CommentInterface';
import ServicesFactory from '@/Services/services.factory';
import CommentModel from '@/Models/comment.model';
import AuthService from '@/Services/auth.service';

@Component({})
export default class ShowPostComponent extends Vue {

    private post: PostInterface| null ;
    private postsService: PostsService;
    private commentsService: CommentsService;
    private authService: AuthService;
    private loading: boolean;
    private valid: boolean;
    private comment: string;
    private comments: CommentInterface[];

    constructor() {
        super();
        this.postsService = ServicesFactory.getInstance().getPostsService();
        this.commentsService = ServicesFactory.getInstance().getCommentsService();
        this.authService = ServicesFactory.getInstance().getAuthService();
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
            this.loading = true;
            const id: number = this.post !== null ? this.post.id as number : parseInt(this.$route.params.id, 10);
            this.commentsService.post(this.comment, id).then((res: AxiosResponse) => {
                if (res.data.created) {
                    const userData: any = this.authService.decodeToken();
                    this.comments.unshift(new CommentModel(this.comment, id, userData.sub, userData.iss));
                    this.loading = false;
                    alert('coments successfully posted');
                    this.comment = '';
                }
            }).catch((err: AxiosError) => {
                alert('no internet connection');
            });
        }
    }

    public check(input: string) {
        if (input.trim().length !== 0) {
            return true;
        } else {
            return 'Field required';
        }
    }

    get isLogged() {
        return this.$store.getters.isLogged;
    }

    get isLoggedAsAdmin() {
        return this.$store.getters.isAdmin;
    }

    public removeComment(value: CommentInterface): void {
        this.loading = true;
        this.commentsService.delete(value.id as number).then((res: AxiosResponse) => {
            this.loading = false;
            if (res.data.deleted) {
                this.comments = this.comments.filter((item: CommentInterface) => item !== value);
                alert('comments successfully deleted');
            } else {
                alert('une erreur est survenue');
            }

        }).catch((err: AxiosError) => {
            alert('no internet connection');
        });
    }
}

