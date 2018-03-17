import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class NavbarComponent extends Vue {
    protected drawer: boolean;
    protected searched: string;

    constructor() {
        super();
        this.drawer = false;
        this.searched = '';
    }


    public search(): void {
        if (this.searched.trim().length !== 0) {
            this.$router.push(`/search/${this.searched.trim()}/`);
        }
    }

}

