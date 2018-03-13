import axios from 'axios';
import {Config} from '@/Config';
import {isUndefined} from 'util';

export default class PostsService {

    public static getInstance() {
        if (PostsService.instance === undefined) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }

    private static instance;

    private constructor(private http = axios) {
    }


    public all(): any {
        return this.http.get(`${Config.HOST}/posts/all`);
    }

}
