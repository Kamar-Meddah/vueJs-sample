import Vue from 'vue';
import Vuetify from 'vuetify';
import AppComponent from './App.component';

import router from './router';
import Meta from 'vue-meta';
import store from './store';
import './registerServiceWorker';

Vue.use(Meta);
Vue.use(Vuetify);

Vue.config.productionTip = true;
new Vue({
    router,
    store,
    render: (h) => h(AppComponent),
}).$mount('#app');
