<template>
    <div class="user">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ServicesFactory from '../../Services/services.factory';

    @Component({})
    export default class UserComponent extends Vue {

        private beforeRouteEnter(to: any, from: any, next: (arg?: any) => void) {
            if (ServicesFactory.getInstance().getAuthService().isLogged()) {
                next();
            } else {
                next(from);
            }
        }
    }
</script>
