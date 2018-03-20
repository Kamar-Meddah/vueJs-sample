import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import CommentModel from '@/Models/comment.model';
import ServicesFactory from '@/Services/services.factory';

export default class CommentsService {


    private static instance: CommentsService;

    public constructor(private http = HTTP) {
        if (localStorage.getItem('token') !== null) {
            this.http.defaults.headers.common.Authorization = localStorage.getItem('token');
        }
    }

    public post(comment: string, post_id: number): AxiosPromise<any> {
        const user_id: number = ServicesFactory.getInstance().getAuthService().decodeToken().sub as number;
        return this.http.post(`/comments/post`, new CommentModel(comment, post_id, user_id));
    }

    public findAll(id: number): AxiosPromise<any> {
        return this.http.get(`comments/post/${id}`);
    }

    public delete(id: number): AxiosPromise {
        return this.http.delete(`comments/${id}`);
    }

}
