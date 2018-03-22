import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import Store from '@/store';
import CategoryInterface from '@/Models/CategoryInterface';
import CategoryModel from '@/Models/category.model';

export default class CategoriesService {

    public constructor(private http = HTTP, private store = Store) {
    }

    public all(): AxiosPromise<CategoryInterface[]> {
        return this.http.get(`/categories/all`);
    }

    public allPaginated(page: number): AxiosPromise<CategoryInterface[]> {
        return this.http.get(`/categories/all/${page}`);
    }

    public remove(id: number): AxiosPromise<any> {
        this.setAuthorisation();
        return this.http.delete(`/categories/${id}`);
    }

    public update(id: number, title: string): AxiosPromise {
        this.setAuthorisation();
        return this.http.put(`/categories`, new CategoryModel(title, id));
    }

    public create(title: string): AxiosPromise {
        this.setAuthorisation();
        return this.http.post(`/categories`, new CategoryModel(title, 0));
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }


}
