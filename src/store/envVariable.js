import { storage as localStorage, constant } from '@/utils/store';

const {
    LangKey,
    GateKey,
    ThemeKey,
    AutoLogoutKey,
    currencyKey,
    CustomNodes,
    CurrentNode,
    PowLimit
} = constant;
const HideZeroAssets = constant.HideZeroAssets;

const theme = localStorage.getItem(ThemeKey);
let customNodes = localStorage.getItem(CustomNodes);
customNodes = Array.isArray(customNodes) ? customNodes : [];
const defaultNode = process.env.goViteServer;


const state = {
    clientStatus: -1,
    lang: '',
    currency: localStorage.getItem(currencyKey) || '',
    autoLogoutTime: localStorage.getItem(AutoLogoutKey) || 5,
    gate: +localStorage.getItem(GateKey) || 0,
    theme: theme === null ? 1 : +theme,
    lastPage: '',
    isShowCompliance: false,
    hideZeroAssets: +localStorage.getItem(HideZeroAssets) || 0,
    customNodes,
    officialNodes: [],
    currentNode: ''
};

const mutations = {
    setComplianceShow(state) {
        state.isShowCompliance = true;
    },
    setClientNetStatus(state, clientStatus) {
        state.clientStatus = clientStatus;
    },
    setLang(state, lang) {
        localStorage.setItem(LangKey, lang);
        state.lang = lang;
        if (!state.currency) {
            state.currency = 'usd';
        }
    },
    setGate(state, isOpen) {
        localStorage.setItem(GateKey, isOpen ? 1 : 0);
        state.gate = isOpen ? 1 : 0;
    },
    setTheme(state, theme) {
        localStorage.setItem(ThemeKey, theme);
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
    },
    setAutoLogoutTime(state, time) {
        localStorage.setItem(AutoLogoutKey, time);
        state.autoLogoutTime = time;
    },
    setLastPage(state, lastPage) {
        state.lastPage = lastPage;
    },
    setHideZeroAssets(state, isHide) {
        const _isHide = +isHide || 0;
        localStorage.setItem(HideZeroAssets, _isHide);
        state.hideZeroAssets = _isHide;
    },
    setOfficialNodes(state, nodes) {
        if (nodes.indexOf(defaultNode) === -1) {
            nodes.push(defaultNode);
        }
        state.officialNodes = nodes;
    },
    setCustomNodes(state, nodes) {
        state.customNodes = nodes;
    },
    setCurrentNode(state, node) {
        state.currentNode = node;
    },
    setPowLimit(state, powLimit) {
        localStorage.setItem(PowLimit, powLimit);
        state.powLimit = powLimit;
    }
};

const actions = {
    onNetStatus({ commit }) {
        window.addEventListener('online', () => {
            commit('setClientNetStatus', navigator.onLine);
        });
        window.addEventListener('offline', () => {
            commit('setClientNetStatus', navigator.onLine);
        });
    },
    addCustomNode({ commit, state }, newNode) {
        if (!newNode) return;
        const customNodes = state.customNodes
            .concat([newNode])
            .filter(item => item);
        commit('setCustomNodes', customNodes);
        localStorage.setItem(CustomNodes, customNodes);
    },
    deleteCustomNode({ commit }, node) {
        const customNodes = state.customNodes.filter(item => item !== node);
        commit('setCustomNodes', customNodes);
        localStorage.setItem(CustomNodes, customNodes);
    },
    changeNode({ commit }, node) {
        localStorage.setItem(CurrentNode, node);
        commit('setCurrentNode', node);
    }
};

const getters = {
    allRpcNodes(state) {
        const all = state.officialNodes.concat(state.customNodes);
        return Array.from(new Set(all));
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};
