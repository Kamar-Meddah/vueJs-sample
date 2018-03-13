import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarComponent from '@/Components/Navbar/navbar.component';

@Component({
    components: {
        navbar: NavbarComponent,
    },
    metaInfo: {
        title: 'Blog', // set a title
    },
})
export default class AppComponent extends Vue {
}

