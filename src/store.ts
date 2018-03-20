import Vue from 'vue';
import Vuex from 'vuex';
import ServicesFactory from '@/Services/services.factory';

const authService = ServicesFactory.getInstance().getAuthService();
Vue.use(Vuex);

const states = {
    IS_LOGGED: !!localStorage.getItem('token'),
    IS_LOGGED_AS_ADMIN: authService.isAdmin(),
};

const mutations = {
    LOGIN: (state: any) => {
        state.IS_LOGGED = true;
        state.IS_LOGGED_AS_ADMIN = authService.isAdmin();
    },
    LOGOUT: (state: any) => {
        state.IS_LOGGED = false;
        state.IS_LOGGED_AS_ADMIN = false;
    },
};

const actions = {
    login: (store: any, token: string) => {
        localStorage.setItem('token', token);
        store.commit('LOGIN');
    },
    logout: (store: any) => {
        localStorage.clear();
        store.commit('LOGOUT');
    },
};

const getters = {
    isLogged: (state: any) => {
        return state.IS_LOGGED;
    },
    isAdmin: (state: any) => {
        return state.IS_LOGGED_AS_ADMIN;
    },
};

export default new Vuex.Store({
    state: states,
    mutations,
    actions,
    getters,
});
