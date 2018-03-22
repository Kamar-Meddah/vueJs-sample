import Vue from 'vue';
import Component from 'vue-class-component';
import UsersService from '@/Services/users.service';
import ServicesFactory from '@/Services/services.factory';
import {AxiosError, AxiosResponse} from 'axios';

@Component({})
export default class PasswordEditComponent extends Vue {

    private newPassword: string;
    private oldPassword: string;
    private loading: boolean;
    private valid: boolean;
    private usersService: UsersService;

    constructor() {
        super();
        this.newPassword = '';
        this.oldPassword = '';
        this.loading = false;
        this.valid = false;
        this.usersService = ServicesFactory.getInstance().getUsersService();
    }

    private checkPassword(input: string): string | boolean {
        if (input.length === 0) {
            return 'Required.';
        }
        if (input.length < 4) {
            return 'Password should be at least 4 charaters.';
        }
        if (this.newPassword === this.oldPassword) {
            return 'Old Password should not be equal to new Password.';
        }
        return true;
    }


    private edit(): void {
        if (this.valid) {
            this.loading = true;
            this.usersService.editPassword(this.newPassword, this.oldPassword)
                .then((res: AxiosResponse) => {
                    this.loading = false;
                    if (!res.data.updated) {
                        alert(res.data.message);
                    } else {
                        this.newPassword = '';
                        this.oldPassword = '';
                        alert(res.data.message);
                    }
                })
                .catch((err: AxiosError) => {
                    alert('no internetConnection');
                });
        } else {
            alert('Input is not valid');
        }
    }
}

