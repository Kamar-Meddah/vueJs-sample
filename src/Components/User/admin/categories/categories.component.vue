<template>
    <div class="categories">
        <router-view></router-view>
    </div>

</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Route} from 'vue-router';

    @Component({})
    export default class CategoriesComponent extends Vue {
        private beforeRouteEnter(to: Route, from: Route, next: (arg?: string | boolean) => void) {
            if (to.name === 'categories') {
                next('user/admin/categories/home');
            } else {
                next();
            }
        }
    }


</script>
