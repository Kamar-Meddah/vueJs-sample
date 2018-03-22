import Vue from 'vue';
import Vuex from 'vuex';
import * as JwtDecode from 'jwt-decode';
import UserInterface from '@/Models/UserInterface';

Vue.use(Vuex);

const states = {
    IS_LOGGED: !!localStorage.getItem('token'),
    TOKEN: localStorage.getItem('token'),
    IS_LOGGED_AS_ADMIN:
        localStorage.getItem('token') === null ?
            false : (JwtDecode(localStorage.getItem('token') as string) as UserInterface).role === 'admin',
};

const mutations = {
    LOGIN: (state: any, token: string) => {
        state.IS_LOGGED = true;
        state.IS_LOGGED_AS_ADMIN = (JwtDecode(token) as UserInterface).role === 'admin';
        state.TOKEN = token;
    },
    LOGOUT: (state: any) => {
        state.IS_LOGGED = false;
        state.IS_LOGGED_AS_ADMIN = false;
        state.TOKEN = null;
    },
};

const actions = {
    login: (store: any, token: string) => {
        localStorage.setItem('token', token);
        store.commit('LOGIN', token);
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
    token: (state: any) => {
        return state.TOKEN;
    },
};

export default new Vuex.Store({
    state: states,
    mutations,
    actions,
    getters,
});
