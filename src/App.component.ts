import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarComponent from '@/Components/Navbar/navbar.component';
import FooterComponent from '@/Components/Footer/footer.component';

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
    public snackbar: boolean = false;
}
