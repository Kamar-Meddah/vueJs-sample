import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';

export default class CommentsService {


    private static instance: CommentsService;

    public constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public post(comment: string): AxiosPromise<any> {
        return this.http.post(`/comments/`, {content: comment, user_id: 1});
    }

    public findAll(id: number): AxiosPromise<any> {
        return this.http.get(`comments/post/${id}`);
    }

}
