<template>
    <div class="setting">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        metaInfo: {
            title: 'Setting',
        },
    })
    export default class SettingComponent extends Vue {
    }
</script>
