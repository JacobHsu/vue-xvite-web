<template>
  <div class="trade-center-wrapper">
    <layout>
      <center-view slot="lb2"></center-view>
    </layout>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import layout from './layout';
import centerView from './view/view.vue';
export default {
  name: 'Home',
  components: {
    layout,
    centerView,
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