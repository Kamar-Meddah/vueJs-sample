import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import PostInterface from '@/Models/PostInterface';

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
        return this.http.get(`/posts/last/${page}`);
    }

    public findByCategory(id: number, page: number): AxiosPromise<any> {
        return this.http.get(`/posts/lastByCatgory/${id}/${page}`);
    }

    public search(query: string, page: number): AxiosPromise<any> {
        return this.http.get(`posts/search/${query}/${page}`);
    }

    public find(id: number): AxiosPromise<PostInterface> {
        return this.http.get(`posts/find/${id}`);
    }

}
