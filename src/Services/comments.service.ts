import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import CommentModel from '@/Models/comment.model';
import ServicesFactory from '@/Services/services.factory';
import CommentInterface from '@/Models/CommentInterface';
import Store from '@/store';

export default class CommentsService {


    public constructor(private http = HTTP, private store = Store) {
    }

    public post(comment: string, post_id: number): AxiosPromise<any> {
        this.setAuthorisation();
        const user_id: number = ServicesFactory.getInstance().getAuthService().decodeToken().sub as number;
        return this.http.post(`/comments/post`, new CommentModel(comment, post_id, user_id));
    }

    public findAll(id: number): AxiosPromise<CommentInterface[]> {
        return this.http.get(`comments/post/${id}`);
    }

    public delete(id: number): AxiosPromise {
        this.setAuthorisation();
        return this.http.delete(`comments/${id}`);
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }
}
