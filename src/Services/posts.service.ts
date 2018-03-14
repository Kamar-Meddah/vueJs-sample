
import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';

export default class PostsService {

    public static getInstance(): PostsService {
        if (PostsService.instance === undefined) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }

    private static instance: PostsService;

    private constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }


    public all(page: number): AxiosPromise<any> {
        return this.http.get(`/posts/allHome/${page}`);
    }

}
