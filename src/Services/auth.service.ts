import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';
import UserModel from '@/Models/user.model';
import jwtDecode from 'jwt-decode';

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

    public decodeToken(): any {
        if (localStorage.getItem('token') !== null) {
            return jwtDecode(localStorage.getItem('token') as string);
        } else {
            return {role: null};
        }
    }

    public isAdmin(): boolean {
        return this.decodeToken().role === 'admin';
    }

    public isLogged(): boolean {
        return localStorage.getItem('token') !== null;
    }


}
