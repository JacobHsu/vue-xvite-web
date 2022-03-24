import commonStore from '@/store/common/index';
import activeTxPair from './activeTxPair';

export default {
    ...commonStore,
    exchangeActiveTxPair: activeTxPair
};
