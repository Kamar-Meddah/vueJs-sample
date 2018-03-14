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


    public search() {
        return this.searched.trim().length !== 0;
    }

    public check(input: string) {
        return true;

    }
}

