import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import UserModel from '@/Models/user.model';

export default class AuthService {

    public constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public signup(username: string, password: string, email: string): AxiosPromise<{ created: boolean | string }> {
        return this.http.post(`users/signup`, new UserModel(username, password, email));
    }

    public signin(username: string, password: string): AxiosPromise {
        return this.http.post(`auth/login`, new UserModel(username, password));
    }

    public checkToken(token: string | null): AxiosPromise {
        return this.http.post('auth/check', {token});
    }

}
