import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class SignupComponent extends Vue {

    private username: string;
    private password: string;
    private confirmPassword: string;
    private email: string;
    private valid: boolean;

    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.username = '';
        this.valid = false;
    }

    public checkPassword(input: string): string | boolean {
        if (input.length === 0) {return 'Required'; }
        if (input.length < 4) {return 'Password should be at least 4 charaters'; }
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

    public checkUsername(input: string): string | boolean {
        if (input.length === 0) {
            return 'Required';
        }
        return true;
    }

    public checkEmail(input: string): string | boolean {
        if (input.length === 0) {
            return 'Required';
        }
        return true;
    }

    public signup(): void {
       alert(this.valid);
    }
}

