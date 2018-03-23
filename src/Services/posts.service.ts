import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import Store from '@/store';

import PostInterface from '@/Models/PostInterface';

export default class PostsService {

    public constructor(private http = HTTP, private store = Store) {
    }

    public last(page: number): AxiosPromise<any> {
        return this.http.get(`/posts/last/${page}`);
    }

    public all(page: number): AxiosPromise<any> {
        this.setAuthorisation();
        return this.http.get(`/posts/all/${page}`);
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

    public remove(id: number): AxiosPromise<any> {
        this.setAuthorisation();
        return this.http.delete(`posts/${id}`);
    }

    public create(formData: FormData): AxiosPromise<any> {
        this.setAuthorisation();
        return this.http.post(`posts/`, formData);
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }

}
