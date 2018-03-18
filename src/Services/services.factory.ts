import PostsService from '@/Services/posts.service';
import CategoriesService from '@/Services/categories.service';
import CommentsService from '@/Services/comments.service';
import AuthService from '@/Services/auth.service';

export default class ServicesFactory {

    public static getInstance(): ServicesFactory {
        if (this.instance === undefined) {
            this.instance = new ServicesFactory();
        }
        return this.instance;
    }

    private static instance: ServicesFactory | undefined;
    private postsService: PostsService | undefined;
    private categoriesService: CategoriesService | undefined;
    private authService: AuthService | undefined;
    private commentsService: CommentsService | undefined;

    private constructor() {
    }

    public getPostsService(): PostsService {
        if (this.postsService === undefined) {
            this.postsService = new PostsService();
        }
        return this.postsService;
    }

    public getCategoriesService(): CategoriesService {
        if (this.categoriesService === undefined) {
            this.categoriesService = new CategoriesService();
        }
        return this.categoriesService;
    }

    public getCommentsService(): CommentsService {
        if (this.commentsService === undefined) {
            this.commentsService = new CommentsService();
        }
        return this.commentsService;
    }

    public getAuthSrvice(): AuthService {
        if (this.authService === undefined) {
            this.authService = new AuthService();
        }
        return this.authService;
    }

}
