<template>
    <div class="token __pointer">
        <tx-pair-info :showDetail="showDetail"></tx-pair-info>
    </div>
</template>

<script>

import txPairInfo from './txPairInfo.vue';

export default {
    components: { txPairInfo },
    methods: {
        showDetail(tab = 'token') {
            this.$refs.detailConfirm.tab = tab;
        }
    }
};
</script>

<style lang="scss" scoped>
.token {
    position: relative;
    white-space: nowrap;
    max-width: 250px;
}
</style>
