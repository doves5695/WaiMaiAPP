/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import shopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import shopFoods from '../pages/Shop/ShopFoods/ShopFoods.vue'
import shopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    }, {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/foods',
          component: shopFoods
        }, {
          path: '/shop/ratings',
          component: shopRatings
        }, {
          path: '/shop/info',
          component: shopInfo
        }, {
          path: '',
          redirect: '/shop/foods'
        }
      ]
    }
  ]
})
