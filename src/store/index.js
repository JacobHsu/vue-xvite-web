import Vue from 'vue';
import vuex from 'vuex';

import envVariableStore from './envVariable';

Vue.use(vuex);

const store = new vuex.Store();

store.registerModule('env', envVariableStore);

export default store;
