import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarComponent from '@/Components/Navbar/navbar.component';
import FooterComponent from '@/Components/Footer/footer.component';
import AuthService from '@/Services/auth.service';
import ServicesFactory from '@/Services/services.factory';

@Component({
    components: {
        navbar: NavbarComponent,
        foot: FooterComponent,
    },
    metaInfo: {
        title: 'Blog', // set a title
    },
})
export default class AppComponent extends Vue {

    private authService: AuthService;

    constructor() {
        super();
        ServicesFactory.getInstance().getAuthService().isAdmin();
        this.authService = ServicesFactory.getInstance().getAuthService();
        if (this.$store.getters.isLogged) {
            this.authService.checkToken(localStorage.getItem('token')).then((res) => {
                if (!res.data.valid) {
                    this.$store.dispatch('logout');
                }
            });
        }
    }

}
