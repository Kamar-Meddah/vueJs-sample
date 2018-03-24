import Vue from 'vue';
import Component from 'vue-class-component';
import ServicesFactory from '@/Services/services.factory';
import AuthService from '@/Services/auth.service';
import {AxiosError, AxiosResponse} from 'axios';

@Component({
    metaInfo: {
        title: 'Recover Password',
    },
})
export default class PasswordResetComponent extends Vue {

    private e1: number;
    private code: string;
    private password: string;
    private confirmPassword: string;
    private email: string;
    private passwordInputValid: boolean;
    private emailInputValid: boolean;
    private codeInputValid: boolean;
    private loading: boolean;
    private authService: AuthService;

    constructor() {
        super();
        this.authService = ServicesFactory.getInstance().getAuthService();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.code = '';
        this.e1 = 0;
        this.passwordInputValid = false;
        this.emailInputValid = false;
        this.codeInputValid = false;
        this.loading = false;
    }

    public mounted() {
        if (this.$store.getters.isLogged) {
            this.$router.push('/user/home/');
            alert('Warning: Already Logged');
        }
    }

    public checkPassword(input: string): string | boolean {
        if (input.length === 0) {
            return 'Required';
        }
        if (input.length < 4) {
            return 'Password should be at least 4 charaters';
        }
        return true;
    }

    public checkConfirmPassword(input: string): string | boolean {
        if (input !== this.password) {
            return 'Do not match the password';
        }
        if (input.length === 0) {
            return 'Required';
        }
        return true;
    }

    public checkCode(input: string): boolean | string {
        if (input.length === 0) {
            return 'Required';
        }
        const pattern = /^[a-zA-Z0-9\-\.]+$/;
        return pattern.test(input) || 'User should\'nt contain special characters ';
    }

    public checkEmail(input: string): boolean | string {
        if (input.length === 0) {
            return 'Required';
        }
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(input) || 'Invalid e-mail.';
    }

    public sendRequest() {
        if (this.emailInputValid) {
            this.loading = true;
            this.authService.checkEmail(this.email)
                .then((res: AxiosResponse) => {
                    this.loading = false;
                    if (res.data.valid) {
                        this.e1 = 2;
                    } else {
                        alert('Not a valid email');
                    }
                })
                .catch((err: AxiosError) => {
                    alert('An Error Occurred, can not check');
                });
        } else {
            this.invalid();
        }
    }

    public sendToken() {
        if (this.codeInputValid) {
            this.e1 = 3;
        } else {
            this.invalid();
        }
    }

    public resetPassword() {
        if (this.passwordInputValid) {
            this.loading = true;
            this.authService.resetPassword(this.code, this.password)
                .then((res: AxiosResponse) => {
                    this.loading = false;
                    if (res.data.valid) {
                        alert('successfully changed');
                        this.$router.push('/auth/signin');
                    } else {
                        alert('Not a valid Code');
                        this.e1 = 2;
                    }
                })
                .catch((err: AxiosError) => {
                    alert('An Error Occurred, can not check');

                });
        } else {
            this.invalid();
        }
    }

    private invalid(): void {
        alert('Invalid Input');
    }

}

