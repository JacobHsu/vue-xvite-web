<template>
  <div class="trade-center-wrapper">
    {{ $t('lang') }}
    <layout></layout>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import layout from './layout';
export default {
  name: 'Home',
  components: {
    layout,
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.trade-center-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.order-tab {
    margin-bottom: 10px;
    min-height: 300px;
}
</style>