<template>
    <div id="tv_chart_container" class="tradingview-widget-container">tradingview-widget-container</div>
</template>

<script>


export default {
    mounted() {
        this.init();
    },
    computed: {
        activeTxPair() {
            return this.$store.state.exchangeActiveTxPair.activeTxPair;
        },
        netStatus() {
            return this.$store.state.env.clientStatus;
        },
        theme() {
            return this.$store.state.env.theme;
        }
    },
    watch: {
        netStatus() {
            if (!this.netStatus) {
                return;
            }
            this.reinit();
        },
        theme() {
            this.reinit();
        }
    },
    data() {
        return { tvKline: null };
    },
    methods: {
        init() {
            console.log('init')
        },
        reinit() {
            this.tvKline && this.tvKline.remove();
            this.tvKline = null;
            this.init();
        }
    }
};
</script>

<style lang="scss" scoped>
.tradingview-widget-container {
    width: 100%;
    height: 100%;
}
</style>
