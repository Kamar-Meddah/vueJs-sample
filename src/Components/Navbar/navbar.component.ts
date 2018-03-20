import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class NavbarComponent extends Vue {
    protected drawer: boolean;
    protected searched: string;
    protected isLogged: boolean;

    constructor() {
        super();
        this.drawer = false;
        this.searched = '';
        this.isLogged = false;
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
    }

    private logout(): void {
        this.$store.dispatch('logout');
        this.$router.push('/');
    }


}

