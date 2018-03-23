import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import Store from '@/store';

export default class ImagesService {


    public constructor(private http = HTTP, private store = Store) {
    }

    public delete(id: number): AxiosPromise {
        this.setAuthorisation();
        return this.http.delete(`images/${id}`);
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }
}
