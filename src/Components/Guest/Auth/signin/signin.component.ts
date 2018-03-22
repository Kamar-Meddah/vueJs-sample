import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from '@/Services/auth.service';
import ServicesFactory from '@/Services/services.factory';

@Component({})
export default class SigninComponent extends Vue {

    private username: string;
    private password: string;
    private valid: boolean;
    private loading: boolean;
    private authService: AuthService;

    constructor() {
        super();
        this.authService = ServicesFactory.getInstance().getAuthService();
        this.password = '';
        this.username = '';
        this.valid = false;
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

    public checkUsername(input: string): string | boolean {
        if (input.length === 0) {
            return 'Required';
        }
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(input)) {
            return true;
        } else {
            const usernamePattern = /^[a-zA-Z0-9\-\.]+$/;
            return usernamePattern.test(input) || 'User should\'nt contain special characters ';
        }
    }

    public signin() {
        if (this.valid) {
            this.authService.signin(this.username, this.password).then((res) => {
                if (res.data.token) {
                    this.$store.dispatch('login', res.data.token);
                    this.$router.push('/user/home');
                }
                alert(res.data.message);
            });
        } else {
            alert('form invalid');
        }
    }

}
