import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import UserModel from '@/Models/user.model';
import jwtDecode from 'jwt-decode';
import Store from '@/store';

export default class AuthService {

    public constructor(private http = HTTP, private store = Store) {
    }

    public signup(username: string, password: string, email: string): AxiosPromise<{ created: boolean | string }> {
        return this.http.post(`users/signup`, new UserModel(username, password, email));
    }

    public signin(username: string, password: string): AxiosPromise {
        return this.http.post(`auth/login`, new UserModel(username, password));
    }

    public checkToken(): AxiosPromise {
        return this.http.post('auth/check', {token: this.store.getters.token});
    }

    public decodeToken(): any {
        try {
            return jwtDecode(this.store.getters.token);
        } catch (e) {
            return null;
        }
    }

    public isLogged(): boolean {
        return this.store.getters.token !== null;
    }

    public isAdmin(): boolean {
        return this.store.getters.isLogged === true;
    }

    public logout(): AxiosPromise<{ disconnected: boolean }> {
        this.setAuthorisation();
        return this.http.put('auth/logout');
    }

    public checkEmail(email: string): AxiosPromise {
        return this.http.put('auth/checkEmail', {email});
    }

    public resetPassword(token: string, pass: string): AxiosPromise {
        return this.http.put('auth/reset', {code: token, password: pass});
    }

    private setAuthorisation(): void {
        this.http.defaults.headers.common.Authorization = this.store.getters.token;
    }


}
