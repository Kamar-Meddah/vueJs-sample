import axios, {AxiosPromise} from 'axios';
import {Config} from '@/Config';
import Post from '@/Models/PostInterface';

export default class PostsService {

    public static getInstance(): PostsService {
        if (PostsService.instance === undefined) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }

    private static instance: PostsService;

    private constructor(private http = axios) {
    }


    public all(): AxiosPromise<Post> {
        return this.http.get(`${Config.HOST}/posts/all`);
    }

}
