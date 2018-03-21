import PostsService from '@/Services/posts.service';
import CategoriesService from '@/Services/categories.service';
import CommentsService from '@/Services/comments.service';
import AuthService from '@/Services/auth.service';
import UsersService from '@/Services/users.service';

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
    private usersService: UsersService | undefined;

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

    public getAuthService(): AuthService {
        if (this.authService === undefined) {
            this.authService = new AuthService();
        }
        return this.authService;
    }

    public getUsersService(): UsersService {
        if (this.usersService === undefined) {
            this.usersService = new UsersService();
        }
        return this.usersService;
    }


}
