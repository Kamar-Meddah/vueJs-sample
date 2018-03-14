<template>
    <div class="public">
        <transition name="route" mode="out-in" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Public extends Vue {
    }
</script>