import { ViteXAPI } from './apiServer';

export function operatorTradepair({ tradeToken, quoteToken }) {
    return ViteXAPI.request({
        path: '/operator/tradepair',
        method: 'GET',
        params: { tradeToken, quoteToken }
    });
}
