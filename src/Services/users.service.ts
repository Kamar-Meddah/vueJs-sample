import {HTTP} from '@/Services/http-common';
import {AxiosPromise} from 'axios';
import Store from '@/store';

export default class UsersService {

    public constructor(private http = HTTP, private store = Store) {
    }

    public editPassword(newPassword: string, oldPassword: string): AxiosPromise {
        this.setAuthorisation();
        return this.http.put('users/password_reset', {new: newPassword, old: oldPassword});
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }

}
