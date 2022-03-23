import Vue from 'vue'
import VueRouter from 'vue-router'

import routeConfig from './routes';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routeConfig.routes
})

export default router
