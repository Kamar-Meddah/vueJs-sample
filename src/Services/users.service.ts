import {HTTP} from '@/Services/http-common';
import {AxiosPromise} from 'axios';

export default class UsersService {

    public constructor(private http = HTTP) {
    }

    public editPassword(newPassword: string, oldPassword: string): AxiosPromise {
        this.setAuthorisation();
        return this.http.put('users/password_reset', {new: newPassword, old: oldPassword});
    }

    private setAuthorisation(): void {
        if (localStorage.getItem('token') !== null) {
            this.http.defaults.headers.common.Authorization = localStorage.getItem('token');
        } else {
            this.http.defaults.headers.common.Authorization = null;
        }
    }

}
