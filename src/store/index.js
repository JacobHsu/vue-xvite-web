import Vue from 'vue';
import vuex from 'vuex';

import envVariableStore from './envVariable';
import exchange from './exchange/index';

Vue.use(vuex);

const store = new vuex.Store();

store.registerModule('env', envVariableStore);

for (const moduleName in exchange) {
    store.registerModule(moduleName, exchange[moduleName]);
}

export default store;
