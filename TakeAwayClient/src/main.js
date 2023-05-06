/*
 入口JS文件
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
// import VueLazyload from 'vue-lazyload'
import './mock/mockServer' // 加载mockServer
// import loadingImg from './common/imgs/loading.gif'

Vue.component(Button.name, Button)
// Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
//   loading: loadingImg
// })

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 用上vue-router
  store // 用上vuex
})
