<template>
    <div class="admin">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import ServicesFactory from '../../../Services/services.factory';
    import {Route} from 'vue-router';

    @Component({})
    export default class AdminComponent extends Vue {

        private beforeRouteEnter(to: Route, from: Route, next: (arg?: string | boolean) => void) {
            if (ServicesFactory.getInstance().getAuthService().isAdmin()) {
                if (to.name === 'admin') {
                    next('/user/admin/home');
                } else {
                    next();
                }
            } else {
                next(false);
            }
        }
    }
</script>
