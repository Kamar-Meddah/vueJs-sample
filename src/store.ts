import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const states = {
    IS_LOGGED: !!localStorage.getItem('token'),
};

const mutations = {
    LOGIN: (state: any) => {
        state.IS_LOGGED = true;
    },
    LOGOUT: (state: any) => {
        state.IS_LOGGED = false;
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
};

export default new Vuex.Store({
    state: states,
    mutations,
    actions,
    getters,
});
