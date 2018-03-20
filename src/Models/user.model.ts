import UserInterface from '@/Models/UserInterface';

export default class UserModel implements UserInterface {

    public username: string = '';
    public password: string = '';
    public email: string = '';
    public id: number;

    constructor(username: string, password: string = '', email: string = '', id: number = 0) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.id = id;
    }
}
