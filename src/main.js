import Vue from 'vue'
import App from './App.vue'

import router from "./router"
import store from "./store"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
 /**
  * this.$router
  * 对象方法：前进forward，后退back，跳转页面push，动态添加路由addRoutes
  * this.$route
  * 对象方法：当前页面的信息，相对路径path，元信息meta，页面名称name
  */
 // 让整个应用都有路由功能  this.$router  this.$route
 router,
 // 让整个应用都有路由功能  this.$store
 store,
 // this.$vuetify
 vuetify,
 render: h => h(App)
}).$mount('#app')
