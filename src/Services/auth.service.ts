import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';

export default class AuthService {

    public constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public signup() {
        //
    }

}
