import Vue from 'vue';
import Vuetify from 'vuetify';
import AppComponent from './App.component';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(AppComponent),
}).$mount('#app');
