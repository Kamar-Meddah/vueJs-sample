import Vue from 'vue';
import Component from 'vue-class-component';
import AuthService from '@/Services/auth.service';
import ServicesFactory from '@/Services/services.factory';
import {AxiosError, AxiosResponse} from 'axios';

@Component({})
export default class NavbarComponent extends Vue {
    protected drawer: boolean;
    protected searched: string;
    protected isLogged: boolean;
    protected isAdmin: boolean;
    protected authService: AuthService;

    constructor() {
        super();
        this.drawer = false;
        this.searched = '';
        this.isLogged = false;
        this.isAdmin = false;
        this.authService = ServicesFactory.getInstance().getAuthService();
    }


    public search(): void {
        if (this.searched.trim().length !== 0) {
            this.$router.push(`/search/${this.searched.trim()}/`);
        }
    }

    public mounted() {
        this.init();
    }

    private init(): void {
        this.isLogged = this.$store.getters.isLogged;
        this.isAdmin = this.$store.getters.isAdmin;
    }

    private logout(): void {
        this.authService.logout()
            .then((res: AxiosResponse<{ disconnected: boolean }>) => {
                if (res.data.disconnected) {
                    alert('Successfully Disconnected');
                    this.$store.dispatch('logout');
                    this.$router.push('/');
                } else {
                    alert('An Error occurred try again or refresh the page');
                }
            })
            .catch((err: AxiosError) => {
                alert('No Internet Connection');
            });
    }


}

