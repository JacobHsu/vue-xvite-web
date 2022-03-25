<template>
    <div class="txpair-head-wrapper">
        <div class="content">
            <token class="token-wrapper"></token>
            txpair-head-wrapper
        </div>
    </div>
</template>


<script>

import token from './token';


export default {
    components: { token },
    data() {
        return { isShowTxPair: false };
    },
    computed: {
        activeTxPair() {
            return this.$store.getters.exActiveTxPair;
        },
        upDownPrev() {
            return this.activeTxPair ? this.activeTxPair.upDownPrev : '0';
        },
        upDown() {
            return this.activeTxPair ? this.activeTxPair.upDown : 0;
        },
        upDownIcon() {
            if (this.upDown && +this.upDown > 0) {
                return '+';
            }
            return '';
        },
        realPrice() {
            return this.$store.getters.activeTxPairRealClosePrice;
        },
        ftokenDetail() {
            return this.$store.state.exchangeTokens.ftoken;
        }
    },
    watch: {
        // Update meta-description and meta-keywords for better seo.
        ftokenDetail(val = {}) {
            const { originalSymbol, overview = {}, name, gateway } = val;
            let keywords = [ 'Vite', 'VX', 'ViteX', 'ViteX Exchange', originalSymbol, name, gateway && gateway.name ];
            let description = '';
            keywords = keywords.filter(item => item);

            if (overview) {
                if (overview[this.$i18n.locale]) {
                    description = overview[this.$i18n.locale];
                } else if (overview.en) {
                    description = overview.en;
                }
                document.querySelector('meta[name="description"]').setAttribute('content', description);
            }

            document.querySelector('meta[name="keywords"]').setAttribute('content', keywords.join(','));
        }
    },
    methods: {
        showTxPair() {
            this.isShowTxPair = true;
        },
        hideTxPair() {
            this.isShowTxPair = false;
        }
    }
};
</script>


<style lang="scss" scoped>
@import '../center.scss';

.txpair-head-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 14px 5px;
    @include font-family-bold();
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    align-items: center;
    [data-theme="0"] & {
        background: rgba(247,249,251,1);
    }
    [data-theme="1"] & {
        background: $black-color-1;
    }
    .content {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        .token-wrapper {
            padding-top: 8px;
            min-width: 250px;
            margin-right: 20px;
        }
        .else-wrapper {
            padding-top: 8px;
            display: flex;
            flex-direction: row;
            flex: 1;
        }
        .token-title {
            white-space: nowrap;
            @include font-family-normal();
            [data-theme="0"] & {
                color: #5e6875;
            }
            [data-theme="1"] & {
                color: #545F75;
            }
        }
        .token-content {
            font-family: $font-H;
            margin-top: 4px;
            font-weight: 600;
            @include font_color_1();
            &.down {
                color: $down-font-color;
            }
            &.up {
                color: $up-font-color;
            }
            .price {
                color: $blue;
            }
        }
        .item-left {
            margin-left: 20px;
        }
    }

}
</style>
