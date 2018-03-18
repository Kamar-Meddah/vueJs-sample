import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from '@/Services/auth.service';
import ServicesFactory from '@/Services/services.factory';
import {AxiosError, AxiosResponse} from 'axios';

@Component({})
export default class SignupComponent extends Vue {

    private username: string;
    private password: string;
    private confirmPassword: string;
    private email: string;
    private valid: boolean;
    private loading: boolean;
    private authService: AuthService;

    constructor() {
        super();
        this.authService = ServicesFactory.getInstance().getAuthSrvice();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.username = '';
        this.valid = false;
        this.loading = false;
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

    public checkUsername(input: string): boolean | string {
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

    public signup(): void {
        if (this.valid) {
            this.loading = true;
            this.authService.signup(this.username, this.password, this.email)
                .then((data: AxiosResponse<{ created: string | boolean }>) => {
                    this.loading = false;
                    if (data.data.created === true) {
                        alert('Account successfully created');
                        this.$router.push('/auth/signin');
                    } else {
                        alert(data.data.created);
                    }
                })
                .catch((err: AxiosError) => {
                    if (err) {
                        alert('no internet connection');
                    }
                });
        } else {
            alert('Invalid Form.');
        }
    }
}

