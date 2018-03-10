import Vue from 'vue';
import Component from 'vue-class-component';
import NavbarComponent from '@/components/navbar/navbar.component';

@Component({
    components: {
        navbar: NavbarComponent,
    },
})
export default class AppComponent extends Vue {
}

