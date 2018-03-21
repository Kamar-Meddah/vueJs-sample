import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import CategoryInterface from '@/Models/CategoryInterface';

export default class CatgeoriesService {

    public constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public all(): AxiosPromise<CategoryInterface[]> {
        return this.http.get(`/categories/all`);
    }

}
