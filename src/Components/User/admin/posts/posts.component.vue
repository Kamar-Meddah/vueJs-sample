<template>
    <div class="posts">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Route} from 'vue-router';

    @Component({})
    export default class PostsComponent extends Vue {

        private beforeRouteEnter(to: Route, from: Route, next: (arg?: string | boolean) => void) {
            if (to.name === 'admin_posts') {
                next('user/admin/posts/home');
            } else {
                next();
            }
        }

    }
</script>
