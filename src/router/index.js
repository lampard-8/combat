/**
 * Created by shengxx on 2017/7/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home/home.vue'
import serve from '../components/serve/serve.vue'
import landing from '../components/landing/landing.vue'
import item from '../components/item/item.vue'
import details from '../components/details/details.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  linkActiveClass:'active',
  routes:[
    {
      path:'/',
      component:home,
    },
    {
      path:'/serve',
      component:serve
    },
    {
      path:'/item',
      component:item
    },
    {
      path:'/landing',
      component:landing
    },
    {
      path:'/details',
      component:details
    },
  ]


})
