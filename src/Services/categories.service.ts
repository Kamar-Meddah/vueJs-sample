import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';

export default class CatgeoriesService {

    public static getInstance(): CatgeoriesService {
        if (CatgeoriesService.instance === undefined) {
            CatgeoriesService.instance = new CatgeoriesService();
        }
        return CatgeoriesService.instance;
    }

    private static instance: CatgeoriesService;

    private constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public all(): AxiosPromise<any> {
        return this.http.get(`/categories/all`);
    }

}
