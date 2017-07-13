// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'

import '../static/reset.css'
import { Button, Select,Row,Col,Carousel,CarouselItem, Input, Pagination} from 'element-ui'



Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Pagination)

/* eslint-disable no-new */
new Vue({
  el:'#app',
  render:h => h(app),
  router
})
