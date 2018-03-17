import UserInterface from '@/Models/UserInterface';

export default class UserModel implements UserInterface {

    public username: string = '';
    public password: string = '';
    public token: string = '';
    public role: string = '';
    public email: string = '';
    public created_at: string = '';

}
