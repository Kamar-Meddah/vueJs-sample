import UserInterface from '@/Models/UserInterface';

export default class UserModel implements UserInterface {

    public username: string = '';
    public password: string = '';
    public email: string = '';

    constructor(username: string, password: string= '', email: string = '') {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
