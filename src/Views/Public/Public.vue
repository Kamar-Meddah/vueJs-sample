<template>
    <div class="public">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Public extends Vue {
    }
</script>