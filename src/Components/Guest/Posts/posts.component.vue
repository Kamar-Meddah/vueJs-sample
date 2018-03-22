<template>
    <div class="posts">
        <v-layout row wrap>
            <v-flex md8 sm12 xs12>
                <router-view></router-view>
            </v-flex>
            <v-flex md1 class="hidden-sm-and-down"></v-flex>
            <v-flex md3 class="hidden-sm-and-down">
                <categories></categories>
            </v-flex>
        </v-layout>
    </div>

</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import CategoriesComponent from '@/Components/Guest/Posts/Categories/categories.component';

    @Component({
        components: {
            categories: CategoriesComponent,
        },
    })
    export default class PostsComponent extends Vue {
    }

</script>